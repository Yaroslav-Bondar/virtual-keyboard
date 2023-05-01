const { keyInfo } = require('../../data/keys/keyInfo');

class Model {
  #LANGUAGE_SETTING_KEY = 'language';

  #LANGUAGE_DATA_KEY = 'languages';

  #capsLockMode = false;

  #shiftMode = false;

  constructor(language) {
    if (!keyInfo[this.#LANGUAGE_DATA_KEY].includes(language)) throw new Error('Language is not specified in the data');
    if (!this.language) this.language = language;
  }

  get keyInfo() {
    return keyInfo;
  }

  get shiftMode() {
    return this.#shiftMode;
  }

  switchShiftMode() {
    this.#shiftMode = !this.#shiftMode;
  }

  get language() {
    return localStorage.getItem(this.#LANGUAGE_SETTING_KEY);
  }

  set language(language) {
    localStorage.setItem(this.#LANGUAGE_SETTING_KEY, language);
  }

  switchLanguage() {
    const lang = keyInfo[this.#LANGUAGE_DATA_KEY].filter((item) => item !== this.language);
    this.language = lang;
  }

  get capsLockMode() {
    return this.#capsLockMode;
  }

  switchCapsLockMode() {
    this.#capsLockMode = !this.#capsLockMode;
  }
}

exports.Model = Model;
