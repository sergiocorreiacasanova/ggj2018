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

        bFrecIngresada: {
            get: function get() {
                if (typeof this._bFrecIngresada === "undefined") this._bFrecIngresada = false;

                return this._bFrecIngresada;
            },
            set: function set(value) {
                this._bFrecIngresada = value;
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

        Libro1: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bLibro1: {
            get: function get() {
                if (typeof this._bLibro1 === "undefined") this._bLibro1 = false;

                return this._bLibro1;
            },
            set: function set(value) {
                this._bLibro1 = value;
            }
        },

        Libro2: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bLibro2: {
            get: function get() {
                if (typeof this._bLibro2 === "undefined") this._bLibro2 = false;

                return this._bLibro2;
            },
            set: function set(value) {
                this._bLibro2 = value;
            }
        },

        Libro3: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bLibro3: {
            get: function get() {
                if (typeof this._bLibro3 === "undefined") this._bLibro3 = false;

                return this._bLibro3;
            },
            set: function set(value) {
                this._bLibro3 = value;
            }
        },

        Panel: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bPanel: {
            get: function get() {
                if (typeof this._bPanel === "undefined") this._bPanel = false;

                return this._bPanel;
            },
            set: function set(value) {
                this._bPanel = value;
            }
        },
        Asfixia: {
            default: null,
            url: cc.AudioClip
        },

        Chispas: {
            default: null,
            url: cc.AudioClip
        },

        MusicaCreepy: {
            default: null,
            url: cc.AudioClip
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

        Cinta: {
            default: null,
            type: cc.Node,
            serializable: true
        },

        bCinta: {
            get: function get() {
                if (typeof this._bCinta === "undefined") this._bCinta = false;

                return this._bCinta;
            },
            set: function set(value) {
                this._bCinta = value;
            }
        },

        //Parte actual del juego ("nivel actual")
        Estado: {
            default: 0
        },

        //Final que se presenta al jugador
        Final: {
            default: 1
        },

        inicio: null
    },

    bFrecIngresada: false,
    bBoton: false,
    bComputadora: false,
    bLibros: false,
    bTablero: false,
    bCinta: false,

    ColiderActivo: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var self = this;
        var Luces = this.Boton;
        Luces.active = true;
        self.bFrecIngresada = true;

        this.AccionesJuego = {
            Luz: function Luz(Componente) {

                self.bBoton = true;
                self.AccionGeneralJuego(Componente);
                self.node.getChildByName('nave').color = new cc.color(255, 255, 255, 255);

                //self.Astronauta.getChildByName('tocar').color = new cc.color(255,255,255,255);
                self.Astronauta.getChildByName('agarrar').color = new cc.color(255, 255, 255, 255);
                self.Astronauta.getChildByName('estatico').color = new cc.color(255, 255, 255, 255);
                self.Astronauta.getChildByName('asfixia').color = new cc.color(255, 255, 255, 255);
                self.Astronauta.getChildByName('giro').color = new cc.color(255, 255, 255, 255);
                self.Astronauta.getChildByName('electrocutado').color = new cc.color(255, 255, 255, 255);

                self.node.getChildByName('nave').getChildByName('Cinta').color = new cc.color(255, 255, 255, 255);
            },

            Computadora: function Computadora(Componente) {
                self.AccionGeneralJuego(Componente);
                if (self.bComputadora) {
                    //Mostrar computadora Funcionando
                } else {
                        //Mostrar computadora rota
                    }
            },

            Cinta: function Cinta(Componente) {
                self.AccionGeneralJuego(Componente);
                self.bCinta = true;
                self.Astronauta.getComponent('jugador').setEstado('agarrar');
            },

            Panel: function Panel(Componente) {
                cc.log(self.bCinta);
                if (self.bCinta) {
                    cc.log('Tiene la cinta');
                    self.AccionGeneralJuego(Componente);
                    self.Final = 2;
                    Componente.node.getComponent(cc.Sprite).enabled = true;
                    self.bComputadora = true;
                } else {
                    if (!self.bChispas) self.bChispas = true;
                    cc.audioEngine.playEffect(self.Chispas, false);

                    self.Astronauta.getComponent('jugador').setEstado('electrocutado');
                    /**self.scheduleOnce(funtion() {
                       reiniciarSonido();
                    },10);**/
                }
            },

            LibroA: function LibroA(Componente) {
                //Mostrar Hoja Codigo Morse
                self.AccionGeneralJuego(Componente);
            },

            LibroN: function LibroN(Componente) {
                //Mostrar Hoja Extra
                self.AccionGeneralJuego(Componente);
            },

            LibroR: function LibroR(Componente) {
                //Mostrar Hoja Frecuencias
                self.AccionGeneralJuego(Componente);
            },

            MusicaCreepy: function MusicaCreepy(Componente) {
                //Mostrar Hoja Frecuencias
                self.AccionGeneralJuego(Componente);
                cc.audioEngine.playEffect(self.MusicaCreepy, false);
            }

        };

        //Control de componentes de Colision
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true; // DEBUG
    },
    AccionGeneralJuego: function AccionGeneralJuego(Componente) {
        var self = this;
        console.log(Componente.ActivaObjeto1);
        if (self.bBoton) {
            if (Componente.ActivaObjeto1) Componente.ActivaObjeto1.active = true;
            if (Componente.ActivaObjeto2) Componente.ActivaObjeto2.active = true;
            if (Componente.ActivaObjeto3) Componente.ActivaObjeto3.active = true;

            if (Componente.DesactivaObjeto1) Componente.DesactivaObjeto1.active = false;
            if (Componente.DesactivaObjeto2) Componente.DesactivaObjeto2.active = false;
            if (Componente.DesactivaObjeto3) Componente.DesactivaObjeto3.active = false;
        }
    },

    timeout: function timeout() {
        var self = this;
        cc.audioEngine.playEffect(this.Asfixia, false);
        this.Astronauta.getComponent('jugador').setEstado('asfixia');
        // Esta de mas ACionJuego cambia el final this.Final = 3; // sin aire
        setTimeout(function () {
            self.MostrarFinal();
        }, 5000);
    },

    MostrarFinal: function MostrarFinal() {
        switch (this.Final) {
            case 1:
                //Explocion;
                break;
            case 2:
                //Sin Aire;
                break;
            case 3:
                //???
                break;
            case 4:
                //Final Real, Creditos
                break;
        }
    },

    start: function start() {
        this.node.getChildByName('nave').color = new cc.color(20, 20, 20, 255);
        //this.Astronauta.getChildByName('tocar').color = new cc.color(20,20,20,255);
        this.Astronauta.getChildByName('agarrar').color = new cc.color(20, 20, 20, 255);
        this.Astronauta.getChildByName('estatico').color = new cc.color(20, 20, 20, 255);
        this.Astronauta.getChildByName('asfixia').color = new cc.color(20, 20, 20, 255);
        this.Astronauta.getChildByName('giro').color = new cc.color(20, 20, 20, 255);
        this.Astronauta.getChildByName('electrocutado').color = new cc.color(20, 20, 20, 255);
        this.node.getChildByName('nave').getChildByName('Cinta').color = new cc.color(20, 20, 20, 255);
    },
    RetoCompletado: function RetoCompletado(Componente) {
        console.log(Componente);
        cc.log('Dispara accion ', Componente.node.name);
        if (this.AccionesJuego[Componente.node.name]) this.AccionesJuego[Componente.node.name](Componente);else this.AccionGeneralJuego(Componente);
    },
    ChequearBit: function ChequearBit(Duracion) {
        if (Duracion < 100) {
            //hacer punto
        } else {
            if (Duracion > 300 && Duracion < 500) {
                //hacer Raya
            }
        }
    },


    IniciarBit: function IniciarBit() {
        var self = this;
        if (self.bFrecIngresada) {
            if (!self.inicio) {
                //Sigue llamando inclusi si no se solto la barra
                self.inicio = new Date().getTime();
            }
        }
    },

    FinalizarBit: function FinalizarBit() {
        var self = this;
        var fin = new Date().getTime();
        if (self.bFrecIngresada) {
            fin = fin - self.inicio;
            self.inicio = null;
            self.ChequearBit(fin);
        }
    }
    /**reiniciarSonido(){
        var self = this;
        self.bChispas = false;
    }**/
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
        