// 发布，订阅

class EventBus {
  constructor() {
    this.events = this.events || {};
  }
}

EventBus.prototype.emit = function (type, ...args) {
  let e;
  e = this.events[type];
  if (e instanceof Array) {
    for (let i = 0; i < e.length; i++) {
      e[i].apply(this, args);
    }
  }
};

EventBus.prototype.on = function (type, fun) {
  const e = this.events[type];
  if (!e) {
    this.events[type] = [fun];
  } else {
    e.push(fun);
  }
};

EventBus.prototype.off = function (type) {
  delete this.events[type];
};

export default new EventBus();

