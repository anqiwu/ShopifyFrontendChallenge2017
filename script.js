document.addEventListener("DOMContentLoaded", function (event) {
    var form = document.getElementById("subscriptionForm");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailField = document.getElementById("email");
        var emailValue = emailField.value;

        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

        if (re.test(emailValue) == true) {
            document.getElementById("errorMessage").innerHTML = ""
            console.log("Valid Email Entered: " + emailValue)
            var dropdown = document.getElementById("ddlType");
            if (dropdown.selectedIndex > 0)
            {
                var dropdownSelectedValue = dropdown.options[dropdown.selectedIndex].value
                console.log("Dropdown selected value: " + dropdownSelectedValue)
            }
            else 
            {
                console.log("Dropdown selected value: No option was selected");
            }



        } else {
            document.getElementById("errorMessage").innerHTML = "Please enter a valid email address"
        }

    }, false)
});
