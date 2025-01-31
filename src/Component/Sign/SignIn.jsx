import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";


const SignIn = () => {
    const {Signuser} = useContext(AuthContext)
   const handleSignin =(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    Signuser(email,password)
    .then(result=>{
        console.log(result.user)
        // update user login
        const lastSignInTime = result?.user?.metadata?.lastSignInTime
        const logininfo = {email,lastSignInTime}

        fetch('http://localhost:5000/users',{
            method:"PATCH",
            headers:{
                  "Content-Type": "application/json"
            },
            body:JSON.stringify(logininfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                  Swal.fire({
                                        
                                        position: "top-center",
                                        icon: "success",
                                        title: "Your book has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
            }
            data.reset()
        })
    })
    .catch(error =>{
        console.log(error)
         Swal.fire({
                    title: error,
                    text: "Already have an account ",
                    icon: "error"
                  });  
    })

   }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div  className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                        <Link  to='/signup'>Please Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;