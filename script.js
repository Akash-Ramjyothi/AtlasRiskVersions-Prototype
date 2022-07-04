// const accordion = document.getElementsByClassName('accordioncall');

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//     console.log("Clicked by user")
//   })
// }

//  Atul's code:

// const normalDiv = document.getElementById("clickme");

// normalDiv.addEventListener("click", () => {

//   const hiddenDiv = document.getElementById("myid");

//   hiddenDiv.style.display = hiddenDiv.style.display === "block" ?  "none" : "block";
// })

function selectElementContents(el) {
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
    document.execCommand("Copy");}