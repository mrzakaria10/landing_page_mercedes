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
//     Color_black.classList.add('active');

// to show the first when loading pager
let first_section = document.querySelector('.Berliness');
for(let i=0; i <= 2; i++){
    first_section.style.display = "flex";

}


function showcategory(categoryID) {
    
    let sections = document.querySelectorAll('.Berliness');
    
    //hide all section
    sections.forEach(section => {
        section.style.display = "none"; 
    });

    //show the section 
    document.getElementById(categoryID).style.display = "flex";








    // let listToShow = document.getElementById(categoryID);
    // alert("ddd");
    
    // listToShow.style.display = "flex";

    
    // if(Berlines_js_list.style.display === "none"){
    //     Berlines_js_list.style.display = "block";
    // } else {
    //     Berlines_js_list.style.display = "none";
    // }
}
let index = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

 console.log(slider);
 console.log(slides);
const visibleSlides = 3;
const totalSlides = slides.length;
const slideWidth = window.innerWidth / visibleSlides;


function updateSlider() {
    console.log("nombre slide "+totalSlides );
    console.log("index "+index );

    if (index > totalSlides - visibleSlides) {
        index = 0;
    } else if (index < 0) {
        index = 0;
    }
    const offset = -index * slideWidth;
    console.log("offset "+offset );
    slider.style.transform =`translateX(${offset}px)` ;
}

function next() {
    index++;
    updateSlider();
}

function previous() {
    index--;
    updateSlider();

}

// TAHA CODE
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const dotsContainer = document.querySelector(".pagination-dots");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
    const cards = document.querySelectorAll(".card");
    const totalDots = 3; // Toujours afficher 3 points comme sur le site officiel
    let currentPage = 0;

    // Création des points de pagination
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.setAttribute("data-index", i);
        dot.addEventListener("click", () => goToPage(i));
        dotsContainer.appendChild(dot);
    }

    function updateButtons() {
        leftBtn.style.display = currentPage > 0 ? "block" : "none"; // Cache le bouton gauche si on est sur la première page
        rightBtn.style.display = currentPage < totalDots - 1 ? "block" : "none"; // Cache le bouton droit si on est à la fin
    }

    function updateDots() {
        document.querySelectorAll(".dot").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentPage);
        });
    }

    function goToPage(page) {
        currentPage = page;
        const scrollAmount = (carousel.scrollWidth - carousel.clientWidth) / (totalDots - 1); 
        const newPosition = scrollAmount * page;
        carousel.scrollTo({ left: newPosition, behavior: "smooth" });
        updateDots();
        updateButtons();
    }

    function scrollCarouselLeft() {
        if (currentPage > 0) {
            currentPage--;
            goToPage(currentPage);
        }
    }

    function scrollCarouselRight() {
        if (currentPage < totalDots - 1) {
            currentPage++;
            goToPage(currentPage);
        }
    }

    leftBtn.addEventListener("click", scrollCarouselLeft);
    rightBtn.addEventListener("click", scrollCarouselRight);

    updateButtons(); // Cache le bouton gauche au chargement
});
