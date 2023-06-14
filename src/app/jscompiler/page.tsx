"use client";
import { useState, ChangeEvent } from "react";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState(`console.log('Hello, world!');`);
  const [output, setOutput] = useState("Hello, world!");

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  const handleRunClick = () => {
    // Perform syntax validation
    try {
      Function('"use strict";\n' + code);
      console.log("Syntax is valid!");
    } catch (error) {
      setOutput("Syntax Error: " + error);
      return;
    }

    // Perform code execution
    try {
      const consoleLogs: any[] = [];
      console.log = (...args: any[]) => {
        consoleLogs.push(args);
      };

      eval(code);

      setOutput(consoleLogs.map((log) => log.join(" ")).join("\n"));
    } catch (error) {
      setOutput("Execution Error: " + error);
    }
  };

  return (
    <div className="code-editor">
      <h3>Js Code compiler </h3>
      <div className="editor-container">
        <textarea
          className="code-input"
          value={code}
          onChange={handleCodeChange}
        ></textarea>
        <button className="run-button" onClick={handleRunClick}>
          Run
        </button>
      </div>
      <h2>Output:</h2>
      <pre className="output">{output}</pre>

      <style jsx>{`
        .code-editor {
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .editor-container {
          display: flex;
          margin-bottom: 10px;
        }

        .code-input {
          flex: 1;
          min-height: 500px;
          padding: 10px;
          font-family: monospace;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .run-button {
          padding: 10px 20px;
          margin-left: 10px;
          background-color: #4285f4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          height: 50px;
        }

        .output {
          background-color: #fff;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          white-space: pre-wrap;
          font-family: monospace;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;
