"use strict";
cc._RF.push(module, 'd31eedP3X5AR4ZPKWxQ9/67', 'ReiniciarHoja');
// ReiniciarHoja.js

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
        Hoja: {
            default: null,
            type: cc.Node,
            serializable: true
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    ReiniciarX: function ReiniciarX(X) {
        Hoja.PositionX = X;
    },
    ReiniciarY: function ReiniciarY(Y) {
        Hoja.PositionY = Y;
    }

    // update (dt) {},

});

cc._RF.pop();