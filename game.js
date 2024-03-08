// Number guessing game..
import inquirer from "inquirer";
const systemgentratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 to 10 and write it"
    }]);
// console.log(answer.userGuess);
const { userGuess } = answer;
console.log(`Gussed NO: ${userGuess} Correct answer is: ${systemgentratedNo}`);
if (userGuess === systemgentratedNo) {
    console.log("correct answer! congratulations you win!");
}
else {
    console.log("wrong answer! better luck next time");
}
;
