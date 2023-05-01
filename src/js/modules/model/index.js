const { keyInfo } = require('../../data/keys/keyInfo');
const { renderKeyList } = require('../../data/keys/renderKeyList');
const { langChangeList } = require('../../data/keys/langChangeList');

class Model {
  #LANGUAGE_SETTING_KEY = 'language';

  #LANGUAGE_DATA_KEY = 'languages';

  #capsLockMode = 'lowercase';

  #shiftMode = false;

  constructor(language) {
    if (!keyInfo[this.#LANGUAGE_DATA_KEY].includes(language)) throw new Error('Language is not specified in the data');
    if (!this.language) this.language = language;
  }

  get keyInfo() {
    return keyInfo;
  }

  get renderKeyList() {
    return renderKeyList;
  }

  get shiftMode() {
    return this.#shiftMode;
  }

  changeShiftMode() {
    this.#shiftMode = !this.#shiftMode;
  }

  get langChangeList() {
    return langChangeList;
  }

  get language() {
    return localStorage.getItem(this.#LANGUAGE_SETTING_KEY);
  }

  set language(language) {
    localStorage.setItem(this.#LANGUAGE_SETTING_KEY, language);
  }

  get capsLockMode() {
    return this.#capsLockMode;
  }

  changeLanguage() {
    const lang = keyInfo[this.#LANGUAGE_DATA_KEY].filter((item) => item !== this.language);
    this.language = lang;
  }
}

exports.Model = Model;
