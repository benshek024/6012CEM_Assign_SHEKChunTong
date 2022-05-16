document.addEventListener("DOMContentLoaded", function(event) {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const staffform = document.getElementById("staffform");
  const staffid = document.getElementById('staffid');
  const staffpwd = document.getElementById('staffpwd');
  const stuid = document.getElementById('stuid');
  const stupwd = document.getElementById('stupwd');
  const errorElement = document.getElementById('error');

  errorElement.setAttribute('style','font-size: 32px; text-align:center; margin: auto; display: block; font-weight: 700;');
  
  staffform.addEventListener("submit", (e) => {
    let messages = []

    if (staffid.value != "abc1234@mail.com" || staffpwd.value != "abc12345678") {
      messages.push('Your Mail or Password is Incorrect\n');
    }
    else {
      messages.push('Login Successful, Redirecting to Home Page in 5 Seconds\n');
      setTimeout(function(){
        window.location.href = 'index.html';
      }, 5000);
    }
    
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerHTML = messages.join(', ');
    }
  })

  menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  })
});