export default function thirdpage() {
    
    const content = document.querySelector('#content');
    content.innerHTML="";
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    content.appendChild(headline);
  
    const address = document.createElement('p');
    address.textContent = '123 Main St, Anytown, USA';
    content.appendChild(address);
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: 555-555-5555';
    content.appendChild(phone);
  
    const email = document.createElement('p');
    email.textContent = 'Email: info@restaurant.com';
    content.appendChild(email);
    }