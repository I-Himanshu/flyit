"use client";
import { handleSubmit, getNotes } from "@/lib/formFunctions";
import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
type Props = {
  ip: string;
};

export default function ShareForm({ ip }: Props) {
  const [notes, setNotes] = React.useState("");
  const [textAreaval, setTextAreaval] = useState("");
  // UseRef to ref textarea
  // const textarea = React.createRef<HTMLTextAreaElement>();

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = async () => {
      const Notes = await getNotes(ip);
      setNotes(Notes);
      setTextAreaval(Notes);
      console.log(Notes);
    };
    unsubscribe();
  }, [loading,ip]);


  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <form action={handleSubmit} className="bg-slate-500 w-8/12 p-3">
      <input type="hidden" value={ip} name="ip" />
      <textarea
        name="notes"
        className="w-full min-h-[300px] p-3"
        defaultValue={notes}
        value={textAreaval}
        onChange={(e) => {
          setTextAreaval(e.target.value);
        }}
        // ref={textarea as RefObject<HTMLTextAreaElement>}
      ></textarea>
      <div className="buttons flex items-center justify-center gap-3">
        <button
          type="submit"
          name="submit"
          value={"update"}
          className="bg-red-500 rounded-lg py-2 px-5 text-white bold text-lg hover:scale-90 hover:bg-red-500 disabled:bg-red-200"
          disabled={textAreaval == notes}
        >
          Save
        </button>
        <button
          type="button"
          className="bg-red-500 rounded-lg py-2 px-3 text-white bold text-lg  hover:scale-95"
          onClick={() => {
            loading ? setLoading(false) : setLoading(true);
          }}
        >
          Refresh
        </button>
      </div>
    </form>
  );
}
