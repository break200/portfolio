// 'use strict'

//  Header에 페이지 아래로 스크롤시 다크 스타일링 적용
// 자바스크립트에서 위에에 따라서 header-dark 식별자를 추가해 기능 만듬
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// home 섹션을 아래로 스크롤시 투명하게 처리

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll' , () => {
    //비례식 
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


//홈 절반만 보여질때 
const array = document.querySelector('.arrow-up');
document.addEventListener( 'scroll' , ()=> {
    if ((1 - window.scrollY / homeHeight) >= 0.5) {
        array.style.opacity = 0;
    }else{
        array.style.opacity = 1;
    }
});


// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});



navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});










