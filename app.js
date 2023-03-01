let primaryClr = '#0047FF';
let primaryOp = '.8';
let secondaryClr = '#000';
let secondaryOp = '.67';

// Navbar logic
let curPage = 1;
// Variables for all the pages
const home = document.getElementById('home');
const work = document.getElementById('work');
const about = document.getElementById('about');
const links = document.getElementById('links');
const contact = document.getElementById('contact');
//Variable for background
const bg = document.getElementById('bg');


let currBg = 1;
// Logic to decide what background to use
function bgLogic(){
    if(currBg == 1){
        bg.style.backgroundColor = primaryClr;
        bg.style.opacity = primaryOp;
        currBg = 2;
    }else if(currBg == 2){
        bg.style.backgroundColor = secondaryClr;
        bg.style.opacity = secondaryOp;
        currBg = 1;
    }
}
// Send the home page out when the page loads
function init() {
    home.style.transform = 'translateX(0%)';
    bgLogic();
    curPage = 1;

}
init();
document.querySelectorAll('.nav-btn').forEach(function (el) {
    el.addEventListener('click', function () {
        if (el.classList.contains('home')) {
            // Switch the page depending on what the current page is right now
            switch (curPage) {
                case 1:
                    // Break out of the loop if the current page is the same as the page we want to go to
                    break;
                case 2:
                    work.style.transform = 'translateX(-200%)';
                    home.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 1;
                    break;
                case 3:
                    about.style.transform = 'translateX(-200%)';
                    home.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 1;
                    break;
                case 4:
                    links.style.transform = 'translateX(-200%)';
                    home.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 1;
                    break;
                case 5:
                    contact.style.transform = 'translateX(-200%)';
                    home.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 1;
                    break;
            }

        }
        else if (el.classList.contains('work')) {
            // Switch the page depending on what the current page is right now
            switch (curPage) {
                case 1:
                    home.style.transform = 'translateX(-200%)';
                    work.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 2;
                    break;
                case 2:
                    // Break out of the loop if the current page is the same as the page we want to go to
                    break;
                case 3:
                    about.style.transform = 'translateX(-200%)';
                    work.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 2;
                    break;
                case 4:
                    links.style.transform = 'translateX(-200%)';
                    work.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 2;
                    break;
                case 5:
                    contact.style.transform = 'translateX(-200%)';
                    work.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 2;
                    break;
            }
        }
        else if (el.classList.contains('about')) {
            // Switch the page depending on what the current page is right now
            switch (curPage) {
                case 1:
                    home.style.transform = 'translateX(-200%)';
                    about.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 3;
                    
                    break;
                case 2:
                    work.style.transform = 'translateX(-200%)';
                    about.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 3;
                    break;
                case 3:
                    // Break out of the loop if the current page is the same as the page we want to go to
                    break;
                case 4:
                    links.style.transform = 'translateX(-200%)';
                    about.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 3;
                    break;
                case 5:
                    contact.style.transform = 'translateX(-200%)';
                    about.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 3;
                    break;
            }
        }
        else if (el.classList.contains('links')) {
            // Switch the page depending on what the current page is right now
            switch (curPage) {
                case 1:
                    home.style.transform = 'translateX(-200%)';
                    links.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 4;
                    break;
                case 2:
                    work.style.transform = 'translateX(-200%)';
                    links.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 4;
                    break;
                case 3:
                    about.style.transform = 'translateX(-200%)';
                    links.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 4;
                    break;
                case 4:
                    
                    // Break out of the loop if the current page is the same as the page we want to go to
                    break;
                case 5:
                    contact.style.transform = 'translateX(-200%)';
                    links.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 4;
                    break;
            }
        }
        else if (el.classList.contains('contact')) {
            // Switch the page depending on what the current page is right now
            switch (curPage) {
                case 1:
                    home.style.transform = 'translateX(-200%)';
                    contact.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 5;
                    break;
                case 2:
                    work.style.transform = 'translateX(-200%)';
                    contact.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 5;
                    break;
                case 3:
                    about.style.transform = 'translateX(-200%)';
                    contact.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 5;
                    break;
                case 4:
                    links.style.transform = 'translateX(-200%)';
                    contact.style.transform = 'translateX(0%)';
                    bgLogic();
                    curPage = 5;
                    break;
                case 5:
                    // Break out of the loop if the current page is the same as the page we want to go to
                    break;
            }
        }

    })
});

// Work list
document.querySelectorAll('.work-li').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        if (el.classList.contains('prepared')) {
            // Do Something
        } else if (el.classList.contains('afk')) {
            // Do Something
        } else if (el.classList.contains('word')) {
            // Do Something
        } else if (el.classList.contains('googleEarth')) {
            // Do Something
        } else if (el.classList.contains('jordan')) {
            // Do Something
        }
    })
});
