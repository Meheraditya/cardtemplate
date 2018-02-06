Template.profile.onRendered(function(){

        getDepartNameVal = '';
        getDisplayNameVal= '';
        getAboutVal= '';
        menuAnimationClicked = 0;

        getDepartInput = $('input[name="departmentName"]');                   
        getDisplayNameInput = $('input[name="displayName"]');                   
        getAboutInput = $('textarea[name="about"]');
        getSelect1Input = $('select[name="select1-name"]');
        getSelect2Input = $('select[name="select2-name"]');
        getSelect3Input = $('select[name="select3-name"]');
        getSelect4Input = $('select[name="select4-name"]');
        getSelect5Input = $('select[name="select5-name"]');
        emailInput = $('input[name="emailName"]');
        getSelect1Val= '';
        getSelect2Val= '';
        getSelect3Val= '';
        getSelect4Val= '';
        getSelect5Val= '';
        getEmailVal= '';

        init();
        function init() {
            baseFn();
        }

        function baseFn() {

        }          
});

function checkInputAndRemoveCss(inputVal, className) {
    if(inputVal == '') {
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
    };
}

function removePofileDepartmentCss() {
    return {
        'transform': 'translate(0, 20%)', 
        'transition-property': 'transform',
        'transition-timing-function': 'linear',
        'transition-duration': '1s',
        'color': '#5E5E5E',
        'font-size': '15px'
    };
}

Template.profile.events({
    'mouseover .depart-button': ()=> {
        $('.depart-button').css({'transform': 'scale(1.05, 1.05)','cursor':'pointer'});
    },
    'mouseout .depart-button': ()=> {
        $('.depart-button').css('transform', 'scale(1, 1)');
    },
    'click .switch': ()=> {
        $('.switch').toggleClass("switchOn");
    },
    'click .depart-name': (e)=> {
        e.preventDefault();

        getDepartInput.focus();           
        getDisplayNameVal =  getDisplayNameInput.val();
        getAboutVal =  getAboutInput.val();
        
        //console.log('getAboutVal', getAboutVal.length);
        $('.depart-name').css({'border-bottom': '2px solid #EF4647'});
        $('.depart-in-name').css(addPofileDepartmentCss());                                      
        $('.display-name, .about').css({'border-bottom': '1px solid blue'});

        checkInputAndRemoveCss(getDisplayNameVal, '.display-in-name');
        checkInputAndRemoveCss(getAboutVal, '.about-textarea');
    },
    'click .display-name': (e)=> {
        e.preventDefault();

        getDisplayNameInput.focus();
        getDepartNameVal =  getDepartInput.val();
        getAboutVal =  getAboutInput.val();

        checkInputAndRemoveCss(getDepartNameVal, '.depart-in-name');
        checkInputAndRemoveCss(getAboutVal, '.about-textarea');

        $('.display-name').css({'border-bottom': '2px solid #EF4647'});
        $('.display-in-name').css(addPofileDepartmentCss());
        $('.depart-name, .about').css({'border-bottom': '1px solid blue'});
    },
    'click .about': (e)=> {
        e.preventDefault();

        getAboutInput.focus();
        getDisplayNameVal = getDisplayNameInput.val();
        getDepartNameVal = getDepartInput.val();

        checkInputAndRemoveCss(getDepartNameVal, '.depart-in-name');
        checkInputAndRemoveCss(getDisplayNameVal, '.display-in-name');

        $('.about').css({'border-bottom': '2px solid #EF4647'});
        $('.display-name, .depart-name').css({'border-bottom': '1px solid blue'});             
        $('.about-textarea').css(addPofileDepartmentCss());
    },
    'click .group': (e)=> {
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
    },
    'click .corporate': (e)=> {
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
    },
    'click .company': (e)=> {
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
    },
    'click .division': (e)=> {
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
    },
    'click .branch': (e)=> {
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
    },
    'click .email': (e)=> {
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
    },
    'click .depart-button': ()=> {
        if(menuAnimationClicked == 0) {
            $('.hidden-depart-button').css('opacity', '1');            
            $('.hidden-depart-button').animate({width: '300px'},'slow');
            menuAnimationClicked++;
        }else {            
            $('.hidden-depart-button').animate({width: '0'},'slow',function(){
                $('.hidden-depart-button').css('opacity', '0');
            });
            menuAnimationClicked--;
        }        
    }
});