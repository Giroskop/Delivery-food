let cartButton = document.getElementById('cart-button')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')

cartButton.onclick = function() {
  modal.classList.add('is-open')
}

close.onclick = function() {
  modal.classList.remove('is-open')
}


