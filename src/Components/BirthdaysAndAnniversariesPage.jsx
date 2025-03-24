import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Badge } from 'primereact/badge';
import axios from 'axios';

const BirthdaysAndAnniversariesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/all`);
        setEmployees(response.data.users);
      } catch (err) {
        setError("Error loading employee data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, [apiUrl]);

  // Group events by date
  const groupByDate = (employees) => {
    const grouped = {};

    employees.forEach((employee) => {
      const birthday = employee.dateOfBirth ? new Date(employee.dateOfBirth) : null;
      const anniversary = employee.dateOfJoining ? new Date(employee.dateOfJoining) : null;

      if (birthday) {
        const birthdayKey = format(birthday, 'dd MMM');
        if (!grouped[birthdayKey]) grouped[birthdayKey] = [];
        grouped[birthdayKey].push({ type: 'Birthday', name: employee.fullName });
      }

      if (anniversary) {
        const anniversaryKey = format(anniversary, 'dd MMM');
        if (!grouped[anniversaryKey]) grouped[anniversaryKey] = [];
        grouped[anniversaryKey].push({
          type: 'Anniversary',
          name: employee.fullName,
          years: new Date().getFullYear() - anniversary.getFullYear(),
        });
      }
    });

    return grouped;
  };

  // Sort and display events
  const groupedEvents = groupByDate(employees);
  const sortedEvents = Object.entries(groupedEvents).sort(
    (a, b) => new Date(`01 ${a[0]}`) - new Date(`01 ${b[0]}`)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="px-1 py-2 -ml-0.5">
      <h1 className="text-3xl font-semibold mb-8 text-center">Birthdays and Anniversaries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 ">
        {sortedEvents.map(([date, events]) => (
          <div key={date} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-96 max-h-96 overflow-y-auto">
            <p className="text-xl font-semibold mb-4 text-center">{date}</p>
            <div>
              {events.map((event) => (
                <div key={`${date}-${event.type}-${event.name}`} className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">{event.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge
                      value={event.type}
                      severity={event.type === 'Birthday' ? 'success' : 'warning'}
                    />
                    {event.type === 'Anniversary' && (
                      <Badge
                        value={`${event.years} Year${event.years !== 1 ? 's' : ''}`}
                        severity="info"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdaysAndAnniversariesPage;
