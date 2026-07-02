const cookieDisplay = document.getElementById('cookie-count')
const clickBtn = document.getElementById('click-btn')

let count = 0


clickBtn.addEventListener('click', function(){

   count = count + 1

    cookieDisplay.textContent = `Cookie count: ${count}`
})
