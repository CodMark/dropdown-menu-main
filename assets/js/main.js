const showDropdown = (content, button) => {
   const dropdowncont = document.getElementById(content),
      dropdownbtn = document.getElementById(button)

   dropdownbtn.addEventListener("click", () => {
      dropdowncont.classList.toggle("show-dropdown")
   })
}
showDropdown('dropdown-content', 'dropdown-btn')