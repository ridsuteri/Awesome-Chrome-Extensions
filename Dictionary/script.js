const searchSubmit = document.querySelector('form');
const searchTerm = document.querySelector('input');
const btnNew = document.querySelector('.new');
const result = document.querySelector('.result');
const loadingImg = document.querySelector('.loading');
const dictContent = document.querySelector('.dictContent');
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let isLoading = false;

searchSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    dictContent.innerHTML = '';
    loadingImg.classList.remove('displayNone');

    console.log(searchTerm.value);
    setTimeout(fetchingDict, 2000);
});

const fetchingDict = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm.value}`)
        .then((res) => {
            console.log(res);
            if (res.status == '404') {
                return (dictContent.innerHTML = `<span style='color: red'>no results found for the word "<i>${searchTerm.value}</i>"</span>`);
            }
            return res.json();
        })
        .then(
            (data) =>
                (dictContent.innerHTML = `<i>"
                    ${data[0].meanings[0].definitions[0].definition}"</i>`)
        );
    loadingImg.classList.add('displayNone');
};
