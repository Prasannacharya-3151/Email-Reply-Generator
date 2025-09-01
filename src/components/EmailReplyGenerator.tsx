import React, { useState } from "react";

const EmailReplyGenerator: React.FC = () => {
    const [emailContent, setEmailContent] = useState<string>("");
    const [tone, setTone] = useState<string>("");
    const [replay, setReplay] = useState<string>("");

    const handleGenerator = async () => {
        if(!emailContent) {
            alert("Please enter email content");
            return;
        }
 const generator = `Hey, Hi I am Prasann Acharya What Can I help u bruh!!....`;
       
        setReplay(generator);
    }

const handleCopy = ()=>{
    if(replay){
        navigator.clipboard.writeText(replay);
        alert("Copied to clipboard");
    }
}

  return (
    <div
  className="min-h-screen py-40 items-center justify-center bg-cover bg-center "
  style={{ backgroundImage: "url('https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?_gl=1*1tkorog*_ga*NzA2MjIwNDMwLjE3NDc3MTI4NTI.*_ga_8JE65Q40S6*czE3NTY3MzU5NzckbzYkZzEkdDE3NTY3MzYwODckajM3JGwwJGgw')" }}
>
    <div className="max-w-2xl mx-auto p-6  shadow-lg rounded-2xl space-y-5">
        <h1 className="text-3xl font-bold mb-4">Email Reply Generator</h1>
        <div>
            <label className="block mb-2 font-medium">Original Email Content</label>
            <textarea className="w-full border rounded-lg p-3 h-28 focus:ring focus:ouline-none"
            placeholder="Enter the origin email content here bruh!!...."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            />
        </div>

        <div>
            <label className="block mb-2 font-medium">Tone (optional)</label>
            <select className="w-full border rounded-lg p-3"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            >
                <option value="Casual">Casual</option>
                <option value="Formal">Formal</option>
                <option value="Friendly">Friendly</option>
                <option value="Proffesion">Proffesion</option>
            </select>
        </div>
        <button 
        onClick={handleGenerator}

        className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
            Generate Reply
        </button>

        {replay && (
            <div className="border rounded-lg p-4">
                <h2 className="font-semibold mb-2">Generated Reply</h2>
                <textarea
                readOnly
                className="w-full border ronded-lg p-3 h-32 focus:ring focus:outline-none"
                value={replay}
                />

                <button
                onClick={handleCopy}
                className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                    Copy to Clipboard
                </button>
       
    </div>
  )}
  </div>
</div>
  );
};

export default EmailReplyGenerator;
