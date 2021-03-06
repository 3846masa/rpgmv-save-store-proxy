RPG-MV Save Store Proxy
=======================

RPGツクールMVで作られたゲームのセーブデータを保管して，
どの端末でも同じセーブデータを使えるようにします．

追記：
複数のバグ修正パッチを含んでいます．
- オーディオの``non-finite``のエラーが回避できます．
- spriteのwidthが``null``のエラーが回避できます．

## Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

- ``USERNAME``と``PASSWORD``はページのログインに必要です．
- ``MONGO_URL``は``mongodb://{hostname}:{port}/{dbname}``で入力します（任意）．
  - mongolabのフリープランを使うと無料です．
  - herokuのmongolabを使うにはクレジットカード登録が必要です．

## Docker
```bash
docker build -t rpgmv-store .
docker run --name rpgmv-mongo -d mongo mongod --smallfiles
docker run -P -d -e USERNAME={any} -e PASSWORD={any} --link rpgmv-mongo:mongo rpgmv-store
```

## License
[MIT (c)3846masa](http://3846masa.mit-license.org/2015)
