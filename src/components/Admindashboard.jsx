
import React, { useState,useEffect } from 'react';
import './css/dashboard.css';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import {  Table } from 'react-bootstrap'; // Import Table from Bootstrap

import Axios from "axios";
const App = () => {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
   const [name,setName]=useState("suraj_govt");
  const [id,setId]=useState({});
  const[deletemessage,setDeletemessage]=useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [idcheck,setIdcheck]=useState({});
  
  const [approvalName1,setApprovalName1]=useState("");
  const [approvalName2,setApprovalName2]=useState("");
  const [approvalName3,setApprovalName3]=useState("");
  const [approvalInfo, setApprovalInfo] = useState(null);
  // const [updateApproval, setUpdateApproval] = useState(null);
    const updateApproval = async (row, approvalField,status,isapproval,final) => {
      try {
        // Make your API call to update the approval status
        const response = await fetch(`/api/approval/updateApproval/${row._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ [approvalField]: name }), 
          body: JSON.stringify({ approvalField, name,status,isapproval,final }),
        });
    
        // Check if the API call was successful
        if (response.ok) {
          console.log(`Successfully updated ${approvalField} for ${row._id}`);
          // You may want to update your local state or refetch data here
        } else {
          console.error(`Failed to update ${approvalField} for ${row._id}`);
        }
      } catch (error) {
        console.error('Error updating approval status:', error);
      }
    };
    const handleDeleteConfirmation = (confirmed) => {
      if (confirmed) {
        // Delete logic...
        setModalMessage('Delete confirmed. It is a delete request.');
      } else {
        setModalMessage('Delete canceled.');
      }
      setShowDeleteModal(false);
    };
  
    const handleApprove = (row) => {
      // Check if approval1 is empty before showing the modal
      console.log(row);
      setId(row); 
      setShowApproveModal(true);
      
    };
    const handleReject = (row) => {
      setId(row); 
      setShowRejectModal(true);
    };
    const determineAction = (approval) => {
      if (approval && approval.startsWith('removedby_')) {
        return 'Rejected';
      } else if (approval) {
        return 'Approved';
      } else {
        return 'Not Yet Reviewed';
      }
    };
    const extractName = (approval) => {
      if (!approval) {
        return 'Not Yet Reviewed';
      }
    
      return approval.startsWith('removedby_') ? approval.replace('removedby_', '') : approval;
    };
    
  // console.log(name);
  const handleConfirmation = (confirmed, action) => {
    // console.log(root._id);
    // if(action==='approve'){
    //   if(root.approval1)
    // }

    console.log(confirmed);
    setShowApproveModal(false);
    if (action === 'approve'&&confirmed) {
      
     

     
      
     
      if(id.approval1===''){
        if((id.approval2!==name)&&(id.approval3!==name)){
          // console.log(row.approval1);
          // console.log(name);  
          updateApproval(id,"approval1","approved","","");

        
        }
        else{
          console.log("u have already reviewed this change1")
        }
       
      }
      else if(id.approval2===''){
        if((id.approval1!==name)&&(id.approval3!==name)){
          // console.log(row.approval1);
          // console.log(name);  
          updateApproval(id,"approval2","approved","","");
           
        
        }
        else{
          console.log("u have already reviewed this change2")
        }
       

      }
      else  if(id.approval3===''){
        // console.log("i am here");  
        if((id.approval1!==name)&&(id.approval2!==name)){
          console.log(id.approval1);
          console.log(name);  
          updateApproval(id,"approval3","approved","","");
           
        
        }
        else{
          console.log("u have already reviewed this change3")
        }
      }
      window.location.reload();
    } else {
      setShowRejectModal(false);
      if (action === 'reject' && confirmed) {
      
      
      if(id.approval1===''){
        if((id.approval2!=="removedby_"+name)&&(id.approval3!=="removedby_"+name)){
          // console.log(row.approval1);
          // console.log(name);  
          updateApproval(id,"approval1","delete","","");

        
        }
        else{
          console.log("u have already reviewed this change1")
        }
       
      }
      else if(id.approval2===''){
        if((id.approval1!=="removedby_"+name)&&(id.approval3!=="removedby_"+name)){
          // console.log(row.approval1);
          console.log(name);  
          updateApproval(id,"approval2","delete","","");
           
        
        }
        else{
          console.log("u have already reviewed this change2")
        }
       

      }
      else  if(id.approval3===''){
        // console.log("i am here");  
        if((id.approval1!=="removedby_"+name)&&(id.approval2!=="removedby_"+name)){
          console.log(id.approval1);
          console.log(name);  
          updateApproval(id,"approval3","delete","","");
           
        
        }
        else{
          console.log("u have already reviewed this change3")
        }
      }
      window.location.reload();
    }}

    if (confirmed) {
      // Handle the approval or rejection logic here
      if (action === 'approve') {
        console.log('Approved!');

      } else if (action === 'reject') {
        console.log('Rejected!');

      }
    } else {
      console.log('Action canceled.');
    }
  };
  const handleConfirmationdelete = (confirmed, action) => {
    // console.log(root._id);
    // if(action==='approve'){
    //   if(root.approval1)
    // }
    console.log(id._id);
    if (action === 'approve') {
      setShowApproveModal(false);
      if(id.approval1===''){
        if((id.approval2!=="removedby_"+name)&&(id.approval3!=="removedby_"+name)){
          // console.log(row.approval1);
          // console.log(name);  
          updateApproval(id,"approval1","delete","","");

        
        }
        else{
          console.log("u have already reviewed this change1")
        }
       
      }
      else if(id.approval2===''){
        if((id.approval1!=="removedby_"+name)&&(id.approval3!=="removedby_"+name)){
          // console.log(row.approval1);
          console.log(name);  
          updateApproval(id,"approval2","delete","","");
           
        
        }
        else{
          console.log("u have already reviewed this change2")
        }
       

      }
      else  if(id.approval3===''){
        // console.log("i am here");  
        if((id.approval1!=="removedby_"+name)&&(id.approval2!=="removedby_"+name)){
          console.log(id.approval1);
          console.log(name);  
          updateApproval(id,"approval3","delete","","");
           
        
        }
        else{
          console.log("u have already reviewed this change3")
        }
      }
    } else if (action === 'reject') {
      setShowRejectModal(false);

    }

    if (confirmed) {
      // Handle the approval or rejection logic here
      if (action === 'approve') {
        console.log('Approved!');

      } else if (action === 'reject') {
        console.log('Rejected!');
      }
    } else {
      console.log('Action canceled.');
    }
  };
  const [showCheckStatusModal, setShowCheckStatusModal] = useState(false);
  const handleViewChanges = (row) => {
    
      setModalMessage(row.dataChanged.description);
      setShowDeleteModal(true);
    
  };
  // Function to open the Check Status modal
  const handleOpenCheckStatusModal = (row) => {
    setIdcheck(row);
    setShowCheckStatusModal(true);
  };

  // Function to close the Check Status modal
  const handleCheckStatusModalClose = () => {
    setShowCheckStatusModal(false);
  };
 
  const [userName, setUserName] = useState('suraj_approver');

  const fetchUserInfo = async () => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userName = storedUserInfo.name;
      setUserName(userName);
      setName(userName);
      // console.log(userName);

  };


  useEffect(() => {
    fetchUserInfo();
  }, []);
 
  const [approvalData, setApprovalData] = useState([]);

const fetchData1 = async () => {
  try {
    const response = await Axios.get('/api/approval/getapprovaldata');
    // Use response.data instead of data1
    setApprovalData(response.data.data);
    // console.log(response.data.data );
    response.data.data.forEach((element) => {
      const { approval1, approval2, approval3 } = element;
    
      if (
        approval1 !== '' && !approval1.startsWith('removedby_') &&
        approval2 !== '' && !approval2.startsWith('removedby_') &&
        approval3 !== '' && !approval3.startsWith('removedby_')
      ) {
        // All three approvals have normal names without prefix - considered approved
        console.log('Approved:', approval1, approval2, approval3);
        updateApproval(element,"varupdate","varupdate","true","");

        
      } else if (
        (approval1.startsWith('removedby_') && approval2.startsWith('removedby_')) ||
        (approval1.startsWith('removedby_') && approval3.startsWith('removedby_')) ||
        (approval2.startsWith('removedby_') && approval3.startsWith('removedby_'))
      ) {
        // Either two of them have removedby_ prefix - considered rejected
        // console.log('Rejected:', approval1, approval2, approval3);
        // console.log("suraj")
        updateApproval(element,"varupdate","varupdate","false","");

      } else if (approval1 === '' && approval2 === '' && approval3 === '') {
        // All three are empty - not yet reviewed
        console.log('Not yet reviewed');
        updateApproval(element,"varupdate","varupdate","not yet reviewed","");

      } else {
        // Any other cases
        console.log('Unknown status');
        updateApproval(element,"varupdate","varupdate","not yet reviewed","");

      }
      // console.log(element.isApproval);

        updateApproval(element,"varupdate","varupdate","",element.isApproval);
      
      
    });
  //  console.log(approvalData);
  } catch (err) {
    console.error(err);
  }
  
};

useEffect(() => {
  fetchData1();
  
}, []);


   const [gfrData, setGfrData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await Axios.get('/api/gfr/getGfrRule');
      setGfrData(data.rules);
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
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
    fetchData();
    recentData();
  },[]);
  const [searchHeading, setSearchHeading] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchRule, setSearchRule] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [searchTag1, setSearchTag1] = useState("");
  const [searchCategory1, setSearchCategory1] = useState("");
  const [searchRule1, setSearchRule1] = useState("");
  const [searchResults1, setSearchResults1] = useState([]);

  const handleSearch = () => {
    if (!searchHeading && !searchCategory && !searchRule) {
      setSearchResults(gfrData);
    } else {
      const results = gfrData.filter(
        (item) =>
          item.heading.toLowerCase().includes(searchHeading.toLowerCase()) &&
          item.category.toLowerCase().includes(searchCategory.toLowerCase()) &&
          item.rule.toLowerCase().includes(searchRule.toLowerCase())
      );
      setSearchResults(results);
    }
  };
  const handleClear = () => {
    setSearchHeading("");
    setSearchCategory("");
    setSearchRule("");
    handleSearch();
  };
  useEffect(() => {
    handleSearch();
  }, [gfrData, searchResults]);

  const handleSearch1 = () => {
    if (!searchTag1 && !searchCategory1 && !searchRule1) {
      setSearchResults1(approvalData);
    } else {
      const results = approvalData.filter(
        (item) =>
          item.dataOriginal.description
            .toLowerCase()
            .includes(searchTag1.toLowerCase()) &&
          item.dataOriginal.category
            .toLowerCase()
            .includes(searchCategory1.toLowerCase()) &&
          item.dataOriginal.rule
            .toLowerCase()
            .includes(searchRule1.toLowerCase())
      );
      // console.log("results1",results)
      // setSearchResults1(results);
    }
  };
  const handleClear1 = () => {
    setSearchTag1("");
    setSearchCategory1("");
    setSearchRule1("");
    handleSearch1();
  };
  useEffect(() => {
    handleSearch1();
    console.log(searchResults1);
  }, [approvalData, searchResults1]);
  const handleRowClick = (rule) => {
    // console.log(Row clicked: ${rule});
    // Implement your row click logic here
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-12 col-lg-8">
          <div className="search-container">
          <div>
              <input
                type="text"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                placeholder="Search by Category"
                className="search-input"
              />
            </div>
            <div>
              <input
                type="text"
                value={searchHeading}
                onChange={(e) => setSearchHeading(e.target.value)}
                placeholder="Search by Heading"
                className="search-input"
              />
            </div>
            <div>
              <input
                type="text"
                value={searchRule}
                onChange={(e) => setSearchRule(e.target.value)}
                placeholder="Search by Rule Number"
                className="search-input"
              />
            </div>
            <button
              onClick={handleSearch}
              className="btn btn-primary mb-3 mt-2"
            >
              Filter
            </button>
            <button
              onClick={handleClear}
              className="btn btn-primary mb-3 mt-2 mx-3"
            >
              Clear Filter
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4" style={{textAlign:"center"}}>
<Link to="/addNewRule">
<button class="btn btn-primary mb-4" style={{width:"250px",height:"45px"}} type="submit">Add new Rule +</button>
</Link>

<br/>

<Link to="/searchByAI">
            <button
              class="btn btn-primary"
              style={{
                width: "250px",
                height: "45px",
                backgroundColor: "007494",
                color: "FFFFFF",
              }}
              type="submit"
            >
              Search By AI
            </button>
          </Link>

</div>

   </div>
   <div className="row mt-5">
   
        <div className="col-sm-12 col-lg-8" style={{ overflowY: 'auto', maxHeight: '400px' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Rule Number</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {searchResults.length > 0 ? (
                searchResults.map((row, index) => (
                  <tr
                    key={index}
                    style={{ color: "white" }}
                    onClick={() => handleRowClick(row.rule)}
                  >
                    <th scope="row" data-label="Rule Number">
                      {row.rule}
                    </th>
                    <td data-label="Title" style={{ wordWrap: "break-word" }}>
                      {row.heading}
                    </td>
                    <td
                      data-label="Description"
                      style={{ wordWrap: "break-word" }}
                    >
                      {row.description.split(" ").slice(0, 8).join(" ")}{" "}
                      {row.description.split(" ").length > 8 ? "..." : ""}
                    </td>
                    <td
                      data-label="Category"
                      style={{ wordWrap: "break-word" }}
                    >
                      {row.category}
                    </td>
                    <td  data-label="Action" style={{ wordWrap: 'break-word' }}>

<Link to={`/view/${row._id}`}>
      <button
        className="btn-dark mx-1"
        style={{ width: "45px", height: "25px", fontSize: "10px", borderRadius: "5px" }}
        type="button"
      >
        View
      </button>
    </Link>
<Link to={`/edit/${row._id}`}>
      <button 
        className="btn-primary mx-1"
        style={{ width: "45px", height: "25px", fontSize: "10px", borderRadius: "5px" }}
        type="button"
      >
        Edit
      </button>
    </Link>
{/* <button class="btn-primary mx-1" style={{width:"45px",height:"25px",fontSize:"10px",borderRadius:"5px"}} type="submit">Edit</button> */}
<Link to={`/delete/${row._id}`}>
      <button 
        className="btn-danger"
        style={{ width: "45px", height: "25px", fontSize: "10px", borderRadius: "5px" }}
        type="button"
      >
        Delete
      </button>
    </Link>
{/* <button class="btn-danger" style={{width:"45px",height:"25px",fontSize:"10px",borderRadius:"5px"}} type="submit">Delete</button> */}
                      
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{ color: "white" }}>
                  <td colSpan="5">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="col-sm-12 col-lg-4 mb-5">
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
      </div>
      <div className="col-sm-12 col-lg-12">
      <div className='approval-control-main-div' style={{ }}>
  <h2 className='mb-3 mt-3' style={{ fontWeight: "bold" }}>Approval Control</h2>
  <div className="search-container mt-3 approval-control-main-div"  style={{}}>
  <div>
              <input
                type="text"
                value={searchCategory1}
                onChange={(e) => setSearchCategory1(e.target.value)}
                placeholder="Search by Category"
                className="search-input mx-4"
                style={{ width: "90%" }}
              />
            </div>
            <div>
              <input
                type="text"
                value={searchTag1}
                onChange={(e) => setSearchTag1(e.target.value)}
                placeholder="Search by Tag"
                className="search-input mx-4"
                style={{ width: "90%" }}
              />
            </div>
            <div>
              <input
                type="text"
                value={searchRule1}
                onChange={(e) => setSearchRule1(e.target.value)}
                placeholder="Search by Rule Number"
                className="search-input mx-4"
                style={{ width: "90%" }}
              />
            </div>
   
   
   
  </div>
  <button onClick={handleSearch1} className="btn btn-primary mb-3 mt-2">
            Filter
          </button>
          <button
            onClick={handleClear1}
            className="btn btn-primary mb-3 mt-2 mx-3"
          >
            Clear Filter
          </button>
</div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Rule</th>
                <th scope="col">Title</th>
                {/* <th scope="col">Description</th> */}
                <th scope="col">Category</th>
                <th scope="col">Updated At</th>
                <th scope="col">Updated By</th>
                <th scope="col">Changes</th>
                <th scope="col">Action 1</th>
                <th scope="col">Action 2</th>
                <th scope="col">Approval</th>


              </tr>
            </thead>
            <tbody>
            {approvalData.length > 0 ? (
  approvalData.map((row, index) => (
    <tr
      key={index}
      style={{ color: 'white' }}
      onClick={() => handleRowClick(row.dataOriginal.rule)}
    >
      <th scope="row" data-label="Rule Number">
        {row.dataOriginal.rule}
      </th>
      <td data-label="Title" style={{ wordWrap: 'break-word' }}>
        {row.dataOriginal.title}
       

        
      </td>
      <td
        data-label="Description"
        style={{ wordWrap: 'break-word' }}
      >
        {row.dataOriginal.category}
      </td>
      <td data-label="CreatedAt" style={{ wordWrap: 'break-word' }}>
        {row.editAt}
        
      </td>
      <td data-label="UpdatedBy" style={{ wordWrap: 'break-word' }}>
        {row.editBy}
      </td>
      <td data-label="UpdatedBy" style={{ wordWrap: 'break-word' }}>
  {row.isDelete ? (
    // Render text or other content when isDelete is true
    <button className="btn-dark mx-1" onClick={() => handleViewChanges(row)} style={{ width: "85px", height: "25px", fontSize: "10px", borderRadius: "5px" }} type="submit">
    View Changes
  </button>
  ) : (
    // Render Link component when isDelete is false
    <Link to={`/compare/${row._id}`}>
      <button className="btn-dark mx-1" style={{ width: "85px", height: "25px", fontSize: "10px", borderRadius: "5px" }} type="submit">
        View Changes
      </button>
    </Link>
  )}
</td>
<Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header style={{ backgroundColor: 'lightgray', color: 'black' }}>
          <Modal.Title>Confirmation</Modal.Title>
          <Button variant="link" onClick={() => setShowDeleteModal(false)} style={{ fontSize: "25px", color: 'black' }}>
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body>Reason for Deletion:</Modal.Body>

        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleDeleteConfirmation(false)}>
            Got it
          </Button>
         
        </Modal.Footer>
      </Modal>
      <td data-label="UpdatedBy" style={{ wordWrap: 'break-word' }}>
      <button
          className="btn-success mx-1"
          style={{ width: '85px', height: '25px', fontSize: '10px', borderRadius: '5px' }}
          type="button"
           onClick={() => handleApprove(row)}
        >
          Approve
          
        </button>
        </td>
        <Modal show={showApproveModal} onHide={() => handleConfirmation(false, 'approve')}>
        <Modal.Header style={{ backgroundColor: 'lightgray', color: 'black' }}>
          <Modal.Title>Confirmation</Modal.Title>
          <Button variant="link" onClick={() => handleConfirmation(false, 'approve')} style={{fontSize:"25px", color: 'black' }}>
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body>Are you sure you want to approve?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleConfirmation(false, 'approve')}>
            No
          </Button>
         {/* {console.log(row._id)} */}
          <Button variant="success" onClick={() => handleConfirmation(true, 'approve')}>
            Yes
          </Button>

        </Modal.Footer>
      </Modal>
      
      <td data-label="UpdatedBy" style={{ wordWrap: 'break-word' }}>
      <button
          className="btn-danger mx-1"
          style={{ width: '85px', height: '25px', fontSize: '10px', borderRadius: '5px' }}
          type="button"
          onClick={() => handleReject(row)}
        >
          Reject
        </button>
        <Modal show={showRejectModal} onHide={() => handleConfirmation(false, 'reject')}>
        <Modal.Header style={{ backgroundColor: 'lightgray', color: 'black' }}>
          <Modal.Title>Confirmation</Modal.Title>
          <Button variant="link" onClick={() => handleConfirmation(false, 'reject')} style={{ fontSize:"25px",color: 'black' }}>
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reject?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleConfirmation(false, 'reject')}>
            No
          </Button>
          <Button variant="danger" onClick={() => handleConfirmation(true, 'reject')}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      </td>
      <td data-label="UpdatedBy" style={{ wordWrap: 'break-word' }}>
        <button class="btn-dark mx-1" onClick={() => handleOpenCheckStatusModal(row)}style={{width:"85px",height:"25px",fontSize:"10px",borderRadius:"5px"}} type="submit">Check status</button>
      </td>
      <Modal show={showCheckStatusModal} onHide={handleCheckStatusModalClose}>
        <Modal.Header style={{ backgroundColor: 'lightgray', color: 'black' }}>
          <Modal.Title>Check Status</Modal.Title>
          <Button variant="link" onClick={handleCheckStatusModalClose} style={{ fontSize: '25px', color: 'black' }}>
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Approval Stage</th>
                <th>Name of Officer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{extractName(idcheck.approval1)}</td>
                <td>{determineAction(idcheck.approval1)}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{extractName(idcheck.approval2)}</td>
                <td>{determineAction(idcheck.approval2)}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{extractName(idcheck.approval3)}</td>
                <td>{determineAction(idcheck.approval3)}</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCheckStatusModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  ))
) : (
  <tr style={{ color: 'white' }}>
    <td colSpan="5">No results found</td>
  </tr>
)}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default App;
