// Particles.js configuration - simplified for debugging
document.addEventListener("DOMContentLoaded", function() {
  console.log("particles-config.js loaded");
  
  // Debug check for containers
  console.log("Hero container exists:", !!document.getElementById('particles-hero'));
  console.log("Products container exists:", !!document.getElementById('particles-products'));
  console.log("Footer container exists:", !!document.getElementById('particles-footer'));
  
  // Create particles for hero section with reduced count
  createParticles('particles-hero', {
    color: "#ffffff",
    opacity: 0.6,
    value: 100,        // Reduced number of particles
    size: 2,          // Smaller size for subtlety
    speed: 1.5,       // Slower speed for more elegance
    move: {
      enable: true,
      speed: 1,       // Slower movement
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 600
      }
    },
    lineLinked: {
      enable: true,
      distance: 200,  // Greater distance between connections
      opacity: 0.3    // Lower opacity for connections
    }
  });
  
  // Create particles for products section with edge shape
  createParticles('particles-products', {
    color: "#dd0000",
    opacity: 0.25,
    shape: "edge", // Square particles
    value: 60, 
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "repulse"
        },
        onhover: {
          enable: false
        }
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.8
        }
      }
    }
  });
  
  // Create particles for footer
  createParticles('particles-footer', {
    value: 50,
    color: "#ffffff",
    opacity: 0.3,
    speed: 1.5
  });
  
  // Function to create particles with custom options
  function createParticles(containerId, options = {}) {
    // Check if container exists
    if (!document.getElementById(containerId)) {
      console.error(`Container #${containerId} not found`);
      return;
    }
    
    console.log(`Initializing particles for ${containerId}`);
    
    // Check if particlesJS is available
    if (typeof particlesJS === 'undefined') {
      console.error("particlesJS not available!");
      return;
    }
    
    // Default settings
    const defaults = {
      value: 80,
      color: "#dd0000",
      opacity: 0.5,
      speed: 3,
      shape: "circle",
      size: 3,
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "push"
          },
          onhover: {
            enable: true,
            mode: "grab"
          }
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      }
    };
    
    // Merge defaults with options (deep merge for nested objects)
    const settings = {
      ...defaults,
      ...options,
      interactivity: options.interactivity ? {
        ...defaults.interactivity,
        ...options.interactivity,
        events: {
          ...defaults.interactivity.events,
          ...(options.interactivity && options.interactivity.events ? options.interactivity.events : {})
        },
        modes: {
          ...defaults.interactivity.modes,
          ...(options.interactivity && options.interactivity.modes ? options.interactivity.modes : {})
        }
      } : defaults.interactivity,
      move: options.move ? {
        ...defaults.move,
        ...options.move
      } : defaults.move
    };
    
    console.log(`Detailed settings for ${containerId}:`, JSON.stringify(settings.interactivity));
    
    try {
      particlesJS(containerId, {
        "particles": {
          "number": {
            "value": settings.value,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": settings.color
          },
          "shape": {
            "type": settings.shape || "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": settings.opacity,
            "random": false,
          },
          "size": {
            "value": settings.size || 3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": settings.color,
            "opacity": 0.3,
            "width": 1
          },
          "move": {
            "enable": settings.move.enable,
            "speed": settings.move.speed,
            "direction": settings.move.direction,
            "random": settings.move.random,
            "straight": settings.move.straight,
            "out_mode": settings.move.out_mode,
            "bounce": settings.move.bounce,
            "attract": {
              "enable": settings.move.attract.enable,
              "rotateX": settings.move.attract.rotateX,
              "rotateY": settings.move.attract.rotateY
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": settings.interactivity.events.onhover.enable,
              "mode": settings.interactivity.events.onhover.mode
            },
            "onclick": {
              "enable": settings.interactivity.events.onclick.enable,
              "mode": settings.interactivity.events.onclick.mode
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "repulse": {
              "distance": settings.interactivity.modes.repulse.distance,
              "duration": settings.interactivity.modes.repulse.duration,
              "speed": settings.interactivity.modes.repulse.speed || 1,
              "easing": settings.interactivity.modes.repulse.easing || "ease-out"
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
      
      console.log(`✅ Particles initialized successfully for ${containerId}`);
    } catch(e) {
      console.error(`❌ Error initializing particles for ${containerId}:`, e);
    }
  }
});
