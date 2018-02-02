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

		velocidadGiroMaxima: {
			default: 1.0,
			serializable: true
		},
		
		aceleracionGiro: {
			default: 1.0,
			serializable: true
		},
		 
		 controlesActivos:{
			 default:true,
			 serializable: true,
		 }
    },

    // LIFE-CYCLE CALLBACKS:


	accionaIzquierda: false,
	accionaDerecha: false,
	velocidadGiro: 0.0,
	anguloActual: 0.0,
	
    start () {
		
    },

    onLoad () {
        var self = this;
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
            onKeyPressed: function(keyCode, event) {
				if (self.controlesActivos)
				{
					switch(keyCode) {
						case cc.KEY.a:
							self.accionaIzquierda = true;
							self.accionaDerecha = false;
							//cc.log('gira izquierda');
							
							break;
						case cc.KEY.d:
							self.accionaIzquierda = false;
							self.accionaDerecha = true;
							//cc.log('gira derecha');
							break;
						case cc.KEY.space:
							cc.log('Barra presionada');
							self.getComponent('GameFlow').IniciarBit();                        
                            break;

					}
				}
            },
            // when releasing the button, stop acceleration in this direction
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.accionaIzquierda = false;
                        break;
                    case cc.KEY.d:
                        self.accionaDerecha = false;
                        break;
                    case cc.KEY.space:
						cc.log('Barra soltada');
						self.getComponent('GameFlow').FinalizarBit();                        
                        break;

                    case cc.KEY.enter:
                    	cc.log('Ingreso Texto');
						self.getComponent('GameFlow').ChequearFrecuencia();                        
                        break;
                }
            }
        }, self.node);
		self.controlesActivos= true;
		self.anguloActual = self.node.rotationX;
		self.velocidadGiro = -2.0;
		self.anguloActual = 0.0;
	},
	
    update (dt) {
		var variacion = this.aceleracionGiro * dt;
		
		if (isNaN(this.velocidadGiro)) this.velocidadGiro = 0.0;
		if (isNaN(this.anguloActual)) this.anguloActual = 0.0;
		
		if (this.accionaIzquierda)
		{
			if (this.velocidadGiro < this.velocidadGiroMaxima)
				this.velocidadGiro += variacion;
			else
				this.velocidadGiro = this.velocidadGiroMaxima;
		}
		else
			if (this.accionaDerecha)
			{
				if (this.velocidadGiro > -this.velocidadGiroMaxima)
					this.velocidadGiro -= variacion;
				else
					this.velocidadGiro = -this.velocidadGiroMaxima;
			}
			else
			{// no acciona a derecha ni a izquierda y entonces desacelera
		
				if (this.velocidadGiro > 0.0)
					this.velocidadGiro -= variacion/2;
				else
					this.velocidadGiro += variacion/2;
			}
		
		if (this.velocidadGiro >= -variacion * 4 && this.velocidadGiro < variacion * 4 && !this.accionaIzquierda && !this.accionaDerecha)
			this.velocidadGiro = 0.0;
		else
			this.anguloActual = (this.anguloActual + this.velocidadGiro) % 360;
		
		//cc.log(this.velocidadGiro, this.anguloActual, dt, this.velocidadGiroMaxima, this.aceleracionGiro);
		
		this.node.rotation = this.anguloActual;
	},
});
