(function(){"use strict";const xe=function(){var e={},r=-1,i,u,A,_,F,B,C=12,P=5003,R,v=C,U,D=1<<C,V=[],fe=[],X=P,$=0,Q=!1,te,M,N,z=0,G=0,ae=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],W,se=[],J=e.LZWEncoder=function(p,f,t,c){i=p,u=f,A=t,_=Math.max(2,c)},ce=function(p,f){se[W++]=p,W>=254&&ee(f)},k=function(p){ie(X),$=M+2,Q=!0,Y(M,p)},ie=function(p){for(var f=0;f<p;++f)V[f]=-1},b=e.compress=function(p,f){var t,c,L,T,I,w,o;for(te=p,Q=!1,R=te,U=re(R),M=1<<p-1,N=M+1,$=M+2,W=0,T=oe(),o=0,t=X;t<65536;t*=2)++o;o=8-o,w=X,ie(w),Y(M,f);e:for(;(L=oe())!=r;){if(t=(L<<v)+T,c=L<<o^T,V[c]==t){T=fe[c];continue}else if(V[c]>=0){I=w-c,c===0&&(I=1);do if((c-=I)<0&&(c+=w),V[c]==t){T=fe[c];continue e}while(V[c]>=0)}Y(T,f),T=L,$<D?(fe[c]=$++,V[c]=t):k(f)}Y(T,f),Y(N,f)};e.encode=function(p){p.writeByte(_),F=i*u,B=0,b(_+1,p),p.writeByte(0)};var ee=function(p){W>0&&(p.writeByte(W),p.writeBytes(se,0,W),W=0)},re=function(p){return(1<<p)-1},oe=function(){if(F===0)return r;--F;var p=A[B++];return p&255},Y=function(p,f){for(z&=ae[G],G>0?z|=p<<G:z=p,G+=R;G>=8;)ce(z&255,f),z>>=8,G-=8;if(($>U||Q)&&(Q?(U=re(R=te),Q=!1):(++R,R==v?U=D:U=re(R))),p==N){for(;G>0;)ce(z&255,f),z>>=8,G-=8;ee(f)}};return J.apply(this,arguments),e},le=function(){var e={},r=256,i=499,u=491,A=487,_=503,F=3*_,B=r-1,C=4,P=100,R=16,v=1<<R,U=10,D=10,V=v>>D,fe=v<<U-D,X=r>>3,$=6,Q=1<<$,te=X*Q,M=30,N=10,z=1<<N,G,ae=8,W=1<<ae,se=N+ae,J=1<<se,ce,k,ie,b,ee=[],re=[],oe=[],Y=[],S=e.NeuQuant=function(o,s,h){var m,d;for(ce=o,k=s,ie=h,b=new Array(r),m=0;m<r;m++)b[m]=new Array(4),d=b[m],d[0]=d[1]=d[2]=(m<<C+8)/r,oe[m]=v/r,re[m]=0},p=function(){for(var o=[],s=new Array(r),h=0;h<r;h++)s[b[h][3]]=h;for(var m=0,d=0;d<r;d++){var a=s[d];o[m++]=b[a][0],o[m++]=b[a][1],o[m++]=b[a][2]}return o},f=function(){var o,s,h,m,d,a,n,l;for(n=0,l=0,o=0;o<r;o++){for(d=b[o],h=o,m=d[1],s=o+1;s<r;s++)a=b[s],a[1]<m&&(h=s,m=a[1]);if(a=b[h],o!=h&&(s=a[0],a[0]=d[0],d[0]=s,s=a[1],a[1]=d[1],d[1]=s,s=a[2],a[2]=d[2],d[2]=s,s=a[3],a[3]=d[3],d[3]=s),m!=n){for(ee[n]=l+o>>1,s=n+1;s<m;s++)ee[s]=o;n=m,l=o}}for(ee[n]=l+B>>1,s=n+1;s<256;s++)ee[s]=B},t=function(){var o,s,h,m,d,a,n,l,E,g,Z,y,O,_e;for(k<F&&(ie=1),G=30+(ie-1)/3,y=ce,O=0,_e=k,Z=k/(3*ie),g=Z/P|0,l=z,a=te,n=a>>$,n<=1&&(n=0),o=0;o<n;o++)Y[o]=l*((n*n-o*o)*W/(n*n));for(k<F?E=3:k%i!==0?E=3*i:k%u!==0?E=3*u:k%A!==0?E=3*A:E=3*_,o=0;o<Z;)if(h=(y[O+0]&255)<<C,m=(y[O+1]&255)<<C,d=(y[O+2]&255)<<C,s=I(h,m,d),T(l,s,h,m,d),n!==0&&L(n,s,h,m,d),O+=E,O>=_e&&(O-=k),o++,g===0&&(g=1),o%g===0)for(l-=l/G,a-=a/M,n=a>>$,n<=1&&(n=0),s=0;s<n;s++)Y[s]=l*((n*n-s*s)*W/(n*n))};e.map=function(o,s,h){var m,d,a,n,l,E,g;for(l=1e3,g=-1,m=ee[s],d=m-1;m<r||d>=0;)m<r&&(E=b[m],a=E[1]-s,a>=l?m=r:(m++,a<0&&(a=-a),n=E[0]-o,n<0&&(n=-n),a+=n,a<l&&(n=E[2]-h,n<0&&(n=-n),a+=n,a<l&&(l=a,g=E[3])))),d>=0&&(E=b[d],a=s-E[1],a>=l?d=-1:(d--,a<0&&(a=-a),n=E[0]-o,n<0&&(n=-n),a+=n,a<l&&(n=E[2]-h,n<0&&(n=-n),a+=n,a<l&&(l=a,g=E[3]))));return g},e.process=function(){return t(),c(),f(),p()};var c=function(){var o;for(o=0;o<r;o++)b[o][0]>>=C,b[o][1]>>=C,b[o][2]>>=C,b[o][3]=o},L=function(o,s,h,m,d){var a,n,l,E,g,Z,y;for(l=s-o,l<-1&&(l=-1),E=s+o,E>r&&(E=r),a=s+1,n=s-1,Z=1;a<E||n>l;){if(g=Y[Z++],a<E){y=b[a++];try{y[0]-=g*(y[0]-h)/J,y[1]-=g*(y[1]-m)/J,y[2]-=g*(y[2]-d)/J}catch{}}if(n>l){y=b[n--];try{y[0]-=g*(y[0]-h)/J,y[1]-=g*(y[1]-m)/J,y[2]-=g*(y[2]-d)/J}catch{}}}},T=function(o,s,h,m,d){var a=b[s];a[0]-=o*(a[0]-h)/z,a[1]-=o*(a[1]-m)/z,a[2]-=o*(a[2]-d)/z},I=function(o,s,h){var m,d,a,n,l,E,g,Z,y,O;for(Z=~(1<<31),y=Z,E=-1,g=E,m=0;m<r;m++)O=b[m],d=O[0]-o,d<0&&(d=-d),a=O[1]-s,a<0&&(a=-a),d+=a,a=O[2]-h,a<0&&(a=-a),d+=a,d<Z&&(Z=d,E=m),n=d-(re[m]>>R-C),n<y&&(y=n,g=m),l=oe[m]>>D,oe[m]-=l,re[m]+=l<<U;return oe[E]+=V,re[E]-=fe,g};return S.apply(this,arguments),e},pe=function(){for(var e=0,r={};e<256;e++)r[e]=String.fromCharCode(e);function i(){this.bin=[]}i.prototype.getData=function(){for(var f="",t=this.bin.length,c=0;c<t;c++)f+=r[this.bin[c]];return f},i.prototype.writeByte=function(f){this.bin.push(f)},i.prototype.writeUTFBytes=function(f){for(var t=f.length,c=0;c<t;c++)this.writeByte(f.charCodeAt(c))},i.prototype.writeBytes=function(f,t,c){for(var L=c||f.length,T=t||0;T<L;T++)this.writeByte(f[T])};var u={},A,_,F=null,B,C=-1,P=0,R=!1,v,U,D,V,fe,X,$=[],Q=7,te=-1,M=!1,N=!0,z=!1,G=10,ae="Generated by jsgif (https://github.com/antimatter15/jsgif/)";u.setDelay=function(t){P=Math.round(t/10)},u.setDispose=function(t){t>=0&&(te=t)},u.setRepeat=function(t){t>=0&&(C=t)},u.setTransparent=function(t){F=t},u.setComment=function(t){ae=t},u.addFrame=function(t,c){if(t===null||!R||v===null)throw new Error("Please call start method before calling addFrame");var L=!0;try{c?t instanceof ImageData?(U=t.data,(!sizeset||A!=t.width||_!=t.height)&&se(t.width,t.height)):t instanceof Uint8ClampedArray?t.length==A*_*4?U=t:(console.log("Please set the correct size: ImageData length mismatch"),L=!1):(console.log("Please provide correct input"),L=!1):(U=t.getImageData(0,0,t.canvas.width,t.canvas.height).data,z||se(t.canvas.width,t.canvas.height)),k(),J(),N&&(re(),Y(),C>=0&&oe()),ie(),ae!==""&&b(),ee(),N||Y(),p(),N=!1}catch{L=!1}return L},u.download=function(t){if(v===null||M==!1)console.log("Please call start method and add frames and call finish method before calling download");else{t=t!==void 0?t.endsWith(".gif")?t:t+".gif":"download.gif";var c=document.createElement("a");c.download=t,c.href=URL.createObjectURL(new Blob([new Uint8Array(v.bin)],{type:"image/gif"})),c.click()}},u.finish=function(){if(!R)return!1;var t=!0;R=!1;try{v.writeByte(59),M=!0}catch{t=!1}return t};var W=function(){B=0,U=null,D=null,V=null,X=null,M=!1,N=!0};u.setFrameRate=function(t){t!=15&&(P=Math.round(100/t))},u.setQuality=function(t){t<1&&(t=1),G=t};var se=u.setSize=function(t,c){R&&!N||(A=t,_=c,A<1&&(A=320),_<1&&(_=240),z=!0)};u.start=function(){W();var t=!0;M=!1,v=new i;try{v.writeUTFBytes("GIF89a")}catch{t=!1}return R=t},u.cont=function(){W();var t=!0;return M=!1,v=new i,R=t};var J=function(){var t=D.length,c=t/3;V=[];var L=new le(D,t,G);X=L.process();for(var T=0,I=0;I<c;I++){var w=L.map(D[T++]&255,D[T++]&255,D[T++]&255);$[w]=!0,V[I]=w}D=null,fe=8,Q=7,F!==null&&(B=ce(F))},ce=function(t){if(X===null)return-1;for(var c=(t&16711680)>>16,L=(t&65280)>>8,T=t&255,I=0,w=256*256*256,o=X.length,s=0;s<o;){var h=c-(X[s++]&255),m=L-(X[s++]&255),d=T-(X[s]&255),a=h*h+m*m+d*d,n=s/3;$[n]&&a<w&&(w=a,I=n),s++}return I},k=function(){var t=A,c=_;D=[];for(var L=U,T=0,I=0;I<c;I++)for(var w=0;w<t;w++){var o=I*t*4+w*4;D[T++]=L[o],D[T++]=L[o+1],D[T++]=L[o+2]}},ie=function(){v.writeByte(33),v.writeByte(249),v.writeByte(4);var t,c;F===null?(t=0,c=0):(t=1,c=2),te>=0&&(c=te&7),c<<=2,v.writeByte(0|c|0|t),S(P),v.writeByte(B),v.writeByte(0)},b=function(){v.writeByte(33),v.writeByte(254),v.writeByte(ae.length),v.writeUTFBytes(ae),v.writeByte(0)},ee=function(){v.writeByte(44),S(0),S(0),S(A),S(_),N?v.writeByte(0):v.writeByte(128|Q)},re=function(){S(A),S(_),v.writeByte(240|Q),v.writeByte(0),v.writeByte(0)},oe=function(){v.writeByte(33),v.writeByte(255),v.writeByte(11),v.writeUTFBytes("NETSCAPE2.0"),v.writeByte(3),v.writeByte(1),S(C),v.writeByte(0)},Y=function(){v.writeBytes(X);for(var t=3*256-X.length,c=0;c<t;c++)v.writeByte(0)},S=function(t){v.writeByte(t&255),v.writeByte(t>>8&255)},p=function(){var t=new xe(A,_,V,fe);t.encode(v)};return u.stream=function(){return v},u.setProperties=function(t,c){R=t,N=c},u};function ve(e,r,i){const u=e.createShader(r);return u?(e.shaderSource(u,i),e.compileShader(u),e.getShaderParameter(u,e.COMPILE_STATUS)?u:(console.error(e.getShaderInfoLog(u)),e.deleteShader(u),null)):null}function he(e,r,i){const u=ve(e,e.VERTEX_SHADER,r);if(!u)return null;const A=ve(e,e.FRAGMENT_SHADER,i);if(!A)return e.deleteShader(u),null;const _=e.createProgram();return _?(e.attachShader(_,u),e.attachShader(_,A),e.linkProgram(_),e.getProgramParameter(_,e.LINK_STATUS)?(e.detachShader(_,A),e.detachShader(_,u),e.deleteShader(A),e.deleteShader(u),_):(console.error(e.getProgramInfoLog(_)),e.deleteProgram(_),e.deleteShader(A),e.deleteShader(u),null)):null}function ue(e,r,i,u,A){const _=he(e,r,i);if(!_)return null;const F={program:_,attributeLocations:{},uniformLocations:{}};for(const B of u){const C=e.getAttribLocation(_,B);F.attributeLocations[B]=C}for(const B of A){const C=e.getUniformLocation(_,B);if(!C)return console.error(`Cannot get location of uniform: ${B}`),e.deleteProgram(_),null;F.uniformLocations[B]=C}return F}const Ee=`#version 300 es

in vec2 a_clipCoord;
uniform float u_percentage;
uniform vec2 u_velocity;

in vec2 a_texCoord;
out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_clipCoord, 0, 1);
  vec2 offset = u_velocity * u_percentage;
  v_texCoord = vec2(a_texCoord.x - offset.x, a_texCoord.y - offset.y);
}
`,Ae=`#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;let ne={initialized:!1};function Te(e){if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),ne.initialized)return;const r=ue(e,Ee,Ae,["a_texCoord","a_clipCoord"],["u_percentage","u_velocity","u_image"]);if(!r)throw new Error("Failed to compile the program");const i=e.createVertexArray();if(!i)throw new Error("Failed to create vertex array object");e.bindVertexArray(i);const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,0,-1,1,0,1,1,-1,1,0,1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(r.attributeLocations.a_clipCoord),e.vertexAttribPointer(r.attributeLocations.a_clipCoord,2,e.FLOAT,!1,4*4,0),e.enableVertexAttribArray(r.attributeLocations.a_texCoord),e.vertexAttribPointer(r.attributeLocations.a_texCoord,2,e.FLOAT,!1,4*4,2*4),ne={initialized:!0,program:r,vao:i}}function be(e,r,i){if(!ne.initialized)throw new Error("Animation has not been initialized: extreme-speed");return e.useProgram(ne.program.program),e.bindVertexArray(ne.vao),e.uniform1i(ne.program.uniformLocations.u_image,0),e.uniform1f(ne.program.uniformLocations.u_percentage,r),e.uniform2f(ne.program.uniformLocations.u_velocity,i.velocityX,i.velocityY),e.drawArrays(e.TRIANGLE_STRIP,0,4),!0}const we=`#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

// progress of the animation, 0.0 - 1.0
uniform float u_percentage;

// maximum height (attained at start/end of animation), 0.0 - 1.0
uniform float u_jumpHeight;

// time spent on the ground, deforming, 0.0 - 1.0
uniform float u_groundTime;

// maximum percentage deformation (attainted at 0.5), 0.0 - 1.0
uniform vec2 u_maxDeform;

out vec2 v_texCoord;

void main() {
  float airTime = min(u_percentage, 1.0 - u_percentage) * 2.0 / (1.0 - u_groundTime);
  if (airTime < 1.0) {
    // mid air
    float h = (1.0 - airTime * airTime) * u_jumpHeight * 2.0;
    gl_Position = vec4(a_clipCoord.x, a_clipCoord.y - h, 0, 1);
    v_texCoord = vec2(a_texCoord.x, a_texCoord.y);
  } else {
    // on the ground, deforming
    float groundTime = abs(0.5 - u_percentage) * 2.0 / u_groundTime;
    vec2 deformCoef = (1.0 - groundTime * groundTime) * u_maxDeform;
    float y = 1.0 - (1.0 - a_clipCoord.y) * (1.0 - deformCoef.y);
    gl_Position = vec4(a_clipCoord.x, y, 0, 1);

    float offsetX = abs(a_texCoord.x - 0.5) * (1.0 - abs(a_clipCoord.y)) * deformCoef.x;
    float x = a_texCoord.x > 0.5 ? a_texCoord.x - offsetX : a_texCoord.x + offsetX;
    v_texCoord = vec2(x, a_texCoord.y);
  }
}
`,Re=`#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;let q={initialized:!1};function ye(e){if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),q.initialized)return;const r=ue(e,we,Re,["a_texCoord","a_clipCoord"],["u_percentage","u_jumpHeight","u_groundTime","u_maxDeform","u_image"]);if(!r)throw new Error("Failed to compile the program");const i=e.createVertexArray();if(!i)throw new Error("Failed to create vertex array object");e.bindVertexArray(i);const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,.5,.5,-1,-1,0,0,0,-1,.5,0,1,-1,1,0,1,0,1,.5,1,1,1,1,0,1,.5,1,-1,1,0,1,-1,0,0,.5,-1,-1,0,0]),e.STATIC_DRAW),e.enableVertexAttribArray(r.attributeLocations.a_clipCoord),e.vertexAttribPointer(r.attributeLocations.a_clipCoord,2,e.FLOAT,!1,4*4,0),e.enableVertexAttribArray(r.attributeLocations.a_texCoord),e.vertexAttribPointer(r.attributeLocations.a_texCoord,2,e.FLOAT,!1,4*4,2*4),q={initialized:!0,program:r,vao:i}}function Ce(e,r,i){if(!q.initialized)throw new Error("Animation has not been initialized: jumping");return e.useProgram(q.program.program),e.bindVertexArray(q.vao),e.uniform1i(q.program.uniformLocations.u_image,0),e.uniform1f(q.program.uniformLocations.u_percentage,r),e.uniform1f(q.program.uniformLocations.u_jumpHeight,i.jumpHeight),e.uniform1f(q.program.uniformLocations.u_groundTime,i.groundTime),e.uniform2f(q.program.uniformLocations.u_maxDeform,i.maxDeformX,i.maxDeformY),e.drawArrays(e.TRIANGLE_FAN,0,10),!0}const Le=`#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

uniform float u_percentage;

uniform float u_startAngle;
uniform float u_endAngle;

uniform int u_alternate;
uniform vec2 u_origin;

out vec2 v_texCoord;

void main() {
  float angle;
  if (u_alternate == 0) {
    angle = radians(mix(u_startAngle, u_endAngle, u_percentage));
  } else if (u_percentage < 0.5) {
    angle = radians(mix(u_startAngle, u_endAngle, u_percentage * 2.0));
  } else {
    angle = radians(mix(u_endAngle, u_startAngle, u_percentage * 2.0 - 1.0));
  }

  float cos_angle = cos(angle);
  float sin_angle = sin(angle);
  mat2 rotationMatrix = mat2(cos_angle, sin_angle, -sin_angle, cos_angle);
  gl_Position = vec4(rotationMatrix * (a_clipCoord - u_origin) + u_origin, 0.0, 1.0);
  v_texCoord = vec2(a_texCoord.x, a_texCoord.y);
}
`,ge=`#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;let j={initialized:!1};function Pe(e){if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),j.initialized)return;const r=ue(e,Le,ge,["a_texCoord","a_clipCoord"],["u_percentage","u_image","u_startAngle","u_endAngle","u_alternate","u_origin"]);if(!r)throw new Error("Failed to compile the program");const i=e.createVertexArray();if(!i)throw new Error("Failed to create vertex array object");e.bindVertexArray(i);const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,.5,.5,-1,-1,0,0,0,-1,.5,0,1,-1,1,0,1,0,1,.5,1,1,1,1,0,1,.5,1,-1,1,0,1,-1,0,0,.5,-1,-1,0,0]),e.STATIC_DRAW),e.enableVertexAttribArray(r.attributeLocations.a_clipCoord),e.vertexAttribPointer(r.attributeLocations.a_clipCoord,2,e.FLOAT,!1,4*4,0),e.enableVertexAttribArray(r.attributeLocations.a_texCoord),e.vertexAttribPointer(r.attributeLocations.a_texCoord,2,e.FLOAT,!1,4*4,2*4),j={initialized:!0,program:r,vao:i}}function Se(e,r,i){if(!j.initialized)throw new Error("Animation has not been initialized: spinning");return e.useProgram(j.program.program),e.bindVertexArray(j.vao),e.uniform1f(j.program.uniformLocations.u_percentage,r),e.uniform1i(j.program.uniformLocations.u_image,0),e.uniform1f(j.program.uniformLocations.u_startAngle,i.startAngle),e.uniform1f(j.program.uniformLocations.u_endAngle,i.endAngle),e.uniform1i(j.program.uniformLocations.u_alternate,i.alternate),e.uniform2f(j.program.uniformLocations.u_origin,i.originX,i.originY),e.drawArrays(e.TRIANGLE_FAN,0,10),!0}const Fe=`#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

uniform float u_percentage;

uniform float u_minRotateAngle;
uniform float u_maxRotateAngle;
uniform vec2 u_minTranslate;
uniform vec2 u_maxTranslate;

out vec2 v_texCoord;

// https://stackoverflow.com/questions/5149544/can-i-generate-a-random-number-inside-a-pixel-shader
float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float r = random(vec2(u_percentage, u_percentage));
  float angle = radians(mix(u_minRotateAngle, u_maxRotateAngle, r));

  r = random(vec2(r, r));
  if (r < 0.5) {
    angle = -angle;
  }


  float cos_angle = cos(angle);
  float sin_angle = sin(angle);
  mat2 rotationMatrix = mat2(cos_angle, sin_angle, -sin_angle, cos_angle);

  r = random(vec2(r, r));
  vec2 displacement = mix(u_minTranslate, u_maxTranslate, r);

  r = random(vec2(r, r));
  if (r < 0.5) {
    displacement = -displacement;
  }

  mat3 translationMatrix = mat3(
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    displacement.x, displacement.y, 0.0
  );

  gl_Position = vec4(translationMatrix * vec3(rotationMatrix * a_clipCoord, 1.0), 1.0);

  r = random(vec2(r, r));
  bool flip = r < 0.5;
  v_texCoord = vec2(flip ? (1.0 - a_texCoord.x) : a_texCoord.x, a_texCoord.y);
}
`,Be=`#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;let H={initialized:!1};function De(e){if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),H.initialized)return;const r=ue(e,Fe,Be,["a_texCoord","a_clipCoord"],["u_percentage","u_image","u_minRotateAngle","u_maxRotateAngle","u_minTranslate","u_maxTranslate"]);if(!r)throw new Error("Failed to compile the program");const i=e.createVertexArray();if(!i)throw new Error("Failed to create vertex array object");e.bindVertexArray(i);const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,.5,.5,-1,-1,0,0,0,-1,.5,0,1,-1,1,0,1,0,1,.5,1,1,1,1,0,1,.5,1,-1,1,0,1,-1,0,0,.5,-1,-1,0,0]),e.STATIC_DRAW),e.enableVertexAttribArray(r.attributeLocations.a_clipCoord),e.vertexAttribPointer(r.attributeLocations.a_clipCoord,2,e.FLOAT,!1,4*4,0),e.enableVertexAttribArray(r.attributeLocations.a_texCoord),e.vertexAttribPointer(r.attributeLocations.a_texCoord,2,e.FLOAT,!1,4*4,2*4),H={initialized:!0,program:r,vao:i}}function Ue(e,r,i){if(!H.initialized)throw new Error("Animation has not been initialized: excited");return e.useProgram(H.program.program),e.bindVertexArray(H.vao),e.uniform1f(H.program.uniformLocations.u_percentage,r),e.uniform1i(H.program.uniformLocations.u_image,0),e.uniform1f(H.program.uniformLocations.u_minRotateAngle,i.minRotateAngle),e.uniform1f(H.program.uniformLocations.u_maxRotateAngle,i.maxRotateAngle),e.uniform2f(H.program.uniformLocations.u_minTranslate,i.minTranslateX,i.minTranslateY),e.uniform2f(H.program.uniformLocations.u_maxTranslate,i.maxTranslateX,i.maxTranslateY),e.drawArrays(e.TRIANGLE_FAN,0,10),!0}const Ie=`#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

uniform float u_percentage;
uniform float u_minScale;
uniform float u_maxScale;
uniform int u_alternate;

out vec2 v_texCoord;

void main() {
  float scale;
  if (u_alternate == 0) {
    scale = mix(u_minScale, u_maxScale, u_percentage);
  } else if (u_percentage < 0.5) {
    scale = mix(u_minScale, u_maxScale, u_percentage * 2.0);
  } else {
    scale = mix(u_maxScale, u_minScale, u_percentage * 2.0 - 1.0);
  }
  gl_Position = vec4(scale * a_clipCoord, 0.0, 1.0);
  v_texCoord = vec2(a_texCoord.x, a_texCoord.y);
}
`,Xe=`#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;let K={initialized:!1};function ze(e){if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),K.initialized)return;const r=ue(e,Ie,Xe,["a_texCoord","a_clipCoord"],["u_percentage","u_image","u_minScale","u_maxScale","u_alternate"]);if(!r)throw new Error("Failed to compile the program");const i=e.createVertexArray();if(!i)throw new Error("Failed to create vertex array object");e.bindVertexArray(i);const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,.5,.5,-1,-1,0,0,0,-1,.5,0,1,-1,1,0,1,0,1,.5,1,1,1,1,0,1,.5,1,-1,1,0,1,-1,0,0,.5,-1,-1,0,0]),e.STATIC_DRAW),e.enableVertexAttribArray(r.attributeLocations.a_clipCoord),e.vertexAttribPointer(r.attributeLocations.a_clipCoord,2,e.FLOAT,!1,4*4,0),e.enableVertexAttribArray(r.attributeLocations.a_texCoord),e.vertexAttribPointer(r.attributeLocations.a_texCoord,2,e.FLOAT,!1,4*4,2*4),K={initialized:!0,program:r,vao:i}}function Me(e,r,i){if(!K.initialized)throw new Error("Animation has not been initialized: expanding");return e.useProgram(K.program.program),e.bindVertexArray(K.vao),e.uniform1f(K.program.uniformLocations.u_percentage,r),e.uniform1i(K.program.uniformLocations.u_image,0),e.uniform1f(K.program.uniformLocations.u_minScale,i.minScale),e.uniform1f(K.program.uniformLocations.u_maxScale,i.maxScale),e.uniform1i(K.program.uniformLocations.u_alternate,i.alternate),e.drawArrays(e.TRIANGLE_FAN,0,10),!0}const de=new OffscreenCanvas(128,128),x=de.getContext("webgl2");let me=null;self.onmessage=async e=>{const r=e.data;if(!x){const P={id:r.id,type:"error",error:"webgl2 is not supported"};postMessage(P);return}const u=await(await fetch(r.gif.imageUrl)).blob(),A=await createImageBitmap(u);me&&x.deleteTexture(me),me=x.createTexture(),x.activeTexture(x.TEXTURE0+0),x.bindTexture(x.TEXTURE_2D,me),x.texImage2D(x.TEXTURE_2D,0,x.RGBA,x.RGBA,x.UNSIGNED_BYTE,A),de.width=r.gif.width,de.height=r.gif.height;try{switch(r.animation.name){case"extreme-speed":Te(x);break;case"jumping":ye(x);break;case"spinning":Pe(x);break;case"excited":De(x);break;case"expanding":ze(x);break;default:(P=>{throw new Error("Unknown animation")})(r.animation)}}catch(P){const R={id:r.id,type:"error",error:String(P)};postMessage(R);return}const _=new pe;_.setRepeat(0),_.setDelay(r.gif.delayMs),_.setSize(r.gif.width,r.gif.height),_.start();for(let P=0;P<=r.gif.totalFrames;++P){x.viewport(0,0,x.canvas.width,x.canvas.height),x.clearColor(1,1,1,1),x.clear(x.COLOR_BUFFER_BIT);try{switch(r.animation.name){case"extreme-speed":be(x,P/r.gif.totalFrames,r.animation);break;case"jumping":Ce(x,P/r.gif.totalFrames,r.animation);break;case"spinning":Se(x,P/r.gif.totalFrames,r.animation);break;case"excited":Ue(x,P/r.gif.totalFrames,r.animation);break;case"expanding":Me(x,P/r.gif.totalFrames,r.animation);break;default:(v=>{throw new Error("Unknown animation")})(r.animation)}}catch(v){const U={id:r.id,type:"error",error:String(v)};postMessage(U);return}const R=new Uint8ClampedArray(x.drawingBufferWidth*x.drawingBufferHeight*4);x.readPixels(0,0,x.drawingBufferWidth,x.drawingBufferHeight,x.RGBA,x.UNSIGNED_BYTE,R),_.addFrame(R,!0),_.setTransparent(16777215)}_.finish();const F=_.stream().getData(),B="data:image/gif;base64,"+btoa(F),C={id:r.id,type:"success",dataUri:B};postMessage(C)}})();