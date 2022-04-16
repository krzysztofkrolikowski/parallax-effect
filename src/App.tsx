import moon from './assets/moon.png'
import land from './assets/land.jpg'
import cat from './assets/cat.gif'

import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: 'cover',
            }}
        />

        <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${land})`,
              backgroundSize: 'cover',
            }}
        />

        <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ textAlign: 'center' }}
        >
          <img src={cat} alt="cat"/>
        </ParallaxLayer>

        <ParallaxLayer
            offset={0.2}
            speed={0.05}
        >
          <h2>Parallax world welcome</h2>
        </ParallaxLayer>

        <ParallaxLayer
            offset={3}
            speed={2}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
