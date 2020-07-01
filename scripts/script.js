let hide = document.getElementById('hide');

hide.onclick = function() {
  let x = document.getElementById("text");
  
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
    
  }  
}
