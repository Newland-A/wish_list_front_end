class API {

  // Wish List
// fetching information Read
  static readList() {
    // static addList() {
    fetch('http://localhost:3000/wish_lists')
    .then(resp => resp.json())
    .then(wish_lists => {
      wish_lists.forEach(wish_list => {
        const { id, title, item_count, delivery_date } = wish_list
        new WishList(id, title, item_count, delivery_date )
      })
    })
  }

// posting form to the dom and grabbing the attributes inputs, clearing form after submission

  static createList(e) {
  //  static addNewList(e) {
    e.preventDefault()
    let list = {
      'title': e.target.title.value,
    };
    fetch(WISHLIST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list)
    })
    .then(resp => resp.json())
    .then(wish_lists => {
      const { id, title} = wish_lists
      // debugger
      new WishList(id, title )
      renderNestedForm(id, title)
      document.getElementById('nested-form').addEventListener('submit', //API.addYourWishItems
      API.createItems
      )
      document.getElementById('nested-form').reset()
      })
  }

// //  Wish Items
// // fetching items
static readItem() {
// static addWishItem() {
    fetch('http://localhost:3000/wish_items')
    .then(resp => resp.json())
    .then(wish_items => {
      wish_items.forEach(wish_item => {
        const { id, name, color, height, weight, link, description, price, wish_list_id } = wish_item
        new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
      })
    })
  } 
// rendering the 
 static createItems(e) {
  // static addYourWishItems(e) {
    // debugger
    e.preventDefault()
    let list_item = {
      // 'title': e.target.title.value,
      // 'wish_item_attributes': [{
        'name': e.target.name.value,
        'color': e.target.color.value,
        'height': e.target.height.value,
        'weight': e.target.weight.value,
        'link': e.target.weight.value,
        'description': e.target.description.value,
        'price': e.target.price.value,
        'wish_list_id': e.target.dataset.id
          
            // }]
    };
    // debugger
    fetch(WISHITEM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list_item)
    })
    .then(resp => resp.json())
    .then( list_items => {
        // debugger
        const {id, name, color, height, weight, link, description, price, wish_list_id } = list_items
        debugger
        const title = document.getElementById('wish-title').innerText
        new WishItem(id, name, color, height, weight, link, description, price, wish_list_id, title)
        // debugger
        renderYourItemList(item_name, item_color, item_height, item_weight, item_link, item_description, item_price, wish_list_id, title)
        
        document.getElementById('nested-form').reset()
        })  
  }

}