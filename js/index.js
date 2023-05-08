function myFunction() {
    var x = document.getElementById("companynav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



window.onload = myOpenFunction();
function myOpenFunction() {
    var modal = document.getElementById("myModal");
    var body = document.getElementById("myBody");
    if (modal.style.display === "none") {
       modal.style.display = "block";
       body.style.overflowY = "hidden";
    } else {
        modal.style.display = "none";
        body.style.overflowY = "scroll";
    }
  }

function myCloseFunction() {
    var modal = document.getElementById("myModal");
    var body = document.getElementById("myBody");
    if (modal.style.display === "block") {
       modal.style.display = "none";
       body.style.overflowY = "scroll";
    } else {
        modal.style.display = "block";
        body.style.overflow.y = "hidden";
    }
  }


  window.onload = myMenuOpenFunction();
  function myMenuOpenFunction() {
      const mmodal = document.getElementById("myMenuModal");
      // var body = document.getElementById("myBody");
      if (mmodal.style.display === "none") {
         mmodal.style.display = "block";
        //  body.style.overflowY = "hidden";
      } else {
          mmodal.style.display = "none";
          // body.style.overflowY = "scroll";
      }
    }
  
  function myMenuCloseFunction() {
      var mmodal = document.getElementById("myMenuModal");
      // var body = document.getElementById("myBody");
      if (mmodal.style.display === "block") {
         mmodal.style.display = "none";
        //  body.style.overflowY = "scroll";
      } else {
          mmodal.style.display = "block";
          // body.style.overflow.y = "hidden";
      }
    }

