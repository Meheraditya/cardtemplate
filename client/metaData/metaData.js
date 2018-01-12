Meteor.startup(function () {
    if(Meteor.isClient){
        $(document).ready(function() {

            var hideDropDownCount = 0;

            init();
            function init() {
                baseFn();
            }

            function baseFn() {

                $('.meta-button').on('mouseover', function(){
                    $('.meta-button').css('transform', 'scale(1.1, 1.1)');
                });

                $('.meta-button').on('mouseout', function(){
                     $('.meta-button').css('transform', 'scale(1, 1)');
                });

                $('.info-block').on('click', function() {
                    addColor('.logo-info', '.info-block');
                    removeColor('.logo-additional-info', '.addi-info-block');
                    removeColor('.Philosophy', '.philosophy-block');
                    removeColor('.presence', '.presence-block');
                });

                $('.addi-info-block').on('click', function()  {
                    removeColor('.logo-info', '.info-block');
                    addColor('.logo-additional-info', '.addi-info-block');
                    removeColor('.Philosophy', '.philosophy-block');
                    removeColor('.presence', '.presence-block');
                });

                $('.philosophy-block').on('click', function()  {
                    removeColor('.logo-info', '.info-block');
                    removeColor('.logo-additional-info', '.addi-info-block');
                    addColor('.Philosophy', '.philosophy-block');
                    removeColor('.presence', '.presence-block');
                });

                $('.presence-block').on('click', function()  {
                    removeColor('.logo-info', '.info-block');
                    removeColor('.logo-additional-info', '.addi-info-block');
                    removeColor('.Philosophy', '.philosophy-block');
                    addColor('.presence', '.presence-block');
                });

                $('.business').on('click', function(e) {
                    e.preventDefault();
                    if(hideDropDownCount == 0) {
                        $('.business>.business-type').css('display', 'block');

                        $('.business-options').mouseover(function(){
                            $(this).css('background-color', '#66FF66');
                        });

                        $('.business-options').mouseout(function(){
                            $(this).css('background-color', 'white');
                        });

                        $('.business-options').click(function(){
                            var getBusinessText = $(this).text();
                            $('.business-in').val(getBusinessText);
                            $('.business-div').css('display', 'none');
                            $('.business-close').css('display', 'block');
                        });

                        $('.business-close').click(function() {
                            $('.business-in').val('');
                            $(this).css('display', 'none');
                            $('.business-div').css('display', 'block');
                        });
                        hideDropDownCount++;
                    }else {
                        $('.business>.business-type').css('display', 'none');
                        hideDropDownCount = 0;
                    }

                });
            }

            function addColor(ClassName1, ClassName2) {
                $(ClassName1).css({'border': '2px solid #EF4647','background-color': '#EF4647'});
                $(ClassName2 + ' > .logo-border').css({'border-bottom': '2px solid #EF4647'});
                $(ClassName2 + ' > .logo-common > .logo-symbol').css('color', 'white');
                $(ClassName2 + ' > .logo-common > .logo-title').css('color', '#EF4647');
            }

            function removeColor(ClassName1, ClassName2) {
                $(ClassName1).css({'border': '2px solid #627DAE','background-color': 'white'});
                $(ClassName2 + ' > .logo-border').css({'border-bottom': '2px solid #627DAE'});
                $(ClassName2 + ' > .logo-common > .logo-symbol').css('color', 'black');
                $(ClassName2 + ' > .logo-common > .logo-title').css('color', '#627DAE');
            }
        });
    }
});