let banner = document.querySelector('.banner');
let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    banner.classList.toggle('active');
}