class Item {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    show () {
        return `<p class='item-field'>${this.name},</p><p class='item-field'>${this.age}years</p>`;
    }
}
let list = document.querySelector('#list');
let userAppend = document.forms[0];
userAppend.addEventListener('submit', (e) => {
    e.preventDefault();
    let listEmpty = document.querySelector('.list-empty');
    listEmpty.style.display = 'none';
    const newUser = new Item(userAppend[0].value, userAppend[1].value);
    let item = document.createElement('div');
    item.className = 'item border';
    item.innerHTML = newUser.show();
    list.getElementsByClassName.visibility = 
    list.append(item);
});