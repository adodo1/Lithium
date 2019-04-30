import nsGmx from '../nsGmx.js';
import './assets/styles.css';

nsGmx.LanguageWidget = (function() {
    
    var LanguageWidget = function(options) {
        this._view = $(Handlebars.compile(nsGmx.Templates.LanguageWidget.layout)({
            eng: nsGmx.Translations.getLanguage() === 'eng',
            rus: nsGmx.Translations.getLanguage() === 'rus'
        }));

        if (nsGmx.Translations.getLanguage() !== 'eng') {
            this._view.find('.languageWidget-item_eng').click(function() {
                nsGmx.Translations.updateLanguageCookies('eng');
                // присвоение url не работает, если есть #
                window.location.reload(false);
            });
        }

        if (nsGmx.Translations.getLanguage() !== 'rus') {
            this._view.find('.languageWidget-item_rus').click(function() {
                nsGmx.Translations.updateLanguageCookies('rus');
                window.location.reload(false);
            });
        }
    };

    LanguageWidget.prototype.appendTo = function(placeholder) {
        $(placeholder).append(this._view);
    };

    return LanguageWidget;
})();
;

nsGmx.Templates = nsGmx.Templates || {};nsGmx.Templates.LanguageWidget = {};
nsGmx.Templates.LanguageWidget["layout"] = "<div class=\"languageWidget ui-widget\">\n" +
    "    <div class=\"languageWidget-item languageWidget-item_rus\"><span class=\"{{^rus}}link languageWidget-link{{/rus}}{{#rus}}languageWidget-disabled{{/rus}}\">Ru</span></div>\n" +
    "    <div class=\"languageWidget-item languageWidget-item_eng\"><span class=\"{{^eng}}link languageWidget-link{{/eng}}{{#eng}}languageWidget-disabled{{/eng}}\">En</span></div>\n" +
    "</div>";;