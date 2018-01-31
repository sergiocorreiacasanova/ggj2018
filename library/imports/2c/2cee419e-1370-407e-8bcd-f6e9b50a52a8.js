"use strict";
cc._RF.push(module, '2cee4GeE3BAfovN9um1ClKo', 'Timer');
// Timer.js

"use strict";

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
    },
    start: function start() {},
    update: function update(dt) {
        this.Timer.getComponent(cc.Label).string = this.TiempoLimiteSegundos * 1000 - (new Date().getTime() - this.inicio);
    }
});

cc._RF.pop();