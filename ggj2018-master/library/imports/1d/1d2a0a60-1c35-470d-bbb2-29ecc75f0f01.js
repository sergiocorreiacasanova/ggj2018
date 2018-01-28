"use strict";
cc._RF.push(module, '1d2a0pgHDVHDbuyKezHXw8B', 'InteractivoGenerico');
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

    //onLoad () {
    //},

    //start () {
    //},

    ActivarColision: function ActivarColision() {
        if (!this.getComponent(cc.BoxCollider).enabled) {

            var self = this;

            if (this.GameFlow.getComponent('GameFlow').ColiderActivo !== self.getComponent(cc.BoxCollider)) if (this.GameFlow.getComponent('GameFlow').ColiderActivo) this.GameFlow.getComponent('GameFlow').ColiderActivo.enabled = false;

            this.GameFlow.getComponent('GameFlow').ColiderActivo = self.getComponent(cc.BoxCollider);

            setTimeout(function () {
                self.getComponent(cc.BoxCollider).enabled = false;
            }, 10000);

            this.getComponent(cc.BoxCollider).enabled = true;
        }
    },

    onCollisionEnter: function onCollisionEnter(other, self) {

        this.GameFlow.getComponent('GameFlow').RetoCompletado(this);
    },

    onCollisionExit: function onCollisionExit(Other, self) {

        self.getComponent(cc.BoxCollider).enabled = false;
    }
    // update (dt) {},
});

cc._RF.pop();