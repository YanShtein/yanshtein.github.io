var mobileBackdrop = document.querySelector(".mobile-backdrop")
var mobileToggle = document.querySelector(".header-item__main-mobileToggle")
var mobileNav = document.querySelector(".mobile-nav")
var MobileExit = document.querySelector(".mobile-nav-item__exit")

var cardHover = document.querySelector(".card")
var descDrop = document.querySelector(".drop")
var descShow = document.querySelector(".pic-hover")

var backdropCardsImage = document.querySelector(".card-items__img")
var backdropCards = document.querySelector(".backdrop-cards")

var filterBtn = document.querySelector(".filter-btn")
var filterMobile = document.querySelector(".filter-mobile")
var filterSearch = document.querySelector("#mobile-btn")

// --------------> Mobile toggle -------------->
mobileToggle.addEventListener("click", function() {
    mobileBackdrop.style.display = "block";
    mobileNav.style.display = "block";
})
mobileBackdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    mobileBackdrop.style.display = 'none';
})
MobileExit.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    mobileBackdrop.style.display = 'none';
})
// <-------------- Mobile toggle <--------------

// --------------> FILTER BUTTONS -------------->
var dropdownBtn = document.querySelectorAll(".dropdown-btn")
var dropdownMenu = document.querySelectorAll(".dropdown-menu")
var filterItemParent = document.querySelectorAll(".filter-item")

for (let i = 0; i < dropdownBtn.length; i++) {
    dropdownBtn[i].addEventListener("click", function() {
        dropdownMenu[i].style.display = 'flex';
    });
}
for (let i = 0; i < filterItemParent.length; i++) {
    filterItemParent[i].addEventListener("mouseleave", function() {
        dropdownMenu[i].style.display = 'none';
    });
}

// <-------------- FILTER BUTTONS <--------------

// --------------> Show full description backdrop on Image -------------->
var html = document.querySelector("html")

backdropCardsImage.addEventListener("mouseover", function() {
    descDrop.style.display = 'block';
    descShow.style.display = 'flex';
})
html.addEventListener("click", function() {
    descDrop.style.display = 'none';
    descShow.style.display = 'none';
})
// <-------------- Show full description backdrop on Image <--------------

// --------------> When clicking on show description open image larger with full text -------------->
descShow.addEventListener("click", function() {
    backdropCards.style.display = 'block';
})
backdropCards.addEventListener("click", function() {
    backdropCards.style.display = 'none';
})
// <-------------- When clicking on show description open image larger with full text <--------------

// --------------> Filter button on mobile -------------->
filterBtn.addEventListener("click", function() {
    filterMobile.style.display = 'block';
})
filterSearch.addEventListener("click", function() {
    filterMobile.style.display = 'none';
})
// <-------------- Filter button on mobile <--------------

// --------------> Contact button -------------->
var contactButton = document.querySelectorAll(".card-items__contact")
var contactShow = document.querySelectorAll(".showDetails")

for (let i = 0; i < contactButton.length; i++) {
    contactButton[i].addEventListener("click", function() {
        contactButton[i].style.display = 'none';
        contactShow[i].style.display = 'block';
    });
}
