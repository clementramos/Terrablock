import '../styles/globals.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = ({Component, pageProps}) => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <><Component {...pageProps} /><Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "background": {
          "color": {
            "value": "#000000"
          },
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "20%"
        },
        "fullScreen": {
          "zIndex": 0
        },
        "interactivity": {
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onHover": {
              "enable": true,
              "mode": "repulse"
            }
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "duration": 2,
              "opacity": 0,
              "size": 0,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": []
              }
            },
            "grab": {
              "distance": 400
            },
            "repulse": {
              "distance": 75,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
              }
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 150,
            "opacity": 0.4
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "enable": true,
            "path": {},
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "speed": 1,
            "spin": {}
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 160
          },
          "opacity": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 0,
              "max": 1
            },
            "animation": {
              "enable": true,
              "speed": 1,
              "minimumValue": 0
            }
          },
          "size": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 1,
              "max": 3
            },
            "animation": {
              "speed": 4,
              "minimumValue": 0.3
            }
          }
        }
      }} /></>
  );
};


export default App