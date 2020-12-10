class WishList {
  constructor(id, title = "Wish List", item_count = 1, delivery_date = "December 25, 2020" ){
    this.id = id
    this.title = title
    this.item_count = item_count
    this.delivery_date = delivery_date
    // this.renderWishLists()
    this.renderLists()
  }

  listHtml() {
    return `
    <a href="wish_lists/${this.id}"><h2 class="header">${this.title}</h2></a>
    <p>Item Count: ${this.item_count}</p>
    <p>Delivery Date: ${this.delivery_date}</p>
    <button class="delete">DELETE THIS LIST</button>
    `
  }

  renderLists() {
    // renderWishLists() {
    const listCard = document.createElement('div')
    listCard.classList.add('list-card')
    listCard.id = this.id
    listCard.innerHTML += this.listHtml()
    // preMadeList.appendChild(listCard)
    listsContainer.appendChild(listCard)
    debugger
    listCard.addEventListener('click', e => {
      if (e.target.className.includes('delete')) this.deleteWishList(e)
    })
  }

  deleteWishList(e){
    debugger
    const id = parseInt(e.target.parentElement.id)
    fetch(`http://localhost:3000/wish_lists/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      document.getElementById('premade-list').removeChild(document.getElementById(id))
    })
  }

}