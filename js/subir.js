const arriba = document.getElementById("arriba");
    
    window.addEventListener("scroll",() => {
        if (window.scrollY>400){
            arriba.style.display = "block";
        } else {
            arriba.style.display = "none";
        };
    });

    arriba.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    });