async function loginUser(event) {
    event.preventDefault();
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value
    console.log("submitted username is " + username)
    console.log("submitted password is " + password)

    const response = await fetch(`api/users/login`, {
        method:"POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    if (response.ok){
        document.location.replace("/dashboard")
    } else{
        alert("Failed to Login")
    }
}

document.querySelector("#login").addEventListener("submit", loginUser)