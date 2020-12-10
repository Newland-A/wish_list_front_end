document.addEventListener("DOMContentLoaded",function(){
  API.readList()
  API.readItem()
  
  document.getElementById('new-list-form').addEventListener('submit', API.createConnectedListItem //API.createList
)

})

// Main URL AND QUERIES
const BASE_URL = "http://localhost:3000"
const WISHLIST_URL = `${BASE_URL}/wish_lists`
const WISHITEM_URL = `${BASE_URL}/wish_items`

// Top of DOM
const bodyTag = document.querySelector('body')
const topDiv = document.createElement('div')
topDiv.id = 'topDiv'
bodyTag.appendChild(topDiv)

const santasUrl = './wish-item-img/santas_workshop.jpg'

let image = new Image();
image.src = santasUrl;
image.id = 'santas-image'
document.getElementById('topDiv').appendChild(image);

const pageTitle = document.createElement('h1')
pageTitle.id = "page-title"
pageTitle.innerHTML = "Send A Wish to Santa"
topDiv.appendChild(pageTitle)


// formcontatiner append to topDiv
const formContainer = document.createElement('div')
formContainer.id = 'new-list-container'
topDiv.appendChild(formContainer)

// create form element append to topDiv formContainer
const formH2 = document.createElement('h2')
formH2.innerText = "Create New List"
formContainer.appendChild(formH2)

const form = document.createElement('form')
form.id = 'new-list-form'
form.innerHTML += `
<input name='title' id="title-of-wish-list" placeholder="Name Your Wish List!"/>
<button id="submit">New Wishes</button>
`
formContainer.appendChild(form)

// create container for form once created
const listDiv = document.createElement('div')
listDiv.id = 'wish-list-container'
bodyTag.appendChild(listDiv)
const listsContainer = document.getElementById('wish-list-container')

// append title to list container
let wlh2 = document.createElement('h2')
wlh2.innerHTML += "Santa's Wish List"
listsContainer.appendChild(wlh2)

// function to call to render nested form to the page
function nestedFormHtml(id, list_title) {
      return `
      
        <p>Wish Title: ${list_title}</p>
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
    formContainer.appendChild(nestedForm)
  
  }






























// ORIGNINAL MVP BELOW

// const itemsContainer = document.getElementById('wish-items-container')
// const yourListContainer = document.getElementById('your-list-container')
 
// const personContainer = document.getElementById('person-container')


// // Appended Elements

// let createNew = document.createElement('h3')
// createNew.innerHTML = "Create a New List"
// personContainer.appendChild(createNew)
  

// let wih2 = document.createElement('h2')
// wih2.id = "item-title"
// wih2.innerHTML = "Here are some available wish items"
// itemsContainer.appendChild(wih2)

// let newWishList = document.getElementById('new-list-form')
// let submitBtn = document.getElementById('submit')

// const preMadeList = document.createElement('div')
// preMadeList.id = "premade-list"
// listsContainer.appendChild(preMadeList)



// // Div element for your lists
// // Yes the id needs to be here
// // FUNCTIONS
// // create function for the html 
// function nestedFormHtml(id, list_title) {
//     return `
    
//       <p>List Title: ${list_title}</p>
//       <input type="text" name="name" id="item_name"placeholder="Name Your Item" />
//       <input type="text" name="color" id="item_color" placeholder="What color is it?" />
//       <input type="text" name="height" id="item_height" placeholder="How tall is it?" />
//       <input type="text" name="weight" id="item_weight" placeholder="How much does it weigh?" />
//       <input type="text" name="link" id="item_link" placeholder="Link to a picture of it" />
//       <input type="text" name="description" id="item_description" placeholder="Write a description of the Wish" />
//       <input type="text" name="price" id="item_price" placeholder="How much does it cost?" />
//       <button id="submit">Add Item To List</button>
    
//     `
//   }

// function renderNestedForm(list_id, title) {
  
//   const nestedForm = document.createElement('form')
 
//   nestedForm.classList.add('nested-form')
//   nestedForm.id = "nested-form"
//   nestedForm.dataset.id = list_id
//   nestedForm.innerHTML += this.nestedFormHtml(list_id, title)
//   newWishList.appendChild(nestedForm)

// }

// // Your list Items

// function yourListItemHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price) {
//   return `
//   <a href="wish_lists/${list_id}"><h2 class="list-header">${list_title}</h2></a>
//   <p id="yl">Name: ${item_name}</p>
//   <p id="yl">Color: ${item_color}</p>
//   <p id="yl">Height: ${item_height}</p>
//   <p id="yl">Weight: ${item_weight}</p>
//   <o id="yl">Link: ${item_link}</p>
//   <p id="yl">Description: ${item_description}</p>
//   <p id="yl">Price: ${item_price}</p>
//   <button class="delete">DELETE ME???</button>
//   `
// }

// function renderYourItemList() {
//   const yourListCard = document.createElement('div')
//   yourListCard.classList.add('your-list-card')
//   yourListCard.id = "your-list-card"
//   yourListCard.innerHTML += this.yourListItemHtml(list_id, list_title, item_name, item_color, item_height, item_weight, item_link, item_description, item_price)
//   yourListContainer.appendChild(yourListCard)
  
// }