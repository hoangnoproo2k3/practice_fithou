const chooseDate = document.querySelector('.choose-date');
const output = document.querySelector('.output');
const watch = document.querySelector('.watch');
const deleteCancel = document.querySelector('.delete');
//======

watch.addEventListener('click', () => {
    // const values = document.getElementById('ngaythang').value;
    const values = chooseDate.value
    // console.log(values);
    const arr = values.split('-');
    // console.log(arr);
    function checkDate(day, month) {
        let arrCung = ['Bảo Bình', 'Song', 'Bạch Dương', 'Kim Ngưu', 'Song tử', 'Cự Giải', 'Sư tử', 'Xử Nữ', 'Thiên Bình', 'Bọ Cạp', 'Nhân Mã', 'Ma Kết']
        let date = [20, 19, 21, 21, 21, 22, 23, 23, 23, 24, 23, 22]
        if (day >= date[month - 1]) {
            return `${arrCung[month - 1]}`
        }
        else {
            if (month - 1 == 0) {
                return `${arrCung[11]}`
            }
            return `${arrCung[month - 2]}`
        }
    }
    // console.log(parseInt(arr[0]))
    output.value = checkDate(parseInt(arr[2]), parseInt(arr[1]));
})