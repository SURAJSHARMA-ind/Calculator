let string = "";
const input = document.querySelector(".text");
const buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach(function(a) {
  a.addEventListener("click", function() {
    try {
      if (a.innerHTML === "=") {
        // Here i convert string variable to string because after calculation it return number 
        string = eval(string).toString();
        input.value = string;
      } else if (a.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if(a.innerHTML === "&lt;" ){
        string = string.slice(0,-1)
        input.value=string
        console.log("hey u call me")
      }
      else {
        string = string + a.innerHTML;
        input.value = string;
      }
    } catch (error) { 
      alert("Math error " + error);
    }
  });
});

