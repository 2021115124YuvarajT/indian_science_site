import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./discussion.css"
import Discussion_table from './Discussion_table';

const Discussion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [doubts, setDoubts] = useState('');
  const [successMessage, setSuccessMessage] = useState('Send ur doubts here');
  const [discussions, setDiscussions] = useState([]); 
  
  async function submit(e){
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/discussion', { email, doubts })
      .then(res=>{
        if(res.data == "done"){
          setSuccessMessage("doubts submitted successfully!");
          setEmail(''); 
          setDoubts('');
        }
    })
  } 
  catch(e){
    console.log(e);
  }
};

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
    <div className="login">
    <h1 className="ttile">Ask Your Doubts here</h1>
    <p style={{'color':'blue'}}>{successMessage}</p>
    <form action="POST">
      <label>Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        required
      />
      <label>doubts:</label>
      <textarea rows="7" cols = "60"
        id="message"
        name="message"
        onChange={(e) => setDoubts(e.target.value)}
        required
      />
      
      <input type="submit" value="Submit your doubt" onClick={submit} />
    </form>
    <br />
    <p>Want to see some other commonly asked doubts ? </p>
    <button onClick={fetchDiscussions} className="signup-button">
      Commonly asked doubts
    </button>
    </div>
    <button style={{'border-radius':'60px','margin-left':'40%'}}onClick ={()=>navigate('/Homepg')}>Return back to Home page</button>
    <Discussion_table discussions= {discussions} />
  </div>
  );
};

export default Discussion;

