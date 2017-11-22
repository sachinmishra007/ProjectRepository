using MVCBsuinessEntities;
using MVCProjectExample.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MVCProjectExample.UI.Api
{
    [RoutePrefix("api/customer")]
    public class CustomerController : ApiController
    {
        private readonly Connection _conn = null;
        public CustomerController()
        {
            _conn = new Connection();
        }

        [HttpGet]
        [Route("GetCustomer")]
        public IHttpActionResult Get()
        {
            var _serlialize = _conn.GetCustomerInformation().AsEnumerable().Select(_record => new Customer()
            {
                CustomerId = _record.Field<string>("CustomerId") != null ? _record.Field<string>("CustomerId") : string.Empty,
                CompanyName = _record.Field<string>("CompanyName") != null ? _record.Field<string>("CompanyName") : string.Empty,
                ContactName = _record.Field<string>("ContactName") != null ? _record.Field<string>("ContactName") : string.Empty,
                ContactTitle = _record.Field<string>("ContactTitle") != null ? _record.Field<string>("ContactTitle") : string.Empty,
                City = _record.Field<string>("City") != null ? _record.Field<string>("City") : string.Empty,
                Region = _record.Field<string>("Region") != null ? _record.Field<string>("Region") : string.Empty,
                PostalCode = _record.Field<string>("PostalCode") != null ? _record.Field<string>("PostalCode") : string.Empty,
                Country = _record.Field<string>("Country") != null ? _record.Field<string>("Country") : string.Empty,
                Phone = _record.Field<string>("Phone") != null ? _record.Field<string>("Phone") : string.Empty,
                Fax = _record.Field<string>("Fax") != null ? _record.Field<string>("Fax") : string.Empty

            });


            return Ok(_serlialize);
        }
    }
}
