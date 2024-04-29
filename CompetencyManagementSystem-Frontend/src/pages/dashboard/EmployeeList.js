import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  // Sample data for employees
  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phonenumber: '123-456-7890', 
      role: 'Employee', 
      skills: ['JavaScript', 'React', 'Node.js', 'CSS'], 
      projects: [
        { name: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Project B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
      ]
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phonenumber: '987-654-3210', 
      role: 'Employee', 
      skills: ['UI Design', 'Sketch', 'Adobe XD', 'Figma'], 
      projects: [
        { name: 'Project C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { name: 'Project D', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
      ]
    },
    { 
      id: 3, 
      name: 'Alice Johnson', 
      email: 'alice@example.com', 
      phonenumber: '456-789-0123', 
      role: 'Employee', 
      skills: ['Python', 'R', 'Machine Learning', 'Data Visualization'], 
      projects: [
        { name: 'Project E', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: 'Project F', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' }
      ]
    },
    // Add more sample data if needed
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [updateRoleModalOpen, setUpdateRoleModalOpen] = useState(false);

  const handleViewMore = (employee) => {
    setSelectedEmployee(employee);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
  };

  const openUpdateRoleModal = () => {
    setUpdateRoleModalOpen(true);
  };

  const closeUpdateRoleModal = () => {
    setUpdateRoleModalOpen(false);
  };

  const handleUpdateRole = () => {
    // Update role logic here
    closeUpdateRoleModal();
  };
 useEffect(()=>{
  axios.get('http://localhost:8800/api/v1/auth/employees')
     .then(response => {
      setEmployees(response.data.userList)
     })
     .catch(error => {
       console.error('Error:', error);
     });

 },[])
  const Modal = ({ employee, closeModal }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg w-1/2 mx-auto overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{employee.name}</h2>
              <p className="text-gray-500">{employee.role}</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700"><span className='font-bold'>Email:</span> {employee.email}</p>
              <p className="text-gray-700"><span className='font-bold'>Phone number:</span> {employee.phonenumber}</p>
              <div className="mt-4">
                <p className="text-gray-700 font-bold">Skills:</p>
                <ul className="list-disc pl-4">
                  {employee.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 font-bold">Completed Projects:</p>
                <ul className="list-disc pl-4">
                  {employee.projects.map((project, index) => (
                    <li key={index}>
                      <span className="font-bold">{project.name}:</span> {project.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 flex justify-end">
            <button className="text-white bg-blue-500 rounded px-4 py-2 mr-4" onClick={openUpdateRoleModal}>Update Role</button>
            <button onClick={closeModal} className="text-white bg-red-500 rounded px-4 py-2">Close</button>
          </div>
        </div>
      </div>
    );
  };

  const UpdateRoleModal = ({ closeModal, handleUpdateRole }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg w-1/3 mx-auto overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Update Role</h2>
              <p className="text-gray-500">Update the role from employee to manager</p>
            </div>
            <div className="flex justify-end">
              <button className="text-white bg-green-500 rounded px-4 py-2 mr-4" onClick={handleUpdateRole}>Confirm</button>
              <button onClick={closeModal} className="text-white bg-red-500 rounded px-4 py-2">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 mt-20 mb-20 text-center">
        <span style={{ textDecoration: "underline" }}>Employee Lists</span>
      </h2>
      <div className="flex justify-center">
        {employees?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="rounded-lg shadow-md p-4 relative bg-slate-200"
                style={{ width: "350px", height: "150px" }}
              >
                <p className="text-gray-900 mb-2"><span className='font-bold'>Name:</span> {employee.firstName}</p>
                <p className="text-gray-900"><span className='font-bold'> Email:</span> {employee.email}</p>
                <div className="absolute bottom-4 right-4 space-x-2">
                  <button className="text-white bg-indigo-500 rounded px-3 py-1 hover:bg-indigo-950" onClick={() => handleViewMore(employee)}>
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-lg font-semibold mb-2">
            No employees available
          </h3>
        )}
      </div>
      {selectedEmployee && <Modal employee={selectedEmployee} closeModal={closeModal} />}
      {updateRoleModalOpen && <UpdateRoleModal closeModal={closeUpdateRoleModal} handleUpdateRole={handleUpdateRole} />}
    </div>
  );
};

export default EmployeeList;
