import { useRef } from "react";
// import "./styles.css";
import { FC } from "react";
import cloudUpload from '../assets/Cloud Upload.svg'
import Image from "next/image";


interface uploaderProps{
    handleFile:()=>void
}

export const FileUploader:FC<uploaderProps> = ({ handleFile }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event:any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <>
      <button className="button-upload" onClick={handleClick}>
        <Image src={cloudUpload} alt=""/>
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </>
  );
};

// export default FileUploader