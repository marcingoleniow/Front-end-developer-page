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

// Header/Slider animation
slideList = [{
  img: 'img/laptopMobile.jpg',
  text: 'Design your webside'
},
{
  img: 'img/laptopCodeMobile.jpg',
  text: 'Coding your webside'
},
{
  img: 'img/socialMediaMobile.jpg',
  text: 'Appear in social media'
}
]
// Interface
const time = 4000;
let active = 0;
const dotsHeader = [...document.querySelectorAll('header.mobile .dots span')];

// Implementation
const image = document.querySelector('header.mobile img.slider');
const h1 = document.querySelector('header.mobile h1.slider');

const changeDot = () => {
  const activeDot = dotsHeader.findIndex(dot => dot.classList.contains('active'))
  // console.log(activeDot)
  dotsHeader[activeDot].classList.remove('active');
  dotsHeader[active].classList.add('active')
}

const changeSlide = () => {
  active++
  if(active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()

}

setInterval(changeSlide, time);