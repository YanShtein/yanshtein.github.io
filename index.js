let project = document.getElementsByClassName('project');
let overlay = document.getElementsByClassName('overlay')

for (let i = 0; i < project.length; i++) {
  project[i].addEventListener("mouseover", function() {
    overlay[i].style.display = "flex";
  });
  project[i].addEventListener("mouseout", function() {
    overlay[i].style.display = "none";
  });
};

