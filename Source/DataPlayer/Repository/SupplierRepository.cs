using DataPlayer.Base;
using DataPlayer.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataPlayer.Repository
{
    public class SupplierRepository : DPGenericRepository<Suppliers>
    {
        public SupplierRepository()
        {
            this.PrimaryId = "SupplierID";
        }
    }
}
