using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace bai_11
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var hoten = Request.Form.Get("fullname");
            var namsinh = Request.Form.Get("datebirth");
            var id = Request.Form.Get("id");
            List<nhanvien> listNhanvien = (List<nhanvien>)Session["list"];
            nhanvien nv = new nhanvien();
            int check = 0;
            foreach (nhanvien i in listNhanvien)
            {
                if (i.Id==nv.Id)
                {
                    check = 1;
                    break;
                }
                
            }
            if (check == 0)
            {
                nv.Fullname = hoten;
                nv.Datebirth= namsinh;
                nv.Id = id;
                listNhanvien.Add(nv);
                Session["list"] = listNhanvien;
            }
            string output = "";
            int dem = 0;
            foreach (nhanvien i in listNhanvien)
            {
                dem++;
                output += @"<tr><td>"+dem+ @"</td>
                                    <td>"+ i.Id + @"</td>
                                    <td>" + i.Fullname + @"</td>
                                    <td>" + i.Datebirth + @"</td>
                                </tr>";
            }
            viewList.InnerHtml = output;
        }
    }
}