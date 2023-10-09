var myH1 = document.querySelector("h1");
myH1.textContent = ("ARKNIGHTS CONTINGENCY CONTRACT");

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ak-title.png") {
    myImage.setAttribute("src", "images/ak-logo.png");
  } else {
    myImage.setAttribute("src", "images/ak-title.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

  myButton.onclick = () => {
    setUserName();
  };
  
  