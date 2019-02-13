let deleteItem = document.getElementsByClassName('deleteItem');
let myToDo = document.getElementsByTagName('li');
let list = document.querySelector('ul');

for (let i = 0; i < myToDo.length; i++) {
  let span = document.createElement('span');
  let delTxt = document.createTextNode('Delete');
  span.className = 'deleteItem';
  span.appendChild(delTxt);
  myToDo[i].appendChild(span);
}

for (let i = 0; i < deleteItem.length; i++) {
  deleteItem[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  }
}

list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement('li');
  let inpText = document.getElementById('todoInput').value;
  let inpT = document.createTextNode(inpText);
  li.appendChild(inpT);
  if (inpText !== '') {
    document.getElementById('todoUl').appendChild(li);
  }
  document.getElementById('todoInput').value = '';

  let span = document.createElement('span');
  let delTxt = document.createTextNode('Delete');
  span.className = 'deleteItem';
  span.appendChild(delTxt);
  li.appendChild(span);

  for (i = 0; i < deleteItem.length; i++) {
    deleteItem[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
