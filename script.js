const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
var mainImg = document.getElementById('mainImg');
var small_Img = document.getElementsByClassName('small-img');
// Responsive Navigation 

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    }) 
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    }) 
}

// search bar logic



// Image Slider In Single Product Page

small_Img[0].onclick = function(){
    mainImg.src = small_Img[0].src;
}
small_Img[1].onclick = function(){
    mainImg.src = small_Img[1].src;
}
small_Img[2].onclick = function(){
    mainImg.src = small_Img[2].src;
}
small_Img[3].onclick = function(){
    mainImg.src = small_Img[3].src;
}
