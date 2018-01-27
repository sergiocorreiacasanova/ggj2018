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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
		
		velocidadGiroMaxima: {
			default: 1.0,
			serializable: true
		},
		
		aceleracionGiro: {
			default: 1.0,
			serializable: true
		}
    },

    // LIFE-CYCLE CALLBACKS:


	accLeft: false,
	accRight: false,
	velocidadgiro: 0.0,
	anguloactual: 0.0,
	
    start () {
		
    },

    onLoad () {
		this.setInputControl();
		
	},
	
	setInputControl: function () {
        var self = this;
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
						//cc.log('gira izquierda');
						
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
						//cc.log('gira derecha');
                        break;
                }
            },
            // when releasing the button, stop acceleration in this direction
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
	},
	
    update (dt) {
		
		if (!isNaN(dt))
		{
			if (isNaN(this.velocidadgiro)) this.velocidadgiro = 0.0;
			if (isNaN(this.anguloactual)) this.anguloactual = 0.0;
			
			if (this.accLeft )
				if (this.velocidadgiro < this.velocidadGiroMaxima)
					this.velocidadgiro += this.aceleracionGiro * dt;
				else
					this.velocidadgiro = this.velocidadGiroMaxima;
			else
				if (this.accRight)
					if (this.velocidadgiro > -this.velocidadGiroMaxima)
						this.velocidadgiro -= this.aceleracionGiro * dt;
					else
						this.velocidadgiro = - this.velocidadGiroMaxima;
				else
					if (this.velocidadgiro > 0.0)
						this.velocidadgiro -= this.aceleracionGiro * dt;
					else
						this.velocidadgiro += this.aceleracionGiro * dt;
			
			if (this.velocidadgiro < 5.0)
				this.velocidadgiro = 0.0;
			else
				this.anguloactual+= this.velocidadgiro;
			
			//cc.log(this.velocidadgiro, this.anguloactual, dt, this.velocidadGiroMaxima, this.aceleracionGiro);
			
			this.node.rotation = this.anguloactual;
		}
	},
});
