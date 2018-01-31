(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Timer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2cee4GeE3BAfovN9um1ClKo', 'Timer', __filename);
// Timer.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
				extends: cc.Component,

				properties: {
								Timer: {
												default: null,
												type: cc.Node,
												serializable: true
								},
								TiempoLimiteSegundos: {
												default: 240,
												serializable: true
								}

				},

				inicio: null,
				// LIFE-CYCLE CALLBACKS:

				onLoad: function onLoad() {
								this.inicio = new Date().getTime();
								this.tiempo = 1;
				},
				start: function start() {},
				update: function update(dt) {

								if (this.tiempo > 0) {
												this.tiempo = this.TiempoLimiteSegundos * 1000 - (new Date().getTime() - this.inicio);

												if (this.tiempo > 0) {
																var Miliseg = '000' + Math.floor(this.tiempo % 1000 / 10).toString();
																var Segundos = '00' + (Math.floor(this.tiempo / 1000) % 60).toString(); //in s
																var Minutos = '00' + Math.floor(this.tiempo / 60 / 1000).toString(); //in minutes

																this.Timer.getComponent(cc.Label).string = Minutos.substr(Minutos.length - 2) + ":" + Segundos.substr(Segundos.length - 2) + "." + Miliseg.substr(Miliseg.length - 2);
												} else {
																this.Timer.getComponent(cc.Label).string = '...---...';
																this.node.getComponent('GameFlow').timeout();
												}
								}
				}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Timer.js.map
        