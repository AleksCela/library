const popup = document.getElementById("popup");
const btn = document.getElementById("btn");
const submitbtn = document.getElementById("submitbtn");
const readbtn = document.getElementById("readbtn");
const checkbox = document.getElementById("isRead");
const removebutton = document.getElementById("removebtn")
const closebtn = document.getElementById("svg")



closebtn.addEventListener("click", closemodalpopup);
function closemodalpopup() {
    popup.style.display = "none";
    btn.value = "Add New Book!";
}


btn.addEventListener("click", modalpopup);
function modalpopup() {
    if (popup.style.display == "block") {
        popup.style.display = "none";
        btn.value = "Add New Book!";
    } else {
        popup.style.display = "block";
        btn.value = "Collapse the pop-up!";
    }
}


let myLibrary = []


function liber (titulli, autori, faqet, lexuar){
    this.titulli = titulli;
    this.autori = autori;
    this.faqet = faqet;
    this.lexuar = lexuar;
}


const createBookCard = (book) => {
    let grid = document.getElementById("grid");
    let bookCard = document.createElement('div');
    let title = document.createElement('h4');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let buttonsgr = document.createElement('div');
    let isRead1 = document.createElement('button');
    let remove = document.createElement('button');

    remove.value = `${book.titulli}`
    isRead1.value = `${book.titulli}`
    bookCard.classList.add("book-card");
    buttonsgr.classList.add("buttons-group");

    isRead1.setAttribute("id","readbtn");
    remove.setAttribute("id","removebtn" );
    isRead1.classList.add("readbtn")

    title.textContent = `Title:"${book.titulli}"`
    author.textContent = `Author:${book.autori}`
    pages.textContent = `Pages:${book.faqet}`

    remove.innerHTML = "Remove";

    if (book.lexuar) {
        isRead1.style.backgroundColor="green"
        isRead1.textContent="Read"
    } else if (book.lexuar==false) {
        isRead1.style.backgroundColor="red"
        isRead1.textContent="Not Read"
    }

    grid.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonsgr);
    buttonsgr.appendChild(isRead1);
    buttonsgr.appendChild(remove);
}



function addbook (ev){
    if (document.getElementById('title').value=="" || document.getElementById('author').value==""||document.getElementById('pages').value=="") {
        ev.preventDefault()
        alert("Cannot add empty books!")

    } else {
    ev.preventDefault()
    let libri = {
        titulli: document.getElementById('title').value,
        autori: document.getElementById('author').value,
        faqet: document.getElementById('pages').value,
        lexuar: document.getElementById('isRead').checked
    }
    myLibrary.push(libri);
    document.forms[0].reset();
    updateGrid();
    popup.style.display = "none";
    btn.value = "Add New Book!";
    }
}

function updateGrid(){
    const booklist = Array.from(document.getElementsByClassName('book-card'));
    booklist.forEach(liberi => {
        liberi.remove();
    });

    for (let index = 0; index < myLibrary.length; index++) {
        createBookCard(myLibrary[index])
    }
}


document.addEventListener( "click", removeBook );

function removeBook(event){
    var element = event.target;
    for (let i = 0; i < myLibrary.length; i++) {
        const titleofbook = myLibrary[i].titulli;
        if(element.tagName == 'BUTTON' && element.value == titleofbook && element.innerHTML == "Remove"){
            myLibrary.splice(i,1);
            updateGrid();
        }
        if(element.tagName == 'BUTTON' && element.value == titleofbook && element.classList.contains("readbtn")){
            if (myLibrary[i].lexuar == true) {
                myLibrary[i].lexuar = false
                updateGrid()
            }else {
                myLibrary[i].lexuar = true
                updateGrid()
            }
        }
    }
}




document.addEventListener('DOMContentLoaded', ()=>(
    document.getElementById('submitbtn').addEventListener('click',addbook)
))