//--minAjax.js

function igetAjax(config) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (config.success) {
                config.success(xmlhttp.responseText, xmlhttp.readyState);
            }          
        }
    }   
    xmlhttp.open("GET", config.url );
    xmlhttp.send();   
}

