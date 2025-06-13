# CONTENTWATER


[✔️ 下载示例文件](https://twhl.info/vault/view/6374)

![用户发布的图像](https://twhl.info/wiki/embed/CONTENTWATER)

`CONTENTWATER`工具纹理移除刷子的碰撞并将表面内外翻转。`CONTENTWATER`不应用于世界刷子，因为它会将刷子标记为水体积，这会导致那些浸入其中的人出现可见性错误。

![使用CONTENTWATER纹理的func_illusionary上的镜像表面](https://twhl.info/wiki/embed/contentwater_illusionary)

## 实用应用

* [体积光照](https://twhl.info/wiki/page/Tutorial%3A_Volumetric_Lighting)
* 遮阳篷，悬挂的地毯
* 空心盒子
* 栅栏

## 冲突的实体和纹理

此工具纹理与以下键值冲突，会导致"WATER brushes not allowed in detail"错误：
* `zhlt_clipnodedetaillevel`
* `zhlt_detaillevel`

它还与以下纹理冲突，会导致"mixed face contents"错误：
* `BOUNDINGBOX`
* [CLIP](https://twhl.info/wiki/page/CLIP)
* `CLIPBEVEL`
* `CLIPBEVELBRUSH`
* `CLIPHULL1`
* `CLIPHULL2`
* `CLIPHULL3`
* `CONTENTEMPTY`
* `ORIGIN`
* [SKIP](https://twhl.info/wiki/page/SKIP)

[HINT](https://twhl.info/wiki/page/HINT)和`SOLIDHINT`工具纹理不会导致错误，但它们不应与`CONTENTWATER`一起使用。