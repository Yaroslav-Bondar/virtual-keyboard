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
    // this.#model.renderKeyList,
    this.#view.render(this.#model.keyInfo, this.#model.language);
    this.#view.bindLanguageChange(this.#handleLanguageChange);
  }

  // using an arrow function to properly store the value of "this" when called
  #handleLanguageChange = () => {
    this.#model.changeLanguage();
    this.#view.displayLanguage(
      this.#model.keyInfo,
      // this.#model.langChangeList,
      this.#model.language,
      // this.#model.capsLockMode,
    );
  };
}

exports.Controller = Controller;
