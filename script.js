function work() {
    let div = document.createElement('div');
    div.className = 'vertical';
    let div1 = document.createElement('div');
    div1.className = 'horizontal';
    let div2 = document.createElement('div');
    div2.className = 'mouseclick';
    document.body.appendChild(div);
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        div.style.marginLeft = `${x}px`;
        div1.style.marginTop = `${y}px`;
    });

    document.addEventListener('mousedown', (e) => {
        let a = e.clientX;
        let q = a;
        let b = e.clientY;
        let d = b;
        div2.style.marginLeft = `${a}px`;
        div2.style.width = `${Math.abs(e.clientX - q)}px`;
        div2.style.marginTop = `${b}px`;
        div2.style.height = `${Math.abs(e.clientY - d)}px`;
        console.log(q, d);
    })
}

function createDiv(e) {
        const div2 = document.querySelector('.mouseclick');
        let startX = e.clientX;
        let startY = e.clientY;

        const divMove = (e) => {
            let moveX = e.clientX;
            let moveY = e.clientY;

            if(startX < moveX) {
                div2.style.marginLeft = `${startX}px`;
                div2.style.width = `${moveX - startX}px`;
            } else {
                div2.style.marginLeft = `${moveX}px`;
                div2.style.width = `${startX - moveX}px`;
            }

            if(startY < moveY) {
                div2.style.marginTop = `${startY}px`;
                div2.style.height = `${moveY - startY}px`;
            } else {
                div2.style.marginTop = `${moveY}px`;
                div2.style.height = `${startY - moveY}px`;
            }
        }

        document.addEventListener('mousemove', divMove);

        document.addEventListener('mouseup', () => {
            div2.removeAttribute('style');
            document.removeEventListener('mousemove', divMove);
        })
}

work();

document.addEventListener('mousedown', createDiv);