const inputContent = document.querySelector('.input-content')
const outputContent = document.querySelector('.output-content')
const notification = document.querySelector('.notification')
const perform = document.querySelector('.perform')
const cancel = document.querySelector('.cancel')
///===========
perform.addEventListener('click', () => {
    const values = inputContent.value;

    const arr = values.split(',');
    for (let i in arr) {
        if (values == '') {
            alert('Please, input data!')
            inputContent.focus();
            return;
        }
        let create = document.createElement('option');
        create.innerHTML = arr[i];
        outputContent.appendChild(create);
    }
})
outputContent.addEventListener('change', () => {
    notification.innerHTML = `You choose value: ${outputContent.value}`
})
cancel.addEventListener('click', () => {
    if (confirm('are you cancel?')) {
        inputContent.value = '';
        outputContent.innerHTML = '';
    }
})