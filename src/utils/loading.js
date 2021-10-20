export default class Loading {
  constructor(className = 'loading', txt = 'loading...') {
    const _class = `.${className}`
    let element = document.querySelector(_class)
    if(!element) {
      const divEle = document.createElement('div')
      divEle.className = className
      divEle.innerHTML = txt
      document.body.appendChild(divEle)
    }
    this.dom = document.querySelector(_class)
    this.txt = txt
  }
  show(txt) {
    this.dom.style.display = ''
    this.dom.innerHTML = txt || this.txt
  }
  hide() {
    this.dom.style.display = 'none'
  }
}