"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _classPrivateMethodInitSpec(t,e){_checkPrivateRedeclaration(t,e),e.add(t)}function _checkPrivateRedeclaration(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var _init=new WeakSet,OzimnadTabs=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,t),_classPrivateMethodInitSpec(this,_init),_defineProperty(this,"click",(function(t){e.deactivate(),e.activeIndex=Array.from(e.btnsList).indexOf(t.currentTarget),e.activate()}));var a={selector:'[data-tabs="tabs"]',btnSelector:'[data-tabs="btn"]',tabSelector:'[data-tabs="tab"]',activeIndex:0};Object.assign(this,a,i),this.tabs=document.querySelector(this.selector),this.tabs?(this.btnsList=this.tabs.querySelectorAll(this.btnSelector),this.tabsList=this.tabs.querySelectorAll(this.tabSelector),this.btnsList.length===this.tabsList.length?_classPrivateMethodGet(this,_init,_init2).call(this):console.log("Количество кнопок и табов должно быть равным")):console.log("Селектор ".concat(this.options.selector," не найден!"))}return _createClass(t,[{key:"deactivate",value:function(){this.btnsList[this.activeIndex].classList.remove("active"),this.tabsList[this.activeIndex].classList.remove("active")}},{key:"activate",value:function(){this.btnsList[this.activeIndex].classList.add("active"),this.tabsList[this.activeIndex].classList.add("active")}}]),t}();function _init2(){var t=this;this.activate(),this.btnsList.forEach((function(e){return e.addEventListener("click",t.click)}))}