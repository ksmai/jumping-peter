import { writable } from "svelte/store";

import { base } from "$app/paths";
import { animations } from "$lib/animations";
import type { AnimationOptions } from "$lib/animations";
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
