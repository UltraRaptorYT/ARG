/*!
 * @pixi/tilemap - v3.2.2
 * Compiled Fri, 22 Oct 2021 12:27:49 UTC
 *
 * @pixi/tilemap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2020, Ivan Popelyshev, All Rights Reserved
 */this.PIXI=this.PIXI||{},this.PIXI.tilemap=this.PIXI.tilemap||{},function(_,P){typeof exports=="object"&&typeof module!="undefined"?P(exports,require("@pixi/display"),require("@pixi/core"),require("@pixi/constants"),require("@pixi/math"),require("@pixi/utils")):typeof define=="function"&&define.amd?define(["exports","@pixi/display","@pixi/core","@pixi/constants","@pixi/math","@pixi/utils"],P):(_=typeof globalThis!="undefined"?globalThis:_||self,P(_._pixi_tilemap={},_.PIXI,_.PIXI,_.PIXI,_.PIXI,_.PIXI.utils))}(this,function(_,P,X,V,b,nt){"use strict";class B{__init(){this.tileAnim=[0,0]}__init2(){this.dontUseTransform=!1}constructor(t){B.prototype.__init.call(this),B.prototype.__init2.call(this),this.renderer=t,this.tileAnim=[0,0]}static getInstance(t){return t.plugins.tilemap||(t.plugins.tilemap=new B(t)),t.plugins.tilemap}}const E={TEXTURES_PER_TILEMAP:16,TEXTILE_DIMEN:1024,TEXTILE_UNITS:1,TEXTILE_SCALE_MODE:V.SCALE_MODES.LINEAR,use32bitIndex:!1,DO_CLEAR:!0,get maxTextures(){return this.MAX_TEXTURES},set maxTextures(h){this.MAX_TEXTURES=h},get boundSize(){return this.TEXTURE_TILE_DIMEN},set boundSize(h){this.TILE_TEXTURE_DIMEN=h},get boundCountPerBuffer(){return this.TEXTILE_UNITS},set boundCountPerBuffer(h){this.TEXTILE_UNITS=h}},rt=E;function W(h,t){return h??t()}var c;(function(h){const t=0;h[h.U=t]="U";const i=t+1;h[h.V=i]="V";const e=i+1;h[h.X=e]="X";const s=e+1;h[h.Y=s]="Y";const o=s+1;h[h.TILE_WIDTH=o]="TILE_WIDTH";const u=o+1;h[h.TILE_HEIGHT=u]="TILE_HEIGHT";const l=u+1;h[h.ROTATE=l]="ROTATE";const a=l+1;h[h.ANIM_X=a]="ANIM_X";const p=a+1;h[h.ANIM_Y=p]="ANIM_Y";const d=p+1;h[h.TEXTURE_INDEX=d]="TEXTURE_INDEX";const I=d+1;h[h.ANIM_COUNT_X=I]="ANIM_COUNT_X";const n=I+1;h[h.ANIM_COUNT_Y=n]="ANIM_COUNT_Y";const r=n+1;h[h.ANIM_DIVISOR=r]="ANIM_DIVISOR";const M=r+1;h[h.ALPHA=M]="ALPHA"})(c||(c={}));const L=Object.keys(c).length/2;class m extends P.Container{__init(){this.shadowColor=new Float32Array([0,0,0,.5])}__init2(){this._globalMat=null}__init3(){this.tileAnim=null}__init4(){this.modificationMarker=0}__init5(){this.offsetX=0}__init6(){this.offsetY=0}__init7(){this.compositeParent=!1}__init8(){this.tilemapBounds=new P.Bounds}__init9(){this.hasAnimatedTile=!1}__init10(){this.pointsBuf=[]}constructor(t){super();m.prototype.__init.call(this),m.prototype.__init2.call(this),m.prototype.__init3.call(this),m.prototype.__init4.call(this),m.prototype.__init5.call(this),m.prototype.__init6.call(this),m.prototype.__init7.call(this),m.prototype.__init8.call(this),m.prototype.__init9.call(this),m.prototype.__init10.call(this),m.prototype.__init11.call(this),m.prototype.__init12.call(this),m.prototype.__init13.call(this),m.prototype.__init14.call(this),m.prototype.__init15.call(this),m.prototype.__init16.call(this),this.setTileset(t)}getTileset(){return this.tileset}setTileset(t=[]){Array.isArray(t)||(t=[t]);for(let i=0;i<t.length;i++)t[i].baseTexture&&(t[i]=t[i].baseTexture);return this.tileset=t,this}clear(){return this.pointsBuf.length=0,this.modificationMarker=0,this.tilemapBounds.clear(),this.hasAnimatedTile=!1,this}tile(t,i,e,s={}){let o,u=-1;if(typeof t=="number")u=t,o=this.tileset[u];else{let x;typeof t=="string"?x=X.Texture.from(t):x=t;const F=this.tileset;for(let g=0;g<F.length;g++)if(F[g]===x.castToBaseTexture()){u=g;break}"baseTexture"in x&&(s.u=W(s.u,()=>x.frame.x),s.v=W(s.v,()=>x.frame.y),s.tileWidth=W(s.tileWidth,()=>x.orig.width),s.tileHeight=W(s.tileHeight,()=>x.orig.height)),o=x.castToBaseTexture()}if(!o||u<0)return console.error("The tile texture was not found in the tilemap tileset."),this;const{u:l=0,v:a=0,tileWidth:p=o.realWidth,tileHeight:d=o.realHeight,animX:I=0,animY:n=0,rotate:r=0,animCountX:M=1024,animCountY:R=1024,animDivisor:k=1,alpha:T=1}=s,f=this.pointsBuf;return this.hasAnimatedTile=this.hasAnimatedTile||I>0||n>0,f.push(l),f.push(a),f.push(i),f.push(e),f.push(p),f.push(d),f.push(r),f.push(I|0),f.push(n|0),f.push(u),f.push(M),f.push(R),f.push(k),f.push(T),this.tilemapBounds.addFramePad(i,e,i+p,e+d,0,0),this}tileRotate(t){const i=this.pointsBuf;i[i.length-(L-c.TEXTURE_INDEX)]=t}tileAnimX(t,i){const e=this.pointsBuf;e[e.length-(L-c.ANIM_X)]=t,e[e.length-(L-c.ANIM_COUNT_X)]=i}tileAnimY(t,i){const e=this.pointsBuf;e[e.length-(L-c.ANIM_Y)]=t,e[e.length-(L-c.ANIM_COUNT_Y)]=i}tileAnimDivisor(t){const i=this.pointsBuf;i[i.length-(L-c.ANIM_DIVISOR)]=t}tileAlpha(t){const i=this.pointsBuf;i[i.length-(L-c.ALPHA)]=t}__init11(){this.renderCanvas=t=>{const i=B.getInstance(t);if(i&&!i.dontUseTransform){const e=this.worldTransform;t.context.setTransform(e.a,e.b,e.c,e.d,e.tx*t.resolution,e.ty*t.resolution)}this.renderCanvasCore(t)}}renderCanvasCore(t){if(this.tileset.length===0)return;const i=this.pointsBuf,e=this.tileAnim||t.plugins.tilemap&&t.plugins.tilemap.tileAnim;t.context.fillStyle="#000000";for(let s=0,o=i.length;s<o;s+=L){let u=i[s+c.U],l=i[s+c.V];const a=i[s+c.X],p=i[s+c.Y],d=i[s+c.TILE_WIDTH],I=i[s+c.TILE_HEIGHT];u+=i[s+c.ANIM_X]*e[0],l+=i[s+c.ANIM_Y]*e[1];const n=i[s+c.TEXTURE_INDEX],r=i[s+c.ALPHA];n>=0&&this.tileset[n]?(t.context.globalAlpha=r,t.context.drawImage(this.tileset[n].getDrawableSource(),u,l,d,I,a,p,d,I)):(t.context.globalAlpha=.5,t.context.fillRect(a,p,d,I)),t.context.globalAlpha=1}}__init12(){this.vbId=0}__init13(){this.vb=null}__init14(){this.vbBuffer=null}__init15(){this.vbArray=null}__init16(){this.vbInts=null}destroyVb(){this.vb&&(this.vb.destroy(),this.vb=null)}render(t){const i=t.plugins.tilemap,e=i.getShader();t.batch.setObjectRenderer(i),this._globalMat=e.uniforms.projTransMatrix,t.globalUniforms.uniforms.projectionMatrix.copyTo(this._globalMat).append(this.worldTransform),e.uniforms.shadowColor=this.shadowColor,e.uniforms.animationFrame=this.tileAnim||i.tileAnim,this.renderWebGLCore(t,i)}renderWebGLCore(t,i){const e=this.pointsBuf;if(e.length===0)return;const s=e.length/L,o=i.getShader(),u=this.tileset;if(u.length===0)return;i.bindTileTextures(t,u),t.shader.bind(o,!1);let l=this.vb;l||(l=i.createVb(),this.vb=l,this.vbId=l.id,this.vbBuffer=null,this.modificationMarker=0),i.checkIndexBuffer(s,l);const a=E.TEXTILE_UNITS,p=l.getBuffer("aVertexPosition"),d=s*l.vertPerQuad;if(d!==0){if(this.modificationMarker!==d){this.modificationMarker=d;const I=l.stride*d;if(!this.vbBuffer||this.vbBuffer.byteLength<I){let T=l.stride;for(;T<I;)T*=2;this.vbBuffer=new ArrayBuffer(T),this.vbArray=new Float32Array(this.vbBuffer),this.vbInts=new Uint32Array(this.vbBuffer),p.update(this.vbBuffer)}const n=this.vbArray;let r=0,M=0,R=this.offsetX,k=this.offsetY;for(let T=0;T<e.length;T+=L){const f=.5;if(this.compositeParent){const w=e[T+c.TEXTURE_INDEX];a>1?(M=w>>2,R=this.offsetX*(w&1),k=this.offsetY*(w>>1&1)):(M=w,R=0,k=0)}const x=e[T+c.X],F=e[T+c.Y],g=e[T+c.TILE_WIDTH],N=e[T+c.TILE_HEIGHT],v=e[T+c.U]+R,y=e[T+c.V]+k;let A=e[T+c.ROTATE];const ft=e[T+c.ANIM_X],dt=e[T+c.ANIM_Y],pt=e[T+c.ANIM_COUNT_X]||1024,_t=e[T+c.ANIM_COUNT_Y]||1024,O=ft+pt*2048,j=dt+_t*2048,G=e[T+c.ANIM_DIVISOR],z=e[T+c.ALPHA];let $,K,Z,J,tt,it,et,st;if(A===0)$=v,K=y,Z=v+g,J=y,tt=v+g,it=y+N,et=v,st=y+N;else{let w=g/2,U=N/2;A%4!=0&&(w=N/2,U=g/2);const q=v+w,Q=y+U;A=b.groupD8.add(A,b.groupD8.NW),$=q+w*b.groupD8.uX(A),K=Q+U*b.groupD8.uY(A),A=b.groupD8.add(A,2),Z=q+w*b.groupD8.uX(A),J=Q+U*b.groupD8.uY(A),A=b.groupD8.add(A,2),tt=q+w*b.groupD8.uX(A),it=Q+U*b.groupD8.uY(A),A=b.groupD8.add(A,2),et=q+w*b.groupD8.uX(A),st=Q+U*b.groupD8.uY(A)}n[r++]=x,n[r++]=F,n[r++]=$,n[r++]=K,n[r++]=v+f,n[r++]=y+f,n[r++]=v+g-f,n[r++]=y+N-f,n[r++]=O,n[r++]=j,n[r++]=M,n[r++]=G,n[r++]=z,n[r++]=x+g,n[r++]=F,n[r++]=Z,n[r++]=J,n[r++]=v+f,n[r++]=y+f,n[r++]=v+g-f,n[r++]=y+N-f,n[r++]=O,n[r++]=j,n[r++]=M,n[r++]=G,n[r++]=z,n[r++]=x+g,n[r++]=F+N,n[r++]=tt,n[r++]=it,n[r++]=v+f,n[r++]=y+f,n[r++]=v+g-f,n[r++]=y+N-f,n[r++]=O,n[r++]=j,n[r++]=M,n[r++]=G,n[r++]=z,n[r++]=x,n[r++]=F+N,n[r++]=et,n[r++]=st,n[r++]=v+f,n[r++]=y+f,n[r++]=v+g-f,n[r++]=y+N-f,n[r++]=O,n[r++]=j,n[r++]=M,n[r++]=G,n[r++]=z}p.update(n)}t.geometry.bind(l,o),t.geometry.draw(V.DRAW_MODES.TRIANGLES,s*6,0)}}isModified(t){return!!(this.modificationMarker!==this.pointsBuf.length||t&&this.hasAnimatedTile)}clearModify(){this.modificationMarker=this.pointsBuf.length}_calculateBounds(){const{minX:t,minY:i,maxX:e,maxY:s}=this.tilemapBounds;this._bounds.addFrame(this.transform,t,i,e,s)}getLocalBounds(t){return this.children.length===0?this.tilemapBounds.getRectangle(t):super.getLocalBounds.call(this,t)}destroy(t){super.destroy(t),this.destroyVb()}addFrame(t,i,e,s,o){return this.tile(t,i,e,{animX:s,animY:o}),!0}addRect(t,i,e,s,o,u,l,a=0,p=0,d=0,I=1024,n=1024,r=1,M=1){return this.tile(t,s,o,{u:i,v:e,tileWidth:u,tileHeight:l,animX:a,animY:p,rotate:d,animCountX:I,animCountY:n,animDivisor:r,alpha:M})}}class D extends P.Container{__init(){this.tileAnim=null}__init2(){this.lastModifiedTilemap=null}__init3(){this.modificationMarker=0}__init4(){this.shadowColor=new Float32Array([0,0,0,.5])}__init5(){this._globalMat=null}constructor(t){super();D.prototype.__init.call(this),D.prototype.__init2.call(this),D.prototype.__init3.call(this),D.prototype.__init4.call(this),D.prototype.__init5.call(this),D.prototype.__init6.call(this),this.tileset(t),this.texturesPerTilemap=E.TEXTURES_PER_TILEMAP}tileset(t){t||(t=[]);const i=this.texturesPerTilemap,e=this.children.length,s=Math.ceil(t.length/i);for(let o=0;o<Math.min(e,s);o++)this.children[o].setTileset(t.slice(o*i,(o+1)*i));for(let o=e;o<s;o++){const u=new m(t.slice(o*i,(o+1)*i));u.compositeParent=!0,u.offsetX=E.TEXTILE_DIMEN,u.offsetY=E.TEXTILE_DIMEN,this.addChild(u)}return this}clear(){for(let t=0;t<this.children.length;t++)this.children[t].clear();return this.modificationMarker=0,this}tileRotate(t){return this.lastModifiedTilemap&&this.lastModifiedTilemap.tileRotate(t),this}tileAnimX(t,i){return this.lastModifiedTilemap&&this.lastModifiedTilemap.tileAnimX(t,i),this}tileAnimY(t,i){return this.lastModifiedTilemap&&this.lastModifiedTilemap.tileAnimY(t,i),this}tileAnimDivisor(t){return this.lastModifiedTilemap&&this.lastModifiedTilemap.tileAnimDivisor(t),this}tile(t,i,e,s={}){let o=null;const u=this.children;if(this.lastModifiedTilemap=null,typeof t=="number"){const l=t/this.texturesPerTilemap>>0;let a=0;if(o=u[l],o)a=t%this.texturesPerTilemap;else{if(o=u[0],!o)return this;a=0}o.tile(a,i,e,s)}else{typeof t=="string"&&(t=X.Texture.from(t));for(let l=0;l<u.length;l++){const a=u[l],p=a.getTileset();for(let d=0;d<p.length;d++)if(p[d]===t.baseTexture){o=a;break}if(o)break}if(!o){for(let l=u.length-1;l>=0;l--){const a=u[l];if(a.getTileset().length<this.texturesPerTilemap){o=a,a.getTileset().push(t.baseTexture);break}}o||(o=new m(t.baseTexture),o.compositeParent=!0,o.offsetX=E.TEXTILE_DIMEN,o.offsetY=E.TEXTILE_DIMEN,this.addChild(o))}o.tile(t,i,e,s)}return this.lastModifiedTilemap=o,this}renderCanvas(t){if(!this.visible||this.worldAlpha<=0||!this.renderable)return;const i=B.getInstance(t);if(i&&!i.dontUseTransform){const s=this.worldTransform;t.context.setTransform(s.a,s.b,s.c,s.d,s.tx*t.resolution,s.ty*t.resolution)}const e=this.children;for(let s=0;s<e.length;s++){const o=e[s];o.tileAnim=this.tileAnim,o.renderCanvasCore(t)}}render(t){if(!this.visible||this.worldAlpha<=0||!this.renderable)return;const i=t.plugins.tilemap,e=i.getShader();t.batch.setObjectRenderer(i),this._globalMat=e.uniforms.projTransMatrix,t.globalUniforms.uniforms.projectionMatrix.copyTo(this._globalMat).append(this.worldTransform),e.uniforms.shadowColor=this.shadowColor,e.uniforms.animationFrame=this.tileAnim||i.tileAnim,t.shader.bind(e,!1);const s=this.children;for(let o=0;o<s.length;o++)s[o].renderWebGLCore(t,i)}isModified(t){const i=this.children;if(this.modificationMarker!==i.length)return!0;for(let e=0;e<i.length;e++)if(i[e].isModified(t))return!0;return!1}clearModify(){const t=this.children;this.modificationMarker=t.length;for(let i=0;i<t.length;i++)t[i].clearModify()}addFrame(t,i,e,s,o,u,l,a,p){return this.tile(t,i,e,{animX:s,animY:o,animCountX:u,animCountY:l,animDivisor:a,alpha:p})}addRect(t,i,e,s,o,u,l,a,p,d,I,n){const r=t/this.texturesPerTilemap>>0,M=t%this.texturesPerTilemap;return this.children[r]&&this.children[r].getTileset()?(this.lastModifiedTilemap=this.children[r],this.lastModifiedTilemap.addRect(M,i,e,s,o,u,l,a,p,d,I,n)):this.lastModifiedTilemap=null,this}__init6(){this.setBitmaps=this.tileset}get texPerChild(){return this.texturesPerTilemap}}class Y extends X.Resource{__init(){this.baseTexture=null}__init2(){this._clearBuffer=null}constructor(t=E){super(t.TEXTILE_DIMEN*2,t.TEXTILE_DIMEN*Math.ceil(t.TEXTILE_UNITS/2));Y.prototype.__init.call(this),Y.prototype.__init2.call(this);const i=this.tiles=new Array(t.TEXTILE_UNITS);this.doClear=!!t.DO_CLEAR,this.tileDimen=t.TEXTILE_DIMEN;for(let e=0;e<t.TEXTILE_UNITS;e++)i[e]={dirtyId:0,x:t.TEXTILE_DIMEN*(e&1),y:t.TEXTILE_DIMEN*(e>>1),baseTexture:X.Texture.WHITE.baseTexture}}tile(t,i){const e=this.tiles[t];e.baseTexture!==i&&(e.baseTexture=i,this.baseTexture.update(),this.tiles[t].dirtyId=this.baseTexture.dirtyId)}bind(t){if(this.baseTexture)throw new Error("Only one baseTexture is allowed for this resource!");this.baseTexture=t,super.bind(t)}upload(t,i,e){const{gl:s}=t,{width:o,height:u}=this;s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===void 0||i.alphaMode===V.ALPHA_MODES.UNPACK),e.dirtyId<0&&(e.width=o,e.height=u,s.texImage2D(i.target,0,i.format,o,u,0,i.format,i.type,null));const l=this.doClear,a=this.tiles;l&&!this._clearBuffer&&(this._clearBuffer=new Uint8Array(E.TEXTILE_DIMEN*E.TEXTILE_DIMEN*4));for(let p=0;p<a.length;p++){const d=a[p],I=d.baseTexture;if(e.dirtyId>=this.tiles[p].dirtyId)continue;const n=I.resource;!I.valid||!n||!n.source||(l&&(I.width<this.tileDimen||I.height<this.tileDimen)&&s.texSubImage2D(i.target,0,d.x,d.y,this.tileDimen,this.tileDimen,i.format,i.type,this._clearBuffer),s.texSubImage2D(i.target,0,d.x,d.y,i.format,i.type,n.source))}return!0}}function at(h){let t="";t+=`
`,t+=`
`,t+="if(vTextureId <= -1.0) {",t+=`
	color = shadowColor;`,t+=`
}`;for(let i=0;i<h;i++)t+=`
else `,i<h-1&&(t+=`if(textureId == ${i}.0)`),t+=`
{`,t+=`
	color = texture2D(uSamplers[${i}], textureCoord * uSamplerSize[${i}]);`,t+=`
}`;return t+=`
`,t+=`
`,t}function ot(h,t){const i=[];for(let s=0;s<t;s++)i[s]=s;h.uniforms.uSamplers=i;const e=[];for(let s=0;s<t;s++)e.push(1/2048),e.push(1/2048);h.uniforms.uSamplerSize=e}function lt(h,t){return t.replace(/%count%/gi,`${h}`).replace(/%forloop%/gi,at(h))}const ht=`#version 100
precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aFrame;
attribute vec2 aAnim;
attribute float aAnimDivisor;
attribute float aTextureId;
attribute float aAlpha;

uniform mat3 projTransMatrix;
uniform vec2 animationFrame;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vFrame;
varying float vAlpha;

void main(void)
{
   gl_Position = vec4((projTransMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vec2 animCount = floor((aAnim + 0.5) / 2048.0);
   vec2 animFrameOffset = aAnim - animCount * 2048.0;
   vec2 currentFrame = floor(animationFrame / aAnimDivisor);
   vec2 animOffset = animFrameOffset * floor(mod(currentFrame + 0.5, animCount));

   vTextureCoord = aTextureCoord + animOffset;
   vFrame = aFrame + vec4(animOffset, animOffset);
   vTextureId = aTextureId;
   vAlpha = aAlpha;
}
`,ut=`#version 100
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec2 vTextureCoord;
varying vec4 vFrame;
varying float vTextureId;
varying float vAlpha;
uniform vec4 shadowColor;
uniform sampler2D uSamplers[%count%];
uniform vec2 uSamplerSize[%count%];

void main(void)
{
   vec2 textureCoord = clamp(vTextureCoord, vFrame.xy, vFrame.zw);
   float textureId = floor(vTextureId + 0.5);

   vec4 color;
   %forloop%
   gl_FragColor = color * vAlpha;
}
`;class H extends X.Shader{__init(){this.maxTextures=0}constructor(t){super(new X.Program(ht,lt(t,ut)),{animationFrame:new Float32Array(2),uSamplers:[],uSamplerSize:[],projTransMatrix:new b.Matrix});H.prototype.__init.call(this),this.maxTextures=t,ot(this,this.maxTextures)}}class S extends X.Geometry{__init2(){this.vertSize=13}__init3(){this.vertPerQuad=4}__init4(){this.stride=this.vertSize*4}__init5(){this.lastTimeAccess=0}constructor(){super();S.prototype.__init2.call(this),S.prototype.__init3.call(this),S.prototype.__init4.call(this),S.prototype.__init5.call(this);const t=this.buf=new X.Buffer(new Float32Array(2),!0,!1);this.addAttribute("aVertexPosition",t,0,!1,0,this.stride,0).addAttribute("aTextureCoord",t,0,!1,0,this.stride,2*4).addAttribute("aFrame",t,0,!1,0,this.stride,4*4).addAttribute("aAnim",t,0,!1,0,this.stride,8*4).addAttribute("aTextureId",t,0,!1,0,this.stride,10*4).addAttribute("aAnimDivisor",t,0,!1,0,this.stride,11*4).addAttribute("aAlpha",t,0,!1,0,this.stride,12*4)}}class C extends X.ObjectRenderer{__init(){this.tileAnim=[0,0]}__init2(){this.ibLen=0}__init3(){this.indexBuffer=null}__init4(){this.textiles=[]}constructor(t){super(t);C.prototype.__init.call(this),C.prototype.__init2.call(this),C.prototype.__init3.call(this),C.prototype.__init4.call(this),this.shader=new H(E.TEXTURES_PER_TILEMAP),this.indexBuffer=new X.Buffer(void 0,!0,!0),this.checkIndexBuffer(2e3),this.makeTextiles()}bindTileTextures(t,i){const e=i.length,s=this.shader,o=E.TEXTURES_PER_TILEMAP,u=s.uniforms.uSamplerSize;if(!(e>E.TEXTILE_UNITS*o)){if(E.TEXTILE_UNITS<=1)for(let l=0;l<i.length;l++){const a=i[l];if(!a||!a.valid)return;t.texture.bind(i[l],l),u[l*2]=1/i[l].realWidth,u[l*2+1]=1/i[l].realHeight}else{this.makeTextiles();const l=Math.ceil(e/E.TEXTILE_UNITS);for(let a=0;a<e;a++){const p=i[a];if(p&&p.valid){const d=Math.floor(a/E.TEXTILE_UNITS),I=a%E.TEXTILE_UNITS;this.textiles[d].tile(I,p)}}for(let a=0;a<l;a++)t.texture.bind(this.textiles[a].baseTexture,a),u[a*2]=1/this.textiles[a].width,u[a*2+1]=1/this.textiles[a].baseTexture.height}s.uniforms.uSamplerSize=u}}start(){}createVb(){const t=new S;return t.addIndex(this.indexBuffer),t.lastTimeAccess=Date.now(),t}getShader(){return this.shader}destroy(){super.destroy(),this.shader=null}checkIndexBuffer(t,i=null){const e=t*6;if(e<=this.ibLen)return;let s=e;for(;s<e;)s<<=1;this.ibLen=e;const o=nt.createIndicesForQuads||nt.utils.createIndicesForQuads;this.indexBuffer.update(o(t,E.use32bitIndex?new Uint32Array(t*6):void 0))}makeTextiles(){if(!(E.TEXTILE_UNITS<=1))for(let t=0;t<E.TEXTILE_UNITS;t++){if(this.textiles[t])continue;const i=new Y,e=new X.BaseTexture(i);e.scaleMode=E.TEXTILE_SCALE_MODE,e.wrapMode=V.WRAP_MODES.CLAMP,this.textiles[t]=i}}}const ct={CanvasTileRenderer:B,CompositeRectTileLayer:D,CompositeTilemap:D,Constant:rt,TextileResource:Y,MultiTextureResource:Y,RectTileLayer:m,Tilemap:m,TilemapShader:H,TilemapGeometry:S,RectTileShader:H,RectTileGeom:S,TileRenderer:C};X.Renderer.registerPlugin("tilemap",C),_.CanvasTileRenderer=B,_.CompositeRectTileLayer=D,_.CompositeTilemap=D,_.Constant=rt,_.POINT_STRUCT_SIZE=L,_.RectTileLayer=m,_.TextileResource=Y,_.TileRenderer=C,_.Tilemap=m,_.TilemapGeometry=S,_.TilemapShader=H,_.fillSamplers=ot,_.generateFragmentSrc=lt,_.pixi_tilemap=ct,_.settings=E,Object.defineProperty(_,"__esModule",{value:!0})}),typeof _pixi_tilemap!="undefined"&&Object.assign(this.PIXI.tilemap,_pixi_tilemap);
//# sourceMappingURL=pixi-tilemap.umd.js.map
