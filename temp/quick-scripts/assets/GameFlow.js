(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/GameFlow.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5978amQFQdCk5ZiZrqULzQw', 'GameFlow', __filename);
// GameFlow.js

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

        Astronauta: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        Capa: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bCapa: {
            get: function get() {
                if (typeof this._bCapa === "undefined") this._bCapa = false;

                return this._bCapa;
            },
            set: function set(value) {
                this._bCapa = value;
            }
        },

        Boton: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bBoton: {
            get: function get() {
                if (typeof this._bBoton === "undefined") this._bBoton = false;

                return this._bBoton;
            },
            set: function set(value) {
                this._bBoton = value;
            }
        },

        Libros: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bLibros: {
            get: function get() {
                if (typeof this._bLibros === "undefined") this._bLibros = false;

                return this._bLibros;
            },
            set: function set(value) {
                this._bLibros = value;
            }
        },

        Tablero: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bTablero: {
            get: function get() {
                if (typeof this._bTablero === "undefined") this._bTablero = false;

                return this._bTablero;
            },
            set: function set(value) {
                this._bTablero = value;
            }
        },

        Computadora: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bComputadora: {
            get: function get() {
                if (typeof this._bComputadora === "undefined") this._bComputadora = false;

                return this._bComputadora;
            },
            set: function set(value) {
                this._bComputadora = value;
            }
        },

        Escotilla: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bEscotilla: {
            get: function get() {
                if (typeof this._bEscotilla === "undefined") this._bEscotilla = false;

                return this._bEscotilla;
            },
            set: function set(value) {
                this._bEscotilla = value;
            }
        },

        //Parte actual del juego ("nivel actual")
        Estado: {
            default: 0
        },

        //Final que se presenta al jugador
        Final: {
            default: 1
        }

    },

    bCapa: false,
    bBoton: false,
    bComputadora: false,
    bLibros: false,
    bTablero: false,
    bEscotilla: false,

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var self = this;
        var Luces = this.Boton;
        Luces.active = true;

        this.AccionesJuego = {
            Luz: function Luz(Componente) {
                self.AccionGeneralJuego(Componente);
                self.node.getChildByName('nave').color = new cc.color(255, 255, 255, 255);
                self.Astronauta.getChildByName('animado').color = new cc.color(255, 255, 255, 255);
            }
        };
    },
    AccionGeneralJuego: function AccionGeneralJuego(Componente) {
        console.log(Componente.ActivaObjeto1);

        if (Componente.ActivaObjeto1) Componente.ActivaObjeto1.active = true;
        if (Componente.ActivaObjeto2) Componente.ActivaObjeto2.active = true;
        if (Componente.ActivaObjeto3) Componente.ActivaObjeto3.active = true;

        if (Componente.DesactivaObjeto1) Componente.DesactivaObjeto1.active = false;
        if (Componente.DesactivaObjeto2) Componente.DesactivaObjeto2.active = false;
        if (Componente.DesactivaObjeto3) Componente.DesactivaObjeto3.active = false;
    },


    CambiarEstado: function CambiarEstado() {
        this.Estado = this.Estado + 1;
    },

    start: function start() {
        this.node.getChildByName('nave').color = new cc.color(46, 46, 46, 255);
        this.Astronauta.getChildByName('animado').color = new cc.color(46, 46, 46, 255);
    },
    RetoCompletado: function RetoCompletado(Componente) {
        //cc.log('LA REPUTICIMAMADRE QUELO REMIL PARIO AL QUE INVENTO ESTE LENGUAJE');

        console.log(Componente);
        cc.log('Dispara accion ', Componente.node.name);
        if (this.AccionesJuego[Componente.node.name]) this.AccionesJuego[Componente.node.name](Componente);else this.AccionGeneralJuego(Componente);

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
        //# sourceMappingURL=GameFlow.js.map
        