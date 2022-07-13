var MemoryStorage = require('memorystorage');
// here, the MemoryStorage function is available
var store = new MemoryStorage('note-app');

exports.getKeys = ()=>{
    var keys = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        keys.push(key);
    }
    return keys;
}


exports.getValues = ()=>{
    var values = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        var value = store.getItem(key);
        values.push(value);
    }
    return values;
}


exports.Store = store;