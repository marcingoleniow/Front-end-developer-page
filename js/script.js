// Menu animation
const btnMenuMobile = document.querySelector("div.menu");
const divMenu = document.querySelector("div.menu")

const btnDots = document.querySelector("div.dots")
const menuInformation = document.querySelector("div.information")
const dots = document.querySelectorAll('div.dot')

btnMenuMobile.addEventListener('click', function(){
 divMenu.classList.toggle('active')
})

btnDots.addEventListener('click', function(){
menuInformation.classList.toggle('active')
for(i=0; i < dots.length; i++){
  dots[i].classList.toggle('active')
}
})

// Changing color of logo

const bigDot = document.querySelector('nav.mobile .logo div:nth-child(11)');
const developerName = document.querySelector('nav.mobile .logo div:nth-child(12)');
const developerTitle = document.querySelector('nav.mobile .logo div:nth-child(13)');

const changeLogoColor = (e) => {

const header = document.querySelector('header');
let headerTopPosition = header.getBoundingClientRect().top;
let screenHeight = window.innerHeight / 10;

  console.log(headerTopPosition)
  console.log(screenHeight)

   if(headerTopPosition < screenHeight){
     bigDot.classList.add("active");
     developerName.classList.add("active");
     developerTitle.classList.add("active")
   }else {
    bigDot.classList.remove("active");
    developerName.classList.remove("active");
    developerTitle.classList.remove("active")
   }
  
  }

window.addEventListener('scroll', changeLogoColor)

// ---------------------------------------
