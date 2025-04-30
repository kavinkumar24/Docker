import React from "react";
import { useState } from "react";
import axios from "axios";
import {API_ENDPOINT} from "../Constant.js";

function Form() {  
  const [value, setValue] = useState("");
  const handleSubmit = async () => {
    if (value.trim() === "") return;
    try {
      await axios.post(`${API_ENDPOINT}/post-thought`, { text: value });
      console.log("Thought posted!");
      setValue("");
    } catch (err) {
      console.error("Error posting thought:", err.message);
    }
  };
  
  return (
    <div>
      <div className="p-10 bg-white rounded-lg shadow-none mb-10 w-full mt-2">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:border-[#eafe63]"
            placeholder="Enter thought"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#eafe63] text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-[#b2ccd3] transition duration-300 ease-in-out w-full"
          >
            Add Thought
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
