const keyInfo = {
  languages: ['en', 'uk'],

  Backquote: {
    type: 'alphanum',
    en: {
      lowercase: '`',
      uppercase: '~',
    },
    uk: {
      lowercase: '\'',
      uppercase: 'ʼ',
    },
    classes: ['key__system'],
  },

  Digit1: {
    type: 'digit',
    lowercase: 1,
    en: {
      uppercase: '!',
    },
    uk: {
      uppercase: '!',
    },
    classes: ['key__system'],
  },

  Digit2: {
    type: 'digit',
    lowercase: 2,
    en: {
      uppercase: '@',
    },
    uk: {
      uppercase: '"',
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
