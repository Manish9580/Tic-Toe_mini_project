let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-button");

turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
 };

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="0";
            turnO=false;//playerO
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
 
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winnner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};


const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
console.log("manish repo on javasript");