
var dulieu = [{
    STT: 1,
    Ten: 'Core i3 7100',
    Hang: 'Intel',
    NgaySX: '20-11-2011',
    Gia: 3450000
},
{
    STT: 2,
    Ten: 'Core i5 4430',
    Hang: 'Intel',
    NgaySX: '28-08-2012',
    Gia: 4530000
}
];

var table = document.getElementById('mytable');

function addData(element) {
    var row = table.insertRow();
    row.insertCell().innerHTML = element.STT;
    row.insertCell().innerHTML = element.Ten;
    row.insertCell().innerHTML = element.Hang;
    row.insertCell().innerHTML = element.NgaySX;
    row.insertCell().innerHTML = element.Gia;
}

function myFunction() {
    dulieu.forEach(function (element) {
        addData(element);
    }, this);
}

function them() {
    if (document.getElementById('Ten').value == "") {
        // alert("Vui lòng nhập tên!");
        var ten = document.getElementById('Ten');
        ten.focus();
        ten.placeholder = 'Nhập tên vật liệu!';
    } else if (document.getElementById('Hang').value == "") {
        var Hang = document.getElementById('Hang');
        Hang.focus();
        Hang.placeholder = 'Nhập tên hãng!';
    } else if (document.getElementById('NgaySX').value == "") {
        alert("Vui lòng nhập ngày sản xuất!");
        document.getElementById('NgaySX').focus();
    } else if (document.getElementById('Gia').value == "") {
        var Gia = document.getElementById('Gia');
        Gia.focus();
        Gia.placeholder = 'Vui lòng nhập giá!';
    } else if (Date.parse(document.getElementById('NgaySX').value) > Date.now()) {
        alert("Ngày sản xuất không được lớn hơn ngày hiện tại!");
        document.getElementById('NgaySX').focus();
    } else {
        var check = false;
        dulieu.forEach(function (e) {
            if (e.Ten == document.getElementById('Ten').value) {
                check = true;
                alert("Tên hãng đã tồn tại!");
                document.getElementById('Ten').focus();
            }
        }, this);
        if (check == false) {
            var vxl = {
                STT: dulieu.length + 1,
                Ten: document.getElementById('Ten').value,
                Hang: document.getElementById('Hang').value,
                NgaySX: document.getElementById('NgaySX').value,
                Gia: parseInt(document.getElementById('Gia').value)
            };
            dulieu.push(vxl);
            addData(vxl);
            huy();
        }
    }
}

function huy() {
    document.getElementById('Ten').value = null;
    document.getElementById('Hang').value = null;
    document.getElementById('NgaySX').value = null;
    document.getElementById('Gia').value = null;
}

