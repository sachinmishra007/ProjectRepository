using MVCProjectExample.UI.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace MVCProjectExample.UI.Controllers
{

    public class HomeController : Controller
    {
        // GET: Home

        public ActionResult Index()
        {
            Response.Redirect(ConfigurationManager.AppSettings["WebSite"].ToString());
            return View();
        }

        public ActionResult Login(User _userModel, string ReturnUrl)
        {
            if (_userModel.Username != null)
            {
                FormsAuthentication.SetAuthCookie(_userModel.Username, false);
                return RedirectToAction("Index");
            }
            return View();
        }

        public ActionResult Upload()
        {
            return View();
        }

        [HttpPost]
        public JsonResult UploadFile()
        {
            var _postedHttpPostedFileBase = Request.Files;
            if (_postedHttpPostedFileBase == null || _postedHttpPostedFileBase.Count <= 0)
            {
                return Json("Please select file to Upload", JsonRequestBehavior.AllowGet);
            }
            else
            {
                for (int i = 0; i < _postedHttpPostedFileBase.Count; i++)
                {

                    HttpPostedFileBase file = _postedHttpPostedFileBase[i];
                    string fname;

                    // Checking for Internet Explorer  
                    if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                    {
                        string[] testfiles = file.FileName.Split(new char[] { '\\' });
                        fname = testfiles[testfiles.Length - 1];
                    }
                    else
                    {
                        fname = file.FileName;
                    }

                    // Get the complete folder path and store the file inside it.  
                    fname = Path.Combine(Server.MapPath("~/Uploads/"), fname);

                    FileInfo _fileInfo = new FileInfo(fname);
                    if (!_fileInfo.Directory.Exists)
                    {
                        _fileInfo.Directory.Create();
                    }
                    file.SaveAs(fname);
                }
                return Json("Files have been Uploaded Successfully", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Search()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SearchParameter(SearchParameter _searchResult)
        {
            return new EmptyResult();
        }

        public ActionResult ViewNorthWind()
        {
            return View();
        }

    }
}