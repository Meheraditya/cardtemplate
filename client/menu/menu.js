Meteor.startup(function () {
    if(Meteor.isClient) {
        $(document).ready(function() {

            init();
            function init() {
                count = 0;
                menuSlide();
                addMenuActiveColor();
                createTooltip();  
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
                    $(this).append('<div class="active-item"></div>');
                });
            }
        });
    }
});
