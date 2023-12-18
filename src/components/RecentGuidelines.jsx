import React, { useState,useEffect } from 'react'
import Axios from "axios";
const RecentGuidelines = () => {
  const [newData, setNewData] = useState([]);

  const recentData = async () => {
    try {
      const response = await Axios.get("/api/gfr/getNewData");
      const { data } = response;
      console.log("Recent Data:", data);
      setNewData(data);
    } catch (error) {
      console.error("Error fetching recent data:", error);
    }
  };
  useEffect(() => {
    recentData();
  },[]);
      
  return (
    <>
   
    <div className='container mt-5 mb-5'>
    <h3 style={{background:"white"}} className='mt-3 mb-3'>Recently Uploaded Documents</h3>
    <h3 style={{background:"white"}}>Recently Uploaded Documents</h3>
       
       {newData.map((item, index) => (
               <div className="custom-table" key={index}>
                 <br />
                 <div className="table-row">
                   <div className="table-cell" style={{ width: "70%" }}>
                     <div>
                       <u>{item.heading}</u>
                     </div>
                     <div>
                       {/* {item.description} */}
                       {item.description.split(" ").slice(0, 8).join(" ")}{" "}
                         {item.description.split(" ").length > 8 ? "..." : ""}
                       </div>
                   </div>
   
                   <div style={{ fontSize: '14px', width: '30%' }} className="table-cell">
                     <div className="">Updated Start</div>
                     <div> {new Date(item.createdAt).toLocaleDateString()}</div>
                     <div className="">Updated End</div>
                     <div>{new Date(item.updatedAt).toLocaleDateString()}</div>
                     {/* {item.anotherField && <div className="">Another Field</div>} */}
                   </div>
                 </div>
               </div>
             ))}
    </div>
    </>
  )
}

export default RecentGuidelines