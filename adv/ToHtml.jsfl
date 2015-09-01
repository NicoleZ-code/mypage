//nameByLayerName();fl.outputPanel.clear();var lib=fl.getDocumentDOM().library;var DOM=fl.getDocumentDOM();
var animations={};


var exportDraw=true;//confirm('Export Draw?');

for(var i in lib.items)
{
	var itemName=lib.items[i].name;
	//itemName='1280x99_Main_animation';
	if(itemName.indexOf('_all')>0)
	{
		var animationName=itemName.replace('_all','');
		if(!animations[animationName]) animations[animationName]=[];
		animations[animationName].push(itemName);
	}
}

for(var i in lib.items)
{
	var itemName=lib.items[i].name;
	//itemName='1280x99_Main_animation';
	if(itemName.indexOf('_animation')>0)
	{
		var animationName=itemName.substr(itemName.indexOf('_')).replace('_animation','').replace('_','');
		if(animations[animationName]&&animations[animationName][0]==animationName+'_all') animations[animationName]=null;
		if(!animations[animationName]) animations[animationName]=[];
		
		animations[animationName].push(itemName);
		animations[animationName]=sort(animations[animationName]);
	}
}



function sort(a)
{
	if(!a||a.length==0) return [];
	var temp=[];
	var suffix=String(a[0]).substr(a[0].indexOf('x'),a[0].length);
	for(var i in a)
	{
		temp[i]=parseInt(String(a[i]).substr(0,a[i].indexOf('x')));
	}
	temp.sort(function compare(a,b){return b-a;});
	for(var i in a)
	{
		
		temp[i]=temp[i]+suffix;
	}
	return temp;
}var url=fl.getDocumentDOM().pathURI.replace(document.name,'')+'creative';	var output='\t\nfps='+document.frameRate+';\n';var layouts='layouts=[';var layoutIndex=0;var layerNames={};var layerNameString='layerNames=['var layerNameIndex=0;var eases={};var easeString='eases=[null,';var easeIndex=1;var clicks={};var isLeaveBehind;
var svgString="";
var imageUrls={};var imageMatrixInfo='imageInfos=[';var imageNameIndex=0;var imageNameDic={};var imageMatrixLoged={};

var sequenceString='';
var hasSequence={};

var currentWidth=0;var currentHeight=0;
var currentAnimation='';var videoPlaceHolderName='video';var customCSS='';var jsString='';var divString='';var divAdded={};var masks={};var totalFrame=0;

var divs={};if(url){
	scanSequence();	scanDraw();	scanImage(true);		isLeaveBehind=false;
	for(var i in animations)
	{
		currentAnimation=currentLayout=i;
		currentLayout=currentLayout+'_all';
		convert();
		var animation=animations[i];
		jsString+='\nanimationData["'+currentAnimation+'"]=[0,'
		for(var j in animation)
		{	
			
			currentLayout=animation[j];
			jsString+=convert(currentLayout.substr(0,currentLayout.indexOf('x')));
			layoutIndex+=1;
		}
		jsString=removeLastComma(jsString);
		jsString+='];';
		
	}
	currentLayout='interactive';
	convert();	
	
		document.exitEditMode();	output+='\t'+removeLastComma(imageMatrixInfo)+'];\n';
	output+='\t'+sequenceString+'\n';
	output+='\t'+svgString+'\n';	output+='\t'+removeLastComma(layerNameString)+'];\n';	output+='\t'+removeLastComma(easeString)+'];\n';	output+='\ttotalFrame='+totalFrame+';\n';	output+='\tvideoPlaceHolderName="'+videoPlaceHolderName+'";\n';	output+=jsString;	output+='\n\tinitTimeLine();\n';		var blankHtml= FLfile.read(url+"/index_blank.html");	var otherDivs='';
	for(var i in divs)
	{
		divString='<div class="'+i+'">\n';
		divString+=divs[i];
		divString+='</div>\n';
		if(blankHtml.indexOf('<!--'+i+'GoesHere-->')>0)
			blankHtml=blankHtml.replace('<!--'+i+'GoesHere-->',divString);
		else otherDivs+=divString;
		//trace(allDivs);
	}		blankHtml=blankHtml.replace('<!--divGoesHere-->',otherDivs);
		blankHtml=blankHtml.replace('<!--jsGoesHere-->','<script>'+output+'</script>');	blankHtml=blankHtml.replace('<!--CSSGoesHere-->','<style type="text/css">'+customCSS+'</style>');	FLfile.write(url+"/index.html", blankHtml);	var size=FLfile.getSize(url+"/index.html")	trace('convert complete! html file size = '+size/1000+'k')}function fixClick(str){	for(var i in clicks)	{		while(str.indexOf('CLICK'+i)>0)		{			str=str.replace('CLICK'+i,clicks[i]?' data-'+clicks[i]:'');		}	}	return str;}
function reservedItem(name)
{
	if(name.indexOf('animation')>=0) return true;
	if(name.indexOf('layout')>=0) return true;
	if(name.indexOf('interactive')>=0) return true;
	if(name.indexOf('leavebehind')>=0) return true;
	if(name.indexOf('_all')>=0) return true;
	if(name.indexOf('_not')>=0) return true;
	if(name.indexOf('_no')>=0) return true;
}function scanDraw(){
	for(var i in fl.getDocumentDOM().library.items)	{		var libItem = fl.getDocumentDOM().library.items[i];
		if(reservedItem(libItem.name)) continue;
		if(libItem.name.indexOf(''))continue;		if(libItem.itemType!='movie clip') continue;			
		var tl=libItem.timeline;
		var layers=tl.layers;
	
		
		//if(layers[0].frames.length>1) continue;		while((layers[0].frames[0].elements.length<0)&&(layers.length>1))
		{
			tl.deleteLayer(0);
		}
		if(!layers[0].frames[0].elements[0]) continue;
		//if(!layers[0].frames[0].elements[0]) continue;
		
		var eleNum=0;
		var frameLength=0;
		for(var l in layers)
		{
			layers[l].locked=false;
			layers[l].visible=true;
			eleNum+=layers[l].frames[0].elements.length;
			if(frameLength<layers[l].frames.length)frameLength=layers[l].frames.length;
		}		var et=layers[0].frames[0].elements[0].elementType;
		
		if(eleNum>1||frameLength>1||et=='shape'|| et=='shapeObj'||et=='text')		{
			
			trace('export draw:'+libItem.name)
						var name=libItem.name;			lib.deleteItem(name+' copy');			lib.duplicateItem(name);			lib.editItem(name+' copy');
			
			
			
						if(fl.getDocumentDOM().getTimeline().layers[0].name=='svg') svgString+="svgs['"+name+"']='"+exportSVG(name+' copy')+"'\n";
						var bmpName=getLastBitmap();						/*try{
			document.breakApart();
			document.selectAll();
			document.clipCut();
			document.clipPaste(true);
			}
			catch(e)
			{
				
			}
			
			document.selectAll();			while(document.selection.length>1||(document.selection[0]&&document.selection[0].elementType!='shape'))			{
				
				try{
					document.breakApart();
					document.selectAll();
					document.clipCut();
					document.clipPaste(true);
				}				catch(e)
				{
					break;
				}
				
							}*/
			
			
			document.selectAll();			document.convertSelectionToBitmap();						try{
				
								var bmp=fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
				
				imageMatrixLoged[name]=true;								imageNameDic[name]=imageNameIndex;				var offset='{x:'+percent(bmp.x/bmp.width)+',y:'+percent(bmp.y/bmp.height)+',w:'+int(bmp.width)+',h:'+int(bmp.height)+'},';								//document.exitEditMode();				imageMatrixInfo+=offset;				imageNameIndex++;			}			catch(e)			{				trace('error!!!!!!!!!!')				//offset='{x:0,y:0,w:1,h:1}';			}												lib.selectItem(bmpName);			lib.deleteItem(name+'.png');			lib.renameItem(name+'.png');			lib.deleteItem(name+' copy');
			
			if(exportDraw&&bmp.libraryItem.exportToFile)bmp.libraryItem.exportToFile(url+'/img/'+name+'.png',100);
			document.exitEditMode();		}			}}

function scanSequence()
{
	for(var i in fl.getDocumentDOM().library.items)
	{
		var libItem = fl.getDocumentDOM().library.items[i];
		if(libItem.itemType!='movie clip') continue;
		if(reservedItem(libItem.name)) continue;
		
		if(libItem.timeline.frameCount==1) 
		{
			continue;
		}
		
		var exporter = new SpriteSheetExporter;
		var imageName=fixImageName(libItem.name);
		trace('export seq:'+imageName);
		if(imageName=='gallery_pic_in')fl.getDocumentDOM().setStageVanishPoint({x:150, y:125});
		else fl.getDocumentDOM().setStageVanishPoint({x:-150, y:125});
		
		
		
		imageName='SEQ'+imageName;
		
		
		exporter.addSymbol(libItem)
		
		exporter.layoutFormat = "Starling";
		exporter.stackDuplicateFrames = true;
		exporter.allowRotate = false;
		exporter.shapePadding=10;
		exporter.allowTrimming = false;
		fl.trace(url+'/img/'+imageName);
		var s=exporter.exportSpriteSheet(url+'/img/'+imageName,{format:"png", bitDepth:32,backgroundColor:"#00000000"});
		imageUrls[imageName]=imageName+'.png';

		var str2 =String(s.replace('<?xml version="1.0" encoding="UTF-16"?>',''));
		str2 =String(str2.replace('<?xml version="1.0" encoding="utf-8"?>',''));
		var myXML=XML(str2);
		var l=myXML.children().length();
		var minWidth=0;
		var minHeight=0;
		hasSequence[imageName]=true;
		sequenceString+='\n\tseqs["'+imageName.replace('SEQ','')+'"]=['
		
		sequenceString+='['+myXML.SubTexture[0].@x+','+myXML.SubTexture[0].@y+','+myXML.SubTexture[0].@width+','+myXML.SubTexture[0].@height+','+myXML.SubTexture[0].@pivotX+','+myXML.SubTexture[0].@pivotY+'],';
		minWidth=parseInt(myXML.SubTexture[0].@x+myXML.SubTexture[0].@width);
		minHeight=parseInt(myXML.SubTexture[0].@y+myXML.SubTexture[0].@height);
		for(var i=1;i<l;i++)
		{
			sequenceString+='['+myXML.SubTexture[i].@x+','+myXML.SubTexture[i].@y+','+myXML.SubTexture[i].@width+','+myXML.SubTexture[i].@height+'],';
			minWidth=Math.max(minWidth,parseInt(myXML.SubTexture[i].@x)+parseInt(myXML.SubTexture[i].@width));
			minHeight=Math.max(minHeight,parseInt(myXML.SubTexture[i].@y)+parseInt(myXML.SubTexture[i].@height));
			
		}
		sequenceString+=']';
		sequenceString=sequenceString.replace(',]',']');
		
		
		exporter = new SpriteSheetExporter;
		
		exporter.addSymbol(libItem)
		exporter.layoutFormat = "Starling";
		exporter.stackDuplicateFrames = true;
		exporter.allowRotate = false;
		exporter.canTrim =false;
		exporter.shapePadding=10;
		exporter.autoSize=false;
		exporter.sheetHeight=minHeight;
		exporter.sheetWidth=minWidth;
		exporter.allowTrimming = false;
		exporter.exportSpriteSheet(url+'/img/'+imageName,{format:"png", bitDepth:32,backgroundColor:"#00000000"});
		FLfile.remove(url+'/img/'+imageName+'.xml');
		
		
		var bmp=fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
		
		imageMatrixLoged[imageName]=true;
		imageNameDic[imageName]=imageNameIndex;
		//var offset='{x:0,y:0'+',w:0'+myXML.SubTexture[0].@frameWidth+',h:0'+myXML.SubTexture[0].@frameHeight+'},';
		//var offset='{x:0,y:0,w:0,h:0},';
		var offset='{x:0,y:0,w:'+minWidth+',h:'+minHeight+'},';
		//document.exitEditMode();
		imageMatrixInfo+=offset;
		imageNameIndex++;
		
	}
}
function getLastBitmap(){	var n=1;	while(lib.itemExists('Bitmap '+n)) n++;	return 'Bitmap '+n; }function fixImageName(imageName)
{
	
	while(imageName.indexOf(' ')>0)
	{
		imageName=imageName.replace(' ','_');
	}
	while(imageName.indexOf('-')>0)
	{
		imageName=imageName.replace('-','_');
	}
	return imageName;
}function scanImage(importToFile){
	for(var i in fl.getDocumentDOM().library.items)	{		var libItem = fl.getDocumentDOM().library.items[i];		if(libItem.itemType=='bitmap')		{			var name=libItem.name;			name=name.replace('.png','');			name=name.replace('.jpg','');						var imageName=fixImageName(libItem.name);			imageUrls[name]=imageName;
			if(importToFile&&!hasSequence[name]) libItem.exportToFile(url+'/img/'+imageName,100);			imageName=imageName.replace('.png','002x.png');			imageName=imageName.replace('.jpg','002x.jpg');			if(FLfile.exists(url+'/img/'+imageName)||lib.itemExists(imageName))			{				imageUrls[name]=imageName;			}		}			}}/*trace('export image complete')*/function trace(a){	fl.trace(a);}function convert(size){
	
	trace('size:'+size);
	trace(currentLayout);	if(!lib.itemExists(currentLayout)) return;
	
	
	
	var tl=getItemTimeline(currentLayout);
	var layers=tl.layers;
		var fixLayerName = function(name){		if(clicks[name]&&clicks[name].length>0) return name;		if(name.indexOf('c=')>0)		{			var c=name.substring(name.indexOf('c='));			name=name.substring(0,name.indexOf('c=')-1);			clicks[name]=c;		}		else clicks[name]='';		return name;	}	//var fixLayerName = function(name){//		name=name.replace('.png','');//		name=name.replace('.jpg','');//		name = name.replace(/\s+/g,"");//		if(name && name.length > 0){//			 if(/^[_a-zA-Z]\w*$/.test(name)){//				 return name;//			 }else{//				 return null;//			 }//		}//		return null;//	}	var output='';	var line='';    var layerNameChecker={};			var queue = {};	var layerUrls={};	var framePros=['x','y','sx','sy','a'];	var lastElementFrames={};	var i, j;	var mask='';
	for(var j in layers){		var layer = layers[j];				if(layer.layerType=='guide') continue;		if(layer.layerType=='folder') continue;				if(layer.name=='as') continue;		/*{			for (i in layer.frames) {				if(layer.frames[i].name) trace(i,layer.frames[i].name);							}			trace('assss')			continue;		}*/		var layerName = fixLayerName(layer.name);
		
		layerName=currentAnimation+layerName;				if(layer.layerType!='masked') mask='';				if(layerNameChecker[layerName]) 		{			alert("Multiple layers with same name:"+layerName);			return;		}		layerNameChecker[layerName]=true;		if(layerName){			//layer.name = layerName;			var frames = layer.frames;			var frameCount = frames.length;			var frameElements;			var layerID;			var temp=[];			var libraryItemName;			var lastKeyFrameNotBlank=false;			var lastElementFrame=0;			if(totalFrame<frameCount) totalFrame=frameCount;			for (i = 0; i < frameCount; i ++) {												if (i == frames[i].startFrame){					frameElements = frames[i].elements;					if(frameElements.length > 1){						alert("Failed\n\nMultiple elements found on layer \"" +currentLayout+' '+ layer.name + "\" frame " + (i + 1) + ".");						return;					}else if(frameElements.length == 1){						layerID=layerName+(frameElements[0].libraryItem.name.indexOf('mobile')>0?' mobile':'');						layerUrls[layerID]=imageUrls[frameElements[0].libraryItem.name];
						if(!layerUrls[layerID]) layerUrls[layerID]=imageUrls['SEQ'+frameElements[0].libraryItem.name]						if(imageUrls[frameElements[0].libraryItem.name+'Hover'])						{							layerUrls[layerID+'Hover']=imageUrls[frameElements[0].libraryItem.name+'Hover'];						}						/*if(frameElements[0].libraryItem.name.indexOf('bg')==0)						{							frameElements[0].scaleX=1;							frameElements[0].x=0;						}*/						if(frameElements[0].elementType != "instance"){							alert("Failed:\n\n" + frameElements[0].elementType + " found on layer \"" + layer.name + "\" frame " + (i + 1) + ".");							return;						}else{							lastElementFrame=i;							lastKeyFrameNotBlank=true;							temp.push([i,frameElements[0],frames[i]]);						}											}else					{						if(lastKeyFrameNotBlank) lastElementFrame=i-1;						temp.push([i,null,frames[i]]);						lastKeyFrameNotBlank=false;					}				}											}			queue[layerID]=temp;			lastElementFrames[layerName]=lastKeyFrameNotBlank?frameCount-1:lastElementFrame;					}else{						alert("Failed:\n\nInvalid layer name \"" + currentLayout+' '+layer.name+' '+layoutIndex + "\"");			return;		}
		trace('layerID:'+layerID+' '+divAdded[layerID]);
				if(divAdded[layerID]==undefined) 		{			if(!divs[currentAnimation]) divs[currentAnimation]='';
			if(layerName==videoPlaceHolderName)				{				divs[currentAnimation]='\t\t\t\t\t\t<div class="'+layerID+'"><div id="video_container"><\/div><\/div>\n'+divs[currentAnimation];			}			else 			{				if(layerUrls[layerID+'Hover'])				{					divs[currentAnimation]='\t\t\t\t\t\t<div class="'+layerID+' preload over" '+(mask==''?'':(' data-m="'+mask+'"'))+' data-source="img/'+layerUrls[layerID+'Hover']+'"><\/div>\n'+divs[currentAnimation];					divs[currentAnimation]='\t\t\t\t\t\t<div class="'+layerID+' preload out"'+(mask==''?'':(' data-m="'+mask+'"'))+'  data-source="img/'+layerUrls[layerID]+'"><\/div>\n'+divs[currentAnimation];				}				else divs[currentAnimation]='\t\t\t\t\t\t<div class="'+layerID+' preload" '+(mask==''?'':(' data-m="'+mask+'"'))+' data-source="img/'+layerUrls[layerID]+'"><\/div>\n'+divs[currentAnimation];							}
			
			divAdded[layerID]=currentAnimation;					}				if(layer.layerType=='mask') mask=layerName;			}		var eleName;	for (var p in queue){				l = queue[p].length;		line='';		var lastFrame={};		var stableIndex=-1;		for(i = 0; i < l; i += 1){						line+=i>0?',':'';			var ele=queue[p][i][1];			var kf=queue[p][i][0];			var frame=queue[p][i][2];			if(!ele)			{				line+='['+kf+',,,,,0,]';				lastFrame={};			}else			{								ele.name = p;				eleName=ele.libraryItem.name;				var ease=[];				var easePoints=frame.getCustomEase();				if(easePoints.length>0)				{										for(var k=1;k<easePoints.length-1;k++)					{						ease.push(percent(easePoints[k].x));						ease.push(percent(easePoints[k].y));					}									}								ele.x=int(ele.x);				ele.y=int(ele.y);				if(ease.length>0) ease='['+ease+']';				else if(frame.tweenType!='none') ease='"lin"';								if(ease.length>0&&!eases[ease]){					eases[ease]=easeIndex;					easeString+=(''+ease+',');					easeIndex+=1;				}				if(ease.length>0)ease=','+eases[ease];				else ease=',';						line+='['+kf;								if(frame.tweenType=='none'&&stableIndex==-1) 				{					stableIndex=kf;					//layout[p]=stableIndex;					//fl.trace(p+' '+stableIndex+' '+ele.x+' '+ele.y+' '+ele.scaleY+' '+ele.scaleX+' '+ele.colorAlphaPercent);				}												if(lastFrame.x!=ele.x)			   	{					lastFrame.x=ele.x;				   	line+=','+lastFrame.x;				}else				{					line+=',';				}				if(lastFrame.y!=ele.y)			   	{					lastFrame.y=ele.y;				   	line+=','+lastFrame.y;				}else				{					line+=',';				}								if(lastFrame.scaleX!=percent(ele.scaleX))			   	{					lastFrame.scaleX=percent(ele.scaleX);				   	line+=','+lastFrame.scaleX;				}else				{					line+=',';				}								if(lastFrame.scaleY!=percent(ele.scaleY))			   	{					lastFrame.scaleY=percent(ele.scaleY);				   	line+=','+lastFrame.scaleY;				}else				{					line+=',';				}								if(lastFrame.a!=percent(ele.colorAlphaPercent/100))			   	{					lastFrame.a=percent(ele.colorAlphaPercent/100);				   	line+=','+lastFrame.a;				}else				{					line+=',';				}				var rotation=ele.rotation;
				
				if(isNaN(rotation))rotation=ele.skewX;
				if(lastFrame.rotation!=int(rotation))
			   	{
					lastFrame.rotation=int(rotation);
				   	line+=','+lastFrame.rotation;
				}else
				{
					line+=',';
				}								line+=ease;				   				   				line+=']';							}					}				if(eleName&&(imageMatrixLoged[eleName]==undefined))		{
			
			try{
								var bmp=getItemLayers(eleName)[0].frames[0].elements[0];				imageMatrixLoged[eleName]=true;				imageNameDic[eleName]=imageNameIndex;								var offset='{x:'+percent(bmp.x/bmp.width)+',y:'+percent(bmp.y/bmp.height)+',w:'+int(bmp.width)+',h:'+int(bmp.height)+'},';				if(eleName==videoPlaceHolderName)					{					customCSS+="#video_container {width:"+bmp.width+";height:"+bmp.height+"}";				}				imageMatrixInfo+=offset;				imageNameIndex++;			}			catch(e)			{				trace('error!!!!!!!!!!'+eleName)				//offset='{x:0,y:0,w:1,h:1}';			}					}		else		{			//trace('error??')			//offset='{x:0,y:0,w:1,h:1}';		}		p=(p.indexOf(' ')>0?p.substr(0,p.indexOf(' ')):p)		var lf=lastElementFrames[p];				if(layerNames[p]==undefined){						layerNames[p]=layerNameIndex;
			var seq=imageNameDic['SEQ'+eleName]!=undefined?imageNameDic['SEQ'+eleName]:-1;
			layerNameString+=('["'+p+'",['+imageNameDic[eleName]+','+seq+']],');
			layerNameIndex+=1;		}		line='['+layerNames[p]+','+line;		line+=']';		output=line+','+output;				//trace(' ')	}
	if(!size) size=1440;
	output='['+size+','+removeLastComma(output)+'],';
		//if(currentLayout.indexOf('_animation')>0)jsString+=output;
		return output;}


//svg

function exportSVG(name)
{
	
	trace('exportSVG:'+name);
	var svgFile='';
	var compressedSVG='';
	
	var offset={x:0,y:0,width:0,height:0};
	function getOffset( item  )
	{
		
		if( item.timeline )
		{
			var layers = item.timeline.layers;
			for( var layer in layers )
			{
				var frames = layers[layer].frames;
				
				for( var f in frames )
				{
					var frame = frames[f];
					for( var e in frame.elements )
					{
						element = frame.elements[e];
						if(element.top<offset.y) offset.y=element.top;
						if(element.left<offset.x) offset.x=element.left;
						
					}
				}
			}
		}
		
	}



	function visit( item , onPostVisit )
	{
		
		if( item.timeline )
		{
			var layers = item.timeline.layers;
			for( var layer in layers )
			{
				var frames = layers[layer].frames;
				
				for( var f in frames )
				{
					var frame = frames[f];
					for( var e in frame.elements )
					{
						element = frame.elements[e];
						visit( element,onPostVisit);
					}
				}
			}
		}
		
		if( onPostVisit != null )
		{
			onPostVisit( item );
		}
	}

	function exportShapeSVG( shape )
	{
		
		if(shape.elementType != "shape") return;
		var elt = shape;
		var ptArray 	= [];
		var doneEdge 	= [];
		var isLine 		= [];
		var pathString 	= "";
		var pathStrings 	= "";
		var isDrawn 	= function (id) 
		{
			for (var k = 0; k<doneEdge.length; k++) {
				if (doneEdge[k] == id) {
					return true;
				}
			}
			return false;
		}
		var fillColor='';
		var colorChanged=false;
		for (i=0; i<elt.contours.length; i++) 
		{
			var cont = elt.contours[i];
			var he = cont.getHalfEdge().getOppositeHalfEdge();
			var fill=cont.fill.color;
			
			if(fill!=undefined)
			{
				if(fillColor!=''&&fillColor!=fill) colorChanged=true;
				else fillColor=fill;
			}
			else continue;
			var startId = he.id;
			var id = 0;
			var subPathString='';
			var subPathLines=[];
			var head='';
			var lineCount=0;
			while (id != startId) 
			{
				
				var ed = he.getEdge();
				
				if (!isDrawn(ed.id)) 
				{
					
					doneEdge.push(ed.id);
					isLine.push(ed.isLine);
					var subPathLine=[];
					for (var j = 0; j<3; j++) 
					{
						var pt = ed.getControl(j);
						if (elt.matrix) 
						{
							var mat = elt.matrix;
							var ptx = pt.x;
							var pty = pt.y;
							
							pt.x = Math.round((ptx*mat.a+pty*mat.c+mat.tx)*20)/20;
							pt.y = Math.round((pty*mat.d+ptx*mat.b+mat.ty)*20)/20;
						}
						subPathLine.push(percent(pt.x-offset.x)+' '+percent(pt.y-offset.y));;
					}
					lineCount++;
					subPathLines.push(subPathLine);
				}
				he = he.getNext();
				id = he.id;
			}
			if(lineCount==0) continue;
			if(subPathLines[0][2]!=subPathLines[1][0])
			{
				
				for(var j=0;j<subPathLines.length;j++)
				{
					wrapPoints(subPathLines[j]);
				}
			}
			
			
			head=subPathLines[0][0];
			subPathString='M'+head;
			var finded=true;
			compressedSVG+=subPathString;
			for(j=0;j<subPathLines.length;j++)
			{
					var sub=subPathLines[j];
					subPathString+='\nC '+sub[0]+' '+sub[1]+' '+sub[2];
					compressedSVG+='C'+sub[1]+'C'+sub[2];
			}
			if(subPathString=='M') continue;
			if(colorChanged)
			{
				
				compressedSVG+='('+fillColor+')';
				pathStrings +='\n<path d="'+pathString + '" fill="'+fillColor+'"/>';
				colorChanged=false;
				fillColor=fill;
				
				pathString='';
				pathString==''? pathString=subPathString:pathString+='\n'+subPathString;
				
				
			}
			else
			{
				pathString==''? pathString=subPathString:pathString+='\n'+subPathString;
				//compressedSVG+='M'+fillColor;
			}
		}
		
		
		if(pathString!='') 
		{
			pathStrings +='\n<path d="'+pathString + '" fill="'+fillColor+'"/>';
			compressedSVG+='('+fillColor+')';
		}
		
		
		//pathString = '<path d="'+pathString + '"/>';
		//svgFile+='\n'+pathStrings;
		
	}
	function percent(n)
	{
		return (n*100>>0)/100
	}
	function wrapPoints(pts)
	{
		var temp=pts[2];
		pts[2]=pts[0];
		pts[0]=temp;
	}
	

	var item=getItem(name);
	getOffset(item);
	visit( item , exportShapeSVG);
	trace(compressedSVG);
	return compressedSVG;
	
}//utilsfunction removeLastComma(s){	if(s.charAt(s.length-1)==',') return s.substring(0,s.length-1);}function int(n){	return Math.round(n);}function percent(n){	return Math.round(n*1000)/1000;}



function getItemTimeline(name)
{
	return getItem(name).timeline;
}


function getItemLayers(name)
{
	return getItem(name).timeline.layers;
}

function getItem(name)
{
	var lib=fl.getDocumentDOM().library;
	lib.selectItem(name,true);
	var selitems = lib.getSelectedItems()[0]; 
	return selitems;
}

function trace(a)
{
	fl.trace(a);
}
