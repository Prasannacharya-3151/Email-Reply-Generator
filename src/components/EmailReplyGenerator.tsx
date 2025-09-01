import React, { useState } from "react";

const EmailReplyGenerator: React.FC = () => {
    const [emailContent, setEmailContent] = useState<string>("");
    const [tone, setTone] = useState<string>("");
    const [replay, setReplay] = useState<string>("");

    const handleGenerate = async () => {
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
    </div>
  );
};

export default EmailReplyGenerator;
