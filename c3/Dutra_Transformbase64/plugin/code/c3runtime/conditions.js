const C3 = globalThis.C3;

C3.Plugins.Dutra_TransformBase64.Cnds = {
  OnSuccess(tag) {
    return tag === this.TAG ? true : false;
  },

  OnError(tag) {
    return tag === this.TAG ? true : false;
  },
};
