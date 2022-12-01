const perform = document.querySelector('.perform')
const inputContent = document.querySelector('.input-content')
const outputContent = document.querySelector('.output-content')
const notification = document.querySelector('.notification')
const cancel = document.querySelector('.cancel')

//start:

perform.addEventListener('click', function () {
    let values = inputContent.value;
    if (values == '') {
        notification.innerHTML = `Vui lòng nhập dữ liệu`;
        inputContent.focus();
        return;
    }
    let arr = values.split(',')
    // arr.forEach((element) => {
    //     outputContent.innerHTML += `<option value='${element}'>${element}</option>`
    // });
    // console.log(arr.length)
    // console.log(arr[1])
    let n = arr.length
    for (let i = 0; i < n; i++) {
        // let create = document.createElement('option');
        for (let j = 0; j <= i; j++) {

            if (j === i) {
                // console.log(arr[i]);
                outputContent.innerHTML += `<option value='${arr[j]}'>${arr[j]}</option>`;
                // create.innerHTML = arr[j];
                // outputContent.appendChild(create);
            }
            else if (arr[i] === arr[j]) {
                break;
                // continue;
            }
        }
    }
})
outputContent.addEventListener('click', () => {
    if (outputContent != '') {
        notification.innerHTML = `Bạn đã chọn: ${outputContent.value}`
    }
})
cancel.addEventListener('click', () => {
    if (confirm('Bạn muốn hủy?')) {
        inputContent.value = '';
        outputContent.innerText = '';
        notification.innerHTML = '';
    }
})