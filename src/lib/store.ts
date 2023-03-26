import { get, writable } from "svelte/store";

import { base } from "$app/paths";
import { animations } from "$lib/animations";
import type { AnimationOptions } from "$lib/animations";
import { Animator } from "$lib/animator";
import type { FrameOptions, ImageOptions } from "$lib/animator";

export const currentAnimation = (function () {
  const { subscribe, update } = writable<(typeof animations)[number]>(
    animations[0],
  );

  const change = (name: (typeof animations)[number]["name"]) => {
    update((current) => {
      if (name === current.name) {
        return current;
      }
      const next = animations.find((animation) => animation.name === name);
      if (!next) {
        return current;
      }

      return next;
    });
  };

  return { subscribe, change };
})();

export const imageOptions = (function () {
  const defaultUrl = `${base}/favicon.png`;

  const { subscribe, update } = writable<ImageOptions>({
    width: 64,
    height: 64,
    url: defaultUrl,
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

export const frameOptions = (function () {
  const { subscribe, update } = writable<FrameOptions>(undefined, (set) => {
    const unsubscribe = currentAnimation.subscribe((animation) => {
      set(animation.defaultFrameOptions);
    });

    return unsubscribe;
  });

  function change(updates: Partial<FrameOptions>) {
    update((options) => ({ ...options, ...updates }));
  }

  return { subscribe, change };
})();

export const animationOptions = (function () {
  const { subscribe, update } = writable<AnimationOptions>(undefined, (set) => {
    const unsubscribe = currentAnimation.subscribe((animation) => {
      set(animation.defaultRenderOptions);
    });

    return unsubscribe;
  });

  function change(updates: Partial<Omit<AnimationOptions, "name">>) {
    update((options) => ({ ...options, ...updates }));
  }

  return { subscribe, change };
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
          frame: get(frameOptions),
          animation: get(animationOptions),
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

    const frameOptionsValue = get(frameOptions);
    if (nextFrame >= frameOptionsValue.totalFrames) {
      nextFrame = frameOptionsValue.totalFrames - 1;
    }

    update((state) => ({ ...state, frame: nextFrame, running: true }));

    return animator
      .renderFrame(
        {
          image: get(imageOptions),
          frame: frameOptionsValue,
          animation: get(animationOptions),
        },
        nextFrame,
      )
      .finally(() => {
        update((state) => ({ ...state, running: false }));
      });
  }

  return { subscribe, changeCanvas, animate, renderFrame };
})();
