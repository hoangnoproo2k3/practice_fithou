using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace bai_11
{
    public class nhanvien
    {
        string fullname;
        string dateBirth;
        string id;
        public string Fullname
        {
            get { return fullname; }
            set { fullname = value; }
        }

        public string Datebirth
        {
            get { return dateBirth; }
            set { dateBirth = value;}
        }
        public string Id
        {
            get { return id; }
            set { id = value; }
        }
    }
}