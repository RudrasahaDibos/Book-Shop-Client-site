import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadusers = useLoaderData()
    const [users,setusers]= useState(loadusers)

    const handleDeleteuser =(id)=>{
          Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {

                        fetch(`http://localhost:5000/users/${id}`,{
                            method:"DELETE"
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data)
                            if(data.deletedCount>0){
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your User has been deleted.",
                                    icon: "success"
                                  });                    
                            }

                            const remainguser = users.filter(user=>user._id !== id)
                            setusers(remainguser)
                        })


                    }})
       
    }
   
    return (
        <div>
            <h1>{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>creationTime</th>
                            <th>lastSignInTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, id) => <tr key={user._id}>
                                <th>{id + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <div className="join join-vertical lg:join-horizontal">
                                    <Link onClick={()=>handleDeleteuser(user._id)} className="btn join-item bg-red-700">X</Link>
                                    <Link className="btn join-item bg-secondary">Update</Link>
                                     
                                </div>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;