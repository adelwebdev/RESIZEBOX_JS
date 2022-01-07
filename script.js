const main = document.querySelector('main');

document.addEventListener('mousedown', (e) => {
    // set mousemove-X
    if (e.target.className == "grag-x" && (window.event != null)){
        document.onmousemove = (e) => {
            e == null ? e = window.event: '';    
            document.querySelector('.box-1').style.flex = '0 0' + e.clientX/(main.clientWidth/100)+'&';
        }
        preventbehavior(e);
    }
    // set mousemove y
    
    else if (e.target.className == "grag-y" && (window.event != null)){
        document.onmousemove = (e) => {
            e == null ? e = window.event: '';
            document.querySelector('.top').style.flex = '0 0' + e.clientY/(main.clientHeight/100)+'&';
        }
        preventbehavior(e);
    }
})
document.addEventListener('mouseup', (e) => {
    if (e.target != null){
        document.onmousemove = null;
        document.onselectstart = null;
        e.target.ondragstart = null;
    }
})
//prevent bad behavior when moving element
const preventbehavior = (e) => {
    document.onselectstart = () => {return false};
    e.target.ondragstart = () => {return false};
    return false;
}