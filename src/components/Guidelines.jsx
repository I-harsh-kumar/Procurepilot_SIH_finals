import React, { useState,useEffect } from 'react';
import './css/dashboard.css';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import {  Table } from 'react-bootstrap'; // Import Table from Bootstrap

import Axios from "axios";
const Guidelines = () => {
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
  const data = [
    {
      title: 'Requirement of Split AC Tender',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      updatedBy: 'John Doe',
      updatedStart: '2023-01-01',
      updatedEnd: '2023-01-31',
    },
    { 
      title: 'Requirement of Split AC Tender',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      updatedBy: 'John Doe',
      updatedStart: '2023-01-01',
      updatedEnd: '2023-01-31',
      anotherField: 'Another Dummy Element',
    },
  ];
  
  const arr = [
   
    { "rule": "142",
    "heading": "Universal Procurement Guidelines for Ministries and Departments",
    "description": "This chapter contains the general rules applicable to all Ministries or Departments, regarding procurement of goods required for use in the public service. Detailed instructions relating to procurement of goods may be issued by the procuring departments broadly in conformity with the general rules contained in this Chapter.", 
    "category": ""
 
    },
 
    { "rule": "143",
    "heading": " Definition of Goods.",
    "description": "The term 'goods' used in this chapter includes all articles, material, commodity, livestock, furniture, fixtures, raw material, spares, instruments, machinery, equipment, industrial plant, vehicles, aircraft, ships, medicines, railway rolling stock, assemblies, subassemblies, accessories, a group of machineries comprising of an integrated production process or such other category of goods or intangible products like software, technology transfer, licenses, patents or other intellectual properties purchased or otherwise acquired for the use of Government but excludes books, publications, periodicals, etc. for a library. The term 'goods' also includes works and services which are incidental or consequential to the supply of such goods, such as, transportation, insurance, installation, commissioning, training and maintenance.",
    "category": ""
 
    },
 
    { "rule": "144",
    "heading": "Fundamental principles of public buying (for all procurements including procurement of works).",
    "description": "Every authority delegated with the financial powers of procuring goods in public interest shall have the responsibility and accountability to bring efficiency, economy, and transparency in matters relating to public procurement and for fair and equitable treatment of suppliers and promotion of competition in public procurement. The procedure to be followed in making public procurement must conform to the following yardsticks :- (i) The description of the subject matter of procurement to the extent practicable should - a) be objective, functional, generic and measurable and specify technical, qualitative and performance characteristics.b) not indicate a requirement for a particular trade mark, trade name or brand. (ii) the specifications in terms of quality, type etc., as also quantity of goods to be procured, should be clearly spelt out keeping in view the specific needs of the procuring organisations. The specifications so worked out should meet the basic needs of the organisation without including superfluous and non-essential features, which may result in unwarranted expenditure. (iii) Where applicable, the technical specifications shall, to the extent practicable, be based on the national technical regulations or recognized national standards or building codes, wherever such standards exist, and in their absence, be based on the relevant international standards. In case of Government of India funded projects abroad, the technical specifications may be framed based on requirements and standards of the host beneficiary Government, where such standards exist. Provided that a procuring entity may, for reasons to be recorded in writing, adopt any other technical specification. (iv) Care should also be taken to avoid purchasing quantities in excess of requirement to avoid inventory carrying costs. (v) offers should be invited following a fair, transparent and reasonable procedure. (vi) the procuring authority should be satisfied that the selected offer adequately meets the requirement in all respects.vii) the procuring authority should satisfy itself that the price of the selected offer is reasonable and consistent with the quality required. (viii) at each stage of procurement the concerned procuring authority must place on record, in precise terms, the considerations which weighed with it while taking the procurement decision. (ix) a complete schedule of procurementcycle from date of issuing the tender to date of issuing the contract should be published when the tender is issued. (x) All Ministries/Departments shall prepare Annual Procurement Plan before the commencement of the year and the same should also be placed on their website.",
    "category": ""
 
    },
  ] 

  const arr1 = [
   
    { "rule": "142",
    "heading": "Universal Procurement Guidelines for Ministries and Departments",
    "description": "This chapter contains the general rules applicable to all Ministries or Departments, regarding procurement of goods required for use in the public service. Detailed instructions relating to procurement of goods may be issued by the procuring departments broadly in conformity with the general rules contained in this Chapter.", 
    "createdAt":"12.12.2024",
    "updatedBy":"Suraj Sharma",
    "category": "E-procurement"
 
    },
    { "rule": "143",
    "heading": "Universal Procurement Guidelines for Ministries and Departments",
    "description": "This chapter contains the general rules applicable to all Ministries or Departments, regarding procurement of goods required for use in the public service. Detailed instructions relating to procurement of goods may be issued by the procuring departments broadly in conformity with the general rules contained in this Chapter.", 
    "createdAt":"12.12.2024",
    "updatedBy":"Suraj Sharma",
    "category": "E-procurement"
 
    },
  ]
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
  useEffect(() => {
    fetchData();
  },[]);
  const [searchResults, setSearchResults] = useState(arr);
  const [searchResults1, setSearchResults1] = useState(arr1);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategory1, setSearchCategory1] = useState('');

  const [searchTag1, setSearchTag1] = useState('');
  const [searchTag, setSearchTag] = useState('');

  const [searchRule, setSearchRule] = useState('');
  const [searchRule1, setSearchRule1] = useState('');


  const handleSearch = () => {
    const filteredResults = arr.filter(
      (item) =>
        item.category.includes(searchCategory) &&
        item.heading.includes(searchTag) &&
        item.rule.includes(searchRule)
    );
    setSearchResults(filteredResults);
  };
  const handleSearch1 = () => {
    const filteredResults = arr.filter(
      (item) =>
        item.category.includes(searchCategory1) &&
        item.heading.includes(searchTag1) &&
        item.rule.includes(searchRule1)
    );
    setSearchResults1(filteredResults);
  };

  const handleRowClick = (rule) => {
    // console.log(`Row clicked: ${rule}`);
    // Implement your row click logic here
  };

  return (
    <div className="container-fluid">

      <div className="row mt-5">
        
        <div className="col-sm-12 col-lg-12">
          <div className="search-container">
    <h2 style={{background:"white"}} className='mt-1 mb-5'>Guidelines & Rules</h2>

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
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                placeholder="Search by Tag"
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
            <button onClick={handleSearch} className="btn btn-primary mb-3 mt-2">
              Search
            </button>
          </div>
        </div>
        {/* <div className="col-sm-12 col-lg-4" style={{textAlign:"center"}}>
<Link to="/addNewRule">
<button class="btn btn-primary mb-4" style={{width:"250px",height:"45px"}} type="submit">Add new Rule +</button>
</Link>

<br/>

<button class="btn btn-dash" style={{width:"250px",height:"45px"}} type="submit">Remove document -</button>

</div> */}

   </div>
   <div className="row mt-5">
   
        <div className="col-sm-12 col-lg-12 mb-5" style={{ overflowY: 'auto', maxHeight: '400px' }} >
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
  <Table className="table">
    <thead>
      <tr style={{ backgroundColor: '#343a40', color: 'white' }}>
        <th scope="col" style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#454b52',color:"White"}}>
          Rule Number
        </th>
        <th scope="col" style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#454b52',color:"White"}}>
          Title
        </th>
        <th scope="col" style={{ position: 'sticky', top: 0, zIndex: 1 , backgroundColor: '#454b52',color:"White"}}>
          Description
        </th>
        <th scope="col" style={{ position: 'sticky', top: 0, zIndex: 1 , backgroundColor: '#454b52',color:"White"}}>
          Category
        </th>
        <th scope="col" style={{ position: 'sticky', top: 0, zIndex: 1 , backgroundColor: '#454b52',color:"White"}}>
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {gfrData.length > 0 ? (
        gfrData.map((row, index) => (
          <tr
            key={index}
            style={{ color: 'white' }}
            onClick={() => handleRowClick(row.rule)}
          >
            <th scope="row" data-label="Rule Number">
              {row.rule}
            </th>
            <td data-label="Title" style={{ wordWrap: 'break-word' }}>
              {row.heading}
            </td>
            <td data-label="Description" style={{ wordWrap: 'break-word' }}>
              {row.description.split(' ').slice(0, 8).join(' ')}{' '}
              {row.description.split(' ').length > 8 ? '...' : ''}
            </td>
            <td data-label="Category" style={{ wordWrap: 'break-word' }}>
              {row.category}
            </td>
            <td data-label="Action" style={{ wordWrap: 'break-word' }}>
              <Link to={`/view/${row._id}`}>
                <button
                  className="btn-dark mx-1"
                  style={{
                    width: '45px',
                    height: '25px',
                    fontSize: '10px',
                    borderRadius: '5px',
                  }}
                  type="button"
                >
                  View
                </button>
              </Link>
              {/* <Link to={`/edit/${row._id}`}>
                <button
                  className="btn-primary mx-1"
                  style={{
                    width: '45px',
                    height: '25px',
                    fontSize: '10px',
                    borderRadius: '5px',
                  }}
                  type="button"
                >
                  Edit
                </button>
              </Link> */}
              {/* <Link to={`/delete/${row._id}`}>
                <button
                  className="btn-danger"
                  style={{
                    width: '45px',
                    height: '25px',
                    fontSize: '10px',
                    borderRadius: '5px',
                  }}
                  type="button"
                >
                  Delete
                </button>
              </Link> */}
            </td>
          </tr>
        ))
      ) : (
        <tr style={{ color: 'white' }}>
          <td colSpan="5">No results found</td>
        </tr>
      )}
    </tbody>
  </Table>
</div>

        </div>
        
       
      </div>
      
    </div>
  );
};

export default Guidelines;
