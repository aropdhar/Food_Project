 let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}





// search section

document.querySelector('#search-bar').onclick = () =>{

    document.querySelector('#search_form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{

    document.querySelector('#search_form').classList.remove('active');
}

//scroll reveal section

const sr = ScrollReveal({

    distance: '60px' ,
    duration: 2500 ,
    reset: true

});


sr.reveal(".dishes_main" , {delay:200 , origin: 'top'});


// dishes card section

sr.reveal('#dishes1' , {delay:200 , origin: 'bottom'});
sr.reveal('#dishes2' , {delay:200 , origin: 'top'});
sr.reveal('#dishes3' , {delay:200 , origin: 'left'});
sr.reveal('#dishes4' , {delay:200 , origin: 'right'});
sr.reveal('#dishes5' , {delay:200 , origin: 'bottom'});
sr.reveal('#dishes6' , {delay:200 , origin: 'left'});

// menu section

sr.reveal("#menu1" , {delay:200 , origin: 'top'});
sr.reveal("#menu2" , {delay:200 , origin: 'left'});
sr.reveal("#menu3" , {delay:200 , origin: 'top'});
sr.reveal("#menu4" , {delay:200 , origin: 'right'});
sr.reveal("#menu5" , {delay:200 , origin: 'top'});
sr.reveal("#menu6" , {delay:200 , origin: 'left'});


 //home swiper js section

var swiper = new Swiper(".home_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
   loop:true

  });


let black_theme = document.querySelector(".black_theme");
let mode = document.querySelector(".mode");


black_theme.addEventListener("click" , function(){

    mode.classList.toggle("dark_mode");

})


