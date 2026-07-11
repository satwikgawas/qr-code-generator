import { useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

function App() {
  const [text, setText] = useState("");
  const downloadQR = () => {
    toPng(document.getElementById("qr")).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "QRCode.png";
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h1 className="text-3xl font-bold text-center">QR Code Generator</h1>
          <input
            type="text"
            placeholder="Enter Text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border w-full p-3 rounded-lg mb-5"
          />
          <div className="flex justify-center" id="qr">
            {text && <QRCode value={text} size={200} />}
          </div>
          <button
            onClick={downloadQR}
            className="bg-green-600 text-white p-3 rounded-lg mt-4 w-full"
          >
            Download QR
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
