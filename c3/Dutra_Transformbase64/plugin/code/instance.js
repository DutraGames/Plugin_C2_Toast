const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.Dutra_TransformBase64;

PLUGIN_CLASS.Instance = class TransformBase64Instance extends (
  SDK.IInstanceBase
) {
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
