document.addEventListener("DOMContentLoaded",function(){
  API.readList()
  // API.readItem()
  
  document.getElementById('new-list-form').addEventListener('submit', API.createList )

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

// DO NOT GIVE UP

// formcontatiner append to topDiv
const formContainer = document.createElement('div')
formContainer.id = 'new-list-container'
topDiv.appendChild(formContainer)

// create form element append to topDiv formContainer
const formH2 = document.createElement('h2')
formH2.classList.add('new_list')
formH2.innerText = "Create New List"
formContainer.appendChild(formH2)

const form = document.createElement('form')
form.id = 'new-list-form'
form.innerHTML += `
<input name='title' id="title" placeholder="Person's Name"/>
<button id="submit">New Wishes</button>
<br /><br />
`
formContainer.appendChild(form)

// Middle Container with lists and their items
const middleDiv = document.createElement('div')
middleDiv.id = 'middleDiv'
bodyTag.appendChild(middleDiv)

const listContainer = document.createElement('div')
listContainer.id = "list_container"
const listCard = document.createElement('div')

// append title to list container
let wlh2 = document.createElement('h2')
wlh2.innerHTML += "Santa's Wish Lists"
wlh2.classList.add('wlh2')
middleDiv.appendChild(wlh2)
middleDiv.appendChild(listContainer)

function nestedFormHtml(id, list_title) {
      return `
        <!--<p>List Title: <span id='wish-title'>${list_title}</span></p>-->
        <h2> Create New Item</h2>
        <input type="text" name="name" id="item_name"placeholder="Name Your Item" /><br />
        <input type="text" name="color" id="item_color" placeholder="What color is it?" /><br />
        <input type="text" name="height" id="item_height" placeholder="How tall is it?" /><br />
        <input type="text" name="weight" id="item_weight" placeholder="How much does it weigh?" /><br />
        <input type="text" name="link" id="item_link" placeholder="Link to a picture of it" /><br />
        <textarea type="text" name="description" id="item_description" width="100" >Write a description of the Wish</textarea><br />
        <input type="text" name="price" id="item_price" placeholder="How much does it cost?" /><br />
        <input type="reset" value="Reset Form"><br />
        <button id="submit" class="submit">Add item to List</button>
        <br /><br />
      `
    }

  function renderNestedForm(list_id) {
    const nestedForm = document.createElement('form')
    nestedForm.classList.add('nested_form')
    nestedForm.id = 'nested_form'
    nestedForm.dataset.id = list_id
    nestedForm.innerHTML += this.nestedFormHtml()
    listCard.appendChild(nestedForm)
    document.getElementById(`${list_id}`).addEventListener('submit', API.createItems)
  }
