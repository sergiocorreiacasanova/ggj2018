require=function i(o,a,e){function c(t,r){if(!a[t]){if(!o[t]){var d="function"==typeof require&&require;if(!r&&d)return d(t,!0);if(n)return n(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var u=a[t]={exports:{}};o[t][0].call(u.exports,function(i){var a=o[t][1][i];return c(a||i)},u,u.exports,i,o,a,e)}return a[t].exports}for(var n="function"==typeof require&&require,t=0;t<e.length;t++)c(e[t]);return c}({fondo:[function(i,o,a){"use strict";cc._RF.push(o,"803bfmJbWdFj4A/USY8rPwC","fondo"),cc.Class({extends:cc.Component,properties:{velocidadGiroMaxima:{default:1,serializable:!0},aceleracionGiro:{default:1,serializable:!0}},accionaIzquierda:!1,accionaDerecha:!1,velocidadGiro:0,anguloActual:0,start:function(){},onLoad:function(){var i=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(o,a){switch(o){case cc.KEY.a:i.accionaIzquierda=!0,i.accionaDerecha=!1;break;case cc.KEY.d:i.accionaIzquierda=!1,i.accionaDerecha=!0}},onKeyReleased:function(o,a){switch(o){case cc.KEY.a:i.accionaIzquierda=!1;break;case cc.KEY.d:i.accionaDerecha=!1}}},i.node)},update:function(i){var o=this.aceleracionGiro*i;isNaN(this.velocidadGiro)&&(this.velocidadGiro=0),isNaN(this.anguloActual)&&(this.anguloActual=0),this.accionaIzquierda?this.velocidadGiro<this.velocidadGiroMaxima?this.velocidadGiro+=o:this.velocidadGiro=this.velocidadGiroMaxima:this.accionaDerecha?this.velocidadGiro>-this.velocidadGiroMaxima?this.velocidadGiro-=o:this.velocidadGiro=-this.velocidadGiroMaxima:this.velocidadGiro>0?this.velocidadGiro-=o/2:this.velocidadGiro+=o/2,this.velocidadGiro>=4*-o&&this.velocidadGiro<4*o&&!this.accionaIzquierda&&!this.accionaDerecha?this.velocidadGiro=0:this.anguloActual=(this.anguloActual+this.velocidadGiro)%360,this.node.rotation=this.anguloActual}}),cc._RF.pop()},{}],jugador:[function(i,o,a){"use strict";cc._RF.push(o,"02941jM40RFl57r1Ags29M9","jugador"),cc.Class({extends:cc.Component,properties:{pantalla:{default:null,type:cc.Node,serializable:!0}},onLoad:function(){var i=this;cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:!1,onTouchBegan:function(o,a){cc.log("onTouchBegan");var e=o.getLocation();return i.node.position=e,!1},onTouchMoved:function(i,o){cc.log("onTouchMoved")},onTouchEnded:function(i,o){cc.log("onTouchEnded")}},i.pantalla)},start:function(){}}),cc._RF.pop()},{}]},{},["fondo","jugador"]);