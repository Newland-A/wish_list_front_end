class WishItem {
  constructor(id, name, color, height, weight, link, description, price, wish_list_id) {
    this.id = id
    this.name = name
    this.color = color
    this.height = height
    this.weight = weight
    this.link = link
    this.description = description
    this.price = price
    this.wish_list_id = wish_list_id
    this.renderItems()
  }
 
itemHTML() {
    return `
    <h3 class="header">${this.name}</h3>
    <img src="${this.link}" width="100" />
    
    <p>Description: ${this.description}</p>
    <p>Price: $${this.price}.00</p>
    <p>Wish list id: ${this.wish_list_id}</p>
    
    <!-- <button class="delete">DELETE THIS ITEM</button><br /><br /> -->
    <!--<p>Color: ${this.color}</p>
    <p>Height: ${this.height} inchs </p>
    <p>Weight: ${this.weight} lbs</p>
    <p>Link: ${this.link}</p>-->
    `
  }

  renderItems() {
    const itemCard = document.createElement('div')
    const selectList = document.getElementById('list_card')
    itemCard.classList.add('item_card')
    itemCard.id = this.id  
    itemCard.innerHTML += this.itemHTML()
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.id = this.id
    deleteButton.innerText += 'Delete This Item Please'
    itemCard.appendChild(deleteButton)
    listCard.appendChild(itemCard)
    itemCard.addEventListener('click', e => {
        if (e.target.className.includes('delete')) this.deleteWishItem()
    })
  }

  deleteWishItem(){
    fetch(`http://localhost:3000/wish_items/${this.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      document.getElementById(`${this.id}`).parentNode.removeChild(document.getElementById(`${this.id}`))
    })
  }

}

