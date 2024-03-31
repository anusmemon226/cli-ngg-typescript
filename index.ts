#! /usr/bin/env node
import inquirer from "inquirer";
const randNum = Math.floor((Math.random()*100)+1);
let tries = 5;
let guess = 1;
while(true){
    if(tries === 0){
        console.log(`${tries} try left, Try Again !`)
        console.log(`Correct Number was ${randNum}`)
        break
    }
    let answer = await inquirer.prompt([
        {
            name: "guessedNumber",
            type: "number",
            message: `Guess Number Between 1-100 - ${tries} left : `
        }
    ])
    if(answer.guessedNumber>0 && answer.guessedNumber<=100 && answer.guessedNumber === randNum){
        console.log("Congratulation! You Won.")
        console.log((guess === 1) ? `You guess in ${guess} try` : `You guess in ${guess} tries`)
        break
    }else if(answer.guessedNumber>0 && answer.guessedNumber<=100 && answer.guessedNumber < randNum){
        console.log("Wrong! You are low")
    }else if(answer.guessedNumber>0 && answer.guessedNumber<=100 && answer.guessedNumber > randNum){
        console.log("Wrong! You are high")
    }else{
        console.log("Invalid Input !")
    }
    tries--
    guess++
    continue
}