import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Edit = () => {
  const [rule, setRule] = useState(null);
  const { id } = useParams();

  const [editedRule, setEditedRule] = useState({
    rule: '',
    heading: '',
    description: '',
    category: '',
  });

  const fetchData = async () => {
    try {
      const { data } = await Axios.get(`/api/gfr/edit/${id}`);
      setRule(data.rule);
      setEditedRule(data.rule);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRule((prevRule) => ({
      ...prevRule,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Add logic to save the edited rule to the backend
    console.log('Save the edited rule:', editedRule);
  };

  if (!rule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card mt-3">
        <div className="card-header">
          <span style={{ fontWeight: 'bold', fontSize: '22px' }}> {rule.rule}</span>
          <span style={{ fontSize: '20px' }}> &nbsp; {rule.heading} </span>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="mb-3">
              <label htmlFor="rule" className="form-label">Rule:</label>
              <input
                 style={{border:"1px solid #ced4da"}}
                type="text"
                name="rule"
                value={editedRule.rule}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="heading" className="form-label">Heading:</label>
              <input
                 style={{border:"1px solid #ced4da"}}

                type="text"
                name="heading"
                value={editedRule.heading}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <textarea
                name="description"
                value={editedRule.description}
                onChange={handleInputChange}
                className="form-control"
                style={{ width: '100%', height: '300px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category:</label>
              <input
                 style={{border:"1px solid #ced4da"}}

                type="text"
                name="category"
                value={editedRule.category}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <button onClick={handleSave} style={{float:"right"}} className="btn btn-success">Request for Approval</button>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Edit;
