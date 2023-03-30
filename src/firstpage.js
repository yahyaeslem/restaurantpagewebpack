export default function firstpage() {
    
    const content = document.querySelector('#content');
    content.innerHTML="";
    const restaurantImage = document.createElement('img');
    restaurantImage.src = 'restaurant-image.jpg';
    restaurantImage.alt = 'Restaurant Image';
    content.appendChild(restaurantImage);
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our Restaurant!';
    content.appendChild(headline);
  
    const copy = document.createElement('p');
    copy.textContent = 'We are a world-class restaurant with an extensive menu and exceptional service. Our chefs use only the freshest and highest-quality ingredients to create delicious and innovative dishes that will delight your taste buds. Come dine with us and experience the magic of our restaurant.';
    content.appendChild(copy);
    }
 