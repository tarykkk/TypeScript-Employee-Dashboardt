import React, { useState, useEffect } from 'react';
import './App.css';
import { Employee } from './types'; // Імпортуємо тип Employee (якщо він є)
import EmployeeTable from './components/EmployeeTable';
import ScreenshotDisplay from './components/ScreenshotDisplay';

const App: React.FC = () => {
  // Стан для зберігання списку працівників
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Імітація завантаження даних (можливо з API або локальних даних)
  useEffect(() => {
    const fetchEmployees = async () => {
      // Імітація завантаження даних (в реальному проєкті використовували б API запит)
      const fetchedEmployees = [
        {
          PERSONNR: '12345',
          NAMN: 'Іван Петров',
          EPOS: 'ivan.petrov@example.com',
          MOBIL: '+380123456789',
          AVDELNING: 'ІТ',
          STATUS: 'Активний',
        },
        {
          PERSONNR: '67890',
          NAMN: 'Марія Іванова',
          EPOS: 'maria.ivanova@example.com',
          MOBIL: '+380987654321',
          AVDELNING: 'HR',
          STATUS: 'Неактивний',
        },
        // Додаткові працівники
      ];
      setEmployees(fetchedEmployees);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="App">
      <h1>Employee Dashboard</h1>
      
      {/* Виведення таблиці працівників */}
      <EmployeeTable employees={employees} />

      {/* Виведення скріншота або іншого контенту */}
      <ScreenshotDisplay />

    </div>
  );
};

export default App;