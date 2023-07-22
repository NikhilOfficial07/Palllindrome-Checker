const inputTxt = document.querySelector('.inputs input')
Btn = document.querySelector('.inputs button')
Outp = document.querySelector('.output ')
let userInput
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    let revInput = userInput.split('').reverse().join('')
    Outp.style.display = 'block'
    if (userInput != revInput) {
      return (Outp.innerHTML = `No, <strong>'${inputTxt.value}'</strong> isn't a palindrome!`)
    }
    Outp.innerHTML = `Yes, <span>'${inputTxt.value}'</span> is a palindrome!`
  }
})

Btn.addEventListener('click', () => {
  let revInput = userInput.split('').reverse().join('')
  Outp.style.display = 'block'
  if (userInput != revInput) {
    return (Outp.innerHTML = `No, <strong>'${inputTxt.value}'</strong> isn't a palindrome!`)
  }
  Outp.innerHTML = `Yes, <span>'${inputTxt.value}'</span> is a palindrome!`
})

inputTxt.addEventListener('keyup', () => {
  // The g flag stands for "global" and ensures that all matching occurrences are replaced, not just the first one.The i flag stands for "case-insensitive" and allows the regular expression to match both uppercase and lowercase letters.
  userInput = inputTxt.value.toLowerCase().replace(/[^A-Z0-9]/gi, '')
  if (userInput) {
    return Btn.classList.add('active')
  }
  Outp.style.display = 'none'
  Btn.classList.remove('active')
})
