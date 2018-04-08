import './content-module';
import menuTab from './menu-module';
import contactTab from './contact-module';

const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const tab = document.querySelector(".tab");

menu.addEventListener("click", function() {
  if(contact.classList.contains("current-tab")) {
    menuTab(menu, contact, tab);
  }
})

contact.addEventListener("click", function() {
  if(menu.classList.contains("current-tab")) {
    contactTab(menu, contact, tab);
  }
})
