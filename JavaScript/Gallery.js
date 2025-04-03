// Pop up images (modal images)
const images = document.querySelectorAll(".pictures img"); 
const modal = document.querySelector(".modal"); 
const modalImg = document.querySelector(".modalImg"); 
const caption = document.querySelector(".modalTxt"); 
const close = document.querySelector(".close"); 
const dropdowns = document.querySelectorAll('.dropdown'); 

// Adding event listeners to each image to display modal when clicked
images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src; // Setting the source of the modal image to the clicked image source
    caption.innerHTML = image.alt; // Setting the caption of the modal to the alt text of the clicked image
    modal.classList.add("appear"); // Adding the "appear" class to show the modal

    // Adding event listener to close button to remove modal when clicked
    close.addEventListener("click", () => {
      modal.classList.remove("appear"); // Removing the "appear" class to hide the modal
    });
  });
});

  // Dropdown menu functionality
dropdowns.forEach(dropdown => {
  const selected = dropdown.querySelector(".selected"); 
  const colour = dropdown.querySelectorAll('.menu li'); 
  const menu = dropdown.querySelector('.menu');   
  const caret = dropdown.querySelector('.caret'); 
  const select = dropdown.querySelector('.displaying');
  
  // Adding event listener to each option within the dropdown menu
  colour.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText; 
      caret.classList.remove('caret-rotate'); 
	  select.classList.remove('select-clicked'); 
      menu.classList.remove('menu-open'); 
      
      // Removing the "active" class from all options and adding it to the clicked option
      colour.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
