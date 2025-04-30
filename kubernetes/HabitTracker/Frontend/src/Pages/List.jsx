import React from "react";
import { useState, useEffect } from "react";
import {API_ENDPOINT} from "../Constant.js";

function List() {
  const [thoughts, setThoughts] = useState([]);
  useEffect(() => {
    const fetchThoughts = async () => {
      const response = await fetch(`${API_ENDPOINT}/get-thoughts`);
      const data = await response.json();
      setThoughts(data);
    };
    fetchThoughts();
  }, []);

  return (
    <div className="overflow-y-scroll h-52 p-1">
      {thoughts.map((data, index) => (
        <>
          <div
            key={index}
            className="mt-2 bg-white p-3 border-l-4 border-slate-300"
          >
            <span>{data.text}</span>
            <div className="text-sm bg-slate-200 w-52 rounded-lg p-1 mt-2">
              <span>{new Date(data.createdAt).toLocaleString()}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default List;
