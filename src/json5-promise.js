import JSON5 from 'json5';

export default class JSON5Promise {
  static parse(str) {
    return new Promise((resolve, reject) => {
      try {
        let obj = JSON5.parse(str);
        resolve(obj);
      } catch (_e) {
        reject(_e);
      }
    });
  }

  static stringify(obj){
    return new Promise((resolve, reject) => {
      try {
        let json5 = JSON5.stringify(obj);
        resolve(json5);
      } catch (_e) {
        reject(_e);
      }
    });
  }
}
