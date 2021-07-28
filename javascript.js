function actionServ(){
    let arrow = document.getElementById("actionServ");
    if(arrow){
        if(arrow.style.marginTop != "0px"){
            arrow.style.transform = "rotate(-90deg)";
            arrow.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
            arrow.style.marginTop = "0px";
            serv_config();
        }else{
            arrow.style.marginTop = "5px";
            arrow.style.transform = "rotate(0deg)";
            arrow.style.clipPath = "polygon(0 0, 100% 0, 100% 40%, 50% 55%, 0 40%)";
            arrow.style.transition = "transform 0.25s, margin-top 0.15s";
            serv_config();
        }
        return;
    }
    console.log("Element not found");
}

function serv_config(){
    let divConf = document.getElementById("serv_config");
    if(divConf){
        if(divConf.style.visibility!="visible"){
            divConf.style.visibility="visible";
            divConf.style.transition="all 0.2s";
            divConf.style.transform = "scale(1,1)";
        }else{console.log("teste");
            divConf.style.visibility="hidden";
            divConf.style.transform = "scale(0.1)";
            divConf.style.transition="all 0.0001s";
        }
        return;
    }
    console.log("Element not found");
}

function input_search_focus(){
    let searchInfos = document.getElementById("searchInfos");
    let search = document.getElementById("search");
    let input = document.getElementById("input_search");
    if(input){
        input.style.width ="206px";
        search.style.width ="240px";
        searchInfos.style.width ="456px";
        return;
    }else{
        console.log("Element not found");
    }
}

function input_search_nofocus(){
    let searchInfos = document.getElementById("searchInfos");
    let search = document.getElementById("search");
    let input = document.getElementById("input_search");
    if(input){
        input.style.width ="110px";
        search.style.width ="144px";
        searchInfos.style.width ="360px";
        searchInfos.style.background ="#35383e";
        return;
    }else{
        console.log("Element not found");
    }
}

function mic(){
    let mic = document.getElementById("svgMic");
    let micDisabled = document.getElementById("svgMicDis");

    if(mic.style.display != "none"){
        mic.style.display = "none";
        micDisabled.style.display = "block";
    }else{
        mic.style.display = "block";
        micDisabled.style.display = "none";
    }
}

function hs(){
    let hs = document.getElementById("svgHs");
    let hsDisabled = document.getElementById("svgHsDisabled");
    if(hs.style.display != "none"){
        hs.style.display = "none";
        hsDisabled.style.display = "block";
    }else{
        hs.style.display = "block";
        hsDisabled.style.display = "none";
    }
}

function bell(){
    let bell = document.getElementById("bell");
    let bellDisabled = document.getElementById("bell_disabled");

    if(bell.style.display != "none"){
        bell.style.display ="none";
        bellDisabled.style.display ="block";
    }else{
        bell.style.display ="block";
        bellDisabled.style.display ="none";
    }
}

function hiddenMembers(){
    let members = document.getElementById("members");
    let total = document.getElementById("total");


    if(members.style.width != "0px"){
        members.style.width = "0px";
        total.style.gridTemplateColumns = "72px 240px 1fr";
    }else{
        members.style.width = "240px";
    }
}