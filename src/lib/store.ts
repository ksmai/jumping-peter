import { derived, get, writable } from "svelte/store";

import { ANIMATIONS } from "$lib/animations";
import { Animator } from "$lib/animator";

type Animation = (typeof ANIMATIONS)[number];

interface StoredAnimations {
  readonly animations: typeof ANIMATIONS;
  readonly current: Animation;
}

export const animations = (function () {
  const { subscribe, update } = writable<StoredAnimations>({
    animations: ANIMATIONS,
    current: ANIMATIONS[0],
  });

  const changeCurrentAnimation = (next: Animation) => {
    update((value) => {
      if (value.current === next) {
        return value;
      }
      const found = value.animations.find((animation) => animation === next);
      if (!found) {
        return value;
      }

      return { animations: value.animations, current: next };
    });
  };

  function changeEditOptions<
    T extends Animation,
    U extends T["editOptions"][number],
  >(editOption: U, value: U["value"]) {
    update(({ animations, current }) => {
      const next = {
        ...current,
        editOptions: current.editOptions.map((option) =>
          option === editOption ? { ...editOption, value } : option,
        ) as T["editOptions"],
      } as T;

      return {
        animations: animations.map((animation) =>
          animation === current ? next : animation,
        ),
        current: next,
      };
    });
  }

  function resetEditOptions<T extends Animation>() {
    update(({ animations, current }) => {
      const original = ANIMATIONS.find(
        (animation) => animation.name === current.name,
      ) as T;

      return {
        animations: animations.map((animation) =>
          animation === current ? original : animation,
        ),
        current: original,
      };
    });
  }

  return {
    subscribe,
    changeCurrentAnimation,
    changeEditOptions,
    resetEditOptions,
  };
})();

function createStore<
  K extends keyof (typeof ANIMATIONS)[number]["defaultOptions"],
  T extends (typeof ANIMATIONS)[number]["defaultOptions"][K],
>(
  key: K,
): {
  subscribe: ReturnType<typeof writable<T>>["subscribe"];
  change: (updates: Partial<T>) => void;
  reset: () => void;
} {
  let isDefault = true;

  const { subscribe, update } = writable<T>(undefined, (set) => {
    return animations.subscribe(({ current }) => {
      if (isDefault) {
        set(current.defaultOptions[key] as T);
      }
    });
  });

  function change(updates: Partial<T>) {
    update((options) => {
      isDefault = false;
      return {
        ...options,
        ...updates,
      };
    });
  }

  function reset() {
    update(() => {
      isDefault = true;
      return get(animations).current.defaultOptions[key] as T;
    });
  }

  return { subscribe, change, reset };
}

export const image = createStore("image");
export const output = createStore("output");
export const material = createStore("material");
export const directionalLight = createStore("directionalLight");
export const pointLight = createStore("pointLight");
export const spotLight = createStore("spotLight");
export const camera = createStore("camera");
export const projection = createStore("projection");

export const animationRequest = derived(
  [
    image,
    output,
    material,
    directionalLight,
    pointLight,
    spotLight,
    camera,
    projection,
    animations,
  ],
  ([
    image,
    output,
    material,
    directionalLight,
    pointLight,
    spotLight,
    camera,
    projection,
    animations,
  ]) => ({
    image,
    output,
    material,
    directionalLight,
    pointLight,
    spotLight,
    camera,
    projection,
    animation: animations.current,
  }),
);

interface AnimatorWrapper {
  animator: Animator | null;
  running: boolean;
  frame: number;
}

export const animator = (function () {
  const store = writable<AnimatorWrapper>({
    animator: null,
    running: false,
    frame: 0,
  });

  const { subscribe, update } = store;

  function changeCanvas(canvas: HTMLCanvasElement) {
    update((existing) => {
      existing.animator?.destroy();

      return {
        animator: new Animator(canvas),
        running: false,
        frame: 0,
      };
    });
  }

  function animate(): ReturnType<Animator["animate"]> {
    const { animator } = get(store);

    if (!animator) {
      return Promise.reject("Animator has not been created");
    }

    update((state) => ({ ...state, running: true, frame: 0 }));

    return animator
      .animate(get(animationRequest), (frame) =>
        update((state) => ({ ...state, frame })),
      )
      .finally(() => {
        update((state) => ({ ...state, running: false }));
      });
  }

  function renderFrame(
    requestedFrame?: number,
  ): ReturnType<Animator["renderFrame"]> {
    const { animator, frame } = get(store);

    if (!animator) {
      return Promise.reject("Animator has not been created");
    }

    let nextFrame: number;
    if (typeof requestedFrame === "undefined") {
      nextFrame = frame;
    } else {
      nextFrame = requestedFrame;
    }

    const request = get(animationRequest);

    if (nextFrame >= request.output.totalFrames) {
      nextFrame = request.output.totalFrames - 1;
    }

    update((state) => ({ ...state, frame: nextFrame, running: true }));

    return animator.renderFrame(request, nextFrame).finally(() => {
      update((state) => ({ ...state, running: false }));
    });
  }

  return { subscribe, changeCanvas, animate, renderFrame };
})();
