

const autoScroll = (button) => {
    let height = window.innerHeight;
    let weight = window.innerWidth;

    if((button === 1) && (height >= 500 && weight > 1000)) {
        if ((height > 600) && (height <= 800)) {
            window.scrollTo(0, (0.8 * height));
        }
        else if ((height >= 500) && (height <= 600)) {
            window.scrollTo(0, (1 * height));
        } else {
            window.scrollTo(0, (0.8 * height));
        }    
    }

    else if((button === 2) && (height >= 500 && weight > 1000)) {
        if ((height > 600) && (height <= 800)) {
            window.scrollTo(0, (1.55 * height));
        }
        else if ((height >= 500) && (height <= 600)) {
            window.scrollTo(0, (2 * height));
        } else {
            window.scrollTo(0, (1.3 * height));
        }   
    }

    else if((button === 3) && (height >= 500 && weight > 1000)) {
        if ((height > 600) && (height <= 800)) {
            window.scrollTo(0, (2.5 * height));
        }
        else if ((height >= 500) && (height <= 600)) {
            window.scrollTo(0, (3 * height));
        } else {
            window.scrollTo(0, (2 * height));
        }   
    }

    else if((button === 4) && (height >= 500 && weight > 1000)) {
        if ((height > 600) && (height <= 800)) {
            window.scrollTo(0, (3.2 * height));
        }
        else if ((height >= 500) && (height <= 600)) {
            window.scrollTo(0, (3.9 * height));
        } else {
            window.scrollTo(0, (2.9 * height));
        }   
    }

    else if((button === 5) && (height >= 500 && weight > 1000)) {
        if ((height > 600) && (height <= 800)) {
            window.scrollTo(0, (4 * height));
        }
        else if ((height >= 500) && (height <= 600)) {
            window.scrollTo(0, (4.9 * height));
        } else {
            window.scrollTo(0, (3.5 * height));
        }   
    }
}

let mobileNav = document.querySelector(".mobile-navigation-conteiner");
let hamburgerMenu = document.querySelector(".mobile-menu-button");

let closeOpen = 0;
hamburgerMenu.addEventListener ("click", () => {
    if(closeOpen === 0) {
        mobileNav.style = "visibility: visible;";
        closeOpen += + 1;
    } else {
        mobileNav.style = "visibility: hidden;";
        closeOpen = 0;
    }
}) 
