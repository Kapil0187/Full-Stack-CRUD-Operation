import { Link } from "react-router-dom";
import  {deletePerson, peopleList} from "../features/personDetailsSlice";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import CustomModel from "./CustomModel";
import { useState } from "react";

const Read = () =>{

  const dispatch = useDispatch();
  const {persons,loading} = useSelector((state) => state.app)
  const [id,setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(()=>{
    dispatch(peopleList());
  },[])

  if(loading == true)
  {
    return <div className="w-50 mx-auto my-auto">
      <h4>Loading...</h4>
    </div>
  }

  return (
    <div className="w-50 mx-auto">
      <div>
        <h1>People List</h1>
      </div>
      {
        persons && persons.map((element) => {
          return (
            
            <div className="mx-auto my-2" key={element.id}>
              {showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name : {element.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Age : {element.age}</h6>
                  <button className="card-link" onClick={() => [setId(element.id),setShowPopup(true)]}>View</button>
                  <Link to={`/update/${element.id}`} className="card-link">Edit</Link>
                  <Link to="" className="card-link" onClick={()=> dispatch(deletePerson(element.id))}>Delete</Link>
                </div>
              </div>
            </div>
            );
        })
      }
    </div>
  )
}

export default Read;