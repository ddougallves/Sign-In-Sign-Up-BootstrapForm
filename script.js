
document.querySelector('.sign-in .aside button').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.container').style.opacity = 0;
    setTimeout(()=>{
        document.querySelector('.sign-in').classList.add('d-none');
        document.querySelector('.sign-up').classList.remove('d-none');
    },500)
    setTimeout(()=>{
        document.querySelector('.container').style.opacity = 1;
    },600)
})

document.querySelector('.sign-up .aside button').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.container').style.opacity = 0;
    setTimeout(()=>{
        document.querySelector('.sign-up').classList.add('d-none');
        document.querySelector('.sign-in').classList.remove('d-none');
    },500)
    setTimeout(()=>{
        document.querySelector('.container').style.opacity = 1;
    },600)
})



