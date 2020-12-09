class WishItem {
  constructor(id, name, color, height, weight, link, description, price, wish_list_id){
    this.id = id
    this.name = name
    this.color = color
    this.height = height
    this.weight = weight
    this.link = link
    this.description = description
    this.price = price
    this.wish_list_id = wish_list_id
    this.renderWishItems()
  }

  itemHTML() {
    return `
    <a href="wish_items/${this.id}"><h2 class="header">${this.name}</h2></a>
    <img src="${this.link}" width="100" />
    <p>Color: ${this.color}</p>
    <p>Height: ${this.height} inchs </p>
    <p>Weight: ${this.weight} lbs</p>
    <p>Link: ${this.link}</p>
    <p>Description: ${this.description}</p>
    <p>Price: $${this.price}.00</p>
    <button class="add_item" id="add_item">Add Item To List</button>
    `
  }

  renderWishItems() {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.id = this.id
    itemCard.innerHTML += this.itemHTML()
    itemsContainer.appendChild(itemCard)
    // itemCard.addEventListener('click', e => {
    //   if (e.target.className.includes('add_item')) this.addItem(e)
    // })
  }

  // yourListItemHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price) {
  //   return `
  //   <a href="wish_lists/${list_id}"><h2 class="list-header">${list_title}</h2></a>
  //   <p id="yl">Name: ${item_name}</p>
  //   <p id="yl">Color: ${item_color}</p>
  //   <p id="yl">Height: ${item_height}</p>
  //   <p id="yl">Weight: ${item_weight}</p>
  //   <o id="yl">Link: ${item_link}</p>
  //   <p id="yl">Description: ${item_description}</p>
  //   <p id="yl">Price: ${item_price}</p>
  //   <button class="delete">DELETE ME???</button>
  //   `
  // }
  
  // renderYourItemList() {
  //   const yourListCard = document.createElement('div')
  //   yourListCard.classList.add('your-list-card')
  //   yourListCard.id = "your-list-card"
  //   yourListCard.innerHTML += this.yourListItemHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price)
  //   yourLists.appendChild(yourListCard)
  // }
}

