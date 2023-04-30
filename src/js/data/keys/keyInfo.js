// const keyInfo = {
//   languages: ['en', 'uk'],

//   Backquote: {
//     type: 'alphanum',
//     en: {
//       lowercase: '`',
//       uppercase: '~',
//     },
//     uk: {
//       lowercase: '\'',
//       uppercase: 'ʼ',
//     },
//     classes: ['key__system'],
//   },

//   Digit1: {
//     type: 'digit',
//     lowercase: 1,
//     en: {
//       uppercase: '!',
//     },
//     uk: {
//       uppercase: '!',
//     },
//     classes: ['key__system'],
//   },

//   Digit2: {
//     type: 'digit',
//     lowercase: 2,
//     en: {
//       uppercase: '@',
//     },
//     uk: {
//       uppercase: '"',
//     },
//     classes: ['key__system'],
//   },

//   KeyZ: {
//     uk: {
//       lowercase: 'я',
//       uppercase: 'Я',
//     },
//   },
// };

const keyInfo = {
  languages: ['en', 'uk'],
  renderOrder: {
    alphanumeric: {
      rowE: [
        'Backquote',
        'Digit1',
        'Digit2',
      ],
    },
  },
  Backquote: {
    shiftMode: {
      en: '~',
      uk: 'ʼ',
    },
    langMode: {
      en: '`',
      uk: '\'',
    },
    classes: ['key__system'],
  },

  Digit1: {
    shiftMode: {
      en: '!',
      uk: '!',
    },
    langMode: {
      en: '1',
      uk: '1',
    },
    classes: ['key__system'],
  },

  Digit2: {
    shiftMode: {
      en: '@',
      uk: '"',
    },
    langMode: {
      en: '2',
      uk: '2',
    },
    classes: ['key__system'],
  },

  KeyZ: {
    uk: {
      lowercase: 'я',
      uppercase: 'Я',
    },
  },
};

module.exports.keyInfo = keyInfo;
