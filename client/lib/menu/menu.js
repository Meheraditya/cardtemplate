Template.menu.onRendered(function () { 
    $(document).ready(function() {

        init();
        function init() {
            count = 0;
            menuSlide();
            addMenuActiveColor();
            createTooltip();            
            selectMenu();            
        }            

        function menuSlide() {
            $('.menu-btn').on('click', function() {
                if($('.menu-items')[0].clientWidth == '60') {
                    $('.menu-items').css({'width': '245px', 'transition': 'width 1s'});
                    $('.menu-item-name').css('display','flex');
                    count++;
                }else {
                    $('.menu-items').css({'width': '60px', 'transition': 'width 1s'});
                    $('.menu-item-name').css('display','none');
                    count = 0;
                }
            });
        }

        function createTooltip(tooltipActive) {
            $("[data-tooltip]").on('mouseover', function() {
                if(count == 0){
                    var $this = $(this);
                    $this.append("<span class='tooltip'>"+$this[0].getAttribute('data-tooltip')+"</span>");
                }
            });
            $("[data-tooltip]").on('mouseout', function() {
                $(".tooltip").remove();
            });                
        }

        function addMenuActiveColor() {
            $('.menu-item-block').on('click', function() {
                $('.menu-item-block').removeClass('active-item-color');
                $('.active-item').remove();
                $(this).addClass('active-item-color');
                $(this).find('a').append('<div class="active-item"></div>');
            });
        }

        function selectMenu() {
            var url = window.location.pathname;  // gets url pathname
            url = url.replace(/[^a-zA-Z 0-9]+/g, '');  // removes farward slash(/) in url
            if(url != '') {
                var $dataTooltip = $('[data-url='+url+']');
                $('.menu-item-block').removeClass('active-item-color');
                $('.active-item').remove();

                $dataTooltip.parents('.menu-item-block').addClass('active-item-color');
                $dataTooltip.parent('a').append('<div class="active-item"></div>');
            }
        }
    });
});

// Template.menu.events({
//     'click .menu-btn': function () {
//         if($('.menu-items')[0].clientWidth == '60') {
//             $('.menu-items').css({'width': '245px', 'transition': 'width 1s'});
//             $('.menu-item-name').css('display','flex');
//             count++;
//         }else {
//             $('.menu-items').css({'width': '60px', 'transition': 'width 1s'});
//             $('.menu-item-name').css('display','none');
//             count = 0;
//         }
//     }  
// });

// Template.menu.events({
//     'mouseover [data-tooltip]': function () {
//         if($('.menu-items')[0].clientWidth == '60') {
//             $('.menu-items').css({'width': '245px', 'transition': 'width 1s'});
//             $('.menu-item-name').css('display','flex');
//             count++;
//         }else {
//             $('.menu-items').css({'width': '60px', 'transition': 'width 1s'});
//             $('.menu-item-name').css('display','none');
//             count = 0;
//         }
//     }    
// });

// Template.menu.events({
//     'click .menu-item-block': function () {
//         $('.menu-item-block').removeClass('active-item-color');
//         $('.active-item').remove();
//         $(this).addClass('active-item-color');
//         $(this).find('a').append('<div class="active-item"></div>');
//     }    
// });