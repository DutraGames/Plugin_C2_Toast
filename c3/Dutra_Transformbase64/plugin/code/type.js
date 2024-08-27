const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.Dutra_TransformBase64;

PLUGIN_CLASS.Type = class TransformBase64Type extends SDK.ITypeBase {
  constructor(sdkPlugin, iObjectType) {
    super(sdkPlugin, iObjectType);
  }
};
