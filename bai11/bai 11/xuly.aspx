<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="xuly.aspx.cs" Inherits="bai_11.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <style>

        table, tr, th, td{
            border: 1px solid #808080;
             border-collapse: collapse;
             text-align: center;
        }
        th{
             padding: 5px;
        }
        .wrapper{
            display: flex;
            justify-content: center;
            text-align: center;
            height: 100vh;
            position: relative;
        }
        .link{
            position:absolute;
            left:20vw;
            top:50vh;
            text-decoration: none;
            padding:4px;
            background: #808080;
            color: whitesmoke;
            cursor:pointer;
        }
        .link:hover{
            background: #000000;
            color: aliceblue;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <form id="form1" runat="server">
        <h3>Danh sách nhân viên</h3>
        <table >
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th >Họ tên</th>
                    <th>Năm sinh</th>
                </tr>
            </thead>
            <tbody id="viewList" runat="server">
            </tbody>
        </table>
    </form>
        <a href="Myform.html" class="link"> << BackForm</a>
    </div>

</body>
</html>
