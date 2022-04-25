let myLinks=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const saveBtn=document.getElementById("save-btn")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("save-tab")
const linksfromLocalStorage=JSON.parse(localStorage.getItem("myLinks"))
if(linksfromLocalStorage){
    myLinks=linksfromLocalStorage
    render(myLinks)
}
function render(links){
    let listItems=""
    for(let i=0;i<links.length;i++){
        listItems += `<li>
        <a href="${links[i]}" target='blank'>${links[i]}</a>
        </li>`
    }
    ulEl.innerHTML=listItems
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLinks.push(tabs[0].url)
    localStorage.setItem("myLinks",JSON.stringify(myLinks))
    render(myLinks)
    })
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLinks=[]
    render(myLinks)
})
saveBtn.addEventListener("click",function(){
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks",JSON.stringify(myLinks))
    render(myLinks)
})