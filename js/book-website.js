// button onclick function
const searchBook = () => {

    const searchField = document.getElementById('search-field');
    const seacrchText = searchField.value;

    const url =`https://openlibrary.org/search.json?q=${seacrchText}`
    fetch(url)
    .then(resposnse => resposnse.json())
    .then(data => displaySearchResult(data.docs));

    searchField.value = '';
}

const displaySearchResult = books =>{
    const searchResult =  document.getElementById('search-result');
    books.forEach(book =>{
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="" class="card-img-top" alt="..." />
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