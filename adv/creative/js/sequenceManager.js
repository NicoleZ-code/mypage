var seqManager={};
seqManager.sequenceData={};
seqManager.sequenceData['playBtn']=[[0,0,101,95],[0,0,101,95],[101,0,101,95],[101,0,101,95],[202,0,101,95],[202,0,101,95],[303,0,101,95],[303,0,101,95],[404,0,101,95],[404,0,101,95]]
seqManager.sequenceData['playBtnHover']=[[0,0,101,95],[0,0,101,95],[101,0,101,95],[101,0,101,95],[202,0,101,95],[202,0,101,95],[303,0,101,95],[303,0,101,95],[404,0,101,95],[404,0,101,95]]

seqManager.index=0;


seqManager.insert=function(container,imageName,fps,name)
{
	seqManager.index++;
	var className='sequence'+seqManager.index+(name?' '+name:'');
	trace(className)
	container.append('<div class="'+className+'">  <img src="img/'+imageName+'.png" alt="" /> <div/>');
	var data=seqManager.sequenceData[imageName];
	var t=1/fps;
	var cf=0;
	var tf=data.length;
	var paused=false;
	var mask=container.find('.'+'sequence'+seqManager.index);
	var img=mask.find('img');


	img.css('position','absolute')
	mask.css('overflow','hidden');
	mask.css('position','relative');
	render();
	function render()
	{
		TweenMax.delayedCall(t,render);
		if(paused)return;
		cf++;
		if(cf==tf) cf=0;
		//cf=2;
		var matrix=data[cf];

		img.css('left',-matrix[0]);
		img.css('top',-matrix[1]);
		mask.css('width',matrix[2]);
		mask.css('height',matrix[3]);
	}

	var controller={};
	controller.pause= function()
	{
		paused=true;
	}
	controller.resume= function()
	{
		paused=false;
	}
	return controller;

}



