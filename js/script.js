function validacion() {
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("password").value;
    if ((usuario == "ejemplo@gmail.com") && (password == "123456")) {
        alert('Felicidades! Datos correctos');
    } else {
        alert('Ingresa los datos correctos');
        return false;
    }
}


function mostrarUno() {
    var iframe = document.getElementById("home");
    var iframe = document.getElementById("whazzap");
    var iframe = document.getElementById("zpotify");
    var iframe = document.getElementById("test");
    var elmnt1 = home;
    var elmnt2 = whazzap;
    var elmnt3 = zpotify;
    var elmnt4 = test;
    elmnt1.style.display = "block";
    elmnt2.style.display = "none";
    elmnt3.style.display = "none";
    elmnt4.style.display = "none";
    elmnt4.style.display = "none";
}

function mostrarDos() {
    var iframe = document.getElementById("home");
    var iframe = document.getElementById("whazzap");
    var iframe = document.getElementById("zpotify");
    var iframe = document.getElementById("test");
    var elmnt1 = home;
    var elmnt2 = whazzap;
    var elmnt3 = zpotify;
    var elmnt4 = test;
    elmnt1.style.display = "none";
    elmnt2.style.display = "block";
    elmnt3.style.display = "none";
    elmnt4.style.display = "none";
}

function mostrarTres() {
    var iframe = document.getElementById("home");
    var iframe = document.getElementById("whazzap");
    var iframe = document.getElementById("zpotify");
    var iframe = document.getElementById("test");
    var elmnt1 = home;
    var elmnt2 = whazzap;
    var elmnt3 = zpotify;
    var elmnt4 = test;
    elmnt1.style.display = "none";
    elmnt2.style.display = "none";
    elmnt3.style.display = "block";
    elmnt4.style.display = "none";
}