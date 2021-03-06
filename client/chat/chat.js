Template.chat.onRendered(function() {
        chatBtnCount = 0;
        textareaVal = '';
        chatMessage = '';
        date = new Date(); 
});

function textareaLength() {
    textareaVal = $('.textarea-in').val();
    if(textareaVal !== undefined){
        textareaVal = textareaVal.match(/\S+/g);
        textareaVal ? textareaVal.join(' ') : '';
    }
    if(textareaVal == null) {
        return false;
    }                    
    else 
        return true;
}

function createChatDiv() {
    chatMessage = '<section class="chat-left-user">';
    chatMessage += '<div class="chat-left-user-img">';
    chatMessage +=  '<img src="user.jpg" width="100%" height="100%"/>';
    chatMessage +=  '</div>';
    chatMessage +=  '<div class="chat-left-content">';
    chatMessage += '<div class="left-message">';
    chatMessage += textareaVal;
    chatMessage += '</div>';
    chatMessage += '<div class="chat-left-time">' ;
    chatMessage +=  formatAMPM(date);
    chatMessage +=  ' </div></div></section>';
    $('.chat-content').append(chatMessage);
    $('.textarea-in').val('');
    textareaVal = '';
    $(".chat-content").animate({ scrollTop: $('.chat-content').prop('scrollHeight')}, 1000); 
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

Template.chat.events({
    'click document': (e)=> {
        textareaLength();
        var target = e.target.parentNode; 
        if((!$(target).is('.textarea')) && !textareaLength()) {
            $('.textarea-in').css('border','none');
            $('.textarea-label').css({'transform':'translate(0, -10%)','transition':'transform 1s', 'font-size': '15px', 'color':'black'});
        }
    },
    'click .chat-btn': function() {
        if(chatBtnCount == 0) {
            $('.chat-btn-inner').css({'transform': 'rotate(-180deg)', 'left': '6px', 'top': '5px', 'transition': 'transform 1s'});
            $('.chat-block').css({'right': '334px', 'transition': 'right 1s'});
            chatBtnCount++;
        }else {
            $('.chat-btn-inner').css({'transform': 'none','left': '4px', 'top': '4px'});
            $('.chat-block').css({'right': '0px', 'transition': 'right 1s'});
            chatBtnCount--;
        } 
    },
    'click .comment-textarea-block': ()=> {
        $('.textarea-in').focus();
        $('.textarea-in').css('border-bottom','2px solid #EF4647');
        $('.textarea-label').css({'transform':'translate(0, -90%)','transition':'transform 1s', 'font-size': '10px', 'color':'blue'});
    },
    'click .comment-image': ()=> {
        if(textareaLength()) {
            createChatDiv();
        }
    },
    'keypress .textarea-in': (e)=> {
        if(e.which == 13 && textareaLength()) {                       
            createChatDiv(); 
        }else if(e.which == 13) {
            return false;
        }
    },
    'mouseover .chat-btn-outer': ()=> {
        $('.chat-btn-outer').css('background-color', '#EF4647');
    },
    'mouseout .chat-btn-outer': ()=> {
        $('.chat-btn-outer').css('background-color', 'blue');
    }
});