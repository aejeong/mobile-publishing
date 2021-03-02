(function(){
    initialSwiper();
    trendClickEvent();
    playListClickEvent();
    searchClickEvent();
    navigationScrollEvent();
    buttonCloseEvent();
    openMenu();
    changeTheme();
})();

function initialSwiper(){
    var cardsSwiper = new Swiper('.cards > .swiper-container', {
        initialSlide: 1,
        loop: true,
        slidesPerView:'auto',
        spaceBetween:15,
        centeredSlides:true,
        // slidesOffsetBefore:30,
        // slidesOffsetAfter:30,
        pagination: {
        el: '.swiper-pagination'
    },
    });

    var trendSwiper = new Swiper('.trend-area > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:'auto',
    });

    var newReleaseSwiper = new Swiper('.new-release > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:'auto',
    });

    var weeklySwiper = new Swiper('.weekly > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:'auto',

    });

    var monthlySwiper = new Swiper('.monthly > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:'auto',

    });

    var playListSwiper = new Swiper('.swiper-container.playlist', {
        spaceBetween:15,
        slidesPerView:'auto',
    });

    var recommSwiper = new Swiper('.recomm-wrap01 .swiper-container', {
        slidesPerView:'auto',
        spaceBetween:10,

    });

    
    var artistSwiper = new Swiper('.recomm-artist .swiper-container', {
        slidesPerView:'auto',
        spaceBetween:10,
    });

    var cateSwiper = new Swiper('.recomm-cate .swiper-container', {
        slidesPerView:'auto',
        spaceBetween:10,
        slidesPerColumn:2
    });
}

function trendClickEvent(){
    var trendNav = document.querySelector('.trend-nav');
    var trends = document.querySelectorAll('.trend-section');
    trendNav.addEventListener('click',function(e){        
        if(e.target.nodeName !== 'LI') return;

        var idx = Array.from(trendNav.children).indexOf(e.target)
        var trendOn = document.querySelector('.trend-nav .on')
        var activatedTrend = document.querySelector('.trend-section.active');
        activatedTrend.classList.remove('active');
        trends[idx].classList.add('active');
        trendOn.classList.remove('on');
        e.target.classList.add('on')
    })
}

function playListClickEvent(){
    var playlistNav = document.querySelector('.my-nav');
    var lists = document.querySelectorAll('.lists');
    playlistNav.addEventListener('click',function(e){
        var activatedButton = document.querySelector('.my-nav .active');
        var activatedLists = document.querySelector('.lists.active');
        // remove previous active
        activatedButton.classList.remove('active');
        activatedLists.classList.remove('active');
        // add new active
        if(e.target.nodeName === 'BUTTON'){
            var idx = Array.from(playlistNav.children).indexOf(e.target)
            e.target.classList.add('active');
        }else if(e.target.nodeName === 'SPAN'){
            var idx = Array.from(playlistNav.children).indexOf(e.target.parentNode)    
            e.target.parentNode.classList.add('active')
        }
        lists[idx].classList.add('active');

    })
}

function searchClickEvent(){
    var searchIcon = document.querySelector('.search-icon')
    var searchInput = document.querySelector('.search-txt');
    var search = document.querySelector('.search');
    console.dir(search,'---search')
    searchIcon.addEventListener('click',function(e){
        search.classList.add('on')
    })
}

function navigationScrollEvent(){
    var navigation = document.querySelector('.navigation');
    var isScrolling;
    window.addEventListener('scroll',function(e){
        clearTimeout(isScrolling);
        isScrolling = setTimeout(function(){
            navigation.classList.remove('translate')
        },250);
        if(scrollY > 0){
            navigation.classList.add('translate')
        }
    })
}

function menuButtonClickEvent(){
    var menu = document.querySelector('.menu-btn');
    menu.addEventListener('click',function(e){

    })
}

function buttonCloseEvent(){
    var close = document.querySelector('.close')
    var search = document.querySelector('.search');
    close.addEventListener('click',function(){
        search.classList.remove('on');
    })
}

function openMenu() {
    var menuBtn = document.querySelector('.menu-btn');
    var navigation = document.querySelector('.navigation');
    var menu = document.querySelector('.menu')
    menuBtn.addEventListener('click',function(){
        menu.classList.toggle('on');
        navigation.classList.toggle('none');
        menuBtn.classList.toggle('on');
    })
}

function changeTheme() {
    var themeBtn = document.querySelector('.th-fix');
    themeBtn.addEventListener('click',function(){
        document.body.classList.toggle('on');
    })
}