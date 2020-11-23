//HEADER

const logoReset = document.querySelector('.logo');
logoReset.addEventListener('click', () => {
    location.reload()
})
const barNavigatuon = document.querySelector('.navigation');
const buttonsBurger = document.querySelector('.burger');
buttonsBurger.addEventListener('click', () => {
    buttonsBurger.classList.toggle('active');
    barNavigatuon.classList.toggle('sideways')
})  

const navHome = document.querySelector('.nav_home');
const navService = document.querySelector('.nav_service');
const navPortfolio = document.querySelector('.nav_portfolio');
const navAbout = document.querySelector('.nav_about');
const navContact = document.querySelector('.nav_contact');

navHome.addEventListener('click', () => {
  navHome.classList.add('focus');
  navService.classList.remove('focus');
  navPortfolio.classList.remove('focus');
  navAbout.classList.remove('focus');
  navContact.classList.remove('focus');
  buttonsBurger.classList.remove('active');
  barNavigatuon.classList.remove('sideways');
})

navService.addEventListener('click', () => {
  navHome.classList.remove('focus');
  navService.classList.add('focus');
  navPortfolio.classList.remove('focus');
  navAbout.classList.remove('focus');
  navContact.classList.remove('focus');
  buttonsBurger.classList.remove('active');
  barNavigatuon.classList.remove('sideways');
})

navPortfolio.addEventListener('click', () => {
  navHome.classList.remove('focus');
  navService.classList.remove('focus');
  navPortfolio.classList.add('focus');
  navAbout.classList.remove('focus');
  navContact.classList.remove('focus');
  buttonsBurger.classList.remove('active');
  barNavigatuon.classList.remove('sideways');
})

navAbout.addEventListener('click', () => {
  navHome.classList.remove('focus');
  navService.classList.remove('focus');
  navPortfolio.classList.remove('focus');
  navAbout.classList.add('focus');
  navContact.classList.remove('focus');
  buttonsBurger.classList.remove('active');
  barNavigatuon.classList.remove('sideways');
})

navContact.addEventListener('click', () => {
  navHome.classList.remove('focus');
  navService.classList.remove('focus');
  navPortfolio.classList.remove('focus');
  navAbout.classList.remove('focus');
  navContact.classList.add('focus');
  buttonsBurger.classList.remove('activee');
  barNavigatuon.classList.remove('sideways');
})

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  document.querySelectorAll('.wrapper').forEach((el, i) =>{
    if (el.offsetTop - document.querySelector('.wrapper_header').clientHeight <= scrollDistance) {
      document.querySelectorAll('.navigation a').forEach((el) => {
        if (el.classList.contains('focus')) {
          el.classList.remove('focus');
        }
      });
      document.querySelectorAll('.navigation li')[i].querySelector('a').classList.add('focus');
    }
  });
});


//SLIDER

// const arroyRightButton = document.querySelector('.img_ar_right');
// const arroyLeftButton = document.querySelector('.img_ar_left');
// const photoPhoneFirst = document.querySelector('.image_phone1');
// const wrapper = document.querySelector('.slider__wrapper');
// const orderPhone = document.querySelector('.slide__wrapper__phone1')

// const slides = Array.from(orderPhone.querySelectorAll('.slider__image')) || [];
// const SLIDER_STEP = -100;

// const onSliderButtonClick = (direction) => {
//   const activeIndex = slides.findIndex(slide => slide.classList.contains('slider__image-active'));
//   const nextIndex = direction ? activeIndex + 1 : activeIndex - 1;
//   const next = slides[nextIndex];

//   if (next) {
//     slides.forEach(slide => slide.classList.remove('slider__image-active'));
//     next.classList.add('slider__image-active');
//       wrapper.style.transform = 'translateX(' + nextIndex * SLIDER_STEP + '%)';
//     }
//   // }else(false){
//   //   slides.forEach(slide => slide.classList.remove('slider__image-active'));
//   //   next.classList.add('slider__image-active');
//   //   wrapper.style.transform = 'translateX(' + nextIndex * SLIDER_STEP + '%)';
//   // }
// };
const slider = document.querySelector('.slider__wrapper');
const slides = Array.from(slider.querySelectorAll('.slider__image')) || [];
const ANIMATION_STEP = -100;

const activate = (slideIndex) => {
  slides.forEach(slide => slide.classList.remove('slider__image-active'));
  slides[slideIndex] && slides[slideIndex].classList.add('slider__image-active');
}

const showNext = (nextSlideIndex) => {
  activate(nextSlideIndex);
  slider.style.transform = 'translateX(' + ((nextSlideIndex * ANIMATION_STEP) + ANIMATION_STEP) + '%)';
}

const onLastReached = () => {
  slider.classList.add('slider__wrapper-disabled'); // disables css animation
  showNext(0);
}

const onFirstReached = () => {
  slider.classList.add('slider__wrapper-disabled'); // disables css animation
  showNext(slides.length - 1);
}

const onSliderButtonClick = (direction) => {
  const activeIndex = slides.findIndex(slide => slide.classList.contains('slider__image-active'));
  const nextIndex = direction ? activeIndex + 1 : activeIndex - 1;

  slider.classList.remove('slider__wrapper-disabled');

  showNext(nextIndex);

  if (nextIndex >= slides.length) {
    return slider.addEventListener('transitionend', onLastReached, { once: true });
  }

  if (nextIndex < 0) {
    return slider.addEventListener('transitionend', onFirstReached, { once: true });
  }
};

const initialize = () => {
  const arroyRightButton = document.querySelector('.img_ar_right');
  const arroyLeftButton = document.querySelector('.img_ar_left');
  const firstSlide = slider.querySelector('.slider__image:first-child');
  const lastSlide = slider.querySelector('.slider__image:last-child');

arroyRightButton.addEventListener('click', () => {
  onSliderButtonClick(true);
})

arroyLeftButton.addEventListener('click', () => {
  onSliderButtonClick();
})

// copy the first/last elements to the end/begining automatically
slider.insertBefore(firstSlide.cloneNode(), slider.lastChild.nextSibling);
slider.insertBefore(lastSlide.cloneNode(), slider.firstChild);

activate(0);
}

initialize();


// PORTFOLIO BUTTONS

const portfolioFirstImage = document.querySelector('.portfolio_images_item1');
const portfolioSecondImage = document.querySelector('.portfolio_images_item2');
const portfolioThreeImage = document.querySelector('.portfolio_images_item3');
const firstTag = document.querySelector('.tag_selected');
const secondTag = document.querySelector('.second_tag');
const threeTag = document.querySelector('.three_tag');
const fourTag = document.querySelector('.four_tag');

firstTag.addEventListener('click', () => {
    firstTag.classList.add('tag_tag')
    secondTag.classList.remove('tag_tag');
    threeTag.classList.remove('tag_tag');
    fourTag.classList.remove('tag_tag');
    portfolioFirstImage.classList.remove('shuffle');
    portfolioSecondImage.classList.remove('shuffle');
    portfolioThreeImage.classList.remove('shuffle');
})

secondTag.addEventListener('click', () => {
    secondTag.classList.add('tag_tag');
    firstTag.classList.remove('tag_tag');
    firstTag.classList.remove('tag_selected');
    threeTag.classList.remove('tag_tag');
    fourTag.classList.remove('tag_tag');
    portfolioFirstImage.classList.add('shuffle');
    portfolioSecondImage.classList.remove('shuffle');
    portfolioThreeImage.classList.remove('shuffle');
})

threeTag.addEventListener('click', () => {
    threeTag.classList.add('tag_tag');
    firstTag.classList.remove('tag_tag');
    firstTag.classList.remove('tag_selected');
    secondTag.classList.remove('tag_tag');
    fourTag.classList.remove('tag_tag');
    portfolioFirstImage.classList.add('shuffle');
    portfolioSecondImage.classList.add('shuffle');
    portfolioThreeImage.classList.remove('shuffle');
})

fourTag.addEventListener('click', () => {
    fourTag.classList.add('tag_tag');
    firstTag.classList.remove('tag_tag');
    firstTag.classList.remove('tag_selected');
    secondTag.classList.remove('tag_tag');
    threeTag.classList.remove('tag_tag');
    portfolioThreeImage.classList.add('shuffle');
})