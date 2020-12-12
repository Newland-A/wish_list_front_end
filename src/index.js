document.addEventListener("DOMContentLoaded",function(){
  API.readList()
  API.readItem()
  
  document.getElementById('new-list-form').addEventListener('submit', API.createList 
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
topDiv.classList.add('topDiv')
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
<br /><br />
`
formContainer.appendChild(form)

// create container for form once created
const listDiv = document.createElement('div')
listDiv.id = 'wish_list_container'
const nestListDiv = document.createElement('div')
nestListDiv.id = 'single-item-div'
listDiv.appendChild(nestListDiv)
bodyTag.appendChild(listDiv)
// const listsContainer = document.getElementById('wish_list_container')
// append title to list container
let wlh2 = document.createElement('h2')
wlh2.innerHTML += "Santa's Wish List"
listDiv.appendChild(wlh2)

// function to call to render nested form to the page
function nestedFormHtml(id, list_title) {
      return `
      
        <p>Wish Title: <span id='wish-title'>${list_title}</span></p>
        <input type="text" name="name" id="item_name"placeholder="Name Your Item" /><br />
        <input type="text" name="color" id="item_color" placeholder="What color is it?" /><br />
        <input type="text" name="height" id="item_height" placeholder="How tall is it?" /><br />
        <input type="text" name="weight" id="item_weight" placeholder="How much does it weigh?" /><br />
        <input type="text" name="link" id="item_link" placeholder="Link to a picture of it" /><br />
        <input type="text" name="description" id="item_description" placeholder="Write a description of the Wish" /><br />
        <input type="text" name="price" id="item_price" placeholder="How much does it cost?" /><br />
        <button id="submit">Send Wish to Santa</button>
        <br /><br />
      
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

// // Appended Elements

// // Div element for your lists
// // Yes the id needs to be here
// // FUNCTIONS
// // create function for the html 

// // Your list Items

// function yourListItemHtml(list_id, item_name, item_color, item_height, item_weight, item_link, item_description, item_price, wish_list_id, title) {
//   return `
//   <a href="wish_lists/${list_id}"><h2 class="list-header">${title}</h2></a>
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

// function renderYourItemList(list_id, item_name, item_color, item_height, item_weight, item_link, item_description, item_price, wish_list_id, title) {
//   const yourListCard = document.createElement('div')
//   yourListCard.classList.add('your-list-card')
//   yourListCard.id = "your-list-card"
//   yourListCard.innerHTML += this.yourListItemHtml(list_id, item_name, item_color, item_height, item_weight, item_link, item_description, item_price, wish_list_id, title)
//   listsContainer.appendChild(yourListCard)
  
// }

