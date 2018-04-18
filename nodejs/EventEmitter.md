```javascript
const EventEmitter = require('events');

// 自定义个事件
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
// 监听event事件
myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});
// 触发event事件 - 并传递参数给listener
myEmitter.emit('event', 'a', 'b');

```


## Error Handler
> If an `EventEmitter` does not have at least one listener registered for the 'error' event, and an 'error' event is emitted, the error is thrown, a stack trace is printed, and the Node.js process exits.
```javascript
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
```