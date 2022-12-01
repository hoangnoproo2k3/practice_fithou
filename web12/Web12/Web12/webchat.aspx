<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="webchat.aspx.cs" Inherits="Web12.webchat" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
     <frameset rows="75%,25%">
        <frameset cols="25%,75%">
            <frame name="member" src="members.aspx" />
            <frame name="message"  src="MessageList.aspx"/>
        </frameset>
        <frameset cols="100%">
            <frame name="push" src="PostMsg.html" />
        </frameset>
    </frameset>

<body>
  
</body>
</html>
