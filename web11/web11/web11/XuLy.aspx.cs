using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;
using System.Globalization;
namespace web11
{
    public partial class XuLy : System.Web.UI.Page
    {
       
        protected void Page_Load(object sender, EventArgs e)
        {
            List<NhanVien> lstNV = (List<NhanVien>)Session["danhsach"];
            string hoten = Request.Form["hoten"];
            string ngaysinh = Request.Form["namsinh"];
           


            if (hoten !=null && ngaysinh !=null)
            {
                bool check = false;
                foreach(NhanVien nv in lstNV)
                {
                    if(hoten == nv.HoTen)
                    {
                        check = true;
                        Response.Write(hoten+ " Đã tồn tại trong bảng!");
                    }
                }
                if(check ==false)
                {
                    DateTime Ngaysinh = DateTime.Parse(ngaysinh);
                    NhanVien nv = new NhanVien();
                    nv.HoTen = hoten;
                    nv.NamSinh = Ngaysinh;
                    lstNV.Add(nv);
                    Session["danhsach"] = lstNV;
                }
            }

            string chuoi = "";
            int i = 1;
            foreach (NhanVien nv in lstNV)
            {
                chuoi += "<tr>";
                chuoi += $"<td> {i++} </td>";
                chuoi += $"<td>  { nv.HoTen}  </td>";
                chuoi += $"<td>  {nv.NamSinh.ToString("dd/MM/yyyy",CultureInfo.InvariantCulture)} </td>";
                chuoi += "</tr>";
            }

            chuoi += "</table>";

           
            viewList.InnerHtml = chuoi;
            
        }
    }
}