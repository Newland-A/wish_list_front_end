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
    // listCard.addEventListener('click', e => {
    //   // if (e.target.className.includes('new_list')) this.newList(e)
    // })
  }























  
//    newListFormHtml(id, list_title) {
//     return `
//     <div data-id="${id}">
//       <p>List Title: ${list_title}</p>
//       <input type="text" name="name" id="item_name"placeholder="Name Your Item" />
//       <input type="text" name="color" id="item_color" placeholder="What color is it?" />
//       <input type="text" name="height" id="item_height" placeholder="How tall is it?" />
//       <input type="text" name="weight" id="item_weight" placeholder="How much does it weigh?" />
//       <input type="text" name="link" id="item_link" placeholder="Link to a picture of it" />
//       <input type="text" name="description" id="item_description" placeholder="Write a description of the Wish" />
//       <input type="text" name="price" id="item_price" placeholder="How much does it cost?" />
//       <button class="add_item" id="add_item">Add Item To List</button>
//     </div>
//     `
//   }

//  renderNestedForm(id, title) {
  
//   const nestedForm = document.createElement('form')
 
//   nestedForm.classList.add('nested-form')
//   nestedForm.id = this.id
//   nestedForm.innerHTML += this.newListFormHtml(id, title)
//   newWishList.appendChild(nestedForm)

// }

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