"use strict";(self.webpackChunkKMR_web=self.webpackChunkKMR_web||[]).push([[965],{5965:(j,m,n)=>{n.r(m),n.d(m,{HomeModule:()=>$});var p=n(2058),i=n(5879),g=n(3680),c=n(2495),S=n(9388);const u=["*"];class T{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(r=>this._trackTile(r))}_trackTile(e){const t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new M(this.rowIndex,t)}_findMatchingGap(e){let t=-1,r=-1;do{this.columnIndex+e>this.tracker.length?(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(t)):(t=this.tracker.indexOf(0,this.columnIndex),-1!=t?(r=this._findGapEndIndex(t),this.columnIndex=t+1):(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(t)))}while(r-t<e||0==r);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(0!=this.tracker[t])return t;return this.tracker.length}_markTilePosition(e,t){for(let r=0;r<t.colspan;r++)this.tracker[e+r]=t.rowspan}}class M{constructor(e,t){this.row=e,this.col=t}}const f=new i.OlP("MAT_GRID_LIST");let x=(()=>{class s{constructor(t,r){this._element=t,this._gridList=r,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,c.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,c.su)(t))}_setStyle(t,r){this._element.nativeElement.style[t]=r}static#t=this.\u0275fac=function(r){return new(r||s)(i.Y36(i.SBq),i.Y36(f,8))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,a){2&r&&i.uIk("rowspan",a.rowspan)("colspan",a.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:u,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,a){1&r&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return s})();const b=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class h{constructor(){this._rows=0,this._rowspan=0}init(e,t,r,a){this._gutterSize=y(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=r,this._direction=a}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return 0===t?"0":l(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,r){let a=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,r,a,o),this.setRowStyles(e,t,a,o)}setColStyles(e,t,r,a){let o=this.getBaseTileSize(r,a);e._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(o,t)),e._setStyle("width",l(this.getTileSize(o,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}}class C extends h{constructor(e){super(),this.fixedRowHeight=e}init(e,t,r,a){super.init(e,t,r,a),this.fixedRowHeight=y(this.fixedRowHeight),b.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",l(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",l(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class z extends h{constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,r,a){this.baseTileHeight=this.getBaseTileSize(r/this.rowHeightRatio,a),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",l(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",l(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){const t=e.split(":");this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}}class k extends h{setRowStyles(e,t){let o=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);e._setStyle("top",this.getTilePosition(o,t)),e._setStyle("height",l(this.getTileSize(o,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function l(s){return`calc(${s})`}function y(s){return s.match(/([A-Za-z%]+)$/)?s:`${s}px`}let H=(()=>{class s{constructor(t,r){this._element=t,this._dir=r,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,c.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const r=`${t??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new k:t&&t.indexOf(":")>-1?new z(t):new C(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new T);const t=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),a=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,t,this.cols,a),r.forEach((o,d)=>{const w=t.positions[d];this._tileStyler.setStyle(o,w.row,w.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static#t=this.\u0275fac=function(r){return new(r||s)(i.Y36(i.SBq),i.Y36(S.Is,8))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["mat-grid-list"]],contentQueries:function(r,a,o){if(1&r&&i.Suo(o,x,5),2&r){let d;i.iGM(d=i.CRH())&&(a._tiles=d)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,a){2&r&&i.uIk("cols",a.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[i._Bn([{provide:f,useExisting:s}])],ngContentSelectors:u,decls:2,vars:0,template:function(r,a){1&r&&(i.F$t(),i.TgZ(0,"div"),i.Hsn(1),i.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return s})(),I=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[g.uc,g.BQ,g.uc,g.BQ]})}return s})();var _=n(6814);function A(s,e){if(1&s&&(i.TgZ(0,"mat-grid-tile")(1,"div",20),i._UZ(2,"img",21),i.qZA(),i.TgZ(3,"div")(4,"label"),i._uU(5),i.qZA()()()),2&s){const t=e.$implicit;i.xp6(2),i.s9C("src",t.src,i.LSH),i.xp6(3),i.Oqu(t.name)}}const Z=[{path:"",redirectTo:"store/home",pathMatch:"full"},{path:"store/home",component:(()=>{class s{constructor(){this.products=[{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"},{src:"https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",name:"SonyCamera"}]}static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["gadgethome"]],decls:24,vars:2,consts:[[1,"home"],["id","carouselExampleIndicators",1,"carousel","slide","img","container-fill"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","https://cdn.cloudflare.steamstatic.com/steam/apps/2409500/header.jpg?t=1695653021","alt","...",1,"d-block","w-100"],[1,"carousel-item"],["src","assets/images.jpeg","alt","...",1,"d-block","w-100"],["src","assets/banner2.jpg","alt","...",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"Product"],["cols","4","rowHeight",".9:.9",3,"gutterSize"],[4,"ngFor","ngForOf"],[2,"height","60%","width","100%","padding","5px"],["alt","mom","srcset","",2,"height","100%","width","100%","object-fit","cover",3,"src"]],template:function(r,a){1&r&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2),i._UZ(3,"button",3)(4,"button",4)(5,"button",5),i.qZA(),i.TgZ(6,"div",6)(7,"div",7),i._UZ(8,"img",8),i.qZA(),i.TgZ(9,"div",9),i._UZ(10,"img",10),i.qZA(),i.TgZ(11,"div",9),i._UZ(12,"img",11),i.qZA()(),i.TgZ(13,"button",12),i._UZ(14,"span",13),i.TgZ(15,"span",14),i._uU(16,"Previous"),i.qZA()(),i.TgZ(17,"button",15),i._UZ(18,"span",16),i.TgZ(19,"span",14),i._uU(20,"Next"),i.qZA()()(),i.TgZ(21,"div",17)(22,"mat-grid-list",18),i.YNc(23,A,6,2,"mat-grid-tile",19),i.qZA()()()),2&r&&(i.xp6(22),i.Q6J("gutterSize","10px"),i.xp6(1),i.Q6J("ngForOf",a.products))},dependencies:[H,x,_.sg],styles:["mat-grid-tile[_ngcontent-%COMP%]{background:lightblue}.Product[_ngcontent-%COMP%]{padding:10px 5px}.home[_ngcontent-%COMP%]{padding-top:70px}[_nghost-%COMP%]     .mat-grid-tile-content{align-items:baseline;justify-content:start;flex-direction:column}"]})}return s})()}];let D=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[p.Bz.forChild(Z),p.Bz]})}return s})(),$=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[D,I,_.ez]})}return s})()}}]);