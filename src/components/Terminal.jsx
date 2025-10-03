import { useState } from "react";
import './Terminal.css';

export default function Terminal(props) {
  const [lines, setLines] = useState([props.welcomeMsg]);
  const [input, setInput] = useState("");

  const handleCommand = (cmd) => {
    let output = "";

    switch (cmd.toLowerCase()) {
      case "help":
        output = "Try doing ls to list all directories";
    }

    setLines([...lines, `>>${cmd}`, output]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleCommand(input.trim());
      setInput('');
    }
  };


  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">{line}</div>
        ))}
        <form onSubmit={handleSubmit}>
          <span className="prompt">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
