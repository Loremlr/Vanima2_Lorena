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

    document.getElementById("formAdopcion").addEventListener("submit", function(){
        event.preventDefault();
        const datos = new FormData(form);

        fetch (form.action, {
            method: "POST",
            body: datos,
            headers:{
                'Accept':'application/json'
            }
        }).then (Response =>{
            if(Response.ok){
                Swal.fire({
                    title:"Solicitud enviada",
                    text:"Tu formulario ha sido enviado corrrectamente.",
                    icon:"success",
                    confirmButtonText: "Aceptar",
                });
                form.reset();
                cantidadContainer.classList.add("d-none");
            } else {
                Swal.fire({
                    title:"Error",
                    text:"Hubo un problema al enviar el formulario. Vuelve a intentarlo.",
                    icon:"error",
                });
            }
        })
    })

});