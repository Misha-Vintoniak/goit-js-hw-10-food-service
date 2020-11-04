import '../styles.css';
import card from '../menu.json';
import menuCard from '../templates/list.hbs';

require
const menuList = document.querySelector('ul.js-menu');

const menuPaste = createCards(card);

menuList.insertAdjacentHTML("beforeend", menuPaste); 

function createCards(card) {
    return menuCard(card);
};