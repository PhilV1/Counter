'use strict'

const number = document.querySelector('.number')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
let numberCount = 0
console.log(numberCount)

// Increase Number
increase.addEventListener('click', function () {
  numberCount++
  number.textContent = numberCount
  if (numberCount > 0) {
    number.style.color = 'green'
  } else if (numberCount === 0) {
    number.style.color = 'black'
  }
})

// Decrease Number
decrease.addEventListener('click', function () {
  numberCount--
  number.textContent = numberCount
  if (numberCount < 0) {
    number.style.color = 'red'
  } else if (numberCount === 0) {
    number.style.color = 'black'
  }
})

// Reset Button
reset.addEventListener('click', function () {
  numberCount = 0
  number.textContent = numberCount
  number.style.color = 'black'
})
