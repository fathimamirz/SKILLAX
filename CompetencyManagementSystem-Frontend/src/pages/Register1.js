import React, { useState } from 'react';
import { FormRow} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialState = {
  firstName:'',
  lastName:'',
  email: '',
  password: '',
  phone: '',
};

function Register1() {

  const [values, setValues] = useState(initialState)

  const {user, isLoading} = useSelector((store) => store.user);
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({...values,[name]:value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const {firstName,lastName, email, password, phone} = values
    if(!email || !password || !firstName ||!lastName || !phone){
      toast.error("Please fill out all fields");
      return;
    }
    const role = 'Employee';
    dispatch(registerUser({firstName, lastName, email, password, phone, role}));
    setTimeout(()=>{
        navigate('/login');
     },2000);
  }
  

  return <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
      <h3>Register</h3>
          <FormRow
            type='text'
            name='firstName'
            value={values.firstName}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='lastName'
            value={values.lastName}
            handleChange={handleChange}
          />
      <FormRow type='email' name='email' value={values.email} handleChange={handleChange}></FormRow>
      <FormRow type='text' labelText="phone number" name='phone' value={values.phone} handleChange={handleChange}></FormRow>
      <FormRow type='password' name='password' value={values.password} handleChange={handleChange}></FormRow>
      <button type='submit' className='btn btn-block' disabled={isLoading}>{isLoading ? 'loading...' : 'submit'}</button>
      <p>Already a member?<Link to='/login' className=''>
            Login
          </Link></p>
    </form>
  </Wrapper>
}

export default Register1;