document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    this.style.display = "none";
    document.getElementById("second").style.display = "block";
  });
  