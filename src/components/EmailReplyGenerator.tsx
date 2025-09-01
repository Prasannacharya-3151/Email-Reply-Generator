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

        const generator = `Hey John, \n\nthis is a {$tone.toLowerCase()} replay to your Email:\n"${emailContent}"\n\nLooking forward to hearing from you! `;
        setReplay(generator);
    }

const handleCopy = ()=>{
    if(replay){
        navigator.clipboard.writeText(replay);
        alert("Copied to clipboard");
    }
}

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-5">
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
                <option value="Formal">Casual</option>
                <option value="Friendly">Casual</option>
                <option value="Proffesion">Casual</option>
            </select>
        </div>
        <button 
        onClick={handleGenerator}

        className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
            Generate Reply
        </button>

        {replay && (
            <div className="border rounded-lg p-4 bg-gray-50">
                <h2 className="font-semibold mb-2">Generated Reply</h2>
                <textarea
                readOnly
                className="w-full border ronded-lg p-3 h-32 bg-gray-100"
                value={replay}
                />

                <button
        )}
    </div>
  );
};

export default EmailReplyGenerator;
