import React from 'React';

const AddEmployeeButton: React.FC = () => {
  const handleClick = () => {
    alert('Add Employee Form Coming Soon!');
  };

  return (
    <button className="add-employee" onClick={handleClick}>
      + New Employee
    </button>
  );
};

export default AddEmployeeButton;