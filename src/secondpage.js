export default function secondpage() {
    
    const content = document.querySelector('#content');
    content.innerHTML="";
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    content.appendChild(headline);
  
    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Appetizer: Shrimp Cocktail';
    menuList.appendChild(menuItem1);
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Entree: Grilled Filet Mignon';
    menuList.appendChild(menuItem2);
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Dessert: Chocolate Lava Cake';
    menuList.appendChild(menuItem3);
    content.appendChild(menuList);
    }