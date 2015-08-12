/**
 * @date {2015-8-12}
 * @author xialeistudio <xialeistudio@gmail.com>
 */

var mongoose = require('mongoose')
  , crypto = require('crypto')
  , Cache = require('./model');
/**
 * 计算字符串的MD5值
 * @param string
 * @returns {*}
 */
var getMd5 = function(string) {
  var md5 = crypto.createHash('md5');
  md5.update(string);
  return md5.digest('hex');
};
/**
 * 连接数据库
 * @param dsn
 * @returns {*}
 */
var connect = function(dsn) {
  return mongoose.connect(dsn);
};
/**
 * 设置缓存
 * @param name 缓存名称
 * @param value 缓存值
 * @param duration 有效期，毫秒，0为不过期
 * @returns {Promise}
 * @private
 */
var _set = function(name, value, duration) {
  duration = duration || 0;
  name = getMd5(name);
  return Cache.findOneAsync({name: name}).then(function(data) {
    var cache = data === null ? new Cache({name: name}) : data;
    cache.data = typeof value === "object" ? JSON.stringify(value) : value;
    cache.expires_in = duration > 0 ? new Date().getTime() + duration : 0;
    return cache.saveAsync();
  });
};
/**
 * 获取缓存
 * @param name
 * @returns {*}
 * @private
 */
var _get = function(name) {
  name = getMd5(name);
  return Cache.findOneAsync({name: name}).then(function(data) {
    if (data === null) {
      return null;
    }
    if (data.expires_in > 0 && data.expires_in < new Date().getTime()) {
      return null;
    }
    return data.data;
  });
};
/**
 * 移除缓存
 * @param name
 * @returns {*}
 * @private
 */
var _remove = function(name) {
  name = getMd5(name);
  return Cache.removeAsync({name: name});
};
exports.connect = connect;
exports.set = _set;
exports.get = _get;
exports.remove = _remove;
