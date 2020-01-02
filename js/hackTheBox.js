const config = {
  "particles": {
    "number": {
      "value": 80, // Change number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "opacity": {
      "value": 0,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8ac53e", // Change line colour
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
    }
  }
};

particlesJS('particles-js', config);