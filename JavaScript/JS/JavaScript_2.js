function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    var y = document.forms["myForm"]["lastname"].value;
    if (x =="") {
        alert("First name must be filled out");
        return false;
    }
    if (y =="") {
        alert("Last name must be filled out");
        return false;
    }
}