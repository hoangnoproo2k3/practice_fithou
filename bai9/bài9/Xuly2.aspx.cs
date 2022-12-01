using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace bài9
{
    public partial class Xuly2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.ContentType = "text";
            var name = "TenVXL:" + Request.Form["txtTenVXL"];
            var manufacturer = ";     Hang:" + Request.Form["txtHang"];
            var date = ";     NgayRaMat:" + Request.Form["txtNgayRaMat"];
            var price = ";    Gia:" + Request.Form["txtCost"];
            Response.Write("<XML>" + name + manufacturer + date + price + "</XML>");
            Response.End();
        }
    }
}