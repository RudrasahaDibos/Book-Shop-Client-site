import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createuser } = useContext(AuthContext)

  const handlecreateuser =(e)=>{
       e.preventDefault()
       const form = e.target;

       const name = form.Name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email,password)
       createuser(email,password)
       .then(result=>{
        console.log(result.user)
        
              const creationTime = result?.user?.metadata?.creationTime;
              const newuser = {name,email,creationTime}
              fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                   "Content-Type": "application/json"
              },
              body:JSON.stringify(newuser)
              })
              .then(res=>res.json())
              .then(data =>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        
                        position: "top-center",
                        icon: "success",
                        title: "Your book has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
              })
        
        form.reset()
       })
       .catch(error=>{
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
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handlecreateuser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="Name" placeholder="name" className="input input-bordered"  />
                        </div>
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
                            <button  className="btn btn-primary">Register</button>
                        </div>
                         <Link to='/signin'>Already have an account please login </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;