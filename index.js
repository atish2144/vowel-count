const inputEl = document.getElementById("inputEl");

const checkBtn1 = document.getElementById("checkBtn");

checkBtn1.addEventListener("click", function () {
  let String1 = inputEl.value;

  //String1 = ;
  String1 = String1.toLowerCase();

  let count = 0;
  // alert(String1);
  for (let i = 0; i < String1.length; i++) {
    switch (String1[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
      default:
    }
  }
  alert("vowel count of String is " + count);
  inputEl.value = "";
});
