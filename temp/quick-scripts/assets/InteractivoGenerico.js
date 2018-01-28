(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/InteractivoGenerico.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1d2a0pgHDVHDbuyKezHXw8B', 'InteractivoGenerico', __filename);
// InteractivoGenerico.js

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
        GameFlow: {
            default: null,
            type: cc.Node,
            serializable: true
        },
        ActivaObjeto1: {
            default: null,
            type: cc.Node,
            serializable: true
        },
        ActivaObjeto2: {
            default: null,
            type: cc.Node,
            serializable: true
        },
        ActivaObjeto3: {
            default: null,
            type: cc.Node,
            serializable: true
        },
        DesactivaObjeto1: {
            default: null,
            type: cc.Node,
            serializable: true
        },
        DesactivaObjeto2: {
            default: null,
            type: cc.Node,
            serializable: true
        },
        DesactivaObjeto3: {
            default: null,
            type: cc.Node,
            serializable: true
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();

        manager.enabled = true;

        manager.enabledDebugDraw = true; // DEBUG
    },
    start: function start() {},


    onCollisionEnter: function onCollisionEnter(other, self) {

        this.GameFlow.getComponent('GameFlow').RetoCompletado(this);
    }
    // update (dt) {},
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
        //# sourceMappingURL=InteractivoGenerico.js.map
        