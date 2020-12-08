class API {
  static addWishList() {
    fetch('http://localhost:3000/wish_lists')
    .then(resp => resp.json())
    .then(wish_lists => {
      wish_lists.forEach(wish_list => {
        const { id, title, item_count, delivery_date } = wish_list
        new WishList(id, title, item_count, delivery_date )
      })
    })
  }


 static addNewList(e) {
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
      renderNestedForm(title)
      document.getElementById('new-form').reset()
      })
  }

 
  static addWishItem() {
    fetch('http://localhost:3000/wish_items')
    .then(resp => resp.json())
    .then(wish_items => {
      wish_items.forEach(wish_item => {
        const { id, name, color, height, weight, link, description, price, wish_list_id } = wish_item
        new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
      })
    })
  } 

  static addYourList(e) {
    e.preventDefault()
    let list_item = {
      'title': e.target.title.value,
      'wish_item_attributes': [{
        'name': e.target.name.value,
        'color': e.target.color.value,
        'height': e.target.height.value,
        'weight': e.target.weight.value,
        'link': e.target.weight.value,
        'description': e.target.description.value,
        'price': e.target.price.value
          
            }]
    };
    fetch(WISHLIST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list_item)
    })
    .then(resp => resp.json())
    .then( wish_items => {
        debugger
        const {name, color, height, link, description, price} = wish_items
        // debugger
        new WishItem(name, color, height, weight, link, description, price)
        renderYourList(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price)
        document.getElementById('nested-form').reset()
        })  
  }
  // function addItem(e) {
  //   e.preventDefault()
  //   let item = {
  //     'name': e.target.name.value,
  //     'item_count': e.target.item_count.value,
  //     'wish_item_attributes': [{
  //       'name': e.target.name.value,
  //       'color': e.target.color.value,
  //       'height': e.target.height.value,
  //       'link': e.target.weight.value,
  //       'description': e.target.description.value,
  //       'price': e.target.price.value,
    
  //     }]
  //   };
  //   fetch(WISHLIST_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(list)
  //   })
  //   .then(resp => resp.json())
  //   .then(wish_lists => {
  //     const { id, name, item_count, delivery_date } = wish_lists
  //     new WishList(id, name, item_count, delivery_date )
  //     document.getElementById('new-form').reset()
  //     })
  // }

}