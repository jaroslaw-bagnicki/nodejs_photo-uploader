export function showTime(input) {
  if (typeof input === 'string') {
    return ('[' + getCurrentTime() + '] ' + input);
  } else return input;
}

function getCurrentTime() {
  var time = new Date().toTimeString();
  return time.substr(0,8);
}

// Extending String protype inspired by 'colors' package
Object.defineProperty(String.prototype, 'time', {
  get() { return showTime(this); }
});
