const inputContent = document.querySelector('.input-content')
const outputContent = document.querySelector('.output-content')
const perform = document.querySelector('.perform')
const cancel = document.querySelector('.cancel')
//-start query
perform.addEventListener('click', () => {
    let values = inputContent.value;
    if (values == '') {
        alert('Vui lòng nhập dữ liệu!');
        inputContent.focus();
        return;
    }
    let array = values.split(',');
    array.forEach((element) => {
        outputContent.innerHTML += `<option value='${element}'>${element}</option>`
    });
})

outputContent.addEventListener('change', () => {
    var value = outputContent.value
    alert('Bạn đã chọn: ' + value)
})
cancel.addEventListener('click', () => {

    inputContent.value = '';
    if (outputContent.value !== 'chon') {
        outputContent.innerHTML = '';
    }
})