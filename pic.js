const head = document.querySelector('.container');
window.addEventListener('scroll', function(){
    if(this.scrollY > 200){
        head.classList.add('slidedown');
    
    }else{
        main_head.classList.remove('slidedown');
        logo.computedStyleMap.color = '';
    }
} )