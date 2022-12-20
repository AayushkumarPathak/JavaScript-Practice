// alert("Hello") => to check the js file is attached with it or not.

// console.log(document) => to view source code.

// console.dir(document) => to view all the elements tags.

// console.log(document.URL) => to get file live url.

document.title = 'DOM Manipulation'

//Adding Div element to html file using js-->

let div = document.createElement('div')
// console.log(div)

document.body.append(div)
// body.appendChild(div)


// => to add an element
// div.innerText = "This is div"

// div.textContent = "This is div"

//short hand property=>
// div.innerText = '<strong>This is a div</strong>' => wrong way!!!!
// The way to add bold text using js in html doc
//          Method 1=>
let strong = document.createElement('strong')
strong.innerText = 'This is a div with bold text'
div.appendChild(strong)
//         Method 2=>
div.innerHTML = "<strong>This is strong bold text</strong>"

//remove the elements

// body.removeChild(div)

//Modify the elements=>

let spanHello = document.getElementById('hello')
let spanBye = document.getElementById('bye')
console.log(spanHello)
console.log(spanHello,spanBye)


spanHello.classList.add('new')

spanHello.style.color = 'green'
spanBye.style.color = 'red'