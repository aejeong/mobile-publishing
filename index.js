(function(){
    initialSwiper();
    clickEvent();
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

    var trendSwiper = new Swiper('.trend-section > .swiper-container', {
        // parallax:true,
        slidesOffsetBefore:20,
        slidesOffsetAfter:20,
        initialSlide: 0,
        loop: false,
        spaceBetween:20,
        slidesPerView:2.5,
    });
}

function clickEvent(){
    var trendNav = document.querySelector('.trend-nav');
    console.dir(trendNav,'--trendNav')
    trendNav.addEventListener('click',function(e){
        if(e.target.nodeName !== 'LI') return;
        for(var i=0;i<= trendNav.legnth;i++){
            trendNav.children[i].classList.remove('on')
        }
        e.target.classList.add('on')
    })
}