window.addEventListener('load', function(){

    const SEC = document.querySelectorAll('.ani');
    const WT = window.innerHeight;

    window.addEventListener("scroll", ()=>{
            let sct=window.scrollY;
            SEC.forEach(e=>{
                let secTop = e.offsetTop;
                let secH=e.clientHeight;
                sct > secTop -(WT-secH)/2 ? e.classList.add('on') : e.classList.remove('on');
            });

    });




})
