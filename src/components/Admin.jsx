import React, { useEffect,useState } from 'react';
import Axios from "axios";

const Admin = () => {
  const [gfrData, setGfrData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await Axios.get('/api/gfr/getGfrRule');

      // dispatch({ type: 'FETCH_SUCCESS', payload: data });
      setGfrData(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  },[]);
  const arr = [
    {
      "rule": "172",
      "heading": "(1) Advance payment to supplier",
      "description": "Ordinarily, payments for services rendered or supplies made should be released only after the services have been rendered or supplies made. However, it may become necessary to make advance payments for example in the following types of cases :- (i) Advance payment demanded by firms holding maintenance contracts for servicing of Air-conditioners, computers, other costly equipment, etc. (ii) Advance payment demanded by firms against fabrication contracts, turn-key contracts etc. Such advance payments should not exceed the following limits : (a) Thirty per cent. of the contract value to private firms; (b) Forty per cent. of the contract value to a State or Central Government agency or a Public Sector Undertaking; or (c) in case of maintenance contract, the amount should not exceed the amount payable for six months under the contract. Ministries or Departments of the Central Government may relax, in consultation with their Financial Advisers concerned, the ceilings (including percentage laid down for advance payment for private firms) mentioned above. While making any advance payment as above, adequate safeguards in the form of bank guarantee etc. should be obtained from the firm.",
      "category": ""
    },
   
    // Add more items to the array if needed
  ];

  return (
    <div className="container mt-5">
       {console.log("data:",gfrData)}
    {arr.map((item, index) => (
      <div key={index} className="card mt-3">
        <div className="card-header">
          {item.heading}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
          <p>
      {item.description.split(/(\(\w+\))/).map((text, i) => (
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
            <footer className="blockquote-footer">Category: {item.category}</footer>
          </blockquote>
        </div>
      </div>
    ))} 
  </div>
  );
}

export default Admin;
