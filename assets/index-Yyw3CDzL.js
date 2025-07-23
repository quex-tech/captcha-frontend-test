import{a0 as he,i as fe,a as me,x as $,r as Se,h as ae,a3 as j,d as we,R as Ae,O as Ce,e as Ie,f as Re,W as Le}from"./index-qWWQhEpb.js";import{U as be,n as O,c as ge,o as De,r as re}from"./if-defined-3sluKkBK.js";import"./index-Z6QfsBpf.js";import"./index-B3D33H3S.js";import"./index-CcG3nQyC.js";import"./index-CAjxcFnL.js";var ce={exports:{}},Ne=ce.exports,Te;function je(){return Te||(Te=1,function(e,t){(function(i,o){e.exports=o()})(Ne,function(){var i=1e3,o=6e4,u=36e5,r="millisecond",c="second",d="minute",g="hour",h="day",v="week",x="month",R="quarter",T="year",D="date",k="Invalid Date",U=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var a=["th","st","nd","rd"],n=p%100;return"["+p+(a[(n-20)%10]||a[n]||a[0])+"]"}},ee=function(p,a,n){var l=String(p);return!l||l.length>=a?p:""+Array(a+1-l.length).join(n)+p},W={s:ee,z:function(p){var a=-p.utcOffset(),n=Math.abs(a),l=Math.floor(n/60),s=n%60;return(a<=0?"+":"-")+ee(l,2,"0")+":"+ee(s,2,"0")},m:function p(a,n){if(a.date()<n.date())return-p(n,a);var l=12*(n.year()-a.year())+(n.month()-a.month()),s=a.clone().add(l,x),f=n-s<0,m=a.clone().add(l+(f?-1:1),x);return+(-(l+(n-s)/(f?s-m:m-s))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:x,y:T,w:v,d:h,D,h:g,m:d,s:c,ms:r,Q:R}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},A="en",C={};C[A]=X;var P="$isDayjsObject",H=function(p){return p instanceof oe||!(!p||!p[P])},ne=function p(a,n,l){var s;if(!a)return A;if(typeof a=="string"){var f=a.toLowerCase();C[f]&&(s=f),n&&(C[f]=n,s=f);var m=a.split("-");if(!s&&m.length>1)return p(m[0])}else{var y=a.name;C[y]=a,s=y}return!l&&s&&(A=s),s||!l&&A},_=function(p,a){if(H(p))return p.clone();var n=typeof a=="object"?a:{};return n.date=p,n.args=arguments,new oe(n)},w=W;w.l=ne,w.i=H,w.w=function(p,a){return _(p,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var oe=function(){function p(n){this.$L=ne(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[P]=!0}var a=p.prototype;return a.parse=function(n){this.$d=function(l){var s=l.date,f=l.utc;if(s===null)return new Date(NaN);if(w.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var m=s.match(U);if(m){var y=m[2]-1||0,b=(m[7]||"0").substring(0,3);return f?new Date(Date.UTC(m[1],y,m[3]||1,m[4]||0,m[5]||0,m[6]||0,b)):new Date(m[1],y,m[3]||1,m[4]||0,m[5]||0,m[6]||0,b)}}return new Date(s)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return w},a.isValid=function(){return this.$d.toString()!==k},a.isSame=function(n,l){var s=_(n);return this.startOf(l)<=s&&s<=this.endOf(l)},a.isAfter=function(n,l){return _(n)<this.startOf(l)},a.isBefore=function(n,l){return this.endOf(l)<_(n)},a.$g=function(n,l,s){return w.u(n)?this[l]:this.set(s,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,l){var s=this,f=!!w.u(l)||l,m=w.p(n),y=function(q,I){var E=w.w(s.$u?Date.UTC(s.$y,I,q):new Date(s.$y,I,q),s);return f?E:E.endOf(h)},b=function(q,I){return w.w(s.toDate()[q].apply(s.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(I)),s)},M=this.$W,S=this.$M,N=this.$D,G="set"+(this.$u?"UTC":"");switch(m){case T:return f?y(1,0):y(31,11);case x:return f?y(1,S):y(0,S+1);case v:var V=this.$locale().weekStart||0,te=(M<V?M+7:M)-V;return y(f?N-te:N+(6-te),S);case h:case D:return b(G+"Hours",0);case g:return b(G+"Minutes",1);case d:return b(G+"Seconds",2);case c:return b(G+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,l){var s,f=w.p(n),m="set"+(this.$u?"UTC":""),y=(s={},s[h]=m+"Date",s[D]=m+"Date",s[x]=m+"Month",s[T]=m+"FullYear",s[g]=m+"Hours",s[d]=m+"Minutes",s[c]=m+"Seconds",s[r]=m+"Milliseconds",s)[f],b=f===h?this.$D+(l-this.$W):l;if(f===x||f===T){var M=this.clone().set(D,1);M.$d[y](b),M.init(),this.$d=M.set(D,Math.min(this.$D,M.daysInMonth())).$d}else y&&this.$d[y](b);return this.init(),this},a.set=function(n,l){return this.clone().$set(n,l)},a.get=function(n){return this[w.p(n)]()},a.add=function(n,l){var s,f=this;n=Number(n);var m=w.p(l),y=function(S){var N=_(f);return w.w(N.date(N.date()+Math.round(S*n)),f)};if(m===x)return this.set(x,this.$M+n);if(m===T)return this.set(T,this.$y+n);if(m===h)return y(1);if(m===v)return y(7);var b=(s={},s[d]=o,s[g]=u,s[c]=i,s)[m]||1,M=this.$d.getTime()+n*b;return w.w(M,this)},a.subtract=function(n,l){return this.add(-1*n,l)},a.format=function(n){var l=this,s=this.$locale();if(!this.isValid())return s.invalidDate||k;var f=n||"YYYY-MM-DDTHH:mm:ssZ",m=w.z(this),y=this.$H,b=this.$m,M=this.$M,S=s.weekdays,N=s.months,G=s.meridiem,V=function(I,E,ie,se){return I&&(I[E]||I(l,f))||ie[E].slice(0,se)},te=function(I){return w.s(y%12||12,I,"0")},q=G||function(I,E,ie){var se=I<12?"AM":"PM";return ie?se.toLowerCase():se};return f.replace(Q,function(I,E){return E||function(ie){switch(ie){case"YY":return String(l.$y).slice(-2);case"YYYY":return w.s(l.$y,4,"0");case"M":return M+1;case"MM":return w.s(M+1,2,"0");case"MMM":return V(s.monthsShort,M,N,3);case"MMMM":return V(N,M);case"D":return l.$D;case"DD":return w.s(l.$D,2,"0");case"d":return String(l.$W);case"dd":return V(s.weekdaysMin,l.$W,S,2);case"ddd":return V(s.weekdaysShort,l.$W,S,3);case"dddd":return S[l.$W];case"H":return String(y);case"HH":return w.s(y,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return q(y,b,!0);case"A":return q(y,b,!1);case"m":return String(b);case"mm":return w.s(b,2,"0");case"s":return String(l.$s);case"ss":return w.s(l.$s,2,"0");case"SSS":return w.s(l.$ms,3,"0");case"Z":return m}return null}(I)||m.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,l,s){var f,m=this,y=w.p(l),b=_(n),M=(b.utcOffset()-this.utcOffset())*o,S=this-b,N=function(){return w.m(m,b)};switch(y){case T:f=N()/12;break;case x:f=N();break;case R:f=N()/3;break;case v:f=(S-M)/6048e5;break;case h:f=(S-M)/864e5;break;case g:f=S/u;break;case d:f=S/o;break;case c:f=S/i;break;default:f=S}return s?f:w.a(f)},a.daysInMonth=function(){return this.endOf(x).$D},a.$locale=function(){return C[this.$L]},a.locale=function(n,l){if(!n)return this.$L;var s=this.clone(),f=ne(n,l,!0);return f&&(s.$L=f),s},a.clone=function(){return w.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},p}(),$e=oe.prototype;return _.prototype=$e,[["$ms",r],["$s",c],["$m",d],["$H",g],["$W",h],["$M",x],["$y",T],["$D",D]].forEach(function(p){$e[p[1]]=function(a){return this.$g(a,p[0],p[1])}}),_.extend=function(p,a){return p.$i||(p(a,oe,_),p.$i=!0),_},_.locale=ne,_.isDayjs=H,_.unix=function(p){return _(1e3*p)},_.en=C[A],_.Ls=C,_.p={},_})}(ce)),ce.exports}var Fe=je();const Z=he(Fe);var le={exports:{}},ke=le.exports,_e;function Ye(){return _e||(_e=1,function(e,t){(function(i,o){e.exports=o()})(ke,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var o=["th","st","nd","rd"],u=i%100;return"["+i+(o[(u-20)%10]||o[u]||o[0])+"]"}}})}(le)),le.exports}var Be=Ye();const Ee=he(Be);var de={exports:{}},Ue=de.exports,Me;function We(){return Me||(Me=1,function(e,t){(function(i,o){e.exports=o()})(Ue,function(){return function(i,o,u){i=i||{};var r=o.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(h,v,x,R){return r.fromToBase(h,v,x,R)}u.en.relativeTime=c,r.fromToBase=function(h,v,x,R,T){for(var D,k,U,Q=x.$locale().relativeTime||c,X=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ee=X.length,W=0;W<ee;W+=1){var A=X[W];A.d&&(D=R?u(h).diff(x,A.d,!0):x.diff(h,A.d,!0));var C=(i.rounding||Math.round)(Math.abs(D));if(U=D>0,C<=A.r||!A.r){C<=1&&W>0&&(A=X[W-1]);var P=Q[A.l];T&&(C=T(""+C)),k=typeof P=="string"?P.replace("%d",C):P(C,v,A.l,U);break}}if(v)return k;var H=U?Q.future:Q.past;return typeof H=="function"?H(k):H.replace("%s",k)},r.to=function(h,v){return d(h,v,this,!0)},r.from=function(h,v){return d(h,v,this)};var g=function(h){return h.$u?u.utc():u()};r.toNow=function(h){return this.to(g(this),h)},r.fromNow=function(h){return this.from(g(this),h)}}})}(de)),de.exports}var He=We();const Ve=he(He);var pe={exports:{}},qe=pe.exports,Oe;function ze(){return Oe||(Oe=1,function(e,t){(function(i,o){e.exports=o()})(qe,function(){return function(i,o,u){u.updateLocale=function(r,c){var d=u.Ls[r];if(d)return(c?Object.keys(c):[]).forEach(function(g){d[g]=c[g]}),d}}})}(pe)),pe.exports}var Je=ze();const Pe=he(Je);Z.extend(Ve);Z.extend(Pe);const Ge={...Ee,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},Ke=["January","February","March","April","May","June","July","August","September","October","November","December"];Z.locale("en-web3-modal",Ge);const ye={getMonthNameByIndex(e){return Ke[e]},getYear(e=new Date().toISOString()){return Z(e).year()},getRelativeDateFromNow(e){return Z(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return Z(e).format(t)}},Ze=3,Qe=["receive","deposit","borrow","claim"],Xe=["withdraw","repay","burn"],K={getTransactionGroupTitle(e,t){const i=ye.getYear(),o=ye.getMonthNameByIndex(t);return e===i?o:`${o} ${e}`},getTransactionImages(e){const[t,i]=e,o=!!t&&(e==null?void 0:e.every(c=>!!c.nft_info)),u=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!o?[this.getTransactionImage(i),this.getTransactionImage(t)]:u?e.map(c=>this.getTransactionImage(c)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:K.getTransactionTransferTokenType(e),url:K.getTransactionImageURL(e)}},getTransactionImageURL(e){var u,r,c,d,g;let t;const i=!!(e!=null&&e.nft_info),o=!!(e!=null&&e.fungible_info);return e&&i?t=(c=(r=(u=e==null?void 0:e.nft_info)==null?void 0:u.content)==null?void 0:r.preview)==null?void 0:c.url:e&&o&&(t=(g=(d=e==null?void 0:e.fungible_info)==null?void 0:d.icon)==null?void 0:g.url),t},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return"FUNGIBLE";if(e!=null&&e.nft_info)return"NFT"},getTransactionDescriptions(e){var x,R,T;const t=(x=e==null?void 0:e.metadata)==null?void 0:x.operationType,i=e==null?void 0:e.transfers,o=((R=e==null?void 0:e.transfers)==null?void 0:R.length)>0,u=((T=e==null?void 0:e.transfers)==null?void 0:T.length)>1,r=o&&(i==null?void 0:i.every(D=>!!(D!=null&&D.fungible_info))),[c,d]=i;let g=this.getTransferDescription(c),h=this.getTransferDescription(d);if(!o)return(t==="send"||t==="receive")&&r?(g=be.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=be.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[g,h]):[e.metadata.status];if(u)return i.map(D=>this.getTransferDescription(D)).reverse();let v="";return Qe.includes(t)?v="+":Xe.includes(t)&&(v="-"),g=v.concat(g),[g]},getTransferDescription(e){var i;let t="";return e&&(e!=null&&e.nft_info?t=((i=e==null?void 0:e.nft_info)==null?void 0:i.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var o;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(o=e==null?void 0:e.fungible_info)==null?void 0:o.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(Ze):null}};var xe;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(xe||(xe={}));const et=fe`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var z=function(e,t,i,o){var u=arguments.length,r=u<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(r=(u<3?c(r):u>3?c(t,i,r):c(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r};let Y=class extends me{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,i]=this.images,o=(t==null?void 0:t.type)==="NFT",u=i!=null&&i.url?i.type==="NFT":o,r=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",c=u?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${c};
    `,$`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images,o=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||i!=null&&i.url)?$`<div class="swap-images-container">
        ${t!=null&&t.url?$`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?$`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?$`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:o==="NFT"?$`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:$`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?$`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${i}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Y.styles=[et];z([O()],Y.prototype,"type",void 0);z([O()],Y.prototype,"status",void 0);z([O()],Y.prototype,"direction",void 0);z([O({type:Boolean})],Y.prototype,"onlyDirectionIcon",void 0);z([O({type:Array})],Y.prototype,"images",void 0);z([O({type:Object})],Y.prototype,"secondImage",void 0);Y=z([ge("wui-transaction-visual")],Y);const tt=fe`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var F=function(e,t,i,o){var u=arguments.length,r=u<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(r=(u<3?c(r):u>3?c(t,i,r):c(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r};let L=class extends me{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return $`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${De(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${De(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${xe[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[0];return t?$`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[1];return t?$`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};L.styles=[Se,tt];F([O()],L.prototype,"type",void 0);F([O({type:Array})],L.prototype,"descriptions",void 0);F([O()],L.prototype,"date",void 0);F([O({type:Boolean})],L.prototype,"onlyDirectionIcon",void 0);F([O()],L.prototype,"status",void 0);F([O()],L.prototype,"direction",void 0);F([O({type:Array})],L.prototype,"images",void 0);F([O({type:Array})],L.prototype,"price",void 0);F([O({type:Array})],L.prototype,"amount",void 0);F([O({type:Array})],L.prototype,"symbol",void 0);L=F([ge("wui-transaction-list-item")],L);const it=fe`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var rt=function(e,t,i,o){var u=arguments.length,r=u<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(r=(u<3?c(r):u>3?c(t,i,r):c(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r};let ve=class extends me{render(){return $`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ve.styles=[Se,it];ve=rt([ge("wui-transaction-list-item-loader")],ve);const nt=fe`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var J=function(e,t,i,o){var u=arguments.length,r=u<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(r=(u<3?c(r):u>3?c(t,i,r):c(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r};const ue="last-transaction",ot=7;let B=class extends me{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=ae.state.activeCaipAddress,this.transactionsByYear=j.state.transactionsByYear,this.loading=j.state.loading,this.empty=j.state.empty,this.next=j.state.next,j.clearCursor(),this.unsubscribe.push(ae.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(j.resetTransactions(),j.fetchTransactions(t)),this.caipAddress=t}),ae.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),j.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return $` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){j.resetTransactions(),this.caipAddress&&j.fetchTransactions(we.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),u=new Array(12).fill(null).map((r,c)=>{var h;const d=K.getTransactionGroupTitle(o,c),g=(h=this.transactionsByYear[o])==null?void 0:h[c];return{groupTitle:d,transactions:g}}).filter(({transactions:r})=>r).reverse();return u.map(({groupTitle:r,transactions:c},d)=>{const g=d===u.length-1;return c?$`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${g?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${r}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(c,g)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:o,descriptions:u,direction:r,isAllNFT:c,images:d,status:g,transfers:h,type:v}=this.getTransactionListItemProps(t),x=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!c?$`
        <wui-transaction-list-item
          date=${o}
          .direction=${r}
          id=${i&&this.next?ue:""}
          status=${g}
          type=${v}
          .images=${d}
          .descriptions=${u}
        ></wui-transaction-list-item>
      `:x?h.map((T,D)=>{const k=K.getTransferDescription(T),U=i&&D===h.length-1;return $` <wui-transaction-list-item
          date=${o}
          direction=${T.direction}
          id=${U&&this.next?ue:""}
          status=${g}
          type=${v}
          .onlyDirectionIcon=${!0}
          .images=${[d[D]]}
          .descriptions=${[k]}
        ></wui-transaction-list-item>`}):$`
      <wui-transaction-list-item
        date=${o}
        .direction=${r}
        id=${i&&this.next?ue:""}
        status=${g}
        type=${v}
        .images=${d}
        .descriptions=${u}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((o,u)=>{const r=i&&u===t.length-1;return $`${this.templateRenderTransaction(o,r)}`})}emptyStateActivity(){return $`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return $`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?$`${this.emptyStateAccount()}`:$`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(ot).fill($` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){Ae.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=Ce.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(j.fetchTransactions(we.getPlainAddress(this.caipAddress)),Ie.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:we.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:Re(ae.state.activeChain)===Le.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,o,u;(i=this.paginationObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${ue}`);t&&((u=this.paginationObserver)==null||u.observe(t))}getTransactionListItemProps(t){var g,h,v,x,R;const i=ye.formatDate((g=t==null?void 0:t.metadata)==null?void 0:g.minedAt),o=K.getTransactionDescriptions(t),u=t==null?void 0:t.transfers,r=(h=t==null?void 0:t.transfers)==null?void 0:h[0],c=!!r&&((v=t==null?void 0:t.transfers)==null?void 0:v.every(T=>!!T.nft_info)),d=K.getTransactionImages(u);return{date:i,direction:r==null?void 0:r.direction,descriptions:o,isAllNFT:c,images:d,status:(x=t.metadata)==null?void 0:x.status,transfers:u,type:(R=t.metadata)==null?void 0:R.operationType}}};B.styles=nt;J([O()],B.prototype,"page",void 0);J([re()],B.prototype,"caipAddress",void 0);J([re()],B.prototype,"transactionsByYear",void 0);J([re()],B.prototype,"loading",void 0);J([re()],B.prototype,"empty",void 0);J([re()],B.prototype,"next",void 0);B=J([ge("w3m-activity-list")],B);
