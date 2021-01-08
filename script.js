const loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener('click', function() {
   let email = document.getElementById('email')
   let password = document.getElementById('password')

   if(email.value == '')
   {
        let error = document.getElementById('error')
        error.innerHTML = 'Please enter your email to login'
   }
   else if (password.value == '')
   {
    let error = document.getElementById('error')
    error.innerHTML = 'Please enter your password to login'
   }
   else 
   {
    const loginArea =  document.getElementById('login-area')
    loginArea.style.display = 'none'
    const transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'
   }
  
})

