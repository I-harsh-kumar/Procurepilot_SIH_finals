import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Delete = () => {
  const [rule, setRule] = useState(null);
  const { id } = useParams();



  
  const [editedRule, setEditedRule] = useState({
    rule: '',
    heading: '',
    description: '',
    category: '',
  });
  
  const [userData, setUserData] = useState({
    editBy: "suraj",
    editAt: new Date(),
    dataOriginal: {
      id: "",
      title: "",
      description: "",
      rule: "",
      category: "",
    },
    dataChanged: {
      id: "",
      title: "",
      description: "",
      rule: "",
      category: "",
    },
    isDelete: false,
    isEdit: false,
    approval1: "",
    approval1Date: null,
    approval2: "",
    approval2Date: null,
    approval3: "",
    approval3Date: null,
    isApproval: "to be reviewed",
  });
  

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await Axios.post("/api/approval/editrule", {
        editBy: userData.editBy,
        editAt: userData.editAt,
        dataOriginal: userData.dataOriginal,
        dataChanged: userData.dataChanged,
        isDelete: userData.isDelete,
        isEdit: userData.isEdit,
        approval1: userData.approval1,
        approval1Date: userData.approval1Date,
        approval2: userData.approval2,
        approval2Date: userData.approval2Date,
        approval3: userData.approval3,
        approval3Date: userData.approval3Date,
        isApproval: userData.isApproval,
      });

      // Handle the response as needed
      console.log('Approval entry created:', data);
    } catch (err) {
      console.error('Error submitting edited rule:', err);
    }
  };
  const fetchData = async () => {
    try {
      const { data } = await Axios.get(`/api/gfr/edit/${id}`);
      setRule(data.rule);
     
      
      // console.log(data.rule.id);
      setEditedRule(data.rule);
      setUserData((prevUserData) => ({
        ...prevUserData,
        dataOriginal: {
          id: data.rule.id,
          title: data.rule.heading, // Assuming 'heading' corresponds to 'title'
          description:data.rule.description,
          rule:data.rule.rule,
          category:data.rule.category,
        },
        dataChanged: {
          id: data.rule.id,
          title: data.rule.heading, // Assuming 'heading' corresponds to 'title'
          description:data.rule.description,
          rule:data.rule.rule,
          category:data.rule.category,
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update the dataChanged state
    setUserData((prevUserData) => ({
      ...prevUserData,
      dataChanged: {
        ...prevUserData.dataChanged,
        [name]: value,
      },
    }));
  
    // Update the editedRule state
    setEditedRule((prevRule) => ({
      ...prevRule,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      isEdit: false,
      isDelete:true,
    }));
  };
  console.log(userData.dataChanged);
  if (!rule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card mt-3">
        <form onSubmit={submitHandler}>
        <div className="card-header">
          <span style={{ fontWeight: 'bold', fontSize: '22px' }}> {rule.rule}</span>
          <span style={{ fontSize: '20px' }}> &nbsp; {rule.heading} </span>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            
           
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Reason for Deletion:</label>
              <textarea
                name="description"
                value={editedRule.description}
                onChange={handleInputChange}
                className="form-control"
                style={{ width: '100%', height: '300px' }}
              />
            </div>
           

            <button onClick={handleSave} type="submit" style={{float:"right"}} className="btn btn-danger mb-4">Request for Deletion</button>
          </blockquote>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;
