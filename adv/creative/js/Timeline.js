var $TL=function(){

var MathBuffer=(function()
{
    var sinBuffer={};
    var cosBuffer={};


    var a2r=Math.PI/180;
    // for(var i=0;i<=90;i++)
    // {
    //     sinBuffer[i]=Math.sin(i*a2r);
    //     cosBuffer[i]=Math.cos(i*a2r);
    // }
    // for(i=91;i<=180;i++)
    // {
    //     sinBuffer[i]=sinBuffer[180-i];
    //     cosBuffer[i]=-cosBuffer[180-i];
    // }
    // for(i=181;i<=360;i++)
    // {
    //     sinBuffer[i]=-sinBuffer[i-180];
    //     cosBuffer[i]=cosBuffer[360-i];
    // }
    // for(i=-360;i<0;i++)
    // {
    //     sinBuffer[i]=sinBuffer[-i];
    //     cosBuffer[i]=-cosBuffer[-i];
    // }

    function sin(n)
    {
        return Math.sin(n*a2r);
        n=Math.round(n);
        if(sinBuffer[n]!=undefined) return sinBuffer[n];
        while(n>360) n-=360;
        while(n<-360) n+=360;
        return sinBuffer[n];
    }

    function cos(n)
    {
        return Math.cos(n*a2r);
        n=Math.round(n);
        if(cosBuffer[n]!=undefined) return cosBuffer[n];
        while(n>360) n-=360;
        while(n<-360) n+=360;
        return cosBuffer[n];
    }

    return {sin:sin,cos:cos}
})()




var timelines={};

var allFrames={};
var timelineIndex=0;
var blankFrame=[[0, 0, 0, 1, 1, -1,0]];
var needInterpolate=[0,1,1,1,1,0,0,0];
var eases=[];
var layerNames={};

var hasSeq={};
var svgs;
var seqFrameDuration=0;
var seqGlobalFrame=0;
var seqCurrentFrame={};
var seqTotalFrame={};
var seqState={};
var seqPlayList={};
var seqPivots={};
var hasMask={};
var masks={};
var useCanvas=false;
var tempCanvas;;
var tempCtx;
var images={};
var force3D=false;
var imageCount=0;
//alert('useCanvas:'+useCanvas)

if(useCanvas)
{
    tempCanvas=document.createElement('canvas');
    tempCanvas.width=2000;
    tempCanvas.height=2000;
    tempCtx=tempCanvas.getContext('2d')
}


function setSeqState(state)
{
    for (var i = 1; i < arguments.length; i++) {
       seqState[arguments[i]]=state;
    }
}
function resetSeq(n)
{
    seqCurrentFrame[n]=0;
   
}



function updateSeqFrame()
{

    TweenMax.delayedCall(seqFrameDuration,updateSeqFrame);
    for(var i in hasSeq)
    {
        if(seqState[i]=='play'||seqState[i]=='loop')
        {
            seqCurrentFrame[i]++;
        }
        else if(seqState[i]=='toEnd')
        {

            if(seqCurrentFrame[i]<seqTotalFrame[i]-1) seqCurrentFrame[i]++;
        }else if(seqState[i]=='toStart')
        {

            if(seqCurrentFrame[i]>0) seqCurrentFrame[i]--;
        }
    }
    
}



function defaultActor(){
    return {a: -1,x: 0,y: 0,sx: 0,sy: 0,o:0}
};
function defaultMask(){
    return {x: 0,y: 0,w: 0,h: 0}
};

function decodeSVG(compressedSVG)
{
    var arr=compressedSVG.split(')');
    var svg='';
    for(var i in arr)
    {
        if(arr[i]=='') continue;
        
        
        var output='';
        var temp=arr[i].split('(');
        var color=temp[1];
        var opacity=1;
        if(color.length>7)
        {
            
            opacity=percent(parseInt(color.substring(7,9),'16')/255);
            color= '#'+color.substring(1,7);
        }
        var points=temp[0].split('M');
        
        
        for(var j in points)
        {
            if(points[j]=='') continue; 
            var temp2=points[j].split('C');
            
            output+='M'+temp2[0]+'\n';
            var p=0;
            for(;p<temp2.length-2;)
            {
                output+='C'+temp2[p]+' '+temp2[p+1]+' '+temp2[p+2]+'\n';
                p+=2;
            }    
            
        }
        svg +='\n<path d="'+output + '" style="fill:'+color+';fill-opacity:'+opacity+'" />';
        
    }
    return svg;
}

function init($layerNames,$imageInfos,$eases,$seqs,$svgs) {


    for (var i = 1; i < $eases.length; i++) {
        eases[i] = ($eases[i] == 'lin') ? Linear.easeNone : new Ease(CEase.getFun($eases[i]));
    }
    imageInfos=$imageInfos;
    seqs=$seqs;
    svgs=$svgs;
    layerNames=$layerNames;




    $(".preload").each(function() {
        var $this = $(this);
        var source = $this.data("source");
        var clickID = $this.data("c");
        var mask = $this.data("m");

        var classes = $this.attr('class').split(' ');
        var layername=classes[0];
        var imgName=source.replace('img/','').replace('.png','').replace('.jpg','').replace('SEQ','').replace('002x','');
        $this.data("source", "");

        //var imageInfo=imageInfos[ln[1]];
        var svg;
        if(source)
        {
            if(!useCanvas&&svgs[imgName]&&!platform.isIE8&&!platform.isIE9)
            {
                //alert(imgName);
                svg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" data-c="'+clickID+'" preserveAspectRatio="xMinYMin meet" >';
                svg+=decodeSVG(svgs[imgName]);
                svg+='</svg>'
            }
            if(seqs[imgName]&&seqState[layername])
            {

                if(seqFrameDuration==0)
                {
                    seqFrameDuration=1/fps;

                    updateSeqFrame();
                }

                hasSeq['have']=true;
                hasSeq[layername]=seqs[imgName];
                
                seqCurrentFrame[layername]=0;
                seqPivots[layername]=[hasSeq[layername][0][4],hasSeq[layername][0][5]]
                $this.wrap("<div class='seqWrapper'></div>");

                source=source.replace('img/SEQ','img/').replace('img/','img/SEQ');

                if(seqState[layername]=='hover')
                {
                    $this.on("mouseover", function(e) {
                          seqState[layername]='toEnd';
                    })

                    $this.on("mouseout", function(e) {
                          seqState[layername]='toStart';
                    })

                    $this.on("click", function(e) {
                         seqState[layername]='toStart';
                    })
                   
                }
            }

        }
        if(masks[layername])
        {
             return;
        }
        if(!hasSeq[layername]&&!$this.hasClass('forceCSS'))
        {
            $this.css('width','0px!important');
            $this.css('height','0px!important') 
        }
        

        if (mask) {
            $("." + mask).append($this[0]);
            hasMask[layername] = mask;
            masks[mask] = true;
            $("." + mask).css('overflow', 'hidden');

        }
        if ((platform.isMobile || platform.isTablet || platform.isIE8) && $this.hasClass('over')) {
            $this.remove();
            return;
        }
       
        if(useCanvas)
        {

            

            source=source.replace('002x.png','.png');
            source=source.replace('002x.jpg','.jpg');
             var img=new Image()
            img.src=source;
            images[layername]=img;
            return;
        }
       

        if(svg)
        {

             $this.append(svg);
            return;
        }
        imageCount++;
        if (platform.isIE8) {
                if (clickID) {
                    $this.append("<div class='matrix-holder'><div class='picture-holder' data-c='" + clickID + "'><img class='ie8_hidden' src='" + source + "' data-c='" + clickID + "' alt=''></div></div>");
                } else {
                    $this.append("<div class='matrix-holder'><div class='picture-holder'><img class='ie8_hidden' src='" + source + "' alt=''></div></div>");
                }
                $this.children('.matrix-holder').find('.picture-holder').css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' + source + ',sizingMethod="scale");');
            } else {
                if (clickID) {
                    $this.append("<img src='" + source + "' data-c='" + clickID + "' alt=''>");
                } else {
                    $this.append("<img src='" + source + "' alt=''>");
                }
            }
    });
}





function interpolate4D(frames,actorNames,width,height,indexs) {

    
    var w=width,
        h=height,
        wl=indexs[0],
        wh=indexs[1],
        hl=indexs[2],
        hh=indexs[3];

    wRaito=getRatio(w,wl,wh);
    hRaito=getRatio(h,hl,hh);
	var result={};
	for(var k=0;k<actorNames.length;k++)
	{
		var name=actorNames[k];
		var framelxl = frames[wl+'x'+hl][name];
	    var framelxh = frames[wl+'x'+hh][name];
	    var framehxl = frames[wh+'x'+hl][name];
	    var framehxh = frames[wh+'x'+hh][name];
	    if ((!framelxl) || (!framelxh) || (!framehxl) || (!framehxh)) 
	    {
	        result[name]=blankFrame;
	        continue;
	    }
	    var tempArr = [];
	    for (var i = 0; i < framelxl.length; i++) {
	        var temp = [framelxl[i][0], , , , , framelxl[i][5], framelxl[i][6],framelxl[i][7]];
	        var lockScale = (framelxl[i][3] == framelxl[i][4])&&(framelxh[i][3] == framelxh[i][4])&&(framehxl[i][3] == framehxl[i][4])&&(framehxh[i][3] == framehxh[i][4]);
	       
	        for (var j = 1; j < 5; j++) {

	            if (lockScale && j == 4) {
	                temp[4] = temp[3];
	                continue;
	            }
	            var v1 = framehxl[i][j] * wRaito + framelxl[i][j] * (1 - wRaito);
	            var v2 = framehxh[i][j] * wRaito + framelxh[i][j] * (1 - wRaito);
	            var v = v2 * hRaito + v1 * (1 - hRaito);
	            temp[j] = v;
	        }

	        tempArr.push(temp)
	    }
	    result[name]=tempArr;
	}
	return result;
}

function interpolate2D(frames,actorNames,width,height,indexs) {
    
    if(indexs.length==1) return frames[indexs[0]];
    var index=width;
    var t=0;
    while(indexs[t]>index)
    {
        t++;
    }
    
    var r=getRatio(index,indexs[t],indexs[t-1]);



    if (r == 1) return t==0?frames[indexs[0]]:frames[indexs[t-1]];
    if (r == 0) return frames[indexs[t]];
    var result={};
    for(var i=0;i<actorNames.length;i++)
    {
        var layerName=actorNames[i];
        var frame1= frames[indexs[t-1]][layerName];
        var frame2= frames[indexs[t]][layerName];

        if (((r != 0 && !frame1) || ((r == 1) && !frame2))||(!frame1||!frame2)) 
        {
            result[layerName]=blankFrame;
            continue;
        }
        var r2 = 1 - r;
        var temp = [];
        for (var j = 0; j < frame1.length; j++) {
            var p = frame1[j];
            var q = frame2[j];
            temp.push([
                p[0],
                p[1] * r + q[1] * r2,
                p[2] * r + q[2] * r2,
                p[3] * r + q[3] * r2,
                p[4] * r + q[4] * r2,
                p[5],
                p[6],
                p[7]
            ])
        }
        result[layerName]=temp;
    }
    return result;
}


function createTimeline(tl,$container)
{
	
    var frames={};
    var actorNames=[];
    var actors={};
    if(useCanvas)
    {
        $container.append('<canvas id="myCanvas" width="10" height="10" ></canvas>');
        var myCanvas=document.getElementById('myCanvas');
        var ctx=myCanvas.getContext("2d");
    }
    
    var ainmateTL=new TimelineMax;
    var playhead=0;

    var updateTL=new TimelineMax;
    var is4D=tl[0];
    var indexs=is4D?[99999,0,99999,0]:[];
    var interpolater=is4D?interpolate4D:interpolate2D;

    var state='play';
    var lastIndex=-1;

    var pauseList=[];


    updateTL.add(TweenMax.to({t:0}, 99999, {t:1,onUpdate:updatePlayHead}),0);

    for(var i=1;i<tl.length;i++)
    {
        
        //[size,[actor,frame1,frame2]]
        var subTl=tl[i];
        var size=subTl[0];

        if(is4D)
        {
            indexs[0]=Math.min(indexs[0],size[0]);
            indexs[1]=Math.max(indexs[1],size[0]);
            indexs[2]=Math.min(indexs[2],size[1]);
            indexs[3]=Math.max(indexs[3],size[1]);
            size=size[0]+'x'+size[1];
        }else{
            indexs.push(size);
        }
        frames[size]={};
        for(var j=1;j<subTl.length;j++)
        {
            var aaa=subTl[j].shift();

            var ln=layerNames[aaa];

            var seq=hasSeq[ln[0]];
            var imageInfo=seq?imageInfos[ln[1][1]]:imageInfos[ln[1][0]];
            
            ln=ln[0];
            var actor = $('.' + ln);
            if (actor.length == 0) continue;
            if (!actors[ln])
            {

                
                if(actor.hasClass('forceCSS'))
                {
                    imageInfo.forceCSS=true;
                }

                actor.addClass('actor');
                actorNames.push(ln);
                actor.sx = 1;
                actor.sy = 1;
                actor.movedOut = true;
                actor.totalFrames=seq?seq.length:0;

                seqTotalFrame[ln]=actor.totalFrames;

                actor.alphaValue = 1;


                var image = $('.' + ln).children();

                actors[ln] ={
                                name:ln,
                                div:actor,
                                image:image,
                                mask:hasMask[ln],
                                isMask:masks[ln],
                                imageInfo:imageInfo,
                                animater:masks[ln]?animateMask:animateActor,
                                ctx:ctx,
                                seq:null
                                //matrix:defaultMask():defaultActor()
                            };
                imageInfo.m=imageInfo.x*imageInfo.w;
                imageInfo.n=imageInfo.y*imageInfo.h;
                imageInfo.seq=seq;

                image.css('left',imageInfo.m);
                image.css('top',imageInfo.n);
                image.css('width',imageInfo.w);
                image.css('height',imageInfo.h);
                image.attr('viewBox','0 0 '+imageInfo.w+' '+imageInfo.h);
                

                if (masks[ln]) {
                        //
                } else {


                    if(!platform.isIE8)TweenLite.set(image, {
                        autoAlpha: 0
                    });

                    updateTL.add(TweenMax.to(actor, 99999, {
                        onUpdate: updateMatrix,
                        onUpdateParams: [ln,actors],
                        overwrite: false
                    }), 0);
                }
            }

   
            for (var k=0;k<subTl[j].length;k++) inheritValue(subTl[j][k - 1], subTl[j][k]);

            frames[size][ln] = subTl[j];



        }
    }




    for(i=0;i<actorNames.length;i++) actors[actorNames[i]].mask=actors[actors[actorNames[i]].mask];
        




    


    function updatePlayHead()
    {

        if(useCanvas)ctx.clearRect(0,0,2000,2000);

        if(ainmateTL&&(playhead<ainmateTL.time())) 
        {

            playhead=ainmateTL.time();
            for(var i in callBacks)
            {
                
                if(!callBacks[i].used)
                {
                    if(i<playhead)
                    {

                       callBacks[i].fun.apply(null,callBacks[i].param);
                       callBacks[i].used=true;
                    }
                }
                
            }

        }

    }

    function resize(width,height)
    {
        if(width*height==0) return;
     //width=728;
        index=width+' '+height;
        if(useCanvas)
        {
            myCanvas.width=width;
            myCanvas.height=height;
            tempCtx.width=width;
            tempCtx.height=height;
        }
        if(index==lastIndex) return;
        lastIndex=index;
        var oldTl=ainmateTL;
        ainmateTL=new TimelineMax;
        trace('resize');
        var currentframes=interpolater(frames,actorNames,width,height,indexs);
        for(var i=0;i<actorNames.length;i++)
        {
            var name=actorNames[i];
            actors[name].animater(ainmateTL,actors[name],currentframes[name]);
        }
        ainmateTL.play(playhead);
        if(oldTl)
        {
         ainmateTL.paused(oldTl.paused());   
        }
        
        adPause();

    }
    function adPause(t)
    {
        if(!isNaN(t))pauseList.push(t);
        for(var i =0;i<pauseList.length;i++)
        {
            ainmateTL.adPause(pauseList[i]);
        }
        
    }
    function pause(t)
    {
       ainmateTL.pause(t);
    }
    function play(t,index)
    {
        if(index) resize(index);
        ainmateTL.play(t);
    }
    var callBacks={};
    function addCallBack(t,fun,param)
    {
        callBacks[t]={fun:fun,param:param,used:false};
      //  ainmateTL.addCallback(fun,t,param);
    }
    function paused()
    {
        return ainmateTL.paused();
    }

    function toEnd()
    {

        ainmateTL.progress(1)
    }
     function getPosByID(ln)
    {
        return actors[ln].matrix;
    }


	tl={
		resize:resize,
		addPause:adPause,
		pause:pause,
		play:play,
		paused:paused,
        toEnd:toEnd,
        getPosByID:getPosByID,
        addCallBack:addCallBack
	}
	return tl;
}



function animateActor(tl,actor, frames) {
    
    var startTime = 0;
    var endTime = 0;
    var ease;
    var lastFrame;
    var lastOffsetX = 0;
    var lastOffsetY = 0;
    var offsetX = 0;
    var offsetY = 0;
    var name=actor.name;
    var temp=actor.matrix = defaultActor();
    var w = actor.imageInfo.w;
    var h = actor.imageInfo.h;
    
 
    if(!frames) return;


    for (var i=0;i<frames.length;i++) {
        var frame = frames[i];
        endTime = frame[0] / fps;
        if (isNaN(endTime)) continue;
        endTime = percent(endTime);
        var sx = frame[3];
        var sy = frame[4]
        if (ease && lastFrame) {

            tl.add(TweenLite.fromTo(temp, endTime - startTime, {
                a: lastFrame[5],
                x: lastFrame[1],
                y: lastFrame[2],
                sx: lastFrame[3],
                sy: lastFrame[4],
                o:lastFrame[6]
            }, {
                a: frame[5],
                x: frame[1],
                y: frame[2],
                sx: frame[3],
                sy: frame[4],
                o:frame[6],
                roundProps:'x,y',
               // onUpdate:name=='copy1'?output:null,
                onUpdateParams:[temp],
                overwrite: false,
                ease: eases[ease]
            }), startTime);
            temp.a = 0;
        } else {
            tl.add(TweenLite.to(temp, 0.00001, {
                a: frame[5],
                x: frame[1],
                y: frame[2],
                sx: frame[3],
                sy: frame[4],
                o:frame[6],
                roundProps:'x,y',
               // onUpdate:name=='copy1'?output:null,
                onUpdateParams:[temp],
                overwrite: false
            }), endTime);

        }

        ease = frame[7];
        startTime = endTime;
        lastFrame = frame;
        // trace(startTime+' '+endTime)
    }
}
function output(temp)
{
    trace(temp.x,temp.y,temp.sx,temp.sy,temp.a)
}
function animateMask(tl, actor, frames) {
    var startTime = 0;
    var endTime = 0;
    var ease;
    var lastFrame;
    var temp=actor.matrix = defaultMask();
     if(!frames) return;
    for (var i=0;i<frames.length;i++) {
        var frame = frames[i];
        endTime = frame[0] / fps;
        if (isNaN(endTime)) continue;
        endTime = percent(endTime);
        var w=actor.imageInfo.w;
        var h=actor.imageInfo.h;
        if (ease && lastFrame) {
            tl.add(TweenLite.fromTo(temp, endTime - startTime, {
                x: lastFrame[1],
                y: lastFrame[2],
                w: lastFrame[3] * w,
                h: lastFrame[4] * h
            }, {
                x: frame[1],
                y: frame[2],
                w: frame[3] * w,
                h: frame[4] * h,
                roundProps:'x,y,w,h',
                overwrite: false,
                ease: eases[ease]
            }), startTime);
            temp.a = 0;
        } else {
            tl.add(TweenLite.to(temp, 0.00001, {
                x: frame[1],
                y: frame[2],
                w: frame[3] * w,
                h: frame[4] * h,
                roundProps:'x,y,w,h',
                overwrite: false
            }), endTime);
        }
        ease = frame[7];
        startTime = endTime;
        lastFrame = frame;
    }
}




function updateMatrix(name,actors) {

    var actor=actors[name];
    var m = actor.matrix;
    var div=actor.div;
    var imageInfo=actor.imageInfo;
    var mask=actor.mask;
    var image=actor.image;
    var ctx=actor.ctx;
    if(!useCanvas||imageInfo.forceCSS) 
    {
        if (!m || m.a <= 0) {
            seqCurrentFrame[name]=0;
            if (div.alphaValue != 0) {
               
                
                div.alphaValue = 0;
                div.movedOut = true;
                if(imageInfo.forceCSS)
                {
                    div.css('left',-10000);
                    div.css('top',-10000);
                    return;
                }
                TweenLite.set(div, {
                    x: -10000,
                    y: -10000
                });
            }
            return;
        }

        if (div.alphaValue != m.a) {
            setOpacity(image, m.a, div);
        }
        


        var s = m.x + ' ' + m.y + ' ' + percent(m.sx) + ' ' + percent(m.sy)+' '+percent(m.o) + ' ' + div.movedOut;
        if (mask) 
        {
            var m2 = mask.matrix;
            s =s+ m2.x + ' ' + m2.y + ' ' + percent(m2.w) + ' ' + percent(m2.h);
        }
        else if(imageInfo.seq)
        {

          
            seqCurrentFrame[name]>=div.totalFrames?seqCurrentFrame[name]=0:null;
            var cf=seqCurrentFrame[name];
            s =s+ (cf>>0);
        }


        if (div.matrixString == s&&(!div.movedOut)) return;
        
        div.matrixString = s;
        div.movedOut = false;
    }
    else
    {
        if (!m || m.a <= 0) return;
        if(imageInfo.seq)
        {       
            seqCurrentFrame[name]>=div.totalFrames?seqCurrentFrame[name]=0:null;
            var cf=seqCurrentFrame[name];
        }
    }
    if (imageInfo.forceCSS) {
       
        div.css('left',m.x);
        div.css('top',m.y);
        // div.css('width',((m.sx * imageInfo.w / 2)>>0) * 2+'px');
        // div.css('height',((m.sy * imageInfo.h / 2)>>0) * 2+'px');

        div.css('width',m.sx * imageInfo.w>>0);
        div.css('height',m.sy * imageInfo.h>>0);
       


        image.css('left',imageInfo.m*m.sx);
        image.css('top',imageInfo.n*m.sy);
               

        return;
    }


    if (mask) {
        var m2 = mask.matrix;

        if(useCanvas){     
            tempCtx.clearRect(0,0,2000,2000);
            drawActor(actor,tempCtx);
            ctx.setTransform(1,0,0,1,0,0);
            ctx.drawImage(tempCanvas,m2.x,m2.y,m2.w,m2.h,m2.x,m2.y,m2.w,m2.h);
            return;
        }else if(platform.isIE8)
        {
           applyMatrixForIE8(div,div.find('.matrix-holder'),m.x-m2.x,m.y-m2.y,imageInfo.w,imageInfo.h,imageInfo.x*imageInfo.w,imageInfo.y*imageInfo.h,m.sx,m.sy,m.a,m.o)
        }
        else
        {
            TweenLite.set(div, {
            x: m.x - m2.x,
            scaleX: percent(m.sx),
            scaleY: percent(m.sy),
            y: m.y - m2.y,
            rotation:m.o
            });
        }

       


        var parentDiv=mask.div;
        
        parentDiv.css('width', m2.w >>0);
        parentDiv.css('height', m2.h>>0);
        TweenLite.set(parentDiv, {
            x: m2.x>>0,
            y: m2.y>>0
        });
        return
    }
    else if(imageInfo.seq)
    {
        var pos=imageInfo.seq[cf];
        var p=div.parent(); 
        if(useCanvas){
            drawActor(actor,ctx,pos); 
            return;
        }
        if(platform.isIE8)
        {

            var matrixHolder=$('.'+actor.name+' .matrix-holder');
            var pictureHolder=$('.'+actor.name+' .picture-holder');
           
            TweenMax.set(matrixHolder,{x:-pos[0],y:-pos[1]})

            div.css('width',pos[2]);
            div.css('height',pos[3]);


             TweenLite.set(div, {
                    x: 0,
                    y: 0
                });
            applyMatrixForIE8(div.parent(),div,m.x,m.y,pos[2],pos[3],-seqPivots[name][0],-seqPivots[name][1],m.sx,m.sy,m.a,m.o)
        }
        else
        {
           
            TweenLite.set(div, {
            force3D: force3D,
            x: -seqPivots[name][0],
            y: -seqPivots[name][1],
            width:pos[2],
            height:pos[3]
            });


            TweenLite.set(p, {
            force3D: force3D,
            left:m.x,
            top:m.y,
            scaleX:m.sx,
            scaleY:m.sy,
            rotation:m.o
            });



         
            TweenLite.set(image, {
            force3D: force3D,
            x: -pos[0],
            y: -pos[1],
            width:imageInfo.w,
            height:imageInfo.h
            });
        }
        return;
    }
    
    if(useCanvas){
        drawActor(actor,ctx)  
    }
    else if(platform.isIE8)
    {
        applyMatrixForIE8(div,div.find('.matrix-holder'),m.x,m.y,imageInfo.w,imageInfo.h,imageInfo.x*imageInfo.w,imageInfo.y*imageInfo.h,m.sx,m.sy,m.a,m.o)


        return;
    }
    

    TweenLite.set(div, {
        force3D: force3D,
        x: m.x,
        scaleX: m.sx,
        scaleY: m.sy,
        y: m.y,
        rotation:m.o
    });
}



function drawActor(actor,ctx,pos)
{
    var m = actor.matrix;
    var name=actor.name;
    
    
    var sin=MathBuffer.sin(m.o);//Math.sin(m.o*Math.PI/180);
    var cos=MathBuffer.cos(m.o);//Math.cos(m.o*Math.PI/180);
    //var w=actor.imageInfo.w;
    //var h=actor.imageInfo.h;
    var x=-actor.imageInfo.m*m.sx;
    var y=-actor.imageInfo.n*m.sy;
    var tx=m.x;
    var ty=m.y;
    ctx.globalAlpha=m.a;
    ctx.setTransform(cos*m.sx,sin*m.sx,-sin*m.sy,cos*m.sy,tx-cos*x+sin*y,ty-sin*x-cos*y);
    if(pos)
    {
        ctx.drawImage(images[name],pos[0],pos[1],pos[2],pos[3],-seqPivots[name][0],-seqPivots[name][1],pos[2],pos[3]);
    }
    else 
    {
        ctx.drawImage(images[name],0,0);
    }
    ctx.setTransform(1,0,0,1,0,0);
    ctx.globalAlpha=1;
}


function applyMatrixForIE8(outer,inner,x,y,width,height,pivotX,pivotY,scaleX,scaleY,alpha,rotation)
{


    
    TweenLite.set(outer, {
                        x: x>>0,
                        y: y>>0
                    });
    



    var w=width*scaleX;
    var h=height*scaleY;

    var m=-pivotX*scaleX;
    var n=-pivotY*scaleY;

    if(isNaN(rotation)) rotation=0;



    

    var sin=MathBuffer.sin(rotation);//Math.sin(m.o*Math.PI/180);
    var cos=MathBuffer.cos(rotation);//Math.cos(m.o*Math.PI/180);
    
    inner.css('filter',"progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand', M11="+cos*scaleX+", M12="+(-sin)*scaleY+", M21="+sin*scaleX+", M22="+cos*scaleY+")"+"alpha(opacity="+alpha*100+")");
    if(m==0&&n==0&&rotation==0) return;

    while(rotation<0) rotation+=360;
    while(rotation>360) rotation-=360;

    
    if(rotation<=90)
    {
        inner.css('left',-(h*sin-n*sin+m*cos));
        inner.css('top',-(m*sin+n*cos));
    } else if(rotation<=180)
    {
        var sin=MathBuffer.sin(rotation-90);
        var cos=MathBuffer.cos(rotation-90);

        inner.css('left',-(w*sin-m*sin+(h-n)*cos)>>0);
        inner.css('top',-((h-n)*sin+m*cos)>>0);
    } else if(rotation<=270)
    {
        var sin=MathBuffer.sin(rotation-180)
        var cos=MathBuffer.cos(rotation-180);
        inner.css('left',-(h*sin-(h-n)*sin+(w-m)*cos)>>0);
        inner.css('top',-((w-m)*sin+(h-n)*cos)>>0);
    }
    else 
    {
        var sin=MathBuffer.sin(360-rotation)
        var cos=MathBuffer.cos(360-rotation)
        inner.css('left',-(m*cos+n*sin)>>0);
        inner.css('top',-((w-m)*sin+n*cos)>>0);
    }


}





var framePros = [1, 2, 3, 4, 5,6];
function inheritValue(lastFrame, frame) {
    //if (!lastFrame) return;
    for (var i in framePros) {
        if (frame[framePros[i]] == undefined) frame[framePros[i]] = lastFrame ? lastFrame[framePros[i]] : 0;
    }
}

function setOpacity(image, value, div) {
    value = percent(value);
    div.alphaValue=value;
    TweenLite.set(image, {
            autoAlpha: value
        });
}
//utils


function percent(n) {
    return Math.round(n * 1000) / 1000;
}

function int(n)
{
    return Math.round(n)
}




function getRatio(v, min, max) {
    if(min==undefined) return 0;
    if(max==undefined) return 1;
    if (v < min) return 0;
    if (v > max) return 1;
    return (v - min) / (max - min)
}


return {
    init:init,
    createTimeline:createTimeline,
    resetSeq:resetSeq,
    setSeqState:setSeqState,
    imageCount:function(){return imageCount}
}


}();

