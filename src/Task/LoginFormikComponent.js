import { useFormik } from "formik";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

export function LoginComponet() {
  let [show, setShow] = useState(false);
  const [cookies] = useCookies(['user']);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: varifyUserDetail,
    onSubmit: values => {

      try {

        if (cookies.user.email === values.email && cookies.user.password === values.password) {
          alert('Login successful!');
          navigate('/todo');
        } else {
          alert('Invalid username or password!');
        }
      } catch (error) {
        alert('Error logging in: ' + error.message);
      }
    }
  });
  function varifyUserDetail(userDetail) {
    const errors = {};

    if (userDetail.email === '') {
      errors.email = 'Email is Requried'

    }
    if (userDetail.password === "") {
      errors.password = 'Password is not Requried';

    }
    return errors
  }


  return (<div className="container-fluid  w-25 mt-4">
    <div><h1 className="text-primary p-3">User Login</h1></div>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3 ">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <h5 className="text-danger">{formik.errors.email}</h5>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <div className="d-flex">
          <input type={(show) ? 'text' : 'password'} className="form-control" name="password" onChange={formik.handleChange} value={formik.values.password} />
          <button className=" btn btn-primary bi bi-eye" onClick={() => { setShow(!show); }} />
        </div>
        <h5 className="text-danger">{formik.errors.email}</h5>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <p className="m-2">Don't have an account? <Link to={'/'}>Sign up</Link></p>
  </div>)
}