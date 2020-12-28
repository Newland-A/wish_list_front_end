class WishList {
  constructor(id, title = "Wish List", item_count = 1, delivery_date = "December 25, 2020", wish_items){
    this.id = id
    this.title = title
    this.item_count = item_count
    this.delivery_date = delivery_date
    this.renderLists()
    this.wish_items = wish_items.map(wish_item => {
              const { id, name, color, height, weight, link, description, price, wish_list_id } = wish_item
              return new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
            })
  }

  listHTML() {
    return `
      <h2 class="list_title">${this.title}</h2>
    `
  }

  renderLists() {
    listCard.id = this.id
    listCard.classList.add('list_cards')
    listCard.innerHTML += this.listHTML()
    listContainer.appendChild(listCard)

    renderNestedForm(this.id, this.title)

  }
}
