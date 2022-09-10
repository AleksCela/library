const popup = document.getElementById("popup");
const btn = document.getElementById("btn");
const submitbtn = document.getElementById("submitbtn");
const readbtn = document.getElementById("readbtn");




btn.addEventListener("click", myFunction);


function myFunction() {
    if (popup.style.display !== "none") {
        popup.style.display = "none";
        btn.value = "Add New Book!";
    } else {
        popup.style.display = "block";
        btn.value = "Collapse the pop-up!";
    }
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


    bookCard.classList.add("book-card");
    buttonsgr.classList.add("buttons-group");
    isRead1.setAttribute("id","readbtn");



    title.textContent = `Title:"${book.titulli}"`
    author.textContent = `Author:${book.autori}`
    pages.textContent = `Pages:${book.faqet}`



    remove.innerHTML = "remove";
    isRead1.innerHTML = "read";


    grid.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonsgr);
    buttonsgr.appendChild(isRead1);
    buttonsgr.appendChild(remove);

}

let myLibrary = []

function liber (titulli, autori, faqet, lexuar){
    this.titulli = titulli;
    this.autori = autori;
    this.faqet = faqet;
    this.lexuar = lexuar;
}

function addbook (ev){
    ev.preventDefault()
    let libri = {
        titulli: document.getElementById('title').value,
        autori: document.getElementById('author').value,
        faqet: document.getElementById('pages').value,
        lexuar: document.getElementById('isRead').checked
    }
    myLibrary.push(libri);
    document.forms[0].reset();

    const booklist = Array.from(document.getElementsByClassName('book-card'));
    booklist.forEach(liberi => {
        liberi.remove();
    });

    for (let index = 0; index < myLibrary.length; index++) {
        createBookCard(myLibrary[index])
    }

}

document.addEventListener('DOMContentLoaded', ()=>(
    document.getElementById('submitbtn').addEventListener('click',addbook)
))