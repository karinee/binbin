# binbin
百度前端学院中斌斌学院的js任务
***
## 任务一
任务描述：
	用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边
***
## 任务二
任务描述：
	页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上
***
## 任务三
任务描述：
	读取页面上已有的source列表，从中提取出城市以及对应的空气质量,将数据按照某种顺序排序后，在resort列表中按照顺序显示出来
***
## 任务四
任务描述：
	模拟一个队列，队列的每个元素是一个数字，初始队列为空：
	• 有一个input输入框，以及4个操作按钮
	  ○ 点击"左侧入"，将input中输入的数字从左侧插入队列中；
	  ○ 点击"右侧入"，将input中输入的数字从右侧插入队列中；
	  ○ 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
	  ○ 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
	• 点击队列中任何一个元素，则该元素会被从队列中删除
![](http://7xrp04.com1.z0.glb.clouddn.com/task_2_18_1.jpg)
***
## 任务五
任务描述：
	• 基于任务四
	• 队列展现方式变化如下图，直接用高度表示数字大小。实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来
![任务五](http://7xrp04.com1.z0.glb.clouddn.com/task_2_19_1.jpg)
***
## 任务六
任务描述
	• 基于任务四进行升级
	• 将新元素输入框从input改为textarea
	• 允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
	• 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识
***
## 任务七：js和树（一）
任务描述
	• 参考示例图，在页面中展现一颗二叉树的结构
	• 提供一个按钮，显示开始遍历，点击后，以动画的形式呈现遍历的过程
	• 二叉树的遍历算法和方式自定，前序中序后序皆可，但推荐可以提供多种算法的展示（增加多个按钮，每个按钮对应不同的算法）
	• 当前被遍历到的节点做一个特殊显示（比如不同的颜色）
	• 每隔一段时间（500ms，1s等时间自定）再遍历下一个节点
![任务七](http://7xrp04.com1.z0.glb.clouddn.com/task_2_22_1.jpg)
***
## 任务八：js和树（二）
任务描述
	• 基于任务七，参考示例图，将二叉树变成了多叉树，并且每一个节点中带有内容
	• 提供一个按钮，显示开始遍历，点击后，以动画的形式呈现遍历的过程
	• 当前被遍历到的节点做一个特殊显示（比如不同的颜色）
	• 每隔一段时间（500ms，1s等时间自定）再遍历下一个节点
	• 增加一个输入框及一个“查询”按钮，点击按钮时，开始在树中以动画形式查找节点内容和输入框中内容一致的节点，找到后以特殊样式显示该节点，找不到的话给出找不到的提示。查询过程中的展示过程和遍历过程保持一致
![任务八](http://7xrp04.com1.z0.glb.clouddn.com/task_2_23_1.jpg)
***
## 任务九：js和树（三）
任务描述
	• 基于任务九，添加节点的选择、增加与删除的功能
	• 点击某个节点元素，则该节点元素呈现一个特殊被选中的样式
	• 增加一个删除按钮，当选中某个节点元素后，点击删除按钮，则将该节点及其所有子节点删除掉
	• 增加一个输入框及一个“添加”按钮当选中某个节点元素后，点击增加按钮，则在该节点下增加一个子节点，节点内容为输入框中内容，插入在其子节点的最后一个位置


