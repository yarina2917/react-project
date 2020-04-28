import config from '../constants/config'
import * as CryptoJS from 'crypto-js'

export const encrypt = (value) => {
  return CryptoJS.AES.encrypt(value, config.secretKey.trim()).toString();
};

export const decrypt = (textToDecrypt) => {
  return CryptoJS.AES.decrypt(textToDecrypt, config.secretKey.trim()).toString(CryptoJS.enc.Utf8);
};
