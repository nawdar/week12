const clickmebutton = document.querySelector(".click_me");
// console.log(clickmebutton);

function clickHandler() {
  alert("You clicked me!");
  // clickmebutton.removeEventListener("click", clickHandler)
}

clickmebutton.addEventListener("click", clickHandler, { once: true });

function changebackgroundcolor() {
  // document.body.style.backgroundColor = "pink";
  //document.body.classList.add ("pinkBg")
  document.body.classList.toggle("pinkBg");
}

clickmebutton.addEventListener("click", changebackgroundcolor);

const  changeText = () => {
    console.log(clickmebutton.textContent)
  if (clickmebutton.textContent === "Click me!") {
    clickmebutton.textContent = "Clicked!";
  } else if (clickmebutton.textContent === "Clicked!") {
    clickmebutton.textContent = "Click me!";
  }

  // clickmebutton.textContent = "Clicked"
}
clickmebutton.addEventListener("click", changeText);

function updateImage() {
  const image = document.querySelectorAll("#shoppingCart");
//  console.log(image);
image.src = "images/shoppingCart.png";
image.width=100;
image.height=100;
image.alt = "shopping cart icon";

}

const buttonContainer = document.querySelector(".button-container");

function changeBGCGreen(e)
    {
        if (e.target.tagName === "BUTTON"){
        e.target.classList.add ("green");
        }
    }
    buttonContainer.addEventListener("mouseover", changeBGCGreen);




