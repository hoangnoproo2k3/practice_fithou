using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web12
{
    public partial class sendMsg : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string messagee = Request.Form["txtnoidung"];
            string date = DateTime.Now.ToString("d");
            List<Noidung> lstdsND = (List<Noidung>)Application["danhsach_msg"];
            if (messagee != null)
            {
                    Noidung nd = new Noidung();
                    nd.NickName = Convert.ToString(Session["nickname"]);
                    nd.TinNhan = messagee;
                    nd.ThoiGian = date;
                    lstdsND.Add(nd);
                    Application["danhsach_msg"] = lstdsND;
            }
            Response.Redirect("PostMsg.html");
        }
    }
}