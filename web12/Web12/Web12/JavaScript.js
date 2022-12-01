

function checkdata() {
    var name = document.getElementById('nickname');
    
    if (name.value == "") {
        document.getElementById('check_name').innerHTML = "Không được để trống";
    } else {
        return true;
        document.getElementById('check_name').innerHTML = "";
    }
    return false;
    
}


function checkMessage() {
    var name = document.getElementById('txtnoidung');
   
    if (name.value == "") {
        document.getElementById('check_message').innerHTML = "<i>Không được để trống</i>";
    } else {
        return true;
        document.getElementById('check_message').innerHTML = "";
    }
    return false;
}
