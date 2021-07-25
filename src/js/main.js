@@include('./swiper-bundle.min.js');

@@include('./bootstrap.bundle.js');

new Swiper('.team__container', {
    slidesPerView: 3,
    // centeredSlides: true,
    // loop: true,
  spaceBetween: 30,

    slideClass: 'team__slide',
    navigation: {
        nextEl: '.team__next',
        prevEl: '.team__prev',
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});

new Swiper('.clients__slider', {
    slidesPerView: 6,
    spaceBetween: 30,

    slideClass: 'clients__slide',
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 4,
        },
        850: {
            slidesPerView: 5,
        },
        1000: {
            slidesPerView: 6,
        },
    },
    navigation: {
        nextEl: '.clients__next',
        prevEl: '.clients__prev',
      },
});

new Swiper('.portfolio__slider', {
    slidesPerView: 'auto',
    slideClass: 'portfolio__slide',
    loop: true,
    pagination: {
        el: '.portfolio__pagination',
        clicable: true,
    }
});

new Swiper('.posts__sldier', {
    slidesPerView: 3,
    spaceBetween: 20,
    slideClass: 'posts__slide',
    loop: true,
    navigation: {
        nextEl: '.posts__next',
        prevEl: '.posts__prev',
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
    // pagination: {
    //     el: '.portfolio__pagination',
    //     clicable: true,
    // }
});


let btnsProduct = document.querySelector('.posts__sldier');
btnsProduct.addEventListener('click', function(e) {
	if (!e.target.closest('button')) return;
	let btn = e.target.closest('button');
	if (btn.classList.contains('posts-btn-active')) return;
	
	let btns = Array.from(this.querySelectorAll('button'));

	removeClass(btns, 'posts-btn-active');
	btn.classList.add('posts-btn-active');

	let btnId = btn.id;

	let boxs = Array.from(document.querySelectorAll('.posts__item'));
    
	removeClass(boxs, 'd-none');
	if (btnId === 'all') return;

	boxs
		.filter(box => box.dataset.post !== btnId)
		.map(box => box.classList.add('d-none'));
});

function removeClass(btnsArr, className) {
	btnsArr
		.filter(item => item.classList.contains(className))
		.map(item => item.classList.remove(className));
}
