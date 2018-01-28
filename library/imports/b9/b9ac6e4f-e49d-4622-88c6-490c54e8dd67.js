"use strict";
cc._RF.push(module, 'b9ac65P5J1GIojGSQxU6N1n', 'ScripdeColision');
// ScripdeColision.js

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

        ItemInteractivo: {
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
        cc.log('Hola');
        var Gamemode = this.GameFlow;
        Gamemode.getComponent('GameFlow').Colisiono(self);
    }
    // update (dt) {},
});

cc._RF.pop();