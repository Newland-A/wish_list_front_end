class WishList {
  constructor(title, item_count = 1, delivery_date = "December 25, 2020" ){
    this.title = title
    this.item_count = item_count
    this.delivery_date = delivery_date
    this.renderWishLists()
  }

  listHtml() {
    return `
    <a href="wish_lists/${this.id}"><h2 class="list-header">${this.title}</h2></a>
    <p>Item Count: ${this.item_count}</p>
    <p>Delivery Date: ${this.delivery_date}</p>
    <button class="random_list" id="random_list">Use This Ready Wish List</button>
    `
  }

  renderWishLists() {
    const listCard = document.createElement('div')
    listCard.classList.add('list-card')
    listCard.id = "list-card"
    listCard.innerHTML += this.listHtml()
    preMadeList.appendChild(listCard)
    listCard.addEventListener('click', e => {
      // if (e.target.className.includes('new_list')) this.newList(e)
    })
  }

  

  // deleteWishList(e){
  //   const id = parseInt(e.target.parentElement.id)
  //   fetch(`http://localhost:3000/wish_lists/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(() => {
  //     document.getElementById('your-list-card').removeChild(document.getElementById(id))
  //   })
  // }

}