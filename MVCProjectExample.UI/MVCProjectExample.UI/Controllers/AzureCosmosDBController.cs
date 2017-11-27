using MVCBsuinessEntities;
using MVCProjectExample.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCProjectExample.Common;
using System.Threading.Tasks;

namespace MVCProjectExample.UI.Controllers
{
    public class AzureCosmosDBController : Controller
    {

        public AzureCosmosDBController()
        {

        }


        public ActionResult Index()
        {
            return View();
        }

        // GET: AzureCosmosDB
        [HttpPost]
        [ActionName("CreateFund")]
        public async Task<ActionResult> FundDetailsPost(Funds _fundDetails)
        {
            var result = await new AzureCosmosDB<Funds>().Init(CollectionName.Funds);
            result.InsertFundDocuments(_fundDetails);
            return View();
        }

        [HttpGet]
        [ActionName("GetFund")]
        public async Task<JsonResult> GetFundDetails()
        {
            return Json((await new AzureCosmosDB<Funds>().Init(CollectionName.Funds)).GetFundDocuments(), JsonRequestBehavior.AllowGet);
        }

    }
}