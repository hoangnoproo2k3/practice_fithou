using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web12
{
    public class member
    {
        string nickName;
        string color;

        public member(string nickname , string color)
        {
            this.nickName = nickname;
            this.color = color;
        }
        public member()
        {

        }

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
    }
}