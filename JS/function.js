window.onload = function(){
    var x = document.getElementById("sobremi");
    var y = document.getElementById("portafolio");
    var z = document.getElementById("contacto");
    var w = document.getElementById("personal");
    x.style.display = "block";
    w.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
}

document.getElementById('navSobremi').addEventListener('click', function(){
    document.getElementById('sobremi').style.display ='block';
    document.getElementById('personal').style.display ='block';
    document.getElementById('portafolio').style.display ='none';
    document.getElementById('contacto').style.display ='none';
});

document.getElementById('navPortafolio').addEventListener('click', function(){
    document.getElementById('sobremi').style.display ='none';
    document.getElementById('personal').style.display ='none';
    document.getElementById('portafolio').style.display ='block';
    document.getElementById('contacto').style.display ='none';
});

document.getElementById('navContacto').addEventListener('click', function(){
    document.getElementById('sobremi').style.display ='none';
    document.getElementById('personal').style.display ='none';
    document.getElementById('portafolio').style.display ='none';
    document.getElementById('contacto').style.display ='block';
});

