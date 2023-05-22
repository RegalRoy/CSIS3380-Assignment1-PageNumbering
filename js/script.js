console.log(users)
var dataFromApi=[];
fetchdata();
const pageNo = users.length/10;
const page = document.querySelector(`.page`);
var list = document.querySelector(`.contact-list`)
const total = document.querySelector(`h3`)
total.innerText=users.length;
var count=0;
console.log(pageNo);
pageintationFunction(users);
displayPage();


function displayPage(){
    list.innerHTML="";
    for(var i =0;i<10;i++){
        list.insertAdjacentHTML("beforeend", listItem(users[i+count]))
    }
}


function listItem(user){
    return `<li class="contact-item cf">
    <div class="contact-details">
        <img class="avatar" src="${user.image}">
        <h3>${user.name}</h3>
        <span class="email">iboya.vat@example.com</span>
    </div>
    <div class="joined-details">
           <span class="date">Joined ${user.joined}</span>
   </div>
</li>`
}



function pageintationFunction(users){
    // const pageDiv = `<div class="pagination"></div>`
    const remainder = users.length%10;
    if(remainder==0){
        usersPerPage=users.length/10;
    }else{
        usersPerPage=(users.length/10)+1;
    }
    
    const pageDiv = document.createElement("div");
    pageDiv.className="pagination";
    const unorderedList = document.createElement("ul")
    
    for(let i = 1;i<=usersPerPage;i++){
        unorderedList.insertAdjacentHTML("beforeend", `<li class="dot" onclick="currentSlide(${i})">${i}</li>`);
    }

    pageDiv.insertAdjacentHTML("beforeend", unorderedList.outerHTML);
    
    console.log(pageDiv);
    page.insertAdjacentHTML("beforeend", pageDiv.outerHTML);
}

function currentSlide(pos){
    count=0;
    console.log(pos)
    count=count+((pos-1)*10);
    displayPage();
}

function fetchdata(){
    fetch('https://randomuser.me/api/?results=53').
    then(r=>r.json()).
    then(data=>{
        dataFromApi=data.results;
        console.log(dataFromApi);
    }).catch(e=>{
        console.error("error", e);
    })
}