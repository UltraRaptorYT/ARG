var gdjs;(function(e){class p{constructor(t,i){this._tileMap=null;this._object=t,PIXI.tilemap.settings.use32bitIndex=!0,this._pixiObject=new PIXI.tilemap.CompositeTilemap,this._pixiObject.tileAnim=[0,0],i.getLayer("").getRenderer().addRendererObject(this._pixiObject,t.getZOrder()),this.updateAngle(),this.updateOpacity(),this.updatePosition()}getRendererObject(){return this._pixiObject}incrementAnimationFrameX(t){this._pixiObject.tileAnim[0]+=1}updatePixiTileMap(t,i){this._tileMap=t,TileMapHelper.PixiTileMapHelper.updatePixiTileMap(this._pixiObject,t,i,this._object._displayMode,this._object._layerIndex)}updatePosition(){this._pixiObject.pivot.x=this.getTileMapWidth()/2,this._pixiObject.pivot.y=this.getTileMapHeight()/2,this._pixiObject.position.x=this._object.x+this.getWidth()/2,this._pixiObject.position.y=this._object.y+this.getHeight()/2}updateAngle(){this._pixiObject.rotation=e.toRad(this._object.angle)}updateOpacity(){this._pixiObject.alpha=this._object._opacity/255}getTileMapWidth(){const t=this._tileMap;return t?t.getWidth():20}getTileMapHeight(){const t=this._tileMap;return t?t.getHeight():20}setWidth(t){this._pixiObject.scale.x=t/this.getTileMapWidth(),this._pixiObject.position.x=this._object.x+t/2}setHeight(t){this._pixiObject.scale.y=t/this.getTileMapHeight(),this._pixiObject.position.y=this._object.y+t/2}setScaleX(t){this._pixiObject.scale.x=t;const i=t*this.getTileMapWidth();this._pixiObject.position.x=this._object.x+i/2}setScaleY(t){this._pixiObject.scale.y=t;const i=t*this.getTileMapHeight();this._pixiObject.position.y=this._object.y+i/2}getWidth(){return this.getTileMapWidth()*this._pixiObject.scale.x}getHeight(){return this.getTileMapHeight()*this._pixiObject.scale.y}getScaleX(){return this._pixiObject.scale.x}getScaleY(){return this._pixiObject.scale.y}}e.TileMapRuntimeObjectPixiRenderer=p,e.TileMapRuntimeObjectRenderer=e.TileMapRuntimeObjectPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=tilemapruntimeobject-pixi-renderer.js.map