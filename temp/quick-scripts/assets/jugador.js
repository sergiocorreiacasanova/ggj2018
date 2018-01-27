(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/jugador.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '02941jM40RFl57r1Ags29M9', 'jugador', __filename);
// jugador.js

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
								pantalla: {
												default: null,
												type: cc.Node,
												serializable: true
								}
				},

				// LIFE-CYCLE CALLBACKS:

				onLoad: function onLoad() {
								var self = this;

								cc.eventManager.addListener({
												event: cc.EventListener.TOUCH_ONE_BY_ONE,
												swallowTouches: false,
												onTouchBegan: function onTouchBegan(touch, event) {

																cc.log('onTouchBegan');

																var locationInNode = touch.getLocation();

																self.node.position = locationInNode;

																//var target = event.getCurrentTarget();	

																//var locationInNode = target.convertToNodeSpace(touch.getLocation());	
																//		var locationInNode = touch.getLocation();	


																//		var s = target.getContentSize();
																//		var rect = cc.rect(0, 0, s.width, s.height);

																//Check the click area
																//		if (cc.rectContainsPoint(rect, locationInNode)) {		
																//			cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
																//			target.opacity = 180;
																//			return true;
																//		}
																return false;
												},
												//Trigger when moving touch
												onTouchMoved: function onTouchMoved(touch, event) {

																cc.log('onTouchMoved');

																/*		//Move the position of current button sprite
                		var target = event.getCurrentTarget();
                		var delta = touch.getDelta();
                		target.x += delta.x;
                		target.y += delta.y;*/
												},
												//Process the touch end event
												onTouchEnded: function onTouchEnded(touch, event) {

																cc.log('onTouchEnded');

																//var target = event.getCurrentTarget();
																//Reset zOrder and the display sequence will change

																//if (target == sprite2) {					
																//	sprite1.setLocalZOrder(100);
																//} else if (target == sprite1) {
																//	sprite1.setLocalZOrder(0);
																//}
												}
								}, self.pantalla);
				},

				start: function start() {}
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
        //# sourceMappingURL=jugador.js.map
        