class View {
  #mountPoint;

  #keyboard;

  constructor(mountPoint) {
    this.#mountPoint = mountPoint;
    this.#keyboard = this.createElement('div', ['keyboard']);
  }

  createElement(tag, classes, attributeName, attributeValue) {
    const element = document.createElement(tag);
    if (classes) {
      element.classList.add(...classes);
    }
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
    const titleHtml = this.createElement('h1');
    titleHtml.textContent = 'Virtual keyboard';
    const descriptionHtml = this.createElement('h5');
    descriptionHtml.textContent = 'Os Linux; Language switch: left alt -> ctl.';
    this.#mountPoint.prepend(titleHtml, descriptionHtml, this.#keyboard);
  }

  bindLanguageMode(handler) {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ControlLeft' && event.altKey) {
        handler();
      }
    });
  }

  displayLanguage(keyInfo, lang, capsLockMode) {
    Object.keys(keyInfo).forEach((keyCode) => {
      const langModePath = keyInfo[keyCode].langMode;
      if (langModePath) {
        let value;
        if (capsLockMode) {
          const capsLockModePath = keyInfo[keyCode].capsLockMode;
          if (capsLockModePath && capsLockModePath[lang]) {
            value = capsLockModePath[lang];
          } else {
            value = langModePath[lang];
          }
        } else {
          value = langModePath[lang];
        }
        const key = this.#keyboard.querySelector(`[data-key-code=${keyCode}]`);
        key.textContent = value;
      }
    });
  }

  bindShiftMode(handler) {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        handler();
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        handler();
      }
    });
  }

  displayShiftMode(keyInfo, lang, capsLockMode) {
    Object.keys(keyInfo).forEach((keyCode) => {
      const shiftModePath = keyInfo[keyCode].shiftMode;
      if (shiftModePath) {
        let value;
        if (capsLockMode) {
          const capsLockModePath = keyInfo[keyCode].capsLockMode;
          if (capsLockModePath && capsLockModePath[lang]) {
            const langModePath = keyInfo[keyCode].langMode;
            if (langModePath) {
              value = langModePath[lang];
            }
          } else {
            value = shiftModePath[lang];
          }
        } else {
          value = shiftModePath[lang];
        }
        const key = this.#keyboard.querySelector(`[data-key-code=${keyCode}]`);
        key.textContent = value;
      }
    });
  }

  bindCapsLockMode(handler) {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'CapsLock') {
        handler();
      }
    });
  }

  displayCapsLockMode(keyInfo, lang) {
    Object.keys(keyInfo).forEach((keyCode) => {
      const capsModePath = keyInfo[keyCode].capsLockMode;
      if (capsModePath) {
        const value = capsModePath[lang];
        if (value) {
          const key = this.#keyboard.querySelector(`[data-key-code=${keyCode}]`);
          key.textContent = value;
        }
      }
    });
  }
}

exports.View = View;
