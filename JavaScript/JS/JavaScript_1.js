function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String= " is a great color";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Silver":
            Color_Output = "Silver" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML= Color_Output;
}


function classElement() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML= "New text";
}

var c = document.getElementById("canId");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Good evening",10,50);

var grad = document.getElementById("canId");
var grad2 = grad.getContext("2d");
var grad3 =  grad2.createLinearGradient(0, 0, 300, 0);
grad3.addColorStop(0, "blue");
grad3.addColorStop(1, "white");
grad2.fillStyle = grad3;
grad2.fillRect(10, 10, 150, 80);