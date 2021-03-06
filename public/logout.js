const logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click', async () => {
    console.log("you clicked me!")
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    })
    if(response.ok){
        location.href = '/'
    } else {
        alert(response.statusText)
    }
})