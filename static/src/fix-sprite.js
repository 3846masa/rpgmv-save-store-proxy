/* global Sprite */
(function fixSprite() {
  if (!window.Sprite || !Sprite.prototype._onBitmapLoad) {
    setTimeout(fixSprite, 100);
    return;
  }
  let _onBitmapLoad = Sprite.prototype._onBitmapLoad;
  Sprite.prototype._onBitmapLoad = function() {
    let _width = this._bitmap.width;
    let _height = this._bitmap.height;
    this._bitmap.width |= 0;
    this._bitmap.height |= 0;
    _onBitmapLoad.apply(this, arguments);
    this._bitmap.width = _width;
    this._bitmap.height = _height;
  };
})();
