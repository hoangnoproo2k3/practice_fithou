using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web12
{
    public class Noidung
    {
        string nickName;
       string thoigian;
        string tinnhan;
        string color;

        public string NickName
        {
            get { return nickName; }
            set { nickName = value; }
        }

        public string Color
        {
            get { return color; }
            set { color = value; }
        }

        public string TinNhan
        {
            get { return tinnhan; }
            set { tinnhan = value; }
        }

        public string ThoiGian
        {
            get { return thoigian; }
            set { thoigian = value; }
        }

        public Noidung(string nickname, string color,string thoigian,string tinnhan)
        {
            this.nickName = nickname;
            this.color = color;
            this.thoigian = thoigian;
            this.tinnhan = tinnhan;
        }


        public Noidung()
        {

        }
    }
}