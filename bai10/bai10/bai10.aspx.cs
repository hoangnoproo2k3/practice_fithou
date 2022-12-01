using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace bai10
{
    public partial class bai10 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void submit_Click(object sender, EventArgs e)
        {
            //Tạo thư mục chứa file khi upload file
            if (txtFile.HasFile && txtNoiDung.Value!="")
            {
                content.Value = txtNoiDung.Value;
                string fileName = "~/App_data/" + txtFile.FileName;
                string filePath = MapPath(fileName);//MapPath trả về các đường dẫn thực và vị trí tệp.
                txtFile.SaveAs(filePath);
                Response.Write("<script>alert('Đã upload file!')</script>");
            }
            else
            {
                Response.Write("<script>alert('Vui lòng nhập dữ liệu và upload file!')</script>");
            }
        }
    }
}