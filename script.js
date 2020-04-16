// document.getElementById("email").addEventListener("change", (e) => {
//     console.log(e.target.value)
// })



document.addEventListener("click", function(e) {
    e.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById("password").value

    if(email === "email@email.com" && password === "password" ){
        location.replace("homepage.html")
    } 
})
