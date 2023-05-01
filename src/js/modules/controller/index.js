class Controller {
  #model;

  #view;

  #mountPoint;

  constructor(Model, View, data) {
    const {
      mountId, language,
    } = data;
    if (typeof mountId !== 'string') throw new Error('Mount id must be a string type.');
    this.#mountPoint = document.getElementById(mountId);
    if (this.#mountPoint === null) throw new Error('Mount point is null.');
    this.#model = new Model(language);
    this.#view = new View(this.#mountPoint);
    this.#view.render(this.#model.keyInfo, this.#model.language);
    this.#view.bindLanguageMode(this.#handleLanguageMode);
    this.#view.bindShiftMode(this.#handleShiftMode);
    this.#view.bindCapsLockMode(this.#handleCapsLockMode);
  }

  // using an arrow function to properly store the value of "this" when called
  #handleLanguageMode = () => {
    this.#model.switchLanguage();
    this.#view.displayLanguage(
      this.#model.keyInfo,
      this.#model.language,
      this.#model.capsLockMode,
    );
  };

  #handleShiftMode = () => {
    this.#model.switchShiftMode();
    if (this.#model.shiftMode) {
      this.#view.displayShiftMode(
        this.#model.keyInfo,
        this.#model.language,
        this.#model.capsLockMode,
      );
    } else {
      this.#view.displayLanguage(
        this.#model.keyInfo,
        this.#model.language,
        this.#model.capsLockMode,
      );
    }
  };

  #handleCapsLockMode = () => {
    this.#model.switchCapsLockMode();
    if (this.#model.capsLockMode) {
      this.#view.displayCapsLockMode(this.#model.keyInfo, this.#model.language);
    } else {
      this.#view.displayLanguage(
        this.#model.keyInfo,
        this.#model.language,
        this.#model.capsLockMode,
      );
    }
  };
}

exports.Controller = Controller;
