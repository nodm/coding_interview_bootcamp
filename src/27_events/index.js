// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  #handlers = new Map();

  // Register an event handler
  on(eventName, callback) {
    if (this.#handlers.has(eventName)) {
      this.#handlers.get(eventName).push(callback);
    } else {
      this.#handlers.set(eventName, [callback]);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.#handlers.has(eventName)) {
      return;
    }

    this.#handlers.get(eventName).forEach((callback) => callback(eventName));
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.#handlers.delete(eventName);
  }
}

module.exports = Events;
