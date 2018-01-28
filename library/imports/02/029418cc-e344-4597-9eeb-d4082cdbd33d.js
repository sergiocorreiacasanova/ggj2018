"use strict";
cc._RF.push(module, '02941jM40RFl57r1Ags29M9', 'jugador');
// jugador.js

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

"use strict";

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
		velocidadAngularMaxima: {
			default: 1.0,
			serializable: true
		},
		aceleracionAngular: {
			default: 1.0,
			serializable: true
		},
		radioOrbitacion: {
			default: 20.0,
			serializable: true
		},
		radioCentro: {
			default: 40,
			serializable: true
		},

		controlesActivos: {
			default: true,
			serializable: true
		}
	},

	destino: null,
	anguloDestino: 0,
	distanciaDestino: 0,
	velocidadAngularDestino: 0,
	aceleracionAngularDestino: 0,
	deltaAnguloDesaceleracionDestino: 0,
	velocidadDestinoX: 0,
	velocidadDestinoY: 0,
	orbitando: false,

	// LIFE-CYCLE CALLBACKS:
	distanciaPosicion: function distanciaPosicion(a, b) {
		return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
	},


	onLoad: function onLoad() {
		var self = this;

		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: false,
			onTouchBegan: function onTouchBegan(touch, event) {
				if (self.controlesActivos) {
					if (isNaN(self.velocidadAngularDestino)) self.velocidadAngularDestino = 0;

					self.destino = touch.getLocation();

					if (isNaN(self.node.rotation)) self.node.rotation = 0;

					self.node.rotation = (self.node.rotationX + 360) % 360;

					if (self.distanciaPosicion(self.fondo.position, self.destino) < self.radioCentro) self.anguloDestino = self.node.rotationX;else {
						// calcula el angulo contra la vertical x+
						var anguloRad = (Math.PI / 2 - Math.atan2(self.destino.y - self.fondo.position.y, self.destino.x - self.fondo.position.x) + Math.PI * 2) % (Math.PI * 2);

						self.anguloDestino = anguloRad / Math.PI * 180;
					}
					// intento determinar hacia qué lado girar
					/*
     	Ej 1 
     	destino = 270
     	nodo = 30
     	destino - nodo >180 -> gira contrareloj
     	Ej 2
     	Destino = 30
     	nodo = 270
     	Destino - nodo < -180 - gira reloj
     */
					var diffA = (self.anguloDestino + 180 - (self.node.rotationX + 180)) % 180;

					if (diffA > 0) {
						self.aceleracionAngularDestino = self.aceleracionAngular;
						self.deltaAnguloDesaceleracionDestino = Math.abs(diffA) / 2;
					} else {
						self.aceleracionAngularDestino = -self.aceleracionAngular;
						self.deltaAnguloDesaceleracionDestino = Math.abs(diffA) / 2;
					}

					self.distanciaDestino = self.distanciaPosicion(self.node.position, self.destino);
					self.orbitando = false;

					// calcula el angulo contra la vertical x+
					var anguloVelocidad = Math.atan2(self.destino.y - self.node.position.y, self.destino.x - self.node.position.x);

					self.velocidadDestinoX = Math.cos(anguloVelocidad) * self.velocidad;
					self.velocidadDestinoY = Math.sin(anguloVelocidad) * self.velocidad;
				}
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

		self.destino = self.node.position;
		self.anguloDestino = self.node.rotationX;
		self.orbitando = true;
		self.controlesActivos = true;
		self.velocidadDestinoX = 0;
		self.velocidadDestinoY = 0;
		self.velocidadAngularDestino = 0;
	},

	start: function start() {},
	update: function update(dt) {
		if (isNaN(this.velocidadAngularDestino) || isNaN(this.velocidadDestinoX) || isNaN(this.velocidadDestinoY)) {} else {
			if (Math.abs(((this.node.rotationX + 360) % 360 + 360) % 540 - ((this.anguloDestino + 360) % 360 + 360) % 540) < this.deltaAnguloDesaceleracionDestino) {
				this.aceleracionAngularDestino = -this.aceleracionAngularDestino;
				this.deltaAnguloDesaceleracionDestino = -1; // queda deshabilitado
			}

			this.velocidadAngularDestino += this.aceleracionAngularDestino;

			if (Math.abs((this.node.rotation + 360) % 540 - (this.anguloDestino + 360) % 540) < 5) {
				this.aceleracionAngularDestino = 0;
				this.velocidadAngularDestino = 0;
			}

			this.node.rotation = this.node.rotationX + this.velocidadAngularDestino * dt;

			var DistanciaActual = this.distanciaPosicion(this.node.position, this.destino);

			//cc.log (DistanciaActual, this.distanciaDestino, this.orbitando);

			if (DistanciaActual <= this.distanciaDestino && this.orbitando !== true) this.distanciaDestino = DistanciaActual;else {
				if (this.orbitando !== true) {
					this.velocidadDestinoX = 0;
					this.velocidadDestinoY = 0;
					this.orbitando = true;
				}

				if (this.velocidadDestinoX > this.velocidadDestinoY) {
					this.velocidadDestinoX = this.velocidadDestinoY;
				} else {
					this.velocidadDestinoY = this.velocidadDestinoX;
				}

				this.velocidadDestinoX = this.velocidadDestinoX * .5 + (this.destino.x - this.node.position.x) * .5 + this.radioOrbitacion * (Math.random() - .5);

				this.velocidadDestinoY = this.velocidadDestinoY * .5 + (this.destino.y - this.node.position.y) * .5 + this.radioOrbitacion * (Math.random() - .5);
			}

			this.node.setPosition(this.node.position.x + this.velocidadDestinoX * dt, this.node.position.y + this.velocidadDestinoY * dt);
		}
	}
});

cc._RF.pop();