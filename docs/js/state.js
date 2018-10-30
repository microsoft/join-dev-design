//state popup

function state(id1, id2) {
  //classy
  const map = document.getElementById("map");
  const idone = document.getElementById(id1);
  const idtwo = document.getElementById(id2);
  map.classList.toggle("hideme");
  if (map.classList.contains("hideme")) {
    idone.classList.add("show");
    if (idtwo.classList.contains("show")) {
      idtwo.classList.remove("show");
    }
    idone.addEventListener("click", function() {
      map.classList.remove("hideme");
      if (idone.classList.contains("show")) {
        idone.classList.remove("show");
      }
    });
    idtwo.addEventListener("click", function() {
      map.classList.remove("hideme");
      if (idone.classList.contains("show")) {
        idone.classList.remove("show");
      }
    });
  } else {
    if (idone.classList.contains("show") || idtwo.classList.contains("show")) {
      idone.classList.remove("show");
      idtwo.classList.remove("show");
    }
  }
}
