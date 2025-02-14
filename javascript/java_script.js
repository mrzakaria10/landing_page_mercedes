//  document.addEventListener("DOMContentLoaded", function() {
//      //select the first content 
//      let first_section = document.querySelector('.Berliness') 
//      if (first_section) {
//          first_section.style.display = "flex";
//      } 
//  });

let Color_black = document.querySelector('.active');
    Color_black.classList.add('active');


let first_section = document.querySelector('.Berliness');
first_section.style.display = "flex";
function showcategory(categoryID) {
    //alert("hi zakaria");
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