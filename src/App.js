import './App.css';
import VideoSection from './components/videoSection/VideoSection';
import Navbar from './components/navbar/Navbar'
import Features from './components/features/Features';
import BottomSection from './components/bottomSection/BottomSection';
function App() {

  return (
    <div className="App">
      <Navbar />
      <VideoSection />
      <Features />
      <BottomSection />
    </div>
  );
}

export default App;
