import "./Upload.css"
import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import TopWitnessesBar from "../TopWitnesses/TopWitnesses";



const Upload=()=>{
    let navigate=useNavigate();
    const onDrop = useCallback(acceptedFiles => {
        // add the loading page here
        navigate("/preview");
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <div>
        <div className="uploadGrid" {...getRootProps()}>
            <p className="uploadAVideoWord">Upload a video</p>
            <div className="uploadPicture"></div>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p className="uploadHint" id="uploadActive">Drop the files here ...</p> :
              <p className="uploadHint">Drag & drop file you want to upload</p>
          }
          <button className="browseButton">Browse</button>
        </div>
        <div><TopWitnessesBar/></div>
        </div>
      )

}

export default Upload;