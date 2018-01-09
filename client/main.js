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
    $(".card").mouseover(function(){
        var $this = this;
        $('.card').css({'box-shadow': '10px 10px 10px black', "transform": "translate(0,-3%)", 'transition' :'transform 1s'});
    })
    $(".card").mouseout(function(){
        var $this = this;
        $('.card').css({'box-shadow': '2px 2px 2px 1px gainsboro', "transform": "translate(0%,0%)", 'transition' :'transform 1s'});
    })
});
