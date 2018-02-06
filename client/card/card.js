function addCss() {
    return {
            'box-shadow': '10px 10px 10px gainsboro',
            "transform": "translate(0,-3%)", 
            "transition" :"transform 1s"
            };
}

function removeCss() {
    return {
        'box-shadow': '2px 2px 2px 1px gainsboro',
        "transform": "translate(0%,0%)",
        'transition' :'transform 1s'
    };
}

Template.Card.events({
    'mouseover .card1':() => {
        $('.card1').css(addCss());
    },
    'mouseout .card1': () => {
        $('.card1').css(removeCss());
    },
    'click .card1': () => {
        window.location.replace("http://localhost:3000/metadata");
    },
    'mouseover .card2': () => {
        $('.card2').css(addCss());
    },
    'mouseout .card2': () => {
        $('.card2').css(removeCss());
    },
    'click .card2': () => {
        window.location.replace("http://localhost:3000/profile");
    },
    'mouseover .card3': () => {
        $('.card3').css(addCss());
    },
    'mouseout .card3': () => {
        $('.card3').css(removeCss());
    },
    'click .card3': () => {
        window.location.replace("http://localhost:3000/chat");
    },
    'mouseover .card4': () => {
        $('.card4').css(addCss());
    },
    'mouseout .card4': () => {
        $('.card4').css(removeCss());
    },
    'click .card4': () => {
        window.location.replace("http://localhost:3000/metadata");
    },
    'mouseover .card5': () => {
        $('.card4').css(addCss());
    },
    'mouseout .card5': () => {
        $('.card5').css(removeCss());
    },
    'click .card5': () => {
        window.location.replace("http://localhost:3000/profile");
    },
    'mouseover .card6': () => {
        $('.card6').css(addCss());
    },
    'mouseout .card6': () => {
        $('.card6').css(removeCss());
    },
    'click .card6': () => {
        window.location.replace("http://localhost:3000/chat");
    }    
});