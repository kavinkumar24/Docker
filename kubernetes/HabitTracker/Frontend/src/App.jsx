import React from "react";
import Form from "./Pages/Form";
import List from "./Pages/List";

function App() {
  return (
    <div className="m-10 bg-[#b2ccd3] rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center">Thoughts Poster</h1>
      <br></br>
      <div className="p-4 md:p-6 bg-[#eaf7fb] rounded-lg shadow-md mb-10 w-full mx-auto grid md:grid-cols-3 gap-4 grid-cols-1">
        <div className="form-container col-span-1">
          <Form />
        </div>
        <div className="list-container col-span-2">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
