const menuPageLoad = (selector) => {

    const pizzaChoices = ['Napoliton', 'Pasta', "Margarite", 'Buffalo', 'Pickle', 'Cheese Burger', 'Barbeque', 'Mac n Cheese',
    'zuppe de pese', 'Concrete', 'Banana Pizza', 'Deep Fried Chicken', 'WTF Slice', 'For the homie', 'For the Ladies', 'Leather'];
    
    const menuContainer = document.createElement('ul');
    for(let i = 0; i < pizzaChoices.length-1; i++) {
        const menuOptions = document.createElement('li');
        menuOptions.classList.add('choices');
        menuOptions.textContent = pizzaChoices[i];
        menuContainer.appendChild(menuOptions);
        selector.appendChild(menuContainer);
    }
}

export {menuPageLoad};