# 一些说明

##  (1）index.html news.html   
ajax news.json   get  可以改post  , json的数据项名称可以做相应修改，但对应的initNewsList函数中的名称也需要对应修改。

## (2) news.html 动态列表
  － news00.html 是模板页 内容 放在 <div class="desc"></div>

  － 分页按钮 

<div class="paginator">
	<a class="previous" href="/Home/News?pageIndex=2" style="display:block;">&nbsp;</a>
	<a class="next" href="/Home/News?pageIndex=0" style="display:none;">&nbsp;</a>
</div>
** a href   需要后台动态实现 **

## (3) 后续：创业团队的列表格式 参考团队伙伴页面的页面 


## (4)  文件夹说明 images／ 放一些 固定的图片资源   
        Upload/news/  动态的图片
        Upload/enterprise/  创业团队的图片

     （注： Upload U 大写 ）

## (5) Faq 常见问题解答 里边一些a的URL 如果替换需要相应替换