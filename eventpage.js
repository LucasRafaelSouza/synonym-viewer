var menuitem={
    "id" : "Synonym Viewer",
    "title" : "Synonym Viewer",
    "contexts" : ["selection"]
   };
chrome.contextMenus.create(menuitem);

function fixedEncodeUri(str){
 
 return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']');
}
chrome.contextMenus.onClicked.addListener(function(clickData){
 if(clickData.menuItemId == "wikit" && clickData.selectionText){
  var sinonimosUrl="https://www.sinonimos.com.br/" +fixedEncodeUri(clickData.selectionText);
var createdata={
   "url" :sinonimosUrl,
   "type" : "popup",
   "top" : 5,
   "left" : 5,
   "width" : screen.availWidth/2,
   "height" : screen.availHeight/2
  };
  chrome.windows.create(createdata,function(){});
 }
})