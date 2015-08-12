/**
 * @date {2015-8-12}
 * @author xialeistudio <xialeistudio@gmail.com>
 */
/**
 * 依赖
 * @type {exports}
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , Promise = require('bluebird');
/**
 * Model定义
 * @type {Schema}
 */
var schema = new Schema({
  name: {type: String, index: true},
  data: Schema.Types.Mixed,
  expires_in: Number
});
var Cache = mongoose.model('Cache', schema);
Promise.promisifyAll(Cache);
Promise.promisifyAll(Cache.prototype);
module.exports = Cache;