import { ArrowRightCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-start justify-center flex items-center p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 flex items-center"
        style={{ minWidth: 350 }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter something..."
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white"
        >
            <ArrowRightCircle className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
