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
    [RoutePrefix("api/FundDetails")]
    public class FundDetailsController : ApiController
    {
        public FundDetailsController()
        {

        }

        [HttpGet]
        [Route("GetFundDetails")]
        public async Task<IHttpActionResult> GetFund()
        {
            return Ok((await new AzureCosmosDB<Funds>().Init(CollectionName.Funds)).GetFundDocuments());
        }
    }
}
