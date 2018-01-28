(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/GameFlow.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5978amQFQdCk5ZiZrqULzQw', 'GameFlow', __filename);
// GameFlow.js

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

        Capa: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        /*bCapa:{
            get () {
                if(this._bEscotilla)
                    return this._bEscotilla;
                else
                    return false;
            },
              set (value) {
                    this._bCapa = value;
            },
        },*/

        Boton: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        /*bBoton:{
            get () {
                if(this._bEscotilla)
                    return this._bEscotilla;
                else
                    return false;
            },
              set (value) {
                if(!value)
                    this._bBoton = value;
            },
        },*/

        Libros: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        /*bLibros:{
            get () {
                if(this._bEscotilla)
                    return this._bEscotilla;
                else
                    return false;
            },
              set (value) {
                if(!value)
                    this._bLibros = value;
            },
        },*/

        Tablero: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        /*bTablero:{
            get () {
                if(this._bEscotilla)
                    return this._bEscotilla;
                else
                    return false;
            },
              set (value) {
                if(!value)
                    this._bTablero = value;
            },
        },*/

        Computadora: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        /*bComputadora:{
            get () {
                if(this._bEscotilla)
                    return this._bEscotilla;
                else
                    return false;
            },
              set (value) {
                if(!value)
                    this._bComputadora = value;
            },
        },*/

        Escotilla: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        /*bEscotilla:{
            get () {
                if(this._bEscotilla)
                    return this._bEscotilla;
                else
                    return false;
            },
              set (value) {
                    this._bEscotilla = value;
            },
        },*/

        //Parte actual del juego ("nivel actual")
        Estado: {
            default: 1
        },

        //Final que se presenta al jugador
        Final: {
            default: 1
        }

    },

    /*bCapa: false,
      bBoton: false,
      bComputadora: false,
      bLibros: false,
      bTablero: false,
      bEscotilla: false,*/

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        /*this.bBoton = true;
          this.bComputadora = true;*/

        this.CambiarEstado();
    },


    CambiarEstado: function CambiarEstado() {
        this.Estado = this.Estado + 1;
        switch (this.Estado) {
            case 1:
                {
                    var Luces = this.Boton;
                    var Compu = this.Computadora;
                    Luces.active = true;
                    Compu.active = true;
                    break;
                }

            case 2:
                {
                    var Luces = this.Boton;
                    var Radio = this.Tablero;
                    Radio.active = true;
                    Luces.active = false;
                    break;
                }

            case 3:
                {
                    var Libro = this.Libros;
                    Libro.active = true;
                    break;
                }

            case 4:
                {
                    var Libro = this.Libros;
                    Libro.active = false;
                    break;
                }

            case 5:
                {
                    var Radio = this.Tablero;
                    Radio.active = false;
                    break;
                }

            default:
                {
                    this.Estado = 0;
                }
        }
    },

    start: function start() {},
    Colisiono: function Colisiono(Componente) {
        //cc.log('LA REPUTICIMAMADRE QUELO REMIL PARIO AL QUE INVENTO ESTE LENGUAJE');
        var local = Componente.getComponent('ScripdeColision').ItemInteractivo;
        if (local) {
            cc.log('AHHHHHHHHHHHHHHHHHHHHHHHHHH!!');
        }
        switch (this.Estado) {
            case 1:
                {
                    var Luces = this.Boton;
                    var Compu = this.Computadora;
                    Luces.active = true;
                    Compu.active = true;
                    break;
                }

            case 2:
                {
                    var Luces = this.Boton;
                    var Radio = this.Tablero;
                    Radio.active = true;
                    Luces.active = false;
                    break;
                }

            case 3:
                {
                    var Libro = this.Libros;
                    Libro.active = true;
                    break;
                }

            case 4:
                {
                    var Libro = this.Libros;
                    Libro.active = false;
                    break;
                }

            case 5:
                {
                    var Radio = this.Tablero;
                    Radio.active = false;
                    break;
                }

            default:
                {
                    this.Estado = 0;
                }
        }
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
        