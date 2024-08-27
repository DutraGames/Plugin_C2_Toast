const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.Dutra_AlertAwesome;

PLUGIN_CLASS.Type = class MyCustomPluginType extends SDK.ITypeBase {
  constructor(sdkPlugin, iObjectType) {
    super(sdkPlugin, iObjectType);
  }
};
