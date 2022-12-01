using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace bài9
{
    public partial class bai9 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void post_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Xuly.aspx");
        }

        protected void get_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Xuly2.aspx?" + "material=" + txtTenVXL.Value +
                "&manufacturer=" + txtHang.Value + "&date=" + txtNgayRaMat.Value + "&price=" + txtCost.Value);
        }
    }
}