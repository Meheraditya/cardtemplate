Template.menu.onRendered(function () { 

    init();
    function init() {
        count = 0;       
        baseFn();            
    }            

    function baseFn() {
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

Template.menu.events({
    'click .menu-btn': ()=> {
        if($('.menu-items')[0].clientWidth == '60') {
            $('.menu-items').css({'width': '245px', 'transition': 'width 1s'});
            $('.menu-item-name').css('display','flex');
            count++;
        }else {
            $('.menu-items').css({'width': '60px', 'transition': 'width 1s'});
            $('.menu-item-name').css('display','none');
            count = 0;
        }
    },
    'mouseover [data-tooltip]': (e)=> {
        if(count == 0) {
            var strToHtmlSpanAsMenuTooltip = $.parseHTML('<span class="tooltip">'+e.currentTarget.getAttribute("data-tooltip")+'</span>');
            e.currentTarget.parentElement.append(strToHtmlSpanAsMenuTooltip[0]);
        }
    },
    'mouseout [data-tooltip]': ()=> {
        $(".tooltip").remove();
    },
    'click .menu-item-block': (e)=> {
        var StrToHtmlActiveItem = $.parseHTML('<div class="active-item"></div>');
        $('.menu-item-block').removeClass('active-item-color');
        $('.active-item').remove();
        $(e.currentTarget).addClass('active-item-color');
        $(e.currentTarget).find('a').append(StrToHtmlActiveItem[0]);
    }
});
