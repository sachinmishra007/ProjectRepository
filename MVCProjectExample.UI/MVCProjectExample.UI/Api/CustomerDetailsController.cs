using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MVCProjectExample.UI.Api
{
    [RoutePrefix("api/CustomerDetails")]
    public class CustomerDetailsController : ApiController
    {
        public CustomerDetailsController()
        {

        }

        [HttpPost]
        [Route("InsertCustomerDetails")]
        public async Task<IHttpActionResult> InsertCustomerDetails([FromBody]MVCBsuinessEntities.CustomerDetails _customerDetails)
        {
            return Ok();
        }
    }
}
