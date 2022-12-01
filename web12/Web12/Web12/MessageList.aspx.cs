using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web12
{
    public partial class MessageList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<Noidung> lstdsND = (List<Noidung>)Application["danhsach_msg"];
            if (lstdsND != null)
            {

                foreach (Noidung nd in lstdsND)
                {
                    if(nd.NickName == Convert.ToString(Session["nickname"]))
                    {
                        Response.Write($"<p style='color: {nd.Color};text-align:right;'> {nd.TinNhan}  <span style='color: {nd.Color};text-align:right;font-size:8px'>{nd.ThoiGian} </span>  </p> ");
                       
                    }
                    else
                    {
                        Response.Write($"<p style='color: {nd.Color};text-align:right;'> {nd.TinNhan}  <span style='color: {nd.Color};text-align:right;font-size:8px'>{nd.ThoiGian} </span>  </p> ");

                    }
                }
            }


        }
    }
}