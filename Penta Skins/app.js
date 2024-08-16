console.log('PENTA SKIN')
//carousel

let nextButtton = document.getElementById("next");
let prevButtton = document.getElementById("prev");
let backButtton = document.getElementById("back");

let SeeMoreButtons = document.querySelectorAll(".SeeMore");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

nextButtton.onclick = function () {
  showSlider("next");
};
prevButtton.onclick = function () {
  showSlider("prev");
};

let unAcceptClick;

const showSlider = (type) => {
  nextButtton.style.pointerEvents = "none";
  prevButtton.style.pointerEvents = "none";
  carousel.classList.remove("prev", "next");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    let positionLast = items.length - 1;
    listHTML.prepend(items[positionLast]);
    carousel.classList.add('prev');
  }
  clearTimeout(unAcceptClick);
  unAcceptClick = setTimeout(() => {
    nextButtton.style.pointerEvents = "auto";
    prevButtton.style.pointerEvents = "auto";
  }, 1099);
}

SeeMoreButtons.forEach(button => {
  button.onclick = function () {
    carousel.classList.add("showDetail");
  }
})
backButtton.onclick = function(){
  carousel.classList.remove('showDetail');
}




//Dark Mode


let darkmode = localStorage.getItem('dakmode')

const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode','active')
}
const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode',null)
}

if(darkmode === "active")enableDarkmode()

themeSwitch.addEventListener("click",() => {
  darkmode = localStorage.getItem('darkmode')
    darkmode !== "active"  ? enableDarkmode() : disableDarkmode() 
  }


)


//Dialog Login
const dialog = document.getElementById("login-dialog")
const wrapper = document.querySelector(".wrapper")

   function showLoginDialog(){
    dialog.showModal()
   }
   function closeLoginDialog(){
    dialog.close()
   }

dialog.addEventListener('click',(e) => !wrapper.contains(e.target) && dialog.close());

