#mongodb-cache
a nodejs cache module worked with mongodb

## Usage
1. connect mongodb if your application doesn't connect mongodb
```
cache.connect('mongodb://localhost:27017/app');
```
2. Set A Cache
```
cache.set(key, value, duration); The duration unit is second; If duration is zero, the cache will not expire;
```
3.Get A Cache
```
cache.get(key);
```
4.Remove A Cache
```
cache.remove(key);
```
