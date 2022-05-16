document.addEventListener("DOMContentLoaded", function(event) {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const stuform = document.getElementById("stuform");
  const stuid = document.getElementById('stuid');
  const stupwd = document.getElementById('stupwd');
  const errorElement = document.getElementById('error');

  errorElement.setAttribute('style','font-size: 32px; text-align:center; margin: auto; display: block; font-weight: 700;');
  
  stuform.addEventListener("submit", (e) => {
    let messages = []

    if (stuid.value != "stu1234@mail.com" || stupwd.value != "stu12345678") {
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
      errorElement.innerText = messages.join(', ');
    }
  })

  menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  })
});