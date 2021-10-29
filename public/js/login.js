async function loginUser(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

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
        document.location.replace("/profile")
    } else{
        alert("Failed to Login")
    }
}

document.querySelector("#login-form").addEventListener("submit", loginUser)