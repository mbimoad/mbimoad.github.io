if(window.innerWidth >= 768) {


const mountain = document.querySelector('.mountain')
const pohon1   = document.querySelector('.pohon1')
const layer1   = document.querySelector('.layer1')
const aboutme  = document.querySelector('.aboutme')
const boxinfo  = document.querySelector('.box-info1')
const boxinfo2  = document.querySelector('.box-info2')
const supportbox  = document.querySelector('.supportbox')
const pohon2  = document.querySelector('.pohon2')
const hellobox  = document.querySelector('.hello-box')
const info  = document.querySelector('.info')


let bottom  = this.getStyle(mountain, 'bottom');
let count   = 30; 
let width   = 100;
let bottom2 = 10;
let top2 = 100;
var isScrolling = false;
var isInitialized = false;
let width2 = 0; 
let support = 0; 
let support2 = 0; 
let support3 = 0; 
let reachTheBottom = false; 

window.addEventListener('wheel', function(e) {
    console.log("kesini")
    // Support Variable
    if(e.deltaY > 0) {
        support++; 
        support2++; 
    }
    else {
        reachTheBottom = false;
        if(support > 0) {
            support--; 
            support2--;
        }
        else {
            support = 0;
            support2 = 0;
            isInitialized = false; 
        } 
    }

    // Activate Scrolling
    if(support != 0) {
        isScrolling = true; 
    } 

    // Mountain Handling
    if(isScrolling) {
        if(e.deltaY > 0) {
            if(count >= 30 && count <= 50) {
                count += 5;
                mountain.style.bottom = `-${count}%`;
            }
        } else {
            if(count > 30) {
                if(support == 0) {
                    count -= 5;
                    mountain.style.bottom = `-${count}%`;
                }
                
            } 
        }
    }

    // Tree1 Handling
    if(isScrolling)
    {
        if(e.deltaY > 0) {
            if(width <= 160 && support > 0) {
                width += 10; 
                pohon1.style.width = `${width}%`;   
            }  
        } else {
            if(width >= 100) {
                if(width == 100) 
                {
                    if(support == 0) pohon1.style.width = `${width}%`;
                } else {
                    if(support == 0) {
                        width -= 20; 
                        pohon1.style.width = `${width}%`;
                    }
                }
            }
        }
    }
    
    // Support Box Handling
    if(isScrolling)
    {
        if(e.deltaY > 0) 
        {
            if(width >= 170)
            {
                bottom2 += 10;
                top2 -= 10;
                pohon1.style.bottom = `${bottom2}%`;
                boxinfo.style.top = `${top2}%`;
                supportbox.style.opacity = 1;
                isInitialized = true; 
            
            }
            
        } else {
            
            if(isInitialized) 
            {
        
                if(top2 < 100) {
                    top2 += 10;
                } else {
                    top2 = 120;
                }

                if(bottom2 > 10) {
                    bottom2 -= 10;
                } else {
                    bottom2 = -10;
                }
                boxinfo.style.top = `${top2}%`;
                pohon1.style.bottom = `${bottom2}%`;
                supportbox.style.opacity = 1;
            }
        }
    }


    // boxinfo2 
    if(isScrolling) {
        if(e.deltaY > 0) {
            if(bottom2 >= 170) {
                boxinfo2.classList.add('active');
                pohon1.classList.add('active');
                hellobox.classList.add('active');
                pohon2.classList.add('active');
                layer1.classList.add('active');

                if(bottom2 >= 290) {
                    boxinfo2.classList.add('onScroll');
                    support3++; 
                }

            }

            if(bottom2  >= 470) bottom2 = 470
            if(top2 <= -360) top2 = -360; 
            if(support >= 52) support = 52;

            if(reachTheBottom) 
            {
                boxinfo2.classList.add('switch');
                pohon2.classList.add('off');
                layer1.classList.add('off');
                mountain.classList.add('active');
                info.classList.add('active');
                support3 = 19; 
            }
            
            
        } else {
            validateStyle()

            if(support3 > 0)  support3--; 
            else              support3 = 0;

           

            
        }
    }


    // console.log(`width: ${width} | support ${support}`)
    // console.log(`top2: ${top2} | bottom2 ${bottom2}`)
    // console.log("==========================")
    // console.log(`support3: ${support3}`)

})

function validateStyle() {
    if(bottom2 <= 120) {
        boxinfo2.classList.remove('active');
        pohon1.classList.remove('active');
        hellobox.classList.remove('active');
        pohon2.classList.remove('active');
        layer1.classList.remove('active');
    }

    if(support3 < 10) {
        mountain.classList.remove('active');
        info.classList.remove('active');
    }

    

    if(!reachTheBottom) {
        boxinfo2.classList.remove('switch');
        pohon2.classList.remove('off');
        layer1.classList.remove('off');
    }

    if(bottom2 <= 290) {
        boxinfo2.classList.remove('onScroll');
    }
}


boxinfo2.addEventListener('scroll', function(e) {
    const scrollTop = this.scrollTop;
    const scrollHeight = this.scrollHeight;
    const clientHeight = this.clientHeight;

    console.log(`${scrollTop + clientHeight + 10} > ${scrollHeight}`)

    if ((scrollTop + clientHeight + 10) >= scrollHeight) {
        reachTheBottom = true; 
    } else {
        reachTheBottom = false; 
    }
})

const explore = document.querySelector('.explore'); 
explore.addEventListener('click', function() {
    count = 55; 
    width = 170; 
    bottom2 = 110; 
    top2 = 0; 
    support = 16; 
    support2 = 16; 
    support3 = 0; 
    isScrolling = true;
    isInitialized = true;
    reachTheBottom = false; 
    pohon1.style.bottom = `${bottom2}%`;
    pohon1.style.width = `${width}%`;   
    mountain.style.bottom = `-${count}%`;
    boxinfo.style.top = `${top2}%`;
})


const menu = document.querySelectorAll('ul.menu li'); 
menu.forEach(item => item.addEventListener('click', function(e) {
   e.preventDefault();
   if(this.innerText.toLowerCase() == 'about') {
       count = 55; 
       width = 170; 
       bottom2 = 110; 
       top2 = 0; 
       support = 16; 
       support2 = 16; 
       support3 = 0; 
       isScrolling = true;
       isInitialized = true;
       reachTheBottom = false; 
       
       pohon1.style.bottom = `${bottom2}%`;
       pohon1.style.width = `${width}%`;   
       mountain.style.bottom = `-${count}%`;
       boxinfo.style.top = `${top2}%`;
       setTimeout(() => {
        validateStyle(); 
       }, 200)
   } else if(this.innerText.toLowerCase() == 'testimonial') {
        count = 55; 
        width = 170; 
        bottom2 = 170; 
        top2 = -60; 
        support = 22; 
        support2 = 22; 
        support3 = 0; 
        isScrolling = true;
        isInitialized = true;
        reachTheBottom = false; 
        if(bottom2 >= 170) {
            boxinfo2.classList.add('active');
            pohon1.classList.add('active');
            hellobox.classList.add('active');
            pohon2.classList.add('active');
            layer1.classList.add('active');

            if(bottom2 >= 290) {
                boxinfo2.classList.add('onScroll');
                support3++; 
            }
        }

        pohon1.style.bottom = `${bottom2}%`;
        pohon1.style.width = `${width}%`;   
        mountain.style.bottom = `-${count}%`;
        boxinfo.style.top = `${top2}%`;
    } else if(this.innerText.toLowerCase() == 'skill') {
        count = 55; 
        width = 170; 
        bottom2 = 220; 
        top2 = -110; 
        support = 27; 
        support2 = 27; 
        support3 = 0; 
        isScrolling = true;
        isInitialized = true;
        reachTheBottom = false; 

        


        pohon1.style.bottom = `${bottom2}%`;
        pohon1.style.width = `${width}%`;   
        mountain.style.bottom = `-${count}%`;
        boxinfo.style.top = `${top2}%`;

       
    } 
    


    else if(this.innerText.toLowerCase() == 'portfolio') {
        count = 55; 
        width = 170; 
        bottom2 = 350; 
        top2 = -270; 
        support = 40; 
        support2 = 40; 
        support3 = 8; 
        isScrolling = true;
        isInitialized = true;
        reachTheBottom = false; 
        pohon1.style.bottom = `${bottom2}%`;
        pohon1.style.width = `${width}%`;   
        mountain.style.bottom = `-${count}%`;
        boxinfo.style.top = `${top2}%`;
        if(bottom2 >= 170) {
            boxinfo2.classList.add('active');
            pohon1.classList.add('active');
            hellobox.classList.add('active');
            pohon2.classList.add('active');
            layer1.classList.add('active');

            if(bottom2 >= 290) {
                boxinfo2.classList.add('onScroll');
                support3++; 
            }
        }

        let projectid = document.getElementById('projects')
        projectid.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        })
    }

    else if(this.innerText.toLowerCase() == 'experience') {
        count = 55; 
        width = 170; 
        bottom2 = 460; 
        top2 = -350; 
        support = 51; 
        support2 = 51; 
        support3 = 29; 
        isScrolling = true;
        isInitialized = true;
        reachTheBottom = false; 
        pohon1.style.bottom = `${bottom2}%`;
        pohon1.style.width = `${width}%`;   
        mountain.style.bottom = `-${count}%`;
        boxinfo.style.top = `${top2}%`;
        if(bottom2 >= 170) {
            boxinfo2.classList.add('active');
            pohon1.classList.add('active');
            hellobox.classList.add('active');
            pohon2.classList.add('active');
            layer1.classList.add('active');

            if(bottom2 >= 290) {
                boxinfo2.classList.add('onScroll');
                support3++; 
            }
        }

        let experienceid = document.getElementById('experience')
        experienceid.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        })
    }

    else if(this.innerText.toLowerCase() == 'clients') {
        count = 55; 
        width = 170; 
        bottom2 = 290; 
        top2 = -180; 
        support = 34; 
        support2 = 34; 
        support3 = 1; 
        isScrolling = true;
        isInitialized = true;
        reachTheBottom = false; 
        pohon1.style.bottom = `${bottom2}%`;
        pohon1.style.width = `${width}%`;   
        mountain.style.bottom = `-${count}%`;
        boxinfo.style.top = `${top2}%`;
        if(bottom2 >= 170) {
            boxinfo2.classList.add('active');
            pohon1.classList.add('active');
            hellobox.classList.add('active');
            pohon2.classList.add('active');
            layer1.classList.add('active');

            if(bottom2 >= 290) {
                boxinfo2.classList.add('onScroll');
                support3++; 
            }
        }

        let clientsid = document.getElementById('clients')
        clientsid.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        })
    }



    else if(this.innerText.toLowerCase() == 'home') {
        count = 30; 
        width = 90; 
        bottom2 = -10; 
        top2 = 120; 
        support = 0; 
        support2 = 0; 
        support3 = 0; 
        isScrolling = false;
        isInitialized = false;
        reachTheBottom = false; 
        
        pohon1.style.bottom = `${bottom2}%`;
        pohon1.style.width = `${width}%`;   
        mountain.style.bottom = `-${count}%`;
        boxinfo.style.top = `${top2}%`;
        validateStyle();
    }

}))




} else {
    AOS.init();

    
    const boxinfo1 = document.querySelector('.box-info1');
    const boxinfo2 = document.querySelector('.box-info2');
    const mountain = document.querySelector('.mountain');
    const pohon1 = document.querySelector('.pohon1');
    
    let angka = 0; 
    let angka2 = -15; 


 // Initialize a variable to store the previous scroll position
    let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    document.addEventListener('scroll', function(e) {
        // Current scroll position
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Determine scroll direction
        if (currentScrollPosition > previousScrollPosition) {
            angka -= .2;
            angka2 -= .5;  
            // console.log("Scrolling down");


            if(angka >= -13) {
                angka -= .2;
            } else angka = -13;

            if(angka2 >= -48) {
                console.log("kesini")
                angka2 -= .5;  
            } else angka2 = -48
           
            console.log(angka + " Angka");
            console.log(angka2 + " Angka2");
            

            mountain.style.bottom = `${angka}%`;
            pohon1.style.bottom = `${angka2}%`;
        } else {
      
           
            if(angka2 <= -15) {
                angka2 += .5; 
            } else angka2 = -15; 
            if(angka <= 0)        angka += .2; 
            else angka = 0;


            mountain.style.bottom = `${angka}%`;
            pohon1.style.bottom = `${angka2}%`;
        }

        // Update previous scroll position
        previousScrollPosition = currentScrollPosition;

        // Check if reached the bottom of the page
        if (window.innerHeight + currentScrollPosition + 5 >= document.documentElement.offsetHeight) {
            console.log("Reached the bottom of the page!");
            // Perform actions when reaching the bottom
            // Example:
            // boxinfo2.classList.add('active');
        }
    });

    

    const menu = document.querySelectorAll('ul.menu li'); 
    menu.forEach(item => item.addEventListener('click', function(e) {
       e.preventDefault();
       if(this.innerText.toLowerCase() == 'about') {
            let idmenu = document.getElementById('about')
            idmenu.scrollIntoView({
                behavior: 'smooth', 
                block: 'start',
            })
       } else if(this.innerText.toLowerCase() == 'testimonial') {
        let idmenu = document.getElementById('testi')
        idmenu.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        })
        } else if(this.innerText.toLowerCase() == 'skill') {
            let idmenu = document.getElementById('skill')
            idmenu.scrollIntoView({
                behavior: 'smooth', 
                block: 'start',
            })
       } else if(this.innerText.toLowerCase() == 'portfolio') {
        let idmenu = document.getElementById('projects')
        idmenu.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        })
        }   else if(this.innerText.toLowerCase() == 'experience') {
            let idmenu = document.getElementById('experience')
            idmenu.scrollIntoView({
                behavior: 'smooth', 
                block: 'start',
            })
            } 
    }));

}


if(window.innerWidth <= 767)
{
    
}