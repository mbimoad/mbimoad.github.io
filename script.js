const body = document.querySelector('body'); 



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
    }
})
