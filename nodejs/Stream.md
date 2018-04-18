# Stream in Node.js

## 基本概念
1. Stream 是可读或可写，或者见者兼备
2. 所有的Stream对象都是EventEmitter类的实例(如HttpServer中的request对象、process.stdout对象)


## 类型
1. Readable - streams from which data can be read (for example fs.createReadStream()).
2. Writable - streams to which data can be written (for example fs.createWriteStream()).
3. Duplex - streams that are both Readable and Writable (for example net.Socket).
4. Transform - Duplex streams that can modify or transform the data as it is written and read (for example zlib.createDeflate()).

**Both Writable and Readable streams will store data in an internal buffer that can be retrieved using writable.writableBuffer or readable.readableBuffer, respectively.**

## 用法

```javascript
const stream = require('stream');
```


## Pipe
> A key goal of the stream API, particularly the `stream.pipe()` method, is to limit the buffering of data to acceptable levels such that sources and destinations of differing speeds will not overwhelm(冲垮) the available memory.