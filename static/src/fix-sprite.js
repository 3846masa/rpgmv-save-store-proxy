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
    this._bitmap.__defineGetter__('width', () => _width || 0);
    this._bitmap.__defineGetter__('height', () => _height || 0);
    _onBitmapLoad.apply(this, arguments);
  };
})();
