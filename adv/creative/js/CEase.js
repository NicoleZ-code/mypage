var CEase={};
var CEHolder = {};


CEase.getFun=function(a)
{
	var id = "";
	var l = a.length;
	var i;
	for(i = 0; i < l; i += 1){
		id = id.concat(a[i] + "");
	}
	if(id.length == 0)return null;
	if(!CEHolder[id])CEHolder[id] = CEGenerate(a);
	return CEHolder[id];
}

function CEGenerate(ptsParam)
{
	//trace('CEGenerate')
	var l = ptsParam.length;
	var pts
	if(l == 1)pts = ptsParam.slice();
	else{
		pts = [{x: 0, y:0}];
		for(var i = 1; i < l; i += 2){
			pts.push({x: ptsParam[i - 1], y: ptsParam[i]});
		}
		pts.push({x: 1, y:0});

	}
	
	var getValue= function(time, begin, change, duration)
	{	

		if (duration <= 0) return NaN;
		if(time <= 0)return begin;
		var percent = time / duration;
		if(percent >= 1)return begin + change;
		var l = pts.length;
		
		if(l == 1){
			var e = pts[0];
			if (!e) return change * percent + begin;
			if (e > 1) e = 1;
			else if (e < -1) e = -1;
			if (e < 0) return change * percent * (percent * (-e) + (1 + e)) + begin; 
			return change * percent * ((2 - percent) * e + (1 - e)) + begin; 
		}else{
			if (percent <= 0) return begin;
			pts[0].y = begin;
			pts[l - 1].y = begin + change;
			
			var bez0 = [pts[0], pts[1], pts[2], pts[3]];
			var beziers = [bez0];
			for (var i = 3; i < pts.length - 3; i += 3){
				beziers.push([ pts[i], pts[i+1], pts[i+2], pts[i+3] ]);
			}
			var theRightBez = bez0;
			if (l >= 5){
				for (var bi = 0; bi < beziers.length; bi += 1){
					var bez = beziers[bi];
					if (bez[0].x <= percent && percent <= bez[3].x)
					{
						theRightBez = bez;
						break;
					}
				}
			}
			var easedPercent = getYForX(theRightBez, percent);	
			//trace(time, begin, change, duration,easedPercent)	
			return easedPercent;
		}
	}
	return getValue;
}
		
		
		
		
		
function getYForX(bez, x, coefficients)
{
	var a = bez[0];
	var b = bez[1];
	var c = bez[2];
	var d = bez[3];
	if (a.x < d.x){ 
		if (x <= a.x + 0.0000000000000001) return a.y;
		if (x >= d.x - 0.0000000000000001) return d.y;
	}
	else{
		if (x >= a.x + 0.0000000000000001) return a.y;
		if (x <= d.x - 0.0000000000000001) return d.y;
	}
	
	if (!coefficients)
	{
		//[ -a + 3*b - 3*c + d, 3*a - 6*b + 3*c, -3*a + 3*b, a]
		coefficients = [-a.x + 3 * b.x - 3 * c.x + d.x, 
						3 * a.x - 6 * b.x + 3 * c.x, 
						-3 * a.x + 3 * b.x, 
						a.x]
	}
	var roots = getCubicRoots(coefficients[0], coefficients[1], coefficients[2], coefficients[3]-x); 
	var time = NaN;
	if (roots.length == 0)
		time = 0;
	else if (roots.length == 1)
		time = roots[0];
	else  
	{
		for(var root in roots)
		{
			if (0 <= roots[root] && roots[root] <= 1){
				time = roots[root];
				break;
			}
		}
	}
	
	if (isNaN(time))return NaN;
	//(t*t*(d-a) + 3*(1-t)*(t*(c-a) + (1-t)*(b-a)))*t + a;
	return (time * time * ( d.y - a.y ) + 3 * (1 - time ) * (time * (c.y - a.y) + (1 - time) * (b.y - a.y))) * time + a.y;
}
		
function getCubicRoots(a, b, c, d)
{
	var q;
	var tmp;
	if (!a){
		var roots = [];
		if (!b){
			if (!c) return [];
			roots[0] = -d / c;
			return roots;
		}
		
		q = c * c - 4 * b * d;
		var signQ = (q > 0) ?  1 : q < 0  ? -1 : 0;
		
		if (signQ < 0){
			return [];
		}
		else if (!signQ){
			roots[0] = -c/(2*b);
		}
		else{
			roots[0] = roots[1] = -c/(2*b);
			tmp = Math.sqrt(q)/(2*b);
			roots[0] -= tmp;
			roots[1] += tmp;
		}
		return roots;
	}
	
	if (a != 1){
		b/=a;
		c/=a;
		d/=a;
	}
	
	q = (b*b - 3*c)/9;              
	var qCubed = q*q*q;                  
	var r = (2*b*b*b - 9*b*c + 27*d)/54; 
	
	var diff   = qCubed - r*r;           
	if (diff >= 0)
	{
		if (!q) return [0];
		var theta = Math.acos(r/Math.sqrt(qCubed)); 
		var qSqrt = Math.sqrt(q); 
		
		var root1 = -2*qSqrt * Math.cos(theta/3) - b/3;
		var root2 = -2*qSqrt * Math.cos((theta + 2*Math.PI)/3) - b/3;
		var root3 = -2*qSqrt * Math.cos((theta + 4*Math.PI)/3) - b/3;
		
		return [root1, root2, root3];
	}
	else
	{
		tmp = Math.pow( Math.sqrt(-diff) + Math.abs(r), 1/3);
		var rSign = (r > 0) ?  1 : r < 0  ? -1 : 0;
		var root = -rSign * (tmp + q/tmp) - b/3;
		return [root];
	}
	return [];
}