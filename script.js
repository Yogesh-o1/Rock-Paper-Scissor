let ps=""
let cs=""
let ppts=0;
let cpts=0;
let n=0;
let winner=""
let gameWinner=""

//console.table({psec:ps,csec:cs,Ppts:ppts,Cpts:cpts,result:winner});//
function gamePlay(ps,cs){
    switch (ps) {
    case  "rock":
        if(cs==="rock"){
            winner="Tie"
        }else if(cs==="paper"){
            cpts++
            winner="CPU wins"
        }else{
            ppts++
            winner="PLAYER wins"
        
        }
        break;
    case "scissor":
        if(cs==="scissor"){
            winner="Tie"
        }else if(cs==="rock"){
        cpts++
        winner="CPU wins"
        }else{
            ppts++
            winner="PLAYER wins"
        
        }
        break;
    case "paper":
        if(cs=="paper"){
            winner="Tie"
        }else if(cs==="scissor"){
            cpts++
            winner="CPU wins"
        
        }else{
            ppts++
            winner="PLAYER wins"
        }
        break;
    }
}
    // DOM //
    const rockbtn=document.getElementById("rbtn")
    const paperbtn=document.getElementById("pbtn")
    const scissorbtn=document.getElementById("sbtn")
    const rstbtn=document.getElementById("resetbtn")
    const playerPts=document.getElementById("pointsP")
    const cpuPts=document.getElementById("pointsC")
    const plSel=document.getElementById("pimage")
    const cpuSel=document.getElementById("cpuimage")

    rockbtn.addEventListener("click",() => fingerPlay("rock"))
    paperbtn.addEventListener("click",() => fingerPlay("paper"))
    scissorbtn.addEventListener("click",() => fingerPlay("scissor"))
    rstbtn.addEventListener("click",scoreReset)

function cpuChoice(){
    let x= Math.floor((Math.random()*3)+1)
    switch(x){
        case 1:
            return "rock"
        case 2:
            return "paper" 
        case 3:
            return "scissor"
    }
}

function fingerPlay(name){
    ps=name
    cs=cpuChoice()
    gamePlay(ps,cs)
    gameScore()
    updateChoice(ps,cs)
    sayWinner()
    }

function gameScore(){
    playerPts.textContent=`Pts:  ${ppts}`
    cpuPts.textContent=`Pts:  ${cpts}`
   

}
function updateChoice(ps,cs){
    switch(ps){
    case "rock":
        plSel.textContent="🪨"
        break;
    case "paper":
        plSel.textContent="📄"
        break;
    case "scissor":
        plSel.textContent="✂️"
        break;
    }
    switch(cs){
    case"rock":
        cpuSel.textContent="🪨"
        break;
    case "paper":
        cpuSel.textContent="📄"
        break;
     case "scissor":
        cpuSel.textContent="✂️"
        break;
    }
}
//✂️✌️⛰️📄🪨✊✋//
function scoreReset(){
    ppts=0
    cpts=0
    ps=""
    cs=""
    playerPts.textContent=`Pts:  ${ppts}`
    cpuPts.textContent=`Pts:  ${cpts}`
    plSel.textContent= ""
    cpuSel.textContent= ""
}

function sayWinner(){
    if(ppts==5||cpts==5){
        alert(`${winner}`)
    }
}