# 包围盒（bounding box）


**轴对齐包围盒**（axis-aligned bounding box，或简称**包围盒**）是适合[刷子实体](https://twhl.info/wiki/page/brush_entity)整个刷子工作的立方体（不包括[origin](https://twhl.info/wiki/page/origin)和[clip](https://twhl.info/wiki/page/clip)刷子）。

一般来说，游戏引擎通过查看实体的包围盒是否位于地图的任何可见区域（[叶子](https://twhl.info/wiki/page/leaf)）内来确定是否应该渲染该实体。

一些利用其包围盒属性的实体包括：
* [func_button](https://twhl.info/wiki/page/func_button)、[func_door](https://twhl.info/wiki/page/func_door)或类似实体在开关时平移其包围盒的体积（lip值从此处减去）。
* [func_train](https://twhl.info/wiki/page/func_train)沿其路径放置，以其包围盒的中心为中心。
* [func_plat](https://twhl.info/wiki/page/func_plat)的行程高度默认为包围盒的高度。它创建的触发字段也将其水平尺寸基于包围盒。
* [func_pushable](https://twhl.info/wiki/page/func_pushable)的碰撞由包围盒定义，而不是其单独的刷子工作（尽管在大多数情况下它们是一致的）。

![用户发布的图像](../../images/tool_textures/BOUNDINGBOX.png)

`BOUNDINGBOX` [工具纹理](https://twhl.info/wiki/page/tool_textures)允许您为实体设置自定义包围盒。一些巧妙的用例：
* 需要与实体部分一起移动的[func_door](https://twhl.info/wiki/page/func_door)的玻璃部分可以通过拥有与实体门同宽的`BOUNDINGBOX`刷子来具有相同的lip值。
* 甚至完全放弃复杂的lip数学计算，用于行程距离超过其物理宽度的复杂`func_door`设置，并使用`BOUNDINGBOX`作为一种具体的、可视的、几何的方式来定义移动距离。
* 精确定位[func_train](https://twhl.info/wiki/page/func_train)，无需猜测。您可以不必将[path_corners](https://twhl.info/wiki/page/path_corner)放置在路径的正中间，而是可以将它们放置在实体的底部。就像在其他实体中使用[ORIGIN](https://twhl.info/wiki/page/ORIGIN)刷子一样。（警告：如果自定义包围盒超出可见叶子，此类`func_trains`可能会变得不可见。）
* 只使[func_pushable](https://twhl.info/wiki/page/func_pushable)的部分变成实体。适用与前一项相同的警告。

## 相关链接

* [维基百科上的最小包围盒](https://en.wikipedia.org/wiki/Minimum_bounding_box)

[来源：TWHL Wiki](https://twhl.info/wiki/page/bounding_box)