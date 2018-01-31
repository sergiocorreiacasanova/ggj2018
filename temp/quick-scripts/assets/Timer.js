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
        },

        tiempo: {
            default: 0
        },

        strT: {
            default: 0
        },

        min: {
            default: 0
        },

        mili: {
            default: 0
        },

        seg: {
            default: 0
        }

    },
    inicio: null,
    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.inicio = new Date().getTime();
    },
    start: function start() {},
    update: function update(dt) {
        var self = this;
        self.tiempo = (this.TiempoLimiteSegundos * 1000 - (new Date().getTime() - this.inicio)) / 100;
        self.tiempo = self.tiempo | 0;
        self.min = self.tiempo / 1000;
        self.min = self.min | 0;
        self.mili = self.tiempo % 10;
        self.seg = self.tiempo % 1000 / 10;
        self.seg = self.seg | 0;
        self.strT = self.min + ':' + self.seg + ':' + self.mili;
        this.Timer.getComponent(cc.Label).string = self.strT;
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
        