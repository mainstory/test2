function save(name, value) {
   localStorage.setItem(name, value)
}
function get(name) {
   return localStorage.getItem(name)
}
function rem(name) {
   localStorage.removeItem(name)
}
function off() {
   localStorage.clear();
}



document.addEventListener('click', (event) => {
   const eventTarget = event.target 
   
   if (eventTarget.closest('[data-shop-update-btn]')) {
      rem('shopSaveItems')
      new Audio('audio/buttonclickrelease.mp3').play()


      alert('Магазин обновлён')
   }
   
})
