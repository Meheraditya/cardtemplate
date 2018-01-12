Meteor.startup(function () {
    if(Meteor.isClient){
        $(document).ready(function() {

            var getDepartInput;                    
            var getDisplayNameInput;                   
            var getAboutInput;
            var getDepartNameVal;
            var getDisplayNameVal;
            var getAboutVal;

            var getSelect1Input;
            var getSelect2Input;
            var getSelect3Input;
            var getSelect4Input;
            var getSelect5Input;
            var emailInput;
            var getSelect1Val;
            var getSelect2Val;
            var getSelect3Val;
            var getSelect4Val;
            var getSelect5Val;
            var getEmailVal;

            init();
            function init() {
                baseFn();
            }

            function baseFn() {
                getDepartInput = $('input[name="departmentName"]');                   
                getDisplayNameInput = $('input[name="displayName"]');                   
                getAboutInput = $('textarea[name="about"]');

                getSelect1Input = $('select[name="select1-name"]');
                getSelect2Input = $('select[name="select2-name"]');
                getSelect3Input = $('select[name="select3-name"]');
                getSelect4Input = $('select[name="select4-name"]');
                getSelect5Input = $('select[name="select5-name"]');
                emailInput = $('input[name="emailName"]');

                $('.depart-button').on('mouseover', function(){
                    $('.depart-button').css('transform', 'scale(1.1, 1.1)');
                });

                $('.depart-button').on('mouseout', function(){
                     $('.depart-button').css('transform', 'scale(1, 1)');
                });

                $('.switch').on('click', function()  {
                    $(this).toggleClass("switchOn");
                });
    
                $('.depart-name').on('click', function(e) {                    
                    e.preventDefault();

                    getDepartInput.focus();           
                    getDisplayNameVal =  getDisplayNameInput.val();
                    getAboutVal =  getAboutInput.val();
                    
                    console.log('getAboutVal', getAboutVal.length);
                    $(this).css({'border-bottom': '2px solid #EF4647'});
                    $('.depart-in-name').css(addPofileDepartmentCss());                                      
                    $('.display-name, .about').css({'border-bottom': '1px solid blue'});

                    checkInputAndRemoveCss(getDisplayNameVal, '.display-in-name');
                    checkInputAndRemoveCss(getAboutVal, '.about-textarea');

                });

                $('.display-name').on('click', function(e) {
                    e.preventDefault();

                    getDisplayNameInput.focus();
                    getDepartNameVal =  getDepartInput.val();
                    getAboutVal =  getAboutInput.val();

                    checkInputAndRemoveCss(getDepartNameVal, '.depart-in-name');
                    checkInputAndRemoveCss(getAboutVal, '.about-textarea');

                    $(this).css({'border-bottom': '2px solid #EF4647'});
                    $('.display-in-name').css(addPofileDepartmentCss());
                    $('.depart-name, .about').css({'border-bottom': '1px solid blue'});
                });

                $('.about').on('click', function(e) {
                    e.preventDefault();

                    getAboutInput.focus();
                    getDisplayNameVal = getDisplayNameInput.val();
                    getDepartNameVal = getDepartInput.val();

                    checkInputAndRemoveCss(getDepartNameVal, '.depart-in-name');
                    checkInputAndRemoveCss(getDisplayNameVal, '.display-in-name');

                    $(this).css({'border-bottom': '2px solid #EF4647'});
                    $('.display-name, .depart-name').css({'border-bottom': '1px solid blue'});             
                    $('.about-textarea').css(addPofileDepartmentCss());
                });

                $('.group').on('click', function(e) {
                    e.preventDefault();

                    getSelect1Val = getSelect1Input.val();
                    getSelect2Val = getSelect2Input.val();
                    getSelect3Val = getSelect3Input.val();
                    getSelect4Val = getSelect4Input.val();
                    getSelect5Val = getSelect5Input.val();
                    getEmailVal = emailInput.val();

                    checkInputAndRemoveCss(getSelect2Val, '.assign-select2-div');
                    checkInputAndRemoveCss(getSelect3Val, '.assign-select3-div');
                    checkInputAndRemoveCss(getSelect4Val, '.assign-select4-div');
                    checkInputAndRemoveCss(getSelect5Val, '.assign-select5-div');
                    checkInputAndRemoveCss(getEmailVal, '.email-label');

                    getSelect1Input.focus();
                    $('.select-group').css({'border-bottom': '2px solid #EF4647'});
                    $('.select-corporate, .select-company, .select-division, .select-branch, .email-in')
                    .css({'border-bottom': '1px solid blue'});
                    $('.assign-select1-div').css(addPofileDepartmentCss());
                });

                $('.corporate').on('click', function(e) {
                    e.preventDefault();

                    getSelect1Val = getSelect1Input.val();
                    getSelect3Val = getSelect3Input.val();
                    getSelect4Val = getSelect4Input.val();
                    getSelect5Val = getSelect5Input.val();
                    getEmailVal = emailInput.val();

                    checkInputAndRemoveCss(getSelect1Val, '.assign-select1-div');
                    checkInputAndRemoveCss(getSelect3Val, '.assign-select3-div');
                    checkInputAndRemoveCss(getSelect4Val, '.assign-select4-div');
                    checkInputAndRemoveCss(getSelect5Val, '.assign-select5-div');
                    checkInputAndRemoveCss(getEmailVal, '.email-label');

                    getSelect2Input.focus();
                    $('.select-corporate').css({'border-bottom': '2px solid #EF4647'});
                    $('.select-group, .select-company, .select-division, .select-branch, .email-in')
                    .css({'border-bottom': '1px solid blue'});
                    $('.assign-select2-div').css(addPofileDepartmentCss());
                });

                $('.company').on('click', function(e) {
                    e.preventDefault();

                    getSelect1Val = getSelect1Input.val();
                    getSelect2Val = getSelect2Input.val();
                    getSelect4Val = getSelect4Input.val();
                    getSelect5Val = getSelect5Input.val();
                    getEmailVal = emailInput.val();

                    checkInputAndRemoveCss(getSelect1Val, '.assign-select1-div');
                    checkInputAndRemoveCss(getSelect2Val, '.assign-select2-div');
                    checkInputAndRemoveCss(getSelect4Val, '.assign-select4-div');
                    checkInputAndRemoveCss(getSelect5Val, '.assign-select5-div');
                    checkInputAndRemoveCss(getEmailVal, '.email-label');

                    getSelect3Input.focus();
                    $('.select-company').css({'border-bottom': '2px solid #EF4647'});
                    $('.select-group, .select-corporate, .select-division, .select-branch, .email-in')
                    .css({'border-bottom': '1px solid blue'});
                    $('.assign-select3-div').css(addPofileDepartmentCss());
                });

                $('.division').on('click', function(e) {
                    e.preventDefault();

                    getSelect1Val = getSelect1Input.val();
                    getSelect2Val = getSelect2Input.val();
                    getSelect3Val = getSelect3Input.val();
                    getSelect5Val = getSelect5Input.val();
                    getEmailVal = emailInput.val();

                    checkInputAndRemoveCss(getSelect1Val, '.assign-select1-div');
                    checkInputAndRemoveCss(getSelect2Val, '.assign-select2-div');
                    checkInputAndRemoveCss(getSelect3Val, '.assign-select3-div');
                    checkInputAndRemoveCss(getSelect5Val, '.assign-select5-div');
                    checkInputAndRemoveCss(getEmailVal, '.email-label');

                    getSelect4Input.focus();
                    $('.select-division').css({'border-bottom': '2px solid #EF4647'});
                    $('.select-group, .select-corporate, .select-company, .select-branch, .email-in')
                    .css({'border-bottom': '1px solid blue'});
                    $('.assign-select4-div').css(addPofileDepartmentCss());
                });

                $('.branch').on('click', function(e) {
                    e.preventDefault();

                    getSelect1Val = getSelect1Input.val();
                    getSelect2Val = getSelect2Input.val();
                    getSelect3Val = getSelect3Input.val();
                    getSelect4Val = getSelect4Input.val();
                    getEmailVal = emailInput.val();

                    checkInputAndRemoveCss(getSelect1Val, '.assign-select1-div');
                    checkInputAndRemoveCss(getSelect2Val, '.assign-select2-div');
                    checkInputAndRemoveCss(getSelect3Val, '.assign-select3-div');
                    checkInputAndRemoveCss(getSelect4Val, '.assign-select4-div');
                    checkInputAndRemoveCss(getEmailVal, '.email-label');

                    getSelect5Input.focus();
                    $('.select-branch').css({'border-bottom': '2px solid #EF4647'});
                    $('.select-group, .select-corporate, .select-company, .select-division, .email-in')
                    .css({'border-bottom': '1px solid blue'});
                    $('.assign-select5-div').css(addPofileDepartmentCss());
                });

                $('.email').on('click', function(e) {
                    e.preventDefault();

                    getSelect1Val = getSelect1Input.val();
                    getSelect2Val = getSelect2Input.val();
                    getSelect3Val = getSelect3Input.val();
                    getSelect4Val = getSelect4Input.val();
                    getSelect5Val = getSelect5Input.val();

                    checkInputAndRemoveCss(getSelect1Val, '.assign-select1-div');
                    checkInputAndRemoveCss(getSelect2Val, '.assign-select2-div');
                    checkInputAndRemoveCss(getSelect3Val, '.assign-select3-div');
                    checkInputAndRemoveCss(getSelect4Val, '.assign-select4-div');
                    checkInputAndRemoveCss(getSelect5Val, '.assign-select5-div');

                    emailInput.focus();
                    $('.email-in').css({'border-bottom': '2px solid #EF4647'});
                    $('.select-group, .select-corporate, .select-company, .select-division, .select-branch')
                    .css({'border-bottom': '1px solid blue'});
                    $('.email-label').css(addPofileDepartmentCss());
                });
            }

            function checkInputAndRemoveCss(inputVal, className) {
                if(inputVal && inputVal.length == 0) {
                    $(className).css(removePofileDepartmentCss());
                }
            }

            function addPofileDepartmentCss() {
                return {
                    'transform': 'translate(0, -90%)', 
                    'transition-property': 'transform',
                    'transition-timing-function': 'linear',
                    'transition-duration': '1s',
                    'color': '#8091A5',
                    'font-size': '12px'
                }
            }

            function removePofileDepartmentCss() {
                return {
                    'transform': 'translate(0, 20%)', 
                    'transition-property': 'transform',
                    'transition-timing-function': 'linear',
                    'transition-duration': '1s',
                    'color': '#5E5E5E',
                    'font-size': '15px'
                }
            }           
        });
    }
});