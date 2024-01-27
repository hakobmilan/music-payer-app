import React, { useState,useRef } from 'react';
import styles from "./MusicUploadForm.module.css"
import { BounceLoader } from 'react-spinners';

const MusicUploadForm = ({setData}) => {

  /// States, using useRef for getting input values

  const [selectedFile, setSelectedFile] = useState(null);
  const [rightType, setRightType] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputName = useRef();
  const inputArtist = useRef();
  const inputRef = useRef();

  ///handling upload click button, sending music to the list

  function handleUploadClick () {
    setLoading(true)
    if(inputName.current.value !== "" && inputArtist.current.value !== "" && selectedFile ) {
      setTimeout(() => {
        setLoading(false);
        setData(prev => [...prev,{ isPlaying: false,
          name: inputName.current.value,
          artist:inputArtist.current.value,
          trackNum: prev[prev.length-1].trackNum +1,
          songduration: Math.round(Math.random()*8000)}]);
      }, 2000);
    
        setRightType(false)
       }
       else {
        setRightType(true)
        setLoading(false)
       }
 
      
  }
  /// handling upload input changes, acepting only mp3 or wav extention files

  const handleFileChange = (event) => {
    console.log(inputRef.current.value)
    const file = event.target.files[0];
    const fileName = inputRef.current.value
    if (file) {
      const fileType = file.type;
      console.log("FILE TYPE", fileType)
      console.log(file.name)
      const validFileTypes = ['.mp3', '.wav'];

      if (fileName.includes(validFileTypes[0]) || fileName.includes(validFileTypes[1]) ) {
      
        setSelectedFile(file);
      } else {
        setRightType(true)
        console.error('Invalid file type. Please select a .mp3 or .wav file.');
      }
    }
  };

  return (
    <div className= {styles.uploadcontainer}>
        <h3 className={styles.headdiv}>Upload music</h3>
      <form>
        <label htmlFor="name">Song Name</label>
        <input type="text"  ref = {inputName} className={styles.inputfield} placeholder="Song name" />

        <label htmlFor="email">Artist Name</label>
        <input type="text"  ref = {inputArtist}  className={styles.inputfield} placeholder="Artist Name" />

        <label htmlFor="fileInput">Select .mp3 or .wav file</label>
        <div className={styles.inputwrapper}>
          <input
            ref = {inputRef}
            type="file"
            id="fileInput"
            onChange={handleFileChange}
          />
           {selectedFile && (
          <p className={styles.selectedfile}> {selectedFile.name}</p>
        )}
          
          <button disabled ={selectedFile? false: true} onClick={handleUploadClick} type="button" role='button' className={styles.uploadbutton}>
            Upload
          </button>
          <BounceLoader color="#D0C1C1" loading={loading} size ={30} className={styles.spinner}/>
          {rightType? <div style={{color:"red", fontSize:"12px"}}>Please fill all the fields and(or) upload right type file</div> : null}
         
        </div>
        
      
      </form>
    </div>
  );
};

export default MusicUploadForm;