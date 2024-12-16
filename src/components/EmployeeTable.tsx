import React from 'react';
import { Employee } from '../types/EmployeeTypes';

interface Props {
  employees: Employee[];
}

const EmployeeTable: React.FC<Props> = ({ employees }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>PERSONNR</th>
          <th>NAMN</th>
          <th>EPOST</th>
          <th>MOBIL</th>
          <th>AVDELNING</th>
          <th>STATUS</th>
          <th>ÅTGÄRDER</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.personnr}</td>
            <td>{emp.namn}</td>
            <td>{emp.epost}</td>
            <td>{emp.mobil}</td>
            <td>{emp.avdelning}</td>
            <td>
              <span className={`status ${emp.status.toLowerCase()}`}>
                {emp.status}
              </span>
            </td>
            <td>
              <button>✏️</button>
              <button>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;