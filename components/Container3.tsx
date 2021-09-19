import React, { useState } from "react";

export const Container3: React.FC = () => {
  const [userMsg, setUserMsg] = useState("");
  const [form, setFormValue] = useState("");

  const getUserMsg = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { form };
    const response = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const parseRes = await response.json();
    setUserMsg(parseRes.msg);
    setFormValue("");
  };

  return (
    <div className="min-h-screen  grid md:grid-rows-1 md:grid-cols-12 grid-rows-3  justify-items-center items-center">
      <div className=" col-span-12 md:col-span-4"> 1st item</div>
      <div className="col-span-12 md:col-span-4"> 2nd item</div>
      <div className="col-span-12 md:col-span-4 justify-items-center items-center">
        <div>
          <form onSubmit={getUserMsg}>
            <input
              type="text"
              id="usermsg"
              placeholder="Enter name"
              value={form}
              onChange={(e) => setFormValue(e.currentTarget.value)}
              className="rounded-md bg-white p-5 outline-none border-red-500 border-2"
            />
            <button type="submit" className="bg-red-500 p-5 rounded-xl">
              Submit
            </button>
          </form>
          <div>{userMsg}</div>
        </div>
      </div>
    </div>
  );
};
