import { get, writable } from "svelte/store";

import { base } from "$app/paths";
import { animations } from "$lib/animations";
import type { AnimationOptions } from "$lib/animations";
import { Animator } from "$lib/animator";
import type { GifOptions } from "$lib/animator";

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

export const gifOptions = (function () {
  const { subscribe, update } = writable<GifOptions>({
    width: 64,
    height: 64,
    delayMs: 50,
    totalFrames: 20,
    imageUrl: `${base}/favicon.png`,
  });

  function change(updates: Partial<GifOptions>) {
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
    const { running, animator } = get(store);

    if (!animator) {
      return Promise.reject("Animator has not been created");
    }

    if (running) {
      return Promise.reject("Animator is already running");
    }

    update((state) => ({ ...state, running: true, frame: 0 }));

    return animator
      .animate(
        {
          gif: get(gifOptions),
          animation: get(animationOptions),
        },
        (frame) => update((state) => ({ ...state, frame })),
      )
      .finally(() => {
        update((state) => ({ ...state, running: false }));
      });
  }

  function renderFrame(frame: number): ReturnType<Animator["renderFrame"]> {
    const { running, animator } = get(store);

    if (!animator) {
      return Promise.reject("Animator has not been created");
    }

    if (running) {
      return Promise.reject("Animator is already running");
    }

    update((state) => ({ ...state, frame, running: true }));

    return animator
      .renderFrame(
        {
          gif: get(gifOptions),
          animation: get(animationOptions),
        },
        frame,
      )
      .finally(() => {
        update((state) => ({ ...state, running: false }));
      });
  }

  return { subscribe, changeCanvas, animate, renderFrame };
})();
