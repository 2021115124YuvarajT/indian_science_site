import React, { useState } from 'react';
import axios from 'axios';

export const Chat = (props) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [apiAnswer, setApiAnswer] = useState('');

  const handleButtonClick = () => {
    axios({
      url: "https://api.openai.com/v1/chat/completions",
      method: "POST",
      headers: {
        Authorization: "Bearer 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",
        ContentType: "application/json"
      },
      data: {
        model: "gpt-3.5-turbo-0301",
        messages: [{
          "role": "system",
          "content": userQuestion
        }],
        temperature: 0.7
      }
    }).then((res) => {
      setApiAnswer(JSON.parse(res.data.choices[0].message.content));
    }).catch((err) => {
      console.log("Error in gpt api ", err)
    });
  };

  return (
    <div>
      <input
        type="text"
        value={userQuestion}
        onChange={(e) => setUserQuestion(e.target.value)}
      />
      <button onClick={handleButtonClick}>Submit</button>
      <p>Answer: {apiAnswer}</p>
    </div>
  );
};
