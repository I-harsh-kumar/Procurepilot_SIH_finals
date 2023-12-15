import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Edit = () => {
  const [rule, setRule] = useState(null);
  const { id } = useParams(); // Extracts the ID from the URL params

  
    
  const [gfrData, setGfrData] = useState([]);
  const fetchData = async () => {
    try {
      
      const { data } = await Axios.get(`/api/gfr/edit/${id}`);
      console.log(data);
      setGfrData(data.rule);
      setRule(data.rule);
     
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);
  
  if (!rule) {
    return <div>Loading...</div>;
  }

  return (

    <div className="container mt-5">

      <div className="card mt-3">
        
        <div className="card-header">
         <span style={{fontWeight:"bold",fontSize:"22px"}}> {rule.rule}</span>
         <span style={{fontSize:"20px"}}> &nbsp; {rule.heading} </span>

         
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p style={{fontSize:"16px"}}>
              {rule.description.split(/(\(\w+\))/).map((text, i) => (
                i % 2 === 0 ? (
                  text
                ) : (
                  <React.Fragment key={i}>
                    <br />
                    {text}
                  </React.Fragment>
                )
              ))}
            </p>
            <footer className="blockquote-footer">Category: {rule.category}</footer>
          </blockquote>
        </div>
       
      </div>
    </div>
  );
}

export default Edit;
