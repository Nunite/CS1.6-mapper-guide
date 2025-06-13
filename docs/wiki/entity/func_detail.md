# func_detail
[#固体实体](wiki/solid_entity)

类似于Source引擎中的func_detail功能，但仍受限于bsp文件格式。用于创建细节刷子，可以优化地图编译。

## 属性 (property)
> **细节等级** *zhlt_detaillevel* = *1* | 整数

细节等级。对于普通物体，可以保留默认值1。对于非常小的物体，可以设置为2，这样它们就不会切割其他func_detail的面。

> **降低等级以切割其他物体** *zhlt_chopdown* = *0* | 整数

对于大型形状如地形和墙壁，将此值设置为不低于它们的细节等级，这样它们就可以切割相邻世界刷子的面。

> **提高等级以被切割** *zhlt_chopup* = *0* | 整数

通常不需要使用此选项。

> **面重叠时的优先级** *zhlt_coplanarpriority* = *0* | 整数

当同一细节等级的刷子有重叠面（位于同一平面上）时，此优先级决定哪一个将会显示。

> **剪裁外壳的细节等级** *zhlt_clipnodedetaillevel* = *1* | 整数

将此设置为0将减少剪裁节点数量，但会失去func_detail更好的内容决策方法的好处，该方法旨在防止"模糊的叶节点内容"问题。

> **可通过** *zhlt_noclip* = *空* | 单选

非常有用的选项，可以减少剪裁节点数量。

- 否 = *空*
- 是 = *1*

> **剪裁类型模式** *zhlt_cliptype* = *simple* | 单选

- simple = *simple*
- legacy = *legacy*
