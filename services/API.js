class API {

  static readList(){
  
    fetch('http://localhost:3000/wish_lists')
    .then(resp => resp.json())
    .then(wishLists => {
      wishLists.forEach(wishList => {
        const { id, title, item_count, delivery_date, wish_items } = wishList
        new WishList(id, title, item_count, delivery_date, wish_items)
      })
    })
  }

  static createList(e) {
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
    .then(newLists => {
      const { id, title } = newLists
      new WishList(id, title)
      document.getElementById('new-list-form').reset()
      })
    
  }

// static readItem() {
//     fetch('http://localhost:3000/wish_items')
//     .then(resp => resp.json())
//     .then(wish_items => {
//       wish_items.forEach(wish_item => {
//         const { id, name, color, height, weight, link, description, price, wish_list_id } = wish_item
//         new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
//       })
//     })
//   } 

 static createItems(e) {
    e.preventDefault()
    let list_item = {
        'name': e.target.name.value,
        'color': e.target.color.value,
        'height': e.target.height.value,
        'weight': e.target.weight.value,
        'link': e.target.link.value,
        'description': e.target.description.value,
        'price': e.target.price.value,
        'wish_list_id': e.target.dataset.id
    };
    fetch(WISHITEM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list_item)
    })
    .then(resp => resp.json())
    .then( list_items => {
        const {id, name, color, height, weight, link, description, price, wish_list_id } = list_items
        new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
        document.getElementById('nested_form').clear
    })    
  }
}