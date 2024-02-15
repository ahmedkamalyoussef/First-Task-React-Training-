const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.nav ul');

menuToggle.addEventListener('click', function() {
    if (navUl.style.display == '') {
        navUl.style.display = 'block';
        this.classList.add('active');
        this.classList.remove('notactive'); 
    } else {
        navUl.style.display = '';
        this.classList.add('notactive');
        this.classList.remove('active'); 
    }
});

const seeAllBtn=document.querySelector('.seeall');
const seeAllProds=document.querySelector('.seeAll');
const hideProds=document.querySelector('.hide');
const hide2Prods=document.querySelector('.hide2');
const seeAll2Btn=document.querySelector('.seeall-2');

seeAllBtn.addEventListener('click', function() {
    if (seeAllProds.style.display == ''||seeAllProds.style.display=='none') {
        seeAllProds.style.display = 'grid';
        hideProds.style.display='block';
        seeAllBtn.style.display='none';

    }
});

hideProds.addEventListener('click', function() {
    if (seeAllProds.style.display == 'block'||seeAllProds.style.display=='grid') {
        seeAllProds.style.display = 'none';
        hideProds.style.display='none';
        seeAllBtn.style.display='block';

    }
});


seeAll2Btn.addEventListener('click', function() {
    if (seeAllProds.style.display == ''||seeAllProds.style.display=='none') {
        seeAllProds.style.display = 'grid';
        hide2Prods.style.display='block';
        seeAll2Btn.style.display='none';

    }
});

hide2Prods.addEventListener('click', function() {
    if (seeAllProds.style.display == 'block'||seeAllProds.style.display=='grid'||seeAllProds.style.display=='') {
        seeAllProds.style.display = 'none';
        hide2Prods.style.display='none';
        seeAll2Btn.style.display='';

    }
});
