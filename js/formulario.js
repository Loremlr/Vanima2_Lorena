document.addEventListener("DOMContentLoaded", function(){

    const radioSi = document.getElementById("mascotasSi");
    const radioNo = document.getElementById("mascotasNo");
    const cantidadContainer = document.getElementById("cantidadMascotasContainer");

    function toggleCantidadMascotas(){
        if(radioSi.checked){
            cantidadContainer.classList.remove("d-none");
        } else {
            cantidadContainer.classList.add ("d-none");
            cantidadContainer.querySelector("input").value = "";
        }
    }

    radioSi.addEventListener("change", toggleCantidadMascotas);
    radioNo.addEventListener("change", toggleCantidadMascotas);


    const form = document.getElementById("formAdopcion");

    form.addEventListener("submit",function(event){
        if(radioSi.checked){
            const cantidadInput = document.querySelector("input");
            if(cantidadInput.value===""){
                event.preventDefault();
                alert("Por favor, indica cuántas mascotas tienes.");
            }
        }
    });

});