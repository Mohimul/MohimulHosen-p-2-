
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');


menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


let themetoggoler = document.querySelector('#theme-toggoler');



themetoggoler.onclick = () => {

    themetoggoler.classList.toggle('fa-sun');
    if(themetoggoler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
 





