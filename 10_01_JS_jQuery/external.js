function popup1(){
    var oData = document.getElementById("idP");
    oData.style.color = "Green";
    document.getElementById("idBtn1").style.visibility = "none"; 
}

function popup2(){
    var oData = document.getElementById("idP");
    oData.style.color = "Yellow";
}

function popup3(){
    var oData = document.getElementById("idP");
    oData.style.color = "red";
}

function popup4(){
    var oData = document.getElementById("idP");
    oData.style.color = "blue";
}

function hideContent(){
    var oList = document.getElementsByClassName("hideshow");
    for(i=0; i<oList.length; i++ )
    {
        oList[i].style.display="none";
    }
}

function showContent(){
    var oList = document.getElementsByClassName("hideshow");

    for(i=0; i<oList.length; i++ )
    {
        oList[i].style.display="block";
    }

}