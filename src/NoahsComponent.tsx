import { useState } from 'react';

function NoahsTruths() {
  const [revealed, setRevealed] = useState(false);
  const truthsAndLie = [
    "I am a software developer",
    "I can play music.",
    "I do magic."
  ];

  const revealAllStatements = () => {
    setRevealed(true);
  };

  return (
    <div>
      <img
        src="src/pup-and-i.jpg"
        width="200"
        height="200"
        alt="Noah Cranson"
      />
      <h2>Noah Cranson</h2>
      {truthsAndLie.map((statement, index) => (
        <div key={index}>
          <p>
            {revealed ? (
              <span style={{ color: index === 1 ? 'red' : 'blue' }}>
                {index === 1 ? 'Lie' : 'Truth'}: 
              </span>
            ) : ''}
            {statement}
          </p>
        </div>
      ))}
      {!revealed && (
        <button onClick={revealAllStatements}>
          Reveal
        </button>
      )}
    </div>
  );
}

export default NoahsTruths;
