//
const AM = {
  PI: Math.PI || 3.141592653589793,
  prefix: ['webkit', 'moz', 'o', 'ms'],
  fps: 60,
  t_ms: 1000 / 60,
  csPool: {},
  cSupport: !!document.createElement('canvas').getContext
}

// 兼容 requestAnimationFrame && cancelAnimationFrame
if (window.requestAnimationFrame) {
  AM.requestAF = window.requestAnimationFrame
  AM.cancelAF = window.cancelAnimationFrame
} else {
  let i = 0
  const len = AM.prefix.length
  while (i <= len) {
    if (AM.requestAF && AM.cancelAF) {
      break
    }
    if (i < len) {
      AM.requestAF = window[AM.prefix[i] + 'RequestAnimationFrame']
      AM.cancelAF = window[AM.prefix[i] + 'CancelRequestAnimationFrame']
    } else {
      AM.requestAF = function (callback) {
        return setTimeout(callback, AM.t_ms)
      }
      AM.cancelAF = function (timeAF) {
        timeAF && clearTimeout(timeAF)
      }
    }
    i++
  }
}

export default AM
