const selectoption = document.querySelector('.select-option')
const formInput = document.querySelector('.form-input')
const input = document.querySelector('.input')
const data = document.querySelector('.data')
const add = document.querySelector('.add')
const save = document.querySelector('.save')
const cancel = document.querySelector('.cancel')

function active() {
    formInput.classList.add('active');
    save.classList.add('active');
    add.classList.add('none');
}
function none() {
    formInput.classList.remove('active');
    save.classList.remove('active');
    add.classList.remove('none')
}
add.addEventListener('click', () => {
    active();
    // console.log(add)
})
cancel.addEventListener('click', () => {
    none();
    data.innerHTML = '';
})
save.addEventListener('click', () => {
    var value = input.value;
    if (value == '') {
        data.innerHTML = 'Bạn chưa nhập dữ liệu!'
        setTimeout(function () {
            data.innerHTML = '';
        }, 1000)
        input.focus();
    }
    else {
        var arr = [];
        arr.push(value)
        addElementArr(arr)
        input.value = '';
        none();
    }
})

function addElementArr(array) {
    // selectoption.innerHTML = ''
    array.forEach(e => {
        selectoption.innerHTML += `
        <option value="${e}" class="">${e}</option> `
    })
}
selectoption.addEventListener('change', () => {
    data.innerHTML = `Bạn đã chọn: <strong> ${selectoption.value} </strong>`;
})