function changecolor(){
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    var op = document.getElementById("op").value;
    if(r>255 || g>255 || b>255 || b<0 || g<0 || r<0){
        alert("value of rgb is invalid.....")
        return;
    }
    if(op>1 || op<0){
        alert("opacity should be between 0 to 1.");
        return;
    }
    document.getElementById("body").style.background = "rgba("+r+","+g+","+b+","+op+")";
}

function randomgenerator(){
    var r = Math.floor((Math.random() * 255) + 1);
    var g = Math.floor((Math.random() * 255) + 1);
    var b = Math.floor((Math.random() * 255) + 1);
    var num = Math.random()*1;
    var op = Math.round((num + Number.EPSILON) * 100) / 100;
    document.getElementById("r").value = r;
    document.getElementById("g").value = g;
    document.getElementById("b").value = b;
    var cb = document.getElementById("cb");
    if(cb.checked)
        op=1;
    document.getElementById("op").value = op;
    document.getElementById("body").style.background = "rgba("+r+","+g+","+b+","+op+")";
}