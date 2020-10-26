// back to top
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    if (scrollY >= 200) {
        document.getElementById('backtotop').style.visibility = 'unset';
    }

    if (scrollY < 200) {
        document.getElementById('backtotop').style.visibility = 'hidden';
    }
});

function backToTop() {
    var top = document.querySelector('.notification-sale');
    top.scrollIntoView();
}

// header mobile 
function showMobileMenu () {
    var mobileMenu = document.querySelector('.header-mobile_menu');
    var mask = document.querySelector('.mask');
    mobileMenu.classList.add('header-mobile_menu-active');
    mask.style.zIndex = 99;
    mask.style.opacity = 1;
    mask.addEventListener('click', function () {
        mobileMenu.classList.remove('header-mobile_menu-active');
        mask.style.zIndex = -1;
        mask.style.opacity = 0;
    })
}

var buttonShowSubMenus  = document.querySelectorAll('.header-mobile_menu .btn-show-sub-menu');
var buttonCloseSubMenus = document.querySelectorAll('.header-mobile_menu .btn-close-sub-menu');
var subMenus            = document.querySelectorAll('.header-mobile_menu .sub-menu');
var itemHasSubMenus     = document.querySelectorAll('.header-mobile_menu .has-sub-menu');
for (var i=0; i<buttonShowSubMenus.length; i++) {
    buttonShowSubMenus[i].index = i;
    buttonCloseSubMenus[i].index = i;

    buttonShowSubMenus[i].addEventListener('click', function () {
        this.style.display = "none";
        buttonCloseSubMenus[this.index].style.display = "block";
        subMenus[this.index].classList.add('sub-menu-active');
        itemHasSubMenus[this.index].classList.add('has-sub-menu-active');
    })

    buttonCloseSubMenus[i].addEventListener('click', function () {
        this.style.display = "none";
        buttonShowSubMenus[this.index].style.display = "block";
        subMenus[this.index].classList.remove('sub-menu-active');
        itemHasSubMenus[this.index].classList.remove('has-sub-menu-active');
    })
}


// Process checkbox
var checkboxs = document.querySelectorAll('.content_main-left input[type="checkbox"]');
for (var i=0; i<checkboxs.length; i++) {
    checkboxs[i].addEventListener('change', function () {
        let fakeCheckbox = this.nextElementSibling;
        fakeCheckbox.classList.toggle('fake-checkbox-active');
    });
}

var checkboxs = document.querySelectorAll('.content_main-right input[type="checkbox"]');
for (var i=0; i<checkboxs.length; i++) {
    checkboxs[i].addEventListener('change', function () {
        let fakeCheckbox = this.nextElementSibling;
        fakeCheckbox.classList.toggle('fake-checkbox-active');
    });
}

// Sub menu menu filter side bar
var buttonToOpenDropMenus = document.querySelectorAll('.btn-show-drop-menu');
var buttonCloseDropMenus   = document.querySelectorAll('.btn-close-drop-menu');
var dropMenus             = document.querySelectorAll('ul.drop-menu');
var hasDropMenus          = document.querySelectorAll('.has-drop-menu');
for (var i=0; i<buttonToOpenDropMenus.length; i++) {
    buttonToOpenDropMenus[i].index = i;
    buttonCloseDropMenus[i].index = i;
    buttonToOpenDropMenus[i].addEventListener('click', function () {
        this.style.display = "none";
        buttonCloseDropMenus[this.index].style.display ="block";
        dropMenus[this.index].classList.toggle('drop-menu-active');
        hasDropMenus[this.index].classList.toggle('has-drop-menu-active');
    });

    buttonCloseDropMenus[i].addEventListener('click', function () {
        this.style.display = "none";
        buttonToOpenDropMenus[this.index].style.display ="block";
        dropMenus[this.index].classList.toggle('drop-menu-active');
        hasDropMenus[this.index].classList.toggle('has-drop-menu-active');
    });
}

// Menu filter side bar 
var buttonOpenContentMainLeft = document.querySelector('.open-main-left-mobile');
buttonOpenContentMainLeft.addEventListener('click', function () {
    this.classList.toggle('open-main-left-mobile-active');
    document.querySelector('.content_main-left').classList.toggle('content_main-left-active');
})