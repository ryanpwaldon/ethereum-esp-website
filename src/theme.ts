import { extendTheme, theme as base } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    brand: {
      accent: '#f85858',
      button: {
        shadow: '#e34550'
      },
      hover: '#fb7971',
      heading: '#e44550',
      paragraph: '#232264',
      orange: {
        100: '#ff4d15',
        200: '#f87045'
      },
      ready: {
        text: '#30354b',
        bgGradient: {
          start: '#fff8ec',
          end: '#fee8dc'
        }
      },
      border: '#a9a9b8',
      divider: {
        100: '#e5e5e5',
        200: '#a1a0ba'
      },
      footer: {
        bgGradient: {
          start: '#e07861',
          end: '#e06361'
        }
      },
      newsletter: {
        bgGradient: {
          start: '#fff8ec',
          end: '#fee8dc'
        }
      },
      faq: {
        bgGradient: {
          start: '#ffe5e2',
          end: '#f3d1ee'
        }
      },
      layout: {
        bgGradient: {
          start: '#ffe5e2',
          end: '#e4deff'
        },
        rgba: 'rgba(228, 222, 255, 0)'
      },
      option: '#ffefec',
      uploadProposal: 'rgba(189, 189, 189, 0.2)'
    }
  },
  fonts: {
    // set base fonts as fallback
    heading: `Libre Franklin, ${base.fonts?.heading}`,
    body: `Libre Franklin, ${base.fonts?.body}`
  },
  fontSizes: {
    h1: '40px',
    h2: '24px',
    h4: '18px',
    faq: {
      question: '16px'
    },
    paragraph: '15px',
    input: '14px'
  },
  sizes: {
    container: {
      mobile: '450px'
    }
  },
  components: {
    Heading: {
      variants: {
        'page-section': {
          fontFamily: `Maison Neue Mono, ${base.fonts?.heading}`
        }
      }
    },
    MenuButton: {
      variants: {
        transparent: {
          background: 'none'
        }
      }
    },
    Radio: {
      baseStyle: {
        control: {
          bg: 'white',
          border: 0,
          boxShadow: '0 0 0 1px #a9a9b8',
          _checked: {
            color: 'brand.orange.100',
            bg: 'white'
          }
        }
      }
    },
    Checkbox: {
      baseStyle: {
        control: {
          bg: 'white',
          border: '1px solid #c8c8c8',
          _checked: {
            color: 'brand.orange.100',
            bg: 'white',
            border: '1px solid #c8c8c8'
          }
        }
      }
    }
  },
  shadows: {
    select: '0px 3px 5px rgba(0, 0, 0, 0.25)'
  }
});
