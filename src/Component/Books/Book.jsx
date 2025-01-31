import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Book = ({ book,books,setBooks }) => {
    const { _id, name, Edition, prize, Author, Description, image, Sponsor } = book

    const handleDelete = (_id) => {

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

                fetch(`http://localhost:5000/books/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });

                              const remaing = books.filter(book =>book._id !== _id)
                              setBooks(remaing)
                        }                                   
                    })
            }
        });
    }

    return (



        <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{Description}</p>

                <div className="join join-vertical lg:join-horizontal">

                    <Link onClick={() => handleDelete(_id)} className="btn join-item btn-primary">X</Link>


                    <Link to={`/updatebook/${_id}`} className="btn join-item btn-success">Update</Link>


                    <Link  className="btn join-item btn-accent">View</Link>

                </div>

            </div>
        </div>

    );
};

export default Book;