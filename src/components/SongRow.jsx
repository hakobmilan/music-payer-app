import React from 'react'
import styles from './SongRow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCheck,faTurnDown, faPlay, faMusic, faCaretDown,faPause} from '@fortawesome/free-solid-svg-icons'


function SongRow({song, handlePlayClick}) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.part} style={{ width: '5%' }}>
        <div> <FontAwesomeIcon className={styles.iconfront} icon={faMusic} /></div>
        <div><FontAwesomeIcon
        icon={song.isPlaying ? faPause : faPlay}
        className= {styles.iconfrontplay}
         onClick={() => handlePlayClick(song.trackNum)}
      /> </div>
      </div>
      <div className={styles.part} style={{ width: '30%' }}>
        {song.name}
      </div>
      <div className={styles.part} style={{ width: '30%' }}>
        {song.artist}
      </div>
      <div className={styles.part} style={{ width: '13%' }}>
       {song.trackNum}
      </div>
      <div className={styles.part} style={{ width: '15%' }}>
      <FontAwesomeIcon className={styles.icon} icon={faHeart} />
      <FontAwesomeIcon className = {styles.iconcheck} icon={faCheck} />
      <FontAwesomeIcon className={styles.arrow} icon={faTurnDown} />
      <FontAwesomeIcon className={styles.iconlast} icon={faCaretDown} />
      </div>
      </div>
    </>
  )
}

export default SongRow