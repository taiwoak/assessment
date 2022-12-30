function openFunction() {
    var modal = document.getElementById("modal");
    var body = document.getElementById("myBody");
    if (modal.style.display === "none") {
       modal.style.display = "block";
       body.style.overflowY = "hidden";
    } else {
        modal.style.display = "none";
        body.style.overflowY = "scroll";
    }
  }

function closeFunction() {
    var modal = document.getElementById("modal");
    var body = document.getElementById("myBody");
    if (modal.style.display === "block") {
       modal.style.display = "none";
       body.style.overflowY = "scroll";
    } else {
        modal.style.display = "block";
        body.style.overflow.y = "hidden";
    }
  }