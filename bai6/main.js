const chooseDate = document.querySelector('.choose-date');
const output = document.querySelector('.output');
const watch = document.querySelector('.watch');
const deleteCancel = document.querySelector('.delete');
///================
watch.addEventListener('click', () => {
    const values = chooseDate.value;
    const array = values.split('/');
    if (array[0] > 31 || array[0] < 1 || array[1] > 12 || array[1] < 1 || array[2] > 2022) {
        alert('Vui lòng nhập lại!');
        chooseDate.focus();
    }
    function checkDate(day, month) {
        let arrCung = ['Bảo Bình', 'Song', 'Bạch Dương', 'Kim Ngưu', 'Song tử', 'Cự Giải', 'Sư tử', 'Xử Nữ', 'Thiên Bình', 'Bọ Cạp', 'Nhân Mã', 'Ma Kết']
        let date = [20, 19, 21, 21, 21, 22, 23, 23, 23, 24, 23, 22]
        if (day >= date[month - 1]) {
            return `${arrCung[month - 1]}`
        }
        else {
            return `${arrCung[month - 2]}`
        }
    }
    output.value = checkDate(parseInt(array[0]), parseInt(array[1]))

})