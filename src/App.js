import { useEffect, useRef, useState } from 'react';
import './App.css';
import SongList from './components/SongList';
import PlayAllButton from './components/PlayAllButton';
import AddAllButton from './components/AddAllButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import SearchComponent from './components/SearchComponent';
import MusicUploadForm from './components/MusicUploadForm';
import Header from './components/Header';

function App() {

 /////////////// STATE 

const [currentSong, setCurrentSong] = useState(0);
const [isPlayAll, setIsPlayAll] = useState(false)
const [addAllClicked, setAddAllClicked] = useState(false)
const clearTimerRef = useRef();
const clearTimer = useRef();

console.log("CURR SONG", currentSong)


const [data,setData] = useState([{
  isPlaying: false,
  name: "Halo",
  artist:"Blackbird Blackbird",
  trackNum: 1,
  songduration: 3000
},
{
  isPlaying: false,
  name: "Cry ends",
  artist:"Mr. Entusiastic",
  trackNum: 2,
  songduration: 4000
},
{
  isPlaying: false,
  name: "Far and more",
  artist:"Karen Store",
  trackNum: 3,
  songduration: 5000
},
])

console.log(data)
/////////////// Effects and Functions

useEffect(() => {
      if(currentSong === 0) {
      setData(prevData => {return prevData.map(data => {
        return {...data, isPlaying:false}
        })});
      return;
      }
        let prevData = data;
        let newData = prevData.map(data => {
          if(data.trackNum === currentSong) {
            return {...data, isPlaying:true}
          }
          else {
            return {...data, isPlaying:false}
          }
        })
        setData(newData)
}, [currentSong])

//// Handle play click on individual song

function handlePlayClick(trnum) {
  setCurrentSong(trnum)
  let prevData = data;
  let newData = prevData.map(data => {
    if(data.trackNum === trnum) {
      if(data.isPlaying === true) {
        setCurrentSong(0);
        setIsPlayAll(false)
        setAddAllClicked(false)
        clearTimeout(clearTimerRef.current)
        clearTimeout(clearTimer.current)
      }
      else {
        setCurrentSong(data.trackNum)
      }
    
        return {...data,isPlaying: !data.isPlaying}
    }
    else {
      return {...data, isPlaying: false}
    }
  });
  setData(newData)
}

////////////// Handle Click to Play All button

function handeClickAllButton() {
    console.log("Play All button clicked")
    setIsPlayAll(prev => !prev)
    if(isPlayAll === true) {
      clearTimeout(clearTimerRef.current)
      setCurrentSong(0)
      setData(prevData => {return prevData.map(data => {
        return {...data, isPlaying:false}
    })})
      return;
    }
    else {
      const renderAllPlayDelay = (index) => {
        if (data[index] === undefined) {
          setCurrentSong(0);
          setIsPlayAll(false)
          return;
        }
        
      setCurrentSong(index+1)
      clearTimerRef.current =  setTimeout(() => {
          renderAllPlayDelay(index+1)
        }, data[index]?.songduration);
      };

        renderAllPlayDelay(0);
    
      console.log(currentSong)
    }
  
}

////////////// Handle Click to Add All button 

 function handeClickAddButton() {
  console.log("Add All button clicked")
  setAddAllClicked(prev => !prev)
  if(addAllClicked === true) {
    clearTimeout(clearTimer.current)
    setCurrentSong(0)
    setData(prevData => {return prevData.map(data => {
      return {...data, isPlaying:false}
  })})
    return;
  }

  else {
    const renderAllPlayDelay = (index) => {
          if (data[index] === undefined) {
            setCurrentSong(0);
            setAddAllClicked(false)
            return;
          }
          clearTimer.current =  setTimeout(() => {
            renderAllPlayDelay(index+1)
          }, data[index]?.songduration);
          setCurrentSong(index+1)
        };

    
    if(currentSong === 0) {
      renderAllPlayDelay(0)
    }
    else {
      renderAllPlayDelay(currentSong-1)
    }
    
  }
}
  return (
    <>
      <Header setIsPlayAll = {setIsPlayAll} isPlayAll ={isPlayAll} handeClickAllButton={handeClickAllButton} handeClickAddButton = {handeClickAddButton} addAllClicked ={addAllClicked} />
      {/* <div className='header'> 
      <div className='div1'>
        <PlayAllButton setIsPlayAll ={setIsPlayAll} isPlayAll={isPlayAll} handeClickAllButton ={handeClickAllButton} />
        <AddAllButton addAllClicked = {addAllClicked} handeClickAddButton = {handeClickAddButton} />
      </div>
      <div className='div2'>
        <button className='trbutton'> <FontAwesomeIcon icon={faArrowsUpDown} className='icon' /> Track Nu... <FontAwesomeIcon icon={faCaretDown} className='icon' /></button>
        <SearchComponent />
      </div>
      </div> */}
        <div className="container">
          <div className="part" style={{ width: '5%' }}>
        
          </div>
          <div className="part" style={{ width: '30%' }}>
            Song Name
          </div>
          <div className="part" style={{ width: '30%' }}>
            Artist Name
          </div>
          <div className="part" style={{ width: '13%' }}>
            Track
          </div>
          <div className="part" style={{ width: '15%' }}>
        </div>
      </div>
      <SongList handlePlayClick = {handlePlayClick} data = {data} />
      <MusicUploadForm setData = {setData} />
      
    </>
  );
}

export default App;
