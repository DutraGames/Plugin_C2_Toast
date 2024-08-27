const C3 = globalThis.C3;

C3.Plugins.Dutra_TransformBase64.Acts = {
  async Transform(tag, urlimage) {
    this.TAG = tag;
    try {
      const res = await fetch(urlimage);
      const blob = await res.blob();
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      this.Database = dataUrl;
      await this._trigger(C3.Plugins.Dutra_TransformBase64.Cnds.OnSuccess);
    } catch (error) {
      console.error(error);
      this._trigger(C3.Plugins.Dutra_TransformBase64.Cnds.OnError);
    }
  },
};
