function Searching() {
    var userSearch = $('#userSearch').val().replace(/\s+/g, '').toLowerCase();
    console.log(userSearch);

    // var seccionEncontrada = $(`article[id="${userSearch}"]`);
    var seccionEncontrada = $(`#${userSearch}`);

    
    if (seccionEncontrada.length > 0) {
        var href = '#' + seccionEncontrada.attr('id');
        window.location.href = href;
    } else {
        alert('No se encontró ningúna seccion con ese nombre.');
    }
}

function Autocomplete(){
    
};

$(document).ready(function(){
    $('.btnSearch').click(function(event){
        event.preventDefault();
        Searching();
    });

    var secciones = [
        "HTML",
        "Qué es HTML",
        "Estructura básica de HTML",
        "Encabezados",
        "Párrafos",
        "Imágenes",
        "Hipervínculos",
        "Listas",
        "",
        "CSS",
        "¿Qué es CSS?",
        "Propiedades y valores",
        "Selectores",
        "Formas de usar CSS",
        "Variables",
        "El modelo de caja",
        "Anidado",
        "",
        "",
        "",
        "",
        "",
        "Bootstrap",
        "",
        "",
        "JavaScript",
        "",
        "",
        "JQuery",
        "",
        "",
    ];
    $('#userSearch').autocomplete({
        source: secciones
    });
});
