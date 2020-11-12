import LibrarySong from './LibrarySong';
const Library = ({ audioRef, songs, setcurrentSong, isPlaying, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Tracks</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            songs={songs}
            song={song}
            setcurrentSong={setcurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
