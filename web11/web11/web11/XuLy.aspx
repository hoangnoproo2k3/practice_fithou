<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="XuLy.aspx.cs" Inherits="web11.XuLy" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <style>
        table, th, tr, td{
            border: 1px solid #333;
            border-collapse: collapse;
        }
        #wrapper{
            display:flex;
            justify-content:center;
            text-align:center;
            height:100vh;
            position:relative;
        }
        a{
            position: absolute;
            left:50px;
            top:50vh;
            padding: 5px;
            border-radius: 2px;
            background:#808080;
        }
    </style>
    <div id="wrapper">
        <form id="form1" runat="server">
            <h3>Danh sách nhân viên</h3>
        <table >
            <thead>
                <tr>
                    <th>STT</th>
                    <th >Họ tên</th>
                    <th>Ngày sinh</th>
                </tr>
            </thead>
            <tbody id="viewList" runat="server">
            </tbody>
        </table>
    </form>
    <a href="myForm.html">
      << Về form
    </a>
    </div>
</body>
</html>
