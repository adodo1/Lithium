import nsGmx from '../nsGmx.js';
import '../translations.js';
import './assets/styles.css';
import '../DropdownMenuWidget/dropdownMenuWidget.js';

nsGmx.HeaderWidget = (function() {
    'use strict';

    var SocialShareWidget = function(socials) {
        this._view = Handlebars.compile(nsGmx.Templates.HeaderWidget.socials)(socials);
    };

    SocialShareWidget.prototype.appendTo = function(placeholder) {
        $(placeholder).append(this._view);
    };

    var HeaderWidget = function(options) {
        var addDots = function(item) {
            if (!item.icon && !item.className) {
                item.className = item.className + ' headerWidget-menuDot';
            }
            return item;
        };

        var h = Handlebars.create();
        this._view = $(h.compile(nsGmx.Templates.HeaderWidget.layout)(options));
        if (nsGmx.DropdownMenuWidget) {
            (new nsGmx.DropdownMenuWidget({
                items: options.leftLinks && options.leftLinks.map(addDots)
            })).appendTo(this._view.find('.headerWidget-leftLinksContainer'));
            (new nsGmx.DropdownMenuWidget({
                items: options.rightLinks && options.rightLinks.map(addDots)
            })).appendTo(this._view.find('.headerWidget-rightLinksContainer'));
        } else {
            console.warn('DropdownMenuWidget not found');
        }
        (new SocialShareWidget(options.socials)).appendTo(this._view.find('.headerWidget-socialsContainer'));
        this._view.find(".headerWidget-authContainer").hide();
        this._view.find(".headerWidget-menuContainer").hide();
        this._view.find(".headerWidget-searchContainer").hide();
        this._view.find(".headerWidget-languageContainer").hide();
        if (!options.socials) {
            this._view.find(".headerWidget-socialsContainer").hide();
        }
    };

    HeaderWidget.prototype.appendTo = function(placeholder) {
        $(placeholder).append(this._view);
    };

    HeaderWidget.prototype.getAuthPlaceholder = function() {
        return this._view.find(".headerWidget-authContainer").show();
    };

    HeaderWidget.prototype.getMenuPlaceholder = function() {
        return this._view.find(".headerWidget-menuContainer").show();
    };

    HeaderWidget.prototype.getSearchPlaceholder = function() {
        return this._view.find(".headerWidget-searchContainer").show();
    };

    HeaderWidget.prototype.getLanguagePlaceholder = function() {
        return this._view.find(".headerWidget-languageContainer").show();
    };

    HeaderWidget.prototype.getSocialsPlaceholder = function() {
        return this._view.find(".headerWidget-socialsContainer");
    };

    return HeaderWidget;
})();
nsGmx.Translations.addText('rus', {
    header: {
        'langRu': 'Ru',
        'langEn': 'En'
    }
});

nsGmx.Translations.addText('eng', {
    header: {
        'langRu': 'Ru',
        'langEn': 'En'
    }
});
nsGmx.Templates = nsGmx.Templates || {};
nsGmx.Templates.HeaderWidget = {};
nsGmx.Templates.HeaderWidget["layout"] = "<div class=\"headerWidget\">\n" +
    "    <div class=\"headerWidget-left\">\n" +
    "        <div class=\"headerWidget-logoContainer\">\n" +
    "            <img class=\"headerWidget-logo\" src=\"{{logo}}\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"headerWidget-right\">\n" +
    "        <div class=\"headerWidget-bar headerWidget-controlsBar\">\n" +
    "            <div class=\"headerWidget-barTable headerWidget-controlsBarTable\">\n" +
    "                <div class=\"headerWidget-barCell headerWidget-menuContainer\"></div>\n" +
    "                <div class=\"headerWidget-barCell headerWidget-authContainer\"></div>\n" +
    "                <div class=\"headerWidget-barCell headerWidget-languageContainer\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "";
nsGmx.Templates.HeaderWidget["socials"] = "<div class=\"headerWidget-socialIcons\">\n" +
    "    {{#if vk}}\n" +
    "        <div class=\"headerWidget-socialIconCell\"><a href=\"{{vk}}\" target=\"_blank\"><i class=\"icon-vk\"></i></a></div>\n" +
    "    {{/if}}\n" +
    "    {{#if facebook}}\n" +
    "        <div class=\"headerWidget-socialIconCell\"><a href=\"{{facebook}}\" target=\"_blank\"><i class=\"icon-facebook\"></i></a></div>\n" +
    "    {{/if}}\n" +
    "    {{#if twitter}}\n" +
    "        <div class=\"headerWidget-socialIconCell\"><a href=\"{{twitter}}\" target=\"_blank\"><i class=\"icon-twitter\"></i></a></div>\n" +
    "    {{/if}}\n" +
    "</div>";