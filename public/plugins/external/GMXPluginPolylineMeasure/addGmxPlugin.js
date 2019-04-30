(function () {
    'use strict';

	window.nsGmx = window.nsGmx || {};

    var publicInterface = {
        pluginName: 'Leaflet.PolylineMeasure',
        params: {},
		map: null,		// текущая карта
        path: '',		// папка плагина
		locale: window.language === 'eng' ? 'en' : 'ru',

        afterViewer: function (params, map) {
			publicInterface.params = params;
			publicInterface.map = map;
			if (publicInterface.locale === 'ru') {
				L.extend(publicInterface.params, {
					bearingTextOut: 'Направление',
					changeUnitsText : 'Единицы измерения',
					clearControlTitle : 'Очистить',
					measureControlTitleOn : 'Включить измерение линий и углов',
					measureControlTitleOff : 'Отключить измерение'
				});
			}
			publicInterface.load();
		},
        addStyleClasses: function(txt) {
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = txt;
			document.getElementsByTagName('head')[0].appendChild(style);
		},
        load: function() {
			var prefix = publicInterface.path + publicInterface.pluginName;
			Promise.all([
				prefix + '.js',
				prefix + '.css'
			].map(function(href) {
				return L.gmxUtil.requestLink(href);
			})).then(function() {
                var controlsManager = publicInterface.map.gmxControlsManager,
					plm = L.control.polylineMeasure(L.extend({
						id:'polylineMeasure',
						className:'polylineMeasure',
						position:'topleft',
						unit:'metres',
						showBearings:true,
						showBearingIn:false,
						measureControlLabel: '<svg role="img" class="svgIcon"><use xlink:href="#compass" href="#compass"></use></svg>',
						// clearMeasurementsOnStop: false,
						// showMeasurementsClearControl: true,
						showUnitControl: true
					}, publicInterface.params)).addTo(publicInterface.map);
				L.DomUtil.addClass(plm.getContainer(), plm.options.id);
				controlsManager.add(plm);
				publicInterface.addStyleClasses('\
.polylineMeasure.leaflet-control {\n\
    clear: none;\n\
	border: inherit;\n\
}\n\
.polylineMeasure.leaflet-control a {\n\
    text-align: center;\
    height: 32px;\
    border-radius: 4px;\
    background-color: rgb(255, 255, 255);\
    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24);\
    fill: #757575;\
    clear: none;\
    cursor: pointer;\
    display: block;\
	margin-bottom: 4px;\
    position: relative;\
}\n\
.polylineMeasure.leaflet-control a + a {\n\
   display: none;\n\
}\n\
.polylineMeasure.leaflet-control a.active {\n\
    color: #f57c00;\
}\n\
.polylineMeasure.leaflet-control a.active + a, .polylineMeasure.leaflet-control a.active + a + a {\n\
   display: block;\n\
}\n\
				');
			}.bind(this));
		},
        unload: function() {
            var lmap = window.nsGmx.leafletMap,
                gmxControlsManager = lmap.gmxControlsManager,
                control = gmxControlsManager.get(publicInterface.pluginName);

			gmxControlsManager.remove(control);
		}
    };

    var pluginName = publicInterface.pluginName;
	if (window.gmxCore) {
		publicInterface.path = gmxCore.getModulePath(pluginName);
        window.gmxCore.addModule(pluginName, publicInterface, {});
	} else {
		window.nsGmx[pluginName] = publicInterface;
	}
})();
