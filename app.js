const computerChoiceDisplay = document.getElementById('computer-choice')

const userChoiceDisplay = document.getElementById('user-choice')

const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    computerChoice = randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors"
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice)
        result = 'Its a Draw!!!'
    if(computerChoice === "rock" && userChoice === "Scissors")
        result = 'You Lose'
    if(computerChoice === "rock" && userChoice === "Paper")
        result = 'You Win'
    if(computerChoice === "paper" && userChoice === "Scissors")
        result = 'You Win'
    if(computerChoice === "paper" && userChoice === "Rock")
        result = 'You Lose'
    if(computerChoice === "scissors" && userChoice === "Rock")
        result = 'You Win'
    if(computerChoice === "scissors" && userChoice === "Paper")
        result = 'You Lose'
    resultDisplay.innerHTML = result
}