import React, { useState, useEffect } from "react";
import "./css/dashboard.css";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import Axios from "axios";
const App = () => {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleApprove = () => {
    setShowApproveModal(true);
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };

  const handleConfirmation = (confirmed, action) => {
    if (action === "approve") {
      setShowApproveModal(false);
    } else if (action === "reject") {
      setShowRejectModal(false);
    }

    if (confirmed) {
      // Handle the approval or rejection logic here
      if (action === "approve") {
        console.log("Approved!");
      } else if (action === "reject") {
        console.log("Rejected!");
      }
    } else {
      console.log("Action canceled.");
    }
  };

  const data = [
    {
      title: "Requirement of Split AC Tender",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      updatedBy: "John Doe",
      updatedStart: "2023-01-01",
      updatedEnd: "2023-01-31",
    },
    {
      title: "Requirement of Split AC Tender",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      updatedBy: "John Doe",
      updatedStart: "2023-01-01",
      updatedEnd: "2023-01-31",
      anotherField: "Another Dummy Element",
    },
  ];

  const arr = [
    {
      rule: "142",
      heading:
        "Universal Procurement Guidelines for Ministries and Departments",
      description:
        "This chapter contains the general rules applicable to all Ministries or Departments, regarding procurement of goods required for use in the public service. Detailed instructions relating to procurement of goods may be issued by the procuring departments broadly in conformity with the general rules contained in this Chapter.",
      category: "",
    },

    {
      rule: "143",
      heading: " Definition of Goods.",
      description:
        "The term 'goods' used in this chapter includes all articles, material, commodity, livestock, furniture, fixtures, raw material, spares, instruments, machinery, equipment, industrial plant, vehicles, aircraft, ships, medicines, railway rolling stock, assemblies, subassemblies, accessories, a group of machineries comprising of an integrated production process or such other category of goods or intangible products like software, technology transfer, licenses, patents or other intellectual properties purchased or otherwise acquired for the use of Government but excludes books, publications, periodicals, etc. for a library. The term 'goods' also includes works and services which are incidental or consequential to the supply of such goods, such as, transportation, insurance, installation, commissioning, training and maintenance.",
      category: "",
    },

    {
      rule: "144",
      heading:
        "Fundamental principles of public buying (for all procurements including procurement of works).",
      description:
        "Every authority delegated with the financial powers of procuring goods in public interest shall have the responsibility and accountability to bring efficiency, economy, and transparency in matters relating to public procurement and for fair and equitable treatment of suppliers and promotion of competition in public procurement. The procedure to be followed in making public procurement must conform to the following yardsticks :- (i) The description of the subject matter of procurement to the extent practicable should - a) be objective, functional, generic and measurable and specify technical, qualitative and performance characteristics.b) not indicate a requirement for a particular trade mark, trade name or brand. (ii) the specifications in terms of quality, type etc., as also quantity of goods to be procured, should be clearly spelt out keeping in view the specific needs of the procuring organisations. The specifications so worked out should meet the basic needs of the organisation without including superfluous and non-essential features, which may result in unwarranted expenditure. (iii) Where applicable, the technical specifications shall, to the extent practicable, be based on the national technical regulations or recognized national standards or building codes, wherever such standards exist, and in their absence, be based on the relevant international standards. In case of Government of India funded projects abroad, the technical specifications may be framed based on requirements and standards of the host beneficiary Government, where such standards exist. Provided that a procuring entity may, for reasons to be recorded in writing, adopt any other technical specification. (iv) Care should also be taken to avoid purchasing quantities in excess of requirement to avoid inventory carrying costs. (v) offers should be invited following a fair, transparent and reasonable procedure. (vi) the procuring authority should be satisfied that the selected offer adequately meets the requirement in all respects.vii) the procuring authority should satisfy itself that the price of the selected offer is reasonable and consistent with the quality required. (viii) at each stage of procurement the concerned procuring authority must place on record, in precise terms, the considerations which weighed with it while taking the procurement decision. (ix) a complete schedule of procurementcycle from date of issuing the tender to date of issuing the contract should be published when the tender is issued. (x) All Ministries/Departments shall prepare Annual Procurement Plan before the commencement of the year and the same should also be placed on their website.",
      category: "",
    },
  ];

  const arr1 = [
    {
      rule: "142",
      heading:
        "Universal Procurement Guidelines for Ministries and Departments",
      description:
        "This chapter contains the general rules applicable to all Ministries or Departments, regarding procurement of goods required for use in the public service. Detailed instructions relating to procurement of goods may be issued by the procuring departments broadly in conformity with the general rules contained in this Chapter.",
      createdAt: "12.12.2024",
      updatedBy: "Suraj Sharma",
      category: "E-procurement",
    },
    {
      rule: "143",
      heading:
        "Universal Procurement Guidelines for Ministries and Departments",
      description:
        "This chapter contains the general rules applicable to all Ministries or Departments, regarding procurement of goods required for use in the public service. Detailed instructions relating to procurement of goods may be issued by the procuring departments broadly in conformity with the general rules contained in this Chapter.",
      createdAt: "12.12.2024",
      updatedBy: "Suraj Sharma",
      category: "E-procurement",
    },
  ];
  const [userName, setUserName] = useState("");

  const fetchUserInfo = () => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userName = storedUserInfo.name;
    setUserName(userName);
    console.log(userName);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const [approvalData, setApprovalData] = useState([]);

  const fetchData1 = async () => {
    try {
      const response = await Axios.get("/api/approval/getapprovaldata");
      // Use response.data instead of data1
      setApprovalData(response.data.data);
      console.log(response.data.data);
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
      const { data } = await Axios.get("/api/gfr/getGfrRule");
      setGfrData(data.rules);
      console.log("gfrData",gfrData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
  }, [gfrData,searchResults]);

  const handleSearch1 = () => {
    if (!searchTag1 && !searchCategory1 && !searchRule1) {
      setSearchResults1(approvalData);
    } else {
      const results = approvalData.filter(
        (item) =>
          item.dataOriginal.description.toLowerCase().includes(searchTag1.toLowerCase()) &&
          item.dataOriginal.category.toLowerCase().includes(searchCategory1.toLowerCase()) &&
          item.dataOriginal.rule.toLowerCase().includes(searchRule1.toLowerCase())
      );
      console.log("results1",results)
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
  }, [approvalData,searchResults1]);



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
        <div className="col-sm-12 col-lg-4" style={{ textAlign: "center" }}>
          <Link to="/addNewRule">
            <button
              class="btn btn-primary mb-4"
              style={{ width: "250px", height: "45px" }}
              type="submit"
            >
              Add new Rule +
            </button>
          </Link>

          <br />
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
        <div
          className="col-sm-12 col-lg-8"
          style={{ overflowY: "auto", maxHeight: "400px" }}
        >
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
                      {row.description.split(" ").length > 8 ? (
                        "..."
                      ) : ""
                      }
                    </td>
                    <td
                      data-label="Category"
                      style={{ wordWrap: "break-word" }}
                    >
                      {row.category}
                    </td>
                    <td data-label="Action" style={{ wordWrap: "break-word" }}>
                      <Link to={`/view/${row._id}`}>
                        <button
                          className="btn-dark mx-1"
                          style={{
                            width: "45px",
                            height: "25px",
                            fontSize: "10px",
                            borderRadius: "5px",
                          }}
                          type="button"
                        >
                          View
                        </button>
                      </Link>
                      <Link to={`/edit/${row._id}`}>
                        <button
                          className="btn-primary mx-1"
                          style={{
                            width: "45px",
                            height: "25px",
                            fontSize: "10px",
                            borderRadius: "5px",
                          }}
                          type="button"
                        >
                          Edit
                        </button>
                      </Link>
                      {/* <button class="btn-primary mx-1" style={{width:"45px",height:"25px",fontSize:"10px",borderRadius:"5px"}} type="submit">Edit</button> */}
                      <button
                        class="btn-danger"
                        style={{
                          width: "45px",
                          height: "25px",
                          fontSize: "10px",
                          borderRadius: "5px",
                        }}
                        type="submit"
                      >
                        Delete
                      </button>
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
          <h3 style={{ background: "white" }}>Recently Uploaded Documents</h3>

          {data.map((item, index) => (
            <div className="custom-table" key={index}>
              <br />
              <div className="table-row">
                <div className="table-cell" style={{ width: "70%" }}>
                  <div>
                    <u>{item.title}</u>
                  </div>
                  <div>{item.description}</div>
                </div>

                <div
                  style={{ fontSize: "14px", width: "30%" }}
                  className="table-cell"
                >
                  <div>Updated By</div>
                  <div>{item.updatedBy}</div>
                  <div className="">Updated Start</div>
                  <div>{item.updatedStart}</div>
                  <div className="">Updated End</div>
                  <div>{item.updatedEnd}</div>
                  {item.anotherField && <div className="">Another Field</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-sm-12 col-lg-12">
        <div className="approval-control-main-div" style={{}}>
          <h2 className="mb-3 mt-3" style={{ fontWeight: "bold" }}>
            Approval Control
          </h2>
          <div
            className="search-container mt-3 approval-control-main-div"
            style={{}}
          >
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
            {/* <div>
              <input
                type="text"
                value={searchRule}
                onChange={(e) => setSearchRule(e.target.value)}
                placeholder="Search by date"
                className="search-input mx-4"
                style={{ width: "90%" }}
              />
            </div> */}
          </div>
          <button
              onClick={handleSearch1}
              className="btn btn-primary mb-3 mt-2"
            >
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
                  style={{ color: "white" }}
                  onClick={() => handleRowClick(row.dataOriginal.rule)}
                >
                  <th scope="row" data-label="Rule Number">
                    {row.dataOriginal.rule}
                  </th>
                  <td data-label="Title" style={{ wordWrap: "break-word" }}>
                    {row.dataOriginal.title}
                  </td>
                  <td
                    data-label="Description"
                    style={{ wordWrap: "break-word" }}
                  >
                    {row.dataOriginal.category}
                  </td>
                  <td data-label="CreatedAt" style={{ wordWrap: "break-word" }}>
                    {row.editAt}
                  </td>
                  <td data-label="UpdatedBy" style={{ wordWrap: "break-word" }}>
                    {row.editBy}
                  </td>
                  <td data-label="UpdatedBy" style={{ wordWrap: "break-word" }}>
                    {/* {console.log({"surajidis__",(row._id)})} */}
                    <Link to={`/compare/${row._id}`}>
                      {" "}
                      <button
                        class="btn-dark mx-1"
                        style={{
                          width: "85px",
                          height: "25px",
                          fontSize: "10px",
                          borderRadius: "5px",
                        }}
                        type="submit"
                      >
                        View Changes
                      </button>
                    </Link>
                  </td>
                  <td data-label="UpdatedBy" style={{ wordWrap: "break-word" }}>
                    <button
                      className="btn-success mx-1"
                      style={{
                        width: "85px",
                        height: "25px",
                        fontSize: "10px",
                        borderRadius: "5px",
                      }}
                      type="button"
                      onClick={handleApprove}
                    >
                      Approve
                    </button>
                    <Modal
                      show={showApproveModal}
                      onHide={() => handleConfirmation(false, "approve")}
                    >
                      <Modal.Header
                        style={{ backgroundColor: "lightgray", color: "black" }}
                      >
                        <Modal.Title>Confirmation</Modal.Title>
                        <Button
                          variant="link"
                          onClick={() => handleConfirmation(false, "approve")}
                          style={{ fontSize: "25px", color: "black" }}
                        >
                          &times;
                        </Button>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to approve?</Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => handleConfirmation(false, "approve")}
                        >
                          No
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => handleConfirmation(true, "approve")}
                        >
                          Yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td data-label="UpdatedBy" style={{ wordWrap: "break-word" }}>
                    <button
                      className="btn-danger mx-1"
                      style={{
                        width: "85px",
                        height: "25px",
                        fontSize: "10px",
                        borderRadius: "5px",
                      }}
                      type="button"
                      onClick={handleReject}
                    >
                      Reject
                    </button>
                    <Modal
                      show={showRejectModal}
                      onHide={() => handleConfirmation(false, "reject")}
                    >
                      <Modal.Header
                        style={{ backgroundColor: "lightgray", color: "black" }}
                      >
                        <Modal.Title>Confirmation</Modal.Title>
                        <Button
                          variant="link"
                          onClick={() => handleConfirmation(false, "reject")}
                          style={{ fontSize: "25px", color: "black" }}
                        >
                          &times;
                        </Button>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to reject?</Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => handleConfirmation(false, "reject")}
                        >
                          No
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleConfirmation(true, "reject")}
                        >
                          Yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td data-label="UpdatedBy" style={{ wordWrap: "break-word" }}>
                    <button
                      class="btn-dark mx-1"
                      style={{
                        width: "85px",
                        height: "25px",
                        fontSize: "10px",
                        borderRadius: "5px",
                      }}
                      type="submit"
                    >
                      Check status
                    </button>
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
    </div>
  );
};

export default App;
