const filterThousand = value => {
  // 方法一
  // var num = parseFloat(value)
  // return num.toLocaleString()
  // 方法二
  // var num = value + ''
  // var rgx = /(\d+)(\d{3})/
  // while(rgx.test(num)) {
  //   num = num.replace(rgx, '$1,$2')
  // }
  // return num
  // 方法三
  var str = value + ''
  var int = str.split('.')[0]
  var float = str.split('.')[1]
  var int_reverse = int.split('').reverse().join('')
  var newStr = int_reverse.replace(/(\d{3})/g, function() {
    console.log(arguments, 'arguments')
    return arguments[0] + ','
  })
  return newStr.split('').reverse().join('') + '.' + float
}
const filterNum = value => {
  console.log(value)
}
export default{
  filterThousand,
  filterNum
}