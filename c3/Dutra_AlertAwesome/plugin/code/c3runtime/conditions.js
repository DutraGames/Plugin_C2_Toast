const C3 = globalThis.C3;

C3.Plugins.Dutra_AlertAwesome.Cnds = {
  IsOKAlertAwesome(tag) {
    return tag === this.TAG ? true : false;
  },
  IsCloseAlertAwesome(tag) {
    return tag === this.TAG ? true : false;
  },

  IsConfirmAlertAwesome(tag) {
    return tag === this.TAG ? true : false;
  },
  IsCancelAlertAwesome(tag) {
    return tag === this.TAG ? true : false;
  },

  IsInputAlertAwesome(tag) {
    return tag === this.TAG ? true : false;
  },

  IsTagToast(tag) {
    return tag === this.TAG ? true : false;
  },
};
