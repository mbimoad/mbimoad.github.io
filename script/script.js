function limitStringTo20Words(inputString) {
  // Split the string into an array of words
  let words = inputString.split(/\s+/);
  
  // Slice the array to get the first 20 words and join them back into a string
  let limitedString = words.slice(0, 20).join(' ');

  return limitedString;
}


$('.js-example-basic-multiple').select2();


// Example usage:
let originalString = "This is a sample string with more than 20 words. We should limit it to 20 words.";
let limitedString = limitStringTo20Words(originalString);
console.log(limitedString);  // Output: "This is a sample string with more than 20 words."

const jobsEl = item => {

  console.log(item.jobdesc)
  return `<div class="box">
    <div class="header">
        <h3>${item.title}</h3>
        <div class="calendar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z" fill="white"/>
            </svg>

            <span>${item.date}</span>
        </div>
    </div>
    <div class="semi-header">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="white"/>
    </svg>
    
        <span>${item.location}</span>
    </div>
    <ul class="job-desk">
      ${item.jobdesc.map(i => `<li>${i}</li>`).join('')}
    </ul>
    <div class="footer">
        <span>#</span>
        <span>${item.type}</span>
    </div>
  </div>`;
}

const cards = item => {
  return `<div class="card">
  <div class="images">
      <img src="${item.image}">
      <a href="${item.github}" class="github">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_6_6)">
      <path d="M7.02399 2.31006C7.7753 2.56359 8.48982 2.91531 9.14899 3.35606C10.0805 3.11763 11.0384 2.99802 12 3.00006C12.993 3.00006 13.951 3.12406 14.849 3.35506C15.5079 2.91473 16.2221 2.56336 16.973 2.31006C17.67 2.07306 18.663 1.68906 19.253 2.34206C19.653 2.78606 19.753 3.53006 19.824 4.09806C19.904 4.73206 19.923 5.55806 19.713 6.37806C20.516 7.41506 21 8.65206 21 10.0001C21 12.0421 19.894 13.8151 18.257 15.0431C17.4688 15.626 16.5951 16.0834 15.667 16.3991C15.881 16.8891 16 17.4311 16 18.0001V21.0001C16 21.2653 15.8946 21.5196 15.7071 21.7072C15.5196 21.8947 15.2652 22.0001 15 22.0001H8.99999C8.73477 22.0001 8.48042 21.8947 8.29288 21.7072C8.10534 21.5196 7.99999 21.2653 7.99999 21.0001V20.0091C7.04499 20.1261 6.24399 20.0221 5.56299 19.7331C4.85099 19.4311 4.35499 18.9631 3.98199 18.5151C3.62799 18.0911 3.24199 17.1351 2.68399 16.9491C2.55936 16.9076 2.44413 16.8419 2.34487 16.7559C2.24562 16.6699 2.16427 16.5651 2.1055 16.4477C1.98678 16.2104 1.96718 15.9358 2.05099 15.6841C2.13479 15.4324 2.31515 15.2243 2.55239 15.1056C2.78962 14.9869 3.06429 14.9673 3.31599 15.0511C3.98199 15.2731 4.41599 15.7531 4.71299 16.1391C5.19299 16.7591 5.58299 17.5691 6.34299 17.8921C6.65599 18.0251 7.11499 18.1121 7.83299 18.0141L7.99999 17.9801C8.00229 17.4359 8.1156 16.8979 8.33299 16.3991C7.40486 16.0834 6.53118 15.626 5.74299 15.0431C4.10599 13.8151 2.99999 12.0431 2.99999 10.0001C2.99999 8.65406 3.48299 7.41806 4.28399 6.38206C4.07399 5.56206 4.09199 4.73406 4.17199 4.09906L4.17699 4.06106C4.24999 3.47906 4.33499 2.79406 4.74299 2.34206C5.33299 1.68906 6.32699 2.07406 7.02298 2.31106L7.02399 2.31006Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_6_6">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
  </svg> 
      </a>
  </div>
  <div class="detail">
      <h3>${item.title}</h3>
      <p>${limitStringTo20Words(item.description)}</p>
  </div>
  <div class="footer">
      <span>#</span>
      ${item.tags.map(i => `<span>${i}</span>`)}
  </div>
</div>`;
}

let elements = data.map(item => cards(item)).join('')
document.querySelector('.cards').innerHTML = elements;


elements = jobs.map(item => jobsEl(item)).join('')
document.querySelector('.jobs').innerHTML = elements;



console.log(elements);


const body = document.querySelector('body'); 
const audio = document.querySelectorAll('.audio');
const btnMode = document.querySelector('.optionbtn'); 
const imgComp = document.querySelectorAll('.components img'); 
let dark = false;
btnMode.addEventListener('click', (e) => {
    e.preventDefault();
    dark = !dark; 
    if(dark) {
        // Light
        btnMode.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48833 14.5617 7.00067 13.3827 7 12C6.99933 10.6173 7.487 9.43833 8.463 8.463C9.439 7.48767 10.618 7 12 7C13.382 7 14.5613 7.48767 15.538 8.463C16.5147 9.43833 17.002 10.6173 17 12C16.998 13.3827 16.5103 14.562 15.537 15.538C14.5637 16.514 13.3847 17.0013 12 17ZM5 13H1V11H5V13ZM23 13H19V11H23V13ZM11 5V1H13V5H11ZM11 23V19H13V23H11ZM6.4 7.75L3.875 5.325L5.3 3.85L7.7 6.35L6.4 7.75ZM18.7 20.15L16.275 17.625L17.6 16.25L20.125 18.675L18.7 20.15ZM16.25 6.4L18.675 3.875L20.15 5.3L17.65 7.7L16.25 6.4ZM3.85 18.7L6.375 16.275L7.75 17.6L5.325 20.125L3.85 18.7Z" fill="white"/>
        </svg>`;

        
        imgComp.forEach(item => {
            src = item.src; 
            newSrc = src.replace('/dark/', '/light/');
            item.src = newSrc; 
        })
        body.setAttribute('class', 'light');
        audio[1].play(); 
        audio[0].pause(); 
    } else {
        // Dark
        btnMode.innerHTML = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4627 3.00833 12.688 3.025C12.9133 3.04167 13.134 3.06667 13.35 3.1C12.6667 3.58333 12.1207 4.21267 11.712 4.988C11.3033 5.76333 11.0993 6.60067 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6957 19.025 12.287C19.7917 11.8783 20.4167 11.3327 20.9 10.65C20.9333 10.8667 20.9583 11.0873 20.975 11.312C20.9917 11.5367 21 11.766 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21Z" fill="white"/>
        </svg>`;
        
        imgComp.forEach(item => {
            src = item.src; 
            newSrc = src.replace('/light/', '/dark/');
            item.src = newSrc; 
        })
        body.setAttribute('class', 'dark');
        audio[1].pause(); 
        audio[0].play(); 
    }
})



function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }



  $('.owl3').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    autoWidth:true,
    margin: 120,
})
  $('.owl2').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: false,
    slideTransition: 'linear',
    // autoplayTimeout: 3000,
    // autoplaySpeed: 3000,
    // autoplayHoverPause: true,
    autoWidth:true,
    margin: 80,
})


$('.top-clients').owlCarousel({
  center: true,
  
})

$('.owl7').owlCarousel({
  center: true,
  items:4,
  
  margin:10,
  nav:false,
  dots:false,
  autoplay: true,
  // slideTransition: 'linear',
  // autoWidth:true,
  // margin: 120,
})