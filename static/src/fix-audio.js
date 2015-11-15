/* global WebAudio */
(function fixAudio() {
  if (!window.WebAudio || !WebAudio.prototype._createNodes) {
    setTimeout(fixAudio, 100);
    return;
  }
  let _createNodes = WebAudio.prototype._createNodes;
  WebAudio.prototype._createNodes = function() {
    if (!isFinite(this._volume)) {
      let _volume = this._volume;
      this._volume = 0;
      _createNodes.apply(this, arguments);
      this._volume = _volume;
    } else {
      _createNodes.apply(this, arguments);
    }
  };
})();
