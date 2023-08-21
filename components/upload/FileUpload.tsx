import React, { ReactNode, useRef } from "react";
import style from "./FileUpload.module.css";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFiles = e.target.files;

      if (selectedFiles !== null && selectedFiles.length > 0) {
        setFile(selectedFiles[0]);
      } else {
        console.log("No files selected.");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        className={style.file}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
