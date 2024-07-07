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
let layer1_v = 100;
let pohon2_v = 30; 
var isScrolling = false;
var isInitialized = false;
let width2 = 0; 
let support = 0; 
let support2 = 0; 
let support3 = 0; 

window.addEventListener('wheel', function(e) {
    // Support Variable
    if(e.deltaY > 0) {
        support++; 
        support2++; 
    }
    else {
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
            

            

         


            if(support3 >= 19) {
                boxinfo2.classList.add('switch');
                pohon2.classList.add('off');
                layer1.classList.add('off');
                mountain.classList.add('active');
                info.classList.add('active');
                support3 = 19; 
            }


            
        } else {
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

            if(support3 < 18) {
                boxinfo2.classList.remove('switch');
                pohon2.classList.remove('off');
                layer1.classList.remove('off');
                
                
            }
            if(support3 > 0)  support3--; 
            else              support3 = 0;

            if(bottom2 <= 290) {
                boxinfo2.classList.remove('onScroll');
            }
        }
    }


    console.log(`width: ${width} | support ${support}`)
    console.log(`top2: ${top2} | bottom2 ${bottom2}`)
    console.log("==========================")
    console.log(`support3: ${support3}`)

    // 

})
