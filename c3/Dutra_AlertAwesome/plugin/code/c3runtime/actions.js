const C3 = globalThis.C3;

C3.Plugins.Dutra_AlertAwesome.Acts = {
  async AlertAwesome(
    tag,
    typeindex,
    title,
    message,
    img,
    buttonOK,
    closeIndex,
    headerIndex,
    bgColor
  ) {
    this.TAG = tag;

    const type = ["success", "error", "info", "warning", "dark", "custom"][
      typeindex
    ];

    const closeStyle = ["default", "circle"][closeIndex];

    const header = [true, false][headerIndex];

    await this.showAlertAwesome(
      type,
      title,
      message,
      img,
      buttonOK,
      closeStyle,
      header,
      bgColor
    );
  },

  async AlertConfirmAwesome(
    tag,
    title,
    message,
    img,
    buttonConfirm,
    buttonCancel,
    closeIndex,
    headerIndex
  ) {
    this.TAG = tag;

    const closeStyle = ["default", "circle"][closeIndex];

    const header = [true, false][headerIndex];

    const type = "question";

    await this.showConfirmAwesome(
      type,
      title,
      message,
      img,
      buttonConfirm,
      buttonCancel,
      closeStyle,
      header
    );
  },

  async AlertInputAwesome(
    tag,
    title,
    img,
    buttonOK,
    closeIndex,
    headerIndex,
    placeholderInput
  ) {
    this.TAG = tag;

    const closeStyle = ["default", "circle"][closeIndex];

    const header = [true, false][headerIndex];

    const type = "input";

    await this.showInputAwesome(
      type,
      title,
      img,
      buttonOK,
      closeStyle,
      header,
      placeholderInput
    );
  },
};
