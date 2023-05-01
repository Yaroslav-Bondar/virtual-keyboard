const keyInfo = {
  languages: ['en', 'uk'],
  renderOrder: {
    alphanumeric: {
      rowE: [
        'Backquote',
        'Digit1',
        'Digit2',
        'Digit3',
        'Digit4',
        'Digit5',
        'Digit6',
        'Digit7',
        'Digit8',
        'Digit9',
        'Digit0',
        'Minus',
        'Equal',
        'Backspace',
      ],
      rowD: [
        'Tab',
        'KeyQ',
        'KeyW',
        'KeyE',
        'KeyR',
        'KeyT',
        'KeyY',
        'KeyU',
        'KeyI',
        'KeyO',
        'KeyP',
        'BracketLeft',
        'BracketRight',
        'Backslash',
        'Delete',
      ],
      rowC: [
        'CapsLock',
        'KeyA',
        'KeyS',
        'KeyD',
        'KeyF',
        'KeyG',
        'KeyH',
        'KeyJ',
        'KeyK',
        'KeyL',
        'Semicolon',
        'Quote',
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
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit0: {
    shiftMode: {
      en: ')',
      uk: ')',
    },
    langMode: {
      en: '0',
      uk: '0',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
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
    classes: ['key', 'key_theme_light', 'key_size_xs'],
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
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit3: {
    shiftMode: {
      en: '#',
      uk: '№',
    },
    langMode: {
      en: '3',
      uk: '3',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit4: {
    shiftMode: {
      en: '$',
      uk: ';',
    },
    langMode: {
      en: '4',
      uk: '4',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit5: {
    shiftMode: {
      en: '%',
      uk: '%',
    },
    langMode: {
      en: '5',
      uk: '5',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit6: {
    shiftMode: {
      en: '^',
      uk: ':',
    },
    langMode: {
      en: '6',
      uk: '6',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit7: {
    shiftMode: {
      en: '&',
      uk: '?',
    },
    langMode: {
      en: '7',
      uk: '7',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit8: {
    shiftMode: {
      en: '*',
      uk: '*',
    },
    langMode: {
      en: '8',
      uk: '8',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Digit9: {
    shiftMode: {
      en: '(',
      uk: '(',
    },
    langMode: {
      en: '9',
      uk: '9',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Minus: {
    shiftMode: {
      en: '_',
      uk: '_',
    },
    langMode: {
      en: '-',
      uk: '-',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Equal: {
    shiftMode: {
      en: '+',
      uk: '+',
    },
    langMode: {
      en: '=',
      uk: '=',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Backspace: {
    langMode: {
      en: 'Backspace',
      uk: 'Backspace',
    },
    classes: ['key', 'key_theme_dark', 'key_size_lg'],
  },
  // TODO: setting display without langMode
  Tab: {
    langMode: {
      en: 'Tab',
      uk: 'Tab',
    },
    classes: ['key', 'key_theme_dark', 'key_size_md'],
  },
  KeyQ: {
    shiftMode: {
      en: 'Q',
      uk: 'Й',
    },
    capsLockMode: {
      en: 'Q',
      uk: 'Й',
    },
    langMode: {
      en: 'q',
      uk: 'й',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyW: {
    shiftMode: {
      en: 'W',
      uk: 'Ц',
    },
    capsLockMode: {
      en: 'W',
      uk: 'Ц',
    },
    langMode: {
      en: 'w',
      uk: 'ц',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyE: {
    shiftMode: {
      en: 'E',
      uk: 'У',
    },
    capsLockMode: {
      en: 'E',
      uk: 'У',
    },
    langMode: {
      en: 'e',
      uk: 'у',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyR: {
    shiftMode: {
      en: 'R',
      uk: 'К',
    },
    capsLockMode: {
      en: 'R',
      uk: 'К',
    },
    langMode: {
      en: 'r',
      uk: 'к',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyT: {
    shiftMode: {
      en: 'T',
      uk: 'Е',
    },
    capsLockMode: {
      en: 'T',
      uk: 'Е',
    },
    langMode: {
      en: 't',
      uk: 'е',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyY: {
    shiftMode: {
      en: 'Y',
      uk: 'Н',
    },
    capsLockMode: {
      en: 'Y',
      uk: 'Н',
    },
    langMode: {
      en: 'y',
      uk: 'н',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyU: {
    shiftMode: {
      en: 'U',
      uk: 'Г',
    },
    capsLockMode: {
      en: 'U',
      uk: 'Г',
    },
    langMode: {
      en: 'u',
      uk: 'г',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyI: {
    shiftMode: {
      en: 'I',
      uk: 'Ш',
    },
    capsLockMode: {
      en: 'I',
      uk: 'Ш',
    },
    langMode: {
      en: 'i',
      uk: 'ш',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyO: {
    shiftMode: {
      en: 'O',
      uk: 'Щ',
    },
    capsLockMode: {
      en: 'O',
      uk: 'Щ',
    },
    langMode: {
      en: 'o',
      uk: 'щ',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyP: {
    shiftMode: {
      en: 'P',
      uk: 'З',
    },
    capsLockMode: {
      en: 'P',
      uk: 'З',
    },
    langMode: {
      en: 'p',
      uk: 'з',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  BracketLeft: {
    shiftMode: {
      en: '{',
      uk: 'Х',
    },
    capsLockMode: {
      uk: 'Х',
    },
    langMode: {
      en: '[',
      uk: 'х',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  BracketRight: {
    shiftMode: {
      en: '}',
      uk: 'Ї',
    },
    capsLockMode: {
      uk: 'Ї',
    },
    langMode: {
      en: ']',
      uk: 'ї',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Backslash: {
    shiftMode: {
      en: '|',
      uk: 'Ґ',
    },
    capsLockMode: {
      uk: 'Ґ',
    },
    langMode: {
      en: '\\',
      uk: 'ґ',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  // TODO: setting display without langMode
  Delete: {
    langMode: {
      en: 'Del',
      uk: 'Del',
    },
    classes: ['key', 'key_theme_dark', 'key_size_sm'],
  },
  // TODO: setting display without langMode
  CapsLock: {
    langMode: {
      en: 'CapsLock',
      uk: 'CapsLock',
    },
    classes: ['key', 'key_theme_dark', 'key_size_lg'],
  },
  KeyA: {
    shiftMode: {
      en: 'A',
      uk: 'Ф',
    },
    capsLockMode: {
      en: 'A',
      uk: 'Ф',
    },
    langMode: {
      en: 'a',
      uk: 'ф',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyS: {
    shiftMode: {
      en: 'S',
      uk: 'І',
    },
    capsLockMode: {
      en: 'S',
      uk: 'І',
    },
    langMode: {
      en: 's',
      uk: 'і',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyD: {
    shiftMode: {
      en: 'D',
      uk: 'В',
    },
    capsLockMode: {
      en: 'D',
      uk: 'В',
    },
    langMode: {
      en: 'd',
      uk: 'в',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyF: {
    shiftMode: {
      en: 'F',
      uk: 'А',
    },
    capsLockMode: {
      en: 'F',
      uk: 'А',
    },
    langMode: {
      en: 'f',
      uk: 'а',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyG: {
    shiftMode: {
      en: 'G',
      uk: 'П',
    },
    capsLockMode: {
      en: 'G',
      uk: 'П',
    },
    langMode: {
      en: 'g',
      uk: 'п',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyH: {
    shiftMode: {
      en: 'H',
      uk: 'Р',
    },
    capsLockMode: {
      en: 'H',
      uk: 'Р',
    },
    langMode: {
      en: 'h',
      uk: 'р',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyJ: {
    shiftMode: {
      en: 'J',
      uk: 'О',
    },
    capsLockMode: {
      en: 'J',
      uk: 'О',
    },
    langMode: {
      en: 'j',
      uk: 'о',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyK: {
    shiftMode: {
      en: 'K',
      uk: 'Л',
    },
    capsLockMode: {
      en: 'K',
      uk: 'Л',
    },
    langMode: {
      en: 'k',
      uk: 'л',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  KeyL: {
    shiftMode: {
      en: 'L',
      uk: 'Д',
    },
    capsLockMode: {
      en: 'L',
      uk: 'Д',
    },
    langMode: {
      en: 'l',
      uk: 'д',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Semicolon: {
    shiftMode: {
      en: ':',
      uk: 'Ж',
    },
    capsLockMode: {
      uk: 'Ж',
    },
    langMode: {
      en: ';',
      uk: 'ж',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },
  Quote: {
    shiftMode: {
      en: '"',
      uk: 'Є',
    },
    capsLockMode: {
      uk: 'Є',
    },
    langMode: {
      en: '\'',
      uk: 'є',
    },
    classes: ['key', 'key_theme_light', 'key_size_xs'],
  },

  KeyZ: {
    uk: {
      lowercase: 'я',
      uppercase: 'Я',
    },
  },
};

module.exports.keyInfo = keyInfo;
