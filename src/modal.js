$(document).ready(function () {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".bugopen");
    const closeModalBtn = document.querySelector(".btn-close");
    
    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      };
      openModalBtn.addEventListener("click", openModal);
    
      const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };
      closeModalBtn.addEventListener("click", closeModal);
    
      $("#bug").click(function (e) {
            if (window.location.href= "mailto:tamilarasan_thuyavan@cat.com?subject=Bug found in Automation Toolbox&body=**Please mention in detail about the bug you have encountered in the toolbox and attach screenshots (if possible)** ") {
                closeModal();
            } else {
                openModal();
            }
      });
    });