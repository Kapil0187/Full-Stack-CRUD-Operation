import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPerson } from "../features/personDetailsSlice";
import { useNavigate} from "react-router-dom";

const Create = () => {

  const [persons,setPerson] = useState({});
  const disptach = useDispatch()
  const navigate = useNavigate();

  const getPersonData = (e)=>{
    setPerson({...persons,[e.target.name]:e.target.value})
    console.log(persons)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("persons...", persons);
    disptach(createPerson(persons));
  }

  const goToPeopleList = ()=>{
    navigate("/peoplelist")
  }

  return (
    <div>
      <form className="w-50 mx-auto my-10" onSubmit={handleSubmit}>
        <h2>Fill the Details</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getPersonData}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
          <input type="number" className="form-control" name="age" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getPersonData}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getPersonData}/>
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male" onChange={getPersonData}/>
          <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="gender " id="flexRadioDefault2" value="Female" onChange={getPersonData}></input>
          <label className="form-check-label mx-2" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={goToPeopleList}>Submit</button>
      </form>
    </div>
  );
}

export default Create;