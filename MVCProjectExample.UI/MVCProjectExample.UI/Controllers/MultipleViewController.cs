using MVCProjectExample.BAL.Domain;
using MVCProjectExample.UI.DataAccessLayer;
using Ninject;
using System.Web.Mvc;

namespace MVCProjectExample.UI.Controllers
{
    public class MultipleViewController : Controller
    {
        private readonly DAL _dataAccessLayer = null;
        private readonly INomineeDetails _nomineeDetails = null;
        public MultipleViewController([Named("NomineeDetails")]INomineeDetails nomineeDetails)
        {
            this._nomineeDetails = nomineeDetails;
            _dataAccessLayer = new DAL();
        }
        // GET: MultipleView
        public ActionResult Index()
        {
            var _dataAcessLayer = new DAL();
            ViewBag.Message = "Welcome to Multiple View Example Application Using Tuple";

            /*
                Creating the Expando Objects in CSharp
            */
            /*
                dynamic _myModel = new ExpandoObject();
                _myModel.Teacher = _dataAcessLayer.GetTeachers();
                _myModel.Student = _dataAcessLayer.GetStudent();
            */


            /*
                Creating the Custom View Model
            */
            /*
                var _viewModel = new CustomViewModel();
                _viewModel.Teacher = _dataAcessLayer.GetTeachers();
                _viewModel.Student = _dataAcessLayer.GetStudent();

            */

            /*
                Creating the View Data Example 
            */
            /*
                ViewData["Teachers"] = _dataAcessLayer.GetTeachers();
                ViewData["Students"] = _dataAcessLayer.GetStudent();
            */

            /*
                Creating the Object Using Tuple
            */
            /*
                var _TupleModel = new Tuple<List<Teacher>, List<Student>>
                (_dataAcessLayer.GetTeachers(), _dataAcessLayer.GetStudent());

            */



            return View();
        }

        public ActionResult ExamplePartial()
        {
            ViewBag.Message = "Welcome to the Demonstration of Partial View Example";
            return View();
        }


        public PartialViewResult RenderTeacher()
        {
            return PartialView(_dataAccessLayer.GetTeachers());
        }

        public PartialViewResult RenderStudent()
        {
            return PartialView(_dataAccessLayer.GetStudent());
        }

        public PartialViewResult RenderDepartment()
        {
            return PartialView(_dataAccessLayer.GetDepartment());
        }

        public ActionResult CustomDirective()
        {
            return View();
        }

        public ActionResult CustomerNomineeDetails()
        {
            return View(this._nomineeDetails.GetCustomerNomineeDetails());
        }
    }
}