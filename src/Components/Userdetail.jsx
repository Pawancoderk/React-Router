import {  useNavigate, useParams } from "react-router-dom";

function Userdetail() {
  // Use params for the value of users.
  // name is the variable where the data store about users in routing.jsx.
  const { name } = useParams();
  // UseNavigate is used for go back .
  const Navigate = useNavigate();
  const GoBackHandle = () => {
    // user and -1 both do same work.
    Navigate("/user");
    // Navigate(-1);
  };

  return (
    <div className=" w-1/2 mt-10 m-auto">
      <h1 className="text-5xl mb-2 text-black font-semibold">User Detail</h1>
      <h1 className="text-5xl text-orange-400 mt-3 mb-3">hi {name}</h1>
      <button
        onClick={GoBackHandle}
        className="bg-red-400 px-3 py-1 mt-5 text-white rounded-full font-semibold text-2xl"
      >
        Go back
      </button>
    </div>
  );
}

export default Userdetail;
