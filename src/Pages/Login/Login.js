import React from "react";
import {useSignInWithEmailAndPassword,useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../SharedPage/Loading";
import useToken from './../Hook/useToken';

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  ;
  const {register,formState: { errors },handleSubmit,} = useForm();
  const [token] = useToken(user || gUser)
 
  if(loading || gLoading){
      return <Loading></Loading>
  }
  let errorMessage;
  if(gError || error){
      errorMessage = <p><small>{gError?.message || error?.message}</small></p>
  }


  const onSubmit = (data) =>{
    console.log(data);
    signInWithEmailAndPassword( data.email, data.password)
   
  }
  if (token) {
    navigate("/appointments");
    
  }
  

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl text-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern:{
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a Valid Email'
                },
                required:{
                    value:true,
                    message: 'Email is Required'
                }
                })}
              />
              <label class="label">
                {  errors.email?.type==='required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {  errors.email?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                    minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                    },
                required:{
                    value:true,
                    message: 'password is Required'
                }
                })}
              />
              <label class="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
             {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
                {errorMessage}
            <div className="text-center">
            <input  type="submit" value='Login' className="btn  w-full max-w-xs" />
            </div>
            <p>New to Doctors Portal ? <Link  className="text-primary" to='/SignUp'>Create New Account</Link></p>
          </form>
                     
                     {/* For Social login  */}


          <div class="divider">OR</div>
          <button
            onClick={() => {
              signInWithGoogle();
            }}
            class="btn btn-outline"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
