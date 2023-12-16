import React, { useState } from 'react'
import Axios from 'axios';
import "./css/login.css"

const AddNewRule = () => {
  const [rule, setRule] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const removeExtraSpaces=(description)=> {
    setDescription(description.replace(/\s+/g, ' ').trim());
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    removeExtraSpaces(description);
    try {
      const { data } = await Axios.post("/api/gfr/addGfrRule", {
        rule,
        heading,
        description,
        category
      });
      console.log("new rule created");
    } catch (err) {
      console.log(err);
    }

  };
  return (
<div className="container mt-5">
<div className="card mt-3">
  <div className="card-header">
    <span style={{ fontWeight: 'bold', fontSize: '22px' }}> Add New Rule</span>
    {/* <span style={{ fontSize: '20px' }}> &nbsp; {rule.heading} </span> */}
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0" onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="rule" className="form-label">Enter Rule:</label>
        <input
           style={{border:"1px solid #ced4da"}}
          type="text"
          name="Enter rule"
          onChange={(e)=>setRule(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="heading" className="form-label">Enter Heading:</label>
        <input
           style={{border:"1px solid #ced4da"}}

          type="text"
          name="Enter heading"
          onChange={(e)=>setHeading(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label"> Enter Description:</label>
        <textarea
          name="Enter description"
          onChange={(e)=>setDescription(e.target.value)}
          className="form-control"
          style={{ width: '100%', height: '300px' }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Enter Category:</label>
        <input
           style={{border:"1px solid #ced4da"}}
          type="text"
          name=" Enter category"
          onChange={(e)=>setCategory(e.target.value)}
          className="form-control"
        />
      </div>

      <button onClick={submitHandler} style={{float:"right"}} className="btn btn-success">Request for New Rule</button>
    </blockquote>
  </div>
</div>
</div>
  )
}

export default AddNewRule;
