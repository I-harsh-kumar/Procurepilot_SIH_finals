import React from 'react'

const RecentGuidelines = () => {
    const newData = [
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
      
  return (
    <>
   
    <div className='container mt-5 mb-5'>
    <h3 style={{background:"white"}} className='mt-3 mb-3'>Recently Uploaded Documents</h3>
    
        {newData.map((item, index) => (

<div className="custom-table" key={index}>
     <br/>
  <div className="table-row">
    <div className="table-cell" style={{ width: '80%' }}>
      <div>
        <u>{item.title}</u>
      </div>
      <div>{item.description}</div>
    </div>

    <div style={{ fontSize: '14px', width: '30%' }} className="table-cell">
      <div>Updated By</div>
      
      <div>{item.updatedBy}</div>
      <div className="">Updated Start</div>
      <div>{item.updatedStart}</div>
      <div className="">Updated End</div>
      <div>{item.updatedEnd}</div>
      {item.anotherField && (
        <div className="">Another Field</div>
      )}
    </div>
  </div>
</div>
))}
    </div>
    </>
  )
}

export default RecentGuidelines