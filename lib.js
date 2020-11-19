function over2(obj){
    obj.src = "./images/2.jpg"
}

function out2(obj){
    obj.src = "./images/3.jpg"
}

var img4 = document.getElementById("img4");
img4.addEventListener("mouseover",over3);

img4.addEventListener("mouseout", out3);
   

function over3() {
    img4.src="./images/2.jpg";
}
function out3() {
    img4.src="./images/3.jpg";
}