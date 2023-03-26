const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  // Button Click Active Class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  // Section Active
  allSections.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // Remove Selected From Others btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // Hide Other Sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
  });

  // Toggle Theme
  const teheBtn = document.querySelector('.theme-btn');
  teheBtn.addEventListener('click', function()  {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}
pageTransitions();
