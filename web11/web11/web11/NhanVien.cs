using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace web11
{
    public class NhanVien
    {
        string hoten;
        DateTime namsinh;

        public string HoTen
        {
            get { return hoten; }
            set { hoten = value; }
        }

        public DateTime NamSinh
        {
            get { return namsinh; }
            set { namsinh = value; }
        }


    }
}