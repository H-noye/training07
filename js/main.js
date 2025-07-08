window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        document.querySelector('.TopBanner').classList.add('on');
        document.querySelector('.MainVisual').classList.add('on');
    });

    document.querySelector('.lang strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.lang').classList.toggle('on');
    });

    document.querySelector('.top_search strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.top_search').classList.toggle('on');
    });

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');
        SCT > 600
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');

    });

    const slideDots = document.querySelectorAll('.slide_dots li');

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        slideActiveClass: 'on',

        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex; // 0 1 2
                slideDots.forEach(it => it.classList.remove('on'))
                slideDots[count].classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = "0" + (this.realIndex + 1) + " / <span>0" + (this.slides.length - 2);
            }
        }
    });

    document.querySelector('.MainVisual .slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.MainVisual .slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });


    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });

    const portfolio_right_slide = new Swiper('.portfolio_right_slide', {
        loop: true,
        effect: "slide",
        speed: 500,
        allowTouchMove: false,
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: ".Portfolio .slide_handler .next",
            prevEl: ".Portfolio .slide_handler .prev",
        },
    });


    const portfolio_left_slide = new Swiper('.portfolio_left_slide', {
        loop: true,
        speed: 500,
        effect: "fade",
        allowTouchMove: false,
    });


    portfolio_right_slide.controller.control = portfolio_left_slide;


    const SCBOX = document.querySelectorAll('.Solution .content_box>div');
    const solutionDots = document.querySelectorAll('.solution_dots li'); //유사배열... 

    const center_slider = new Swiper('.center_slider', {
        loop: true,
        spaceBetween: 100,
        centeredSlides: true,
        slideActiveClass: 'on',
        navigation: {
            nextEl: ".Solution .slide_handler .next",
            prevEl: ".Solution .slide_handler .prev",
        },

        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex;
                SCBOX.forEach(it => it.classList.remove('on'))
                SCBOX[count].classList.add('on');
                solutionDots.forEach(el => el.classList.remove('on'));
                solutionDots[count].classList.add('on');
                document.querySelector('.solution_slider_num').innerHTML = "0" + (this.realIndex + 1) + "<span>  / 0" + SCBOX.length;
            }
        }

    });


    document.querySelector('.Solution .slide_handler .next').addEventListener('click', () => {
        center_slider.slideNext();
    });
    document.querySelector('.Solution .slide_handler .prev').addEventListener('click', () => {
        center_slider.slidePrev();
    });



    solutionDots.forEach((it, idx) => {
        it.addEventListener("click", () => {
            solutionDots.forEach(el => el.classList.remove('on'));
            it.classList.add('on');
            center_slider.slideTo(idx + 1);
            console.log(center_slider.realIndex)
        })
    });


    document.querySelector('#FL').addEventListener('change', e => {
        let lnk = e.target.value;
        lnk && window.open(lnk)
    });


    document.querySelector('.to_top').addEventListener('click', function () {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });

    });


    const LINK_LI = document.querySelectorAll('.ft_top .right li');
    const LINK_CON = document.querySelectorAll('.ft_top .content .link');

    console.log(LINK_LI, LINK_CON);


    LINK_LI.forEach((it, idx) => {
        it.addEventListener('click', () => {
            if (it.classList.contains('on')) {
                it.classList.remove('on');
                LINK_CON[idx].classList.remove('on');
            } else {
                LINK_LI.forEach(el => el.classList.remove('on'));
                it.classList.add('on');
                LINK_CON.forEach(el => el.classList.remove('on'));
                LINK_CON[idx].classList.add('on');
            }
        })
    });

    console.log(document.cookie);

    const COOKIE = document.cookie;
    if (!COOKIE) {
        document.querySelector('.popup').style.display = 'block';
    }

    document.querySelector('.popup button').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none';
    });


    document.querySelector('.popup input').addEventListener('change', () => {
        const date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "name=popup;" + expires + ";path=/";
        document.querySelector('.popup').style.display = 'none';
    });

    document.querySelector('.popup').addEventListener('wheel', e => {
        e.preventDefault();
    })



});


