import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.scss';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import Particles from 'react-particles-js';

fontawesome.library.add(brands, faCheckSquare);

const TemplateWrapper = ({ children }) => (
  <div className="App">
    <Helmet
      title="Harman Pannu"
      meta={[
        {
          name: "Harman Pannu's Portfolio Website",
          content: 'Portfolio Website'
        },
        {
          name: 'keywords',
          content: 'Portfolio Website'
        }
      ]}
    />
    <Particles
      params={{
        particles: {
          number: {
            value: 1,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#5F667A'
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: '#5F667A'
            },
            polygon: {
              nb_sides: 10
            }
          },
          opacity: {
            value: 0.1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 71.02440872179734,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: '#5F667A',
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.2
            },
            push: {
              particles_nb: 1
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
      style={{
        width: '100%',
        position: 'fixed',
        bottom: '0',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: '-10',
        left: '1%',
        transform: 'translateX(-50%),'
      }}
    />{' '}
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
