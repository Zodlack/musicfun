import { useTracksSelection } from './bll/useTracksSelection';
import { TrackList } from './ui/TrackList';
import { TrackDetail } from './ui/TrackDetail';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import './App.css'





function App() {

  const {trackId, handleTrackSelect} = useTracksSelection();

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '30px' }}>
        <TrackList onTrackSelected={handleTrackSelect} selectedTrackId={trackId} />
        <TrackDetail trackId={trackId} />
      </div>
      <Footer />
    </div>
  )


}

export default App
