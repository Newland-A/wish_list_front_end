class WishList {
  constructor(id, title = "Wish List", item_count = 1, delivery_date = "December 25, 2020" ){
    this.id = id
    this.title = title
    this.item_count = item_count
    this.delivery_date = delivery_date
  }

 // // All Working features that can be added for later feature of things
  
  // deleteWishList(e){
  //   debugger //document.getElementById
  //   const id = parseInt(`${this.wish_list_id}`)
  //   fetch(`http://localhost:3000/wish_lists/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(() => {
  //     document.getElementById('wish-list-container').removeChild(document.getElementById(id))
  //   })
  // }

}  