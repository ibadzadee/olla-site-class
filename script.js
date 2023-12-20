const cards = document.querySelector(".bottom");
url = `http://localhost:3000/data/`;

let n = 1;
let page = 1;

function showData() {
  fetch(`http://localhost:3000/data?_page=${page}&_limit=3`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        cards.innerHTML += `
            <div class="cards card${n}">
            <h3>${element.name}</h3>
                <img src="${element.image}" alt="">
                <p>${element.description}</p>
                <i class="bi bi-trash3-fill delete" onclick="deleteElement(${element.id})"></i>
                <i class="bi bi-pencil-square update" onclick="update(${element.id})"></i>
                <i class="bi bi-heart-fill heart"></i>
            </div>
            `;
        n += 1;
      });
    });
}

showData();
loadBtn = document.querySelector("#loadMore");
loadBtn.addEventListener("click", () => {
  page++;
  showData();
});

function deleteElement(id) {
  axios.delete(url+id);
  window.location.reload();
}

// --------------------- update.js ----------------------

const modal = document.querySelector(".modal");
// const updateBtn = document.querySelector(".update");
// updateBtn.addEventListener("click" , ()=>{
//   modal.style.display ="block"
// })
function update(id){
  modal.innerHTML=""
  modal.style.display ="flex";
  // fetch(url+id)
  // .then(res => res.json())
  // .then(data=>
  //   modal.innerHTML+=`
  //   value="${data.name}"
  //   `
    // )
}

window.addEventListener("keyup" , (e)=>{
  if(e.key==="Enter"){
    modal.style.display = "none"
  }
})
// console.log(modal);
