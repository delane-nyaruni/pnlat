import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const AdminErrorPage = () => {
  return (
    <div className="container bg-gradient-primary main ">
      <br /><br /><br />
      <div className='text-center'>
      <FaExclamationTriangle size={100} className='center' color='red'/>
      </div>
      <br /><br /><br />
      <h4>Error 404: Page Not Found</h4>
      <p >Sorry, the page you are looking for does not exist.</p>
      <br />
      <br />
      <br />
      <Link to='/pnldt/user/dashboard' className='btn btn-secondary btn-block btn-effect'>Back</Link>
    </div>
  );
};

export default AdminErrorPage;