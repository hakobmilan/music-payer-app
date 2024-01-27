import React from 'react'
import SongRow from './SongRow';

function SongList({data, handlePlayClick}) {
  return (
   <>
     {data.map(song => {
        return  <SongRow key={song.trackNum} handlePlayClick= {handlePlayClick} song = {song} /> 
     })}
   </>
  )
}

export default SongList