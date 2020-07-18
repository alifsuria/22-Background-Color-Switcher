const item = document.querySelectorAll(".item");
const canvas = document.querySelector(".canvas");

console.log(item)

item.forEach((event)=>{
  event.addEventListener("click", function() {
    if (event.classList.contains("bg-primary")) {
      document.querySelector("body").style.background = "#007BFF";
      document.querySelector("body").style.color = "black"
    } else if (event.classList.contains("bg-danger")) {
      document.querySelector("body").style.background = "#DC3545";
      document.querySelector("body").style.color = "white"
    } else if (event.classList.contains("bg-dark")) {
      document.querySelector("body").style.background = "#343A40";
      document.querySelector("body").style.color = "white"
    } else if (event.classList.contains("bg-success")) {
      document.querySelector("body").style.background = "#28A745";
      document.querySelector("body").style.color = "black"
    }
  });
})
