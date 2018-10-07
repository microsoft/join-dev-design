class toolTip {
  constructor(parentDiv) {
    this.parentDiv = parentDiv;
  }
  addToParent() {
    let parents = document.querySelectorAll(this.parentDiv);
    let removed = false;
    parents.forEach(parent => {
      let parentElem = parent.parentNode;
      console.log(parent);
      let body = document.querySelector("body");
      let template = document.createElement("div");
      template.classList.add("toolTip");
      let message = `<span>` + parent.dataset.message + `</span>`;
      template.innerHTML = message;
      parentElem.addEventListener("mouseenter", e => {
        removed = false;
        let xCoord = e.clientX - 200 + "px";
        let yCoord = e.clientY + 50 + "px";
        template.style.display = "block";
        template.style.left = xCoord;
        template.style.top = yCoord;
        console.log("tuka");
        console.log(xCoord, yCoord);
        setTimeout(function() {
          template.style.opacity = "1";
        }, 1);
        body.appendChild(template);

        setTimeout(function() {
          if (removed == false) {
            template.style.opacity = "0";
            setTimeout(() => {
              body.removeChild(template);
              removed = true;
            }, 200);
          }
        }, 2000);
      });
      parentElem.addEventListener("mouseleave", () => {
        if (removed == false) {
          template.style.opacity = "0";
          setTimeout(() => {
            body.removeChild(template);
            removed = true;
          }, 200);
        }
      });
    });
  }
}

const logoToolTip = new toolTip("[data-tooltip]").addToParent();
