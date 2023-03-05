# jumping-peter

jumping-peter is an application that generates dynamic GIF images from static images, e.g. user avatars. These GIF images are ideal for use in slack and similar applications as custom emojis.

Live demo: [https://ksmai.github.io/jumping-peter/](https://ksmai.github.io/jumping-peter/)

## Architecture

The UI is built with Svelte, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte). Once the user provides the image file and the corresponding options, the main thread will send these data to a web worker. The web worker runs an `OffscreenCanvas` and renders the animation, frame by frame, with WebGL. Each frame is added to a GIF encoder, which is eventually used to create the resulting GIF file. The GIF file is sent back to the main thread for display and download.

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
