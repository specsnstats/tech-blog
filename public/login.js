async function loginUser(event) {
    event.preventDefault();
    const loginUsername = document.querySelector("#login-username").value
    const loginPassword = document.querySelector("#login-password").value
    console.log("submitted username is " + loginUsername)
    console.log("submitted password is " + loginPassword)

    const response = await fetch(`api/users/login`, {
        method:"POST",
        body: JSON.stringify({
            loginUsername,
            loginPassword
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    if (response.ok){
        document.location.replace("/profile")
    } else{
        alert("Failed to Login")
    }
}

document.querySelector("#login").addEventListener("submit", loginUser)