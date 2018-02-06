Template.chat.onRendered(function() {
            });

            $('.chat-btn-outer').on('mouseover', function(){
                $(this).css('background-color', '#EF4647');
            });
            $('.chat-btn-outer').on('mouseout', function(){
                $(this).css('background-color', 'blue');
            });
        }

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
    });
});