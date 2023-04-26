let review = '1. Вёрстка валидная +10 \n2. Вёрстка семантическая +20 \n3. Вёрстка соответствует макету +48 \n4. Требования к css + 12 \n5. Интерактивность, реализуемая через css +20';
console.log(review);

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-list-item');
let menuClose = document.querySelector('.burger-close-ico');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger-open');
    menu.classList.toggle('active');
})

window.onclick = function (event) {
    if (!event.target.matches('.ico')) {
        let dropdowns = document.getElementsByClassName("nav-list-item");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                burger.classList.remove('burger-open');
                openDropdown.classList.remove('active');
            }
        }
    }
}



let serviceBtn = document.querySelectorAll('.service-btn');
let serviceCard = document.querySelectorAll('.service-card');

let serviceCardGarden = document.querySelectorAll('.garden');
let gardenBtn = document.querySelector('.garden-btn')

let serviceCardPlanting = document.querySelectorAll('.planting');
let plantingBtn = document.querySelector('.planting-btn')
let serviceCardLawn = document.querySelectorAll('.lawn');
let lawnBtn = document.querySelector('.lawn-btn')

let counterBtn = 0;
let filter = document.querySelectorAll('.blur');



serviceBtn.forEach(button => {
    button.addEventListener('click', function () {
        if (button.classList.contains('hover')) {
            blur();
            button.classList.remove('hover');
            counterBtn -= 1;
        } else if (counterBtn < 2) {
            button.classList.add('hover');
            counterBtn += 1;
            blur();
        }
    })
})

function blur() {
    if (gardenBtn.classList.contains('hover')) {
        serviceCardPlanting.forEach(plantingBtn => {
            plantingBtn.classList.toggle('blur');
        });
        serviceCardLawn.forEach(lawnBtn => {
            lawnBtn.classList.toggle('blur');
        });

    } else if (plantingBtn.classList.contains('hover')) {
        serviceCardGarden.forEach(gardenBtn => {
            gardenBtn.classList.toggle('blur');
        });
        serviceCardLawn.forEach(lawnBtn => {
            lawnBtn.classList.toggle('blur');
        });

    } else if (lawnBtn.classList.contains('hover')) {
        serviceCardGarden.forEach(gardenBtn => {
            gardenBtn.classList.toggle('blur');
        });
        serviceCardPlanting.forEach(plantingBtn => {
            plantingBtn.classList.toggle('blur');
        });
    }
}

let pticesItemB = document.querySelector('.prices-itemB');
let pticesItemS = document.querySelector('.prices-itemS');
let pticesItemC = document.querySelector('.prices-itemC');
let basics = document.querySelector('.basics');
let standard = document.querySelector('.standard');
let care = document.querySelector('.care');
let toP = document.querySelector('.top');
let topS = document.querySelector('.topS');
let topC = document.querySelector('.topC');


pticesItemB.addEventListener('click', function () {
    pticesItemB.classList.toggle('none')
    basics.classList.toggle('block');
})
toP.addEventListener('click', function () {
    pticesItemB.classList.toggle('none')
    basics.classList.toggle('block');
})

pticesItemS.addEventListener('click', function () {
    pticesItemS.classList.toggle('none')
    standard.classList.toggle('block');
})
topS.addEventListener('click', function () {
    pticesItemS.classList.toggle('none')
    standard.classList.toggle('block');
})

pticesItemC.addEventListener('click', function () {
    pticesItemC.classList.toggle('none')
    care.classList.toggle('block');
})
topC.addEventListener('click', function () {
    pticesItemC.classList.toggle('none')
    care.classList.toggle('block');
})

let contactsBtn = document.querySelector('.contacts-btn');
let contactsBtnGreen = document.querySelector('.contacts-choice');

contactsBtn.addEventListener('click', function () {
    contactsBtn.classList.toggle('none')
    contactsBtnGreen.classList.toggle('block');
})
contactsBtnGreen.addEventListener('click', function () {
    contactsBtn.classList.toggle('none')
    contactsBtnGreen.classList.toggle('block');
})