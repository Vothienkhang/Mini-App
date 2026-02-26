import EventEmitter from 'events';

const emitter = new EventEmitter();
emitter.setMaxListeners(99); // Set the maximum number of listeners to 99

export default emitter;