import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import { ArrowDownToLine } from "lucide-react";
// import "react-awesome-button/dist/themes/theme-blue.css";
import "../Home/styles2.css";

const KnowMe = () => {
  const [buttonText, setButtonText] = useState("Download");

  const handleClick = async () => {
    try {
      setButtonText("Downloading...");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setButtonText("Downloaded");
      setTimeout(() => {
        setButtonText("Download");
      }, 2000);
    } catch (error) {
      console.log("Error: ", error);
      setButtonText("Download");
    }
  };

  useEffect(() => {
    if (buttonText === "Downloaded") {
      const downloadFile = async () => {
        try {
          const response = await fetch(
            `${process.env.PUBLIC_URL}/Asset/Files/SRI_RAKESH_V_Resume.pdf`
          );
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "SRI_RAKESH_V_Resume.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } catch (error) {
          console.log("Error downloading file: ", error);
        }
      };
      downloadFile();
    }
  }, [buttonText]);

  return (
    <div
      className="flex justify-center items-center font-k2d"
      style={{ minHeight: "30vh" }}
    >
      <div className="max-w-6xl flex flex-col items-center gap-5">
        <p className="text-3xl font-semibold">Know About me</p>
        <div>
          <AwesomeButton
            type="primary"
            className="aws-btn2"
            after={buttonText === "Download" ? <ArrowDownToLine /> : ""}
            onPress={handleClick}
          >
            {buttonText}
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default KnowMe;
