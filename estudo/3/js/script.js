$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
       
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 4000,
        from: {color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color); 

            let value = Math.round(circle.value() * 2355);

            circle.setText(value);

        }
        


    });
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
       
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 4000,
        from: {color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color); 

            let value = Math.round(circle.value() * 70);

            circle.setText(value);

        }
        


    });
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
       
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 4000,
        from: {color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color); 

            let value = Math.round(circle.value() * 23);

            circle.setText(value);

        }
        


    });
    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
       
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 4000,
        from: {color: '#AAA' },
        to: {color: '#65DAF9'}, //#A50B01

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color); 

            let value = Math.round(circle.value() * 50);

            circle.setText(value);
        }
    });

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 400) && stop == 0){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }

    });

    

    //Parallax 
    setTimeout(function() {

        $('#data-area').parallax({imageSrc:'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc:'img/pattern.png'});
        $('#integ-area').parallax({imageSrc:'img/pattern.png'});
        $('#atacado-area').parallax({imageSrc:'img/pattern.png'});

    }, 250);

    // Filtro do portfolio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'mkp-btn'){
            eachBoxes('mkp', boxes);
        } else if(type == 'pay-btn') {
            eachBoxes('pay', boxes);
        } else if(type == 'log-btn') {
            eachBoxes('log', boxes);
        } else if(type == 'erp-btn') {
            eachBoxes('erp', boxes);
        }

    });

    function eachBoxes(type, boxes) {

        if(type == 'mkp') {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('fast');
                } else {
                    $(this).fadeIn();
                }
            });
        } else if(type == 'pay') {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('fast');
                } else {
                    $(this).fadeIn();
                }
            });
        } else if(type == 'log') {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('fast');
                } else {
                    $(this).fadeIn();
                }
            });
        } else if(type == 'erp') {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('fast');
                } else {
                    $(this).fadeIn();
                }
            });
        }

    }

    //scroll
    
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {
        
        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu'){
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu'){
            scrollTo = teamSection;
        } else if(btnId = 'portfolio-menu'){
            scrollTo = portfolioSection;
        } else if(btnId = 'contact-menu'){
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });



});