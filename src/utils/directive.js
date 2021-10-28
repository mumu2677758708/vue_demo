export const ScrollFixed = {
  lock(id) {
    const box = document.getElementById(id)
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    box.style.position = 'fixed'
    box.style.left = 0
    box.style.right = 0
    box.style.top = -1 * scrollTop + 'px'
  },
  unlock(id){
    const box = document.getElementById(id)
    const top = parseFloat(box.style.top)
    box.removeAttribute('style')
    document.body.scrollTop = document.documentElement.scrollTop = -1 * top
  }
}
export const copy = {
  bind: function(el, binding) {
    const options = binding.value
    const id = options.id
    const complete = options.complete
    console.log(el, 'el')
    console.log(binding, 'binding')
    el.addEventListener('click', function() {
      const dom = document.getElementById(id)
      if (dom && document.execCommand) {
        copyText(dom.innerHTML, complete)
      } else {
        complete && complete('复制失败')
      }
    }, false)
  }
}
function copyText(content, callback){
  var value = content.toString()
  var input = document.getElementById('input')
  if(!input) {
    input = document.createElement('input')
    input.id = 'input'
    input.style.position = 'absolute'
    input.style.top = '-1000px'
    input.style.zIndex = '-1000'
    input.readOnly = 'readOnly' // 防止ios聚焦触发键盘事件
    document.body.appendChild(input)
  }
  input.value = value
  // ios必须先选中文字且不支持 input.select();
  selectText(input, 0, value.length)
  var result = document.execCommand('Copy')
  var message = result ? '复制成功' : '复制失败'
  callback && callback(message)
  input.blur()
}
function selectText(input, startIndex, endIndex) {
  if (input.setSelectionRange) {
    input.setSelectionRange(startIndex, endIndex)
    input.focus()
  } else {
    var range = input.createTextRange()
    range.collapse(true)
    // 起始光标
    range.moveStart('character', startIndex)
    // 结束光标
    range.moveEnd('character', endIndex - startIndex)
    range.select()
  }
}