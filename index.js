console.log('Running...');
    // Cache at least one element using selectElementById
    const form = document.getElementById("registration");
    const email = document.querySelector("[name=email]");
    const password = document.querySelector("[name=password]");
    const userName = document.querySelector("[name=username]");
    
    // Cache at least one element using querySelector or querySelectorAll
    document.querySelector(".heading").style.backgroundColor = "white";
    
    // Use parent-child-sibling relationship to navigate between elements
    const mainTag = document.querySelector('main');
    console.log("Parent Node:", mainTag.parentNode); // Accessing the parent node
    const firstChild = mainTag.firstChild;
    const lastChild = mainTag.lastChild;
    console.log("First Child:", firstChild); // Accessing the first child
    console.log("Last Child:", lastChild); // Accessing the last child
    const nextSibling = mainTag.nextElementSibling;
    const previousSibling = mainTag.previousElementSibling;
    console.log("Next Sibling:", nextSibling); // Accessing the next sibling
    console.log("Previous Sibling:", previousSibling); // Accessing the previous sibling
    
    // Iterate over a collection of elements to accomplish some task
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        console.log(`Item ${index + 1}:`, item.textContent); // Accessing text content of each list item
    });
    
    // Create at least one element using createElement
    const newElement = document.createElement('div');
    newElement.textContent = 'COMNG SOON!';
    mainTag.appendChild(newElement);
    
    // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content
    const template = document.getElementById('template');
    const fragment = document.importNode(template.content, true);
    mainTag.appendChild(fragment);
    
    // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent
    const navElement = document.querySelector('nav');
    console.log(navElement.innerHTML);
    // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent
    document.getElementById("colorChange").addEventListener("click", function() {
        this.innerHTML = "Clicked!";
    });
    
    // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties
    const styledElement = document.getElementById("colorChange");
    styledElement.addEventListener("mouseover", function() {
        this.style.color = "blue"; // Change text color on mouseover
    });
    styledElement.addEventListener("mouseout", function() {
        this.style.color = "black"; // Reset text color on mouseout
    });
    // Adding/removing CSS classes on click
    styledElement.addEventListener("click", function() {
        this.classList.toggle("highlighted");
    });
    
    // Task 11: Modify at least one attribute of an element in response to user interaction
    const attributeElement = document.getElementById("attributeElement");
    attributeElement.addEventListener("click", function() {
        this.src = "new-image.jpg"; // Change the src attribute of the image on click
    });
    
    // Task 12: Register at least two different event listeners and create the associated event handler functions
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    
    button1.addEventListener("click", function() {
        console.log("Button 1 clicked!");
    });
    
    button2.addEventListener("mouseover", function() {
        console.log("Mouse over Button 2!");
    });
    
    // Task 13: Use at least two Browser Object Model (BOM) properties or methods
    console.log("Window inner width:", window.innerWidth); // Accessing window inner width
    console.log("Window location:", window.location.href); // Accessing window location
    
    // Include at least one form and/or input with HTML attribute validation
    // Include at least one form and/or input with DOM event-based validation
    function validateEmail() {
        let emailVal = email.value;
        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");
        if (atpos < 1) {
            alert("Your email must include an @ symbol, which must not be at the beginning of the email.");
            email.focus();
            return false;
        }
        if (dotpos - atpos < 2) {
            alert("Invalid structure: @.\nYou must include a domain name after the @ symbol.");
            email.focus();
            return false;
        }
        return emailVal;
    }
    function toggleVisibility() {  
        var getPassword = document.getElementById("password");  
        if (getPassword.type === "password") {  
            getPassword.type = "text";  
        } else {  
            getPassword.type = "password";  
        }  
    }
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
            userName.focus();
            return false;
        }
        return userName.value;
    }