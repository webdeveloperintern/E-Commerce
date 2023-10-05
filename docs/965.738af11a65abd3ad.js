"use strict";(self.webpackChunkKMR_web=self.webpackChunkKMR_web||[]).push([[965],{5965:(R,m,n)=>{n.r(m),n.d(m,{HomeModule:()=>D});var w=n(6814),u=n(2058),e=n(5879),h=n(3680),c=n(2495),T=n(9388);const p=["*"];class S{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const i=Math.max(...this.tracker);return i>1?this.rowCount+i-1:this.rowCount}update(i,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(i),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(r=>this._trackTile(r))}_trackTile(i){const t=this._findMatchingGap(i.colspan);return this._markTilePosition(t,i),this.columnIndex=t+i.colspan,new M(this.rowIndex,t)}_findMatchingGap(i){let t=-1,r=-1;do{this.columnIndex+i>this.tracker.length?(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(t)):(t=this.tracker.indexOf(0,this.columnIndex),-1!=t?(r=this._findGapEndIndex(t),this.columnIndex=t+1):(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(t)))}while(r-t<i||0==r);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let i=0;i<this.tracker.length;i++)this.tracker[i]=Math.max(0,this.tracker[i]-1)}_findGapEndIndex(i){for(let t=i+1;t<this.tracker.length;t++)if(0!=this.tracker[t])return t;return this.tracker.length}_markTilePosition(i,t){for(let r=0;r<t.colspan;r++)this.tracker[i+r]=t.rowspan}}class M{constructor(i,t){this.row=i,this.col=t}}const f=new e.OlP("MAT_GRID_LIST");let _=(()=>{class s{constructor(t,r){this._element=t,this._gridList=r,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,c.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,c.su)(t))}_setStyle(t,r){this._element.nativeElement.style[t]=r}static#t=this.\u0275fac=function(r){return new(r||s)(e.Y36(e.SBq),e.Y36(f,8))};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,a){2&r&&e.uIk("rowspan",a.rowspan)("colspan",a.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:p,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,a){1&r&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return s})();const b=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class g{constructor(){this._rows=0,this._rowspan=0}init(i,t,r,a){this._gutterSize=y(i),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=r,this._direction=a}getBaseTileSize(i,t){return`(${i}% - (${this._gutterSize} * ${t}))`}getTilePosition(i,t){return 0===t?"0":l(`(${i} + ${this._gutterSize}) * ${t}`)}getTileSize(i,t){return`(${i} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(i,t,r){let a=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(i,r,a,o),this.setRowStyles(i,t,a,o)}setColStyles(i,t,r,a){let o=this.getBaseTileSize(r,a);i._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(o,t)),i._setStyle("width",l(this.getTileSize(o,i.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(i){return`${this._rowspan} * ${this.getTileSize(i,1)}`}getComputedHeight(){return null}}class C extends g{constructor(i){super(),this.fixedRowHeight=i}init(i,t,r,a){super.init(i,t,r,a),this.fixedRowHeight=y(this.fixedRowHeight),b.test(this.fixedRowHeight)}setRowStyles(i,t){i._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),i._setStyle("height",l(this.getTileSize(this.fixedRowHeight,i.rowspan)))}getComputedHeight(){return["height",l(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["height",null]),i._tiles&&i._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class z extends g{constructor(i){super(),this._parseRatio(i)}setRowStyles(i,t,r,a){this.baseTileHeight=this.getBaseTileSize(r/this.rowHeightRatio,a),i._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),i._setStyle("paddingTop",l(this.getTileSize(this.baseTileHeight,i.rowspan)))}getComputedHeight(){return["paddingBottom",l(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["paddingBottom",null]),i._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(i){const t=i.split(":");this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}}class G extends g{setRowStyles(i,t){let o=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);i._setStyle("top",this.getTilePosition(o,t)),i._setStyle("height",l(this.getTileSize(o,i.rowspan)))}reset(i){i._tiles&&i._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function l(s){return`calc(${s})`}function y(s){return s.match(/([A-Za-z%]+)$/)?s:`${s}px`}let A=(()=>{class s{constructor(t,r){this._element=t,this._dir=r,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,c.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const r=`${t??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new G:t&&t.indexOf(":")>-1?new z(t):new C(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new S);const t=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),a=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,t,this.cols,a),r.forEach((o,d)=>{const x=t.positions[d];this._tileStyler.setStyle(o,x.row,x.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static#t=this.\u0275fac=function(r){return new(r||s)(e.Y36(e.SBq),e.Y36(T.Is,8))};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["mat-grid-list"]],contentQueries:function(r,a,o){if(1&r&&e.Suo(o,_,5),2&r){let d;e.iGM(d=e.CRH())&&(a._tiles=d)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,a){2&r&&e.uIk("cols",a.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[e._Bn([{provide:f,useExisting:s}])],ngContentSelectors:p,decls:2,vars:0,template:function(r,a){1&r&&(e.F$t(),e.TgZ(0,"div"),e.Hsn(1),e.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return s})(),I=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[h.uc,h.BQ,h.uc,h.BQ]})}return s})();const Z=[{path:"",redirectTo:"shop/home",pathMatch:"full"},{path:"shop/home",component:(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["gadgethome"]],decls:37,vars:1,consts:[[1,"home"],["id","carouselExampleIndicators",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","../../../assets/banner2.jpg","alt","...",1,"d-block","w-100"],[1,"carousel-item"],["src","../../../assets/images.jpeg","alt","...",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[2,"margin","1%"],["cols","4","rowHeight",".5:.4",3,"gutterSize"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"button",3)(4,"button",4)(5,"button",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7),e._UZ(8,"img",8),e.qZA(),e.TgZ(9,"div",9),e._UZ(10,"img",10),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"img",8),e.qZA()(),e.TgZ(13,"button",11),e._UZ(14,"span",12),e.TgZ(15,"span",13),e._uU(16,"Previous"),e.qZA()(),e.TgZ(17,"button",14),e._UZ(18,"span",15),e.TgZ(19,"span",13),e._uU(20,"Next"),e.qZA()()(),e.TgZ(21,"div",16)(22,"mat-grid-list",17)(23,"mat-grid-tile"),e._uU(24,"1"),e.qZA(),e.TgZ(25,"mat-grid-tile"),e._uU(26,"2"),e.qZA(),e.TgZ(27,"mat-grid-tile"),e._uU(28,"3"),e.qZA(),e.TgZ(29,"mat-grid-tile"),e._uU(30,"4"),e.qZA(),e.TgZ(31,"mat-grid-tile"),e._uU(32,"5"),e.qZA(),e.TgZ(33,"mat-grid-tile"),e._uU(34,"6"),e.qZA(),e.TgZ(35,"mat-grid-tile"),e._uU(36,"6"),e.qZA()()()()),2&r&&(e.xp6(22),e.Q6J("gutterSize","10px"))},dependencies:[A,_],styles:["mat-grid-tile[_ngcontent-%COMP%]{background:lightblue}.home[_ngcontent-%COMP%]{margin-top:5%}"]})}return s})()}];let k=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(Z),u.Bz]})}return s})(),D=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[w.ez,k,I]})}return s})()}}]);