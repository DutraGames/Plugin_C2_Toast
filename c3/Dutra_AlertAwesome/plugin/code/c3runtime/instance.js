const C3 = globalThis.C3;

const DOM_COMPONENT_ID = "dutra_alertawesome";

C3.Plugins.Dutra_AlertAwesome.Instance = class SingleGlobalInstance extends (
  globalThis.ISDKInstanceBase
) {
  constructor() {
    super({ domComponentId: DOM_COMPONENT_ID });

    // Initialise object properties
    this._testProperty = 0;

    const properties = this._getInitProperties();
    if (properties) {
      // note properties may be null in some cases
      this._testProperty = properties[0];
    }

    this.TAG = "";
    this.textInput = "";

    this._addDOMMessageHandlers([
      ["on-awesome-alert", (text) => this.onAwesomeAlert(text)],
    ]);
  }

  _release() {
    super._release();
  }

  _setTestProperty(n) {
    this._testProperty = n;
  }

  _getTestProperty() {
    return this._testProperty;
  }

  _saveToJson() {
    return {
      // data to be saved for savegames
    };
  }

  _loadFromJson(o) {
    // load state for savegames
  }

  async showAlertAwesome(
    type,
    title,
    message,
    img,
    buttonOK,
    closeStyle,
    header,
    bgColor
  ) {
    try {
      const result = await this._postToDOM("show-awesome-alert", {
        type,
        title,
        message,
        img,
        buttonOK,
        closeStyle,
        header,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async showConfirmAwesome(
    type,
    title,
    message,
    img,
    buttonConfirm,
    buttonCancel,
    closeStyle,
    header
  ) {
    try {
      const result = await this._postToDOM("show-confirm-alert", {
        type,
        title,
        message,
        img,
        buttonConfirm,
        buttonCancel,
        closeStyle,
        header,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async showInputAwesome(
    type,
    title,
    img,
    buttonOK,
    closeStyle,
    header,
    placeholderInput
  ) {
    try {
      const result = await this._postToDOM("show-input-alert", {
        type,
        title,
        img,
        buttonOK,
        closeStyle,
        header,
        placeholderInput,
      });
    } catch (error) {
      console.log(error);
    }
  }

  onAwesomeAlert(text) {
    if (text === "OK") {
      this._trigger(C3.Plugins.Dutra_AlertAwesome.Cnds.IsOKAlertAwesome);
    }

    if (text === "Close") {
      this._trigger(C3.Plugins.Dutra_AlertAwesome.Cnds.IsCloseAlertAwesome);
    }

    if (text === "Confirm") {
      this._trigger(C3.Plugins.Dutra_AlertAwesome.Cnds.IsConfirmAlertAwesome);
    }

    if (text === "Cancel") {
      this._trigger(C3.Plugins.Dutra_AlertAwesome.Cnds.IsCancelAlertAwesome);
    }

    if (text.type === "Input") {
      if (text.value === "Close") {
        this._trigger(C3.Plugins.Dutra_AlertAwesome.Cnds.IsCloseAlertAwesome);
        return;
      }

      this.textInput = text.value;

      this._trigger(C3.Plugins.Dutra_AlertAwesome.Cnds.IsInputAlertAwesome);
    }
  }

  ///////////////////////////////////////////////////////////////
};
