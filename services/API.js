// class API {
//   static addWishList() {
//     fetch('http://localhost:3000/wish_lists')
//     .then(resp => resp.json())
//     .then(wish_lists => {
//       wish_lists.forEach(wish_list => {
//         const { id, name, item_count, delivery_date } = wish_list
//         new WishList(id, name, item_count, delivery_date )
//       })
//     })
//   }

//   static addWishItem() {
//     fetch('http://localhost:3000/wish_items')
//     .then(resp => resp.json())
//     .then(wish_items => {
//       wish_items.forEach(wish_item => {
//         const { id, name, color, height, weight, link, description, price, wish_list_id } = wish_item
//         new WishItem(id, name, color, height, weight, link, description, price, wish_list_id)
//       })
//     })
//   } 
// }