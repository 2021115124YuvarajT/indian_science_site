import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Discussion_table = () => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const fetchDiscussions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/discussion');
      setDiscussions(response.data.discussions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Discussions</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Doubts</th>
          </tr>
        </thead>
        <tbody>
          {discussions.map((discussion) => (
            <tr key={discussion._id}>
              <td>{discussion.email}</td>
              <td>{discussion.doubts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discussion_table;
