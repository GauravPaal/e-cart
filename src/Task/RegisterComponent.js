import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

export function UserRegisterComponent() {
  let [show, setShow] = useState(false);
 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      contact: ""
    },
    validate: varifyUserDetail,
    onSubmit: values => {
      console.log(values);

      const user = { password: values.password, email: values.email };
      localStorage.setItem('user', JSON.stringify(user));
      alert('User registered successfully!');
    }
  })
  function varifyUserDetail(userDetail) {
    const errors = {};

    if (userDetail.email === '') {
      errors.email = 'Email is Requried'

    }
    if (userDetail.password === "") {
      errors.password = 'Password is not Requried';

    }
    if (userDetail.confirmPassword !== userDetail.password) {
      errors.confirmPassword = 'Password is not matching';

    }
    if (userDetail.contact.length !== 10) {
      errors.contact = 'Enter a valid Contact Number'

    }

    return errors
  }

  return (
  <div className="container-fluid  w-25 mt-4">

    <div><h1 className="text-primary p-3">User Register</h1></div>
    
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3 ">
        <label className="form-label">Email address</label>
        <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className="form-control" />
        <h5 className="text-danger">{formik.errors.email}</h5>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <div className="d-flex">
          <input type={(show) ? "text" : "password"} name="password" onChange={formik.handleChange} value={formik.values.password} className="form-control" />
          <span className= " btn btn-primary bi bi-eye" onClick={() => setShow(!show)} />
        </div>

        <h5 className="text-danger">{formik.errors.password}</h5>
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <div className="d-flex">
          <input type={(show) ? "text" : "password"} name="confirmPassword" onChange={formik.handleChange} className="form-control" />
          <span className=" btn btn-primary bi bi-eye" onClick={() => setShow(!show)} />
        </div>
        <h5 className="text-danger"  >{formik.errors.confirmPassword}</h5>
      </div>
      <div className="mb-3">
        <label className="form-label">Contact</label>
        <input type="text" className="form-control" name="contact" onChange={formik.handleChange} value={formik.values.contact} />
        <h5 className="text-danger">{formik.errors.contact}</h5>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <p className="m-2">Have an account? <Link to={'login'}>Log in</Link></p>
  </div>)

}