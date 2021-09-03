// button onclick function
const searchBook = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear search field 
    searchField.value = '';

    if(searchText === ''){
        const searchResult = document.getElementById('error-message');
        const div = document.createElement('div');
        div.innerHTML = `
        <h1 class="text-center text-danger">Please write something</h1>
        `
        searchResult.appendChild(div);
    }
    else{
        // load data 
    const url =`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(resposnse => resposnse.json())
    .then(data => displaySearchResult(data.docs));
    }
}

const displaySearchResult = books =>{
    //console.log(books.length);
    const searchResult =  document.getElementById('search-result');
    searchResult.innerHTML = '';
    const url =`https://covers.openlibrary.org/b/id/{cover_i}-M.jpg`

    // total book of search
    const totalBook = document.getElementById('total-book');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="text-center text-success">Find Book = ${books.length}</h1>
    `
    searchResult.appendChild(div);

    books.forEach(book =>{
        //console.log(book);
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top mx-auto" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">
                Author : ${book.author_name} <br>
                First publish : ${book.first_publish_year} <br>
                Publisher : ${book.publisher}
                </p>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    })

}