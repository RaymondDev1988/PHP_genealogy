webpackJsonp([21],{

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1576)
/* template */
var __vue_template__ = __webpack_require__(1577)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/system/menus/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a66ad78", Component.options)
  } else {
    hotAPI.reload("data-v-4a66ad78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1140)
  __webpack_require__(1142)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1144)
/* template */
var __vue_template__ = __webpack_require__(1146)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73076e9f", Component.options)
  } else {
    hotAPI.reload("data-v-73076e9f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5079f294", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/vue-multiselect/dist/vue-multiselect.min.css"],"names":[],"mappings":"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","file":"vue-multiselect.min.css","sourcesContent":["fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{opacity:.6}.multiselect--active{z-index:1}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:6px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled{background:#ededed;pointer-events:none}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{cursor:text;pointer-events:none}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes a{0%{transform:rotate(0)}to{transform:rotate(2turn)}}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56cc0532", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px;\n}\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px;\n}\ndiv.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5;\n}\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800;\n}\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px;\n}\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px;\n}\ndiv.vue-select input[type=text].multiselect__input {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none;\n}\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px;\n}\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px;\n}\ndiv.vue-select .multiselect__select:before {\n  top: 70%;\n}\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px;\n}\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px;\n}\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px;\n}\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1;\n}\n.multiselect__clear:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.multiselect__clear:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSelect.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,iBAAiB;CAAE;AAErB;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;CAAE;AACrB;IACE,sBAAsB;CAAE;AAE5B;EACE,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,yBAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CAAE;AAExB;EACE,+BAA+B;EAC/B,gCAAgC;CAAE;AAEpC;;EAEE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;CAAE;AAEjB;EACE,SAAS;CAAE;AAEb;EACE,aAAa;EACb,YAAY;CAAE;AAEhB;EACE,2BAA2B;CAAE;AAE/B;EACE,gBAAgB;CAAE;AAEpB;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;CAAE;AAEf;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,YAAY;CAAE","file":"VueSelect.vue","sourcesContent":[".vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px; }\n\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px; }\n  div.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5; }\n\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800; }\n\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px; }\n\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px; }\n\ndiv.vue-select input[type=text].multiselect__input {\n  box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none; }\n\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px; }\n\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px; }\n\ndiv.vue-select .multiselect__select:before {\n  top: 70%; }\n\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px; }\n\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px; }\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px; }\n\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1; }\n\n.multiselect__clear:before {\n  transform: rotate(45deg); }\n\n.multiselect__clear:after {\n  transform: rotate(-45deg); }\n\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a },

    props: {
        value: {
            default: null
        },
        source: {
            type: String,
            default: null
        },
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        keyMap: {
            type: String,
            default: 'number'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        taggable: {
            type: Boolean,
            default: false
        },
        hasError: {
            type: Boolean,
            default: false
        },
        params: {
            type: Object,
            default: null
        },
        pivotParams: {
            type: Object,
            default: null
        },
        customParams: {
            type: Object,
            default: null
        },
        placeholder: {
            type: String,
            default: 'Please choose'
        },
        labels: {
            type: Object,
            default: function _default() {
                return {
                    selected: 'Selected',
                    select: 'Press enter to select',
                    deselect: 'Press enter to deselect',
                    noResult: 'No Elements Found'
                };
            }
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('locale', ['__']), {
        isServerSide: function isServerSide() {
            return this.source !== null;
        },
        hasSelection: function hasSelection() {
            return this.multiple && this.value.length || !this.multiple && this.value !== null;
        },
        optionKeys: function optionKeys() {
            return this.keyMap === 'number' ? Object.keys(this.optionList).map(Number) : Object.keys(this.optionList);
        }
    }),

    filters: {
        highlight: function highlight(option, query) {
            if (!option) {
                return option;
            }

            query.split(' ').filter(function (word) {
                return word.length;
            }).forEach(function (word) {
                option = option.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>');
            });

            return option;
        }
    },

    watch: {
        options: {
            handler: function handler() {
                this.optionList = this.options;
            },

            deep: true
        },
        params: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        pivotParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        customParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        }
    },

    created: function created() {
        this.getOptions = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["debounce"])(this.getOptions, 500);
    },
    data: function data() {
        return {
            optionList: this.options,
            loading: false,
            query: ''
        };
    },


    methods: {
        getOptions: function getOptions() {
            var _this = this;

            if (!this.isServerSide) {
                return;
            }

            this.loading = true;

            axios.get(route(this.source, [], null), {
                params: this.getParams()
            }).then(function (response) {
                _this.processOptions(response);
                _this.loading = false;
            }).catch(function (error) {
                _this.loading = true;
                _this.handleError(error);
            });
        },
        getParams: function getParams() {
            return {
                params: this.params,
                pivotParams: this.pivotParams,
                customParams: this.customParams,
                query: this.query,
                value: this.value
            };
        },
        processOptions: function processOptions(response) {
            this.optionList = response.data;

            if (!this.query && !this.valueIsMatched()) {
                this.clear();
            }
        },
        valueIsMatched: function valueIsMatched() {
            var self = this;

            if (!this.multiple) {
                return this.optionKeys.filter(function (option) {
                    return option === self.value;
                }).length > 0;
            }

            return this.optionKeys.filter(function (option) {
                return self.value.filter(function (val) {
                    return val === option;
                }).length > 0;
            }).length > 0;
        },
        customLabel: function customLabel(option) {
            return this.optionList[option];
        },
        update: function update() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.$emit('input', _this2.value);
            });
        },
        clear: function clear() {
            this.$emit('input', this.multiple ? [] : null);
        }
    },

    mounted: function mounted() {
        if (this.isServerSide) {
            this.getOptions();
        }
    }
});

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-select" },
    [
      _c(
        "multiselect",
        {
          class: { "has-error": _vm.hasError },
          attrs: {
            value: _vm.value,
            searchable: "",
            "allow-empty": "",
            disabled: _vm.disabled,
            "internal-search": !_vm.isServerSide,
            multiple: _vm.multiple,
            taggable: _vm.taggable,
            "clear-on-select": !_vm.multiple,
            "close-on-select": !_vm.multiple,
            "select-label": _vm.__(_vm.labels.select),
            "deselect-label": _vm.__(_vm.labels.deselect),
            "selected-label": _vm.__(_vm.labels.selected),
            placeholder: _vm.__(_vm.placeholder),
            loading: _vm.loading,
            "options-limit": 100,
            options: _vm.optionKeys,
            "custom-label": _vm.customLabel
          },
          on: {
            "search-change": function($event) {
              _vm.query = $event
              _vm.getOptions()
            },
            tag: function($event) {
              _vm.$emit("tag", $event)
            },
            input: function($event) {
              _vm.$emit("input", $event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "option",
              fn: function(props) {
                return [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.highlight(
                          _vm.optionList[props.option],
                          _vm.query
                        )
                      )
                    }
                  })
                ]
              }
            },
            {
              key: "clear",
              fn: function(props) {
                return !_vm.disabled
                  ? [
                      _vm.hasSelection
                        ? _c("div", {
                            staticClass: "multiselect__clear",
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                _vm.clear()
                              }
                            }
                          })
                        : _vm._e()
                    ]
                  : undefined
              }
            }
          ])
        },
        [
          _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.__(_vm.labels.noResult)) +
                "\n        "
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73076e9f", module.exports)
  }
}

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1148)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1150)
/* template */
var __vue_template__ = __webpack_require__(1173)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b52e927"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b52e927", Component.options)
  } else {
    hotAPI.reload("data-v-1b52e927", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e1819dfa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vue-form[data-v-1b52e927] {\n  margin-bottom: 0;\n}\n.title .icon[data-v-1b52e927] {\n  vertical-align: text-bottom;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueForm.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAAE;AAErB;EACE,4BAA4B;CAAE","file":"VueForm.vue","sourcesContent":[".vue-form {\n  margin-bottom: 0; }\n\n.title .icon {\n  vertical-align: text-bottom; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Errors__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_vue__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueSelect_vue__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__VueSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Datepicker_vue__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Datepicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Datepicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VueFormInput_vue__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VueFormInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__VueFormInput_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_19" /* faTrashAlt */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_3" /* faPlus */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["t" /* faCheck */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["L" /* faExclamationTriangle */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueForm',

    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_4__Modal_vue___default.a, VueSelect: __WEBPACK_IMPORTED_MODULE_5__VueSelect_vue___default.a, Datepicker: __WEBPACK_IMPORTED_MODULE_6__Datepicker_vue___default.a, VueFormInput: __WEBPACK_IMPORTED_MODULE_7__VueFormInput_vue___default.a
    },

    props: {
        data: {
            type: Object,
            required: true
        },
        params: {
            type: Object,
            default: null
        }
    },

    data: function data() {
        return {
            loading: false,
            showModal: false,
            errors: new __WEBPACK_IMPORTED_MODULE_3__classes_Errors__["a" /* default */]()
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        columnSize: function columnSize() {
            return 'is-' + parseInt(12 / this.data.columns, 10);
        },
        path: function path() {
            return this.data.method === 'post' ? this.data.actions.store.path : this.data.actions.update.path;
        }
    }),

    methods: {
        create: function create() {
            this.$emit('create');
            this.$router.push({ name: this.data.actions.create.route });
        },
        submit: function submit() {
            var _this = this;

            this.loading = true;

            axios[this.data.method](this.path, this.formData()).then(function (_ref) {
                var data = _ref.data;

                _this.loading = false;
                _this.$toastr.success(data.message);
                _this.$emit('submit');

                if (data.redirect) {
                    _this.$router.push({
                        name: data.redirect,
                        params: { id: data.id }
                    });
                }
            }).catch(function (error) {
                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;

                _this.loading = false;

                if (status === 422) {
                    _this.errors.set(data.errors);

                    return;
                }

                _this.handleError(error);
            });
        },
        formData: function formData() {
            return this.data.fields.reduce(function (object, field) {
                object[field.name] = field.value;
                return object;
            }, { _params: this.params });
        },
        destroy: function destroy() {
            var _this2 = this;

            this.showModal = false;
            this.loading = true;

            axios.delete(this.data.actions.destroy.path).then(function (_ref2) {
                var data = _ref2.data;

                _this2.loading = false;
                _this2.$toastr.success(data.message);
                _this2.$emit('destroy');

                if (data.redirect) {
                    _this2.$router.push({ name: data.redirect });
                }
            }).catch(function (error) {
                _this2.loading = false;
                _this2.handleError(error);
            });
        }
    }
});

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'has',
        value: function has(field) {
            return Object.keys(this.errors).includes(field);
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.has(field) ? this.errors[field][0] : null;
        }
    }, {
        key: 'set',
        value: function set(errors) {
            this.errors = errors;
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (this.has(field)) {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.errors, field);
            }
        }
    }, {
        key: 'empty',
        value: function empty() {
            var _this = this;

            Object.keys(this.errors).forEach(function (field) {
                return _this.clear(field);
            });
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1153)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1155)
/* template */
var __vue_template__ = __webpack_require__(1156)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ddb382a", Component.options)
  } else {
    hotAPI.reload("data-v-7ddb382a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("580eee24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 10;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Modal.vue"],"names":[],"mappings":";AAwDA;IACA,YAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div :class=\"['modal', { 'is-active': show }]\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-content\">\n                <div class=\"box\">\n                    <h5 class=\"subtitle is-5\">\n                        {{ __(message || \"Are you sure ?\") }}\n                    </h5>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <button class=\"button is-success\"\n                                    @click=\"$emit('cancel')\">\n                                    {{ __(\"Cancel\") }}\n                                </button>\n                                <button class=\"button is-danger has-margin-left-small\"\n                                    @click=\"$emit('commit')\">\n                                    {{ __(\"Yes\") }}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        __: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 10;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        show: {
            type: Boolean,
            required: true
        },
        message: {
            type: String,
            default: null
        },
        __: {
            type: Function,
            required: true
        }
    }
});

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated fadeIn",
        "leave-active-class": "animated fadeOut"
      }
    },
    [
      _c("div", { class: ["modal", { "is-active": _vm.show }] }, [
        _c("div", { staticClass: "modal-background" }),
        _vm._v(" "),
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "box" }, [
            _c("h5", { staticClass: "subtitle is-5" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.__(_vm.message || "Are you sure ?")) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-left" }),
              _vm._v(" "),
              _c("div", { staticClass: "level-right" }, [
                _c("div", { staticClass: "level-item" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success",
                      on: {
                        click: function($event) {
                          _vm.$emit("cancel")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.__("Cancel")) +
                          "\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button is-danger has-margin-left-small",
                      on: {
                        click: function($event) {
                          _vm.$emit("commit")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.__("Yes")) +
                          "\n                            "
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ddb382a", module.exports)
  }
}

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1158)
  __webpack_require__(1160)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1162)
/* template */
var __vue_template__ = __webpack_require__(1164)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d443fe2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/Datepicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d443fe2", Component.options)
  } else {
    hotAPI.reload("data-v-4d443fe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1dbb9c30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css", function() {
     var newContent = require("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@-webkit-keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/flatpickr/dist/themes/material_green.css"],"names":[],"mappings":"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D;;EAEE,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,UAAU;CACX;AACD;;EAEE,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;EAC1B,2BAA2B;MACvB,4BAA4B;UACxB,mBAAmB;CAC5B;AACD;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF","file":"material_green.css","sourcesContent":[".flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@-webkit-keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a4f769ba", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.clear[data-v-4d443fe2] {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1;\n}\n.clear[data-v-4d443fe2]:before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.clear[data-v-4d443fe2]:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.clear[data-v-4d443fe2]:after, .clear[data-v-4d443fe2]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/Datepicker.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;CAAE;AACb;IACE,iCAAyB;YAAzB,yBAAyB;CAAE;AAC7B;IACE,kCAA0B;YAA1B,0BAA0B;CAAE;AAEhC;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,YAAY;CAAE","file":"Datepicker.vue","sourcesContent":[".clear {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1; }\n  .clear:before {\n    transform: rotate(45deg); }\n  .clear:after {\n    transform: rotate(-45deg); }\n\n.clear:after, .clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["x" /* faClock */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["o" /* faCalendarAlt */]);

// const FlatpickrL10ns = {
//     ro: require('flatpickr/dist/l10n/ro.js').ro,
// };
// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            required: true,
            default: null,
            validate: function validate(value) {
                return value === null || typeof value === 'string' || value instanceof Date || value instanceof Array;
            }
        },
        name: {
            type: String,
            default: null
        },
        time: {
            type: Boolean,
            default: false
        },
        timeOnly: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: 'Select Date' // fixme
        },
        disabled: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'd-m-Y'
        },
        inputClass: {
            type: String,
            default: 'form-control'
        }
    },

    data: function data() {
        return {
            picker: null
        };
    },


    computed: {
        config: function config() {
            var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

            return {
                weekNumbers: false,
                defaultDate: this.value,
                dateFormat: this.format,
                allowInput: false,
                clickOpens: true,
                noCalendar: this.timeOnly,
                enableTime: this.time || this.timeOnly,
                onChange: function onChange(selectedDates, dateStr) {
                    self.$emit('input', dateStr);
                }
            };
        }
    },

    watch: {
        value: function value(newValue) {
            this.picker.setDate(newValue);
        }
    },

    mounted: function mounted() {
        this.picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(this.$el.querySelector('input'), this.config);
    },
    beforeDestroy: function beforeDestroy() {
        this.picker.destroy();
    }
});

/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v3.1.4, @license MIT */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.flatpickr = factory());
}(this, (function () { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function compareDates(date1, date2, timeless) {
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var getWeek = function (givenDate) {
    var onejan = new Date(givenDate.getFullYear(), 0, 1);
    return Math.ceil(((givenDate.getTime() - onejan.getTime()) / 86400000 +
        onejan.getDay() +
        1) /
        7);
};
var duration = {
    DAY: 86400000,
};

var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: window && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    getWeek: getWeek,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};

var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
};

var pad = function (number) { return ("0" + number).slice(-2); };
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var context = this, args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};
function mouseDelta(e) {
    var delta = e.wheelDelta || -e.deltaY;
    return delta >= 0 ? 1 : -1;
}

function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    numInput.type = "text";
    numInput.pattern = "\\d*";
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}

var do_nothing = function () { return undefined; };
var revFormat = {
    D: do_nothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(/pm/i.test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: do_nothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    w: do_nothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date) { return (date.getHours() > 11 ? "PM" : "AM"); },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return date.getFullYear(); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};

function FlatpickrInstance(element, instanceConfig) {
    var self = {};
    self.parseDate = parseDate;
    self.formatDate = formatDate;
    self._animationLoop = [];
    self._handlers = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar
                    ? self.latestSelectedDateObj || self.config.minDate
                    : undefined);
            }
            updateValue(false);
        }
        self.showTimeInput =
            self.selectedDates.length > 0 || self.config.noCalendar;
        if (self.weekWrapper !== undefined && self.daysContainer !== undefined) {
            self.calendarContainer.style.width =
                self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
        }
        if (!self.isMobile)
            positionCalendar();
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function updateTime(e) {
        if (self.config.noCalendar && !self.selectedDates.length) {
            self.setDate(new Date().setHours(self.config.defaultHour, self.config.defaultMinute, self.config.defaultSeconds), false);
            setHoursFromInputs();
            updateValue();
        }
        timeWrapper(e);
        if (self.selectedDates.length === 0)
            return;
        if (!self.minDateHasTime ||
            e.type !== "input" ||
            e.target.value.length >= 2) {
            setHoursFromInputs();
            updateValue();
        }
        else {
            setTimeout(function () {
                setHoursFromInputs();
                updateValue();
            }, 1000);
        }
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === "PM");
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined)
            hours = ampm2military(hours, self.amPM.textContent);
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
            hours = Math.max(hours, self.config.minDate.getHours());
            if (hours === self.config.minDate.getHours())
                minutes = Math.max(minutes, self.config.minDate.getMinutes());
        }
        if (self.config.maxDate &&
            self.maxDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
            hours = Math.min(hours, self.config.maxDate.getHours());
            if (hours === self.config.maxDate.getHours())
                minutes = Math.min(minutes, self.config.maxDate.getMinutes());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date)
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? (12 + hours) % 12 + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = hours >= 12 ? "PM" : "AM";
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);
        if (year.toString().length === 4 || event.key === "Enter") {
            self.currentYearElement.blur();
            if (!/[^\d]/.test(year.toString()))
                changeYear(year);
        }
    }
    function bind(element, event, handler) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler); });
        element.addEventListener(event, handler);
        self._handlers.push({ element: element, event: event, handler: handler });
    }
    function onClick(handler) {
        return function (evt) { return evt.which === 1 && handler(evt); };
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, 300);
        if (self.config.mode === "range" && self.daysContainer)
            bind(self.daysContainer, "mouseover", function (e) {
                return onMouseOver(e.target);
            });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static)
            bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document.body, "touchstart", documentClick);
        bind(window.document.body, "mousedown", onClick(documentClick));
        bind(self._input, "blur", documentClick);
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "mousedown", onClick(self.open));
        }
        if (self.daysContainer !== undefined) {
            self.monthNav.addEventListener("wheel", function (e) { return e.preventDefault(); });
            bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
            bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "mousedown", onClick(selectDate));
            if (self.config.animate) {
                bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
                bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
            }
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return e.target.select();
            };
            bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
            bind(self.timeContainer, "mousedown", onClick(timeIncrement));
            bind(self.timeContainer, ["wheel", "increment"], self._debouncedChange);
            bind(self.timeContainer, "input", triggerChange);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "mousedown", onClick(function (e) {
                    updateTime(e);
                    triggerChange();
                }));
            }
        }
    }
    function processPostDayAnimation() {
        self._animationLoop.forEach(function (f) { return f(); });
        self._animationLoop = [];
    }
    function animateDays(e) {
        if (self.daysContainer && self.daysContainer.childNodes.length > 1) {
            switch (e.animationName) {
                case "fpSlideLeft":
                    self.daysContainer.lastChild &&
                        self.daysContainer.lastChild.classList.remove("slideLeftNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .firstChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                case "fpSlideRight":
                    self.daysContainer.firstChild &&
                        self.daysContainer.firstChild.classList.remove("slideRightNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .lastChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                default:
                    break;
            }
        }
    }
    function animateMonths(e) {
        switch (e.animationName) {
            case "fpSlideLeftNew":
            case "fpSlideRightNew":
                self.navigationCurrentMonth.classList.remove("slideLeftNew");
                self.navigationCurrentMonth.classList.remove("slideRightNew");
                var nav = self.navigationCurrentMonth;
                while (nav.nextSibling &&
                    /curr/.test(nav.nextSibling.className))
                    self.monthNav.removeChild(nav.nextSibling);
                while (nav.previousSibling &&
                    /curr/.test(nav.previousSibling.className))
                    self.monthNav.removeChild(nav.previousSibling);
                self.oldCurMonth = undefined;
                break;
        }
    }
    function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined
            ? parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            console.error(e.stack);
            console.warn("Invalid date supplied: " + jumpTo);
        }
        self.redraw();
    }
    function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow"))
            incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline && !customAppend && self.element.parentNode) {
                self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0]) === 0);
                    toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1]) === 0);
                }
            }
        }
        else {
            dayElement.classList.add("disabled");
            if (self.selectedDates[0] &&
                self.minRangeDate &&
                date > self.minRangeDate &&
                date < self.selectedDates[0])
                self.minRangeDate = date;
            else if (self.selectedDates[0] &&
                self.maxRangeDate &&
                date < self.maxRangeDate &&
                date > self.selectedDates[0])
                self.maxRangeDate = date;
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
            if (self.selectedDates.length === 1 &&
                self.minRangeDate !== undefined &&
                self.maxRangeDate !== undefined &&
                (date < self.minRangeDate || date > self.maxRangeDate))
                dayElement.classList.add("notAllowed");
        }
        if (self.weekNumbers &&
            className !== "prevMonthDay" &&
            dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" +
                self.config.getWeek(date) +
                "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDay(currentIndex, offset) {
        var newIndex = currentIndex + offset || 0, targetNode = (currentIndex !== undefined
            ? self.days.childNodes[newIndex]
            : self.selectedDateElem ||
                self.todayDateElem ||
                self.days.childNodes[0]);
        var focus = function () {
            targetNode = targetNode || self.days.childNodes[newIndex];
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        };
        if (targetNode === undefined && offset !== 0) {
            if (offset > 0) {
                self.changeMonth(1, true, undefined, true);
                newIndex = newIndex % 42;
            }
            else if (offset < 0) {
                self.changeMonth(-1, true, undefined, true);
                newIndex += 42;
            }
            return afterDayAnim(focus);
        }
        focus();
    }
    function afterDayAnim(fn) {
        self.config.animate === true ? self._animationLoop.push(fn) : fn();
    }
    function buildDays(delta) {
        if (self.daysContainer === undefined) {
            return;
        }
        var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() -
            self.l10n.firstDayOfWeek +
            7) %
            7, isRangeMode = self.config.mode === "range";
        var prevMonthDays = self.utils.getDaysInMonth((self.currentMonth - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(), days = window.document.createDocumentFragment();
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        if (self.weekNumbers && self.weekNumbers.firstChild)
            self.weekNumbers.textContent = "";
        if (isRangeMode) {
            self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
            self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
        }
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
            days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
            self._hidePrevMonthArrow =
                self._hidePrevMonthArrow ||
                    (!!self.minRangeDate &&
                        self.minRangeDate > days.childNodes[0].dateObj);
            self._hideNextMonthArrow =
                self._hideNextMonthArrow ||
                    (!!self.maxRangeDate &&
                        self.maxRangeDate <
                            new Date(self.currentYear, self.currentMonth + 1, 1));
        }
        else
            updateNavigationCurrentMonth();
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        if (!self.config.animate || delta === undefined)
            clearNode(self.daysContainer);
        else {
            while (self.daysContainer.childNodes.length > 1)
                self.daysContainer.removeChild(self.daysContainer.firstChild);
        }
        if (delta && delta >= 0)
            self.daysContainer.appendChild(dayContainer);
        else
            self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
        self.days = self.daysContainer.childNodes[0];
    }
    function buildMonthNav() {
        var monthNavFragment = window.document.createDocumentFragment();
        self.monthNav = createElement("div", "flatpickr-month");
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.currentMonthElement = createElement("span", "cur-month");
        self.currentMonthElement.title = self.l10n.scrollTitle;
        var yearInput = createNumberInput("cur-year");
        self.currentYearElement = yearInput.childNodes[0];
        self.currentYearElement.title = self.l10n.scrollTitle;
        if (self.config.minDate)
            self.currentYearElement.min = self.config.minDate
                .getFullYear()
                .toString();
        if (self.config.maxDate) {
            self.currentYearElement.max = self.config.maxDate
                .getFullYear()
                .toString();
            self.currentYearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
        self.navigationCurrentMonth.appendChild(self.currentMonthElement);
        self.navigationCurrentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(self.prevMonthNav);
        monthNavFragment.appendChild(self.navigationCurrentMonth);
        monthNavFragment.appendChild(self.nextMonthNav);
        self.monthNav.appendChild(monthNavFragment);
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool)
                    self.prevMonthNav.style.display = bool ? "none" : "block";
                self.__hidePrevMonthArrow = bool;
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool)
                    self.nextMonthNav.style.display = bool ? "none" : "block";
                self.__hideNextMonthArrow = bool;
            },
        });
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.childNodes[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.childNodes[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? self.config.defaultHour
                : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : self.config.defaultMinute);
        self.hourElement.step = self.config.hourIncrement.toString();
        self.minuteElement.step = self.config.minuteIncrement.toString();
        self.hourElement.min = self.config.time_24hr ? "0" : "1";
        self.hourElement.max = self.config.time_24hr ? "23" : "12";
        self.minuteElement.min = "0";
        self.minuteElement.max = "59";
        self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.childNodes[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : self.config.defaultSeconds);
            self.secondElement.step = self.minuteElement.step;
            self.secondElement.min = self.minuteElement.min;
            self.secondElement.max = self.minuteElement.max;
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.slice();
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }
        self.weekdayContainer.innerHTML = "\n    <span class=flatpickr-weekday>\n      " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n    </span>\n    ";
        return self.weekdayContainer;
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, is_offset, animate, from_keyboard) {
        if (is_offset === void 0) { is_offset = true; }
        if (animate === void 0) { animate = self.config.animate; }
        if (from_keyboard === void 0) { from_keyboard = false; }
        var delta = is_offset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow) ||
            (delta > 0 && self._hideNextMonthArrow))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
        }
        buildDays(animate ? delta : undefined);
        if (!animate) {
            triggerEvent("onMonthChange");
            return updateNavigationCurrentMonth();
        }
        var nav = self.navigationCurrentMonth;
        if (delta < 0) {
            while (nav.nextSibling &&
                /curr/.test(nav.nextSibling.className))
                self.monthNav.removeChild(nav.nextSibling);
        }
        else if (delta > 0) {
            while (nav.previousSibling &&
                /curr/.test(nav.previousSibling.className))
                self.monthNav.removeChild(nav.previousSibling);
        }
        self.oldCurMonth = self.navigationCurrentMonth;
        self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
        var daysContainer = self.daysContainer;
        if (daysContainer.firstChild && daysContainer.lastChild) {
            if (delta > 0) {
                daysContainer.firstChild.classList.add("slideLeft");
                daysContainer.lastChild.classList.add("slideLeftNew");
                self.oldCurMonth.classList.add("slideLeft");
                self.navigationCurrentMonth.classList.add("slideLeftNew");
            }
            else if (delta < 0) {
                daysContainer.firstChild.classList.add("slideRightNew");
                daysContainer.lastChild.classList.add("slideRight");
                self.oldCurMonth.classList.add("slideRight");
                self.navigationCurrentMonth.classList.add("slideRightNew");
            }
        }
        self.currentMonthElement = self.navigationCurrentMonth
            .firstChild;
        self.currentYearElement = self.navigationCurrentMonth.lastChild
            .childNodes[0];
        updateNavigationCurrentMonth();
        if (self.oldCurMonth.firstChild)
            self.oldCurMonth.firstChild.textContent = monthToStr(self.currentMonth - delta, self.config.shorthandCurrentMonth, self.l10n);
        triggerEvent("onMonthChange");
        if (from_keyboard &&
            document.activeElement &&
            document.activeElement.$i) {
            var index_1 = document.activeElement.$i;
            afterDayAnim(function () {
                focusOnDay(index_1, 0);
            });
        }
    }
    function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        self.input.value = "";
        if (self.altInput)
            self.altInput.value = "";
        if (self.mobileInput)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;
        self.redraw();
        if (triggerChangeEvent === true)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            self.calendarContainer.classList.remove("open");
            self._input.classList.remove("active");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            var h = self._handlers[i];
            h.element.removeEventListener(h.event, h.handler);
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode)
            self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
            self.input.value = "";
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
            return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var isCalendarElement = isCalendarElem(e.target);
            var isInput = e.target === self.input ||
                e.target === self.altInput ||
                self.element.contains(e.target) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = e.type === "blur"
                ? isInput &&
                    e.relatedTarget &&
                    !isCalendarElem(e.relatedTarget)
                : !isInput && !isCalendarElement;
            if (lostFocus &&
                self.config.ignoredFocusElements.indexOf(e.target) === -1) {
                self.close();
                if (self.config.mode === "range" && self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.currentYearElement.min &&
                newYear < parseInt(self.currentYearElement.min)) ||
            (self.currentYearElement.max &&
                newYear > parseInt(self.currentYearElement.max)))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
        }
    }
    function isEnabled(date, timeless) {
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable.length && !self.config.disable.length)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string" && dateToCheck !== undefined) {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function onKeyDown(e) {
        var isInput = e.target === self._input;
        var calendarElem = isCalendarElem(e.target);
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.key === "Enter" && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                return e.target.blur();
            }
            else
                self.open();
        }
        else if (calendarElem || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(e.target);
            switch (e.key) {
                case "Enter":
                    if (isTimeObj)
                        updateValue();
                    else
                        selectDate(e);
                    break;
                case "Escape":
                    e.preventDefault();
                    self.close();
                    break;
                case "Backspace":
                case "Delete":
                    if (isInput && !self.config.allowInput)
                        self.clear();
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    if (!isTimeObj) {
                        e.preventDefault();
                        if (self.daysContainer) {
                            var delta_1 = e.key === "ArrowRight" ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(e.target.$i, delta_1);
                            else
                                changeMonth(delta_1, true, undefined, true);
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    e.preventDefault();
                    var delta = e.key === "ArrowDown" ? 1 : -1;
                    if (self.daysContainer && e.target.$i !== undefined) {
                        if (e.ctrlKey) {
                            changeYear(self.currentYear - delta);
                            focusOnDay(e.target.$i, 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(e.target.$i, delta * 7);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case "Tab":
                    if (e.target === self.hourElement) {
                        e.preventDefault();
                        self.minuteElement.select();
                    }
                    else if (e.target === self.minuteElement &&
                        (self.secondElement || self.amPM)) {
                        e.preventDefault();
                        if (self.secondElement !== undefined)
                            self.secondElement.focus();
                        else if (self.amPM !== undefined)
                            self.amPM.focus();
                    }
                    else if (e.target === self.secondElement && self.amPM) {
                        e.preventDefault();
                        self.amPM.focus();
                    }
                    break;
                case "a":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "AM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                case "p":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "PM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                default:
                    break;
            }
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 ||
            !elem.classList.contains("flatpickr-day") ||
            self.minRangeDate === undefined ||
            self.maxRangeDate === undefined)
            return;
        var hoverDate = elem.dateObj, initialDate = self.parseDate(self.selectedDates[0], undefined, true), rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()), containsDisabled = false;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t))) {
                containsDisabled = true;
                break;
            }
        }
        var _loop_1 = function (timestamp, i) {
            var outOfRange = timestamp < self.minRangeDate.getTime() ||
                timestamp > self.maxRangeDate.getTime(), dayElem = self.days.childNodes[i];
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return "continue";
            }
            else if (containsDisabled && !outOfRange)
                return "continue";
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate), maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
            elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("startRange");
            else if (initialDate > hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("endRange");
            if (timestamp >= minRangeDate && timestamp <= maxRangeDate)
                dayElem.classList.add("inRange");
        };
        for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += duration.DAY) {
            _loop_1(timestamp, i);
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._input; }
        if (self.isMobile) {
            if (e) {
                e.preventDefault();
                e.target && e.target.blur();
            }
            setTimeout(function () {
                self.mobileInput !== undefined && self.mobileInput.click();
            }, 0);
            triggerEvent("onOpen");
            return;
        }
        if (self.isOpen || self._input.disabled || self.config.inline)
            return;
        self.isOpen = true;
        self.calendarContainer.classList.add("open");
        positionCalendar(positionElement);
        self._input.classList.add("active");
        triggerEvent("onOpen");
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var hooks = [
            "onChange",
            "onClose",
            "onDayCreate",
            "onDestroy",
            "onKeyDown",
            "onMonthChange",
            "onOpen",
            "onParseConfig",
            "onReady",
            "onValueUpdate",
            "onYearChange",
        ];
        self.config = __assign({}, flatpickr.defaultConfig);
        var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable || []; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable || []; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        if (!userConfig.dateFormat && userConfig.enableTime) {
            formats$$1.dateFormat = userConfig.noCalendar
                ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                : flatpickr.defaultConfig.dateFormat +
                    " H:i" +
                    (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
            formats$$1.altFormat = userConfig.noCalendar
                ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                : flatpickr.defaultConfig.altFormat +
                    (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        Object.assign(self.config, formats$$1, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        for (var i = hooks.length; i--;) {
            if (self.config[hooks[i]] !== undefined) {
                self.config[hooks[i]] = arrayify(self.config[hooks[i]] || []).map(bindToInstance);
            }
        }
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (~hooks.indexOf(key)) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable.length &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        triggerEvent("onParseConfig");
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            console.warn("flatpickr: invalid locale " + self.config.locale);
        self.l10n = __assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined);
    }
    function positionCalendar(positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.calendarContainer === undefined)
            return;
        var calendarHeight = self.calendarContainer.offsetHeight, calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPos === "above" ||
            (configPos !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildWeekdays();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(e.target, isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2)
                self.clear();
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear)
                triggerEvent("onYearChange");
            triggerEvent("onMonthChange");
        }
        buildDays();
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.config.enableTime &&
            compareDates(selectedDate, self.config.minDate) === 0)
            setHoursFromDate(self.config.minDate);
        updateValue();
        if (self.config.enableTime)
            setTimeout(function () { return (self.showTimeInput = true); }, 50);
        if (self.config.mode === "range") {
            if (self.selectedDates.length === 1) {
                onMouseOver(target);
                self._hidePrevMonthArrow =
                    self._hidePrevMonthArrow ||
                        (self.minRangeDate !== undefined &&
                            self.minRangeDate >
                                self.days.childNodes[0].dateObj);
                self._hideNextMonthArrow =
                    self._hideNextMonthArrow ||
                        (self.maxRangeDate !== undefined &&
                            self.maxRangeDate <
                                new Date(self.currentYear, self.currentMonth + 1, 1));
            }
            else
                updateNavigationCurrentMonth();
        }
        triggerEvent("onChange");
        if (!shouldChangeMonth)
            focusOnDay(target.$i, 0);
        else
            afterDayAnim(function () { return self.selectedDateElem && self.selectedDateElem.focus(); });
        if (self.hourElement !== undefined)
            setTimeout(function () { return self.hourElement !== undefined && self.hourElement.select(); }, 451);
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range)
                self.close();
        }
    }
    function set(option, value) {
        if (option !== null && typeof option === "object")
            Object.assign(self.config, option);
        else
            self.config[option] = value;
        self.redraw();
        jumpToDate();
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split("; ")
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
        self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = undefined; }
        if (date !== 0 && !date)
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = new Date();
        var preloadedDate = self.config.defaultDate || self.input.value;
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length
            ? self.selectedDates[0]
            : self.config.minDate &&
                self.config.minDate.getTime() > self.now.getTime()
                ? self.config.minDate
                : self.config.maxDate &&
                    self.config.maxDate.getTime() < self.now.getTime()
                    ? self.config.maxDate
                    : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length)
            self.latestSelectedDateObj = self.selectedDates[0];
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
            get: function () { return self._showTimeInput; },
            set: function (bool) {
                self._showTimeInput = bool;
                if (self.calendarContainer)
                    toggleClass(self.calendarContainer, "showTimeInput", bool);
                positionCalendar();
            },
        });
    }
    function formatDate(dateObj, frmt) {
        if (self.config !== undefined && self.config.formatDate !== undefined)
            return self.config.formatDate(dateObj, frmt);
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\"
                ? formats[c](dateObj, self.l10n, self.config)
                : c !== "\\" ? c : "";
        })
            .join("");
    }
    function parseDate(date, givenFormat, timeless) {
        if (date !== 0 && !date)
            return undefined;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (self.config || flatpickr.defaultConfig).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr))
                parsedDate = new Date(date);
            else if (self.config && self.config.parseDate)
                parsedDate = self.config.parseDate(date, format);
            else {
                parsedDate =
                    !self.config || !self.config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                    ops.forEach(function (_a) {
                        var fn = _a.fn, val = _a.val;
                        return (parsedDate =
                            fn(parsedDate, val, self.l10n) || parsedDate);
                    });
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date)) {
            console.warn("flatpickr: invalid date " + date_orig);
            console.info(self.element);
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    }
    function setupInputs() {
        self.input = self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
        if (!self.input) {
            console.warn("Error: invalid input element specified", self.input);
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.type = "text";
            self.input.type = "hidden";
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar ? "time" : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        self.mobileInput.addEventListener("change", function (e) {
            self.setDate(e.target.value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle() {
        if (self.isOpen)
            return self.close();
        self.open();
    }
    function triggerEvent(event, data) {
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            if (compareDates(self.selectedDates[i], date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.currentMonthElement.textContent =
            monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n) + " ";
        self.currentYearElement.value = self.currentYear.toString();
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (!self.selectedDates.length)
            return self.clear(triggerChange);
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        var joinChar = self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator;
        self.input.value = self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, self.config.dateFormat); })
            .join(joinChar);
        if (self.altInput !== undefined) {
            self.altInput.value = self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, self.config.altFormat); })
                .join(joinChar);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavScroll(e) {
        e.preventDefault();
        var isYear = self.currentYearElement.parentNode &&
            self.currentYearElement.parentNode.contains(e.target);
        if (e.target === self.currentMonthElement || isYear) {
            var delta = mouseDelta(e);
            if (isYear) {
                changeYear(self.currentYear + delta);
                e.target.value = self.currentYear.toString();
            }
            else
                self.changeMonth(delta, true, false);
        }
    }
    function onMonthNavClick(e) {
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);
        if (isPrevMonth || isNextMonth)
            changeMonth(isPrevMonth ? -1 : 1);
        else if (e.target === self.currentYearElement) {
            e.preventDefault();
            self.currentYearElement.select();
        }
        else if (e.target.className === "arrowUp")
            self.changeYear(self.currentYear + 1);
        else if (e.target.className === "arrowDown")
            self.changeYear(self.currentYear - 1);
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", input = e.target;
        if (self.amPM !== undefined && e.target === self.amPM)
            self.amPM.textContent =
                self.l10n.amPM[self.amPM.textContent === "AM" ? 1 : 0];
        var min = Number(input.min), max = Number(input.max), step = Number(input.step), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown
                ? e.which === 38 ? 1 : -1
                : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step))
                self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList);
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.warn(e, e.stack);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr;
flatpickr = function (selector, config) {
    if (selector instanceof NodeList)
        return _flatpickr(selector, config);
    else if (typeof selector === "string")
        return _flatpickr(window.document.querySelectorAll(selector), config);
    return _flatpickr([selector], config);
};
window.flatpickr = flatpickr;
flatpickr.defaultConfig = defaults;
flatpickr.l10ns = {
    en: __assign({}, english),
    default: __assign({}, english),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign({}, flatpickr.l10ns.default, l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
};
if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
var flatpickr$1 = flatpickr;

return flatpickr$1;

})));


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "control has-icons-left has-icons-right" }, [
    _c("input", {
      staticClass: "input control",
      attrs: {
        type: "text",
        placeholder: _vm.placeholder,
        name: _vm.name,
        disabled: _vm.disabled
      },
      domProps: { value: _vm.value }
    }),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "icon is-small is-left" },
      [
        _vm.timeOnly
          ? _c("fa", { attrs: { icon: "clock" } })
          : _c("fa", { attrs: { icon: "calendar-alt" } })
      ],
      1
    ),
    _vm._v(" "),
    _vm.value
      ? _c("span", {
          staticClass: "clear",
          on: {
            click: function($event) {
              _vm.picker.clear()
            }
          }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d443fe2", module.exports)
  }
}

/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1166)
/* template */
var __vue_template__ = __webpack_require__(1172)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueFormInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdcc7fda", Component.options)
  } else {
    hotAPI.reload("data-v-fdcc7fda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VueSwitch_vue__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VueSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__VueSwitch_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["L" /* faExclamationTriangle */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueSwitch: __WEBPACK_IMPORTED_MODULE_2__VueSwitch_vue___default.a },

    props: {
        field: {
            type: Object,
            required: true
        },
        hasError: {
            type: Boolean,
            default: false
        }
    }
});

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1168)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1170)
/* template */
var __vue_template__ = __webpack_require__(1171)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSwitch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7defd652", Component.options)
  } else {
    hotAPI.reload("data-v-7defd652", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("43e441d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vue-switch input {\n    opacity: 0;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%;\n}\n.vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n}\n.vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb;\n}\n.vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    -webkit-box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n            box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n}\n.vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a;\n}\n.vue-switch.checked:before {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n.vue-switch.checked:after {\n      -webkit-transform: translateX(calc(0.625 * var(--height)));\n              transform: translateX(calc(0.625 * var(--height)));\n}\n.vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white;\n}\n.vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a;\n}\n.vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed;\n}\n.vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke;\n}\n.vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636;\n}\n.vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed;\n}\n.vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2;\n}\n.vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed;\n}\n.vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc;\n}\n.vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed;\n}\n.vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee;\n}\n.vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed;\n}\n.vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160;\n}\n.vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed;\n}\n.vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57;\n}\n.vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed;\n}\n.vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860;\n}\n.vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed;\n}\n.vue-switch.is-small {\n    --height: 0.75rem;\n}\n.vue-switch.is-medium {\n    --height: 1.25rem;\n}\n.vue-switch.is-large {\n    --height: 1.5rem;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSwitch.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,mBAAmB;CAAE;AAEvB;EACE,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,mCAAmC;EACnC,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,gBAAgB;EAChB,4BAAqB;EAArB,4BAAqB;EAArB,qBAAqB;EACrB,uBAAuB;EACvB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAC1B;IACE,WAAW;IACX,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;IACrB,YAAY;IACZ,aAAa;CAAE;AACjB;IACE,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,kCAAkC;IAClC,6BAA6B;IAC7B,0BAAkB;IAAlB,kBAAkB;CAAE;AACtB;IACE,yCAAyC;IACzC,0BAA0B;CAAE;AAC9B;IACE,iCAAiC;IACjC,uBAAuB;IACvB,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,4BAAoB;cAApB,oBAAoB;CAAE;AACxB;MACE,2DAAmD;cAAnD,mDAAmD;CAAE;AACzD;IACE,oBAAoB;IACpB,wBAAwB;CAAE;AAC1B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,yBAAyB;IACzB,6BAA6B;CAAE;AAC/B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,kBAAkB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,iBAAiB;CAAE","file":"VueSwitch.vue","sourcesContent":[".field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center; }\n  .vue-switch input {\n    opacity: 0;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n  .vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    transition: 0.25s; }\n  .vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb; }\n  .vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1); }\n  .vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a; }\n    .vue-switch.checked:before {\n      transform: scale(0); }\n    .vue-switch.checked:after {\n      transform: translateX(calc(0.625 * var(--height))); }\n  .vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white; }\n    .vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a; }\n    .vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed; }\n  .vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke; }\n    .vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636; }\n    .vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed; }\n  .vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2; }\n    .vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed; }\n  .vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc; }\n    .vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed; }\n  .vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee; }\n    .vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed; }\n  .vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160; }\n    .vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed; }\n  .vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57; }\n    .vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed; }\n  .vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860; }\n    .vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed; }\n  .vue-switch.is-small {\n    --height: 0.75rem; }\n  .vue-switch.is-medium {\n    --height: 1.25rem; }\n  .vue-switch.is-large {\n    --height: 1.5rem; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var sizes = ['is-small', 'is-medium', 'is-large'];
var types = ['is-primary', 'is-warning', 'is-danger', 'is-success', 'is-info'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueSwitch',

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: null,
            validator: function validator(value) {
                return types.includes(value);
            }
        },
        size: {
            type: String,
            default: null,
            validator: function validator(value) {
                return sizes.includes(value);
            }
        },
        value: {
            type: Boolean,
            required: true
        }
    },

    watch: {
        value: function value(_value) {
            this.checked = _value;
        }
    },

    data: function data() {
        return {
            checked: this.value
        };
    }
});

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "vue-switch",
      class: [
        _vm.size,
        _vm.type,
        { checked: _vm.value, disabled: _vm.disabled }
      ]
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.checked,
            expression: "checked"
          }
        ],
        staticClass: "checkbox",
        attrs: {
          type: "checkbox",
          disabled: _vm.disabled,
          required: _vm.required
        },
        domProps: {
          checked: _vm.value,
          checked: Array.isArray(_vm.checked)
            ? _vm._i(_vm.checked, null) > -1
            : _vm.checked
        },
        on: {
          change: [
            function($event) {
              var $$a = _vm.checked,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.checked = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.checked = $$c
              }
            },
            function($event) {
              _vm.$emit("input", _vm.checked)
            }
          ]
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7defd652", module.exports)
  }
}

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm.field.meta.content === "text"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "text",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("fa", { attrs: { icon: "exclamation-triangle" } })],
                  1
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "email"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "email",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("fa", { attrs: { icon: "exclamation-triangle" } })],
                  1
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "number"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "number",
                step: _vm.field.meta.step,
                min: _vm.field.meta.min,
                max: _vm.field.meta.max,
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("fa", { attrs: { icon: "exclamation-triangle" } })],
                  1
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "checkbox"
      ? _c(
          "span",
          [
            _c("vue-switch", {
              attrs: {
                size: "is-large",
                type: "is-success",
                disabled: _vm.field.meta.disabled || _vm.field.meta.readonly
              },
              on: {
                click: function($event) {
                  _vm.$emit("update")
                }
              },
              model: {
                value: _vm.field.value,
                callback: function($$v) {
                  _vm.$set(_vm.field, "value", $$v)
                },
                expression: "field.value"
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fdcc7fda", module.exports)
  }
}

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.data.icon || _vm.data.title
        ? _c("h5", { staticClass: "title is-5" }, [
            _vm.data.icon
              ? _c(
                  "span",
                  { staticClass: "icon" },
                  [_c("fa", { attrs: { icon: _vm.data.icon } })],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.data.title
              ? _c("span", [
                  _vm._v(
                    "\n            " + _vm._s(_vm.data.title) + "\n        "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "vue-form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "columns is-multiline" },
            _vm._l(_vm.data.fields, function(field) {
              return !field.meta.hidden
                ? _c(
                    "div",
                    {
                      key: field.name,
                      staticClass: "column",
                      class: _vm.columnSize
                    },
                    [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.__(field.label)) +
                              "\n                        "
                          ),
                          _vm.errors.has(field.name)
                            ? _c(
                                "p",
                                {
                                  staticClass: "help is-danger is-pulled-right"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.get(field.name)) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        field.meta.custom
                          ? _c(
                              "span",
                              [
                                _vm._t(field.name, null, {
                                  field: field,
                                  errors: _vm.errors
                                })
                              ],
                              2
                            )
                          : _c(
                              "span",
                              [
                                field.meta.type === "input"
                                  ? _c("vue-form-input", {
                                      attrs: {
                                        field: field,
                                        "has-error": _vm.errors.has(field.name)
                                      },
                                      on: {
                                        update: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "select"
                                  ? _c("vue-select", {
                                      attrs: {
                                        "has-error": _vm.errors.has(field.name),
                                        options: field.meta.options,
                                        "key-map": field.meta.keyMap,
                                        source: field.meta.source,
                                        multiple: field.meta.multiple,
                                        disabled: field.meta.disabled,
                                        placeholder: field.meta.placeholder
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "datepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        time: field.meta.time,
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "timepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        "time-only": "",
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "textarea"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "control has-icons-right"
                                      },
                                      [
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: field.value,
                                              expression: "field.value"
                                            }
                                          ],
                                          staticClass: "textarea",
                                          class: {
                                            "is-danger": _vm.errors.has(
                                              field.name
                                            )
                                          },
                                          attrs: {
                                            rows: field.meta.rows,
                                            disabled: field.meta.disabled
                                          },
                                          domProps: { value: field.value },
                                          on: {
                                            input: [
                                              function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  field,
                                                  "value",
                                                  $event.target.value
                                                )
                                              },
                                              function($event) {
                                                _vm.errors.clear(field.name)
                                              }
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has(field.name)
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "icon is-small is-right has-text-danger"
                                              },
                                              [
                                                _c("fa", {
                                                  attrs: {
                                                    icon: "exclamation-triangle"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                      ])
                    ]
                  )
                : _vm._e()
            })
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.data.actions.destroy
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.destroy.button.class,
                  attrs: { disabled: _vm.data.actions.destroy.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showModal = true
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.__(_vm.data.actions.destroy.button.label))
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "icon" },
                    [
                      _c("fa", {
                        attrs: { icon: _vm.data.actions.destroy.button.icon }
                      })
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.create
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.create.button.class,
                  attrs: { disabled: _vm.data.actions.create.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.create()
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.create.button.label)))
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "icon" },
                    [
                      _c("fa", {
                        attrs: { icon: _vm.data.actions.create.button.icon }
                      })
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.store
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.store.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.store.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.store.button.label)))
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "icon" },
                    [
                      _c("fa", {
                        attrs: { icon: _vm.data.actions.store.button.icon }
                      })
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.update
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.update.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.update.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.update.button.label)))
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "icon" },
                    [
                      _c("fa", {
                        attrs: { icon: _vm.data.actions.update.button.icon }
                      })
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "is-clearfix" })
        ]
      ),
      _vm._v(" "),
      _vm.data.actions.destroy
        ? _c("modal", {
            attrs: {
              show: _vm.showModal,
              __: _vm.__,
              message: _vm.data.actions.destroy.button.message
            },
            on: {
              cancel: function($event) {
                _vm.showModal = false
              },
              commit: function($event) {
                _vm.destroy()
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b52e927", module.exports)
  }
}

/***/ }),

/***/ 1576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_enso_vueforms_VueForm_vue__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_enso_vueforms_VueForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_enso_vueforms_VueForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["L" /* faExclamationTriangle */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueForm: __WEBPACK_IMPORTED_MODULE_2__components_enso_vueforms_VueForm_vue___default.a },

    data: function data() {
        return {
            initialised: false,
            form: {}
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route(this.$route.name, this.$route.params.id, false)).then(function (response) {
            _this.form = response.data.form;
            _this.initialised = true;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    }
});

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-centered" }, [
    _c(
      "div",
      { staticClass: "column is-three-quarters" },
      [
        _vm.initialised
          ? _c("vue-form", {
              staticClass: "box animated fadeIn",
              attrs: { data: _vm.form },
              scopedSlots: _vm._u([
                {
                  key: "icon",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "control has-icons-right" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: props.field.value,
                              expression: "props.field.value"
                            }
                          ],
                          staticClass: "input",
                          class: { "is-danger": props.errors.has("icon") },
                          attrs: { type: "text" },
                          domProps: { value: props.field.value },
                          on: {
                            keydown: function($event) {
                              props.errors.clear(props.field.name)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                props.field,
                                "value",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        props.errors.has("icon")
                          ? _c(
                              "span",
                              { staticClass: "icon is-small is-right" },
                              [
                                _c("fa", {
                                  attrs: { icon: "exclamation-triangle" }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    ]
                  }
                }
              ])
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a66ad78", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzcz8xYjk1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlP2VjMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZT83MzY2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWU/ZjE4ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZT8yMmVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzMxYzMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL2NsYXNzZXMvRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWU/MjE5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWU/Y2E2ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT9kMDg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzP2RmMzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWU/ZmQ5OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZT83Y2Y3Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlPzdjYzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWU/YzQxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlP2NmNGMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZT85MTc0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWU/MTRjMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZT8zODEwIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9FZGl0LnZ1ZT8yMWZkIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmaWVsZCIsImluY2x1ZGVzIiwiaGFzIiwiVnVlIiwiZGVsZXRlIiwiZm9yRWFjaCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TSwwQkFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM3Q0E7O0FBRUE7QUFDQSxzQ0FBNkw7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxrRkFBa0Y7QUFDNUwsbUhBQW1ILGtGQUFrRjtB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VUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxVQUFVLFVBQVUsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sZ0JBQWdCLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssc0JBQXNCLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLDBFQUEwRSw0QkFBNEIscUJBQXFCLGtCQUFrQixlQUFlLHVCQUF1Qix1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QUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixpQ0FBaUM7QUFDOUQsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsMENBQTBDLDZCQUE2QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsa0NBQWtDLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQsaUNBQWlDLCtCQUErQjtBQUNoRSx1Q0FBdUMsdUJBQXVCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QixFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxtQkFBbUI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1lBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtrQkFHQTs7MEJBQ0E7O3lCQUVBO2tCQUVBO0FBSEE7QUFLQTs7QUFDQTs7a0dBQ0E7dUNBQ0E7Z0NBQ0E7O3FDQUNBOztBQUNBO0FBZkEsRzs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBLE9BQU8sMENBQTBDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlDQUF5QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3Q0FBd0M7QUFDMUUsa0NBQWtDLGVBQWU7QUFDakQscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3Q0FBd0M7QUFDdkU7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRWRpdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNjZhZDc4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRWRpdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvRWRpdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGE2NmFkNzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YTY2YWQ3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvRWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXZ1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVTZWxlY3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVNlbGVjdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzMwNzZlOWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MzA3NmU5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDMwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MDc5ZjI5NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMzAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5maWVsZHNldFtkaXNhYmxlZF0gLm11bHRpc2VsZWN0e3BvaW50ZXItZXZlbnRzOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjFweDt0b3A6MXB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjM1cHg7YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2tcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyLC5tdWx0aXNlbGVjdF9fc3Bpbm5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbjotOHB4IDAgMCAtOHB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojNDFiODgzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MnB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnRcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNDEsLjI2LC4yLC42Mik7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGVcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyey13ZWJraXQtYW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjUxLC4wOSwuMjEsLjgpO2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC41MSwuMDksLjIxLC44KTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZVxcbn1cXG4ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eToxXFxufVxcbi5tdWx0aXNlbGVjdF9fbG9hZGluZy1lbnRlciwubXVsdGlzZWxlY3RfX2xvYWRpbmctbGVhdmUtYWN0aXZle29wYWNpdHk6MFxcbn1cXG4ubXVsdGlzZWxlY3QsLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4Oy1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb25cXG59XFxuLm11bHRpc2VsZWN0ey13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQwcHg7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiMzNTQ5NWVcXG59XFxuLm11bHRpc2VsZWN0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94XFxufVxcbi5tdWx0aXNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZHtvcGFjaXR5Oi42XFxufVxcbi5tdWx0aXNlbGVjdC0tYWN0aXZle3otaW5kZXg6MVxcbn1cXG4ubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19zZWxlY3R7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpXFxufVxcbi5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fdGFnc3tib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MFxcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi1oZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoyMHB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjAgMCAwIDVweDt3aWR0aDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7dHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi1ib3R0b206OHB4O3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZ34ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9fc2luZ2xle3dpZHRoOmF1dG9cXG59XFxuLm11bHRpc2VsZWN0X19pbnB1dDpob3ZlciwubXVsdGlzZWxlY3RfX3NpbmdsZTpob3Zlcntib3JkZXItY29sb3I6I2NmY2ZjZlxcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0OmZvY3VzLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmZvY3Vze2JvcmRlci1jb2xvcjojYThhOGE4O291dGxpbmU6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3NpbmdsZXtwYWRkaW5nLWxlZnQ6NnB4O21hcmdpbi1ib3R0b206OHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fdGFncy13cmFwe2Rpc3BsYXk6aW5saW5lXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnc3ttaW4taGVpZ2h0OjQwcHg7ZGlzcGxheTpibG9jaztwYWRkaW5nOjhweCA0MHB4IDAgOHB4O2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlODtiYWNrZ3JvdW5kOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X190YWd7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo0cHggMjZweCA0cHggMTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tcmlnaHQ6MTBweDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjE7YmFja2dyb3VuZDojNDFiODgzO21hcmdpbi1ib3R0b206NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpc1xcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29ue2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0OjdweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO2JvdHRvbTowO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXN0eWxlOm5vcm1hbDt3aWR0aDoyMnB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjIycHg7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtib3JkZXItcmFkaXVzOjVweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxEN1xcXCI7Y29sb3I6IzI2NmQ0ZDtmb250LXNpemU6MTRweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXJ7YmFja2dyb3VuZDojMzY5YTZlXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXM6YWZ0ZXIsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcjphZnRlcntjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fY3VycmVudHttaW4taGVpZ2h0OjQwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6OHB4IDEycHggMDtwYWRkaW5nLXJpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlOFxcbn1cXG4ubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0X19zZWxlY3R7bGluZS1oZWlnaHQ6MTZweDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlclxcbn1cXG4ubXVsdGlzZWxlY3RfX3NlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDozOHB4O3JpZ2h0OjFweDt0b3A6MXB4O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2U7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2VcXG59XFxuLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3Jle3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjA7dG9wOjY1JTtjb2xvcjojOTk5O21hcmdpbi10b3A6NHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2NvbnRlbnQ6XFxcIlxcXCJcXG59XFxuLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntjb2xvcjojYWRhZGFkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MTBweDtwYWRkaW5nLXRvcDoycHhcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjI0MHB4O292ZXJmbG93OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JvcmRlci10b3A6bm9uZTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7ei1pbmRleDoxOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoXFxufVxcbi5tdWx0aXNlbGVjdF9fY29udGVudHtsaXN0LXN0eWxlOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowO21hcmdpbjowO21pbi13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG4ubXVsdGlzZWxlY3QtLWFib3ZlIC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVye2JvdHRvbToxMDAlO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U4ZThlOFxcbn1cXG4ubXVsdGlzZWxlY3RfX2NvbnRlbnQ6OndlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fZWxlbWVudHtkaXNwbGF5OmJsb2NrXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9ue2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxMnB4O21pbi1oZWlnaHQ6NDBweDtsaW5lLWhlaWdodDoxNnB4O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcFxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlcnt0b3A6MDtyaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO2xpbmUtaGVpZ2h0OjQwcHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoyMHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojNDFiODgzO291dGxpbmU6bm9uZTtjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHQ6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc2VsZWN0KTtiYWNrZ3JvdW5kOiM0MWI4ODM7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWR7YmFja2dyb3VuZDojZjNmM2YzO2NvbG9yOiMzNTQ5NWU7Zm9udC13ZWlnaHQ6NzAwXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3RlZCk7Y29sb3I6c2lsdmVyXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZmY2YTZhO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntiYWNrZ3JvdW5kOiNmZjZhNmE7Y29udGVudDphdHRyKGRhdGEtZGVzZWxlY3QpO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fc2VsZWN0LC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7Y29sb3I6I2E2YTZhNlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWR7Y3Vyc29yOnRleHQ7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6I2RlZGVkZSFpbXBvcnRhbnRcXG59XFxuLm11bHRpc2VsZWN0LWVudGVyLWFjdGl2ZSwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZley13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlO3RyYW5zaXRpb246YWxsIC4xNXMgZWFzZVxcbn1cXG4ubXVsdGlzZWxlY3QtZW50ZXIsLm11bHRpc2VsZWN0LWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjBcXG59XFxuLm11bHRpc2VsZWN0X19zdHJvbmd7bWFyZ2luLWJvdHRvbTo4cHg7bGluZS1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3BcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdHt0ZXh0LWFsaWduOnJpZ2h0XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NlbGVjdHtyaWdodDphdXRvO2xlZnQ6MXB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3RhZ3N7cGFkZGluZzo4cHggOHB4IDAgNDBweFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19jb250ZW50e3RleHQtYWxpZ246cmlnaHRcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3JpZ2h0OmF1dG87bGVmdDowXFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NsZWFye3JpZ2h0OmF1dG87bGVmdDoxMnB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NwaW5uZXJ7cmlnaHQ6YXV0bztsZWZ0OjFweFxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXtcXG4wJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKVxcbn1cXG50b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pXFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGF7XFxuMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMClcXG59XFxudG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKVxcbn1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQSxnQ0FBZ0MsbUJBQW1CO0NBQUM7QUFBQSxzQkFBc0Isa0JBQWtCLFVBQVUsUUFBUSxXQUFXLFlBQVksZ0JBQWdCLGFBQWE7Q0FBQztBQUFBLHlEQUF5RCxrQkFBa0IsV0FBVyxRQUFRLFNBQVMscUJBQXFCLFdBQVcsWUFBWSxtQkFBbUIsNkNBQTZDLG1CQUFtQixpQkFBaUIseUNBQUEsZ0NBQWdDO0NBQUM7QUFBQSw2QkFBNkIsc0RBQUEsOENBQThDLDJDQUFBLGtDQUFrQztDQUFDO0FBQUEsNEJBQTRCLHNEQUFBLDhDQUE4QywyQ0FBQSxrQ0FBa0M7Q0FBQztBQUFBLHNFQUFzRSwyQ0FBQSxtQ0FBbUMsU0FBUztDQUFDO0FBQUEsK0RBQStELFNBQVM7Q0FBQztBQUFBLHNEQUFzRCxvQkFBb0IsZUFBZSw4QkFBOEIseUJBQXlCO0NBQUM7QUFBQSxhQUFhLCtCQUFBLHVCQUF1QixjQUFjLGtCQUFrQixXQUFXLGdCQUFnQixnQkFBZ0IsYUFBYTtDQUFDO0FBQUEsZUFBZSw4QkFBQSxxQkFBcUI7Q0FBQztBQUFBLG1CQUFtQixZQUFZO0NBQUM7QUFBQSx1QkFBdUIs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O0FBQUEscUJBQXFCLGtCQUFrQixpQkFBaUIscUJBQXFCLGtCQUFrQjtDQUFDO0FBQUEsdUJBQXVCLGdCQUFnQjtDQUFDO0FBQUEsK0JBQStCLFdBQVcsUUFBUTtDQUFDO0FBQUEsNkJBQTZCLHNCQUFzQjtDQUFDO0FBQUEsZ0NBQWdDLGdCQUFnQjtDQUFDO0FBQUEscUNBQXFDLFdBQVcsTUFBTTtDQUFDO0FBQUEsOEJBQThCLFdBQVcsU0FBUztDQUFDO0FBQUEsZ0NBQWdDLFdBQVcsUUFBUTtDQUFDO0FBQUE7QUFBYSxHQUFHLDRCQUFBLG1CQUFtQjtDQUFDO0FBQUEsR0FBRyxnQ0FBQSx1QkFBdUI7Q0FBQztDQUFDO0FBQWhFO0FBQWEsR0FBRyw0QkFBQSxtQkFBbUI7Q0FBQztBQUFBLEdBQUcsZ0NBQUEsdUJBQXVCO0NBQUM7Q0FBQ1wiLFwiZmlsZVwiOlwidnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZmllbGRzZXRbZGlzYWJsZWRdIC5tdWx0aXNlbGVjdHtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxcHg7dG9wOjFweDt3aWR0aDo0OHB4O2hlaWdodDozNXB4O2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlciwubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW46LThweCAwIDAgLThweDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6IzQxYjg4MyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjJweDtib3gtc2hhZG93OjAgMCAwIDFweCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlcnthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNTEsLjA5LC4yMSwuOCk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjF9Lm11bHRpc2VsZWN0X19sb2FkaW5nLWVudGVyLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowfS5tdWx0aXNlbGVjdCwubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7LW1zLXRvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbn0ubXVsdGlzZWxlY3R7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0MHB4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojMzU0OTVlfS5tdWx0aXNlbGVjdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubXVsdGlzZWxlY3Q6Zm9jdXN7b3V0bGluZTpub25lfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWR7b3BhY2l0eTouNn0ubXVsdGlzZWxlY3QtLWFjdGl2ZXt6LWluZGV4OjF9Lm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X190YWdze2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4taGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6MjBweDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzowIDAgMCA1cHg7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOmJvcmRlciAuMXMgZWFzZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbTo4cHg7dmVydGljYWwtYWxpZ246dG9wfS5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X190YWd+Lm11bHRpc2VsZWN0X19zaW5nbGV7d2lkdGg6YXV0b30ubXVsdGlzZWxlY3RfX2lucHV0OmhvdmVyLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmhvdmVye2JvcmRlci1jb2xvcjojY2ZjZmNmfS5tdWx0aXNlbGVjdF9faW5wdXQ6Zm9jdXMsLm11bHRpc2VsZWN0X19zaW5nbGU6Zm9jdXN7Ym9yZGVyLWNvbG9yOiNhOGE4YTg7b3V0bGluZTpub25lfS5tdWx0aXNlbGVjdF9fc2luZ2xle3BhZGRpbmctbGVmdDo2cHg7bWFyZ2luLWJvdHRvbTo4cHh9Lm11bHRpc2VsZWN0X190YWdzLXdyYXB7ZGlzcGxheTppbmxpbmV9Lm11bHRpc2VsZWN0X190YWdze21pbi1oZWlnaHQ6NDBweDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDQwcHggMCA4cHg7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JhY2tncm91bmQ6I2ZmZn0ubXVsdGlzZWxlY3RfX3RhZ3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjRweCAyNnB4IDRweCAxMHB4O2JvcmRlci1yYWRpdXM6NXB4O21hcmdpbi1yaWdodDoxMHB4O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTtiYWNrZ3JvdW5kOiM0MWI4ODM7bWFyZ2luLWJvdHRvbTo1cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjttYXgtd2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5tdWx0aXNlbGVjdF9fdGFnLWljb257Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6N3B4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3R5bGU6bm9ybWFsO3dpZHRoOjIycHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MjJweDt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtib3JkZXItcmFkaXVzOjVweH0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxEN1xcXCI7Y29sb3I6IzI2NmQ0ZDtmb250LXNpemU6MTRweH0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXJ7YmFja2dyb3VuZDojMzY5YTZlfS5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXM6YWZ0ZXIsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcjphZnRlcntjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fY3VycmVudHttaW4taGVpZ2h0OjQwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6OHB4IDEycHggMDtwYWRkaW5nLXJpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlOH0ubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0X19zZWxlY3R7bGluZS1oZWlnaHQ6MTZweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcn0ubXVsdGlzZWxlY3RfX3NlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDozOHB4O3JpZ2h0OjFweDt0b3A6MXB4O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZX0ubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmV7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MDt0b3A6NjUlO2NvbG9yOiM5OTk7bWFyZ2luLXRvcDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIn0ubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2NvbG9yOiNhZGFkYWQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbToxMHB4O3BhZGRpbmctdG9wOjJweH0ubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO21heC1oZWlnaHQ6MjQwcHg7b3ZlcmZsb3c6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTg7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDt6LWluZGV4OjE7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9Lm11bHRpc2VsZWN0X19jb250ZW50e2xpc3Qtc3R5bGU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wfS5tdWx0aXNlbGVjdC0tYWJvdmUgLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7Ym90dG9tOjEwMCU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZThlOGU4fS5tdWx0aXNlbGVjdF9fY29udGVudDo6d2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9Lm11bHRpc2VsZWN0X19lbGVtZW50e2Rpc3BsYXk6YmxvY2t9Lm11bHRpc2VsZWN0X19vcHRpb257ZGlzcGxheTpibG9jaztwYWRkaW5nOjEycHg7bWluLWhlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3RvcDowO3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGluZS1oZWlnaHQ6NDBweDtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjIwcHh9Lm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiM0MWI4ODM7b3V0bGluZTpub25lO2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3QpO2JhY2tncm91bmQ6IzQxYjg4Mztjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZHtiYWNrZ3JvdW5kOiNmM2YzZjM7Y29sb3I6IzM1NDk1ZTtmb250LXdlaWdodDo3MDB9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkOmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXNlbGVjdGVkKTtjb2xvcjpzaWx2ZXJ9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiNmZjZhNmE7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0OmFmdGVye2JhY2tncm91bmQ6I2ZmNmE2YTtjb250ZW50OmF0dHIoZGF0YS1kZXNlbGVjdCk7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3QtLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19zZWxlY3QsLm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtjb2xvcjojYTZhNmE2fS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtjdXJzb3I6dGV4dDtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZGVkZWRlIWltcG9ydGFudH0ubXVsdGlzZWxlY3QtZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdC1sZWF2ZS1hY3RpdmV7dHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlfS5tdWx0aXNlbGVjdC1lbnRlciwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZle29wYWNpdHk6MH0ubXVsdGlzZWxlY3RfX3N0cm9uZ3ttYXJnaW4tYm90dG9tOjhweDtsaW5lLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0e3RleHQtYWxpZ246cmlnaHR9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3JpZ2h0OmF1dG87bGVmdDoxcHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fdGFnc3twYWRkaW5nOjhweCA4cHggMCA0MHB4fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NvbnRlbnR7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXJ7cmlnaHQ6YXV0bztsZWZ0OjB9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fY2xlYXJ7cmlnaHQ6YXV0bztsZWZ0OjEycHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc3Bpbm5lcntyaWdodDphdXRvO2xlZnQ6MXB4fUBrZXlmcmFtZXMgYXswJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzMwNzZlOWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAzMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1NmNjMDUzMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzMwNzZlOWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDMwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdCB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgbWF4LWhlaWdodDogMzZweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzIHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogNHB4IDQwcHggMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnczpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2I1YjViNTtcXG59XFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWcge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdCB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3JlIHtcXG4gIHRvcDogNzAlO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7XFxufVxcbnNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBwYWRkaW5nOiA1cHggMjZweCA1cHggMTBweDtcXG59XFxuLm11bHRpc2VsZWN0LCAubXVsdGlzZWxlY3RfX2lucHV0LCAubXVsdGlzZWxlY3RfX3NpbmdsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQUU7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FBRTtBQUNyQjtJQUNFLHNCQUFzQjtDQUFFO0FBRTVCO0VBQ0UsMEJBQTBCO0NBQUU7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQUU7QUFFdEI7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQUU7QUFFeEI7RUFDRSwrQkFBK0I7RUFDL0IsZ0NBQWdDO0NBQUU7QUFFcEM7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7Q0FBRTtBQUVyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQUU7QUFFakI7RUFDRSxTQUFTO0NBQUU7QUFFYjtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQUU7QUFFaEI7RUFDRSwyQkFBMkI7Q0FBRTtBQUUvQjtFQUNFLGdCQUFnQjtDQUFFO0FBRXBCO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUFFO0FBRTdCO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtDQUFFO0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7Q0FBRVwiLFwiZmlsZVwiOlwiVnVlU2VsZWN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudnVlLXNlbGVjdCAubXVsdGlzZWxlY3Qge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiA0cHggNDBweCAwIDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1OyB9XFxuXFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Qge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xcbiAgdG9wOiA3MCU7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7IH1cXG5cXG5zcGFuLm11bHRpc2VsZWN0X190YWcge1xcbiAgcGFkZGluZzogNXB4IDI2cHggNXB4IDEwcHg7IH1cXG5cXG4ubXVsdGlzZWxlY3QsIC5tdWx0aXNlbGVjdF9faW5wdXQsIC5tdWx0aXNlbGVjdF9fc2luZ2xlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MzA3NmU5ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMzAiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidnVlLXNlbGVjdFwiPlxuICAgICAgICA8bXVsdGlzZWxlY3QgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICBzZWFyY2hhYmxlXG4gICAgICAgICAgICBhbGxvdy1lbXB0eVxuICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgOmludGVybmFsLXNlYXJjaD1cIiFpc1NlcnZlclNpZGVcIlxuICAgICAgICAgICAgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgOnRhZ2dhYmxlPVwidGFnZ2FibGVcIlxuICAgICAgICAgICAgOmNsZWFyLW9uLXNlbGVjdD1cIiFtdWx0aXBsZVwiXG4gICAgICAgICAgICA6Y2xvc2Utb24tc2VsZWN0PVwiIW11bHRpcGxlXCJcbiAgICAgICAgICAgIDpzZWxlY3QtbGFiZWw9XCJfXyhsYWJlbHMuc2VsZWN0KVwiXG4gICAgICAgICAgICA6ZGVzZWxlY3QtbGFiZWw9XCJfXyhsYWJlbHMuZGVzZWxlY3QpXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1sYWJlbD1cIl9fKGxhYmVscy5zZWxlY3RlZClcIlxuICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiX18ocGxhY2Vob2xkZXIpXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICA6b3B0aW9ucy1saW1pdD1cIjEwMFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbktleXNcIlxuICAgICAgICAgICAgOmN1c3RvbS1sYWJlbD1cImN1c3RvbUxhYmVsXCJcbiAgICAgICAgICAgIEBzZWFyY2gtY2hhbmdlPVwicXVlcnk9JGV2ZW50O2dldE9wdGlvbnMoKVwiXG4gICAgICAgICAgICBAdGFnPVwiJGVtaXQoJ3RhZycsICRldmVudClcIlxuICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50KVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cIm5vUmVzdWx0XCI+XG4gICAgICAgICAgICAgICAge3sgX18obGFiZWxzLm5vUmVzdWx0KSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25cIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCIkb3B0aW9ucy5maWx0ZXJzLmhpZ2hsaWdodChvcHRpb25MaXN0W3Byb3BzLm9wdGlvbl0sIHF1ZXJ5KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNsZWFyXCIgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11bHRpc2VsZWN0X19jbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICBAbW91c2Vkb3duLnByZXZlbnQuc3RvcD1cImNsZWFyKClcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvbXVsdGlzZWxlY3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBNdWx0aXNlbGVjdCBmcm9tICd2dWUtbXVsdGlzZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBNdWx0aXNlbGVjdCB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXlNYXA6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0YWdnYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBoYXNFcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBpdm90UGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21QYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnUGxlYXNlIGNob29zZScsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjdGVkJyxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6ICdQcmVzcyBlbnRlciB0byBzZWxlY3QnLFxuICAgICAgICAgICAgICAgIGRlc2VsZWN0OiAnUHJlc3MgZW50ZXIgdG8gZGVzZWxlY3QnLFxuICAgICAgICAgICAgICAgIG5vUmVzdWx0OiAnTm8gRWxlbWVudHMgRm91bmQnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIGlzU2VydmVyU2lkZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZSAhPT0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB8fCAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbktleXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlNYXAgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbkxpc3QpLm1hcChOdW1iZXIpXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbkxpc3QpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGhpZ2hsaWdodChvcHRpb24sIHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5LnNwbGl0KCcgJykuZmlsdGVyKHdvcmQgPT4gd29yZC5sZW5ndGgpLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb24ucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3JkfSlgLCAnZ2knKSwgJzxiPiQxPC9iPicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwaXZvdFBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21QYXJhbXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRPcHRpb25zID0gZGVib3VuY2UodGhpcy5nZXRPcHRpb25zLCA1MDApO1xuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3B0aW9uTGlzdDogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NlcnZlclNpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLnNvdXJjZSwgW10sIG51bGwpLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLmdldFBhcmFtcygpLFxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NPcHRpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgICAgIHBpdm90UGFyYW1zOiB0aGlzLnBpdm90UGFyYW1zLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtczogdGhpcy5jdXN0b21QYXJhbXMsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzT3B0aW9ucyhyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5ICYmICF0aGlzLnZhbHVlSXNNYXRjaGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlSXNNYXRjaGVkKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbktleXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24gPT09IHNlbGYudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbktleXMuZmlsdGVyKG9wdGlvbiA9PlxuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUuZmlsdGVyKHZhbCA9PiB2YWwgPT09IG9wdGlvbikubGVuZ3RoID4gMCkubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tTGFiZWwob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MaXN0W29wdGlvbl07XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNyYz1cInZ1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCI+PC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbiAgICAudnVlLXNlbGVjdCAubXVsdGlzZWxlY3Qge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFncyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA0MHB4IDAgNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTUwODAwO1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWctaWNvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgaW5wdXRbdHlwZT10ZXh0XS5tdWx0aXNlbGVjdF9faW5wdXQge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xuICAgICAgICB0b3A6IDcwJTtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgIH1cblxuICAgIHNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyNnB4IDVweCAxMHB4O1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdCwgLm11bHRpc2VsZWN0X19pbnB1dCwgLm11bHRpc2VsZWN0X19zaW5nbGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0X19jbGVhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIsIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWUiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZU11bHRpc2VsZWN0PXQoKTplLlZ1ZU11bHRpc2VsZWN0PXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG4pe2lmKGlbbl0pcmV0dXJuIGlbbl0uZXhwb3J0czt2YXIgcz1pW25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyx0KSxzLmw9ITAscy5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0Lmk9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHQuZD1mdW5jdGlvbihlLGksbil7dC5vKGUsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpufSl9LHQubj1mdW5jdGlvbihlKXt2YXIgaT1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKGksXCJhXCIsaSksaX0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCIvXCIsdCh0LnM9NCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsaSl7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gMCE9PWUmJighKCFBcnJheS5pc0FycmF5KGUpfHwwIT09ZS5sZW5ndGgpfHwhZSl9ZnVuY3Rpb24gbyhlLHQpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cInVuZGVmaW5lZFwiKSxudWxsPT09ZSYmKGU9XCJudWxsXCIpLCExPT09ZSYmKGU9XCJmYWxzZVwiKSwtMSE9PWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodC50cmltKCkpfWZ1bmN0aW9uIGwoZSx0LGksbil7cmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBvKG4oZSxpKSx0KX0pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFlLiRpc0xhYmVsfSl9ZnVuY3Rpb24gYShlLHQpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gaS5yZWR1Y2UoZnVuY3Rpb24oaSxuKXtyZXR1cm4gbltlXSYmbltlXS5sZW5ndGg/KGkucHVzaCh7JGdyb3VwTGFiZWw6blt0XSwkaXNMYWJlbDohMH0pLGkuY29uY2F0KG5bZV0pKTppfSxbXSl9fWZ1bmN0aW9uIHUoZSx0LGkscyxvKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHIubWFwKGZ1bmN0aW9uKHIpe3ZhciBhO2lmKCFyW2ldKXJldHVybiBjb25zb2xlLndhcm4oXCJPcHRpb25zIHBhc3NlZCB0byB2dWUtbXVsdGlzZWxlY3QgZG8gbm90IGNvbnRhaW4gZ3JvdXBzLCBkZXNwaXRlIHRoZSBjb25maWcuXCIpLFtdO3ZhciB1PWwocltpXSxlLHQsbyk7cmV0dXJuIHUubGVuZ3RoPyhhPXt9LG4oYSxzLHJbc10pLG4oYSxpLHUpLGEpOltdfSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGg9aSgyKSxwPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0oaCksZD1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9QXJyYXkoZSksaT0wO2k8ZTtpKyspdFtpXT1hcmd1bWVudHNbaV07cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiB0KGUpfSxlKX19O3QuZGVmYXVsdD17ZGF0YTpmdW5jdGlvbigpe3JldHVybntzZWFyY2g6XCJcIixpc09wZW46ITEscHJlZmZlcmVkT3BlbkRpcmVjdGlvbjpcImJlbG93XCIsb3B0aW1pemVkSGVpZ2h0OnRoaXMubWF4SGVpZ2h0LGludGVybmFsVmFsdWU6dGhpcy52YWx1ZXx8MD09PXRoaXMudmFsdWU/KDAscC5kZWZhdWx0KShBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpP3RoaXMudmFsdWU6W3RoaXMudmFsdWVdKTpbXX19LHByb3BzOntpbnRlcm5hbFNlYXJjaDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LG9wdGlvbnM6e3R5cGU6QXJyYXkscmVxdWlyZWQ6ITB9LG11bHRpcGxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sdmFsdWU6e3R5cGU6bnVsbCxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuW119fSx0cmFja0J5Ont0eXBlOlN0cmluZ30sbGFiZWw6e3R5cGU6U3RyaW5nfSxzZWFyY2hhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sY2xlYXJPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGhpZGVTZWxlY3RlZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHBsYWNlaG9sZGVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiU2VsZWN0IG9wdGlvblwifSxhbGxvd0VtcHR5Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0scmVzZXRBZnRlcjp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGNsb3NlT25TZWxlY3Q6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxjdXN0b21MYWJlbDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHMoZSk/XCJcIjp0P2VbdF06ZX19LHRhZ2dhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sdGFnUGxhY2Vob2xkZXI6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJQcmVzcyBlbnRlciB0byBjcmVhdGUgYSB0YWdcIn0sdGFnUG9zaXRpb246e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJ0b3BcIn0sbWF4Ont0eXBlOltOdW1iZXIsQm9vbGVhbl0sZGVmYXVsdDohMX0saWQ6e2RlZmF1bHQ6bnVsbH0sb3B0aW9uc0xpbWl0Ont0eXBlOk51bWJlcixkZWZhdWx0OjFlM30sZ3JvdXBWYWx1ZXM6e3R5cGU6U3RyaW5nfSxncm91cExhYmVsOnt0eXBlOlN0cmluZ30sYmxvY2tLZXlzOnt0eXBlOkFycmF5LGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm5bXX19LHByZXNlcnZlU2VhcmNoOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX19LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLm11bHRpcGxlfHx0aGlzLmNsZWFyT25TZWxlY3R8fGNvbnNvbGUud2FybihcIltWdWUtTXVsdGlzZWxlY3Qgd2Fybl06IENsZWFyT25TZWxlY3QgYW5kIE11bHRpcGxlIHByb3BzIGNhbuKAmXQgYmUgYm90aCBzZXQgdG8gZmFsc2UuXCIpLCF0aGlzLm11bHRpcGxlJiZ0aGlzLm1heCYmY29uc29sZS53YXJuKFwiW1Z1ZS1NdWx0aXNlbGVjdCB3YXJuXTogTWF4IHByb3Agc2hvdWxkIG5vdCBiZSB1c2VkIHdoZW4gcHJvcCBNdWx0aXBsZSBlcXVhbHMgZmFsc2UuXCIpfSxjb21wdXRlZDp7ZmlsdGVyZWRPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWFyY2h8fFwiXCIsdD1lLnRvTG93ZXJDYXNlKCkudHJpbSgpLGk9dGhpcy5vcHRpb25zLmNvbmNhdCgpO3JldHVybiBpPXRoaXMuaW50ZXJuYWxTZWFyY2g/dGhpcy5ncm91cFZhbHVlcz90aGlzLmZpbHRlckFuZEZsYXQoaSx0LHRoaXMubGFiZWwpOmwoaSx0LHRoaXMubGFiZWwsdGhpcy5jdXN0b21MYWJlbCk6dGhpcy5ncm91cFZhbHVlcz9hKHRoaXMuZ3JvdXBWYWx1ZXMsdGhpcy5ncm91cExhYmVsKShpKTppLGk9dGhpcy5oaWRlU2VsZWN0ZWQ/aS5maWx0ZXIodGhpcy5pc05vdFNlbGVjdGVkKTppLHRoaXMudGFnZ2FibGUmJnQubGVuZ3RoJiYhdGhpcy5pc0V4aXN0aW5nT3B0aW9uKHQpJiYoXCJib3R0b21cIj09PXRoaXMudGFnUG9zaXRpb24/aS5wdXNoKHtpc1RhZzohMCxsYWJlbDplfSk6aS51bnNoaWZ0KHtpc1RhZzohMCxsYWJlbDplfSkpLGkuc2xpY2UoMCx0aGlzLm9wdGlvbnNMaW1pdCl9LHZhbHVlS2V5czpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMudHJhY2tCeT90aGlzLmludGVybmFsVmFsdWUubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0W2UudHJhY2tCeV19KTp0aGlzLmludGVybmFsVmFsdWV9LG9wdGlvbktleXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybih0aGlzLmdyb3VwVmFsdWVzP3RoaXMuZmxhdEFuZFN0cmlwKHRoaXMub3B0aW9ucyk6dGhpcy5vcHRpb25zKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGUuY3VzdG9tTGFiZWwodCxlLmxhYmVsKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCl9KX0sY3VycmVudE9wdGlvbkxhYmVsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubXVsdGlwbGU/dGhpcy5zZWFyY2hhYmxlP1wiXCI6dGhpcy5wbGFjZWhvbGRlcjp0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoP3RoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy5pbnRlcm5hbFZhbHVlWzBdKTp0aGlzLnNlYXJjaGFibGU/XCJcIjp0aGlzLnBsYWNlaG9sZGVyfX0sd2F0Y2g6e2ludGVybmFsVmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLnJlc2V0QWZ0ZXImJnRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGgmJih0aGlzLnNlYXJjaD1cIlwiLHRoaXMuaW50ZXJuYWxWYWx1ZT1bXSl9LHNlYXJjaDpmdW5jdGlvbigpe3RoaXMuJGVtaXQoXCJzZWFyY2gtY2hhbmdlXCIsdGhpcy5zZWFyY2gsdGhpcy5pZCl9LHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuaW50ZXJuYWxWYWx1ZT10aGlzLmdldEludGVybmFsVmFsdWUoZSl9fSxtZXRob2RzOntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlPygwLHAuZGVmYXVsdCkodGhpcy5pbnRlcm5hbFZhbHVlKTowPT09dGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aD9udWxsOigwLHAuZGVmYXVsdCkodGhpcy5pbnRlcm5hbFZhbHVlWzBdKX0sZ2V0SW50ZXJuYWxWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWV8fHZvaWQgMD09PWU/W106dGhpcy5tdWx0aXBsZT8oMCxwLmRlZmF1bHQpKGUpOigwLHAuZGVmYXVsdCkoW2VdKX0sZmlsdGVyQW5kRmxhdDpmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGQodSh0LGksdGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwsdGhpcy5jdXN0b21MYWJlbCksYSh0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCkpKGUpfSxmbGF0QW5kU3RyaXA6ZnVuY3Rpb24oZSl7cmV0dXJuIGQoYSh0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCkscikoZSl9LHVwZGF0ZVNlYXJjaDpmdW5jdGlvbihlKXt0aGlzLnNlYXJjaD1lfSxpc0V4aXN0aW5nT3B0aW9uOmZ1bmN0aW9uKGUpe3JldHVybiEhdGhpcy5vcHRpb25zJiZ0aGlzLm9wdGlvbktleXMuaW5kZXhPZihlKT4tMX0saXNTZWxlY3RlZDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnRyYWNrQnk/ZVt0aGlzLnRyYWNrQnldOmU7cmV0dXJuIHRoaXMudmFsdWVLZXlzLmluZGV4T2YodCk+LTF9LGlzTm90U2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIXRoaXMuaXNTZWxlY3RlZChlKX0sZ2V0T3B0aW9uTGFiZWw6ZnVuY3Rpb24oZSl7aWYocyhlKSlyZXR1cm5cIlwiO2lmKGUuaXNUYWcpcmV0dXJuIGUubGFiZWw7aWYoZS4kaXNMYWJlbClyZXR1cm4gZS4kZ3JvdXBMYWJlbDt2YXIgdD10aGlzLmN1c3RvbUxhYmVsKGUsdGhpcy5sYWJlbCk7cmV0dXJuIHModCk/XCJcIjp0fSxzZWxlY3Q6ZnVuY3Rpb24oZSx0KXtpZighKC0xIT09dGhpcy5ibG9ja0tleXMuaW5kZXhPZih0KXx8dGhpcy5kaXNhYmxlZHx8ZS4kaXNMYWJlbHx8ZS4kaXNEaXNhYmxlZCkmJighdGhpcy5tYXh8fCF0aGlzLm11bHRpcGxlfHx0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoIT09dGhpcy5tYXgpJiYoXCJUYWJcIiE9PXR8fHRoaXMucG9pbnRlckRpcnR5KSl7aWYoZS5pc1RhZyl0aGlzLiRlbWl0KFwidGFnXCIsZS5sYWJlbCx0aGlzLmlkKSx0aGlzLnNlYXJjaD1cIlwiLHRoaXMuY2xvc2VPblNlbGVjdCYmIXRoaXMubXVsdGlwbGUmJnRoaXMuZGVhY3RpdmF0ZSgpO2Vsc2V7aWYodGhpcy5pc1NlbGVjdGVkKGUpKXJldHVybiB2b2lkKFwiVGFiXCIhPT10JiZ0aGlzLnJlbW92ZUVsZW1lbnQoZSkpO3RoaXMubXVsdGlwbGU/dGhpcy5pbnRlcm5hbFZhbHVlLnB1c2goZSk6dGhpcy5pbnRlcm5hbFZhbHVlPVtlXSx0aGlzLiRlbWl0KFwic2VsZWN0XCIsKDAscC5kZWZhdWx0KShlKSx0aGlzLmlkKSx0aGlzLiRlbWl0KFwiaW5wdXRcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCksdGhpcy5jbGVhck9uU2VsZWN0JiYodGhpcy5zZWFyY2g9XCJcIil9dGhpcy5jbG9zZU9uU2VsZWN0JiZ0aGlzLmRlYWN0aXZhdGUoKX19LHJlbW92ZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXTtpZighdGhpcy5kaXNhYmxlZCl7aWYoIXRoaXMuYWxsb3dFbXB0eSYmdGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aDw9MSlyZXR1cm4gdm9pZCB0aGlzLmRlYWN0aXZhdGUoKTt2YXIgaT1cIm9iamVjdFwiPT09KHZvaWQgMD09PWU/XCJ1bmRlZmluZWRcIjpjKGUpKT90aGlzLnZhbHVlS2V5cy5pbmRleE9mKGVbdGhpcy50cmFja0J5XSk6dGhpcy52YWx1ZUtleXMuaW5kZXhPZihlKTt0aGlzLmludGVybmFsVmFsdWUuc3BsaWNlKGksMSksdGhpcy4kZW1pdChcImlucHV0XCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpLHRoaXMuJGVtaXQoXCJyZW1vdmVcIiwoMCxwLmRlZmF1bHQpKGUpLHRoaXMuaWQpLHRoaXMuY2xvc2VPblNlbGVjdCYmdCYmdGhpcy5kZWFjdGl2YXRlKCl9fSxyZW1vdmVMYXN0RWxlbWVudDpmdW5jdGlvbigpey0xPT09dGhpcy5ibG9ja0tleXMuaW5kZXhPZihcIkRlbGV0ZVwiKSYmMD09PXRoaXMuc2VhcmNoLmxlbmd0aCYmQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpJiZ0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy5pbnRlcm5hbFZhbHVlW3RoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGgtMV0sITEpfSxhY3RpdmF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5pc09wZW58fHRoaXMuZGlzYWJsZWR8fCh0aGlzLmFkanVzdFBvc2l0aW9uKCksdGhpcy5ncm91cFZhbHVlcyYmMD09PXRoaXMucG9pbnRlciYmdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoJiYodGhpcy5wb2ludGVyPTEpLHRoaXMuaXNPcGVuPSEwLHRoaXMuc2VhcmNoYWJsZT8odGhpcy5wcmVzZXJ2ZVNlYXJjaHx8KHRoaXMuc2VhcmNoPVwiXCIpLHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCl7cmV0dXJuIGUuJHJlZnMuc2VhcmNoLmZvY3VzKCl9KSk6dGhpcy4kZWwuZm9jdXMoKSx0aGlzLiRlbWl0KFwib3BlblwiLHRoaXMuaWQpKX0sZGVhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuJiYodGhpcy5pc09wZW49ITEsdGhpcy5zZWFyY2hhYmxlP3RoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKTp0aGlzLiRlbC5ibHVyKCksdGhpcy5wcmVzZXJ2ZVNlYXJjaHx8KHRoaXMuc2VhcmNoPVwiXCIpLHRoaXMuJGVtaXQoXCJjbG9zZVwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSl9LHRvZ2dsZTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuP3RoaXMuZGVhY3RpdmF0ZSgpOnRoaXMuYWN0aXZhdGUoKX0sYWRqdXN0UG9zaXRpb246ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT10aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsdD13aW5kb3cuaW5uZXJIZWlnaHQtdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO3Q+dGhpcy5tYXhIZWlnaHR8fHQ+ZXx8XCJiZWxvd1wiPT09dGhpcy5vcGVuRGlyZWN0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcGVuRGlyZWN0aW9uPyh0aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb249XCJiZWxvd1wiLHRoaXMub3B0aW1pemVkSGVpZ2h0PU1hdGgubWluKHQtNDAsdGhpcy5tYXhIZWlnaHQpKToodGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYWJvdmVcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbihlLTQwLHRoaXMubWF4SGVpZ2h0KSl9fX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXtkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3BvaW50ZXI6MCxwb2ludGVyRGlydHk6ITF9fSxwcm9wczp7c2hvd1BvaW50ZXI6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxvcHRpb25IZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6NDB9fSxjb21wdXRlZDp7cG9pbnRlclBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9pbnRlcip0aGlzLm9wdGlvbkhlaWdodH0sdmlzaWJsZUVsZW1lbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW1pemVkSGVpZ2h0L3RoaXMub3B0aW9uSGVpZ2h0fX0sd2F0Y2g6e2ZpbHRlcmVkT3B0aW9uczpmdW5jdGlvbigpe3RoaXMucG9pbnRlckFkanVzdCgpfSxpc09wZW46ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXJEaXJ0eT0hMX19LG1ldGhvZHM6e29wdGlvbkhpZ2hsaWdodDpmdW5jdGlvbihlLHQpe3JldHVybntcIm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodFwiOmU9PT10aGlzLnBvaW50ZXImJnRoaXMuc2hvd1BvaW50ZXIsXCJtdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZFwiOnRoaXMuaXNTZWxlY3RlZCh0KX19LGFkZFBvaW50ZXJFbGVtZW50OmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiRW50ZXJcIix0PWUua2V5O3RoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aD4wJiZ0aGlzLnNlbGVjdCh0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnBvaW50ZXJdLHQpLHRoaXMucG9pbnRlclJlc2V0KCl9LHBvaW50ZXJGb3J3YXJkOmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyPHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aC0xJiYodGhpcy5wb2ludGVyKyssdGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcDw9dGhpcy5wb2ludGVyUG9zaXRpb24tKHRoaXMudmlzaWJsZUVsZW1lbnRzLTEpKnRoaXMub3B0aW9uSGVpZ2h0JiYodGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcD10aGlzLnBvaW50ZXJQb3NpdGlvbi0odGhpcy52aXNpYmxlRWxlbWVudHMtMSkqdGhpcy5vcHRpb25IZWlnaHQpLHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMucG9pbnRlcl0uJGlzTGFiZWwmJnRoaXMucG9pbnRlckZvcndhcmQoKSksdGhpcy5wb2ludGVyRGlydHk9ITB9LHBvaW50ZXJCYWNrd2FyZDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcj4wPyh0aGlzLnBvaW50ZXItLSx0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPj10aGlzLnBvaW50ZXJQb3NpdGlvbiYmKHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A9dGhpcy5wb2ludGVyUG9zaXRpb24pLHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMucG9pbnRlcl0uJGlzTGFiZWwmJnRoaXMucG9pbnRlckJhY2t3YXJkKCkpOnRoaXMuZmlsdGVyZWRPcHRpb25zWzBdLiRpc0xhYmVsJiZ0aGlzLnBvaW50ZXJGb3J3YXJkKCksdGhpcy5wb2ludGVyRGlydHk9ITB9LHBvaW50ZXJSZXNldDpmdW5jdGlvbigpe3RoaXMuY2xvc2VPblNlbGVjdCYmKHRoaXMucG9pbnRlcj0wLHRoaXMuJHJlZnMubGlzdCYmKHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A9MCkpfSxwb2ludGVyQWRqdXN0OmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyPj10aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgtMSYmKHRoaXMucG9pbnRlcj10aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg/dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoLTE6MCl9LHBvaW50ZXJTZXQ6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyPWUsdGhpcy5wb2ludGVyRGlydHk9ITB9fX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUubWFwKG4pO2lmKGUmJlwib2JqZWN0XCI9PT0odm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOnMoZSkpKXtmb3IodmFyIHQ9e30saT1PYmplY3Qua2V5cyhlKSxvPTAsbD1pLmxlbmd0aDtvPGw7bysrKXt2YXIgcj1pW29dO3Rbcl09bihlW3JdKX1yZXR1cm4gdH1yZXR1cm4gZX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aSg2KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1pKDUpLG89aS5uKHMpLGw9aSg4KSxyPWkoNyksYT1uLHU9cihvLmEsbC5hLCExLGEsbnVsbCxudWxsKTt0LmRlZmF1bHQ9dS5leHBvcnRzfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWVwQ2xvbmU9dC5wb2ludGVyTWl4aW49dC5tdWx0aXNlbGVjdE1peGluPXQuTXVsdGlzZWxlY3Q9dm9pZCAwO3ZhciBzPWkoMyksbz1uKHMpLGw9aSgwKSxyPW4obCksYT1pKDEpLHU9bihhKSxjPWkoMiksaD1uKGMpO3QuZGVmYXVsdD1vLmRlZmF1bHQsdC5NdWx0aXNlbGVjdD1vLmRlZmF1bHQsdC5tdWx0aXNlbGVjdE1peGluPXIuZGVmYXVsdCx0LnBvaW50ZXJNaXhpbj11LmRlZmF1bHQsdC5kZWVwQ2xvbmU9aC5kZWZhdWx0fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9aSgwKSxvPW4ocyksbD1pKDEpLHI9bihsKTt0LmRlZmF1bHQ9e25hbWU6XCJ2dWUtbXVsdGlzZWxlY3RcIixtaXhpbnM6W28uZGVmYXVsdCxyLmRlZmF1bHRdLHByb3BzOntuYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHNlbGVjdExhYmVsOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiUHJlc3MgZW50ZXIgdG8gc2VsZWN0XCJ9LHNlbGVjdGVkTGFiZWw6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJTZWxlY3RlZFwifSxkZXNlbGVjdExhYmVsOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiUHJlc3MgZW50ZXIgdG8gcmVtb3ZlXCJ9LHNob3dMYWJlbHM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxsaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDo5OTk5OX0sbWF4SGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjMwMH0sbGltaXRUZXh0Ont0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJhbmQgXCIrZStcIiBtb3JlXCJ9fSxsb2FkaW5nOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZGlzYWJsZWQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxvcGVuRGlyZWN0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHNob3dOb1Jlc3VsdHM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSx0YWJpbmRleDp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfX0sY29tcHV0ZWQ6e3Zpc2libGVWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP3RoaXMuaW50ZXJuYWxWYWx1ZS5zbGljZSgwLHRoaXMubGltaXQpOltdfSxkZXNlbGVjdExhYmVsVGV4dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dMYWJlbHM/dGhpcy5kZXNlbGVjdExhYmVsOlwiXCJ9LHNlbGVjdExhYmVsVGV4dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dMYWJlbHM/dGhpcy5zZWxlY3RMYWJlbDpcIlwifSxzZWxlY3RlZExhYmVsVGV4dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dMYWJlbHM/dGhpcy5zZWxlY3RlZExhYmVsOlwiXCJ9LGlucHV0U3R5bGU6ZnVuY3Rpb24oKXtpZih0aGlzLm11bHRpcGxlJiZ0aGlzLnZhbHVlJiZ0aGlzLnZhbHVlLmxlbmd0aClyZXR1cm4gdGhpcy5pc09wZW4/e3dpZHRoOlwiYXV0b1wifTp7d2lkdGg6XCIwXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0sY29udGVudFN0eWxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5sZW5ndGg/e2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn06e2Rpc3BsYXk6XCJibG9ja1wifX0saXNBYm92ZTpmdW5jdGlvbigpe3JldHVyblwiYWJvdmVcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJ0b3BcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJiZWxvd1wiIT09dGhpcy5vcGVuRGlyZWN0aW9uJiZcImJvdHRvbVwiIT09dGhpcy5vcGVuRGlyZWN0aW9uJiZcImFib3ZlXCI9PT10aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb259fX19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsaSxuLHMsbyl7dmFyIGwscj1lPWV8fHt9LGE9dHlwZW9mIGUuZGVmYXVsdDtcIm9iamVjdFwiIT09YSYmXCJmdW5jdGlvblwiIT09YXx8KGw9ZSxyPWUuZGVmYXVsdCk7dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yLm9wdGlvbnM6cjt0JiYodS5yZW5kZXI9dC5yZW5kZXIsdS5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMsdS5fY29tcGlsZWQ9ITApLGkmJih1LmZ1bmN0aW9uYWw9ITApLHMmJih1Ll9zY29wZUlkPXMpO3ZhciBjO2lmKG8/KGM9ZnVuY3Rpb24oZSl7ZT1lfHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQsZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fChlPV9fVlVFX1NTUl9DT05URVhUX18pLG4mJm4uY2FsbCh0aGlzLGUpLGUmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobyl9LHUuX3NzclJlZ2lzdGVyPWMpOm4mJihjPW4pLGMpe3ZhciBoPXUuZnVuY3Rpb25hbCxwPWg/dS5yZW5kZXI6dS5iZWZvcmVDcmVhdGU7aD8odS5faW5qZWN0U3R5bGVzPWMsdS5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYy5jYWxsKHQpLHAoZSx0KX0pOnUuYmVmb3JlQ3JlYXRlPXA/W10uY29uY2F0KHAsYyk6W2NdfXJldHVybntlc01vZHVsZTpsLGV4cG9ydHM6cixvcHRpb25zOnV9fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsaT1lLl9zZWxmLl9jfHx0O3JldHVybiBpKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RcIixjbGFzczp7XCJtdWx0aXNlbGVjdC0tYWN0aXZlXCI6ZS5pc09wZW4sXCJtdWx0aXNlbGVjdC0tZGlzYWJsZWRcIjplLmRpc2FibGVkLFwibXVsdGlzZWxlY3QtLWFib3ZlXCI6ZS5pc0Fib3ZlfSxhdHRyczp7dGFiaW5kZXg6ZS5zZWFyY2hhYmxlPy0xOmUudGFiaW5kZXh9LG9uOntmb2N1czpmdW5jdGlvbih0KXtlLmFjdGl2YXRlKCl9LGJsdXI6ZnVuY3Rpb24odCl7IWUuc2VhcmNoYWJsZSYmZS5kZWFjdGl2YXRlKCl9LGtleWRvd246W2Z1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJkb3duXCIsNDAsdC5rZXkpP3QudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6KHQucHJldmVudERlZmF1bHQoKSx2b2lkIGUucG9pbnRlckZvcndhcmQoKSk6bnVsbH0sZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcInVwXCIsMzgsdC5rZXkpP3QudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6KHQucHJldmVudERlZmF1bHQoKSx2b2lkIGUucG9pbnRlckJhY2t3YXJkKCkpOm51bGx9LGZ1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJlbnRlclwiLDEzLHQua2V5KXx8IWUuX2sodC5rZXlDb2RlLFwidGFiXCIsOSx0LmtleSk/KHQuc3RvcFByb3BhZ2F0aW9uKCksdC50YXJnZXQhPT10LmN1cnJlbnRUYXJnZXQ/bnVsbDp2b2lkIGUuYWRkUG9pbnRlckVsZW1lbnQodCkpOm51bGx9XSxrZXl1cDpmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJlc2NcIiwyNyx0LmtleSkpcmV0dXJuIG51bGw7ZS5kZWFjdGl2YXRlKCl9fX0sW2UuX3QoXCJjYXJldFwiLFtpKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3NlbGVjdFwiLG9uOnttb3VzZWRvd246ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksZS50b2dnbGUoKX19fSldLHt0b2dnbGU6ZS50b2dnbGV9KSxlLl92KFwiIFwiKSxlLl90KFwiY2xlYXJcIixudWxsLHtzZWFyY2g6ZS5zZWFyY2h9KSxlLl92KFwiIFwiKSxpKFwiZGl2XCIse3JlZjpcInRhZ3NcIixzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWdzXCJ9LFtpKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLnZpc2libGVWYWx1ZS5sZW5ndGg+MCxleHByZXNzaW9uOlwidmlzaWJsZVZhbHVlLmxlbmd0aCA+IDBcIn1dLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3RhZ3Mtd3JhcFwifSxbZS5fbChlLnZpc2libGVWYWx1ZSxmdW5jdGlvbih0KXtyZXR1cm5bZS5fdChcInRhZ1wiLFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWdcIn0sW2koXCJzcGFuXCIse2RvbVByb3BzOnt0ZXh0Q29udGVudDplLl9zKGUuZ2V0T3B0aW9uTGFiZWwodCkpfX0pLGUuX3YoXCIgXCIpLGkoXCJpXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3RhZy1pY29uXCIsYXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIix0YWJpbmRleDpcIjFcIn0sb246e2tleWRvd246ZnVuY3Rpb24oaSl7aWYoIShcImJ1dHRvblwiaW4gaSkmJmUuX2soaS5rZXlDb2RlLFwiZW50ZXJcIiwxMyxpLmtleSkpcmV0dXJuIG51bGw7aS5wcmV2ZW50RGVmYXVsdCgpLGUucmVtb3ZlRWxlbWVudCh0KX0sbW91c2Vkb3duOmZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxlLnJlbW92ZUVsZW1lbnQodCl9fX0pXSldLHtvcHRpb246dCxzZWFyY2g6ZS5zZWFyY2gscmVtb3ZlOmUucmVtb3ZlRWxlbWVudH0pXX0pXSwyKSxlLl92KFwiIFwiKSxlLmludGVybmFsVmFsdWUmJmUuaW50ZXJuYWxWYWx1ZS5sZW5ndGg+ZS5saW1pdD9baShcInN0cm9uZ1wiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zdHJvbmdcIixkb21Qcm9wczp7dGV4dENvbnRlbnQ6ZS5fcyhlLmxpbWl0VGV4dChlLmludGVybmFsVmFsdWUubGVuZ3RoLWUubGltaXQpKX19KV06ZS5fZSgpLGUuX3YoXCIgXCIpLGkoXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwibXVsdGlzZWxlY3RfX2xvYWRpbmdcIn19LFtlLl90KFwibG9hZGluZ1wiLFtpKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLmxvYWRpbmcsZXhwcmVzc2lvbjpcImxvYWRpbmdcIn1dLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3NwaW5uZXJcIn0pXSldLDIpLGUuX3YoXCIgXCIpLGUuc2VhcmNoYWJsZT9pKFwiaW5wdXRcIix7cmVmOlwic2VhcmNoXCIsc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9faW5wdXRcIixzdHlsZTplLmlucHV0U3R5bGUsYXR0cnM6e25hbWU6ZS5uYW1lLGlkOmUuaWQsdHlwZTpcInRleHRcIixhdXRvY29tcGxldGU6XCJvZmZcIixwbGFjZWhvbGRlcjplLnBsYWNlaG9sZGVyLGRpc2FibGVkOmUuZGlzYWJsZWQsdGFiaW5kZXg6ZS50YWJpbmRleH0sZG9tUHJvcHM6e3ZhbHVlOmUuaXNPcGVuP2Uuc2VhcmNoOmUuY3VycmVudE9wdGlvbkxhYmVsfSxvbjp7aW5wdXQ6ZnVuY3Rpb24odCl7ZS51cGRhdGVTZWFyY2godC50YXJnZXQudmFsdWUpfSxmb2N1czpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5hY3RpdmF0ZSgpfSxibHVyOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxlLmRlYWN0aXZhdGUoKX0sa2V5dXA6ZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZXNjXCIsMjcsdC5rZXkpKXJldHVybiBudWxsO2UuZGVhY3RpdmF0ZSgpfSxrZXlkb3duOltmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJkb3duXCIsNDAsdC5rZXkpKXJldHVybiBudWxsO3QucHJldmVudERlZmF1bHQoKSxlLnBvaW50ZXJGb3J3YXJkKCl9LGZ1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcInVwXCIsMzgsdC5rZXkpKXJldHVybiBudWxsO3QucHJldmVudERlZmF1bHQoKSxlLnBvaW50ZXJCYWNrd2FyZCgpfSxmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZW50ZXJcIiwxMyx0LmtleSk/KHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLHQudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6dm9pZCBlLmFkZFBvaW50ZXJFbGVtZW50KHQpKTpudWxsfSxmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJkZWxldGVcIixbOCw0Nl0sdC5rZXkpKXJldHVybiBudWxsO3Quc3RvcFByb3BhZ2F0aW9uKCksZS5yZW1vdmVMYXN0RWxlbWVudCgpfV19fSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGUuc2VhcmNoYWJsZT9lLl9lKCk6aShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fc2luZ2xlXCIsZG9tUHJvcHM6e3RleHRDb250ZW50OmUuX3MoZS5jdXJyZW50T3B0aW9uTGFiZWwpfSxvbjp7bW91c2Vkb3duOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxlLnRvZ2dsZSh0KX19fSldLDIpLGUuX3YoXCIgXCIpLGkoXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwibXVsdGlzZWxlY3RcIn19LFtpKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLmlzT3BlbixleHByZXNzaW9uOlwiaXNPcGVuXCJ9XSxyZWY6XCJsaXN0XCIsc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyXCIsc3R5bGU6e21heEhlaWdodDplLm9wdGltaXplZEhlaWdodCtcInB4XCJ9LG9uOntmb2N1czplLmFjdGl2YXRlLG1vdXNlZG93bjpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9fX0sW2koXCJ1bFwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19jb250ZW50XCIsc3R5bGU6ZS5jb250ZW50U3R5bGV9LFtlLl90KFwiYmVmb3JlTGlzdFwiKSxlLl92KFwiIFwiKSxlLm11bHRpcGxlJiZlLm1heD09PWUuaW50ZXJuYWxWYWx1ZS5sZW5ndGg/aShcImxpXCIsW2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvblwifSxbZS5fdChcIm1heEVsZW1lbnRzXCIsW2UuX3YoXCJNYXhpbXVtIG9mIFwiK2UuX3MoZS5tYXgpK1wiIG9wdGlvbnMgc2VsZWN0ZWQuIEZpcnN0IHJlbW92ZSBhIHNlbGVjdGVkIG9wdGlvbiB0byBzZWxlY3QgYW5vdGhlci5cIildKV0sMildKTplLl9lKCksZS5fdihcIiBcIiksIWUubWF4fHxlLmludGVybmFsVmFsdWUubGVuZ3RoPGUubWF4P2UuX2woZS5maWx0ZXJlZE9wdGlvbnMsZnVuY3Rpb24odCxuKXtyZXR1cm4gaShcImxpXCIse2tleTpuLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2VsZW1lbnRcIn0sW3QmJih0LiRpc0xhYmVsfHx0LiRpc0Rpc2FibGVkKT9lLl9lKCk6aShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fb3B0aW9uXCIsY2xhc3M6ZS5vcHRpb25IaWdobGlnaHQobix0KSxhdHRyczp7XCJkYXRhLXNlbGVjdFwiOnQmJnQuaXNUYWc/ZS50YWdQbGFjZWhvbGRlcjplLnNlbGVjdExhYmVsVGV4dCxcImRhdGEtc2VsZWN0ZWRcIjplLnNlbGVjdGVkTGFiZWxUZXh0LFwiZGF0YS1kZXNlbGVjdFwiOmUuZGVzZWxlY3RMYWJlbFRleHR9LG9uOntjbGljazpmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLGUuc2VsZWN0KHQpfSxtb3VzZWVudGVyOmZ1bmN0aW9uKHQpe2lmKHQudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0KXJldHVybiBudWxsO2UucG9pbnRlclNldChuKX19fSxbZS5fdChcIm9wdGlvblwiLFtpKFwic3BhblwiLFtlLl92KGUuX3MoZS5nZXRPcHRpb25MYWJlbCh0KSkpXSldLHtvcHRpb246dCxzZWFyY2g6ZS5zZWFyY2h9KV0sMiksZS5fdihcIiBcIiksdCYmKHQuJGlzTGFiZWx8fHQuJGlzRGlzYWJsZWQpP2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvbiBtdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZFwiLGNsYXNzOmUub3B0aW9uSGlnaGxpZ2h0KG4sdCl9LFtlLl90KFwib3B0aW9uXCIsW2koXCJzcGFuXCIsW2UuX3YoZS5fcyhlLmdldE9wdGlvbkxhYmVsKHQpKSldKV0se29wdGlvbjp0LHNlYXJjaDplLnNlYXJjaH0pXSwyKTplLl9lKCldKX0pOmUuX2UoKSxlLl92KFwiIFwiKSxpKFwibGlcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmUuc2hvd05vUmVzdWx0cyYmMD09PWUuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCYmZS5zZWFyY2gmJiFlLmxvYWRpbmcsZXhwcmVzc2lvbjpcInNob3dOb1Jlc3VsdHMgJiYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDAgJiYgc2VhcmNoICYmICFsb2FkaW5nKVwifV19LFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb25cIn0sW2UuX3QoXCJub1Jlc3VsdFwiLFtlLl92KFwiTm8gZWxlbWVudHMgZm91bmQuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBzZWFyY2ggcXVlcnkuXCIpXSldLDIpXSksZS5fdihcIiBcIiksZS5fdChcImFmdGVyTGlzdFwiKV0sMildKV0pXSwyKX0scz1bXSxvPXtyZW5kZXI6bixzdGF0aWNSZW5kZXJGbnM6c307dC5hPW99XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMzAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2dWUtc2VsZWN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJtdWx0aXNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHsgXCJoYXMtZXJyb3JcIjogX3ZtLmhhc0Vycm9yIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiBcIlwiLFxuICAgICAgICAgICAgXCJhbGxvdy1lbXB0eVwiOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgIFwiaW50ZXJuYWwtc2VhcmNoXCI6ICFfdm0uaXNTZXJ2ZXJTaWRlLFxuICAgICAgICAgICAgbXVsdGlwbGU6IF92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIHRhZ2dhYmxlOiBfdm0udGFnZ2FibGUsXG4gICAgICAgICAgICBcImNsZWFyLW9uLXNlbGVjdFwiOiAhX3ZtLm11bHRpcGxlLFxuICAgICAgICAgICAgXCJjbG9zZS1vbi1zZWxlY3RcIjogIV92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIFwic2VsZWN0LWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLnNlbGVjdCksXG4gICAgICAgICAgICBcImRlc2VsZWN0LWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLmRlc2VsZWN0KSxcbiAgICAgICAgICAgIFwic2VsZWN0ZWQtbGFiZWxcIjogX3ZtLl9fKF92bS5sYWJlbHMuc2VsZWN0ZWQpLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5fXyhfdm0ucGxhY2Vob2xkZXIpLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICBcIm9wdGlvbnMtbGltaXRcIjogMTAwLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLm9wdGlvbktleXMsXG4gICAgICAgICAgICBcImN1c3RvbS1sYWJlbFwiOiBfdm0uY3VzdG9tTGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInNlYXJjaC1jaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5xdWVyeSA9ICRldmVudFxuICAgICAgICAgICAgICBfdm0uZ2V0T3B0aW9ucygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidGFnXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRvcHRpb25zLmZpbHRlcnMuaGlnaGxpZ2h0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3B0aW9uTGlzdFtwcm9wcy5vcHRpb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xlYXJcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm11bHRpc2VsZWN0X19jbGVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJub1Jlc3VsdFwiIH0sIHNsb3Q6IFwibm9SZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oX3ZtLmxhYmVscy5ub1Jlc3VsdCkpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzMwNzZlOWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDMwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWI1MmU5MjdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0xYjUyZTkyN1wiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xYjUyZTkyN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFiNTJlOTI3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlMTgxOWRmYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWI1MmU5MjdcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnVlLWZvcm1bZGF0YS12LTFiNTJlOTI3XSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4udGl0bGUgLmljb25bZGF0YS12LTFiNTJlOTI3XSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGlCQUFpQjtDQUFFO0FBRXJCO0VBQ0UsNEJBQTRCO0NBQUVcIixcImZpbGVcIjpcIlZ1ZUZvcm0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52dWUtZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLnRpdGxlIC5pY29uIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xYjUyZTkyN1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGl0bGUgaXMtNVwiXG4gICAgICAgICAgICB2LWlmPVwiZGF0YS5pY29uIHx8IGRhdGEudGl0bGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEuaWNvblwiPlxuICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cImRhdGEuaWNvblwiPjwvZmE+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0YS50aXRsZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICA8L2g1PlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiXG4gICAgICAgICAgICBjbGFzcz1cInZ1ZS1mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmllbGQgaW4gZGF0YS5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiY29sdW1uU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZmllbGQubWV0YS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKGZpZWxkLmxhYmVsKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwIGlzLWRhbmdlciBpcy1wdWxsZWQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JzLmdldChmaWVsZC5uYW1lKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZmllbGQubWV0YS5jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1mb3JtLWlucHV0IHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICdpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1zZWxlY3Qgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ3NlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpZWxkLm1ldGEub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXktbWFwPVwiZmllbGQubWV0YS5rZXlNYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwiZmllbGQubWV0YS5zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmaWVsZC5tZXRhLm11bHRpcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImZpZWxkLm1ldGEucGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ2RhdGVwaWNrZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cImZpZWxkLm1ldGEuZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XCJmaWVsZC5tZXRhLnRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0aW1lcGlja2VyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XCJmaWVsZC5tZXRhLmZvcm1hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUtb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoZmllbGQubmFtZSkgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJvd3M9XCJmaWVsZC5tZXRhLnJvd3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEuYWN0aW9ucy5kZXN0cm95XCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5mb3JiaWRkZW5cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5jbGFzc1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJzaG93TW9kYWwgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmljb25cIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlKClcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuY3JlYXRlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuY3JlYXRlLmZvcmJpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uaWNvblwiPjwvZmE+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2RhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLnN0b3JlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuc3RvcmUuZm9yYmlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cImRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uaWNvblwiPjwvZmE+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2RhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmNsYXNzLCB7ICdpcy1sb2FkaW5nJzogbG9hZGluZyB9XVwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEuYWN0aW9ucy51cGRhdGVcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRhdGEuYWN0aW9ucy51cGRhdGUuZm9yYmlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5pY29uXCI+PC9mYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1jbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxtb2RhbCB2LWlmPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcIlxuICAgICAgICAgICAgOnNob3c9XCJzaG93TW9kYWxcIlxuICAgICAgICAgICAgOl9fPVwiX19cIlxuICAgICAgICAgICAgOm1lc3NhZ2U9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubWVzc2FnZVwiXG4gICAgICAgICAgICBAY2FuY2VsPVwic2hvd01vZGFsID0gZmFsc2VcIlxuICAgICAgICAgICAgQGNvbW1pdD1cImRlc3Ryb3koKVwiPlxuICAgICAgICA8L21vZGFsPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7XG4gICAgZmFUcmFzaEFsdCwgZmFQbHVzLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi9jbGFzc2VzL0Vycm9ycyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbC52dWUnO1xuaW1wb3J0IFZ1ZVNlbGVjdCBmcm9tICcuL1Z1ZVNlbGVjdC52dWUnO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyLnZ1ZSc7XG5pbXBvcnQgVnVlRm9ybUlucHV0IGZyb20gJy4vVnVlRm9ybUlucHV0LnZ1ZSc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhVHJhc2hBbHQsIGZhUGx1cywgZmFDaGVjaywgZmFFeGNsYW1hdGlvblRyaWFuZ2xlKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdWdWVGb3JtJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTW9kYWwsIFZ1ZVNlbGVjdCwgRGF0ZXBpY2tlciwgVnVlRm9ybUlucHV0LFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIGNvbHVtblNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gYGlzLSR7cGFyc2VJbnQoMTIgLyB0aGlzLmRhdGEuY29sdW1ucywgMTApfWA7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm1ldGhvZCA9PT0gJ3Bvc3QnXG4gICAgICAgICAgICAgICAgPyB0aGlzLmRhdGEuYWN0aW9ucy5zdG9yZS5wYXRoXG4gICAgICAgICAgICAgICAgOiB0aGlzLmRhdGEuYWN0aW9ucy51cGRhdGUucGF0aDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjcmVhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjcmVhdGUnKTtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogdGhpcy5kYXRhLmFjdGlvbnMuY3JlYXRlLnJvdXRlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvc1t0aGlzLmRhdGEubWV0aG9kXSh0aGlzLnBhdGgsIHRoaXMuZm9ybURhdGEoKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5yZWRpcmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogZGF0YS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGRhdGEuZXJyb3JzKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybURhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpZWxkcy5yZWR1Y2UoKG9iamVjdCwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBvYmplY3RbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfSwgeyBfcGFyYW1zOiB0aGlzLnBhcmFtcyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5kZWxldGUodGhpcy5kYXRhLmFjdGlvbnMuZGVzdHJveS5wYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGVzdHJveScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBkYXRhLnJlZGlyZWN0IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICAudnVlLWZvcm0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5pbmNsdWRlcyhmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhmaWVsZCkgPyB0aGlzLmVycm9yc1tmaWVsZF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIHNldChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGZpZWxkKSkge1xuICAgICAgICAgICAgVnVlLmRlbGV0ZSh0aGlzLmVycm9ycywgZmllbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZpZWxkID0+IHRoaXMuY2xlYXIoZmllbGQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL2NsYXNzZXMvRXJyb3JzLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZGRiMzgyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdkZGIzODJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1ODBlZWUyNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdEQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTW9kYWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJhbmltYXRlZCBmYWRlSW5cXFwiXFxuICAgICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVPdXRcXFwiPlxcbiAgICAgICAgPGRpdiA6Y2xhc3M9XFxcIlsnbW9kYWwnLCB7ICdpcy1hY3RpdmUnOiBzaG93IH1dXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwic3VidGl0bGUgaXMtNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3sgX18obWVzc2FnZSB8fCBcXFwiQXJlIHlvdSBzdXJlID9cXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2FuY2VsJylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJDYW5jZWxcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtZGFuZ2VyIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjb21taXQnKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oXFxcIlllc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC90cmFuc2l0aW9uPlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgICBzaG93OiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXNzYWdlOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgX186IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC5tb2RhbC5pcy1hY3RpdmUge1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZGRiMzgyYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnbW9kYWwnLCB7ICdpcy1hY3RpdmUnOiBzaG93IH1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInN1YnRpdGxlIGlzLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXCJBcmUgeW91IHN1cmUgP1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgnY2FuY2VsJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NvbW1pdCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIF9fOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidHJhbnNpdGlvblwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYW5pbWF0ZWQgZmFkZU91dFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiBbXCJtb2RhbFwiLCB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH1dIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oX3ZtLm1lc3NhZ2UgfHwgXCJBcmUgeW91IHN1cmUgP1wiKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkNhbmNlbFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXIgaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY29tbWl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIlllc1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZGRiMzgyYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2RkYjM4MmFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFmbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXCIpXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXRlcGlja2VyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00ZDQ0M2ZlMlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00ZDQ0M2ZlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRkNDQzZmUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vbWF0ZXJpYWxfZ3JlZW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjFkYmI5YzMwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9tYXRlcmlhbF9ncmVlbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL21hdGVyaWFsX2dyZWVuLmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZDQ0M2ZlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZsYXRwaWNrci1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4sXFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG1heC1oZWlnaHQ6IDY0MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogOTk5OTk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZS5vcGVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMub3BlbiB7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrcyB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNUaW1lIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItbGVmdDogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5ub0NhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBsZWZ0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YWZ0ZXIge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIG1hcmdpbjogMCAtNXB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgbWFyZ2luOiAwIC00cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm90dG9tOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlIHtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3Itd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItbW9udGgge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmaWxsOiAjZmZmO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcGFkZGluZzogMTBweCBjYWxjKDMuNTclIC0gMS41cHgpO1xcbiAgei1pbmRleDogMztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIGksXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoIHtcXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG4gIGxlZnQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICByaWdodDogMDtcXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxufVxcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIgc3ZnLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciBzdmcge1xcbiAgZmlsbDogI2Y2NDc0NztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHtcXG4gIHdpZHRoOiAxNHB4O1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnIHBhdGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyBwYXRoIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgZmlsbDogaW5oZXJpdDtcXG59XFxuLm51bUlucHV0V3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQsXFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDRweCAwIDJweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgbGluZS1oZWlnaHQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMDUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMzJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXAge1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHBhdGgge1xcbiAgZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIgc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGgge1xcbiAgZm9udC1zaXplOiAxMzUlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzUlO1xcbiAgbGVmdDogMTIuNSU7XFxuICBwYWRkaW5nOiA2LjE2cHggMCAwIDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVSaWdodCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVjaDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNmNoO1xcbiAgd2lkdGg6IDdjaFxcXFwwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAwIDAgMCAwLjVjaDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXSxcXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjhweDtcXG59XFxuc3Bhbi5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcXG59XFxuLmZsYXRwaWNrci1kYXlzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1kYXlzOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIG1pbi13aWR0aDogMzA3Ljg3NXB4O1xcbiAgbWF4LXdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnQsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWRheSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdpZHRoOiAxNC4yODU3MTQzJTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE0LjI4NTcxNDMlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gIG1heC13aWR0aDogMzlweDtcXG4gIGhlaWdodDogMzlweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheSB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcXG4gIGJhY2tncm91bmQ6ICNiYmI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5uZXh0TW9udGhEYXkge1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgI2UyZTJlMiwgNXB4IDAgMCAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQubmV4dE1vbnRoRGF5IHtcXG4gIGNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMyk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5mbGF0cGlja3ItZGF5LndlZWsuc2VsZWN0ZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAjMWJiYzliLCA1cHggMCAwICMxYmJjOWI7XFxufVxcbi5yYW5nZU1vZGUgLmZsYXRwaWNrci1kYXkge1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGZsb2F0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1pbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXJDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG59XFxuLmZsYXRwaWNrci10aW1lOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZS5oYXNTZWNvbmRzIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDI2JTtcXG59XFxuLmZsYXRwaWNrci10aW1lLnRpbWUyNGhyIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDQ5JTtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLWhvdXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItbWludXRlLFxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci10aW1lLXNlcGFyYXRvcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxOCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4uZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVMZWZ0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlTGVmdCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVMZWZ0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVPdXQge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW4ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdCQUF3QjtVQUNoQixnQkFBZ0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsK0JBQStCO01BQzNCLDJCQUEyQjtFQUMvQixnREFBZ0Q7VUFDeEMsd0NBQXdDO0NBQ2pEO0FBQ0Q7O0VBRUUsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UscUVBQXFFO1VBQzdELDZEQUE2RDtDQUN0RTtBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0NBQ1Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDs7RUFFRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztDQUMxQztBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEOztFQUVFLG1CQUFtQjtF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QUF1QztDQUNoRDtDQUNGO0FBQ0Q7QUFDRTtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtJQUNFLDBDQUEwQztZQUNsQyxrQ0FBa0M7Q0FDM0M7Q0FDRjtBQUNEO0FBQ0U7SUFDRSw4Q0FBOEM7WUFDdEMsc0NBQXNDO0NBQy9DO0FBQ0Q7SUFDRSwwQ0FBMEM7WUFDbEMsa0NBQWtDO0NBQzNDO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRjtBQUNEO0FBQ0U7SUFDRSxXQUFXO0NBQ1o7QUFDRDtJQUNFLFdBQVc7Q0FDWjtDQUNGO0FBQ0Q7QUFDRTtJQUNFLFdBQVc7Q0FDWjtBQUNEO0lBQ0UsV0FBVztDQUNaO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRlwiLFwiZmlsZVwiOlwibWF0ZXJpYWxfZ3JlZW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGF0cGlja3ItY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBtYXgtaGVpZ2h0OiA2NDBweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDk5OTk5O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUub3BlbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljLm9wZW4ge1xcbiAgei1pbmRleDogOTk5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3Mge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzVGltZSAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIubm9DYWxlbmRhci5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgbGVmdDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBtYXJnaW46IDAgLTVweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIG1hcmdpbjogMCAtNHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvdHRvbTogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgdG9wOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGhlaWdodDogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHBhZGRpbmc6IDEwcHggY2FsYygzLjU3JSAtIDEuNXB4KTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBpLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICBsZWZ0OiAwO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgcmlnaHQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIgc3ZnIHtcXG4gIGZpbGw6ICNmNjQ3NDc7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyB7XFxuICB3aWR0aDogMTRweDtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyBwYXRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIGZpbGw6IGluaGVyaXQ7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0LFxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgcGFkZGluZzogMCA0cHggMCAycHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGxpbmUtaGVpZ2h0OiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjA1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMyU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuNik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd24ge1xcbiAgdG9wOiA1MCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyBwYXRoIHtcXG4gIGZpbGw6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHtcXG4gIGZvbnQtc2l6ZTogMTM1JTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGxlZnQ6IDEyLjUlO1xcbiAgcGFkZGluZzogNi4xNnB4IDAgMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGgge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41Y2g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGg6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDZjaDtcXG4gIHdpZHRoOiA3Y2hcXFxcMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMCAwIDAgMC41Y2g7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5pdGlhbDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF0sXFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXTpob3ZlciB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci13ZWVrZGF5cyB7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxufVxcbnNwYW4uZmxhdHBpY2tyLXdlZWtkYXkge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAxcHggMCAwIDA7XFxufVxcbi5mbGF0cGlja3ItZGF5cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItZGF5czpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBtaW4td2lkdGg6IDMwNy44NzVweDtcXG4gIG1heC13aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0LFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVSaWdodE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1kYXkge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3aWR0aDogMTQuMjg1NzE0MyU7XFxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNC4yODU3MTQzJTtcXG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICBtYXgtd2lkdGg6IDM5cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxuICBsaW5lLWhlaWdodDogMzlweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcXG4gIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS50b2RheTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UubmV4dE1vbnRoRGF5IHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlICsgLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2Uge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTEwcHggMCAwICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjZTJlMmUyLCA1cHggMCAwICNlMmUyZTI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZCxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLm5leHRNb250aERheSB7XFxuICBjb2xvcjogcmdiYSg3Miw3Miw3MiwwLjMpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICMxYmJjOWIsIDVweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbn1cXG4ucmFuZ2VNb2RlIC5mbGF0cGlja3ItZGF5IHtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgc3Bhbi5mbGF0cGlja3ItZGF5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1yQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcbi5mbGF0cGlja3ItdGltZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUuaGFzU2Vjb25kcyAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiAyNiU7XFxufVxcbi5mbGF0cGlja3ItdGltZS50aW1lMjRociAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiA0OSU7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1ob3VyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLW1pbnV0ZSxcXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLXNlY29uZCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItdGltZS1zZXBhcmF0b3IsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMiU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMTglO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06aG92ZXIsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcXG59XFxuLmZsYXRwaWNrci1pbnB1dFtyZWFkb25seV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1xuLy8gbW9kdWxlIGlkID0gMTE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhNGY3NjliYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2xlYXJbZGF0YS12LTRkNDQzZmUyXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jbGVhcltkYXRhLXYtNGQ0NDNmZTJdOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLmNsZWFyW2RhdGEtdi00ZDQ0M2ZlMl06YWZ0ZXIge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLmNsZWFyW2RhdGEtdi00ZDQ0M2ZlMl06YWZ0ZXIsIC5jbGVhcltkYXRhLXYtNGQ0NDNmZTJdOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxuICB0b3A6IDNweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztDQUFFO0FBQ2I7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0NBQUU7QUFDN0I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0NBQUU7QUFFaEM7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsWUFBWTtDQUFFXCIsXCJmaWxlXCI6XCJEYXRlcGlja2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMTBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxOyB9XFxuICAuY2xlYXI6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuICAuY2xlYXI6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLmNsZWFyOmFmdGVyLCAuY2xlYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZDogI2FhYTtcXG4gIHRvcDogM3B4O1xcbiAgcmlnaHQ6IDEwcHg7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBjb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgPGZhIGljb249XCJjbG9ja1wiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRpbWVPbmx5XCI+XG4gICAgICAgICAgICA8L2ZhPlxuICAgICAgICAgICAgPGZhIGljb249XCJjYWxlbmRhci1hbHRcIiB2LWVsc2U+PC9mYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsZWFyXCJcbiAgICAgICAgICAgIHYtaWY9XCJ2YWx1ZVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJwaWNrZXIuY2xlYXIoKVwiPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBGbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFDbG9jaywgZmFDYWxlbmRhckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFDbG9jaywgZmFDYWxlbmRhckFsdCk7XG5cbi8vIGNvbnN0IEZsYXRwaWNrckwxMG5zID0ge1xuLy8gICAgIHJvOiByZXF1aXJlKCdmbGF0cGlja3IvZGlzdC9sMTBuL3JvLmpzJykucm8sXG4vLyB9O1xuLy8gRmxhdHBpY2tyLmxvY2FsaXplKEZsYXRwaWNrckwxMG5zW1N0b3JlLnVzZXIucHJlZmVyZW5jZXMuZ2xvYmFsLmxhbmddKTsgLy9maXhtZVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0aW1lT25seToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBEYXRlJywgLy8gZml4bWVcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZC1tLVknLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZm9ybS1jb250cm9sJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBpY2tlcjogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY29uZmlnKHNlbGYgPSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbGlja09wZW5zOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5vQ2FsZW5kYXI6IHRoaXMudGltZU9ubHksXG4gICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdGhpcy50aW1lIHx8IHRoaXMudGltZU9ubHksXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXRlcywgZGF0ZVN0cikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdpbnB1dCcsIGRhdGVTdHIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5waWNrZXIuc2V0RGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMucGlja2VyID0gbmV3IEZsYXRwaWNrcih0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLCB0aGlzLmNvbmZpZyk7XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGlja2VyLmRlc3Ryb3koKTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzcmM9XCJmbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXCI+PC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4gICAgLmNsZWFyIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmNsZWFyOmFmdGVyLCAuY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlIiwiLyogZmxhdHBpY2tyIHYzLjEuNCwgQGxpY2Vuc2UgTUlUICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuZmxhdHBpY2tyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxuXHJcblxyXG52YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xuXG5mdW5jdGlvbiBjb21wYXJlRGF0ZXMoZGF0ZTEsIGRhdGUyLCB0aW1lbGVzcykge1xyXG4gICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiAobmV3IERhdGUoZGF0ZTEuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGRhdGUyLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcclxufVxyXG52YXIgbW9udGhUb1N0ciA9IGZ1bmN0aW9uIChtb250aE51bWJlciwgc2hvcnRoYW5kLCBsb2NhbGUpIHsgcmV0dXJuIGxvY2FsZS5tb250aHNbc2hvcnRoYW5kID8gXCJzaG9ydGhhbmRcIiA6IFwibG9uZ2hhbmRcIl1bbW9udGhOdW1iZXJdOyB9O1xyXG52YXIgZ2V0V2VlayA9IGZ1bmN0aW9uIChnaXZlbkRhdGUpIHtcclxuICAgIHZhciBvbmVqYW4gPSBuZXcgRGF0ZShnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKCgoZ2l2ZW5EYXRlLmdldFRpbWUoKSAtIG9uZWphbi5nZXRUaW1lKCkpIC8gODY0MDAwMDAgK1xyXG4gICAgICAgIG9uZWphbi5nZXREYXkoKSArXHJcbiAgICAgICAgMSkgL1xyXG4gICAgICAgIDcpO1xyXG59O1xyXG52YXIgZHVyYXRpb24gPSB7XHJcbiAgICBEQVk6IDg2NDAwMDAwLFxyXG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XHJcbiAgICBfZGlzYWJsZTogW10sXHJcbiAgICBfZW5hYmxlOiBbXSxcclxuICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxyXG4gICAgYWx0Rm9ybWF0OiBcIkYgaiwgWVwiLFxyXG4gICAgYWx0SW5wdXQ6IGZhbHNlLFxyXG4gICAgYWx0SW5wdXRDbGFzczogXCJmb3JtLWNvbnRyb2wgaW5wdXRcIixcclxuICAgIGFuaW1hdGU6IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSA9PT0gLTEsXHJcbiAgICBhcmlhRGF0ZUZvcm1hdDogXCJGIGosIFlcIixcclxuICAgIGNsaWNrT3BlbnM6IHRydWUsXHJcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxyXG4gICAgY29uanVuY3Rpb246IFwiLCBcIixcclxuICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcclxuICAgIGRlZmF1bHRIb3VyOiAxMixcclxuICAgIGRlZmF1bHRNaW51dGU6IDAsXHJcbiAgICBkZWZhdWx0U2Vjb25kczogMCxcclxuICAgIGRpc2FibGU6IFtdLFxyXG4gICAgZGlzYWJsZU1vYmlsZTogZmFsc2UsXHJcbiAgICBlbmFibGU6IFtdLFxyXG4gICAgZW5hYmxlU2Vjb25kczogZmFsc2UsXHJcbiAgICBlbmFibGVUaW1lOiBmYWxzZSxcclxuICAgIGdldFdlZWs6IGdldFdlZWssXHJcbiAgICBob3VySW5jcmVtZW50OiAxLFxyXG4gICAgaWdub3JlZEZvY3VzRWxlbWVudHM6IFtdLFxyXG4gICAgaW5saW5lOiBmYWxzZSxcclxuICAgIGxvY2FsZTogXCJkZWZhdWx0XCIsXHJcbiAgICBtaW51dGVJbmNyZW1lbnQ6IDUsXHJcbiAgICBtb2RlOiBcInNpbmdsZVwiLFxyXG4gICAgbmV4dEFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsXHJcbiAgICBub0NhbGVuZGFyOiBmYWxzZSxcclxuICAgIG9uQ2hhbmdlOiBbXSxcclxuICAgIG9uQ2xvc2U6IFtdLFxyXG4gICAgb25EYXlDcmVhdGU6IFtdLFxyXG4gICAgb25EZXN0cm95OiBbXSxcclxuICAgIG9uS2V5RG93bjogW10sXHJcbiAgICBvbk1vbnRoQ2hhbmdlOiBbXSxcclxuICAgIG9uT3BlbjogW10sXHJcbiAgICBvblBhcnNlQ29uZmlnOiBbXSxcclxuICAgIG9uUmVhZHk6IFtdLFxyXG4gICAgb25WYWx1ZVVwZGF0ZTogW10sXHJcbiAgICBvblllYXJDaGFuZ2U6IFtdLFxyXG4gICAgcGx1Z2luczogW10sXHJcbiAgICBwb3NpdGlvbjogXCJhdXRvXCIsXHJcbiAgICBwb3NpdGlvbkVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHByZXZBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTUuMjA3IDguNDcxbDcuMTQ2IDcuMTQ3LTAuNzA3IDAuNzA3LTcuODUzLTcuODU0IDcuODU0LTcuODUzIDAuNzA3IDAuNzA3LTcuMTQ3IDcuMTQ2eicgLz48L3N2Zz5cIixcclxuICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogZmFsc2UsXHJcbiAgICBzdGF0aWM6IGZhbHNlLFxyXG4gICAgdGltZV8yNGhyOiBmYWxzZSxcclxuICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcclxuICAgIHdyYXA6IGZhbHNlLFxyXG59O1xuXG52YXIgZW5nbGlzaCA9IHtcclxuICAgIHdlZWtkYXlzOiB7XHJcbiAgICAgICAgc2hvcnRoYW5kOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXHJcbiAgICAgICAgbG9uZ2hhbmQ6IFtcclxuICAgICAgICAgICAgXCJTdW5kYXlcIixcclxuICAgICAgICAgICAgXCJNb25kYXlcIixcclxuICAgICAgICAgICAgXCJUdWVzZGF5XCIsXHJcbiAgICAgICAgICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICAgICAgICAgIFwiVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgXCJGcmlkYXlcIixcclxuICAgICAgICAgICAgXCJTYXR1cmRheVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgbW9udGhzOiB7XHJcbiAgICAgICAgc2hvcnRoYW5kOiBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgICAgIFwiRmViXCIsXHJcbiAgICAgICAgICAgIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgIFwiSnVuXCIsXHJcbiAgICAgICAgICAgIFwiSnVsXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsXHJcbiAgICAgICAgICAgIFwiU2VwXCIsXHJcbiAgICAgICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsXHJcbiAgICAgICAgICAgIFwiRGVjXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsb25naGFuZDogW1xyXG4gICAgICAgICAgICBcIkphbnVhcnlcIixcclxuICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICAgICAgICBcIk1hcmNoXCIsXHJcbiAgICAgICAgICAgIFwiQXByaWxcIixcclxuICAgICAgICAgICAgXCJNYXlcIixcclxuICAgICAgICAgICAgXCJKdW5lXCIsXHJcbiAgICAgICAgICAgIFwiSnVseVwiLFxyXG4gICAgICAgICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICAgICAgICBcIkRlY2VtYmVyXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBkYXlzSW5Nb250aDogWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxyXG4gICAgZmlyc3REYXlPZldlZWs6IDAsXHJcbiAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnRoKSB7XHJcbiAgICAgICAgdmFyIHMgPSBudGggJSAxMDA7XHJcbiAgICAgICAgaWYgKHMgPiAzICYmIHMgPCAyMSlcclxuICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcclxuICAgICAgICBzd2l0Y2ggKHMgJSAxMCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdFwiO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZFwiO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyZFwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmFuZ2VTZXBhcmF0b3I6IFwiIHRvIFwiLFxyXG4gICAgd2Vla0FiYnJldmlhdGlvbjogXCJXa1wiLFxyXG4gICAgc2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxyXG4gICAgdG9nZ2xlVGl0bGU6IFwiQ2xpY2sgdG8gdG9nZ2xlXCIsXHJcbiAgICBhbVBNOiBbXCJBTVwiLCBcIlBNXCJdLFxyXG59O1xuXG52YXIgcGFkID0gZnVuY3Rpb24gKG51bWJlcikgeyByZXR1cm4gKFwiMFwiICsgbnVtYmVyKS5zbGljZSgtMik7IH07XHJcbnZhciBpbnQgPSBmdW5jdGlvbiAoYm9vbCkgeyByZXR1cm4gKGJvb2wgPT09IHRydWUgPyAxIDogMCk7IH07XHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gICAgaWYgKGltbWVkaWF0ZSA9PT0gdm9pZCAwKSB7IGltbWVkaWF0ZSA9IGZhbHNlOyB9XHJcbiAgICB2YXIgdGltZW91dDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHRpbWVvdXQgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKVxyXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9LCB3YWl0KTtcclxuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lb3V0KVxyXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG52YXIgYXJyYXlpZnkgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgPyBvYmogOiBbb2JqXTtcclxufTtcclxuZnVuY3Rpb24gbW91c2VEZWx0YShlKSB7XHJcbiAgICB2YXIgZGVsdGEgPSBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZO1xyXG4gICAgcmV0dXJuIGRlbHRhID49IDAgPyAxIDogLTE7XHJcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lLCBib29sKSB7XHJcbiAgICBpZiAoYm9vbCA9PT0gdHJ1ZSlcclxuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICB2YXIgZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcclxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiXCI7XHJcbiAgICBlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICByZXR1cm4gZTtcclxufVxyXG5mdW5jdGlvbiBjbGVhck5vZGUobm9kZSkge1xyXG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZClcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XHJcbn1cclxuZnVuY3Rpb24gZmluZFBhcmVudChub2RlLCBjb25kaXRpb24pIHtcclxuICAgIGlmIChjb25kaXRpb24obm9kZSkpXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpXHJcbiAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnQobm9kZS5wYXJlbnROb2RlLCBjb25kaXRpb24pO1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJJbnB1dChpbnB1dENsYXNzTmFtZSkge1xyXG4gICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibnVtSW5wdXRXcmFwcGVyXCIpLCBudW1JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm51bUlucHV0IFwiICsgaW5wdXRDbGFzc05hbWUpLCBhcnJvd1VwID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd1VwXCIpLCBhcnJvd0Rvd24gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93RG93blwiKTtcclxuICAgIG51bUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIG51bUlucHV0LnBhdHRlcm4gPSBcIlxcXFxkKlwiO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChudW1JbnB1dCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93VXApO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cblxudmFyIGRvX25vdGhpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH07XHJcbnZhciByZXZGb3JtYXQgPSB7XHJcbiAgICBEOiBkb19ub3RoaW5nLFxyXG4gICAgRjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoTmFtZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLmxvbmdoYW5kLmluZGV4T2YobW9udGhOYW1lKSk7XHJcbiAgICB9LFxyXG4gICAgRzogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xyXG4gICAgfSxcclxuICAgIEg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcclxuICAgIH0sXHJcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcbiAgICB9LFxyXG4gICAgSzogZnVuY3Rpb24gKGRhdGVPYmosIGFtUE0pIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyICsgMTIgKiBpbnQoL3BtL2kudGVzdChhbVBNKSkpO1xyXG4gICAgfSxcclxuICAgIE06IGZ1bmN0aW9uIChkYXRlT2JqLCBzaG9ydE1vbnRoLCBsb2NhbGUpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKGxvY2FsZS5tb250aHMuc2hvcnRoYW5kLmluZGV4T2Yoc2hvcnRNb250aCkpO1xyXG4gICAgfSxcclxuICAgIFM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRTZWNvbmRzKHBhcnNlRmxvYXQoc2Vjb25kcykpO1xyXG4gICAgfSxcclxuICAgIFU6IGZ1bmN0aW9uIChfLCB1bml4U2Vjb25kcykgeyByZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4U2Vjb25kcykgKiAxMDAwKTsgfSxcclxuICAgIFc6IGZ1bmN0aW9uIChkYXRlT2JqLCB3ZWVrTnVtKSB7XHJcbiAgICAgICAgdmFyIHdlZWtOdW1iZXIgPSBwYXJzZUludCh3ZWVrTnVtKTtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xyXG4gICAgfSxcclxuICAgIFk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRGdWxsWWVhcihwYXJzZUZsb2F0KHllYXIpKTtcclxuICAgIH0sXHJcbiAgICBaOiBmdW5jdGlvbiAoXywgSVNPRGF0ZSkgeyByZXR1cm4gbmV3IERhdGUoSVNPRGF0ZSk7IH0sXHJcbiAgICBkOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcbiAgICB9LFxyXG4gICAgaDogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xyXG4gICAgfSxcclxuICAgIGk6IGZ1bmN0aW9uIChkYXRlT2JqLCBtaW51dGVzKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNaW51dGVzKHBhcnNlRmxvYXQobWludXRlcykpO1xyXG4gICAgfSxcclxuICAgIGo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcclxuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcclxuICAgIH0sXHJcbiAgICBsOiBkb19ub3RoaW5nLFxyXG4gICAgbTogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChwYXJzZUZsb2F0KG1vbnRoKSAtIDEpO1xyXG4gICAgfSxcclxuICAgIG46IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aCkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcclxuICAgIH0sXHJcbiAgICBzOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2Vjb25kcykge1xyXG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcclxuICAgIH0sXHJcbiAgICB3OiBkb19ub3RoaW5nLFxyXG4gICAgeTogZnVuY3Rpb24gKGRhdGVPYmosIHllYXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKDIwMDAgKyBwYXJzZUZsb2F0KHllYXIpKTtcclxuICAgIH0sXHJcbn07XHJcbnZhciB0b2tlblJlZ2V4ID0ge1xyXG4gICAgRDogXCIoXFxcXHcrKVwiLFxyXG4gICAgRjogXCIoXFxcXHcrKVwiLFxyXG4gICAgRzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIEg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBKOiBcIihcXFxcZFxcXFxkfFxcXFxkKVxcXFx3K1wiLFxyXG4gICAgSzogXCIoYW18QU18QW18YU18cG18UE18UG18cE0pXCIsXHJcbiAgICBNOiBcIihcXFxcdyspXCIsXHJcbiAgICBTOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgVTogXCIoLispXCIsXHJcbiAgICBXOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgWTogXCIoXFxcXGR7NH0pXCIsXHJcbiAgICBaOiBcIiguKylcIixcclxuICAgIGQ6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBoOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgaTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIGo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBsOiBcIihcXFxcdyspXCIsXHJcbiAgICBtOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgbjogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIHM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICB3OiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgeTogXCIoXFxcXGR7Mn0pXCIsXHJcbn07XHJcbnZhciBmb3JtYXRzID0ge1xyXG4gICAgWjogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTsgfSxcclxuICAgIEQ6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLnNob3J0aGFuZFtmb3JtYXRzLncoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKV07XHJcbiAgICB9LFxyXG4gICAgRjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBtb250aFRvU3RyKGZvcm1hdHMubihkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIC0gMSwgZmFsc2UsIGxvY2FsZSk7XHJcbiAgICB9LFxyXG4gICAgRzogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBwYWQoZm9ybWF0cy5oKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykpO1xyXG4gICAgfSxcclxuICAgIEg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTsgfSxcclxuICAgIEo6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLm9yZGluYWwgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGRhdGUuZ2V0RGF0ZSgpICsgbG9jYWxlLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgIDogZGF0ZS5nZXREYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgSzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgPiAxMSA/IFwiUE1cIiA6IFwiQU1cIik7IH0sXHJcbiAgICBNOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZGF0ZS5nZXRNb250aCgpLCB0cnVlLCBsb2NhbGUpO1xyXG4gICAgfSxcclxuICAgIFM6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpOyB9LFxyXG4gICAgVTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMDsgfSxcclxuICAgIFc6IGZ1bmN0aW9uIChkYXRlLCBfLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZ2V0V2VlayhkYXRlKTtcclxuICAgIH0sXHJcbiAgICBZOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpOyB9LFxyXG4gICAgZDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7IH0sXHJcbiAgICBoOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gKGRhdGUuZ2V0SG91cnMoKSAlIDEyID8gZGF0ZS5nZXRIb3VycygpICUgMTIgOiAxMik7IH0sXHJcbiAgICBpOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTsgfSxcclxuICAgIGo6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERhdGUoKTsgfSxcclxuICAgIGw6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLmxvbmdoYW5kW2RhdGUuZ2V0RGF5KCldO1xyXG4gICAgfSxcclxuICAgIG06IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7IH0sXHJcbiAgICBuOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTsgfSxcclxuICAgIHM6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldFNlY29uZHMoKTsgfSxcclxuICAgIHc6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERheSgpOyB9LFxyXG4gICAgeTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpLnN1YnN0cmluZygyKTsgfSxcclxufTtcblxuZnVuY3Rpb24gRmxhdHBpY2tySW5zdGFuY2UoZWxlbWVudCwgaW5zdGFuY2VDb25maWcpIHtcclxuICAgIHZhciBzZWxmID0ge307XHJcbiAgICBzZWxmLnBhcnNlRGF0ZSA9IHBhcnNlRGF0ZTtcclxuICAgIHNlbGYuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XHJcbiAgICBzZWxmLl9hbmltYXRpb25Mb29wID0gW107XHJcbiAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xyXG4gICAgc2VsZi5fYmluZCA9IGJpbmQ7XHJcbiAgICBzZWxmLl9zZXRIb3Vyc0Zyb21EYXRlID0gc2V0SG91cnNGcm9tRGF0ZTtcclxuICAgIHNlbGYuY2hhbmdlTW9udGggPSBjaGFuZ2VNb250aDtcclxuICAgIHNlbGYuY2hhbmdlWWVhciA9IGNoYW5nZVllYXI7XHJcbiAgICBzZWxmLmNsZWFyID0gY2xlYXI7XHJcbiAgICBzZWxmLmNsb3NlID0gY2xvc2U7XHJcbiAgICBzZWxmLl9jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcclxuICAgIHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XHJcbiAgICBzZWxmLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICAgIHNlbGYuanVtcFRvRGF0ZSA9IGp1bXBUb0RhdGU7XHJcbiAgICBzZWxmLm9wZW4gPSBvcGVuO1xyXG4gICAgc2VsZi5yZWRyYXcgPSByZWRyYXc7XHJcbiAgICBzZWxmLnNldCA9IHNldDtcclxuICAgIHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XHJcbiAgICBzZWxmLnRvZ2dsZSA9IHRvZ2dsZTtcclxuICAgIGZ1bmN0aW9uIHNldHVwSGVscGVyRnVuY3Rpb25zKCkge1xyXG4gICAgICAgIHNlbGYudXRpbHMgPSB7XHJcbiAgICAgICAgICAgIGdldERheXNJbk1vbnRoOiBmdW5jdGlvbiAobW9udGgsIHlyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IHZvaWQgMCkgeyBtb250aCA9IHNlbGYuY3VycmVudE1vbnRoOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoeXIgPT09IHZvaWQgMCkgeyB5ciA9IHNlbGYuY3VycmVudFllYXI7IH1cclxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMSAmJiAoKHlyICUgNCA9PT0gMCAmJiB5ciAlIDEwMCAhPT0gMCkgfHwgeXIgJSA0MDAgPT09IDApKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHNlbGYuZWxlbWVudCA9IHNlbGYuaW5wdXQgPSBlbGVtZW50O1xyXG4gICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgcGFyc2VDb25maWcoKTtcclxuICAgICAgICBzZXR1cExvY2FsZSgpO1xyXG4gICAgICAgIHNldHVwSW5wdXRzKCk7XHJcbiAgICAgICAgc2V0dXBEYXRlcygpO1xyXG4gICAgICAgIHNldHVwSGVscGVyRnVuY3Rpb25zKCk7XHJcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICBidWlsZCgpO1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8IHNlbGYuY29uZmlnLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPVxyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyO1xyXG4gICAgICAgIGlmIChzZWxmLndlZWtXcmFwcGVyICE9PSB1bmRlZmluZWQgJiYgc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIub2Zmc2V0V2lkdGggKyBzZWxmLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpXHJcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmluZFRvSW5zdGFuY2UoZm4pIHtcclxuICAgICAgICByZXR1cm4gZm4uYmluZChzZWxmKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyICYmICFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyLCBzZWxmLmNvbmZpZy5kZWZhdWx0TWludXRlLCBzZWxmLmNvbmZpZy5kZWZhdWx0U2Vjb25kcyksIGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVXcmFwcGVyKGUpO1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFzZWxmLm1pbkRhdGVIYXNUaW1lIHx8XHJcbiAgICAgICAgICAgIGUudHlwZSAhPT0gXCJpbnB1dFwiIHx8XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFtcG0ybWlsaXRhcnkoaG91ciwgYW1QTSkge1xyXG4gICAgICAgIHJldHVybiBob3VyICUgMTIgKyAxMiAqIGludChhbVBNID09PSBcIlBNXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWlsaXRhcnkyYW1wbShob3VyKSB7XHJcbiAgICAgICAgc3dpdGNoIChob3VyICUgMjQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgJSAxMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21JbnB1dHMoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBzZWxmLm1pbnV0ZUVsZW1lbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBob3VycyA9IChwYXJzZUludChzZWxmLmhvdXJFbGVtZW50LnZhbHVlLnNsaWNlKC0yKSwgMTApIHx8IDApICUgMjQsIG1pbnV0ZXMgPSAocGFyc2VJbnQoc2VsZi5taW51dGVFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MCwgc2Vjb25kcyA9IHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gKHBhcnNlSW50KHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjBcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaG91cnMgPSBhbXBtMm1pbGl0YXJ5KGhvdXJzLCBzZWxmLmFtUE0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgJiZcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VycyA9IE1hdGgubWF4KGhvdXJzLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1heChtaW51dGVzLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgJiZcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5tYXhEYXRlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VycyA9IE1hdGgubWluKGhvdXJzLCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkpO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1pbihtaW51dGVzLCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaikge1xyXG4gICAgICAgIHZhciBkYXRlID0gZGF0ZU9iaiB8fCBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iajtcclxuICAgICAgICBpZiAoZGF0ZSlcclxuICAgICAgICAgICAgc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICAgICAgICBpZiAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycyAlIDI0LCBtaW51dGVzLCBzZWNvbmRzIHx8IDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuaG91ckVsZW1lbnQgfHwgIXNlbGYubWludXRlRWxlbWVudCB8fCBzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZCghc2VsZi5jb25maWcudGltZV8yNGhyXHJcbiAgICAgICAgICAgID8gKDEyICsgaG91cnMpICUgMTIgKyAxMiAqIGludChob3VycyAlIDEyID09PSAwKVxyXG4gICAgICAgICAgICA6IGhvdXJzKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQobWludXRlcyk7XHJcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBob3VycyA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcclxuICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWNvbmRzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uWWVhcklucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpICsgKGV2ZW50LmRlbHRhIHx8IDApO1xyXG4gICAgICAgIGlmICh5ZWFyLnRvU3RyaW5nKCkubGVuZ3RoID09PSA0IHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmJsdXIoKTtcclxuICAgICAgICAgICAgaWYgKCEvW15cXGRdLy50ZXN0KHllYXIudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHllYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJpbmQoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGV2KSB7IHJldHVybiBiaW5kKGVsZW1lbnQsIGV2LCBoYW5kbGVyKTsgfSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGJpbmQoZWwsIGV2ZW50LCBoYW5kbGVyKTsgfSk7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuICAgICAgICBzZWxmLl9oYW5kbGVycy5wdXNoKHsgZWxlbWVudDogZWxlbWVudCwgZXZlbnQ6IGV2ZW50LCBoYW5kbGVyOiBoYW5kbGVyIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25DbGljayhoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIGV2dC53aGljaCA9PT0gMSAmJiBoYW5kbGVyKGV2dCk7IH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKCkge1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcud3JhcCkge1xyXG4gICAgICAgICAgICBbXCJvcGVuXCIsIFwiY2xvc2VcIiwgXCJ0b2dnbGVcIiwgXCJjbGVhclwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIiArIGV2dCArIFwiXVwiKSwgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmQoZWwsIFwiY2xpY2tcIiwgc2VsZltldnRdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgc2V0dXBNb2JpbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2Uob25SZXNpemUsIDUwKTtcclxuICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UgPSBkZWJvdW5jZSh0cmlnZ2VyQ2hhbmdlLCAzMDApO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5kYXlzQ29udGFpbmVyKVxyXG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbk1vdXNlT3ZlcihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljKVxyXG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmlubGluZSAmJiAhc2VsZi5jb25maWcuc3RhdGljKVxyXG4gICAgICAgICAgICBiaW5kKHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2VkUmVzaXplKTtcclxuICAgICAgICBpZiAod2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudC5ib2R5LCBcInRvdWNoc3RhcnRcIiwgZG9jdW1lbnRDbGljayk7XHJcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJtb3VzZWRvd25cIiwgb25DbGljayhkb2N1bWVudENsaWNrKSk7XHJcbiAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJibHVyXCIsIGRvY3VtZW50Q2xpY2spO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbGlja09wZW5zID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxmLm9wZW4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW9udGhOYXYuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7IH0pO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFwid2hlZWxcIiwgZGVib3VuY2Uob25Nb250aE5hdlNjcm9sbCwgMTApKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKG9uTW9udGhOYXZDbGljaykpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFtcImtleXVwXCIsIFwiaW5jcmVtZW50XCJdLCBvblllYXJJbnB1dCk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGVjdERhdGUpKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBbXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgXCJhbmltYXRpb25lbmRcIl0sIGFuaW1hdGVEYXlzKTtcclxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgW1wid2Via2l0QW5pbWF0aW9uRW5kXCIsIFwiYW5pbWF0aW9uZW5kXCJdLCBhbmltYXRlTW9udGhzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxUZXh0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC5zZWxlY3QoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcIndoZWVsXCIsIFwiaW5wdXRcIiwgXCJpbmNyZW1lbnRcIl0sIHVwZGF0ZVRpbWUpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayh0aW1lSW5jcmVtZW50KSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJ3aGVlbFwiLCBcImluY3JlbWVudFwiXSwgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiaW5wdXRcIiwgdHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuc2Vjb25kRWxlbWVudCwgXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnNlY29uZEVsZW1lbnQgJiYgc2VsZi5zZWNvbmRFbGVtZW50LnNlbGVjdCgpOyB9KTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuYW1QTSwgXCJtb3VzZWRvd25cIiwgb25DbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKSB7XHJcbiAgICAgICAgc2VsZi5fYW5pbWF0aW9uTG9vcC5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKCk7IH0pO1xyXG4gICAgICAgIHNlbGYuX2FuaW1hdGlvbkxvb3AgPSBbXTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGVEYXlzKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICYmIHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChlLmFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmcFNsaWRlTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLmRheXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NQb3N0RGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnBTbGlkZVJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYuZGF5c0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUG9zdERheUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNb250aHMoZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5hbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcFNsaWRlTGVmdE5ld1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZnBTbGlkZVJpZ2h0TmV3XCI6XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVSaWdodE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYXYgPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmF2Lm5leHRTaWJsaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2Lm5leHRTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5hdi5wcmV2aW91c1NpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAvY3Vyci8udGVzdChuYXYucHJldmlvdXNTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYucHJldmlvdXNTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBqdW1wVG9EYXRlKGp1bXBEYXRlKSB7XHJcbiAgICAgICAgdmFyIGp1bXBUbyA9IGp1bXBEYXRlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBwYXJzZURhdGUoanVtcERhdGUpXHJcbiAgICAgICAgICAgIDogc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHxcclxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vd1xyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJiBzZWxmLmNvbmZpZy5tYXhEYXRlIDwgc2VsZi5ub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3cpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChqdW1wVG8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IGp1bXBUby5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBqdW1wVG8uZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsganVtcFRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRpbWVJbmNyZW1lbnQoZSkge1xyXG4gICAgICAgIGlmICh+ZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSlcclxuICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQoZSwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSA/IDEgOiAtMSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUgJiYgZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gaW5wdXRFbGVtIHx8XHJcbiAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUgJiYgdGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQoXCJpbmNyZW1lbnRcIik7XHJcbiAgICAgICAgZXZlbnQuZGVsdGEgPSBkZWx0YTtcclxuICAgICAgICBpbnB1dCAmJiBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkKCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItY2FsZW5kYXJcIik7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZE1vbnRoTmF2KCkpO1xyXG4gICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1pbm5lckNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBidWlsZFdlZWtzKCksIHdlZWtXcmFwcGVyID0gX2Eud2Vla1dyYXBwZXIsIHdlZWtOdW1iZXJzID0gX2Eud2Vla051bWJlcnM7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtXcmFwcGVyKTtcclxuICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMgPSB3ZWVrTnVtYmVycztcclxuICAgICAgICAgICAgICAgIHNlbGYud2Vla1dyYXBwZXIgPSB3ZWVrV3JhcHBlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXJDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlZWtkYXlzKCkpO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGREYXlzKCk7XHJcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmRheXNDb250YWluZXIpO1xyXG4gICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaW5uZXJDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZFRpbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmFuZ2VNb2RlXCIsIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIik7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhbmltYXRlXCIsIHNlbGYuY29uZmlnLmFuaW1hdGUpO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgICAgIHZhciBjdXN0b21BcHBlbmQgPSBzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkICYmIHNlbGYuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgfHwgc2VsZi5jb25maWcuc3RhdGljKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIWN1c3RvbUFwcGVuZCAmJiBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIHNlbGYuX2lucHV0Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgc2VsZi5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFwcGVuZFRvXHJcbiAgICAgICAgICAgICAgICA6IHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURheShjbGFzc05hbWUsIGRhdGUsIGRheU51bWJlciwgaSkge1xyXG4gICAgICAgIHZhciBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGRhdGUsIHRydWUpLCBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItZGF5IFwiICsgY2xhc3NOYW1lLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcclxuICAgICAgICBkYXlFbGVtZW50LmRhdGVPYmogPSBkYXRlO1xyXG4gICAgICAgIGRheUVsZW1lbnQuJGkgPSBpO1xyXG4gICAgICAgIGRheUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmZvcm1hdERhdGUoZGF0ZSwgc2VsZi5jb25maWcuYXJpYURhdGVGb3JtYXQpKTtcclxuICAgICAgICBpZiAoY29tcGFyZURhdGVzKGRhdGUsIHNlbGYubm93KSA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZWxmLnRvZGF5RGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xyXG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGVJc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgZGF5RWxlbWVudC50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBpZiAoaXNEYXRlU2VsZWN0ZWQoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtID0gZGF5RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcInN0YXJ0UmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcImVuZFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA+IHNlbGYubWluUmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlIDwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlIDwgc2VsZi5tYXhSYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUgPiBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGF0ZUluUmFuZ2UoZGF0ZSkgJiYgIWlzRGF0ZVNlbGVjdGVkKGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIChkYXRlIDwgc2VsZi5taW5SYW5nZURhdGUgfHwgZGF0ZSA+IHNlbGYubWF4UmFuZ2VEYXRlKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzICYmXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSAhPT0gXCJwcmV2TW9udGhEYXlcIiAmJlxyXG4gICAgICAgICAgICBkYXlOdW1iZXIgJSA3ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPHNwYW4gY2xhc3M9J2Rpc2FibGVkIGZsYXRwaWNrci1kYXknPlwiICtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmdldFdlZWsoZGF0ZSkgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3NwYW4+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZGF5RWxlbWVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvY3VzT25EYXkoY3VycmVudEluZGV4LCBvZmZzZXQpIHtcclxuICAgICAgICB2YXIgbmV3SW5kZXggPSBjdXJyZW50SW5kZXggKyBvZmZzZXQgfHwgMCwgdGFyZ2V0Tm9kZSA9IChjdXJyZW50SW5kZXggIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHNlbGYuZGF5cy5jaGlsZE5vZGVzW25ld0luZGV4XVxyXG4gICAgICAgICAgICA6IHNlbGYuc2VsZWN0ZWREYXRlRWxlbSB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXMuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgdmFyIGZvY3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0Tm9kZSB8fCBzZWxmLmRheXMuY2hpbGROb2Rlc1tuZXdJbmRleF07XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKHRhcmdldE5vZGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRhcmdldE5vZGUgPT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlTW9udGgoMSwgdHJ1ZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggJSA0MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKC0xLCB0cnVlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggKz0gNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFmdGVyRGF5QW5pbShmb2N1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZnRlckRheUFuaW0oZm4pIHtcclxuICAgICAgICBzZWxmLmNvbmZpZy5hbmltYXRlID09PSB0cnVlID8gc2VsZi5fYW5pbWF0aW9uTG9vcC5wdXNoKGZuKSA6IGZuKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZERheXMoZGVsdGEpIHtcclxuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZmlyc3RPZk1vbnRoID0gKG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoLCAxKS5nZXREYXkoKSAtXHJcbiAgICAgICAgICAgIHNlbGYubDEwbi5maXJzdERheU9mV2VlayArXHJcbiAgICAgICAgICAgIDcpICVcclxuICAgICAgICAgICAgNywgaXNSYW5nZU1vZGUgPSBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCI7XHJcbiAgICAgICAgdmFyIHByZXZNb250aERheXMgPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKChzZWxmLmN1cnJlbnRNb250aCAtIDEgKyAxMikgJSAxMik7XHJcbiAgICAgICAgdmFyIGRheXNJbk1vbnRoID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aCgpLCBkYXlzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICB2YXIgZGF5TnVtYmVyID0gcHJldk1vbnRoRGF5cyArIDEgLSBmaXJzdE9mTW9udGgsIGRheUluZGV4ID0gMDtcclxuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycyAmJiBzZWxmLndlZWtOdW1iZXJzLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChpc1JhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoIC0gMSwgZGF5TnVtYmVyKTtcclxuICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsICg0MiAtIGZpcnN0T2ZNb250aCkgJSBkYXlzSW5Nb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBkYXlOdW1iZXIgPD0gcHJldk1vbnRoRGF5czsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJwcmV2TW9udGhEYXlcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggLSAxLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZGF5TnVtYmVyID0gMTsgZGF5TnVtYmVyIDw9IGRheXNJbk1vbnRoOyBkYXlOdW1iZXIrKywgZGF5SW5kZXgrKykge1xyXG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIlwiLCBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aDsgZGF5TnVtKyssIGRheUluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJuZXh0TW9udGhEYXlcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCBkYXlOdW0gJSBkYXlzSW5Nb250aCksIGRheU51bSwgZGF5SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUmFuZ2VNb2RlICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEgJiYgZGF5cy5jaGlsZE5vZGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAoISFzZWxmLm1pblJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA+IGRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqKTtcclxuICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghIXNlbGYubWF4UmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICB2YXIgZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRheUNvbnRhaW5lclwiKTtcclxuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5cyk7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5hbmltYXRlIHx8IGRlbHRhID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLmRheXNDb250YWluZXIpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWx0YSAmJiBkZWx0YSA+PSAwKVxyXG4gICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZGF5Q29udGFpbmVyLCBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXNbMF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoTmF2KCkge1xyXG4gICAgICAgIHZhciBtb250aE5hdkZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBzZWxmLm1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aFwiKTtcclxuICAgICAgICBzZWxmLnByZXZNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcucHJldkFycm93O1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiY3VyLW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuICAgICAgICB2YXIgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiKTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCA9IHllYXJJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKVxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4gPSBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4ID0gc2VsZi5jb25maWcubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9XHJcbiAgICAgICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLm5leHRBcnJvdztcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGggPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZChzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQpO1xyXG4gICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZCh5ZWFySW5wdXQpO1xyXG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5wcmV2TW9udGhOYXYpO1xyXG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoKTtcclxuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcclxuICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKG1vbnRoTmF2RnJhZ21lbnQpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3c7IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZVByZXZNb250aEFycm93ICE9PSBib29sKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJldk1vbnRoTmF2LnN0eWxlLmRpc3BsYXkgPSBib29sID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9faGlkZVByZXZNb250aEFycm93ID0gYm9vbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZU5leHRNb250aEFycm93XCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9faGlkZU5leHRNb250aEFycm93OyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyAhPT0gYm9vbClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm5leHRNb250aE5hdi5zdHlsZS5kaXNwbGF5ID0gYm9vbCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIHJldHVybiBzZWxmLm1vbnRoTmF2O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRUaW1lKCkge1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1RpbWVcIik7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpXHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vQ2FsZW5kYXJcIik7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci10aW1lXCIpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIik7XHJcbiAgICAgICAgdmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIik7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudCA9IGhvdXJJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHZhciBtaW51dGVJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLW1pbnV0ZVwiKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgPSBtaW51dGVJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudGFiSW5kZXggPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGFiSW5kZXggPSAtMTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLnRpbWVfMjRoclxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5kZWZhdWx0SG91clxyXG4gICAgICAgICAgICAgICAgOiBtaWxpdGFyeTJhbXBtKHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSk7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGVmYXVsdE1pbnV0ZSk7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zdGVwID0gc2VsZi5jb25maWcuaG91ckluY3JlbWVudC50b1N0cmluZygpO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zdGVwID0gc2VsZi5jb25maWcubWludXRlSW5jcmVtZW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5taW4gPSBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjBcIiA6IFwiMVwiO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQubWF4ID0gc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIyM1wiIDogXCIxMlwiO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5taW4gPSBcIjBcIjtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQubWF4ID0gXCI1OVwiO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudGl0bGUgPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJJbnB1dCk7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pbnV0ZUlucHV0KTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcudGltZV8yNGhyKVxyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzU2Vjb25kc1wiKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZElucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3Itc2Vjb25kXCIpO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcclxuICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpXHJcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRTZWNvbmRzKTtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnN0ZXAgPSBzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcDtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50Lm1pbiA9IHNlbGYubWludXRlRWxlbWVudC5taW47XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5tYXggPSBzZWxmLm1pbnV0ZUVsZW1lbnQubWF4O1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpKTtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy50aW1lXzI0aHIpIHtcclxuICAgICAgICAgICAgc2VsZi5hbVBNID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItYW0tcG1cIiwgc2VsZi5sMTBuLmFtUE1baW50KChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmhvdXJFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSA+IDExKV0pO1xyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGl0bGUgPSBzZWxmLmwxMG4udG9nZ2xlVGl0bGU7XHJcbiAgICAgICAgICAgIHNlbGYuYW1QTS50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGYudGltZUNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla2RheXMoKSB7XHJcbiAgICAgICAgaWYgKCFzZWxmLndlZWtkYXlDb250YWluZXIpXHJcbiAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7XHJcbiAgICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrO1xyXG4gICAgICAgIHZhciB3ZWVrZGF5cyA9IHNlbGYubDEwbi53ZWVrZGF5cy5zaG9ydGhhbmQuc2xpY2UoKTtcclxuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzID0gd2Vla2RheXMuc3BsaWNlKGZpcnN0RGF5T2ZXZWVrLCB3ZWVrZGF5cy5sZW5ndGgpLmNvbmNhdCh3ZWVrZGF5cy5zcGxpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXFxuICAgIDxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlxcbiAgICAgIFwiICsgd2Vla2RheXMuam9pbihcIjwvc3Bhbj48c3BhbiBjbGFzcz1mbGF0cGlja3Itd2Vla2RheT5cIikgKyBcIlxcbiAgICA8L3NwYW4+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiBzZWxmLndlZWtkYXlDb250YWluZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZFdlZWtzKCkge1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xyXG4gICAgICAgIHZhciB3ZWVrV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3dyYXBwZXJcIik7XHJcbiAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3Itd2Vla2RheVwiLCBzZWxmLmwxMG4ud2Vla0FiYnJldmlhdGlvbikpO1xyXG4gICAgICAgIHZhciB3ZWVrTnVtYmVycyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3NcIik7XHJcbiAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla051bWJlcnMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdlZWtXcmFwcGVyOiB3ZWVrV3JhcHBlcixcclxuICAgICAgICAgICAgd2Vla051bWJlcnM6IHdlZWtOdW1iZXJzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNb250aCh2YWx1ZSwgaXNfb2Zmc2V0LCBhbmltYXRlLCBmcm9tX2tleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzX29mZnNldCA9PT0gdm9pZCAwKSB7IGlzX29mZnNldCA9IHRydWU7IH1cclxuICAgICAgICBpZiAoYW5pbWF0ZSA9PT0gdm9pZCAwKSB7IGFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRlOyB9XHJcbiAgICAgICAgaWYgKGZyb21fa2V5Ym9hcmQgPT09IHZvaWQgMCkgeyBmcm9tX2tleWJvYXJkID0gZmFsc2U7IH1cclxuICAgICAgICB2YXIgZGVsdGEgPSBpc19vZmZzZXQgPyB2YWx1ZSA6IHZhbHVlIC0gc2VsZi5jdXJyZW50TW9udGg7XHJcbiAgICAgICAgaWYgKChkZWx0YSA8IDAgJiYgc2VsZi5faGlkZVByZXZNb250aEFycm93KSB8fFxyXG4gICAgICAgICAgICAoZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdykpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCArPSBkZWx0YTtcclxuICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciArPSBzZWxmLmN1cnJlbnRNb250aCA+IDExID8gMSA6IC0xO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IChzZWxmLmN1cnJlbnRNb250aCArIDEyKSAlIDEyO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkRGF5cyhhbmltYXRlID8gZGVsdGEgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmICghYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmF2ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKG5hdi5uZXh0U2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2Lm5leHRTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5uZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAobmF2LnByZXZpb3VzU2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2LnByZXZpb3VzU2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYucHJldmlvdXNTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5vbGRDdXJNb250aCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aDtcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGggPSBzZWxmLm1vbnRoTmF2Lmluc2VydEJlZm9yZShzZWxmLm9sZEN1ck1vbnRoLmNsb25lTm9kZSh0cnVlKSwgZGVsdGEgPiAwID8gc2VsZi5vbGRDdXJNb250aC5uZXh0U2libGluZyA6IHNlbGYub2xkQ3VyTW9udGgpO1xyXG4gICAgICAgIHZhciBkYXlzQ29udGFpbmVyID0gc2VsZi5kYXlzQ29udGFpbmVyO1xyXG4gICAgICAgIGlmIChkYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiYgZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbGRDdXJNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnROZXdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVSaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGhFbGVtZW50ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoXHJcbiAgICAgICAgICAgIC5maXJzdENoaWxkO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmxhc3RDaGlsZFxyXG4gICAgICAgICAgICAuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgaWYgKHNlbGYub2xkQ3VyTW9udGguZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgc2VsZi5vbGRDdXJNb250aC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbW9udGhUb1N0cihzZWxmLmN1cnJlbnRNb250aCAtIGRlbHRhLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbik7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcclxuICAgICAgICBpZiAoZnJvbV9rZXlib2FyZCAmJlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuJGkpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4XzEgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LiRpO1xyXG4gICAgICAgICAgICBhZnRlckRheUFuaW0oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9jdXNPbkRheShpbmRleF8xLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXIodHJpZ2dlckNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWU7IH1cclxuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dClcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpXHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xyXG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHNlbGYuc2hvd1RpbWVJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICBzZWxmLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25EZXN0cm95XCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBzZWxmLl9oYW5kbGVycy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgdmFyIGggPSBzZWxmLl9oYW5kbGVyc1tpXTtcclxuICAgICAgICAgICAgaC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaC5ldmVudCwgaC5oYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcclxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYubW9iaWxlSW5wdXQpO1xyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuYWx0SW5wdXQpO1xyXG4gICAgICAgICAgICBkZWxldGUgc2VsZi5hbHRJbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuaW5wdXQpIHtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gc2VsZi5pbnB1dC5fdHlwZTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIl9zaG93VGltZUlucHV0XCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqXCIsXHJcbiAgICAgICAgICAgIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJfX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcIl9faGlkZVByZXZNb250aEFycm93XCIsXHJcbiAgICAgICAgICAgIFwiaXNNb2JpbGVcIixcclxuICAgICAgICAgICAgXCJpc09wZW5cIixcclxuICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXHJcbiAgICAgICAgICAgIFwibWluRGF0ZUhhc1RpbWVcIixcclxuICAgICAgICAgICAgXCJtYXhEYXRlSGFzVGltZVwiLFxyXG4gICAgICAgICAgICBcImRheXNcIixcclxuICAgICAgICAgICAgXCJkYXlzQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwiX2lucHV0XCIsXHJcbiAgICAgICAgICAgIFwiX3Bvc2l0aW9uRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBcImlubmVyQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwickNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIm1vbnRoTmF2XCIsXHJcbiAgICAgICAgICAgIFwidG9kYXlEYXRlRWxlbVwiLFxyXG4gICAgICAgICAgICBcImNhbGVuZGFyQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwid2Vla2RheUNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcInByZXZNb250aE5hdlwiLFxyXG4gICAgICAgICAgICBcIm5leHRNb250aE5hdlwiLFxyXG4gICAgICAgICAgICBcImN1cnJlbnRNb250aEVsZW1lbnRcIixcclxuICAgICAgICAgICAgXCJjdXJyZW50WWVhckVsZW1lbnRcIixcclxuICAgICAgICAgICAgXCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxyXG4gICAgICAgICAgICBcImNvbmZpZ1wiLFxyXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoaykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGZba107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNDYWxlbmRhckVsZW0oZWxlbSkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5jb250YWlucyhlbGVtKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZWxlbSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkb2N1bWVudENsaWNrKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLmlubGluZSkge1xyXG4gICAgICAgICAgICB2YXIgaXNDYWxlbmRhckVsZW1lbnQgPSBpc0NhbGVuZGFyRWxlbShlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuaW5wdXQgfHxcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0IHx8XHJcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAoZS5wYXRoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wYXRoLmluZGV4T2YgJiZcclxuICAgICAgICAgICAgICAgICAgICAofmUucGF0aC5pbmRleE9mKHNlbGYuaW5wdXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH5lLnBhdGguaW5kZXhPZihzZWxmLmFsdElucHV0KSkpO1xyXG4gICAgICAgICAgICB2YXIgbG9zdEZvY3VzID0gZS50eXBlID09PSBcImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgPyBpc0lucHV0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldClcclxuICAgICAgICAgICAgICAgIDogIWlzSW5wdXQgJiYgIWlzQ2FsZW5kYXJFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAobG9zdEZvY3VzICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5pZ25vcmVkRm9jdXNFbGVtZW50cy5pbmRleE9mKGUudGFyZ2V0KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VZZWFyKG5ld1llYXIpIHtcclxuICAgICAgICBpZiAoIW5ld1llYXIgfHxcclxuICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbiAmJlxyXG4gICAgICAgICAgICAgICAgbmV3WWVhciA8IHBhcnNlSW50KHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbikpIHx8XHJcbiAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5tYXggJiZcclxuICAgICAgICAgICAgICAgIG5ld1llYXIgPiBwYXJzZUludChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5tYXgpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBuZXdZZWFyTnVtID0gbmV3WWVhciwgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gbmV3WWVhck51bTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWF4KHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoZGF0ZSwgdGltZWxlc3MpIHtcclxuICAgICAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkgeyB0aW1lbGVzcyA9IHRydWU7IH1cclxuICAgICAgICB2YXIgZGF0ZVRvQ2hlY2sgPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCB1bmRlZmluZWQsIHRpbWVsZXNzKTtcclxuICAgICAgICBpZiAoKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5taW5EYXRlSGFzVGltZSkgPCAwKSB8fFxyXG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgJiZcclxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWF4RGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWF4RGF0ZUhhc1RpbWUpID4gMCkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggJiYgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZGF0ZVRvQ2hlY2sgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBib29sID0gc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCA+IDAsIGFycmF5ID0gYm9vbCA/IHNlbGYuY29uZmlnLmVuYWJsZSA6IHNlbGYuY29uZmlnLmRpc2FibGU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGQgPSB2b2lkIDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBkKGRhdGVUb0NoZWNrKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkIGluc3RhbmNlb2YgRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkID0gc2VsZi5wYXJzZURhdGUoZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQgJiYgcGFyc2VkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBib29sXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhYm9vbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgZC5mcm9tICYmXHJcbiAgICAgICAgICAgICAgICBkLnRvICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPj0gZC5mcm9tLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpIDw9IGQudG8uZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhYm9vbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgdmFyIGlzSW5wdXQgPSBlLnRhcmdldCA9PT0gc2VsZi5faW5wdXQ7XHJcbiAgICAgICAgdmFyIGNhbGVuZGFyRWxlbSA9IGlzQ2FsZW5kYXJFbGVtKGUudGFyZ2V0KTtcclxuICAgICAgICB2YXIgYWxsb3dJbnB1dCA9IHNlbGYuY29uZmlnLmFsbG93SW5wdXQ7XHJcbiAgICAgICAgdmFyIGFsbG93S2V5ZG93biA9IHNlbGYuaXNPcGVuICYmICghYWxsb3dJbnB1dCB8fCAhaXNJbnB1dCk7XHJcbiAgICAgICAgdmFyIGFsbG93SW5saW5lS2V5ZG93biA9IHNlbGYuY29uZmlnLmlubGluZSAmJiBpc0lucHV0ICYmICFhbGxvd0lucHV0O1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGlzSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93SW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFsdEZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNlbGYub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYWxlbmRhckVsZW0gfHwgYWxsb3dLZXlkb3duIHx8IGFsbG93SW5saW5lS2V5ZG93bikge1xyXG4gICAgICAgICAgICB2YXIgaXNUaW1lT2JqID0gISFzZWxmLnRpbWVDb250YWluZXIgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFbnRlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3REYXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXQgJiYgIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGUua2V5ID09PSBcIkFycm93UmlnaHRcIiA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIGRlbHRhXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbnRoKGRlbHRhXzEsIHRydWUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5ob3VyRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAmJiBlLnRhcmdldC4kaSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1RpbWVPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCBkZWx0YSAqIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lT2JqICYmIHNlbGYuaG91ckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJUYWJcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHNlbGYuaG91ckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGYuc2Vjb25kRWxlbWVudCB8fCBzZWxmLmFtUE0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLnNlY29uZEVsZW1lbnQgJiYgc2VsZi5hbVBNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQgPT09IHNlbGYuYW1QTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBcIkFNXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gXCJQTVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uS2V5RG93blwiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlbGVtKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggIT09IDEgfHxcclxuICAgICAgICAgICAgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSB8fFxyXG4gICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgaG92ZXJEYXRlID0gZWxlbS5kYXRlT2JqLCBpbml0aWFsRGF0ZSA9IHNlbGYucGFyc2VEYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdW5kZWZpbmVkLCB0cnVlKSwgcmFuZ2VTdGFydERhdGUgPSBNYXRoLm1pbihob3ZlckRhdGUuZ2V0VGltZSgpLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSwgcmFuZ2VFbmREYXRlID0gTWF0aC5tYXgoaG92ZXJEYXRlLmdldFRpbWUoKSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksIGNvbnRhaW5zRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciB0ID0gcmFuZ2VTdGFydERhdGU7IHQgPCByYW5nZUVuZERhdGU7IHQgKz0gZHVyYXRpb24uREFZKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNFbmFibGVkKG5ldyBEYXRlKHQpKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGkpIHtcclxuICAgICAgICAgICAgdmFyIG91dE9mUmFuZ2UgPSB0aW1lc3RhbXAgPCBzZWxmLm1pblJhbmdlRGF0ZS5nZXRUaW1lKCkgfHxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCA+IHNlbGYubWF4UmFuZ2VEYXRlLmdldFRpbWUoKSwgZGF5RWxlbSA9IHNlbGYuZGF5cy5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAob3V0T2ZSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcclxuICAgICAgICAgICAgICAgIFtcImluUmFuZ2VcIiwgXCJzdGFydFJhbmdlXCIsIFwiZW5kUmFuZ2VcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb250YWluc0Rpc2FibGVkICYmICFvdXRPZlJhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgW1wic3RhcnRSYW5nZVwiLCBcImluUmFuZ2VcIiwgXCJlbmRSYW5nZVwiLCBcIm5vdEFsbG93ZWRcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIG1pblJhbmdlRGF0ZSA9IE1hdGgubWF4KHNlbGYubWluUmFuZ2VEYXRlLmdldFRpbWUoKSwgcmFuZ2VTdGFydERhdGUpLCBtYXhSYW5nZURhdGUgPSBNYXRoLm1pbihzZWxmLm1heFJhbmdlRGF0ZS5nZXRUaW1lKCksIHJhbmdlRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChob3ZlckRhdGUgPCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gPyBcInN0YXJ0UmFuZ2VcIiA6IFwiZW5kUmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsRGF0ZSA8IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcInN0YXJ0UmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGluaXRpYWxEYXRlID4gaG92ZXJEYXRlICYmIHRpbWVzdGFtcCA9PT0gaW5pdGlhbERhdGUuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiZW5kUmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgPj0gbWluUmFuZ2VEYXRlICYmIHRpbWVzdGFtcCA8PSBtYXhSYW5nZURhdGUpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgdGltZXN0YW1wID0gc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iai5nZXRUaW1lKCksIGkgPSAwOyBpIDwgNDI7IGkrKywgdGltZXN0YW1wICs9IGR1cmF0aW9uLkRBWSkge1xyXG4gICAgICAgICAgICBfbG9vcF8xKHRpbWVzdGFtcCwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcclxuICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAocG9zaXRpb25FbGVtZW50ID09PSB2b2lkIDApIHsgcG9zaXRpb25FbGVtZW50ID0gc2VsZi5faW5wdXQ7IH1cclxuICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQgJiYgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4gfHwgc2VsZi5faW5wdXQuZGlzYWJsZWQgfHwgc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgcG9zaXRpb25DYWxlbmRhcihwb3NpdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25PcGVuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWluTWF4RGF0ZVNldHRlcih0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlT2JqID0gKHNlbGYuY29uZmlnW1wiX1wiICsgdHlwZSArIFwiRGF0ZVwiXSA9IHNlbGYucGFyc2VEYXRlKGRhdGUpKTtcclxuICAgICAgICAgICAgdmFyIGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyAodHlwZSA9PT0gXCJtaW5cIiA/IFwibWF4XCIgOiBcIm1pblwiKSArIFwiRGF0ZVwiXTtcclxuICAgICAgICAgICAgaWYgKGRhdGVPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlID09PSBcIm1pblwiID8gXCJtaW5EYXRlSGFzVGltZVwiIDogXCJtYXhEYXRlSGFzVGltZVwiXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRIb3VycygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldE1pbnV0ZXMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRTZWNvbmRzKCkgPiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IHNlbGYuc2VsZWN0ZWREYXRlcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGlzRW5hYmxlZChkKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgdHlwZSA9PT0gXCJtaW5cIilcclxuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZWRyYXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnRbdHlwZV0gPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgISFpbnZlcnNlRGF0ZU9iaiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZURhdGVPYmouZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ29uZmlnKCkge1xyXG4gICAgICAgIHZhciBib29sT3B0cyA9IFtcclxuICAgICAgICAgICAgXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgIFwid2Vla051bWJlcnNcIixcclxuICAgICAgICAgICAgXCJhbGxvd0lucHV0XCIsXHJcbiAgICAgICAgICAgIFwiY2xpY2tPcGVuc1wiLFxyXG4gICAgICAgICAgICBcInRpbWVfMjRoclwiLFxyXG4gICAgICAgICAgICBcImVuYWJsZVRpbWVcIixcclxuICAgICAgICAgICAgXCJub0NhbGVuZGFyXCIsXHJcbiAgICAgICAgICAgIFwiYWx0SW5wdXRcIixcclxuICAgICAgICAgICAgXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcclxuICAgICAgICAgICAgXCJpbmxpbmVcIixcclxuICAgICAgICAgICAgXCJzdGF0aWNcIixcclxuICAgICAgICAgICAgXCJlbmFibGVTZWNvbmRzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzYWJsZU1vYmlsZVwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGhvb2tzID0gW1xyXG4gICAgICAgICAgICBcIm9uQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgIFwib25DbG9zZVwiLFxyXG4gICAgICAgICAgICBcIm9uRGF5Q3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFwib25EZXN0cm95XCIsXHJcbiAgICAgICAgICAgIFwib25LZXlEb3duXCIsXHJcbiAgICAgICAgICAgIFwib25Nb250aENoYW5nZVwiLFxyXG4gICAgICAgICAgICBcIm9uT3BlblwiLFxyXG4gICAgICAgICAgICBcIm9uUGFyc2VDb25maWdcIixcclxuICAgICAgICAgICAgXCJvblJlYWR5XCIsXHJcbiAgICAgICAgICAgIFwib25WYWx1ZVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBcIm9uWWVhckNoYW5nZVwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc2VsZi5jb25maWcgPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpO1xyXG4gICAgICAgIHZhciB1c2VyQ29uZmlnID0gX19hc3NpZ24oe30sIGluc3RhbmNlQ29uZmlnLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVsZW1lbnQuZGF0YXNldCB8fCB7fSkpKTtcclxuICAgICAgICB2YXIgZm9ybWF0cyQkMSA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJlbmFibGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9lbmFibGUgfHwgW107IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJkaXNhYmxlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZGlzYWJsZSB8fCBbXTsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9kaXNhYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdXNlckNvbmZpZy5kYXRlRm9ybWF0ICYmIHVzZXJDb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICBmb3JtYXRzJCQxLmRhdGVGb3JtYXQgPSB1c2VyQ29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgID8gXCJIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgOiBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBIOmlcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlckNvbmZpZy5hbHRJbnB1dCAmJiB1c2VyQ29uZmlnLmVuYWJsZVRpbWUgJiYgIXVzZXJDb25maWcuYWx0Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHMkJDEuYWx0Rm9ybWF0ID0gdXNlckNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICA/IFwiaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6UyBLXCIgOiBcIiBLXCIpXHJcbiAgICAgICAgICAgICAgICA6IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCArXHJcbiAgICAgICAgICAgICAgICAgICAgKFwiIGg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpICsgXCIgS1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pbkRhdGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5EYXRlOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtaW5cIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1heERhdGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9tYXhEYXRlOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgZm9ybWF0cyQkMSwgdXNlckNvbmZpZyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib29sT3B0cy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID1cclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGhvb2tzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWdbaG9va3NbaV1dICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2hvb2tzW2ldXSA9IGFycmF5aWZ5KHNlbGYuY29uZmlnW2hvb2tzW2ldXSB8fCBbXSkubWFwKGJpbmRUb0luc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBsdWdpbkNvbmYgPSBzZWxmLmNvbmZpZy5wbHVnaW5zW2ldKHNlbGYpIHx8IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGx1Z2luQ29uZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5ob29rcy5pbmRleE9mKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gYXJyYXlpZnkocGx1Z2luQ29uZltrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGJpbmRUb0luc3RhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHNlbGYuY29uZmlnW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVzZXJDb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gcGx1Z2luQ29uZltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuaXNNb2JpbGUgPVxyXG4gICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZU1vYmlsZSAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmlubGluZSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLndlZWtOdW1iZXJzICYmXHJcbiAgICAgICAgICAgICAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QYXJzZUNvbmZpZ1wiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwTG9jYWxlKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlICE9PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGxvY2FsZSBcIiArIHNlbGYuY29uZmlnLmxvY2FsZSk7XHJcbiAgICAgICAgc2VsZi5sMTBuID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0LCB0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcubG9jYWxlXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcubG9jYWxlICE9PSBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgPyBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXVxyXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb25DYWxlbmRhcihwb3NpdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAocG9zaXRpb25FbGVtZW50ID09PSB2b2lkIDApIHsgcG9zaXRpb25FbGVtZW50ID0gc2VsZi5fcG9zaXRpb25FbGVtZW50OyB9XHJcbiAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjYWxlbmRhckhlaWdodCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0SGVpZ2h0LCBjYWxlbmRhcldpZHRoID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRXaWR0aCwgY29uZmlnUG9zID0gc2VsZi5jb25maWcucG9zaXRpb24sIGlucHV0Qm91bmRzID0gcG9zaXRpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sIHNob3dPblRvcCA9IGNvbmZpZ1BvcyA9PT0gXCJhYm92ZVwiIHx8XHJcbiAgICAgICAgICAgIChjb25maWdQb3MgIT09IFwiYmVsb3dcIiAmJlxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VGcm9tQm90dG9tIDwgY2FsZW5kYXJIZWlnaHQgJiZcclxuICAgICAgICAgICAgICAgIGlucHV0Qm91bmRzLnRvcCA+IGNhbGVuZGFySGVpZ2h0KTtcclxuICAgICAgICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICtcclxuICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wICtcclxuICAgICAgICAgICAgKCFzaG93T25Ub3AgPyBwb3NpdGlvbkVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMiA6IC1jYWxlbmRhckhlaWdodCAtIDIpO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dUb3BcIiwgIXNob3dPblRvcCk7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0JvdHRvbVwiLCBzaG93T25Ub3ApO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLmxlZnQ7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggLSBpbnB1dEJvdW5kcy5yaWdodDtcclxuICAgICAgICB2YXIgcmlnaHRNb3N0ID0gbGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJpZ2h0TW9zdFwiLCByaWdodE1vc3QpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuICAgICAgICBpZiAoIXJpZ2h0TW9zdCkge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHJpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgYnVpbGRXZWVrZGF5cygpO1xyXG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICBidWlsZERheXMoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSBmdW5jdGlvbiAoZGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXkuY2xhc3NMaXN0ICYmXHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RBbGxvd2VkXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHQgPSBmaW5kUGFyZW50KGUudGFyZ2V0LCBpc1NlbGVjdGFibGUpO1xyXG4gICAgICAgIGlmICh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdDtcclxuICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUodGFyZ2V0LmRhdGVPYmouZ2V0VGltZSgpKSk7XHJcbiAgICAgICAgdmFyIHNob3VsZENoYW5nZU1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgIT09IHNlbGYuY3VycmVudE1vbnRoICYmXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIjtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSB0YXJnZXQ7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIpXHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtzZWxlY3RlZERhdGVdO1xyXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGlzRGF0ZVNlbGVjdGVkKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShwYXJzZUludChzZWxlY3RlZEluZGV4KSwgMSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnB1c2goc2VsZWN0ZWREYXRlKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgIT09IDApXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgIGlmIChzaG91bGRDaGFuZ2VNb250aCkge1xyXG4gICAgICAgICAgICB2YXIgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV3WWVhcilcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGREYXlzKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lbmFibGVUaW1lICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuY29uZmlnLm1pbkRhdGUpID09PSAwKVxyXG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHNlbGYuc2hvd1RpbWVJbnB1dCA9IHRydWUpOyB9LCA1MCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXIodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLm1pblJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iaik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi5tYXhSYW5nZURhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICAgICAgaWYgKCFzaG91bGRDaGFuZ2VNb250aClcclxuICAgICAgICAgICAgZm9jdXNPbkRheSh0YXJnZXQuJGksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYWZ0ZXJEYXlBbmltKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAmJiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKTsgfSk7XHJcbiAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5ob3VyRWxlbWVudC5zZWxlY3QoKTsgfSwgNDUxKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICAgICAgICB2YXIgc2luZ2xlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJiAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcclxuICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcclxuICAgICAgICAgICAgaWYgKHNpbmdsZSB8fCByYW5nZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChvcHRpb24gIT09IG51bGwgJiYgdHlwZW9mIG9wdGlvbiA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgb3B0aW9uKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW29wdGlvbl0gPSB2YWx1ZTtcclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgIGp1bXBUb0RhdGUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkRGF0ZShpbnB1dERhdGUsIGZvcm1hdCkge1xyXG4gICAgICAgIHZhciBkYXRlcyA9IFtdO1xyXG4gICAgICAgIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGUubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkLCBmb3JtYXQpOyB9KTtcclxuICAgICAgICBlbHNlIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBpbnB1dERhdGUgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYuY29uZmlnLm1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzaW5nbGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiOyBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc0VuYWJsZWQoZCwgZmFsc2UpOyB9KTtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTsgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UsIGZvcm1hdCkge1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZSA9IGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IHVuZGVmaW5lZDsgfVxyXG4gICAgICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbGVhcih0cmlnZ2VyQ2hhbmdlKTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSwgZm9ybWF0KTtcclxuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgIGp1bXBUb0RhdGUoKTtcclxuICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKCk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VEYXRlUnVsZXMoYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwibnVtYmVyXCIgfHxcclxuICAgICAgICAgICAgICAgIHJ1bGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXJzZURhdGUocnVsZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChydWxlICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgcnVsZS5mcm9tICYmXHJcbiAgICAgICAgICAgICAgICBydWxlLnRvKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzZWxmLnBhcnNlRGF0ZShydWxlLmZyb20sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IHNlbGYucGFyc2VEYXRlKHJ1bGUudG8sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwRGF0ZXMoKSB7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XHJcbiAgICAgICAgc2VsZi5ub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBwcmVsb2FkZWREYXRlID0gc2VsZi5jb25maWcuZGVmYXVsdERhdGUgfHwgc2VsZi5pbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAocHJlbG9hZGVkRGF0ZSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKHByZWxvYWRlZERhdGUsIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgIHZhciBpbml0aWFsRGF0ZSA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGhcclxuICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF1cclxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSA+IHNlbGYubm93LmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKSA8IHNlbGYubm93LmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3c7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IGluaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBpbml0aWFsRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcclxuICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lID1cclxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpID4gMCk7XHJcbiAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSA9XHJcbiAgICAgICAgICAgICEhc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFNlY29uZHMoKSA+IDApO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcInNob3dUaW1lSW5wdXRcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuX3Nob3dUaW1lSW5wdXQ7IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dUaW1lSW5wdXQgPSBib29sO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJzaG93VGltZUlucHV0XCIsIGJvb2wpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10KSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnICE9PSB1bmRlZmluZWQgJiYgc2VsZi5jb25maWcuZm9ybWF0RGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcuZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10KTtcclxuICAgICAgICByZXR1cm4gZnJtdFxyXG4gICAgICAgICAgICAuc3BsaXQoXCJcIilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYywgaSwgYXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRzW2NdICYmIGFycltpIC0gMV0gIT09IFwiXFxcXFwiXHJcbiAgICAgICAgICAgICAgICA/IGZvcm1hdHNbY10oZGF0ZU9iaiwgc2VsZi5sMTBuLCBzZWxmLmNvbmZpZylcclxuICAgICAgICAgICAgICAgIDogYyAhPT0gXCJcXFxcXCIgPyBjIDogXCJcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlLCBnaXZlbkZvcm1hdCwgdGltZWxlc3MpIHtcclxuICAgICAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgcGFyc2VkRGF0ZTtcclxuICAgICAgICB2YXIgZGF0ZV9vcmlnID0gZGF0ZTtcclxuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgIT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgZGF0ZS50b0ZpeGVkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gZ2l2ZW5Gb3JtYXQgfHwgKHNlbGYuY29uZmlnIHx8IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKS5kYXRlRm9ybWF0O1xyXG4gICAgICAgICAgICB2YXIgZGF0ZXN0ciA9IFN0cmluZyhkYXRlKS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlc3RyID09PSBcInRvZGF5XCIpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZWxlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKC9aJC8udGVzdChkYXRlc3RyKSB8fFxyXG4gICAgICAgICAgICAgICAgL0dNVCQvLnRlc3QoZGF0ZXN0cikpXHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnICYmIHNlbGYuY29uZmlnLnBhcnNlRGF0ZSlcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBzZWxmLmNvbmZpZy5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID1cclxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcgfHwgIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEsIDAsIDAsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IHZvaWQgMCwgb3BzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbWF0Y2hJbmRleCA9IDAsIHJlZ2V4U3RyID0gXCJcIjsgaSA8IGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGZvcm1hdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNCYWNrU2xhc2ggPSB0b2tlbiA9PT0gXCJcXFxcXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBmb3JtYXRbaSAtIDFdID09PSBcIlxcXFxcIiB8fCBpc0JhY2tTbGFzaDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5SZWdleFt0b2tlbl0gJiYgIWVzY2FwZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gdG9rZW5SZWdleFt0b2tlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpLmV4ZWMoZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hlZCA9IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHNbdG9rZW4gIT09IFwiWVwiID8gXCJwdXNoXCIgOiBcInVuc2hpZnRcIl0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiByZXZGb3JtYXRbdG9rZW5dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogbWF0Y2hbKyttYXRjaEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0JhY2tTbGFzaClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gXCIuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IF9hLmZuLCB2YWwgPSBfYS52YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF0ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbihwYXJzZWREYXRlLCB2YWwsIHNlbGYubDEwbikgfHwgcGFyc2VkRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbWF0Y2hlZCA/IHBhcnNlZERhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEocGFyc2VkRGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZsYXRwaWNrcjogaW52YWxpZCBkYXRlIFwiICsgZGF0ZV9vcmlnKTtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkRGF0ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xyXG4gICAgICAgIHNlbGYuaW5wdXQgPSBzZWxmLmNvbmZpZy53cmFwXHJcbiAgICAgICAgICAgID8gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpXHJcbiAgICAgICAgICAgIDogZWxlbWVudDtcclxuICAgICAgICBpZiAoIXNlbGYuaW5wdXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRXJyb3I6IGludmFsaWQgaW5wdXQgZWxlbWVudCBzcGVjaWZpZWRcIiwgc2VsZi5pbnB1dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5pbnB1dC5fdHlwZSA9IHNlbGYuaW5wdXQudHlwZTtcclxuICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XHJcbiAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmlucHV0O1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbHRJbnB1dCkge1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0ID0gY3JlYXRlRWxlbWVudChzZWxmLmlucHV0Lm5vZGVOYW1lLCBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIFwiICsgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5hbHRJbnB1dDtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnJlcXVpcmVkID0gc2VsZi5pbnB1dC5yZXF1aXJlZDtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljICYmIHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5hbHRJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuYWxsb3dJbnB1dClcclxuICAgICAgICAgICAgc2VsZi5faW5wdXQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJyZWFkb25seVwiKTtcclxuICAgICAgICBzZWxmLl9wb3NpdGlvbkVsZW1lbnQgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbkVsZW1lbnQgfHwgc2VsZi5faW5wdXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cE1vYmlsZSgpIHtcclxuICAgICAgICB2YXIgaW5wdXRUeXBlID0gc2VsZi5jb25maWcuZW5hYmxlVGltZVxyXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyBcInRpbWVcIiA6IFwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICA6IFwiZGF0ZVwiO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQuc3RlcCA9IHNlbGYuaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSB8fCBcImFueVwiO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudGFiSW5kZXggPSAxO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcclxuICAgICAgICBzZWxmLm1vYmlsZUZvcm1hdFN0ciA9XHJcbiAgICAgICAgICAgIGlucHV0VHlwZSA9PT0gXCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiWS1tLWRcXFxcVEg6aTpTXCJcclxuICAgICAgICAgICAgICAgIDogaW5wdXRUeXBlID09PSBcImRhdGVcIiA/IFwiWS1tLWRcIiA6IFwiSDppOlNcIjtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKVxyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKVxyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1heCA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5tYXhEYXRlLCBcIlktbS1kXCIpO1xyXG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLm1vYmlsZUlucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRlKGUudGFyZ2V0LnZhbHVlLCBmYWxzZSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgc2VsZi5vcGVuKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgaG9va3MgPSBzZWxmLmNvbmZpZ1tldmVudF07XHJcbiAgICAgICAgaWYgKGhvb2tzICE9PSB1bmRlZmluZWQgJiYgaG9va3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaG9va3NbaV0gJiYgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaG9va3NbaV0oc2VsZi5zZWxlY3RlZERhdGVzLCBzZWxmLmlucHV0LnZhbHVlLCBzZWxmLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50ID09PSBcIm9uQ2hhbmdlXCIpIHtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcclxuICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcbiAgICAgICAgZS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0RhdGVTZWxlY3RlZChkYXRlKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxmLnNlbGVjdGVkRGF0ZXNbaV0sIGRhdGUpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPCAyKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA+PSAwICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0pIDw9IDApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlIHx8ICFzZWxmLm1vbnRoTmF2KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGhFbGVtZW50LnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgbW9udGhUb1N0cihzZWxmLmN1cnJlbnRNb250aCwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pICsgXCIgXCI7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQudmFsdWUgPSBzZWxmLmN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cclxuICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKClcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jdXJyZW50TW9udGggKyAxID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpIHtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2UgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbGVhcih0cmlnZ2VyQ2hhbmdlKTtcclxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlRm9ybWF0U3RyKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5mb3JtYXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLm1vYmlsZUZvcm1hdFN0cilcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBqb2luQ2hhciA9IHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIlxyXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uXHJcbiAgICAgICAgICAgIDogc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yO1xyXG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZXNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZE9iaikgeyByZXR1cm4gc2VsZi5mb3JtYXREYXRlKGRPYmosIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpOyB9KVxyXG4gICAgICAgICAgICAuam9pbihqb2luQ2hhcik7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkT2JqKSB7IHJldHVybiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgc2VsZi5jb25maWcuYWx0Rm9ybWF0KTsgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKGpvaW5DaGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgIT09IGZhbHNlKVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblZhbHVlVXBkYXRlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb250aE5hdlNjcm9sbChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpc1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5wYXJlbnROb2RlICYmXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnBhcmVudE5vZGUuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gc2VsZi5jdXJyZW50TW9udGhFbGVtZW50IHx8IGlzWWVhcikge1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBtb3VzZURlbHRhKGUpO1xyXG4gICAgICAgICAgICBpZiAoaXNZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGRlbHRhLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb250aE5hdkNsaWNrKGUpIHtcclxuICAgICAgICB2YXIgaXNQcmV2TW9udGggPSBzZWxmLnByZXZNb250aE5hdi5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGlzTmV4dE1vbnRoID0gc2VsZi5uZXh0TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgIGlmIChpc1ByZXZNb250aCB8fCBpc05leHRNb250aClcclxuICAgICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYXJyb3dVcFwiKVxyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciArIDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhcnJvd0Rvd25cIilcclxuICAgICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSAxKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGlzS2V5RG93biA9IGUudHlwZSA9PT0gXCJrZXlkb3duXCIsIGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pXHJcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmwxMG4uYW1QTVtzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IFwiQU1cIiA/IDEgOiAwXTtcclxuICAgICAgICB2YXIgbWluID0gTnVtYmVyKGlucHV0Lm1pbiksIG1heCA9IE51bWJlcihpbnB1dC5tYXgpLCBzdGVwID0gTnVtYmVyKGlucHV0LnN0ZXApLCBjdXJWYWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCksIGRlbHRhID0gZS5kZWx0YSB8fFxyXG4gICAgICAgICAgICAoaXNLZXlEb3duXHJcbiAgICAgICAgICAgICAgICA/IGUud2hpY2ggPT09IDM4ID8gMSA6IC0xXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZKSkgfHwgMCk7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIGlzSG91ckVsZW0gPSBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCwgaXNNaW51dGVFbGVtID0gaW5wdXQgPT09IHNlbGYubWludXRlRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgbWluKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQoIWlzSG91ckVsZW0pICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGludChpc0hvdXJFbGVtKSAmJiBpbnQoIXNlbGYuYW1QTSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIC0xLCBzZWxmLmhvdXJFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID09PSBzZWxmLmhvdXJFbGVtZW50ID8gbmV3VmFsdWUgLSBtYXggLSBpbnQoIXNlbGYuYW1QTSkgOiBtaW47XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgMSwgc2VsZi5ob3VyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAmJlxyXG4gICAgICAgICAgICAgICAgaXNIb3VyRWxlbSAmJlxyXG4gICAgICAgICAgICAgICAgKHN0ZXAgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzXHJcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLmFicyhuZXdWYWx1ZSAtIGN1clZhbHVlKSA+IHN0ZXApKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIlBNXCIgPyBcIkFNXCIgOiBcIlBNXCI7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gcGFkKG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0KCk7XHJcbiAgICByZXR1cm4gc2VsZjtcclxufVxyXG5mdW5jdGlvbiBfZmxhdHBpY2tyKG5vZGVMaXN0LCBjb25maWcpIHtcclxuICAgIHZhciBub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcclxuICAgIHZhciBpbnN0YW5jZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtb21pdFwiKSAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5fZmxhdHBpY2tyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gRmxhdHBpY2tySW5zdGFuY2Uobm9kZSwgY29uZmlnIHx8IHt9KTtcclxuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gobm9kZS5fZmxhdHBpY2tyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUsIGUuc3RhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID09PSAxID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xyXG59XHJcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mbGF0cGlja3IgPSBOb2RlTGlzdC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9O1xyXG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihbdGhpc10sIGNvbmZpZyk7XHJcbiAgICB9O1xyXG59XHJcbnZhciBmbGF0cGlja3I7XHJcbmZsYXRwaWNrciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29uZmlnKSB7XHJcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gX2ZsYXRwaWNrcihbc2VsZWN0b3JdLCBjb25maWcpO1xyXG59O1xyXG53aW5kb3cuZmxhdHBpY2tyID0gZmxhdHBpY2tyO1xyXG5mbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IGRlZmF1bHRzO1xyXG5mbGF0cGlja3IubDEwbnMgPSB7XHJcbiAgICBlbjogX19hc3NpZ24oe30sIGVuZ2xpc2gpLFxyXG4gICAgZGVmYXVsdDogX19hc3NpZ24oe30sIGVuZ2xpc2gpLFxyXG59O1xyXG5mbGF0cGlja3IubG9jYWxpemUgPSBmdW5jdGlvbiAobDEwbikge1xyXG4gICAgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQgPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQsIGwxMG4pO1xyXG59O1xyXG5mbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxufTtcclxuaWYgKHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IodGhpcywgY29uZmlnKTtcclxuICAgIH07XHJcbn1cclxuRGF0ZS5wcm90b3R5cGUuZnBfaW5jciA9IGZ1bmN0aW9uIChkYXlzKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpICsgKHR5cGVvZiBkYXlzID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGF5cywgMTApIDogZGF5cykpO1xyXG59O1xyXG52YXIgZmxhdHBpY2tyJDEgPSBmbGF0cGlja3I7XG5cbnJldHVybiBmbGF0cGlja3IkMTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5qc1xuLy8gbW9kdWxlIGlkID0gMTE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGNvbnRyb2xcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLnBsYWNlaG9sZGVyLFxuICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLnRpbWVPbmx5XG4gICAgICAgICAgPyBfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjbG9ja1wiIH0gfSlcbiAgICAgICAgICA6IF9jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImNhbGVuZGFyLWFsdFwiIH0gfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS52YWx1ZVxuICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnBpY2tlci5jbGVhcigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00ZDQ0M2ZlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZUZvcm1JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWZkY2M3ZmRhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlRm9ybUlucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWZkY2M3ZmRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZmRjYzdmZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWljb25zLXJpZ2h0JzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAndGV4dCdcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJmaWVsZC5tZXRhLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cIiRlbWl0KCd1cGRhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGZhIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvZmE+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtaWNvbnMtcmlnaHQnOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5tZXRhLmNvbnRlbnQgPT09ICdlbWFpbCdcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJmaWVsZC5tZXRhLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cIiRlbWl0KCd1cGRhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNFcnJvclwiPlxuICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2ZhPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWljb25zLXJpZ2h0JzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiJGVtaXQoJ3VwZGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiZmllbGQubWV0YS5zdGVwXCJcbiAgICAgICAgICAgICAgICA6bWluPVwiZmllbGQubWV0YS5taW5cIlxuICAgICAgICAgICAgICAgIDptYXg9XCJmaWVsZC5tZXRhLm1heFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGZhIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvZmE+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICA8dnVlLXN3aXRjaCB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJpcy1sYXJnZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImlzLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWQgfHwgZmllbGQubWV0YS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3VwZGF0ZScpXCI+XG4gICAgICAgICAgICA8L3Z1ZS1zd2l0Y2g+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvblRyaWFuZ2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuaW1wb3J0IFZ1ZVN3aXRjaCBmcm9tICcuL1Z1ZVN3aXRjaC52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYUV4Y2xhbWF0aW9uVHJpYW5nbGUpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVTd2l0Y2ggfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaGFzRXJyb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdkZWZkNjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2RlZmQ2NTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDNlNDQxZDJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZWZkNjUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZpZWxkIC52dWUtc3dpdGNoIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnZ1ZS1zd2l0Y2gge1xcbiAgLS1oZWlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi52dWUtc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udnVlLXN3aXRjaDpiZWZvcmUsIC52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLnZ1ZS1zd2l0Y2g6YmVmb3JlIHtcXG4gICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XFxufVxcbi52dWUtc3dpdGNoLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxufVxcbi52dWUtc3dpdGNoLmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4udnVlLXN3aXRjaC5jaGVja2VkOmFmdGVyIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7XFxufVxcbi52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM2MzYzNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM3NTc1NzU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1wcmltYXJ5LmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwMGQxYjI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcbi52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmZmZTU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGluay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzI3M2RjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzlmYmVlZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIwOWNlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOWNlZTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM5N2QxZjc7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyM2QxNjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QxNjA7XFxufVxcbi52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWViYWI7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG4udnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjdkNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1kYW5nZXIuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZiOGM2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI4YzY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtc21hbGwge1xcbiAgICAtLWhlaWdodDogMC43NXJlbTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbWVkaXVtIHtcXG4gICAgLS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi52dWUtc3dpdGNoLmlzLWxhcmdlIHtcXG4gICAgLS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLDRCQUFxQjtFQUFyQiw0QkFBcUI7RUFBckIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtDQUFFO0FBQzFCO0lBQ0UsV0FBVztJQUNYLDRCQUFxQjtJQUFyQiw0QkFBcUI7SUFBckIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0NBQUU7QUFDakI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QiwwQkFBa0I7SUFBbEIsa0JBQWtCO0NBQUU7QUFDdEI7SUFDRSx5Q0FBeUM7SUFDekMsMEJBQTBCO0NBQUU7QUFDOUI7SUFDRSxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLG9EQUE0QztZQUE1Qyw0Q0FBNEM7Q0FBRTtBQUNoRDtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLDRCQUFvQjtjQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtNQUNFLDJEQUFtRDtjQUFuRCxtREFBbUQ7Q0FBRTtBQUN6RDtJQUNFLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FBRTtBQUMxQjtNQUNFLG9CQUFvQjtNQUNwQix3QkFBd0I7TUFDeEIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtDQUFFO0FBQy9CO01BQ0Usb0JBQW9CO01BQ3BCLHdCQUF3QjtNQUN4QixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxrQkFBa0I7Q0FBRTtBQUN0QjtJQUNFLGtCQUFrQjtDQUFFO0FBQ3RCO0lBQ0UsaUJBQWlCO0NBQUVcIixcImZpbGVcIjpcIlZ1ZVN3aXRjaC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpZWxkIC52dWUtc3dpdGNoIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDsgfVxcblxcbi52dWUtc3dpdGNoIHtcXG4gIC0taGVpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSk7XFxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnZ1ZS1zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLnZ1ZS1zd2l0Y2g6YmVmb3JlLCAudnVlLXN3aXRjaDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7IH1cXG4gIC52dWUtc3dpdGNoOmJlZm9yZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7IH1cXG4gIC52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7IH1cXG4gIC52dWUtc3dpdGNoLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guY2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guY2hlY2tlZDphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy13aGl0ZS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwYTBhMGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtYmxhY2suY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNGE0YTRhO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbGlnaHQuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM2MzYzNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1kYXJrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwZDFiMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1wcmltYXJ5LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzUyZmZlNTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzMyNzNkYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYzsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzlmYmVlZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIwOWNlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOWNlZTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1pbmZvLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIzZDE2MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDE2MDsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzg5ZWJhYjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZGQ1NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NzsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjdkNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmZmI4YzY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1zbWFsbCB7XFxuICAgIC0taGVpZ2h0OiAwLjc1cmVtOyB9XFxuICAudnVlLXN3aXRjaC5pcy1tZWRpdW0ge1xcbiAgICAtLWhlaWdodDogMS4yNXJlbTsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbGFyZ2Uge1xcbiAgICAtLWhlaWdodDogMS41cmVtOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZWZkNjUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8bGFiZWwgY2xhc3M9XCJ2dWUtc3dpdGNoXCIgOmNsYXNzPVwiW3NpemUsIHR5cGUsIHsgJ2NoZWNrZWQnOiB2YWx1ZSwgJ2Rpc2FibGVkJzogZGlzYWJsZWQgfV1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjbGFzcz1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjaGVja2VkXCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnaW5wdXQnLCBjaGVja2VkKVwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICA6Y2hlY2tlZD1cInZhbHVlXCI+XG4gICAgPC9sYWJlbD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuY29uc3Qgc2l6ZXMgPSBbJ2lzLXNtYWxsJywgJ2lzLW1lZGl1bScsICdpcy1sYXJnZSddO1xuY29uc3QgdHlwZXMgPSBbJ2lzLXByaW1hcnknLCAnaXMtd2FybmluZycsICdpcy1kYW5nZXInLCAnaXMtc3VjY2VzcycsICdpcy1pbmZvJ107XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVnVlU3dpdGNoJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHR5cGVzLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gc2l6ZXMuaW5jbHVkZXModmFsdWUpLFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbkBpbXBvcnQgJ35idWxtYS9zYXNzL3V0aWxpdGllcy9pbml0aWFsLXZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+YnVsbWEvc2Fzcy91dGlsaXRpZXMvZGVyaXZlZC12YXJpYWJsZXMuc2Fzcyc7XG5cbi5maWVsZCB7XG4gICAgLnZ1ZS1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG59XG5cbi52dWUtc3dpdGNoIHtcbiAgICAtLWhlaWdodDogJHNpemUtbm9ybWFsO1xuXG4gICAgaW5wdXQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktbGlnaHRlcjtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XG4gICAgfVxuXG4gICAgJi5jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGV4dDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQ7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkcGFpciBpbiAkY29sb3JzIHtcbiAgICAgICAgJGNvbG9yOiBudGgoJHBhaXIsIDEpO1xuICAgICAgICAmLmlzLSN7JG5hbWV9IHtcbiAgICAgICAgICAgICYuY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkY29sb3IsIDI1JSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAyNSUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtc21hbGwge1xuICAgICAgICAtLWhlaWdodDogJHNpemUtc21hbGw7XG4gICAgfVxuICAgICYuaXMtbWVkaXVtIHtcbiAgICAgICAgLS1oZWlnaHQ6ICRzaXplLW1lZGl1bTtcbiAgICB9XG4gICAgJi5pcy1sYXJnZSB7XG4gICAgICAgIC0taGVpZ2h0OiAkc2l6ZS1sYXJnZTtcbiAgICB9XG59XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsYWJlbFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1zd2l0Y2hcIixcbiAgICAgIGNsYXNzOiBbXG4gICAgICAgIF92bS5zaXplLFxuICAgICAgICBfdm0udHlwZSxcbiAgICAgICAgeyBjaGVja2VkOiBfdm0udmFsdWUsIGRpc2FibGVkOiBfdm0uZGlzYWJsZWQgfVxuICAgICAgXVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tlZCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkLFxuICAgICAgICAgIHJlcXVpcmVkOiBfdm0ucmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICBjaGVja2VkOiBfdm0udmFsdWUsXG4gICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uY2hlY2tlZClcbiAgICAgICAgICAgID8gX3ZtLl9pKF92bS5jaGVja2VkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICA6IF92bS5jaGVja2VkXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jaGVja2VkLFxuICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmNoZWNrZWQgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgKF92bS5jaGVja2VkID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF92bS5jaGVja2VkID0gJCRjXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiaW5wdXRcIiwgX3ZtLmNoZWNrZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZGVmZDY1MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2RlZmQ2NTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF92bS5maWVsZC5tZXRhLmNvbnRlbnQgPT09IFwidGV4dFwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGQudmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaGFzRXJyb3JcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcImVtYWlsXCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImhhcy1pY29ucy1yaWdodFwiOiBfdm0uaGFzRXJyb3IgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5oYXNFcnJvciB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uZmllbGQubWV0YS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGQudmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaGFzRXJyb3JcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcIm51bWJlclwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBzdGVwOiBfdm0uZmllbGQubWV0YS5zdGVwLFxuICAgICAgICAgICAgICAgIG1pbjogX3ZtLmZpZWxkLm1ldGEubWluLFxuICAgICAgICAgICAgICAgIG1heDogX3ZtLmZpZWxkLm1ldGEubWF4LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJjaGVja2JveFwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidnVlLXN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogXCJpcy1sYXJnZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaXMtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZCB8fCBfdm0uZmllbGQubWV0YS5yZWFkb25seVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mZGNjN2ZkYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZmRjYzdmZGFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5kYXRhLmljb24gfHwgX3ZtLmRhdGEudGl0bGVcbiAgICAgICAgPyBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5kYXRhLmljb25cbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogX3ZtLmRhdGEuaWNvbiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRhdGEudGl0bGVcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVlLWZvcm1cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEuZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gIWZpZWxkLm1ldGEuaGlkZGVuXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmNvbHVtblNpemVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oZmllbGQubGFiZWwpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwIGlzLWRhbmdlciBpcy1wdWxsZWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9ycy5nZXQoZmllbGQubmFtZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEuY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KGZpZWxkLm5hbWUsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBfdm0uZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2dWUtZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInZ1ZS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZpZWxkLm1ldGEub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleS1tYXBcIjogZmllbGQubWV0YS5rZXlNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBmaWVsZC5tZXRhLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmllbGQubWV0YS5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQubWV0YS5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJkYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmaWVsZC5tZXRhLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBmaWVsZC5tZXRhLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChmaWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZmllbGQubWV0YS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lLW9ubHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWRhbmdlclwiOiBfdm0uZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBmaWVsZC5tZXRhLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5oYXMoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuZm9yYmlkZGVuIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmxhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmljb24gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZS5mb3JiaWRkZW4gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jcmVhdGUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24ubGFiZWwpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmljb24gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHsgXCJpcy1sb2FkaW5nXCI6IF92bS5sb2FkaW5nIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5mb3JiaWRkZW5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmxhYmVsKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IF92bS5kYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmljb24gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgeyBcImlzLWxvYWRpbmdcIjogX3ZtLmxvYWRpbmcgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZS5mb3JiaWRkZW5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5sYWJlbCkpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uaWNvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXMtY2xlYXJmaXhcIiB9KVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveVxuICAgICAgICA/IF9jKFwibW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLnNob3dNb2RhbCxcbiAgICAgICAgICAgICAgX186IF92bS5fXyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5tZXNzYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29tbWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZGVzdHJveSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWI1MmU5MjdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFiNTJlOTI3XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIj5cbiAgICAgICAgICAgIDx2dWUtZm9ybSA6ZGF0YT1cImZvcm1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYm94IGFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpY29uXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IHByb3BzLmVycm9ycy5oYXMoJ2ljb24nKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bj1cInByb3BzLmVycm9ycy5jbGVhcihwcm9wcy5maWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLmZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvcHMuZXJyb3JzLmhhcygnaWNvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3Z1ZS1mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZC9zaGFrYWJsZS5lcyc7XG5pbXBvcnQgVnVlRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYUV4Y2xhbWF0aW9uVHJpYW5nbGUpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVGb3JtIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9ybToge30sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLiRyb3V0ZS5uYW1lLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsIGZhbHNlKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IHJlc3BvbnNlLmRhdGEuZm9ybTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0VkaXQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uaW5pdGlhbGlzZWRcbiAgICAgICAgICA/IF9jKFwidnVlLWZvcm1cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3ggYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5mb3JtIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5maWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1kYW5nZXJcIjogcHJvcHMuZXJyb3JzLmhhcyhcImljb25cIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHByb3BzLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5lcnJvcnMuY2xlYXIocHJvcHMuZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5lcnJvcnMuaGFzKFwiaWNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGE2NmFkNzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRhNjZhZDc4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvRWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSJdLCJzb3VyY2VSb290IjoiIn0=