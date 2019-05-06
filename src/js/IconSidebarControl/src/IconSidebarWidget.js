import EventTarget from 'scanex-event-target';
import { extend } from 'scanex-object-extensions';

import './IconSidebarWidget.css';

class IconSidebarWidget extends EventTarget {
    constructor(container, options) {
        super();
        this._options = options;
        this._options.position = this._options.position || 'left';
        this._collapsedWidth = this._options.collapsedWidth || 40;
        this._extendedWidth = this._options.extendedWidth || 400;

        this._container = container;
        this._container.classList.add('iconSidebarControl');
        this._container.innerHTML = `<ul class="iconSidebarControl-tabs"></ul><div class="iconSidebarControl-content"></div>`;
        this._container.classList.add (this._options.position.indexOf ('left') !== -1 ? 'iconSidebarControl-left' : 'iconSidebarControl-right');
        this._tabsContainer = this._container.querySelector ('.iconSidebarControl-tabs');
        this._panesContainer = this._container.querySelector ('.iconSidebarControl-content');

        this._onTabClick = this._onTabClick.bind(this);

        this._panes = {};
    }

    setPane (id, paneOptions) {
        paneOptions = paneOptions || {};
        let { createTab, position, enabled } = paneOptions;
        let defaultPaneOptions = { position: 0, enabled: true };
        let activeTabId = this._activeTabId;

        this._panes[id] = extend(extend (extend({}, defaultPaneOptions), this._panes[id] || {}), paneOptions);
        if (!this._panes[id].enabled && this._activeTabId === id) {
            this.close();
        }
        
        this._renderTabs({ activeTabId });
        return this._ensurePane(id);
    }
    enable  (id, enabled) {
        let pane = this._panes[id];
        if (pane) {
            pane.enabled = enabled;
        }
    }
    enabled (id) {
        let pane = this._panes[id];
        if (pane) {
            return pane.enabled;
        }
        else {
            return false;
        }
    }
    open (paneId) {
        if (this._isAnimating) {
            return;
        }

        const pane = this._panes[paneId];
        if (!pane || !pane.enabled) {
            return;
        }

        this._activeTabId = paneId;

        this._setTabActive(paneId, true);
        this._setActiveClass(paneId);

        if (this._isOpened) {

			let event = document.createEvent('Event');
			event.initEvent('opened', false, false);
			event.detail =  {id: this._activeTabId};
			this.dispatchEvent(event);

            return;
        }

        this._isAnimating = true;
		this._container.classList.add('iconSidebarControl_opened');
		this._container.classList.add('iconSidebarControl_expanded');

        this._isOpened = true;

		let event = document.createEvent('Event');
		event.initEvent('opening', false, false);
		this.dispatchEvent(event);

        setTimeout(() => {

			let ev = document.createEvent('Event');
			ev.initEvent('opened', false, false);
			ev.detail =  {id: this._activeTabId};
			this.dispatchEvent(ev);
            this._isAnimating = false;

        }, 250);
    }

    _setTabActive (paneId, flag) {
        let tabs = this._tabsContainer.querySelectorAll('.iconSidebarControl-tab');
        for (let i = 0; i < tabs.length; ++i) {
            let id = tabs[i].getAttribute('data-tab-id');
            let tab = tabs[i].querySelector('.tab-icon');
            if (id === paneId) {
                if (flag) {
					tab.classList.add ('tab-icon-active');

                }
                else {
					tab.classList.remove ('tab-icon-active');
                }

            } else {
				tab.classList.remove ('tab-icon-active');
            }
        }
    }

    close () {
        if (this._isAnimating) {
            return;
        }
        this._setTabActive(this._activeTabId, false);
		this._container.classList.remove ('iconSidebarControl_opened');
        this._isAnimating = true;
        this._isOpened = false;

		let event = document.createEvent('Event');
		event.initEvent('closing', false, false);
		this.dispatchEvent(event);

        setTimeout(() => {
            this._container.classList.remove ('iconSidebarControl_expanded');

			let ev = document.createEvent('Event');
			ev.detail = { id: this._activeTabId };
			ev.initEvent('closed', false, false);
			this.dispatchEvent(ev);

            this._isAnimating = false;
            this._setActiveClass('');
            this._activeTabId = null;

        }, 250);
    }

    getWidth () {
        if (this._isOpened) {
            return this._extendedWidth;
        } else {
            return this._collapsedWidth;
        }
    }

    getActiveTabId () {
        return this._activeTabId;
    }

    isOpened () {
        return this._isOpened;
    }

    _ensurePane (id) {
        for (let i = 0; i < this._panesContainer.childNodes.length; ++i) {
            let node = this._panesContainer.childNodes[i];
            if (node.getAttribute('data-pane-id') === id) {
                return node;
            }
        }
		let paneEl = document.createElement ('div');
		paneEl.classList.add ('iconSidebarControl-pane');
        paneEl.setAttribute('data-pane-id', id);
        this._panesContainer.appendChild(paneEl);
        return paneEl;
    }

    _setActiveClass (activeId) {
        for (let i = 0; i < this._panesContainer.children.length; i++) {
            let id = this._panesContainer.children[i].getAttribute('data-pane-id');
            let pane = this._panesContainer.querySelector('[data-pane-id=' + id + ']');
            if (id === activeId) {
				pane.classList.add ('iconSidebarControl-pane-active');
            } else {
				pane.classList.remove ('iconSidebarControl-pane-active');
            }
        }
    }

    _onTabClick (e) {
        let tabId = e.currentTarget.getAttribute('data-tab-id');
        let pane = this._panes[tabId];
        if (!pane || !pane.enabled) {
            return;
        }
        if (!this._isOpened || this._activeTabId !== tabId) {
            this._renderTabs({ activeTabId: tabId });
            this.open(tabId);
        } else {
            this._renderTabs({});
            this.close();
        }
    }

    _renderTabs (options) {
        const getFlag = (tabId, activeTabId, hoveredTabId, enabled)  => {
            if (!enabled) {
                return 'disabled';
            } else if (hoveredTabId && tabId === hoveredTabId) {
                return 'hover';
            } else if (activeTabId && tabId === activeTabId) {
                return 'active';
            } else {
                return 'default';
            }
        };

        let activeTabId = options.activeTabId;
        let hoveredTabId = options.hoveredTabId;
        this._tabsContainer.innerHTML = '';
        Object.keys(this._panes)
		.map(id => extend({ id }, this._panes[id]))
		.sort((a, b) => a.position - b.position)
		.forEach(options => {
            const { id, createTab, enabled } = options;
            if (!createTab) {
                return;
            }
            let tabContainerEl = document.createElement ('li');
            tabContainerEl.classList.add ('iconSidebarControl-tab');
            tabContainerEl.setAttribute('data-tab-id', id);
            let tabEl = createTab(getFlag(id, activeTabId, hoveredTabId, enabled));
			tabContainerEl.addEventListener ('click', this._onTabClick);
            tabContainerEl.appendChild(tabEl);
            this._tabsContainer.appendChild(tabContainerEl);
        });
    }
}

export default IconSidebarWidget;
