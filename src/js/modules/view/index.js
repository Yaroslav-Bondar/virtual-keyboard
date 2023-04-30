class View {
  #mountPoint;

  #keyboard;

  #ALPHANUM_TYPE_KEY = 'alphanum';

  #DIGIT_TYPE_KEY = 'digit';

  constructor(mountPoint) {
    this.#mountPoint = mountPoint;
    this.#keyboard = this.createElement('div', ['keyboard']);
  }

  createElement(tag, classes, attributeName, attributeValue) {
    const element = document.createElement(tag);
    element.classList.add(...classes);
    if (attributeName && attributeValue) {
      element.setAttribute(attributeName, `${attributeValue}`);
    }
    return element;
  }

  render(keyInfo, renderKeyList, language) {
    Object.keys(renderKeyList).forEach((area) => {
      const section = this.createElement('section', [`keyboard__${area}`]);
      const location = renderKeyList[area];
      Object.keys(location).forEach((rowName) => {
        const row = this.createElement('div', ['keyboard__row']);
        location[rowName].forEach((keyCode) => {
          if (keyInfo[keyCode].type === this.#ALPHANUM_TYPE_KEY) {
            const key = this.createElement('div', keyInfo[keyCode].classes, 'data-key-code', keyCode);
            key.textContent = keyInfo[keyCode][language].lowercase;
            row.append(key);
          }
          if (keyInfo[keyCode].type === this.#DIGIT_TYPE_KEY) {
            const key = this.createElement('div', keyInfo[keyCode].classes, 'data-key-code', keyCode);
            key.textContent = keyInfo[keyCode].lowercase;
            row.append(key);
          }
        });
        section.append(row);
      });
      this.#keyboard.append(section);
    });
    this.#mountPoint.prepend(this.#keyboard);
  }

  bindLanguageChange(handler) {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ShiftLeft' && event.ctrlKey) {
        handler();
      }
    });
  }

  displayLanguage(keyInfo, list, lang, capsLockMode) {
    list.forEach((keyCode) => {
      if (keyInfo[keyCode].type === this.#ALPHANUM_TYPE_KEY) {
        const value = keyInfo[keyCode][lang][capsLockMode];
        const key = this.#keyboard.querySelector(`[data-key-code=${keyCode}]`);
        key.textContent = value;
      }
    });
  }
}

exports.View = View;
