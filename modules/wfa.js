var A=a=>typeof a==='number';(()=>{if(typeof global!=='undefined'){}else if(typeof window!=='undefined')window.global=window;else if(typeof self!=='undefined')self.global=self;else throw Error('cannot export Go (neither global, window nor self is defined)');(!global.require&&typeof require!=='undefined')&&(global.require=require);(!global.fs&&global.require)&&(global.fs=require('node:fs'));var B=()=>{const _a=Error('not implemented');_a.code='ENOSYS';return _a},F=[];if(!global.fs){let D='';global.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(_A,_b){D+=d.decode(_b);var _C=D.lastIndexOf('\n');_C!=-1&&(console.log(D.substr(0,_C)),D=D.substr(_C+1));return _b.length},write(E,_B,aA,_d,_e,_f){if(aA!==0||_d!==_B.length||_e!==null){_f(B());return}_f(null,this.writeSync(E,_B))},chmod(aB,aC,aD){aD(B())},chown(aE,aF,aG,_D){_D(B())},close(aH,aI){aI(B())},fchmod(aJ,aK,aL){aL(B())},fchown(aM,aN,aO,aP){aP(B())},fstat(aQ,aR){aR(B())},fsync(aS,aT){aT(null)},ftruncate(aU,aV,aW){aW(B())},lchown(aX,aY,aZ,bA){bA(B())},link(bB,bC,bD){bD(B())},lstat(bE,bF){bF(B())},mkdir(bG,bH,bI){bI(B())},open(bJ,bK,bL,bM){bM(B())},read(bN,bO,bP,bQ,_E,_F){_F(B())},readdir(bR,bS){bS(B())},readlink(bT,bU){bU(B())},rename(bV,bW,bX){bX(B())},rmdir(bY,bZ){bZ(B())},stat(cA,cB){cB(B())},symlink(cC,cD,cE){cE(B())},truncate(cF,cG,cH){cH(B())},unlink(cI,cJ){cJ(B())},utimes(cK,cL,cM,cN){cN(B())}}}!global.process&&(global.process={getuid(){return -1},getgid(){return -1},geteuid(){return -1},getegid(){return -1},getgroups(){throw B()},pid:-1,ppid:-1,umask(){throw B()},cwd(){throw B()},chdir(){throw B()}});if(!global.crypto){var C=require('node:crypto');global.crypto={getRandomValues(b){C.randomFillSync(b)}}}!global.performance&&(global.performance={now(){const[cO,cP]=process.hrtime();return cO*1000+cP/1000000}});!global.TextEncoder&&(global.TextEncoder=require('node:util').TextEncoder);!global.TextDecoder&&(global.TextDecoder=require('node:util').TextDecoder);var _c=new TextEncoder('utf-8');var d=new TextDecoder('utf-8');let e=new DataView(new ArrayBuffer(8));global.Go=class{constructor(){this._callbackTimeouts=new Map();this._nextCallbackTimeoutID=1;var cQ=()=>new DataView(this._inst.exports.memory.buffer),cR=cW=>{e.setBigInt64(0,cW,!0);const f=e.getFloat64(0,!0);if(f===0)return;if(!isNaN(f))return f;const cX=cW&0xffffffffn;return this._values[cX]},cS=cY=>{return cR(cQ().getBigUint64(cY,!0))},cT=v=>{const cZ=0x7FF80000n;if(A(v)){if(isNaN(v))return cZ<<32n;if(v===0)return (cZ<<32n)|1n;e.setFloat64(0,v,!0);return e.getBigInt64(0,!0)}switch(v) {case void 0:return 0n;case null:return (cZ<<32n)|2n;case !0:return (cZ<<32n)|3n;case !1:return (cZ<<32n)|4n}let dA=this._ids.get(v);if(dA===void 0){dA=this._idPool.pop();dA===void 0&&(dA=BigInt(this._values.length));this._values[dA]=v;this._goRefCounts[dA]=0;this._ids.set(v,dA)}this._goRefCounts[dA]++;let dB=1n;switch(typeof v) {case 'string':dB=2n;break;case 'symbol':dB=3n;break;case 'function':dB=4n;break}return dA|((cZ|dB)<<32n)},cU=(dC,v)=>{cQ().setBigUint64(dC,cT(v),!0)},cV=(dD,dE,dF)=>new Uint8Array(this._inst.exports.memory.buffer, dD, dE),G=(dG,dH,dI)=>{const a=Array(dH);for(let i=0;i<dH;i++)a[i]=cS(dG+i*8);return a},h=(dJ,dK)=>d.decode(new DataView(this._inst.exports.memory.buffer, dJ, dK)),I=Date.now()-performance.now();this.importObject={wasi_snapshot_preview1:{fd_write:function(dL,dM,dN,dO){let dP=0;if(dL==1)for(let dQ=0;dQ<dN;dQ++){let dR=dM+dQ*8;let dS=cQ().getUint32(dR+0,!0);let dT=cQ().getUint32(dR+4,!0);dP+=dT;for(let i=0;i<dT;i++){let c=cQ().getUint8(dS+i);if(c==13){}else if(c==10){F=[];console.log(d.decode(new Uint8Array(F)))}else F.push(c)}}else console.error('invalid file descriptor:',dL);cQ().setUint32(dO,dP,!0);return 0},fd_close:()=>0,fd_fdstat_get:()=>0,fd_seek:()=>0,'proc_exit':dU=>{if(global.process)process.exit(dU);else throw `trying to exit with code ${dU}`},random_get:(dV,dW)=>(crypto.getRandomValues(cV(dV,dW)),0)},gojs:{'runtime.ticks':()=>I+performance.now(),'runtime.sleepTicks':dX=>setTimeout(this._inst.exports.go_scheduler,dX),'syscall/js.finalizeRef':dY=>{var dZ=cQ().getUint32(cR(dY),!0);this._goRefCounts[dZ]--;if(this._goRefCounts[dZ]===0){var v=this._values[dZ];this._values[dZ]=null;this._ids.delete(v);this._idPool.push(dZ)}},'syscall/js.stringVal':(eA,eB)=>{return cT(h(eA,eB))},'syscall/js.valueGet':(eC,eD,eE)=>{return cT(Reflect.get(cR(eC),h(eD,eE)))},'syscall/js.valueSet':(eF,eG,eH,eI)=>{Reflect.set(cR(eF),h(eG,eH),cR(eI))},'syscall/js.valueDelete':(eJ,eK,eL)=>{Reflect.deleteProperty(cR(eJ),h(eK,eL))},'syscall/js.valueIndex':(eM,i)=>cT(Reflect.get(cR(eM),i)),'syscall/js.valueSetIndex':(eN,i,eO)=>Reflect.set(cR(eN),i,cR(eO)),'syscall/js.valueCall':(eP,eQ,eR,eS,eT,eU,_g)=>{var v=cR(eQ),_i=h(eR,eS),j=G(eT,eU,_g);try{var m=Reflect.get(v,_i);cU(eP,Reflect.apply(m,v,j));cQ().setUint8(eP+8,1)}catch(eV){cU(eP,eV);cQ().setUint8(eP+8,0)}},'syscall/js.valueInvoke':(eW,eX,eY,eZ,fA)=>{try{var v=cR(eX),_G=G(eY,eZ,fA);cU(eW,Reflect.apply(v,void 0,_G));cQ().setUint8(eW+8,1)}catch(fB){cU(eW,fB);cQ().setUint8(eW+8,0)}},'syscall/js.valueNew':(fC,fD,fE,fF,fG)=>{var v=cR(fD),fH=G(fE,fF,fG);try{cU(fC,Reflect.construct(v,fH));cQ().setUint8(fC+8,1)}catch(fI){cU(fC,fI);cQ().setUint8(fC+8,0)}},'syscall/js.valueLength':fJ=>cR(fJ).length,'syscall/js.valuePrepareString':(fK,fL)=>{var fM=_c.encode(`${cR(fL)}`);cU(fK,fM);cQ().setInt32(fK+8,fM.length,!0)},'syscall/js.valueLoadString':(fN,fO,fP,fQ)=>{cV(fO,fP,fQ).set(cR(fN))},'syscall/js.valueInstanceOf':(fR,fS)=>cR(fR) instanceof cR(fS),'syscall/js.copyBytesToGo':(fT,fU,fV,fW,fX)=>{let fY=fT+4;var fZ=cV(fU,fV),H=cR(fX);if(!(H instanceof Uint8Array||H instanceof Uint8ClampedArray)){cQ().setUint8(fY,0);return}var _I=H.subarray(0,fZ.length);fZ.set(_I);cQ().setUint32(fT,_I.length,!0);cQ().setUint8(fY,1)},'syscall/js.copyBytesToJS':(gA,gB,gC,gD,gE)=>{let gF=gA+4;var gG=cR(gB),_h=cV(gC,gD);if(!(gG instanceof Uint8Array||gG instanceof Uint8ClampedArray)){cQ().setUint8(gF,0);return}var gH=_h.subarray(0,gG.length);gG.set(gH);cQ().setUint32(gA,gH.length,!0);cQ().setUint8(gF,1)}}};this.importObject.env=this.importObject.gojs}async run(gI){this._inst=gI;this._values=[NaN,0,null,!0,!1,global,this];this._goRefCounts=[];this._ids=new Map();this._idPool=[];this.exited=!1;while (!0) {var gJ=new Promise(resolve=>this._resolveCallbackPromise=()=>{if(this.exited)throw Error('bad callback: Go program has already exited');setTimeout(resolve,0)});this._inst.exports._start();if(this.exited)break;await gJ}}_resume(){if(this.exited)throw Error('Go program has already exited');this._inst.exports.resume();this.exited&&this._resolveExitPromise()}_makeFuncWrapper(id){var go=this;return function(...args){var gK={id:id,this:this,args:args};go._pendingEvent=gK;go._resume();return gK.result}}};if(global.require&&global.require.main===module&&global.process&&global.process.versions&&!global.process.versions.electron){process.argv.length!=3&&(console.error('usage: go_js_wasm_exec [wasm binary] [arguments]'),process.exit(1));var g=new Go();WebAssembly.instantiate(fs.readFileSync(process.argv[2]),g.importObject).then(gL=>g.run(gL.instance)).catch(gM=>{console.error(gM);process.exit(1)})}})();function _(gN){return new Promise(gO=>{var gP=new Go();var gQ;'instantiateStreaming' in WebAssembly?WebAssembly.instantiateStreaming(fetch(gN),gP.importObject).then(gR=>{gQ=gR.instance;gP.run(gQ);gO()}):fetch(gN).then(resp=>resp.arrayBuffer()).then(gS=>WebAssembly.instantiate(gS,gP.importObject).then(gT=>{gQ=gT.instance;gP.run(gQ);gO()}))})}export{_ as default};