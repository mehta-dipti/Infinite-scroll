import { Dashboard } from "./components/Dashboard";
import ParticleBackground from "react-particle-backgrounds";

function App() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#c1c1c1",
      minSize: 2,
      maxSize: 20,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 0.5,
    },
    opacity: {
      minOpacity: 0.2,
      maxOpacity: 0.5,
      opacityTransitionTime: 15000,
    },
  };
  return (
    <div className="App">
      <ParticleBackground settings={settings} className="particle-bg" />
      <Dashboard />
    </div>
  );
}

export default App;
