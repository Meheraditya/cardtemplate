// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

$(document).ready(function(){
    init();
    function init() {
        domCss();
    }
    function addCss() {
        return {
                'box-shadow': '10px 10px 10px gainsboro',
                 "transform": "translate(0,-3%)", 
                 "transition" :"transform 1s"
                }
    }

    function removeCss() {
        return {
            'box-shadow': '2px 2px 2px 1px gainsboro',
             "transform": "translate(0%,0%)",
             'transition' :'transform 1s'
        }
    }
    function domCss(){
        $(".card1").mouseover(function(){
            $('.card1').css(addCss());
        });
        $(".card1").mouseout(function(){
            $('.card1').css(removeCss());
        });
        $(".card2").mouseover(function(){
            $('.card2').css(addCss());
        });
        $(".card2").mouseout(function(){
            $('.card2').css(removeCss());
        });
        $(".card3").mouseover(function(){
            $('.card3').css(addCss());
        });
        $(".card3").mouseout(function(){
            $('.card3').css(removeCss());
        });
        $(".card4").mouseover(function(){
            $('.card4').css(addCss());
        });
        $(".card4").mouseout(function(){
            $('.card4').css(removeCss());
        });
        $(".card5").mouseover(function(){
            $('.card5').css(addCss());
        });
        $(".card5").mouseout(function(){
            $('.card5').css(removeCss());
        });
        $(".card6").mouseover(function(){
            $('.card6').css(addCss());
        });
        $(".card6").mouseout(function(){
            $('.card6').css(removeCss());
        });
    }
});


