//we select which is the input  searching in the document id='input'
const INPUT = document.getElementById("input");
//here we collect the input info a send it to de search section
function receive() {
  window.location.href = `/search.html?${INPUT.value}`;
}
//this part is because when the user press "enter" key
INPUT.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    receive();
  }
});
