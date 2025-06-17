let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".win");
let p = document.querySelector("p");
let newGame = document.querySelector(".newGame");
let restart = document.querySelector(".restart");

let player = "playerX";
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player == "playerX") {
      box.innerText = "X";
      player = "playerO";
      box.classList.add("x");
      box.classList.remove("o");
    } else {
      box.innerText = "O";
      player = "playerX";
      box.classList.add("o");
      box.classList.remove("x");
    }
    box.disabled = true;
    count++;
    let isWinner = checkWin();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

let gameDraw = ()=>{
  p.innerText=`No winner, Game was a Draw.`;
  win.classList.remove("hide");
};

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let checkWin = () => {
  for (let pattern of winPatterns) {
    let pstn1val = boxes[pattern[0]].innerText;
    let pstn2val = boxes[pattern[1]].innerText;
    let pstn3val = boxes[pattern[2]].innerText;

    if (pstn1val != "" && pstn2val != "" && pstn3val != "") {
      if (pstn1val === pstn2val && pstn2val === pstn3val) {
        winMsg(pstn1val);
      }
    }
  }
};

let winMsg = (winner) => {
  win.classList.remove("hide");
  p.innerText = `Winner is ${winner}`;
  diasbleBoxes = true;
};


newGame.addEventListener("click", () => {
  win.classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});

restart.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});