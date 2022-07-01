const accordion = document.getElementsByClassName('accordioncall');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
    console.log("Clicked by user")
  })
}

const normalDiv = document.getElementById("clickme");

normalDiv.addEventListener("click", () => {

  const hiddenDiv = document.getElementById("myid");

  hiddenDiv.style.display = hiddenDiv.style.display === "block" ?  "none" : "block";
})
