export function getTime() {
  var time = new Date().toTimeString();
  return ('[' + time.substr(0,8) + ']');
}
