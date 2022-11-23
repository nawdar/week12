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

const updateImage = (e) => {
    // console.log(e.target.textContent)
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", "images/shoppingCart.png");
    image.setAttribute("width", "100");
    image.setAttribute("height", "100");
  };
  clickMeButton.addEventListener("click", updateImage);

const buttonContainer = document.querySelector(".button-container");

function changeBGCGreen(e)
    {
        if (e.target.tagName === "BUTTON"){
        e.target.classList.add ("green");
        }
    }
    buttonContainer.addEventListener("mouseover", changeBGCGreen);

const changeTextcolor = (event) => {

event.target.style.color = event.target.textContent;

};
buttonContainer.addEventListener("mouseover", changeTextcolor);

