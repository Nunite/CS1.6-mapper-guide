# NULL

**`NULL`** [工具纹理](https://twhl.info/wiki/page/tool_textures)主要用于通过应用于玩家在游戏中通常无法看到的表面来减少世界多边形(wpoly)数量。当应用于一个表面时，它告诉编译器移除该表面，从而减少地图某些区域的渲染面数量并提高性能。

该纹理阻挡VIS并且是实体的，所以它可以应用于面向虚空的刷子。这不是必需的，但在[J.A.C.K.](https://twhl.info/wiki/page/J.A.C.K.)编辑器中很有用，该编辑器可以隐藏使用了`NULL`的表面，所以你可以从虚空中看到内部。

它还会阻挡投射物，这可以被战略性地用来防止手榴弹进入房间，方法是用`NULL`刷子覆盖门口，将其转换为[func_wall](https://twhl.info/wiki/page/func_wall)，并通过设置`zhlt_noclip`键为1使其可通过。

`NULL`纹理可以在`zhlt.wad`中找到，你应该在ZHLT/VHLT的副本中获取它。

### 另请参阅

* [r_speeds](https://twhl.info/wiki/page/r_speeds)
* [HINT](https://twhl.info/wiki/page/HINT)
* [BEVEL](https://twhl.info/wiki/page/BEVEL)

[来源：TWHL Wiki](https://twhl.info/wiki/page/NULL)