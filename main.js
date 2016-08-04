const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'

  let choiceRock = document.querySelector('.rock')

  choiceRock.addEventListener('click', () => {
    const computerChoice = computerTurn()
    let status = compare('rock', computerChoice)

    document.querySelector('.output').textContent = status +
      ' Mickey threw ' + computerChoice + '.'
  })

  let choicePaper = document.querySelector('.paper')

  choicePaper.addEventListener('click', () => {
    const computerChoice = computerTurn()
    let status = compare('paper', computerChoice)

    document.querySelector('.output').textContent = status +
      ' Mickey threw ' + computerChoice + '.'
  })

  let choiceScissors = document.querySelector('.scissors')

  choiceScissors.addEventListener('click', () => {
    const computerChoice = computerTurn()
    let status = compare('scissors', computerChoice)

    document.querySelector('.output').textContent = status +
      ' Mickey threw ' + computerChoice + '.'
  })
}
document.addEventListener('DOMContentLoaded', init)

let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return 'ITS A DRAW...'
    }
    else if(choice1 === 'rock') {
      if (choice2 === 'scissors') {
        return 'ROCK WINS!'
      }
      else {
        return 'PAPER WINS!'
      }
    }
      else if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            return 'PAPER WINS!'
        }
        else {
            return 'SCISSORS WINS!'
        }

    }
    else {
        if(choice2 === 'paper') {
            return 'SCISSORS WINS!'
        }
        else {
            return 'ROCK WINS!'
        }
    }
}

const computerTurn = () => {
  let computerChoice = Math.random()
  if (computerChoice < 0.34) {
  	return 'rock'
  } else if(computerChoice <= 0.67) {
  	return 'paper'
  } else {
    return'scissors'
  }
}
