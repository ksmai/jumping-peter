import "./shim";
import { GifEncoder } from "gif-encoder";

let encoder: GifEncoder | null = null;

interface Init {
  type: "Init";
  width: number;
  height: number;
  delayMs: number;
  quality: number;
}

interface AddFrame {
  type: "AddFrame";
  buffer: ArrayBuffer;
}

interface GetResult {
  type: "GetResult";
}

interface Ready {
  type: "Ready";
}

interface FrameAdded {
  type: "FrameAdded";
}

interface Success {
  type: "Success";
  dataUri: string;
}

interface Failure {
  type: "Failure";
  error: string;
}

export type Request = Init | AddFrame | GetResult;
export type Response = Ready | FrameAdded | Success | Failure;

self.onmessage = (e) => {
  const request = e.data as Request;

  switch (request.type) {
    case "Init":
      init(request);
      break;
    case "AddFrame":
      addFrame(request);
      break;
    case "GetResult":
      getResult(request);
      break;
    default:
      ((_: never) => {
        const failure: Response = {
          type: "Failure",
          error: `Unknown request: ${JSON.stringify(request)}`,
        };
        self.postMessage(failure);
      })(request);
  }
};

function init(request: Init) {
  if (encoder) {
    const failure: Response = { type: "Failure", error: "Already initialized" };
    self.postMessage(failure);
    return;
  }
  const { width, height, delayMs, quality } = request;
  encoder = GifEncoder.new(width, height, delayMs, quality);
}

function addFrame(request: AddFrame) {
  if (!encoder) {
    const failure: Response = { type: "Failure", error: "Not initialized" };
    self.postMessage(failure);
    return;
  }
  encoder.add_frame(new Uint8Array(request.buffer));
  const frameAdded: Response = { type: "FrameAdded" };
  self.postMessage(frameAdded);
}

function getResult(_request: GetResult) {
  if (!encoder) {
    const failure: Response = { type: "Failure", error: "Not initialized" };
    self.postMessage(failure);
    return;
  }
  const bytes = encoder.get_result();
  const reader = new FileReader();

  reader.onload = () => {
    reader.onload = null;
    reader.onerror = null;
    if (!reader.result) {
      const failure: Response = {
        type: "Failure",
        error: "Failed to read the bytes",
      };
      self.postMessage(failure);
      return;
    }
    const result = reader.result as string;
    const dataUri = "data:image/gif;base64," + result.split(",", 2)[1];
    const success: Response = {
      type: "Success",
      dataUri,
    };
    self.postMessage(success);
  };

  reader.onerror = () => {
    reader.onload = null;
    reader.onerror = null;
    const failure: Response = {
      type: "Failure",
      error: "Failed to read the bytes",
    };
    self.postMessage(failure);
    return;
  };

  reader.readAsDataURL(new Blob([bytes]));
}

const ready: Response = { type: "Ready" };
self.postMessage(ready);
