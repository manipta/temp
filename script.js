a=["S","W","G"]
let scoreH=0
let scoreC=0
while(scoreC!=3&&scoreH!=3){
let input=prompt("S||W||G")
let temp=Math.floor(Math.random()*3)
let comp=a[temp]
confirm("Mine Was "+ comp)
if(comp==="S"){
    if(input==="W"){
        scoreC++;
        confirm("Computer Win this round!")
    }else if(input==="G"){
        scoreH++;
        confirm("You Win this round!")
    }else{
        confirm("No one wins !")
    }
}
else if(comp==="W"){
    if(input==="G"){
        scoreC++;
        confirm("Computer Win this round!")
    }else if(input==="S"){
        scoreH++;
        confirm("You Win this round!")
    }
    else{
        confirm("No one wins !")
    }
}
else if(comp==="G"){
    if(input==="S"){
        scoreC++;
        confirm("Computer Win this round!")
    }else if(input==="W"){
        scoreH++;
        confirm("You Win this round!")
    }
    else{
        confirm("No one wins !")
    }
}
}
confirm(scoreC>scoreH?"I win!":"You Win")