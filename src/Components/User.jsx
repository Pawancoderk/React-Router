import { Link, Outlet } from "react-router-dom"

function User() {
  return (
    <div className=' w-1/2 mt-5 m-auto font-semibold'>
      <h1 className='text-5xl mb-2'>User</h1>
      {/* <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, minima. Itaque, inventore hic. Maxime eveniet veniam earum facilis et minima?</p>
      <button className='p-3 bg-yellow-400 rounded-full font-semibold '>Explore More</button> */}

      <div className="flex flex-col w-1/2 mt-5 ">
     <Link className="p-3 bg-red-300 text-2xl mb-3 rounded-full w-fit hover:bg-red-400" 
     
     to={"/user/Karan"}>Karan</Link>
     <Link className="p-3 bg-red-300 text-2xl mb-3 rounded-full w-fit hover:bg-red-400" 
     
     to={"/user/Ayush"}>Ayush</Link>
     <Link className="p-3 bg-red-300 text-2xl mb-3 rounded-full w-fit hover:bg-red-400" 
     
     to={"/user/Anubhav"}>Anubhav</Link>
      </div>
      <hr/>
      <Outlet/>
    </div> 
  )
}

export default User