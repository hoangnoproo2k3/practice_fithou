using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web12
{
    public partial class webchat : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<member> lstdsTK = (List<member>)Application["danhsach_tk"];

            string nickname = Request.Form["nickname"];
            string color = Request.Form["color"];

            if(nickname!=null && color !=null)
            {
                member mb = new member();
                mb.NickName = nickname;
                mb.Color = color;

                Session["nickname"] = nickname;
                Session["color"] = color;

                lstdsTK.Add(mb);
                Application["danhsach_tk"] = lstdsTK;
            }
            
            else {
                Response.Redirect("Login.html");
            }
        }
    }
}