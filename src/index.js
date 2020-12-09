document.addEventListener("DOMContentLoaded",function(){
  API.addWishList()
  API.addWishItem()
  document.getElementById('new-list-form').addEventListener('submit', API.addNewList
)
  

})


// Main URL AND QUERIES
const BASE_URL = "http://localhost:3000"
const WISHLIST_URL = `${BASE_URL}/wish_lists`
const WISHITEM_URL = `${BASE_URL}/wish_items`
const itemsContainer = document.getElementById('wish-items-container')
const yourListContainer = document.getElementById('your-list-container')
const listsContainer = document.getElementById('wish-list-container') 
const personContainer = document.getElementById('person-container')
const bodyTag = document.querySelector('body')

// Appended Elements
// let wishHeader = document.createElement("h1")
// wishHeader.innerText += "*** Christmas Wish List Organizer ***"
// bodyTag.appendChild(wishHeader)

let createNew = document.createElement('h3')
createNew.innerHTML = "Create a New List"
personContainer.appendChild(createNew)
  
let wlh3 = document.createElement('h3')
wlh3.innerHTML = "Here are some premade Lists"
listsContainer.appendChild(wlh3)

let wih2 = document.createElement('h2')
wih2.id = "item-title"
wih2.innerHTML = "Here are some available wish items"
itemsContainer.appendChild(wih2)

let newWishList = document.getElementById('new-list-form')
let submitBtn = document.getElementById('submit')

const preMadeList = document.createElement('div')
preMadeList.id = "premade-list"
listsContainer.appendChild(preMadeList)



// Div element for your lists

// FUNCTIONS
function nestedFormHtml(id, list_title) {
    return `
    
      <p>List Title: ${list_title}</p>
      <input type="text" name="name" id="item_name"placeholder="Name Your Item" />
      <input type="text" name="color" id="item_color" placeholder="What color is it?" />
      <input type="text" name="height" id="item_height" placeholder="How tall is it?" />
      <input type="text" name="weight" id="item_weight" placeholder="How much does it weigh?" />
      <input type="text" name="link" id="item_link" placeholder="Link to a picture of it" />
      <input type="text" name="description" id="item_description" placeholder="Write a description of the Wish" />
      <input type="text" name="price" id="item_price" placeholder="How much does it cost?" />
      <button id="submit">Add Item To List</button>
    
    `
  }

function renderNestedForm(list_id, title) {
  
  const nestedForm = document.createElement('form')
 
  nestedForm.classList.add('nested-form')
  nestedForm.id = "nested-form"
  nestedForm.dataset.id = list_id
  nestedForm.innerHTML += this.nestedFormHtml(list_id, title)
  newWishList.appendChild(nestedForm)

}

// Your list Items

function yourListItemHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price) {
  return `
  <a href="wish_lists/${list_id}"><h2 class="list-header">${list_title}</h2></a>
  <p id="yl">Name: ${item_name}</p>
  <p id="yl">Color: ${item_color}</p>
  <p id="yl">Height: ${item_height}</p>
  <p id="yl">Weight: ${item_weight}</p>
  <o id="yl">Link: ${item_link}</p>
  <p id="yl">Description: ${item_description}</p>
  <p id="yl">Price: ${item_price}</p>
  <button class="delete">DELETE ME???</button>
  `
}

function renderYourItemList() {
  const yourListCard = document.createElement('div')
  yourListCard.classList.add('your-list-card')
  yourListCard.id = "your-list-card"
  yourListCard.innerHTML += this.yourListItemHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price)
  yourListContainer.appendChild(yourListCard)
  
}

// document.getElementById('nested-form').addEventListener('submit', API.addYourWishItems)