import { useState, useRef } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';
import './styles/app.scss';

function App() {
  // Ref
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  // event handler
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate percentage
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercent = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage: animationPercent,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setcurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play();
  }

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((state) => {
        if (state.id === nextPrev.id) {
          return {
            ...state,
            active: true,
          };
        } else {
          return {
            ...state,
            active: false,
          };
        }
      });
      setSongs(newSongs);
  }
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setcurrentSong={setcurrentSong}
        setSongs={setSongs}
        activeLibraryHandler={activeLibraryHandler}
      />
      <Library
        songs={songs}
        setcurrentSong={setcurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
