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

// slider
var newProductList = new Swiper('.new-product_list', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.new-product_slide-next',
        prevEl: '.new-product_slide-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 15,
        },

        1365: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
    }
  
});

var watchForMan = new Swiper('.watch-for-man_list', {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.watch-for-man_slide-next',
        prevEl: '.watch-for-man_slide-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
    }
});

var watchForWoman = new Swiper('.watch-for-woman_list', {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.watch-for-woman_slide-next',
        prevEl: '.watch-for-woman_slide-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
    }
});

var bestEquipment = new Swiper('.best-equipment_list', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 5,
    navigation: {
        nextEl: '.best-equipment_slide-next',
        prevEl: '.best-equipment_slide-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    }
});

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

// modal show product
var swiper = new Swiper('.modal_thumbnail', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.modal_thumbnail_slide-next',
        prevEl: '.modal_thumbnail_slide-prev',
    },
})

var buttonToShowModalProduct = document.querySelectorAll('.animation3d i.fa-search-plus');
for (var i=0; i<buttonToShowModalProduct.length; i++) {
    buttonToShowModalProduct[i].addEventListener('click', function () {
        document.querySelector('.modal-show-product').classList.add('modal-show-product-active');
        document.querySelector('.modal-main').addEventListener('click', function () {
            event.stopPropagation();
        })
    });
}

document.querySelector('.modal-show-product').addEventListener('click', function () {
   this.classList.remove('modal-show-product-active'); 
});

function closeModalProduct() {
    document.querySelector('.modal-show-product').classList.remove('modal-show-product-active');
}