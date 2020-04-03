function generate(){
    var color= Math.random()*256;
    var color1=Math.floor(Math.random()*256);
    var color2 =Math.floor(Math.random()*256);

    /*if(random == 1)
    {document.querySelector("pngm").style.backgroundColor= "gold";}
    else if (randomm == 2) {document.getElementById("pngm").style.backgroundColor= "yellow";}
    else if (randomm == 3) {document.getElementById("pngm").style.backgroundColor= "salmon";}
    else if (randomm == 4) {document.getElementById("pngm").style.backgroundColor= "orange";}
    else if (randomm == 5) {document.getElementById("pngm").style.backgroundColor= "IndianRed";}
    else if (randomm == 6) {document.getElementById("pngm").style.backgroundColor= "fuchia";}
    else if (randomm == 7) {document.getElementById("pngm").style.backgroundColor= "Emerald";}
    else if (randomm == 8) {document.getElementById("pngm").style.backgroundColor= "indigo";}
    else
        {document.getElementById("pngm").style.backgroundColor="rust";}
    }*/
    document.getElementById("motor").style.background="rgb("+color+"," +color1+","+color2+")";
}
function Show(){
    var colors= document.querySelector("#coloc").value;
    document.getElementById("motor").style.backgroundColor=colors;


}
function Reset(){
    document.getElementById("motor").style.background="white";
}