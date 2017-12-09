using MVCBsuinessEntities;
using MVCProjectExample.Common;
using MVCProjectExample.DataAccessLayer;
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
            (await new AzureCosmosDB<CustomerDetails>().Init(CollectionName.Customer)).InsertCustomerDetails(_customerDetails);
            return Ok();
        }


        [HttpGet]
        [Route("GetCustomerDetails")]
        public async Task<IHttpActionResult> Get()
        {
            return Ok((await new AzureCosmosDB<CustomerDetails>().Init(CollectionName.Customer)).GetCustomerDetailsDocuments());
        }

        [HttpPost]
        [Route("DeleteCustomerDetails")]
        public async Task<IHttpActionResult> Delete(MVCBsuinessEntities.CustomerDetails _customerDetails)
        {
            (await new AzureCosmosDB<CustomerDetails>().Init(CollectionName.Customer)).DeleteCustomerDetails(_customerDetails);
            return Ok();
        }
    }
}
