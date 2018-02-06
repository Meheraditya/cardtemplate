Template.metaData.onRendered(function() {

    ////  counter variables
    hideDropDownCount = 0;
    menuAnimationClicked = 0;
    var type2Count = 0;
    var domainCount = 0;
    var subDomainCount = 0;
    
    init();
    function init() {
        baseFn();
    }

    function baseFn() {
        addDefaultColorToInfo();
        rightBlockDropdown('.type2', '.type2>.type2-type', '.type2-options', '.type2-in', '.type2-div', '.type2-close', type2Count);
        rightDomainDropdown('.domain', '.domain>.domain-type', '.domain-options', '.domain-in', '.domain-div', '.domain-close', domainCount);
        rightSubDomainDropdown('.subDomain', '.subDomain>.subDomain-type', '.subDomain-options', '.subDomain-in', '.subDomain-div', '.subDomain-close', subDomainCount);
    }

});

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

function rightBlockDropdown(mainClass, typeClass, optionClass, inputClass, labelClass, closeClass, counter) {
    $(mainClass).on('click', function(e) {
        e.preventDefault();                                     
        if(counter == 0) {
            $(typeClass).css('display', 'block');
            //$('.domain>.domain-type, .subDomain>.subDomain-type').css('display', 'none'); 

            $(optionClass).mouseover(function(){
                $(this).css('background-color', '#66FF66');
            });

            $(optionClass).mouseout(function(){
                $(this).css('background-color', 'white');
            });

            $(optionClass).click(function(){
                var getBusinessText = $(this).text();
                $(inputClass).val(getBusinessText);
                $(labelClass).css('display', 'none');
                $(closeClass).css('display', 'block');
            });

            $(closeClass).click(function() {
                $(inputClass).val('');
                $(this).css('display', 'none');
                $(labelClass).css('display', 'block');
            });
            counter++;
        }else {
            $(typeClass).css('display', 'none');
            counter = 0;
        }
    });
}

function rightDomainDropdown(mainClass, typeClass, optionClass, inputClass, labelClass, closeClass, counter) {
    $(mainClass).on('click', function(e) {
        e.preventDefault();                    
        if(counter == 0) {
            $(typeClass).css('display', 'block');
            // $('.type2>.type2-type, .subDomain>.subDomain-type').css('display', 'none');

            $(optionClass).mouseover(function(){
                $(this).css('background-color', '#66FF66');
            });

            $(optionClass).mouseout(function(){
                $(this).css('background-color', 'white');
            });

            $(optionClass).click(function(){
                var getBusinessText = $(this).text();
                $(inputClass).val(getBusinessText);
                $(labelClass).css('display', 'none');
                $(closeClass).css('display', 'block');
            });

            $(closeClass).click(function() {
                $(inputClass).val('');
                $(this).css('display', 'none');
                $(labelClass).css('display', 'block');
            });
            counter++;
        }else {
            $(typeClass).css('display', 'none');
            counter = 0;
        }
    });
}

function rightSubDomainDropdown(mainClass, typeClass, optionClass, inputClass, labelClass, closeClass, counter) {
    $(mainClass).on('click', function(e) {
        e.preventDefault();                    
        if(counter == 0) {
            $(typeClass).css('display', 'block');
            //$('.domain>.domain-type, .domain>.domain-type').css('display', 'none');

            $(optionClass).mouseover(function(){
                $(this).css('background-color', '#66FF66');
            });

            $(optionClass).mouseout(function(){
                $(this).css('background-color', 'white');
            });

            $(optionClass).click(function(){
                var getBusinessText = $(this).text();
                $(inputClass).val(getBusinessText);
                $(labelClass).css('display', 'none');
                $(closeClass).css('display', 'block');
            });

            $(closeClass).click(function() {
                $(inputClass).val('');
                $(this).css('display', 'none');
                $(labelClass).css('display', 'block');
            });
            counter++;
        }else {
            $(typeClass).css('display', 'none');
            counter = 0;
        }
    });
}

function getClickedObject(getClickedLabelDivClass, inputClass) {
    $(inputClass).focus();
    $(inputClass).css({'border-bottom': '2px solid #EF4647'});
    $(getClickedLabelDivClass).css(addInputTransform());                 
}

function getInputValue(inputClass) {
    $(inputClass).val();
}

function addInputTransform() {
    return {
        'transform': 'translate(0, -90%)', 
        'transition-property': 'transform',
        'transition-timing-function': 'linear',
        'transition-duration': '1s',
        'color': '#8091A5',
        'font-size': '12px'
    };
}

function removeInputTransform() {
    return {
        'transform': 'translate(0, 0)', 
        'transition-property': 'transform',
        'transition-timing-function': 'linear',
        'transition-duration': '1s',
        'color': '#627DAE',
        'font-size': '15px'
    };
}

function checkInputAndRemoveTransform(inputVal, className) {
    if(inputVal == '') {
        $(className).css(removeInputTransform());
    }
}

function groupNameFn() {
    return $('input[name="groupName"]').val();
}

function regNoFn() {
    return $('input[name="regNo"]').val();
}

function regDateFn() {
    return $('input[name="regDate"]').val();
}

function metaEmailFn() {
    return $('input[name="metaEmail"]').val();
}

function urlFn() {
    return $('input[name="url"]').val();
}

function phoneFn() {
    return $('input[name="phone"]').val();
}

function metaDisplayFn() {
    return $('input[name="metaDisplayName"]').val();
}

function businessFn() {
    return $('input[name="business"]').val();
}

function certificationFn() {
    return $('input[name="certificationName"]').val();
}

function groupHeadNameFn() {
    return $('input[name="groupHeadName"]').val();
}

function groupSizeFn() {
    return $('input[name="groupSize"]').val();
}

function totalNoOfManagementFn() {
    return $('input[name="totalNoOfManagement"]').val();
}

function addDefaultColorToInfo() {
    addColor('.logo-info', '.info-block');
    removeColor('.logo-additional-info', '.addi-info-block');
    removeColor('.Philosophy', '.philosophy-block');
    removeColor('.presence', '.presence-block');
}

Template.metaData.events({
    'mouseover .meta-button': ()=> {
        $('.meta-button').css({'transform': 'scale(1.05, 1.05)','cursor':'pointer'});
    },
    'mouseout .meta-button': ()=> {
        $('.meta-button').css('transform', 'scale(1, 1)');
    },
    'click .info-block': ()=> {
        addDefaultColorToInfo();
    },
    'click .addi-info-block': ()=> {
        removeColor('.logo-info', '.info-block');
        addColor('.logo-additional-info', '.addi-info-block');
        removeColor('.Philosophy', '.philosophy-block');
        removeColor('.presence', '.presence-block');
    },
    'click .philosophy-block': () => {
        removeColor('.logo-info', '.info-block');
        removeColor('.logo-additional-info', '.addi-info-block');
        addColor('.Philosophy', '.philosophy-block');
        removeColor('.presence', '.presence-block');
    },
    'click .presence-block': () => {
        removeColor('.logo-info', '.info-block');
        removeColor('.logo-additional-info', '.addi-info-block');
        removeColor('.Philosophy', '.philosophy-block');
        addColor('.presence', '.presence-block');
    },
    'click .business': (e)=> {
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
    },
    'click .group': (e)=> {
        e.preventDefault();

        getClickedObject('.group-name', '.group-name-in'); 
        $('.meta-display-name-in, .reg-no-in, .reg-date-in, .meta-email-in, .phone-in, .url-in, .business-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(metaDisplayFn(), '.meta-display-name');
        checkInputAndRemoveTransform(regNoFn(), '.reg-no-div');
        checkInputAndRemoveTransform(regDateFn(), '.reg-date-div');
        checkInputAndRemoveTransform(metaEmailFn(), '.meta-email-div');
        checkInputAndRemoveTransform(phoneFn(), '.phone-div');
        checkInputAndRemoveTransform(businessFn(), '.business-div');
        checkInputAndRemoveTransform(urlFn(), '.url-div');
    },
    'click .meta-display': (e)=> {
        e.preventDefault();

        getClickedObject('.meta-display-name', '.meta-display-name-in');
        $('.group-name-in, .reg-no-in, .reg-date-in, .meta-email-in, .phone-in, .url-in, .business-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(groupNameFn(), '.group-name');
        checkInputAndRemoveTransform(regNoFn(), '.reg-no-div');
        checkInputAndRemoveTransform(regDateFn(), '.reg-date-div');
        checkInputAndRemoveTransform(metaEmailFn(), '.meta-email-div');
        checkInputAndRemoveTransform(phoneFn(), '.phone-div');
        checkInputAndRemoveTransform(businessFn(), '.business-div');
        checkInputAndRemoveTransform(urlFn(), '.url-div');
    },
    'click .reg-no': (e)=> {
        e.preventDefault();

        getClickedObject('.reg-no-div', '.reg-no-in');
        $('.group-name-in, .meta-display-name-in, .reg-date-in, .meta-email-in, .phone-in, .url-in, .business-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(groupNameFn(), '.group-name');
        checkInputAndRemoveTransform(metaDisplayFn(), '.meta-display-name');
        checkInputAndRemoveTransform(regDateFn(), '.reg-date-div');
        checkInputAndRemoveTransform(metaEmailFn(), '.meta-email-div');
        checkInputAndRemoveTransform(phoneFn(), '.phone-div');
        checkInputAndRemoveTransform(businessFn(), '.business-div');
        checkInputAndRemoveTransform(urlFn(), '.url-div');
    },
    'click .meta-email': (e)=> {
        e.preventDefault();

        getClickedObject('.meta-email-div', '.meta-email-in');
        $('.group-name-in, .meta-display-name-in, .reg-no-in, .reg-date-in, .phone-in, .url-in, .business-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(groupNameFn(), '.group-name');
        checkInputAndRemoveTransform(metaDisplayFn(), '.meta-display-name');
        checkInputAndRemoveTransform(regDateFn(), '.reg-date-div');
        checkInputAndRemoveTransform(regNoFn(), '.reg-no-div');
        checkInputAndRemoveTransform(phoneFn(), '.phone-div');
        checkInputAndRemoveTransform(businessFn(), '.business-div');
        checkInputAndRemoveTransform(urlFn(), '.url-div');
    },
    'click .phone': (e)=> {
        e.preventDefault();

        getClickedObject('.phone-div', '.phone-in');
        $('.group-name-in, .meta-display-name-in, .reg-no-in, .meta-email-in, .reg-date-in, .url-in, .business-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(groupNameFn(), '.group-name');
        checkInputAndRemoveTransform(metaDisplayFn(), '.meta-display-name');
        checkInputAndRemoveTransform(regDateFn(), '.reg-date-div');
        checkInputAndRemoveTransform(regNoFn(), '.reg-no-div');
        checkInputAndRemoveTransform(metaEmailFn(), '.meta-email-div');
        checkInputAndRemoveTransform(businessFn(), '.business-div');
        checkInputAndRemoveTransform(urlFn(), '.url-div');
    },
    'click .url': (e)=> {
        e.preventDefault();

        getClickedObject('.url-div', '.url-in');
        $('.group-name-in, .meta-display-name-in, .reg-no-in, .meta-email-in, .phone-in, .reg-date-in, .business-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(groupNameFn(), '.group-name');
        checkInputAndRemoveTransform(metaDisplayFn(), '.meta-display-name');
        checkInputAndRemoveTransform(regDateFn(), '.reg-date-div');
        checkInputAndRemoveTransform(regNoFn(), '.reg-no-div');
        checkInputAndRemoveTransform(metaEmailFn(), '.meta-email-div');
        checkInputAndRemoveTransform(businessFn(), '.business-div');
        checkInputAndRemoveTransform(phoneFn(), '.phone-div');
    },
    'click .certification': (e)=> {
        e.preventDefault();

        getClickedObject('.certification-name', '.certification-name-in');
        $('.groupHeadName-in, .groupSize-in, .totalNoOfManagement-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(groupHeadNameFn(), '.groupHeadName-div');
        checkInputAndRemoveTransform(groupSizeFn(), '.groupSize-div');
        checkInputAndRemoveTransform(totalNoOfManagementFn(), '.totalNoOfManagement-div');
    },
    'click .meta-groupHeadName': (e)=> {
        e.preventDefault();

        getClickedObject('.groupHeadName-div', '.groupHeadName-in');
        $('.certification-name-in, .groupSize-in, .totalNoOfManagement-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(certificationFn(), '.certification-name');
        checkInputAndRemoveTransform(groupSizeFn(), '.groupSize-div');
        checkInputAndRemoveTransform(totalNoOfManagementFn(), '.totalNoOfManagement-div');
    },
    'click .meta-groupSize': (e)=> {
        e.preventDefault();

        getClickedObject('.groupSize-div', '.groupSize-in');
        $('.certification-name-in, .groupHeadName-in, .totalNoOfManagement-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(certificationFn(), '.certification-name');
        checkInputAndRemoveTransform(groupHeadNameFn(), '.groupHeadName-div');
        checkInputAndRemoveTransform(totalNoOfManagementFn(), '.totalNoOfManagement-div');
    },
    'click .meta-totalNoOfManagement': (e)=> {
        e.preventDefault();

        getClickedObject('.totalNoOfManagement-div', '.totalNoOfManagement-in');
        $('.certification-name-in, .groupHeadName-in, .groupSize-in').css({'border-bottom': '1px solid blue'});
        checkInputAndRemoveTransform(certificationFn(), '.certification-name');
        checkInputAndRemoveTransform(groupHeadNameFn(), '.groupHeadName-div');
        checkInputAndRemoveTransform(groupSizeFn(), '.groupSize-div');
    },
    'click .meta-button': ()=> {
        if(menuAnimationClicked == 0) {
            $('.hidden-meta-button').css('opacity', '1');            
            $('.hidden-meta-button').animate({width: '300px'},'slow');
            menuAnimationClicked++;
        }else {            
            $('.hidden-meta-button').animate({width: '0'},'slow',function(){
                $('.hidden-meta-button').css('opacity', '0');
            });
            menuAnimationClicked--;
        }        
    }
});