import { updatePerson } from "../features/personDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect ,useState} from "react";

const Update = () =>{
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {persons,loading} = useSelector((state) => state.app)
  const [updatedData, setUpdatedData] = useState([]);

  
  useEffect(()=>{
    const singleuser = persons?.find((element) => element.id == id);
    setUpdatedData(singleuser);
  },[])
 
  const setData = (e) =>{
    setUpdatedData({...updatedData,[e.target.name]:e.target.value})
    console.log(persons)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(updatePerson(updatedData));
  }

  const goToPeopleList = ()=>{
    navigate("/peoplelist")
  }

  if(loading===true)
  {
    return <div>
      <h2>Loding...</h2>
    </div>
  }
  
  return (
    <div>
      <form className="w-50 mx-auto my-10" onSubmit={handleSubmit}>
        <h2 className="my-10">Update Details</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" value={updatedData.name} onChange={setData}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
          <input type="number" className="form-control" name="age" id="exampleInputEmail1" aria-describedby="emailHelp" value={updatedData.age} onChange={setData}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={updatedData.email} onChange={setData}/>
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male" checked={updatedData.gender === "Male"} onChange={setData}/>
          <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="gender " id="flexRadioDefault2" value="Female" checked={updatedData.gender === "Female"} onChange={setData}></input>
          <label className="form-check-label mx-2" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={goToPeopleList}>Submit</button>
      </form>
    </div>
  )
}

export default Update;