import axios from "axios";
import React, { useEffect, useState } from "react";

type Talk = {
  id: number;
  title: string;
  description: string;
};

export const Main = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const main = async () => {
      const result = await axios.get(`${process.env.API_URL}/talks`);
      setTalks(result.data);
    };
    main();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-yellow-500 p-2 text-slate-50 font-semibold text-2xl">
        Southwest JS
      </div>

      <div className="p-2 bg-slate-200 flex-grow">
        <div className="flex space-x-2 items-center mb-4">
          <div>Title</div>
          <input
            className="rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <div>Description</div>
          <input
            className="rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <button
            className="rounded bg-emerald-500 text-slate-50 p-2"
            onClick={async () => {
              const talk = await axios.post(`${process.env.API_URL}/talks`, {
                title,
                description,
              });
              setTalks((prev) => [...prev, talk.data]);
              setTitle("");
              setDescription("");
            }}
          >
            Add Talk
          </button>
        </div>

        <div className="space-y-2">
          {talks.map((x) => (
            <div key={x.id} className="rounded bg-slate-50 p-2">
              <div className="font-semibold text-xl">{x.title}</div>
              <div>{x.description}</div>
              <div className="italic text-slate-500">
                {new Date().toLocaleDateString("en-GB")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
