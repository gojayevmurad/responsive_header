const menu = document.getElementById('hamburger')


menu.addEventListener('click', (e)=>{
    e.target.classList.toggle('active')
})