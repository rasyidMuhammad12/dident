import React, { useRef, useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import Navbar from "../Components/Navbar";

const runOCR = async (file) => {
  const { data } = await Tesseract.recognize(file, "eng");
  return data.text;
};

const hashString = async (text) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

const Verify = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [idCard, setIdCard] = useState(null);
  const [faceCaptured, setFaceCaptured] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [ocrResult, setOcrResult] = useState("");
  const [hashedOcr, setHashedOcr] = useState("");

  useEffect(() => {
    if (cameraOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Webcam error:", err));
    } else {
      const stream = videoRef.current?.srcObject;
      stream?.getTracks().forEach((track) => track.stop());
    }
  }, [cameraOn]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIdCard(file);
      setCameraOn(true);

      const ocrText = await runOCR(file);
      setOcrResult(ocrText);

      const hashed = await hashString(ocrText);
      setHashedOcr(hashed);

      console.log("OCR Result:", ocrText);
      console.log("Hashed OCR:", hashed);
    }
  };

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataUrl = canvas.toDataURL("image/png");
    setFaceCaptured(dataUrl);
    setCameraOn(false);
  };

  const handleSubmit = async () => {
    const payload = {
      id_hash: hashedOcr,
      face_image: faceCaptured,
    };

    console.log("Payload sent to backend:", payload);

    // Example fetch request
    // await fetch("/api/verify", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 text-center min-h-[calc(100vh-80px)] pt-10">
        <div className="z-10 max-w-xl w-full">
          <p className="text-sm text-black font-medium mb-2">Easy and Fast Process</p>
          <h1 className="text-4xl md:text-7xl  mb-4">
            Start your <span className="text-blue-500">identity verification</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Upload your ID card first, then verify your face using your webcam.
          </p>

          {/* Upload ID Card */}
          <div className="mb-6 text-center">
            <label className="inline-block cursor-pointer bg-black text-white px-6 py-3 rounded-lg font-medium  transition">
              Upload Your ID Card
              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>
            {idCard && (
              <p className="mt-2 text-sm text-gray-700">
                Uploaded: <span className="font-medium">{idCard.name}</span>
              </p>
            )}
          </div>

          {/* Webcam Preview */}
          {idCard && (
            <div className="mb-6 flex justify-center">
              {!faceCaptured ? (
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
                  <video ref={videoRef} autoPlay playsInline className="object-cover w-full h-full" />
                </div>
              ) : (
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
                  <img src={faceCaptured} alt="Captured" className="object-cover w-full h-full" />
                </div>
              )}
            </div>
          )}

          {/* Capture or Retake */}
          {idCard && (
            <div>
              {!faceCaptured ? (
                <button
                  onClick={handleCapture}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Capture Face
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFaceCaptured(null);
                    setCameraOn(true);
                  }}
                  className="text-red-500 font-medium hover:underline"
                >
                  Retake
                </button>
              )}
            </div>
          )}

          {/* Submit Button */}
          {idCard && faceCaptured && (
            <button
              onClick={handleSubmit}
              className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Start Verification
            </button>
          )}

          {/* Hidden Canvas */}
          <canvas ref={canvasRef} width="320" height="240" className="hidden" />

          {/* OCR Preview (optional) */}
          {ocrResult && (
            <div className="mt-6 text-left text-sm text-gray-600 bg-gray-100 p-4 rounded-lg">
              <p className="mb-1 font-medium">Extracted OCR Text:</p>
              <pre className="whitespace-pre-wrap break-words">{ocrResult}</pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Verify;
