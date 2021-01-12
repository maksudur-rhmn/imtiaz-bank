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

   let depositAmount = document.getElementById('deposit-amount')
   let depositBtn = document.getElementById('deposit-btn')
   depositBtn.addEventListener('click', function(){
       
       updateSpanText('current-deposit', depositAmount)
       let currentBalance = document.getElementById('current-balance')
       currentBalance.innerText = parseFloat(currentBalance.innerText) + parseFloat(depositAmount.value)
       document.getElementById('deposit-amount').value = ""
   })

   let withdrawAmount = document.getElementById('withdraw-amount')
   let withdrawBtn = document.getElementById('withdraw-btn')
   withdrawBtn.addEventListener('click', function(){

      updateSpanText ('current-withdraw', withdrawAmount)
      let currentBalance = document.getElementById('current-balance')
      currentBalance.innerText = parseFloat(currentBalance.innerText) - parseFloat(withdrawAmount.value)
      document.getElementById('withdraw-amount').value = ""
      
   })

   // Update SpanText Function 
   function updateSpanText(secondId, amount)
   {
       let currentDeposit = document.getElementById(secondId)
       currentDeposit.innerText = parseFloat(currentDeposit.innerText) + parseFloat(amount.value)
   }
  
})

