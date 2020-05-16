using DataPlayer.Entity;
using DataPlayer.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorkShopKnockoutJs.Controllers
{
    public class HomeController : Controller
    {
        private ProductsRepository productrepo;
        private CategoryRepository categoryrepo;
        private SupplierRepository supplierrepo;

        public HomeController()
        {
            productrepo = new ProductsRepository();
            categoryrepo = new CategoryRepository();
            supplierrepo = new SupplierRepository();
        }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetProduct(int id)
        {
            try
            {
                var result = productrepo.GetData(id);
                return Json(new { Success = true, product = result }, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return this.HandleException(ex);
            }
        }

        [HttpGet]
        public JsonResult GetProducts()
        {
            try
            {
                IEnumerable<Products> result = productrepo.GetData();
                return Json(new { Success = true, productList = result.ToList() }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return this.HandleException(ex);
            }
        }

        [HttpGet]
        public JsonResult GetCategories()
        {
            try
            {
                IEnumerable<Categories> result = categoryrepo.GetData();
                return Json(new { Success = true, categoryList = result.ToList() }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return this.HandleException(ex);
            }
        }

        [HttpGet]
        public JsonResult GetSuppliers()
        {
            try
            {
                IEnumerable<Suppliers> result = supplierrepo.GetData();
                return Json(new { Success = true, supplierList = result.ToList() }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return this.HandleException(ex);
            }
        }

        [HttpPost]
        public JsonResult AddProducts(Products model)
        {
            try
            {
                var result = productrepo.Add(model);
                model.ProductID = result;
                return Json(new { Success = true, product = model }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return this.HandleException(ex);
            }
        }

        private JsonResult HandleException(Exception ex)
        {
            return Json(new { Success = false.ToString(), responseText = ex.Message }, JsonRequestBehavior.AllowGet);
        }
    }
}
