let input = document.querySelector('input');
let btn = document.querySelector('.inputTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList(e) : null);
});


function addList(e) {
    let notCompleted = document.querySelector('.notCompleted');
    let Completed = document.querySelector('.Completed');

    let newLi = document.createElement('li');
    let checkBtn = document.createElement('button');
    let trashBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';


    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(trashBtn);
    }

    checkBtn.addEventListener('click', function () {
        let parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    trashBtn.addEventListener('click', function () {
        let parent = this.parentNode;
        parent.remove();
    });
}