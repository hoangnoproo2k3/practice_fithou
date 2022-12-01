using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web12
{
    public partial class members : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<member> lstdsTK = (List<member>)Application["danhsach_tk"];
            string htmls = "";
            if (lstdsTK != null) 
            {
                foreach(member mb in lstdsTK)
                {
                    htmls += $" <h4 style=\"color:{mb.Color}\"> {mb.NickName} </h4>";
                }
                Response.Write(htmls);
            }
            
        }
    }
}