document.addEventListener("DOMContentLoaded",function(){
  API.addWishList()
  API.addWishItem()
  document.getElementById('new-form').addEventListener('submit', API.addNewList
)
  document.getElementById('new-form').addEventListener('submit', API.addYourList
)
})
// Main URL AND QUERIES
const BASE_URL = "http://localhost:3000"
const WISHLIST_URL = `${BASE_URL}/wish_lists`
const WISHITEM_URL = `${BASE_URL}/wish_items`
const itemsContainer = document.getElementById('wish-items-container')
const listsContainer = document.getElementById('wish-list-container')

const personContainer = document.getElementById('person-container')

// Appended Elements
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

let newWishList = document.getElementById('new-form')
let submitBtn = document.getElementById('submit')

const yourLists = document.createElement('div')
yourLists.id = "your-lists"
listsContainer.appendChild(yourLists)

const preMadeList = document.createElement('div')
preMadeList.id = "premade-mist"
listsContainer.appendChild(preMadeList)

// Div element for your lists

// FUNCTIONS
function formHtml(list_title) {
    return `
    <p>List Title: ${list_title}</p>
    <input type="text" name="name" id="item_name"placeholder="Name Your Item" />
    <input type="text" name="color" id="item_color" placeholder="What color is it?" />
    <input type="text" name="height" id="item_height" placeholder="How tall is it?" />
    <input type="text" name="weight" id="item_weight" placeholder="How much does it weigh?" />
    <input type="text" name="link" id="item_link" placeholder="Link to a picture of it" />
    <input type="text" name="description" id="item_description" placeholder="Write a description of the Wish" />
    <input type="text" name="price" id="item_price" placeholder="How much does it cost?" />
    <button class="add_item" id="add_item">Add Item To List</button>
    `
  }

function renderNestedForm(title) {
  
  const nestedForm = document.createElement('form')
 
  nestedForm.classList.add('nested-form')
  nestedForm.id = this.id
  nestedForm.innerHTML += this.formHtml(title)
  newWishList.appendChild(nestedForm)

}


function yourListHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price) {
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

function renderYourList() {
  const yourListCard = document.createElement('div')
  yourListCard.classList.add('your-list-card')
  yourListCard.id = "your-list-card"
  yourListCard.innerHTML += this.yourListHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price)
  yourLists.appendChild(yourListCard)
}
  