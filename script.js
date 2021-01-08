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
       let currentDeposit = document.getElementById('current-deposit')
       let currentBalance = document.getElementById('current-balance')
       currentDeposit.innerText = parseFloat(currentDeposit.innerText) + parseFloat(depositAmount.value)
       currentBalance.innerText = parseFloat(currentBalance.innerText) + parseFloat(currentDeposit.innerText)
   })

   let withdrawAmount = document.getElementById('withdraw-amount')
   let withdrawBtn = document.getElementById('withdraw-btn')
   withdrawBtn.addEventListener('click', function(){
      let currentWithdraw = document.getElementById('current-withdraw')
      let currentBalance = document.getElementById('current-balance')

      if(parseFloat(currentBalance.innerText) >= parseFloat(withdrawAmount.value) )
      {
         currentWithdraw.innerText = parseFloat(currentWithdraw.innerText) + parseFloat(withdrawAmount.value)
         currentBalance.innerText = parseFloat(currentBalance.innerText) - parseFloat(withdrawAmount.value)
      }
      else 
      {
          let outOfCash = document.getElementById('out-of-cash')
          outOfCash.innerHTML = 'You do not have sufficient balance.Please try again later.'
      }

      

   })
  
})

