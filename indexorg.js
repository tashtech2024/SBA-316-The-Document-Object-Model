console.log('Running...');
// * 1. Cache at least one element using selectElementById
const form = document.getElementById("registration");
const email = document.getElementById["email"];
const password = document.getElementById["password"];
const userName = document.getElementById['username'];
// * ====  2. Cache at least one element using querySelector or querySelectorAll. 
document.querySelector(" .heading").style.backgroundColor = "white";
//! 3. Use the parent-child-sibling relationship to navigate between elements at least once
//! (firstChild, lastChild, parentNode, nextElementSibling, etc.). 

//* 4.Iterate over a collection of elements to accomplish some task. 
// * 5. Create at least one element using createElement. 
const mainTag = document.querySelector('main');
mainTag.innerHTML = ('<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Enim neque volutpat ac tincidunt. Ipsum faucibus vitae aliquet nec.</h1>');
console.log(mainTag);

// !6. Use appendChild and/or prepend to add new elements to the DOM.

//*7.Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content

// * 8. Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
const navElement = document.querySelector('nav')
console.log(navElement.innerHTML)
// ! 9. Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
// document.getElementById("Register").innerHTML = "Click me!";
//* 10. Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. 
//*11.Modify at least one attribute of an element in response to user interaction. 
//* 12. Register at least two different event listeners and create the associated event
//*handler functions. 
// * 13. Use at least two Browser Object Model (BOM) properties or methods. 
// * 14. Include at least one form and/or input with HTML attribute validation.
// *15. Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

// ? Form ===========Email //
function validateEmail() {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  return emailVal;
}
// ? ====== Password : Toggle Password Visibility=====///
function toggleVisibility() {  
  var getPasword = document.getElementById("password");  
  if (getPasword.type === "password") {  
    getPasword.type = "text";  
  } else {  
    getPasword.type = "password";  
  }  
}
//? ==================Username =========//
function checkUserName() {
  // Regex: checks for two at least unique characters 
  // and no special characters or whitespace
  const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;

  // test regex
  console.log(regex.test(userName.value));


  if (!regex.test(userName.value)) {
      console.log('gere');
      errorDisplayDiv.innerHTML = '<small>Provide two special characters</small>';
      errorDisplayDiv.style.display = 'block';

      username.focus();
      return false;
  }
  return userName.value;
}
