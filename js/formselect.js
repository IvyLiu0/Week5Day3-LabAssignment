function displaySelectOption(){
    var dropdown = document.getElementById("formselect");
    var menu = dropdown.options[dropdown.selectedIndex].value;

    if (menu === "phone"){
        document.getElementById("phone").style.display = "block";
        document.getElementById("email").style.display = "none";
    } else if (menu === "email") {
        document.getElementById("phone").style.display = "none";
        document.getElementById("email").style.display = "block";
    } else {
        document.getElementById("phone").style.display = "none";
        document.getElementById("email").style.display = "none";
    }
}