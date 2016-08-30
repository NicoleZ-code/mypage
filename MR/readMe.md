# 一些说明
##  (1）index.html news.html   
ajax news.json   get  改post  , json的数据项名称可以做相应修改，但对应的initNewsList函数中的名称也需要对应修改。

## (2) news.html 动态列表
  － news00.html 是模板页 内容 放在 <div class="desc"></div>

  － 分页按钮 

<div class="paginator">
	<a class="previous" href="/Home/News?pageIndex=2" style="display:block;">&nbsp;</a>
	<a class="next" href="/Home/News?pageIndex=0" style="display:none;">&nbsp;</a>
</div>
** a href   需要后台动态实现 **