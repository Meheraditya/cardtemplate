Meteor.startup(function(){
    if(Meteor.isClient) {
        $(document).ready(function() {
            var chatBtnCount = 0;
            $('.chat-btn').on('click', function() {
                if(chatBtnCount == 0) {
                    $('.chat-btn-inner').css({'transform': 'rotate(-180deg)', 'left': '6px', 'top': '5px', 'transition': 'transform 1s'});
                    $('.chat-block').css({'left': '331px', 'transition': 'left 1s'});
                    chatBtnCount++;
                }else {
                    $('.chat-btn-inner').css({'transform': 'none','left': '4px', 'top': '4px'});
                    $('.chat-block').css({'left': '0px', 'transition': 'left 1s'});
                    chatBtnCount--;
                }                
            });

            $('.comment-textarea-block').on('click', function(){
                $('.textarea-in').focus();
                $('.textarea-in').css('border-bottom','1px solid #EF4647');
                $('.textarea-label').css({'transform':'translate(0, -90%)','transition':'transform 1s', 'font-size': '10px', 'color':'blue'});
            });
        });
    }
});