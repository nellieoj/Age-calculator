'use strict'
// Form Validation
const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const input1 = document.getElementById('input-1')
const input2 = document.getElementById('input-2')
const input3 = document.getElementById('input-3')

const date = new Date()
const currentDay = date.getDate()
const currentMonth = date.getMonth() + 1
const currentYear = date.getFullYear()

// FUNCTIONS VALIDATION
// day
const dayValidation = function () {
  if (dayInput.value <= -0 || dayInput.value > 31) {
    input1.children[2].innerHTML = 'Must be a valid day'
    input1.children[0].style.color = 'var(--Lightred)'
    dayInput.style.borderColor = 'var(--Lightred)'
  } else {
    input1.children[2].innerHTML = ''
    input1.children[0].style.color = 'var(--Smokeygrey)'
    dayInput.style.borderColor = 'var(--Purple)'
  }
}
// month
const monthValidation = function () {
  if (monthInput.value <= -0 || monthInput.value > 12) {
    input2.children[2].innerHTML = 'Must be a valid month'
    input2.children[0].style.color = 'var(--Lightred)'
    monthInput.style.borderColor = 'var(--Lightred)'
  } else {
    input2.children[2].innerHTML = ''
    input2.children[0].style.color = 'var(--Smokeygrey)'
    monthInput.style.borderColor = 'var(--Purple)'
  }
}
//year
const yearValidation = function () {
  if (yearInput.value >= currentYear || yearInput.value.length < 4) {
    input3.children[2].innerHTML = 'Must be a valid year'
    input3.children[0].style.color = 'var(--Lightred)'
    yearInput.style.borderColor = 'var(--Lightred)'
  } else {
    input3.children[2].innerHTML = ''
    input3.children[0].style.color = 'var(--Smokeygrey)'
    yearInput.style.borderColor = 'var(--Purple)'
  }
}
// Form-val functionalities
// day
dayInput.addEventListener('change', () => {
  dayValidation()
})

// month
monthInput.addEventListener('change', () => {
  monthValidation()
})
// year
yearInput.addEventListener('change', () => {
  yearValidation()
})

// Calculations
const arrowEl = document.querySelector('.arrow')
const daysSpan = document.querySelector('.days-span')
const monthsSpan = document.querySelector('.month-span')
const yearsSpan = document.querySelector('.year-span')
// functionalities
arrowEl.addEventListener('click', (e) => {
  e.preventDefault()

  let birthdate = []
  birthdate.push(yearInput.value, monthInput.value, dayInput.value)
  const ageCalculate = function () {
    const today = new Date()
    const birthDay = new Date(birthdate)
    let years = today.getFullYear() - birthDay.getFullYear()
    let months = today.getMonth() - birthDay.getMonth()
    let days = today.getDate() - birthDay.getDate()

    if (months < 0 || months === 0) {
      months += 12
      years--
    }
    if (days < 0) {
      days += 31
      months--
    }
    yearsSpan.innerHTML = years
    monthsSpan.innerHTML = months
    daysSpan.innerHTML = days
  }
  ageCalculate()
})
