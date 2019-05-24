import nsGmx from './nsGmx.js';

nsGmx.VirtualLayerManager = function() {
    this._classes = window.gmxVirtualClasses || {};
    this.loader = this.loader.bind(this);
}

nsGmx.VirtualLayerManager.prototype.loader = function(type) {
    var promise = new L.gmx.Deferred(),
        classInfo = this._classes[type];
    
    if (!classInfo) {
        promise.resolve();
        return promise;
    }
    
    window.gmxCore.loadModule(classInfo.module, classInfo.file).then(function(module) {
        promise.resolve(module.layerClass);
    }, promise.reject);
    
    return promise;
};