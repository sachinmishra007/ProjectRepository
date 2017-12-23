using MVCBsuinessEntities;
using MVCProjectExample.BAL.Domain;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MVCProjectExample.UI.Api
{
    [RoutePrefix("api/DI")]
    public class DependencyInjectionController : ApiController
    {
        private readonly INomineeDetails _nomineeCustomer = null;
        private readonly INomineeDetails _nomineeCustomerSiblingDetails = null;
        public DependencyInjectionController(
            [Named("NomineeDetails")]INomineeDetails nomineeCustomer,
             [Named("NomineeCustomerSiblingDetails")]INomineeDetails nomineeCustomerSiblingDetails
            )
        {
            this._nomineeCustomer = nomineeCustomer;
            this._nomineeCustomerSiblingDetails = nomineeCustomerSiblingDetails;
        }

        [HttpGet]
        [Route("GetNomineeDetails")]
        public async Task<IHttpActionResult> GetNomineeDetails()
        {
            System.Threading.Thread.Sleep(5000);
            var _result = new
            {
                MesageHeader = "New Message has arrived",
                MessageDetail = "New Message Details"
            };
            return Ok(_nomineeCustomer.GetCustomerNomineeDetails());

        }

        [HttpGet]
        [Route("GetNomineeSiblingDetails")]
        public async Task<IHttpActionResult> GetNomineeSiblingDetails()
        {
            System.Threading.Thread.Sleep(10000);
            var _result = new
            {
                MesageHeader = "New Message Nominee Sibling has arrived",
                MessageDetail = "New Message Nominee Sibling Details"
            };
            return Ok(_nomineeCustomerSiblingDetails.GetCustomerNomineeDetails());

        }
    }
}
