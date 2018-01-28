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

            bCapa:{
                get () {
                    if(typeof this._bCapa === "undefined")
						this._bCapa = false;
					
                    return this._bCapa;                    
                },

                set (value) {
                        this._bCapa = value;
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

            Tablero:{
             default: null, 
             type: cc.Node, 
             serializable: true,   
            },

            bTablero:{
                get () {
                    if(typeof this._bTablero === "undefined")
						this._bTablero = false;
					
                    return this._bTablero;                    
                },

                set (value) {
                        this._bTablero = value;
                },
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



        //Parte actual del juego ("nivel actual")
        Estado:{
            default: 0,
        },

        //Final que se presenta al jugador
        Final:{
            default: 1,
        },

    },

    bCapa: false,
    bBoton: false,
    bComputadora: false,
    bLibros: false,
    bTablero: false,
    bCinta: false,
   
	ColiderActivo: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad(){
		var self = this;
        var Luces = this.Boton;
        Luces.active = true;
		
		this.AccionesJuego = {
			Luz: function(Componente){
				self.AccionGeneralJuego(Componente);
				self.node.getChildByName('nave').color = new cc.color(255,255,255,255);
				self.Astronauta.getChildByName('animado').color = new cc.color(255,255,255,255);
			}
		};
		
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true; // DEBUG
    },

	AccionGeneralJuego(Componente)
	{
		console.log(Componente.ActivaObjeto1);
		
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
	},
	
    CambiarEstado: function(){
        this.Estado = this.Estado + 1;
    },

    start () {
		this.node.getChildByName('nave').color = new cc.color(20,20,20,255);
		this.Astronauta.getChildByName('animado').color = new cc.color(20,20,20,255);
    },

    RetoCompletado(Componente){
        //cc.log('LA REPUTICIMAMADRE QUELO REMIL PARIO AL QUE INVENTO ESTE LENGUAJE');
		
		console.log(Componente);
		cc.log('Dispara accion ', Componente.node.name)
		if (this.AccionesJuego[Componente.node.name])
			this.AccionesJuego[Componente.node.name](Componente);
		else
			this.AccionGeneralJuego(Componente);
		
		/*
        switch(this.Estado){
            case 0:{
                var Compu = this.Computadora
                Compu.active = true;
                this.CambiarEstado();
                break;
            }
            
            case 1:{
                var Luces = this.Boton;
                var Radio = this.Tablero;
                Radio.active = true;
                Luces.active = false;
                break; 
            }

            case 2:{
                var Libro = this.Libros;
                Libro.active = true;
                break;
            }

            case 3:{
                var Libro = this.Libros;
                Libro.active = false;
                break;
            }

            case 4:{
                var Radio = this.Tablero;
                Radio.active = false;
                break;
            }

            default:{
                this.Estado = 0;
            }
        }*/
    }    

    // update (dt) {},
});
