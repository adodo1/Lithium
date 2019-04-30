import './IconSidebarControl.css';
import IconSidebarWidget from './IconSidebarWidget.js';

// ev.opening
// ev.opened { <String>id }
// ev.closing
// ev.closed
let IconSidebarControl = L.Control.extend({
    includes: L.Evented ? L.Evented.prototype : L.Mixin.Events,

    // options.position (left|right)
    initialize: function(options) {
        this._panes = {}
        L.setOptions(this, options);        
    },

    onAdd: function(map) {
        this._container = L.DomUtil.create('div');
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.disableScrollPropagation(this._container);

        this._widget = new IconSidebarWidget(this._container, this.options);        
        this._widget.addEventListener ('opening', e => {
            this.fire('opening');
        });
        this._widget.addEventListener ('opened', e => {
            this.fire('opened', e.detail);
        });
        this._widget.addEventListener ('closing', e => {
            this.fire('closing');
        });
        this._widget.addEventListener ('closed', e => {
            this.fire('closed', e.detail);
        });
        return this._container;
    },

    onRemove: function(map) {},

    setPane: function(id, paneOptions = {}) {        
        return this._widget.setPane(id, paneOptions);
    },

    open: function(paneId) {       
        return this._widget.open(paneId);
    },    

    close: function() {
        this._widget.close();
    },

    getActiveTabId: function() {
        return this._widget.getActiveTabId();
    },

    isOpened: function () {
        return this._widget.isOpened();
    },  
    
    enable: function (id, enabled) {
        this._widget.enable (id, enabled);
    },

    enabled: function (id) {
        return this._widget.enabled (id);
    }
});

export default IconSidebarControl;
