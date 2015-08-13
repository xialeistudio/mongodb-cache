/**
 * @date {2015-8-12}
 * @author xialeistudio <xialeistudio@gmail.com>
 */
require('should');
var cache = require('../lib/main')
  , Promise = require('bluebird');
//初始化数据库链接
cache.connect('mongodb://localhost:27017/wechatbook');
describe('/', function() {
  //写入测试
  //it('should set a cache', function(done) {
  //  var result = cache.set('username', 'xialei', 30);
  //  result.then(function(data) {
  //    data.should.have.property('_id');
  //    done();
  //  }).catch(function(e) {
  //    e.should.have.property('message');
  //    done();
  //  });
  //});
  //读取测试
  //it('should return a cache', function(done) {
  //  cache.get('username').then(function(data) {
  //    console.log(data);
  //    done();
  //  }).catch(function(e) {
  //    console.error(e.message);
  //    e.should.have.property('message');
  //    done();
  //  });
  //});
  ////删除测试
  //it('should remove a cache', function(done) {
  //  cache.remove('username').then(function(res) {
  //    res.result.should.have.property('n');
  //    done();
  //  }).catch(function(e) {
  //    console.error(e.message);
  //    e.should.have.property('message');
  //    done();
  //  });
  //});
});

