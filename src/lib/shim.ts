// workaround to an annoying bug where vite tries to access document inside the worker
// https://github.com/vitejs/vite/issues/9879#issuecomment-1372112651
// eslint-disable-next-line
// @ts-ignore
self.document = {
  // eslint-disable-next-line
  // @ts-ignore
  currentScript: {
    src: location.origin + "/jumping-peter/_app/immutable/workers/",
  },
};
