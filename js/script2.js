// console.log(users)
var dataFromApi=[];
var page;
var list;
var count;
fetchdata().then(()=>{
    


}).catch(e=>{
    console.log(e.message);
})


function fetchdata(){
    fetch('https://randomuser.me/api/?results=53').
    then(r=>r.json()).
    then(data=>{
        count=0;
        dataFromApi=data.results;
        console.log(dataFromApi);
        const total = document.querySelector(`h3`)
        total.innerText=dataFromApi.length;
         page = document.querySelector(`.page`);
         list = document.querySelector(`.contact-list`)
        pageintationFunction(dataFromApi);
        displayPage();
         
        
    }).catch(e=>{
        console.error("error", e);
    })
}


function displayPage(){
    list.innerHTML="";
    for(var i =0;i<10;i++){
        list.insertAdjacentHTML("beforeend", listItem(dataFromApi[i+count]))
    }
}


function listItem(user){
    return `<li class="contact-item cf">
    <div class="contact-details">
        <img class="avatar" src="${user.picture.thumbnail}">
        <h3>${user.name.first}</h3>
        <span class="email">${user.email}</span>
    </div>
    <div class="joined-details">
           <span class="date">Joined ${user.registered.date}</span>
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



// async function fetchdata(){
//     try{
//         const response=await fetch('https://randomuser.me/api/?results=53');
//         const data = await response.json();
//         dataFromApi=data.results;
//     }catch(e){
//         console.error('error', e);
//     }
// }