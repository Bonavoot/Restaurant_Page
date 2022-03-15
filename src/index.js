import { homePageLoad } from '/home/joeyubuntu/repos/Restaurant_Page/src/homepage.js';
import { menuPageLoad } from '/home/joeyubuntu/repos/Restaurant_Page/src/menuTab.js';
import { contactPageLoad } from './contactPage';
import './style.css';


// selectors
const content = document.querySelector('#content');


const title = document.createElement('div');
title.classList.add('title');
title.textContent = "MamaMia's Pizzaria";
document.body.appendChild(title);

const pizza = document.createElement('img');
pizza.classList.add('pizza');
pizza.src = "/home/joeyubuntu/repos/Restaurant_Page/src/pizza.jpg";
document.body.appendChild(pizza); 




// Module create tab function
const createTabs = (() => {
let clickCount = 0;

// Tab buttons
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('btnContainer');

const homeTab = document.createElement('button');
homeTab.classList.add('homeBtn');
homeTab.textContent = "Home";
buttonContainer.appendChild(homeTab);

const menuTab = document.createElement('button');
menuTab.classList.add('menuBtn');
menuTab.textContent = "Menu";
buttonContainer.appendChild(menuTab);

const contactTab = document.createElement('button');
contactTab.classList.add('contactBtn');
contactTab.textContent = "contact";
buttonContainer.appendChild(contactTab);

document.body.appendChild(buttonContainer);


// Event Listeners for tab buttons
if(clickCount == 0) {
    homePageLoad(content);
    clickCount++;
}

    homeTab.addEventListener('click', () => {
    
        content.removeChild(content.firstChild);
        homePageLoad(content);
        
    }); 


    menuTab.addEventListener('click', () => {
    
        content.removeChild(content.firstChild);
        menuPageLoad(content);
        
    }); 

    contactTab.addEventListener('click', () => {
    
        content.removeChild(content.firstChild);
        contactPageLoad(content);
        
    }); 


})()



