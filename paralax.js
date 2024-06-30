const mountain = document.querySelector('.mountain')
const pohon1   = document.querySelector('.pohon1')
const aboutme  = document.querySelector('.aboutme')
const boxinfo  = document.querySelector('.box-info1')
const supportbox  = document.querySelector('.supportbox')
const layer1  = document.querySelector('.layer1')
const pohon2  = document.querySelector('.pohon2')

let bottom  = this.getStyle(mountain, 'bottom');
let count   = 30; 
let width   = 100;
let bottom2 = 10;
let top2 = 100;
let layer1_v = 100;
let pohon2_v = 30; 
window.addEventListener('wheel', function(e) {
    // Mountain
    if(e.deltaY > 0) {
        if(count >= 30 && count <= 50) {
            count += 5;
            mountain.style.bottom = `-${count}%`;
        }
        
    } else {
        if(count > 30) {
            count -= 5;
            mountain.style.bottom = `-${count}%`;
        }
        
    }



    if(e.deltaY > 0) {
        
        if(width <= 160) {
            width += 10; 
            pohon1.style.width = `${width}%`;
            
        }
        
    } else {
        if(width >= 100) {
            width -= 20; 
            pohon1.style.width = `${width}%`;
        }
    }
    console.log(width);

    if(e.deltaY > 0) {
        if(width >= 170) {
            // body.classList.add('oFlowUnset');
            bottom2 += 10;
            top2 -= 10;
            pohon1.style.bottom = `${bottom2}%`;
            boxinfo.style.top = `${top2}%`;
            supportbox.style.opacity = 1;
            
            if(bottom2 >= 170) {
                layer1_v += 15; 
                pohon2_v -= 1; 
                mountain.style.opacity = 0;
                layer1.style.width = `${layer1_v}%`;
                pohon2.style.width = `${pohon2_v}%`;
            }
        }
    } else {
        if(width <= 90) {
            bottom2 -= 10;
            top2 += 10;
            pohon1.style.bottom = `${bottom2}%`;
            boxinfo.style.top = `${top2}%`;
            supportbox.style.opacity = 1;
        }
    }









})