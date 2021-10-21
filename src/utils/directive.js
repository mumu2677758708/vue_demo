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