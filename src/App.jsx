import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./component/Box";

//1.Box 2(title,image,result)
//2.rock scissors paper button
//3.button click, button shows on the box
//4.computer random item

//5. 3 4 result, who is winner and looser
//6.border color change(winner-green/ loser-red/ = black)

const choice = {
  rock: {
    name: "rock",
    img: "https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png",
  },
  scissors: {
    name: "scissors",
    img: "./img/scissors.png",
  },
  paper: {
    name: "paper",
    img: "./img/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    // console.log("선택됨",userChoice)
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    //user == computer tie
    //user == rock, computer =="scissors" user win
    //user == rock, computer =="paper" user lose
    //user == scissors, computer="paper" user win
    //user == scissors, computer="rock" user lose
    //user == paper, computer="rock" user win
    //user == paper, computer="scissors" user lose

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "rock")
      return computer.name == "scissors" ? "win" : "lose";
    else if (user.name == "scissors")
      return computer.name == "paper" ? "win" : "lose";
    else if (user.name == "paper")
      return computer.name == "rock" ? "win" : "lose";
   };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("itemArray", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("randomValue", randomItem);
    let final = itemArray[randomItem];
    // console.log("final",final)
    return choice[final];
  };

  return (
    <div className="container">
      <h1>Rock paper scissors?</h1>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main btn">
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
