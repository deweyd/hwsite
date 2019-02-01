var scroll_hd=document.querySelector('.scroll-head');
var logo=document.querySelector('.top-box');
var wheel=document.querySelectorAll('.wheel-box');
var how=document.querySelector('.title-box');
var but=document.querySelector('#button');
var icon=document.querySelector('.icon');
var ul=document.querySelector('.ul');
var link=document.querySelectorAll('.link');
var but1=document.querySelector('#button_down');
var style=getComputedStyle(but);
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
icon.onclick=function () {
    if(ul.style.display=='flex'){
        $('.ul').fadeIn(600);
        ul.style.display='none';
    }
    else {
        $('.ul').fadeIn(600);
        ul.style.display='flex';

    }
}
document.body.onscroll=function (event) {
    var bounti = scroll_hd.getBoundingClientRect();
    var bounti1 = document.body.getBoundingClientRect();
    var but=document.querySelector('#button');
    Array.from(wheel).forEach(function (w) {
        if(w.getBoundingClientRect().top < window.innerHeight){
            w.classList.add('while-move');
        }else{
            w.classList.remove('while-move');
        }
    })
    if(-bounti1.top>bounti.height){
        scroll_hd.classList.add('fixed');
        logo.classList.add('logo-scroll');
        // wheel.classList.add('while-move');
        but.style='opacity:1';
    }
    if(-bounti1.top<bounti.height) {
        scroll_hd.classList.remove('fixed');
        logo.classList.remove('logo-scroll');
        // wheel.classList.remove('while-move');
        but.style='opacity:0';
    }
};
but.onclick=function (event){
    var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 30);
    }
}
    smoothJumpUp();
}
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3
});
var on = document.querySelectorAll('.button-red');
var popup = document.querySelector('.popup');
var close = document.querySelector('.fa-window-close');
var btn = document.querySelector('.btn');
var successW = document.querySelector('.success-window');
for(key in on){
    on[key].onclick = function () {
        console.log(popup);
        popup.classList.add('popup-on')
    };
}
close.onclick = function () {
    popup.classList.remove('popup-on')
};
btn.onclick=function () {
    popup.querySelector('form').style.display='none';
    successW.style.display= 'block';
    setTimeout(function () {
        popup.classList.remove('popup-on')
        popup.querySelector('form').style.display='flex';
        successW.style.display= 'none';
    },3000)
}

var forms = document.forms;
Array.from(forms).forEach(function (form) {
form.oninput = function (e) {
    e.preventDefault();
  var year = this.querySelector("input[name='year']")?this.querySelector("input[name='year']"):false;
  var make = this.querySelector("input[name='make']")?this.querySelector("input[name='make']"):false;
  var model = this.querySelector("input[name='model']")?this.querySelector("input[name='model']"):false;
  var tel = this.querySelector("input[name='tel']")?this.querySelector("input[name='tel']"):false;
  var email = this.querySelector("input[name='email']")?this.querySelector("input[name='email']"):false;
  var button1 = this.querySelector(".btn")?this.querySelector(".btn"):false;
  var count = this.querySelectorAll('input').length;
    var success = 0;
    if(year && year.value.length == 4){
        year.style.borderColor = 'green';
        success++;

    }else {
        if(year){
            year.style.borderColor = 'red';
            success++;
        }
    }
    if(make && make.value.length > 2){
        make.style.borderColor = 'green';
        success++;

    }else {
        if(make) {
            make.style.borderColor = 'red';
        }

    }
    if(model && model.value.length > 2){
        model.style.borderColor = 'green';
       success++;
    }else {
        if(model) {
            model.style.borderColor = 'red';
        }
    }
    if(tel && tel.value.length == 12){
        tel.style.borderColor = 'green';
        success++;

    }else {
        if(tel){
            tel.style.borderColor = 'red';
        }

    }
    console.log(success)
        if(success == count){
        console.log('ok')
        button1.disabled = false;


    }
}

})

