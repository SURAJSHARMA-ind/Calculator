let string = "";
const input = document.querySelector(".text");
const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach(function(a) {
  a.addEventListener("click", function() {
    try {
      if (a.innerHTML === "=") {
        string = eval(string);
        input.value = string;
      } else if (a.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else {
        string = string + a.innerHTML;
        input.value = string;
      }
    } catch (error) { 
      alert("Math error ");
    }
  });
});

