function work() {
    let div = document.createElement('div');
    div.className = 'vertical';
    let div1 = document.createElement('div');
    div1.className = 'horizontal';
    document.body.appendChild(div);
    document.body.appendChild(div1);
    document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        div.style.marginLeft = `${x}px`;
        div1.style.marginTop = `${y}px`;
    });
}

work();