﻿//nameByLayerName();



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
}
var svgString="";


var sequenceString='';
var hasSequence={};


var currentAnimation='';

var divs={};
	scanSequence();
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
	
	
	output+='\t'+sequenceString+'\n';
	output+='\t'+svgString+'\n';
	for(var i in divs)
	{
		divString='<div class="'+i+'">\n';
		divString+=divs[i];
		divString+='</div>\n';
		if(blankHtml.indexOf('<!--'+i+'GoesHere-->')>0)
			blankHtml=blankHtml.replace('<!--'+i+'GoesHere-->',divString);
		else otherDivs+=divString;
		//trace(allDivs);
	}
	
function reservedItem(name)
{
	if(name.indexOf('animation')>=0) return true;
	if(name.indexOf('layout')>=0) return true;
	if(name.indexOf('interactive')>=0) return true;
	if(name.indexOf('leavebehind')>=0) return true;
	if(name.indexOf('_all')>=0) return true;
	if(name.indexOf('_not')>=0) return true;
	if(name.indexOf('_no')>=0) return true;
}
	for(var i in fl.getDocumentDOM().library.items)
		if(reservedItem(libItem.name)) continue;
		if(libItem.name.indexOf(''))continue;
		var tl=libItem.timeline;
		var layers=tl.layers;
	
		
		//if(layers[0].frames.length>1) continue;
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
		}
		
		if(eleNum>1||frameLength>1||et=='shape'|| et=='shapeObj'||et=='text')
			
			trace('export draw:'+libItem.name)
			
			
			
			
			
			
			document.breakApart();
			document.selectAll();
			document.clipCut();
			document.clipPaste(true);
			}
			catch(e)
			{
				
			}
			
			document.selectAll();
				
				try{
					document.breakApart();
					document.selectAll();
					document.clipCut();
					document.clipPaste(true);
				}
				{
					break;
				}
				
				
			
			
			document.selectAll();
				
				
				
				imageMatrixLoged[name]=true;
			
			if(exportDraw&&bmp.libraryItem.exportToFile)bmp.libraryItem.exportToFile(url+'/img/'+name+'.png',100);
			document.exitEditMode();

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
}
	for(var i in fl.getDocumentDOM().library.items)
			if(importToFile&&!hasSequence[name]) libItem.exportToFile(url+'/img/'+imageName,100);
	
	trace('size:'+size);
	trace(currentLayout);
	
	
	
	var tl=getItemTimeline(currentLayout);
	var layers=tl.layers;
	
	for(var j in layers){
		
		layerName=currentAnimation+layerName;
						if(!layerUrls[layerID]) layerUrls[layerID]=imageUrls['SEQ'+frameElements[0].libraryItem.name]
		trace('layerID:'+layerID+' '+divAdded[layerID]);
		
			if(layerName==videoPlaceHolderName)	
			
			divAdded[layerID]=currentAnimation;
				
				if(isNaN(rotation))rotation=ele.skewX;
				if(lastFrame.rotation!=int(rotation))
			   	{
					lastFrame.rotation=int(rotation);
				   	line+=','+lastFrame.rotation;
				}else
				{
					line+=',';
				}
			
			try{
				
			var seq=imageNameDic['SEQ'+eleName]!=undefined?imageNameDic['SEQ'+eleName]:-1;
			layerNameString+=('["'+p+'",['+imageNameDic[eleName]+','+seq+']],');
			layerNameIndex+=1;
	if(!size) size=1440;
	output='['+size+','+removeLastComma(output)+'],';
	
	


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
	
}



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