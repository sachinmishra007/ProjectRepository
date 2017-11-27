using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace MVCProjectExample.DataAccessLayer
{
    public class Connection
    {
        private readonly string _connectionString = string.Empty;
        private DataTable _dtCustomerInfo = null;
        private SqlConnection _conn = null;
        private SqlCommand _cmd = null;
        private SqlDataAdapter _adp = null;
        public Connection()
        {
            _connectionString = ConfigurationManager.ConnectionStrings["conn"].ToString();
        }

        public DataTable GetCustomerInformation()
        {

            try
            {
                _dtCustomerInfo = new DataTable();
                _conn = new SqlConnection(_connectionString);
                _conn.Open();
                _cmd = new SqlCommand("Select * from Customers", _conn);
                _adp = new SqlDataAdapter(_cmd);
                _adp.Fill(_dtCustomerInfo);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                _conn.Close();
            }
            return _dtCustomerInfo;
        }
    }
}
