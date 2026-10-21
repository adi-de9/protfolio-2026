import React, { useEffect, useRef, useState } from "react";

const TerminalContent: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Microsoft Windows [Version 10.0.19045.4208]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "C:\\Users\\Developer> help",
    "Available commands:",
    "  about       - Display information about the developer",
    "  projects    - List portfolio projects",
    "  resume      - View resume details",
    "  github      - Open GitHub profile",
    "  linkedin    - Open LinkedIn profile",
    "  socials     - List all social links",
    "  cls         - Clear the terminal screen",
    "  whoami      - Current user info",
    "",
    "C:\\Users\\Developer>_",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  // Focus input on click
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const newOutput = [...output.slice(0, -1), `C:\\Users\\Developer> ${cmd}`]; // Replace the placeholder prompt
    const lowerCmd = cmd.toLowerCase().trim();

    switch (lowerCmd) {
      case "help":
        newOutput.push(
          "Available commands:",
          "  about       - Display information about the developer",
          "  projects    - List portfolio projects",
          "  resume      - View resume details",
          "  github      - Open GitHub profile",
          "  linkedin    - Open LinkedIn profile",
          "  socials     - List all social links",
          "  cls         - Clear the terminal screen",
          "  whoami      - Current user info"
        );
        break;
      case "about":
        newOutput.push(
          "Name: Aditya Deshmukh",
          "Role: Frontend Developer",
          "Stack: React, Next.js, TypeScript, Tailwind, MongoDB",
          "Mission: Building accessible and performant web applications."
        );
        break;
      case "whoami":
        newOutput.push("developer\\admin");
        break;
      case "projects":
        newOutput.push(
          "1. E-Commerce Dash [React, Redux]",
          "2. Chat Application [Socket.io, Node]",
          "3. Task Manager [TypeScript, Firebase]",
          "4. Weather Analytics [D3.js, API]"
        );
        break;
      case "resume":
        newOutput.push("Opening resume.pdf...");
        // In a real app, this might open the PDF window or link
        break;
      case "github":
        window.open("https://github.com/adi-de9", "_blank");
        newOutput.push("Opening GitHub...");
        break;
      case "linkedin":
        window.open("https://linkedin.com/adi-de9", "_blank");
        newOutput.push("Opening LinkedIn...");
        break;
      case "socials":
        newOutput.push(
          "GitHub: https://github.com/adi-de9",
          "LinkedIn: https://linkedin.com/adi-de9",
        );
        break;
      case "cls":
      case "clear":
        setOutput(["C:\\Users\\Developer>_"]); // Reset logic
        setInput("");
        return;
      default:
        if (cmd.trim() !== "") {
          newOutput.push(
            `'${cmd}' is not recognized as an internal or external command,`,
            "operable program or batch file."
          );
        }
    }
    newOutput.push("", "C:\\Users\\Developer>_"); // Add new prompt
    setOutput(newOutput);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div
      className="h-full bg-black text-gray-200 font-mono p-4 text-sm overflow-y-auto cursor-text"
      onClick={handleContainerClick}
    >
      {output.slice(0, -1).map((line, i) => (
        <div
          key={i}
          className="whitespace-pre-wrap wrap-words mb-0.5 min-h-[1.2em]"
        >
          {line}
        </div>
      ))}

      <div className="flex items-center">
        <span className="text-gray-200 mr-2">C:\Users\Developer&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-gray-200 font-mono p-0"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div ref={outputEndRef} />
    </div>
  );
};

export default TerminalContent;
