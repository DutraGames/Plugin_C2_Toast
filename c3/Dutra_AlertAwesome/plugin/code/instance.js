const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.Dutra_AlertAwesome;

PLUGIN_CLASS.Instance = class MyCustomInstance extends SDK.IInstanceBase {
  constructor(sdkType, inst) {
    super(sdkType, inst);
  }

  Release() {}

  OnCreate() {}

  OnPropertyChanged(id, value) {}

  LoadC2Property(name, valueString) {
    return false; // not handled
  }
};
