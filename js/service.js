
window.onload = myService();
function myService() {
  const img = document.getElementById("img-arrow-down");
  const y = document.getElementById("menu-service-onclick");
  if (y.style.display === "none") {
    y.style.display = "block";
    img.style.transform = "rotate(180deg)";
  } else {
    y.style.display = "none";
    img.style.transform = "rotate(0deg)";
  }
}

window.onload = myCompany();
function myCompany() {
  const imgc = document.getElementById("img-arrow-down-con");
  const z = document.getElementById("menu-company-onclick");
  if (z.style.display === "none") {
    z.style.display = "block";
    imgc.style.transform = "rotate(180deg)";
  } else {
    z.style.display = "none";
    imgc.style.transform = "rotate(0deg)";
  }
}