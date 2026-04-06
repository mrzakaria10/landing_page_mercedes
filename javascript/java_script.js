//  document.addEventListener("DOMContentLoaded", function() {
//      //select the first content 
//      let first_section = document.querySelector('.Berliness') 
//      if (first_section) {
//          first_section.style.display = "flex";
//      } 
//  });




// document.addEventListener("Divs", function next(){
//     for(let i=0;i<3;i++){
//         Divs[i].style.display="block";

//     }

// })

// for(let i=0;i<3;i++){
//     Divs[i].style.display="block";
// }
// function next() {
//     let firstDiv;
//     let lastDiv;
//    console.log(Divs);
//   for(let i=0;i<Divs.length;i++){
//     if(Divs[i].style.display=="flex"){
//         Divs[i].style.display="none";
//         Divs[i+1].style.display="flex";
//         Divs[i+2].style.display="flex";
//         break;

//     }
//   }

   
//  }

// function previous() {
//     Divs[0].style.display="block";
//     Divs[4].style.display="none";
// }

// function next() {
//     alert("next");
//     let next_site = document.querySelector(".Berliness");
//     next_site[0].style.display = "none";
//     console.log(next_site[0]);

// }


// function opposite(){
//     alert("opposite");
// }


// let Color_black = document.querySelector('.active');
(() => {
    const categorySections = document.querySelectorAll('.Berliness');
    const categoryButtons = document.querySelectorAll('.list_nos_modeles_li');

    function setActiveCategoryButton(categoryID) {
        categoryButtons.forEach((button) => {
            const onclickValue = button.getAttribute('onclick') || '';
            const isActive = onclickValue.includes(`'${categoryID}'`) || onclickValue.includes(`\"${categoryID}\"`);
            button.classList.toggle('active', isActive);
        });
    }

    function showCategory(categoryID) {
        if (!categorySections.length) {
            return;
        }

        categorySections.forEach((section) => {
            section.style.display = section.id === categoryID ? 'flex' : 'none';
        });

        setActiveCategoryButton(categoryID);
    }

    window.showcategory = showCategory;

    if (categorySections.length) {
        showCategory('Berlines');
    }

    const slider = document.querySelector('.slider');
    const slides = slider ? Array.from(slider.querySelectorAll('.slide')) : [];
    let currentSlideIndex = 0;

    function getVisibleSlidesCount() {
        if (window.innerWidth <= 768) {
            return 1;
        }
        if (window.innerWidth <= 1024) {
            return 2;
        }
        return 3;
    }

    function updateSlider() {
        if (!slider || !slides.length) {
            return;
        }

        const visibleSlides = getVisibleSlidesCount();
        const maxIndex = Math.max(slides.length - visibleSlides, 0);
        currentSlideIndex = Math.min(Math.max(currentSlideIndex, 0), maxIndex);

        const firstSlide = slides[0];
        const slideWidth = firstSlide
            ? firstSlide.getBoundingClientRect().width + 20
            : window.innerWidth / visibleSlides;

        slider.style.transform = `translateX(${-currentSlideIndex * slideWidth}px)`;
    }

    window.next = () => {
        if (!slider || !slides.length) {
            return;
        }
        currentSlideIndex += 1;
        updateSlider();
    };

    window.previous = () => {
        if (!slider || !slides.length) {
            return;
        }
        currentSlideIndex -= 1;
        updateSlider();
    };

    window.addEventListener('resize', updateSlider);
    updateSlider();

    const carousel = document.querySelector('.carousel');
    const dotsContainer = document.querySelector('.pagination-dots');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    const carouselCards = carousel ? Array.from(carousel.querySelectorAll('.card')) : [];

    if (!carousel || !dotsContainer || !leftBtn || !rightBtn || !carouselCards.length) {
        return;
    }

    let currentPage = 0;
    const cardsPerPage = window.innerWidth <= 978 ? 1 : 3;
    const totalPages = Math.max(1, Math.ceil(carouselCards.length / cardsPerPage));

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i += 1) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
    }

    function updateDots() {
        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    }

    function updateButtons() {
        leftBtn.style.display = currentPage > 0 ? 'block' : 'none';
        rightBtn.style.display = currentPage < totalPages - 1 ? 'block' : 'none';
    }

    function goToPage(page) {
        currentPage = Math.min(Math.max(page, 0), totalPages - 1);
        const scrollAmount = totalPages > 1
            ? (carousel.scrollWidth - carousel.clientWidth) / (totalPages - 1)
            : 0;
        carousel.scrollTo({ left: scrollAmount * currentPage, behavior: 'smooth' });
        updateDots();
        updateButtons();
    }

    leftBtn.addEventListener('click', () => goToPage(currentPage - 1));
    rightBtn.addEventListener('click', () => goToPage(currentPage + 1));

    goToPage(0);
})();