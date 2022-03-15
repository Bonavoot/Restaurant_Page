const contactPageLoad = (selector) => {

    
    const contacts = document.createElement('p');
    contacts.classList.add('contactInfo');
    contacts.innerHTML = "Contact us <br> (626) P-I-Z-Z-A <br> pizzaFam2022@gmail.com";
    selector.appendChild(contacts);
    
    
}

export {contactPageLoad};