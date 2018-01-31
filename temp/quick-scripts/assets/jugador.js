(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/jugador.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '02941jM40RFl57r1Ags29M9', 'jugador', __filename);
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
	distanciaAngularDestino: 0,
	velocidadAngularDestino: 0,
	aceleracionAngularDestino: 0,
	deltaAnguloDesaceleracionDestino: 0,
	velocidadDestinoX: 0,
	velocidadDestinoY: 0,
	orbitando: false,

	estadoActual: null,

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

					//self.node.rotation = (self.node.rotationX ) % 180;

					if (self.distanciaPosicion(self.fondo.position, self.destino) < self.radioCentro) self.anguloDestino = self.node.rotationX;else {
						// calcula el angulo contra la vertical x+
						var anguloRad = Math.atan2(self.destino.y - self.fondo.position.y, self.destino.x - self.fondo.position.x);

						self.anguloDestino = 90 - anguloRad / Math.PI * 180;
					}
					// intento determinar hacia qué lado girar

					var diffA = self.distanciaAngular(self.anguloDestino, self.node.rotationX);

					if (diffA > 0) {
						self.aceleracionAngularDestino = self.aceleracionAngular;
						self.deltaAnguloDesaceleracionDestino = Math.abs(diffA) / 2;
					} else {
						self.aceleracionAngularDestino = -self.aceleracionAngular;
						self.deltaAnguloDesaceleracionDestino = Math.abs(diffA) / 2;
					}

					self.distanciaAngularDestino = Math.abs(diffA);

					if (self.distanciaAngularDestino > 60) {
						self.setEstado('giro');
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

		self.estadoActual = '';
	},
	setEstado: function setEstado(estado) {
		/*
  		if (estado === 'estatico' && 
  				this.fondo.getComponent('GameFlow')&& 
  				this.fondo.getComponent('GameFlow').ColiderActivo &&
  				this.fondo.getComponent('GameFlow').ColiderActivo.enabled)
  			estado = 'tocar';
  		*/
		var self = this;

		switch (estado) {
			case 'giro':
				setTimeout(function () {
					self.setEstado('estatico');
				}, 5750);
				break;
			case 'agarrar':
				setTimeout(function () {
					self.setEstado('estatico');
				}, 1500);
				break;
			case 'electrocutado':
				setTimeout(function () {
					self.setEstado('estatico');
				}, 2000);
				break;
			default:
		}

		if (estado !== this.estadoActual) {
			if (this.node.getChildByName(this.estadoActual)) this.node.getChildByName(this.estadoActual).active = false;

			this.estadoActual = estado;

			this.node.getChildByName(estado).active = true;

			/*
   DragonBone.Animation.FadeIn(
   string animationName, float fadeInTime = -1.0f, int playTimes = -1,
   int layer = 0, string group = null, AnimationFadeOutMode fadeOutMode = AnimationFadeOutMode.SameLayerAndGroup,
   bool additiveBlending = false, bool displayControl = true,
   bool pauseFadeOut = true, bool pauseFadeIn = true
   )
   		Sample:
   Armature.Animation.FadeIn("Shoot", 0.05f, -1, 0); // a shooting animation that plays in loop (-1)
   Armature.Animation.FadeIn("Kick", 0.025f, 0, 1); // while shooting, he also kicks in one round. Not sure if that 0 plays once though, but I hope you get my point :D
   */

			this.node.getChildByName(estado).getComponent(dragonBones.ArmatureDisplay).armature().animation.fadeIn("animtion0", -1, -1, 0);

			console.log(this.node.getChildByName(estado));
		}
	},
	start: function start() {
		this.setEstado('estatico');
	},
	distanciaAngular: function distanciaAngular(a, b) {

		var diffA = (a - b) % 360;

		if (diffA < 0) diffA = diffA + 360;

		if (diffA > 180) diffA = diffA - 360;

		return diffA;
	},
	update: function update(dt) {
		if (isNaN(this.velocidadAngularDestino) || isNaN(this.velocidadDestinoX) || isNaN(this.velocidadDestinoY)) {} else {
			var diffA = Math.abs(this.distanciaAngular(this.node.rotationX, this.anguloDestino));
			// a mitad de camino entre angulos, desacelero.
			if (diffA < this.deltaAnguloDesaceleracionDestino) {
				this.aceleracionAngularDestino = -this.aceleracionAngularDestino;
				this.deltaAnguloDesaceleracionDestino = -1; // queda deshabilitado
			}
			// Mientras la distancia angular se esté achicando, sigo rotando, de lo contrario queda quieto.
			if (this.distanciaAngularDestino >= diffA) {
				this.velocidadAngularDestino += this.aceleracionAngularDestino;
				this.node.rotation = this.node.rotationX + this.velocidadAngularDestino * dt;
				this.distanciaAngularDestino = diffA;
			} else {
				this.aceleracionAngularDestino = 0;
				this.velocidadAngularDestino = 0;
				//this.node.rotation = this.anguloDestino;
			}

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
        