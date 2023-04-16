use image::{codecs::gif, Delay, Frame, RgbaImage};
use std::{cell::RefCell, rc::Rc, time::Duration};
use wasm_bindgen::prelude::*;

struct MyWriter {
    buffer: Rc<RefCell<Vec<u8>>>,
}

impl MyWriter {
    fn new() -> MyWriter {
        MyWriter {
            buffer: Rc::new(RefCell::new(Vec::new())),
        }
    }
}

impl std::clone::Clone for MyWriter {
    fn clone(&self) -> MyWriter {
        MyWriter {
            buffer: Rc::clone(&self.buffer),
        }
    }
}

impl std::io::Write for MyWriter {
    fn write(&mut self, buf: &[u8]) -> std::io::Result<usize> {
        self.buffer.borrow_mut().write(buf)
    }

    fn flush(&mut self) -> std::io::Result<()> {
        self.buffer.borrow_mut().flush()
    }
}

#[wasm_bindgen]
pub struct GifEncoder {
    writer: MyWriter,
    encoder: gif::GifEncoder<MyWriter>,
    width: u32,
    height: u32,
    delay_ms: u64,
}

pub type ImageResult<T> = Result<T, &'static str>;

#[wasm_bindgen]
impl GifEncoder {
    pub fn new(width: u32, height: u32, delay_ms: u32, quality: i32) -> ImageResult<GifEncoder> {
        let writer = MyWriter::new();
        let mut encoder = gif::GifEncoder::new_with_speed(writer.clone(), 31 - quality);
        encoder
            .set_repeat(gif::Repeat::Infinite)
            .map_err(|_| "Failed to set repeat")?;
        Ok(GifEncoder {
            writer,
            encoder,
            width,
            height,
            delay_ms: delay_ms.into(),
        })
    }

    pub fn add_frame(&mut self, bytes: Vec<u8>) -> ImageResult<()> {
        let buffer = RgbaImage::from_raw(self.width, self.height, bytes)
            .ok_or("Failed to read bytes into buffer")?;
        let delay = Delay::from_saturating_duration(Duration::from_millis(self.delay_ms));
        let frame = Frame::from_parts(buffer, 0, 0, delay);
        self.encoder
            .encode_frame(frame)
            .map_err(|_| "Failed to encode frame")?;
        Ok(())
    }

    pub fn get_result(self) -> ImageResult<Vec<u8>> {
        std::mem::drop(self.encoder);
        Ok(Rc::try_unwrap(self.writer.buffer)
            .map_err(|_| "Failed to get result")?
            .into_inner())
    }
}
