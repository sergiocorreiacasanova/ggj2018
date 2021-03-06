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
        
           Astronauta:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },
        
            Capa:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

           bFrecIngresada:{
                get () {
                    if(typeof this._bFrecIngresada === "undefined")
						this._bFrecIngresada = false;
					
                    return this._bFrecIngresada;                    
                },

                set (value) {
                        this._bFrecIngresada = value;
                },
            },

            Boton:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bBoton:{
                get () {
                    if(typeof this._bBoton === "undefined")
						this._bBoton = false;
					
                    return this._bBoton;                    
                },

                set (value) {
                        this._bBoton = value;
                },
            },

            Libro1:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bLibro1:{
                get () {
                    if(typeof this._bLibro1 === "undefined")
						this._bLibro1 = false;
					
                    return this._bLibro1;                    
                },

                set (value) {
                        this._bLibro1 = value;
                },
            },

            Libro2:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bLibro2:{
                get () {
                    if(typeof this._bLibro2 === "undefined")
						this._bLibro2 = false;
					
                    return this._bLibro2;                    
                },

                set (value) {
                        this._bLibro2 = value;
                },
            },

            Libro3:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bLibro3:{
                get () {
                    if(typeof this._bLibro3 === "undefined")
						this._bLibro3 = false;
					
                    return this._bLibro3;                    
                },

                set (value) {
                        this._bLibro3 = value;
                },
            },

            Panel:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bPanel:{
                get () {
                    if(typeof this._bPanel === "undefined")
						this._bPanel = false;
					
                    return this._bPanel;                    
                },

                set (value) {
                        this._bPanel = value;
                },
            },
			Asfixia:{
                default: null,
                url: cc.AudioClip,
            },
			
            Chispas:{
                default: null,
                url: cc.AudioClip,
            },
			
            MusicaCreepy:{
                default: null,
                url: cc.AudioClip,
            },

            Tono:{
                default: null,
                url: cc.AudioClip,
            },


            Computadora:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bComputadora:{
                get () {
                    if(typeof this._bComputadora === "undefined")
						this._bComputadora = false;
					
                    return this._bComputadora;                    
                },

                set (value) {
                        this._bComputadora = value;
                },
            },

            Cinta:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bCinta:{
                get () {
                    if(typeof this._bCinta === "undefined")
						this._bCinta = false;
					
                    return this._bCinta;                    
                },

                set (value) {
                        this._bCinta = value;
                },
            },

            Salida:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

        //Parte actual del juego ("nivel actual")
        Estado:{
            default: 0,
        },

        //Final que se presenta al jugador
        Final:{
            default: 1,
        },

        inicio: null,

        codigo: null,

        RepSonido: null,
    },

    bFrecIngresada: false,
    bBoton: false,
    bComputadora: false,
    bLibros: false,
    bTablero: false,
    bCinta: false,
   
	ColiderActivo: null,

    borrar: 0,

    // LIFE-CYCLE CALLBACKS:

    onLoad(){
		var self = this;
        var Luces = this.Boton;
        Luces.active = true;
		
		this.AccionesJuego = {
			Luz: function(Componente){

                self.bBoton = true;
				self.AccionGeneralJuego(Componente);
				self.node.getChildByName('nave').color = new cc.color(255,255,255,255);
				
				//self.Astronauta.getChildByName('tocar').color = new cc.color(255,255,255,255);
				self.Astronauta.getChildByName('agarrar').color = new cc.color(255,255,255,255);
				self.Astronauta.getChildByName('estatico').color = new cc.color(255,255,255,255);
				self.Astronauta.getChildByName('asfixia').color = new cc.color(255,255,255,255);
				self.Astronauta.getChildByName('giro').color = new cc.color(255,255,255,255);
				self.Astronauta.getChildByName('electrocutado').color = new cc.color(255,255,255,255);
				
                self.node.getChildByName('nave').getChildByName('Cinta').color = new cc.color(255,255,255,255);


			},

			Computadora: function(Componente){
				self.AccionGeneralJuego(Componente);
				if(self.bComputadora){
                    self.Capa.active = true;  
				}
			},

			Cinta: function(Componente){
				self.AccionGeneralJuego(Componente);
				self.bCinta = true;
				self.Astronauta.getComponent('jugador').setEstado('agarrar');
			},

			Panel: function(Componente){
				cc.log(self.bCinta);
				if(self.bCinta){
					cc.log('Tiene la cinta');
                    self.AccionGeneralJuego(Componente);
					self.Final = 2;
                    Componente.node.getComponent(cc.Sprite).enabled = true;
                    self.getComponent('Timer').ActualizarTiempo(200);
                    self.bComputadora = true;
				}
				else{
                    if(!self.bChispas)
                        self.bChispas = true;
                        cc.audioEngine.playEffect(self.Chispas, false);
						
						self.Astronauta.getComponent('jugador').setEstado('electrocutado');
    				}
			},

			LibroA: function(Componente){
				//Mostrar Hoja Codigo Morse
				self.AccionGeneralJuego(Componente);
			},

			LibroN: function(Componente){
				//Mostrar Hoja Extra
				self.AccionGeneralJuego(Componente);
			},

			LibroR: function(Componente){
				//Mostrar Hoja Frecuencias
				self.AccionGeneralJuego(Componente);
			},

			MusicaCreepy: function(Componente){
				//Mostrar Hoja Frecuencias
				self.AccionGeneralJuego(Componente);
				cc.audioEngine.playEffect(self.MusicaCreepy, false);
			},

            Salida: function(Componente){
                self.MostrarFinal();
            }



		};

        //Control de componentes de Colision
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        //manager.enabledDebugDraw = true; // DEBUG
    },

	AccionGeneralJuego(Componente)
	{
        var self = this;
		console.log(Componente.ActivaObjeto1);
		if (self.bBoton) {
    		if (Componente.ActivaObjeto1)
    			Componente.ActivaObjeto1.active = true;
    		if (Componente.ActivaObjeto2)
    			Componente.ActivaObjeto2.active = true;
    		if (Componente.ActivaObjeto3)
    			Componente.ActivaObjeto3.active = true;
    		
    		if (Componente.DesactivaObjeto1)
    			Componente.DesactivaObjeto1.active = false;
    		if (Componente.DesactivaObjeto2)
    			Componente.DesactivaObjeto2.active = false;
    		if (Componente.DesactivaObjeto3)
    			Componente.DesactivaObjeto3.active = false;
        }
	},

	timeout: function (){
        this.MostrarFinal();
	},

    MostrarFinal: function(){
        var self = this;
        switch(this.Final) {
        	case 1:
        		cc.director.loadScene('Creditos');
        		break;
        	case 2:
        		cc.audioEngine.playEffect(this.Asfixia, false);
                this.Astronauta.getComponent('jugador').setEstado('asfixia');
                setTimeout(function(){
                    cc.director.loadScene('Creditos');
                }, 4000);
        		break;
        	case 3:
        		 cc.director.loadScene('Creditos');
        		break;
        }
    },

    start () {
		this.node.getChildByName('nave').color = new cc.color(20,20,20,255);
		//this.Astronauta.getChildByName('tocar').color = new cc.color(20,20,20,255);
		this.Astronauta.getChildByName('agarrar').color = new cc.color(20,20,20,255);
		this.Astronauta.getChildByName('estatico').color = new cc.color(20,20,20,255);
		this.Astronauta.getChildByName('asfixia').color = new cc.color(20,20,20,255);
		this.Astronauta.getChildByName('giro').color = new cc.color(20,20,20,255);
		this.Astronauta.getChildByName('electrocutado').color = new cc.color(20,20,20,255);
        this.node.getChildByName('nave').getChildByName('Cinta').color = new cc.color(20,20,20,255);
    },

    RetoCompletado(Componente){		
		console.log(Componente);
		cc.log('Dispara accion ', Componente.node.name)
		if (this.AccionesJuego[Componente.node.name])
			this.AccionesJuego[Componente.node.name](Componente);
		else
			this.AccionGeneralJuego(Componente);
    },

    ChequearBit(Duracion){
        if(Duracion < 200){
            if(!this.codigo){
                this.codigo = '.';
                this.borrar = 1;
            }
            else { 
                this.codigo = this.codigo + '.'; 
                this.borrar = this.borrar + 1;
            }
        }
        else{
            if(Duracion > 250 && Duracion < 1000){
                if(!this.codigo){ 
                    this.codigo = '-';
                    this.borrar = 0; 

                }
                else { 
                    this.codigo = this.codigo + '-';
                    this.borrar = 0; 
                }
            }
        }
        if(this.codigo == '...---...'){
            this.Capa.getComponentInChildren(cc.Label).string = 'Escape Habilitado';
            this.Final = 3;
            this.Salida.active = true;
        }

        if(this.codigo.length >9 || this.borrar > 3)
            this.codigo = null;
        if(this.codigo){
           this.Capa.getComponentInChildren(cc.RichText).string = this.codigo; 
        }
        else{
            this.Capa.getComponentInChildren(cc.RichText).string = '';
        }
        

    },

    IniciarBit: function(){
        var self = this;
        if(self.bFrecIngresada){
            if(!self.inicio){ //Sigue llamando incluso si no se solto la barra
                self.inicio = (new Date()).getTime();
                self.RepSonido = cc.audioEngine.playEffect(self.Tono, false);
            }
        }
    },

    FinalizarBit: function(){
        var self = this;
        var fin = (new Date()).getTime();
        if(self.bFrecIngresada){
            fin = fin - self.inicio;
            self.inicio = null;
            cc.audioEngine.stopEffect(self.RepSonido);
            self.ChequearBit(fin);
        }
    },

    ChequearFrecuencia: function(){
        var self = this;
        if(self.Capa.getComponentInChildren(cc.EditBox).string = '505.0'){
           self.Capa.getComponentInChildren(cc.Label).string = 'Transmitiendo';
           self.bFrecIngresada = true;
        }
    }
    /**reiniciarSonido(){
        var self = this;
        self.bChispas = false;
    }**/
    // update (dt) {},
});
