fl.outputPanel.clear();
var path=document.path;
path=path.replace(document.name,'');

var appleScript='tell application "Terminal"'
+'\ndo shell script "cd '+path+'creative/;zip -r ../UT.zip ./ -x \'*.svn*\' \'*index_blank.html*\'"'
+'\nend tell'
+'\nreturn true'


var pathURI=document.pathURI;
pathURI=pathURI.replace(document.name,'');


FLfile.remove(pathURI+'UT.zip');
FLfile.write(pathURI+'zipMe',appleScript);

FLfile.runCommandLine('cd '+path+';osascript zipMe');
FLfile.remove(pathURI+'zipMe');