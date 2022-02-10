// Your Code Here
let userName = window.prompt ('Enter your name');
let userScore = 0
let playAgain = true


function playGame(){
    for(let i=0; i < questions.length; i++){
    let question = questions[i]
    window.prompt(question.text);
    let userAnswer = window.prompt(question.text)
    if (userAnswer === question.correctAnswer){
        console.log('Correct')

        userScore = userScore + 10
    

    }window.alert(userName+"'s user score is " + userScore);
}
}
while(playAgain === true){
    playGame()
    let userChoice = window.prompt('Would you like to play again? Say "yes" or "no".')
    if(userChoice === "yes"){playAgain = true}
    else {playAgain = false
    window.alert("thank you, " +userName +", for playing!");
}
}

