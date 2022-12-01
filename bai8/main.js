var table = document.querySelector('table');
var values = document.querySelector('.form-box').children;
var listContent = document.querySelector('tr').children;
document.querySelector('.add').addEventListener('click', () => {
    addElementTr()
});

function addElementTr() {
    var Addtr = document.createElement('tr');
    table.appendChild(Addtr);

    for (var i = 0; i < listContent.length; i++) {
        var createTd = document.createElement('td');
        Addtr.appendChild(createTd);
    }

    Addtr.children[0].textContent = table.children.length + 1;
    for (var i = 1; i < listContent.length; i++) {
        Addtr.children[i].textContent = values[i - 1].querySelector('input').value;
    }
}
function Check() {
    for (var i = 1; i < listContent.length; i++) {
        if (values[i - 1].querySelector('input').value == '') {
            alert('Vui lòng nhập dữ liệu');
            values[i - 1].querySelector('input').focus();
            break;
        }
    }
}