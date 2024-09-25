
function funone(){
    let lucky = document.getElementById("lucky");
    lucky.setAttribute("disabled" , "true");
    // lucky.remove();

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = "LUCKY.jpg";
    let name = document.createElement("h3");
    name.innerText = "name : Aravind" ;
    let classeee= document.createElement("h3");
    classeee.innerText = "class : 16R batch" ;
    let phn = document.createElement("h3");
    phn.innerText = "PHN NO : 9701147359" ;
    
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(classeee);
    div.appendChild(phn);
    document.body.appendChild(div);
}
