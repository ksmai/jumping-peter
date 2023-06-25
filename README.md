# Jumping Peter

Jumping Peter is an application that generates dynamic GIF images from static images like user avatars. These GIF images are ideal for use in slack and similar applications as custom emojis.

Live demo: [https://ksmai.github.io/jumping-peter/](https://ksmai.github.io/jumping-peter/)

## Architecture

The UI is built with Svelte, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte). Once the user provides the image file and the corresponding options, the animator will start a `requestAnimationFrame` loop on the main thread to render the animation, frame by frame, with WebGL 2. Each frame is then added to a GIF encoder, which is based on the `image` crate for rust and compiled to WebAssembly. Since GIF encoding can easily take hundreds of milliseconds when the output image dimension is large (e.g. 1024 x 1024), we run it in a worker thread to disrupting interactivity of the page. When encoding is done, the worker emits a base64-encoded data URI to the main thread, which can then be displayed and downloaded. If debug mode is on, only a single frame will be rendered on the canvas each time, and the canvas itself will be displayed for direct inspection.

## Performance

Although `OffscreenCanvas` is useful to generate the GIF in a worker thread, it is not well supported by safari yet. We will keep using the main thread for rendering until it has better support. This means that our rendering speed will be limited by the frame rate. Fortunately, the objects that we render are very simple and can be easily done within a few milliseconds, so we should be able to render at least 60 frames per second. The real bottleneck is in the GIF encoder, which is why we need to use WebAssembly and run it inside a web worker. WebAssembly provides at least 2x performance improvement over using javascript encoders for large images. It also provides more flexibility to use more versatile libraries as most modules on npm target only node.js.

## How to add new animations?

1. Create a new animation in `src/lib/animations/{name}.ts` with the same interface as the other animations, such as `jumping.ts`, implementing new functionality as needed. 4 things are needed for each animation:

   1. name
   2. default options such as interval between each frame and total number of frames
   3. a list of edit options with their default values
   4. a `createSprites` function for rendering purpose

2. Register the animation in `src/lib/animations/index.ts`
3. Using the default options, generate a demo GIF file and save it as `static/demo-{name}.gif`
4. Update `README.md` to demonstrate the new animation
5. Update `tests/snapshots.spec.ts` and generate a snapshot for the new animation

## Supported animations

### jumping

![jumping](/static/demo-jumping.gif)

### extreme-speed

![extreme-speed](/static/demo-extreme-speed.gif)

### spinning

![spinning](/static/demo-spinning.gif)

### excited

![excited](/static/demo-excited.gif)

### expanding

![expanding](/static/demo-expanding.gif)

### tower

![tower](/static/demo-tower.gif)

### repeated

![repeated](/static/demo-repeated.gif)

### mirror

![mirror](/static/demo-mirror.gif)

### panic

![panic](/static/demo-panic.gif)

### rotating

![rotating](/static/demo-rotating.gif)

### party

![party](/static/demo-party.gif)

### parrot

![parrot](/static/demo-parrot.gif)

### wiggling

![wiggling](/static/demo-wiggling.gif)

### petrified-shattered

![petrified-shattered](/static/demo-petrified-shattered.gif)

### petrified-broken

![petrified-broken](/static/demo-petrified-broken.gif)

### firework

![firework](/static/demo-firework.gif)

## Development

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# create a production version of the app
npm run build

# preview the production build
npm run preview
```

## License

MIT
