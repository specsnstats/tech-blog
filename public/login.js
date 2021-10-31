const loginForm = document.getElementById("login")
const signupForm = document.getElementById("signup")

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const loginUsername = document.getElementById('login-username').value
    const loginPassword = document.getElementById('login-password').value

    if(loginUsername && loginPassword){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ 
                username: loginUsername, 
                password: loginPassword 
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(response.ok){
            console.log(response);
            location.replace('/profile')
        } else {
            alert('YOU ENTERED THE WRONG INFORMATION')
        }
    }
});

signupForm.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const signupUsername = document.getElementById("signup-Username").value
    const signupPassword = document.getElementById("signup-Password").value

    if(signupUsername && signupPassword){
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username: signupUsername,
                password: signupPassword
            }),
            headers: {"Content-Type": "application/json"}
        })
        if(response.ok){
            location.href= "/profile"
        } else{
            alert("Username already exists, please login!")
        }
    }
})