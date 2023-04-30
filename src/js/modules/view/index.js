class View {
  #mountPoint;

  #keyboard;

  #ALPHANUM_TYPE_KEY = 'alphanum';

  // #DIGIT_TYPE_KEY = 'digit';

  #LOWERCASE_MODE = 'lowercase';

  #UPPERCASE_MODE = 'uppercase';

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

  render(keyInfo, lang) {
    const location = Object.keys(keyInfo.renderOrder);
    location.forEach((area) => {
      const areaHtml = this.createElement('section', [`keyboard__${area}`]);
      const rows = Object.keys(keyInfo.renderOrder[area]);
      rows.forEach((rowName) => {
        const rowHtm = this.createElement('div', [`keyboard__${rowName}`, 'row']);
        keyInfo.renderOrder.alphanumeric[rowName].forEach((keyCode) => {
          const keyHtm = this.createElement('div', keyInfo[keyCode].classes, 'data-key-code', keyCode);
          keyHtm.textContent = keyInfo[keyCode].langMode[lang];
          rowHtm.append(keyHtm);
        });
        areaHtml.append(rowHtm);
      });
      this.#keyboard.append(areaHtml);
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

  // bindShiftMode(handler) {
  //   document.addEventListener('keydown', (event) => {
  //     if (event.code === 'ShiftLeft' || 'ShiftRight') {
  //       handler();
  //     }
  //   });
  // }

  // list, lang, capsLockMode
  displayLanguage(keyInfo, lang) {
    Object.keys(keyInfo).forEach((keyCode) => {
      const langPath = keyInfo[keyCode].langMode;
      if (langPath) {
        const value = langPath[lang];
        const key = this.#keyboard.querySelector(`[data-key-code=${keyCode}]`);
        key.textContent = value;
      }
    });
  }
}

exports.View = View;
