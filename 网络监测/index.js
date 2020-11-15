const state = window.navigator.onLine

if (state) {
  alert('在线的')
} else {
  alert('不在线')
}

//两个事件，联网就触发第一个，没网就立刻触发第二个
window.ononline = function () {
  alert('连接上了')
}
window.onoffline = function () {
  alert('掉线了')
}
