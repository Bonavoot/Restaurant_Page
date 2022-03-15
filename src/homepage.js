const homePageLoad = (selector) => {

    
    const welcomeMsg = document.createElement('p');
    welcomeMsg.classList.add('middle');
    welcomeMsg.innerHTML = "Welcome to MamaMias website! Check out your favorite slices over at the menu tab, and salivate over the one youd like to order today! Arrivederci! Gratzie bello!";
    selector.appendChild(welcomeMsg);
    
    
}

export {homePageLoad};