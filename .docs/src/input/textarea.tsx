/*
 * @Date: 2024-08-03 08:17:36
 * @Description: Modify here please
 */
import { Input } from "camelia";
import React, { useState } from "react";

const { TextArea } = Input;

const App: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="mb-4">
        <TextArea value={value} placeholder="基本的 textarea" onChange={(v) => setValue(v)} />
      </div>
    </>
  );
};

export default App;
