let search = document.querySelector('.search-btn');
let closeSearch = document.querySelector('.close-search');
let searchBox = document.querySelector('.searchbox');

search.onclick = function(){
    searchBox.classList.add('open');
    closeSearch.classList.add('open');
    search.classList.add('open');
}
closeSearch.onclick = function(){
    searchBox.classList.remove('open');
    closeSearch.classList.remove('open');
    search.classList.remove('open');
}