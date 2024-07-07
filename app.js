

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let EmailId = document.getElementById("EmailId").value;
    let password = document.getElementById("password").value;
  
  //     // Here you can add your authentication logic
   // For demonstration, let's assume valid credentials are "admin" and "password"
    if (EmailId === "ayesha" && password === "12345") {
      // Redirect to dashboard or perform any other action upon successful login
        alert("Login successful!");
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
  });
  