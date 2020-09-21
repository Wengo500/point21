const app = document.getElementById('app');

const input = document.createElement('input');
input.type = 'text';

app.append(input);

const list = new List(app); 
list.addItem(new Item("First"));
list.addItem(new Item("Second"));
list.addItem(new Item("Third"));

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        input.value.trim() && list.addItem(new Item(input.value));
        input.value = '';
    }
});

const div1 = document.createElement('div');
div1.addEventListener('click', () => {
    console.log('clock1');
});
const div2 = document.createElement('div');
div2.addEventListener('click', () => {
    console.log('clock2');
});
const div3 = document.createElement('div');
div3.addEventListener('click', (e) => {
    console.log('clock3');
    e.stopImmediatePropagation();
});
div3.addEventListener('click', (e) => {
    console.log('clock4');
});

const link = document.createElement('a');
link.href = 'https://www.google.com/search?q=splice+js&oq=splic&aqs=chrome.2.69i57j0l6j46.2759j0j7&sourceid=chrome&ie=UTF-8';
link.innerText = 'link';
// link.setAttribute();


link.addEventListener('click', (e) => {
    console.log('Logic...');

    e.preventDefault();
});
document.body.append(link);

div1.className = 'div1';
div2.className = 'div2';
div3.className = 'div3';

document.body.append(div1);
div1.append(div2);
div2.append(div3);

