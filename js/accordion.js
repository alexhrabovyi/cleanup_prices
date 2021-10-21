let dropdown_buttons = document.querySelectorAll(".prices-article__dropdown-button");

for (let i = 0; i < dropdown_buttons.length; i++) {

    dropdown_buttons[i].addEventListener("click", () => {

        dropdown_buttons[i].classList.toggle("dropdown-button_active");

        let dropdown_content = dropdown_buttons[i].nextElementSibling;

        if (dropdown_content.style.maxHeight) {

            dropdown_content.style.maxHeight = null;
        } else {

            dropdown_content.style.maxHeight = dropdown_content.scrollHeight + "px";
        }

        let arrow_down = dropdown_buttons[i].querySelector(".prices-article__arrow-down");

        arrow_down.classList.toggle("arrow-down_active")
    })
}