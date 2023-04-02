import { get, writable } from "svelte/store";

import { base } from "$app/paths";
import { ANIMATIONS } from "$lib/animations";
import type { FrameOptions } from "$lib/animations";
import { Animator } from "$lib/animator";
import type { ImageOptions } from "$lib/animator";

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

  function changeFrameOptions(updates: Partial<FrameOptions>) {
    update(({ animations, current }) => {
      const nextFrameOptions: FrameOptions = {
        ...current.frameOptions,
        ...updates,
      };
      const next: Animation = {
        ...current,
        frameOptions: nextFrameOptions,
      };

      return {
        animations: animations.map((animation) =>
          animation === current ? next : animation,
        ),
        current: next,
      };
    });
  }

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

  return {
    subscribe,
    changeCurrentAnimation,
    changeFrameOptions,
    changeEditOptions,
  };
})();

export const imageOptions = (function () {
  const defaultUrl = `${base}/favicon.png`;

  const { subscribe, update } = writable<ImageOptions>({
    width: 64,
    height: 64,
    url: defaultUrl,
    clearRed: 1,
    clearBlue: 1,
    clearGreen: 1,
  });

  function change(updates: Partial<Omit<ImageOptions, "url">>) {
    update((options) => ({ ...options, ...updates }));
  }

  function changeImage(file: File) {
    update((options) => {
      if (options.url !== defaultUrl) {
        URL.revokeObjectURL(options.url);
      }
      return {
        ...options,
        url: URL.createObjectURL(file),
      };
    });
  }

  return { subscribe, change, changeImage };
})();

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
      .animate(
        {
          image: get(imageOptions),
          animation: get(animations).current,
        },
        (frame) => update((state) => ({ ...state, frame })),
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

    const currentAnimation = get(animations).current;

    if (nextFrame >= currentAnimation.frameOptions.totalFrames) {
      nextFrame = currentAnimation.frameOptions.totalFrames - 1;
    }

    update((state) => ({ ...state, frame: nextFrame, running: true }));

    return animator
      .renderFrame(
        {
          image: get(imageOptions),
          animation: currentAnimation,
        },
        nextFrame,
      )
      .finally(() => {
        update((state) => ({ ...state, running: false }));
      });
  }

  return { subscribe, changeCanvas, animate, renderFrame };
})();
