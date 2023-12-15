import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { diffChars } from 'diff';

const Edit = () => {
  const [rule, setRule] = useState(null);
  const { id } = useParams();

  const [gfrData, setGfrData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await Axios.get(`/api/approval/compare/${id}`);
      setGfrData(data.rule.dataChanged);
      setRule(data.rule.dataOriginal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const generateHighlightedText = (original, changed) => {
    const diff = diffChars(original, changed);

    return diff.map((part, index) => {
      const style = part.added ? { color: 'black',background:"#fffd8d" } : part.removed ? { textDecoration: 'line-through' } : null;
      return <span key={index} style={style}>{part.value}</span>;
    });
  };

  if (!rule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        
        <div className="card mt-3 col-sm-12 col-lg-6">
        <h3 style={{textAlign:"center"}}>Original Data</h3>

          <div className="card-header">
            <span style={{ fontWeight: "bold", fontSize: "22px" }}>{rule.rule}</span>
            <span style={{ fontSize: "20px" }}> &nbsp; {rule.heading} </span>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p style={{ fontSize: "16px" }}>
                {(rule.description)}
              </p>
              <footer className="blockquote-footer">Category: {rule.category}</footer>
            </blockquote>
          </div>
        </div>
        <div className="card mt-3 col-sm-12 col-lg-6">
        <h3 style={{textAlign:"center"}}>Edited Data</h3>

          <div className="card-header">
            <span style={{ fontWeight: "bold", fontSize: "22px" }}>{gfrData.rule}</span>
            <span style={{ fontSize: "20px" }}> &nbsp; {gfrData.heading} </span>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p style={{ fontSize: "16px" }}>
                {generateHighlightedText(rule.description, gfrData.description)}
              </p>
              <footer className="blockquote-footer">Category: {gfrData.category}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
