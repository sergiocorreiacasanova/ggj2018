"use strict";
cc._RF.push(module, '02941jM40RFl57r1Ags29M9', 'jugador');
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
		fondo: {
			default: null,
			type: cc.Node,
			serializable: true
		},
		velocidad: {
			default: 1.0,
			serializable: true
		},
		velocidadAngular: {
			default: 1.0,
			serializable: true
		},
		radioVacilacion: {
			default: 20.0,
			serializable: true
		},
		radioCentro: {
			default: 40,
			serializable: true
		}
	},

	destino: null,
	anguloDestino: 0,
	velocidadAngularDestino: 0,

	velocidadDestinoX: 0,
	velocidadDestinoY: 0,

	// LIFE-CYCLE CALLBACKS:
	distanciaPosicion: function distanciaPosicion(a, b) {
		return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
	},


	onLoad: function onLoad() {
		var self = this;

		this.destino = this.node.position;
		this.anguloDestino = this.node.rotationX;

		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: false,
			onTouchBegan: function onTouchBegan(touch, event) {

				self.destino = touch.getLocation();

				if (isNaN(self.node.rotation)) self.node.rotation = 0;

				self.node.rotation = self.node.rotationX % 360;

				var anguloRad = Math.atan2(self.destino.y - self.fondo.y, self.destino.x - self.fondo.x);

				self.anguloDestino = anguloRad / Math.PI * 180;

				if (self.node.rotationX < self.anguloDestino) self.node.rotationX += 360;

				if (self.node.rotationX - self.anguloDestino > self.anguloDestino + 360 - self.node.rotationX) self.velocidadAngularDestino = self.velocidadAngular;else self.velocidadAngularDestino = -self.velocidadAngular;

				self.velocidadDestinoX = Math.cos(anguloRad) * self.velocidad;
				self.velocidadDestinoY = Math.sin(anguloRad) * self.velocidad;

				if (self.distanciaPosicion(self.destino, self.fondo.position) < self.radioCentro) self.velocidadAngularDestino = 0;

				cc.log(self.destino, self.anguloDestino, self.velocidadDestinoX, self.velocidadDestinoY);

				return false;
			},
			//Trigger when moving touch
			onTouchMoved: function onTouchMoved(touch, event) {

				cc.log('onTouchMoved');
			},
			//Process the touch end event
			onTouchEnded: function onTouchEnded(touch, event) {

				cc.log('onTouchEnded');
			}
		}, self.node);
	},

	start: function start() {},
	update: function update(dt) {

		this.node.rotation = this.node.rotationX + this.velocidadAngularDestino * dt;

		this.node.position.x = 0.0 + this.node.position.x + this.velocidadDestinoX * dt;
		this.node.position.y = 0.0 + this.node.position.y + this.velocidadDestinoY * dt;

		cc.log(this.velocidadAngularDestino);
		cc.log(this.velocidadDestinoY);
	}
});

cc._RF.pop();