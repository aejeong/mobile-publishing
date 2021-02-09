(function(){
    initialSwiper();
    trendClickEvent();
    playListClickEvent();
})();

function initialSwiper(){
    var cardsSwiper = new Swiper('.cards > .swiper-container', {
        // parallax:true,
        initialSlide: 0,
        loop: false,
        slidesPerView:1.5,
        spaceBetween:30,
        slidesOffsetBefore:30,
        slidesOffsetAfter:30,
        pagination: {
        el: '.swiper-pagination'
    },
    });

    var trendSwiper = new Swiper('.trend-area > .swiper-container', {
        // parallax:true,
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:2.5,
    });

    var newReleaseSwiper = new Swiper('.new-release > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:2.5,
    });

    var weeklySwiper = new Swiper('.weekly > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:2.5,
    });

    var monthlySwiper = new Swiper('.monthly > .swiper-container', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:2.5,
    });

    var playListSwiper = new Swiper('.swiper-container.playlist', {
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:1.5,
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