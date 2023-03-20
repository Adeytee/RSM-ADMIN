import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div>
        <div className="">
          <LoginForm />
        </div>
        {/* <div className="body align-items-center">
          <div className="m-auto welcome align-items-center justify-content-center d-flex">
            <img src="../../../assets/images/logo-3.png" alt="" class="img-fluid py-5 mb-5" width="120" />
            <h1 className="text text-center">Welcome</h1>
          </div>
        </div> */}
        </div>
    )
}

export default Login