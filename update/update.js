// id = new URLSearchParams(window.location.search).get("id");
// url = `http://localhost:3000/data/`;

// let n = 1;
// let page = 1;



// // --------------------- update.js ----------------------

// const modal = document.querySelector(".modal");

// function update(id){
//   modal.innerHTML=""
//   modal.style.display ="flex";
//   fetch(url+id)
//   .then(res => res.json())
//   .then(data=>
//     modal.innerHTML+=`
//     <div class="modal-cards">
//         <input type="name" value="${data.name}"
//         <img src="${data.image}" alt="">
//         <p>${data.description}</p>
//     </div>
//     `
//     )
// }

// window.addEventListener("keyup" , (e)=>{
//   if(e.key==="Enter"){
//     modal.style.display = "none"
//   }
// })
// // console.log(modal);
