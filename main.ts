import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
import{join}from'node:path';
const e=new TextEncoder();
const T=new Int32Array([0,17,65,4,6,10,11,15,-1,-1,-1,-1,-1,-1,-1,-1,9,9,9,9,9,9,9,5,9,9,9,5,9,9,9,-1,9,9,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,32,36,36,32,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,4,1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
function run(p,q){
const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
let s=0,c=0,pc=0,st=0,ol=0,ip=0;
const n=p.length;
const end=x=>[o.slice(0,ol),x];
for(;;){
if(st===1e6)return end(10);
if(pc<0||pc>=n)return end(9);
const op=p[pc],d=T[op];
if(d<0)return end(5);
const im=d>>4,po=d>>2&3,pu=d&3;
if(pc+im>=n)return end(9);
st++;
const nx=pc+1+im;
if(s<po)return end(2);
if(s-po+pu>256)return end(3);
pc=nx;
if(op===1)D[s++]=(p[nx-1]<<24)>>24;
else if(op>=48&&op<=50){
const rel=(p[nx-2]|p[nx-1]<<8)<<16>>16;
let t=1;
if(op!==48){const v=D[--s];t=op===49?v===0:v!==0;}
if(t)pc=nx+rel;
}
else if(op===81){if(ol+1>65536)return end(11);o[ol++]=D[--s]&255;}
else if(op===4){D[s]=D[s-1];s++;}
else if(op===64){const a=D[s-1];if(a<0||a>255)return end(6);D[s-1]=M[a];}
else if(op===33){const b=D[s-1],a=D[s-2];s-=2;D[s++]=a<b?1:0;}
else if(op===17){const b=D[s-1],a=D[s-2];s-=2;D[s++]=a-b|0;}
else if(op===52){if(!c)return end(8);pc=C[--c];}
else if(op===51){if(c===64)return end(7);C[c++]=nx;pc=p[nx-2]|p[nx-1]<<8;}
else if(op===16){const b=D[s-1],a=D[s-2];s-=2;D[s++]=a+b|0;}
else if(op>=16&&op<=22||op>=24&&op<=26||op>=28&&op<=30||op>=32&&op<=34){
const b=D[s-1],a=D[s-2];let r;
if(op===20){if(!b)return end(4);r=b===-1?0:a%b|0;}
else if(op===18)r=Math.imul(a,b);
else if(op===32)r=a===b?1:0;
else if(op===19){if(!b)return end(4);r=a===-2147483648&&b===-1?a:(a/b)|0;}
else if(op===34)r=a>>>0<b>>>0?1:0;
else if(op===30)r=a>>>(b&31)|0;
else if(op===26)r=a^b;
else if(op===24)r=a&b;
else if(op===28)r=a<<(b&31);
else if(op===29)r=a>>(b&31);
else if(op===21){if(!b)return end(4);r=Math.floor((a>>>0)/(b>>>0))|0;}
else if(op===22){if(!b)return end(4);r=(a>>>0)%(b>>>0)|0;}
else r=a|b;
s-=2;D[s++]=r;
}
else if(op===5){const t=D[s-1];D[s-1]=D[s-2];D[s-2]=t;}
else if(op===65){const a=D[s-1],v=D[s-2];if(a<0||a>255)return end(6);s-=2;M[a]=v;}
else if(op===2)D[s++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;
else if(op===82)D[s++]=ip<q.length?q[ip++]:-1;
else if(op===80){const b=e.encode(String(D[s-1]));if(ol+b.length>65536)return end(11);s--;o.set(b,ol);ol+=b.length;}
else if(op===7){const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;}
else if(op===83)return end(D[--s]&255);
else if(op===23)D[s-1]=-D[s-1]|0;
else if(op===3)s--;
else if(op===27)D[s-1]=~D[s-1];
else if(op===6){D[s]=D[s-2];s++;}
else if(op===0)return end(0);
}
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of readdirSync(I).sort()){
let q;
try{q=new Uint8Array(readFileSync(join(I,id,'input.bin')));}catch{q=new Uint8Array(0);}
const r=run(new Uint8Array(readFileSync(join(I,id,'program.bin'))),q);
mkdirSync(join(O,id),{recursive:true});
writeFileSync(join(O,id,'stdout.bin'),r[0]);
writeFileSync(join(O,id,'exit.txt'),r[1]+'\n');
}
