import React from 'react';

interface FileUploadProps {
    file: any;
    setFile: Function
    accept: string
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile, accept }) => {
    return (
        <div>
            <input type="file" accept={accept} />
        </div>
    );
};

export default FileUpload;