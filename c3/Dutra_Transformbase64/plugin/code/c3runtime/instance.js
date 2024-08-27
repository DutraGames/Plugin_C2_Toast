const C3 = globalThis.C3;

C3.Plugins.Dutra_TransformBase64.Instance = class TransformBase_64Instance extends (
  globalThis.ISDKInstanceBase
) {
  constructor() {
    super();

    this.Database = "";
    this.TAG = "";
  }

  _release() {
    super._release();
  }

  _saveToJson() {
    return {
      // data to be saved for savegames
    };
  }

  _loadFromJson(o) {
    // load state for savegames
  }

  _getInitProperties() {
    const prefix = "plugins.dutra_transformbase64.debugger";
    return [
      {
        title: prefix + ".transform-base64",
        properties: [
          {
            name: prefix + ".last-image",
            value: this.Database,
          },
          {
            name: prefix + ".last-TAG",
            value: this.TAG,
          },
        ],
      },
    ];
  }

  _getPropertyValueByIndex(index) {
    return 0;
  }

  _setPropertyValueByIndex(index, value) {
    //set property value here
  }
};
