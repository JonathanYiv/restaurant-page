function menuTab(menu, contact, tab) {
  menu.classList.toggle("current-tab");
  contact.classList.toggle("current-tab");
  tab.textContent = "pizza";
}

export default menuTab;
