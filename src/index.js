console.log('testasd ');


import secondpage from './secondpage.js';
import  firstpage  from './firstpage.js' ;
import thirdpage  from './thirdpage.js';
import './style.css';
document.addEventListener('DOMContentLoaded', () => {
    firstpage();
})
document.addEventListener("click", function(e){
    const target = e.target.closest("#home"); 
    if(target){
     firstpage()
    }
  });
  document.addEventListener("click", function(e){
    const target = e.target.closest("#menu"); 
    if(target){
     secondpage()
    }
  });

  document.addEventListener("click", function(e){
    const target = e.target.closest("#contact"); 
    if(target){
     thirdpage()
    }
  });