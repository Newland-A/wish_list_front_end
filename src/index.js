// API.addWishList()
// API.addWishItem()
document.addEventListener("DOMContentLoaded",function(){
  addWishList()
  addWishItem()
  document.getElementById('form').addEventListener('submit', addWishList())
})

const BASE_URL = "http://localhost:3000"
const WISHLIST_URL = `${BASE_URL}/wish_lists`
const WISHITEM_URL = `${BASE_URL}/wish_items`
const items_container = document.getElementById('wish-items-container')

function addWishList() {
      fetch(WISHLIST_URL)
      .then(resp => resp.json())
      .then(json => console.log(json))
      // .then(wish_lists => {
        // renderWishList(wish_lists)
        // wish_lists.forEach(wish_list => {
        //   const { id, name, item_count, delivery_date } = wish_list
        //   new WishList(id, name, item_count, delivery_date )
        // })
      // })
    }
  
  function addWishItem() {
      fetch(WISHITEM_URL)
      .then(resp => resp.json())
      .then(wish_items => {
        wish_items.forEach(wish_item => {
          const { id, name, color, height, weight, link, description, price, wish_list_id } = wish_item
          new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
        })
      })
  } 

  function renderWishItems() {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.id = this.id
    itemCard.innerHTML += this.itemHTML()
  }

  // function renderWishList(wish_lists) {
  //   let wishListContainer = document.getElementById('wish-list-container')


  //   let addBtn = document.createElement('button')
  //   addBtn.setAttribute('wish-list-id', `${wish_lists.id}`)
  //   addBtn.innerText = "Add Wish List"
  //   addBtn.addEventListener('click', (event) => {
  //   event.preventDefault()
  //     if (wish_lists.lists.length === 0 ) {
  //       addWishList(event)
  //     } else {
  //       console.log("You don't have any Wish Lists!")
  //     }
  //   })

  //   let ul = document.createElement('ul')

  //     for(const list of wish_lists ) {
  //       let li = document.createElement('li')
  //       li.innerText = `${list.name} - ${list.delivery_date}`
  //       ul.appendChild(li)
  //     }

    
  //   divCard.setAttribute('class', 'card')
  //   divCard.setAttribute('list-id', `${wish_lists.id}`)
  //   divCard.appendChild(addBtn, ul)
  //   wishListContainer.appendChild(divCard)
  //   return divCard
  // }

  // function addWishList(e) {
  //   e.preventDefault()
  //   let list = {
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

  