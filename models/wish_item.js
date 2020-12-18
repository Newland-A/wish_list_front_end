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

    <h3 class="header" id="${this.id}">${this.name}</h3>
    <img src="${this.link}" width="100" />
    <p>Color: ${this.color}</p>
    <p>Height: ${this.height} inchs </p>
    <p>Weight: ${this.weight} lbs</p>
    <p>Link: ${this.link}</p>
    <p>Description: ${this.description}</p>
    <p>Price: $${this.price}.00</p>
    <p>Wish list id: ${this.wish_list_id}</p>
    <!-- <button class="edit_item" id="edit_item">Edit Item To List</button> -->
    <button class="delete">DELETE THIS LIST</button><br /><br />
    `
  }

  renderItems() {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item_card')
    itemCard.dataset.id = this.id
    itemCard.id = this.id
    itemCard.innerHTML += this.itemHTML()
    listDiv.appendChild(itemCard)
    itemCard.addEventListener('click', e => {
     
    //   if (e.target.className.includes('edit_item')) this.editItem(e)
        if (e.target.className.includes('delete')) this.deleteWishList(e)
    })
    
  }

  deleteWishList(){
      const listId = this.wish_list_id
    fetch(`http://localhost:3000/wish_lists/${listId}`, {
      method: 'DELETE'
    })
    .then(() => {
      document.getElementById('wish_list_container').removeChild(document.getElementById(`${listId}`))
    })
  }
  
  // showSingleItem(e) {
  // document.getElementById('').remove()
  // }
  // // Working features that can be added for later things
}

