# 工具纹理

**工具纹理**是控制地图编译方式的特殊[纹理](https://twhl.info/wiki/page/texture)。除非特别说明，这些是由[Vluzacn的ZHLT v34](https://web.archive.org/web/20191204193024/https://forums.svencoop.com/showthread.php/42174-Vluzacn-s-ZHLT-v34-Update) (VHLT)使用的工具纹理。它们可以在`halflife.wad`和`zhlt.wad`中找到。有关每种纹理的详细用法，请参阅其各自的wiki页面。

一般来说，工具纹理可分为两类：

- 可以与刷子上的普通纹理混合使用的纹理。例如，将  
  ![用户发布的图像](https://twhl.info/wiki/embed/null) [NULL](wiki/Tool_Textures/NULL) 或  
  ![用户发布的图像](https://twhl.info/wiki/embed/solidhint) [SOLIDHINT](wiki/Tool_Textures/SOLIDHINT) 纹理应用于刷子的一个或多个面。
- 刷子必须**仅**包含单个工具纹理或其系列中的相关纹理的纹理。这可以进一步分为：
  - 产生剪裁节点的工具纹理，即  
    ![用户发布的图像](https://twhl.info/wiki/embed/clip) [CLIP](wiki/Tool_Textures/CLIP) 及其相关纹理。
  - 定义刷子实体属性的工具纹理，如  
    ![用户发布的图像](https://twhl.info/wiki/embed/origin) [ORIGIN](https://twhl.info/wiki/page/ORIGIN) 和`BOUNDINGBOX`。
  - 生成特定[叶子](https://twhl.info/wiki/page/leaf)内容的工具纹理，如  
    ![用户发布的图像](https://twhl.info/wiki/embed/sky) [SKY](wiki/Tool_Textures/sky_texture) 和`!cur_*`纹理。

`zhlt.wad`中的工具纹理通过在左上角嵌入相关纹理类型来帮助您区分这些类型，例如：

- ![用户发布的图像](https://twhl.info/wiki/embed/cliphull1), ![用户发布的图像](https://twhl.info/wiki/embed/cliphull2), ![用户发布的图像](https://twhl.info/wiki/embed/cliphull3) 嵌入了 ![用户发布的图像](https://twhl.info/wiki/embed/clip) `CLIP` 纹理
- ![用户发布的图像](https://twhl.info/wiki/embed/noclip), ![用户发布的图像](https://twhl.info/wiki/embed/contentwater) 嵌入了 ![用户发布的图像](https://twhl.info/wiki/embed/null) `NULL` 纹理

---

## 图例

### 编译器和wad可用性

| 符号 | 说明 |
| --- | --- |
| –   | 通常在特定GoldSrc游戏的标准WAD中可用，例如`halflife.wad` |
| Z   | 被ZHLT使用但仅在`zhlt.wad`中可用 |
| Z*  | 被ZHLT使用但不包含在`zhlt.wad`中 |
| S   | 被SDHLT使用 |

### 属性

| 符号 | 说明 |
| --- | --- |
| 🏢 | 允许作为**世界**刷子 |
| 🚪 | 允许作为**实体**刷子 |
| ⛅  | 作为世界刷子**投射阴影** |
| 🌓 | 具有**光照贴图** |
| ✂️ | 切割**可见叶子** |

### 可见性

| 符号 | 说明 |
| --- | --- |
| 👀 | 纹理在游戏中**可见** |
| 🫥 | 纹理面**不可见**，但刷子的其余部分可见 |
| ❌ | 刷子变为**不可见** |

### 剪裁节点生成

| 符号 | 说明 |
| --- | --- |
| 0️⃣ | 点体积（子弹、武器、抛射物） |
| 1️⃣ | 玩家体积 |
| 2️⃣ | 大型怪物体积 |
| 3️⃣ | 蹲伏体积 |

---

## 工具纹理

| 图像 | 名称 | Z | W | E | S | LM | VL | V | H0 | H1 | H2 | H3 | 描述 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| N/A | [!cur_0](https://twhl.info/wiki/page/!cur_0) | Z* | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 作用类似于`CONTENTWATER`和`trigger_push`，在+X方向有2048单位/秒的速度。[注1][注2] |
| N/A | [!cur_180](https://twhl.info/wiki/page/!cur_180) | Z* | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 作用类似于`CONTENTWATER`和`trigger_push`，在-X方向有2048单位/秒的速度。[注1][注2] |
| N/A | [!cur_270](https://twhl.info/wiki/page/!cur_270) | Z* | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 作用类似于`CONTENTWATER`和`trigger_push`，在-Y方向有2048单位/秒的速度。[注1][注2] |
| N/A | [!cur_90](https://twhl.info/wiki/page/!cur_90) | Z* | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 作用类似于`CONTENTWATER`和`trigger_push`，在+Y方向有2048单位/秒的速度。[注1][注2] |
| N/A | [!cur_dwn](https://twhl.info/wiki/page/!cur_dwn) | Z* | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 作用类似于`CONTENTWATER`和`trigger_push`，在-Z方向有2048单位/秒的速度。[注1][注2] |
| N/A | [!cur_up](https://twhl.info/wiki/page/!cur_up) | Z* | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 作用类似于`CONTENTWATER`和`trigger_push`，在+Z方向有2048单位/秒的速度。[注1][注2] |
| ![用户发布的图像](https://twhl.info/wiki/embed/AAATRIGGER) | [AAATRIGGER](wiki/Tool_Textures/AAATRIGGER) | – | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 🫥 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 用于在编辑器中区分实体，不应用于世界刷子，因为可能导致错误。VHLT剥离具有此纹理的面，使其在视觉上与`NULL`相同。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/BEVEL) | [BEVEL](wiki/Tool_Textures/BEVEL) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | ❌ | 2️⃣ | ❌ | 作用类似于`NULL`，但以一种特殊方式改变刷子的剪裁节点，使任何接近刷子的玩家在其原点到达`BEVEL`面所在的平面之前不会与刷子碰撞。它可用于消除外部角落剪裁错误，以及`-cliptype precise`[CSG](https://twhl.info/wiki/page/CSG_Compiler)参数可能遗漏的任何剩余剪裁错误。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/black_HIDDEN) | [black_HIDDEN](wiki/Tool_Textures/black_HIDDEN) | Z | 🏢 | 🚪 | ⛅ | 🌓 | ✂️ | 🫥 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 在游戏中不可见但具有光照贴图（即光照数据）。用于修复玩家和NPC在格栅等刷子实体上行走或在天空盒上行走时的光照问题。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/BOUNDINGBOX) | [BOUNDINGBOX](wiki/Tool_Textures/BOUNDINGBOX) | Z | ❌ | 🚪 | ⛅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 用于为实体设置自定义包围盒。可用于处理复杂的func_door移动或精确定位func_train。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CLIP) | [CLIP](wiki/Tool_Textures/CLIP) | – | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 在所有三个碰撞体积（HULL1-3）上创建剪裁平面（隐形墙），玩家无法穿过但可以射击穿过。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CLIPBEVEL) | [CLIPBEVEL](https://twhl.info/wiki/page/CLIPBEVEL) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 不延伸应用于该面的剪裁平面（效果是使玩家的中心接触到这个面的平面）。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CLIPBEVELBRUSH) | [CLIPBEVELBRUSH](https://twhl.info/wiki/page/CLIPBEVELBRUSH) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 类似于`CLIPBEVEL`，但应用于剪裁刷子的所有面。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CLIPHULL1) | [CLIPHULL1](https://twhl.info/wiki/page/CLIPHULL1) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | 1️⃣ | ❌ | ❌ | 为体积#1（站立）创建碰撞。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CLIPHULL2) | [CLIPHULL2](https://twhl.info/wiki/page/CLIPHULL2) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | ❌ | 2️⃣ | ❌ | 为体积#2（大型怪物）创建碰撞。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CLIPHULL3) | [CLIPHULL3](https://twhl.info/wiki/page/CLIPHULL3) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | ❌ | ❌ | 3️⃣ | 为体积#3（蹲伏）创建碰撞。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CONTENTEMPTY) | [CONTENTEMPTY](https://twhl.info/wiki/page/CONTENTEMPTY) | Z | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 👀 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 用于创建不可触摸的面，同时允许玩家穿过。用于不想隐藏的视觉效果。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CONTENTSKY) | [CONTENTSKY](https://twhl.info/wiki/page/CONTENTSKY) | S | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | [SDHLT] 类似于SKY，但不能应用于实体。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CONTENTSOLID) | [CONTENTSOLID](https://twhl.info/wiki/page/CONTENTSOLID) | S | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 👀 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | [SDHLT] 用于创建完全坚固的内容，玩家和抛射物都无法穿过。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/CONTENTWATER) | [CONTENTWATER](wiki/Tool_Textures/CONTENTWATER) | Z | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 移除刷子的碰撞并将表面内外翻转。不应用于世界刷子，因为它会将刷子标记为水体积。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/env_sky) | [env_sky](https://twhl.info/wiki/page/env_sky) | Z | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 用于Spirit of Half-Life的"虚幻锦标赛风格的天空视图"（3D天空盒）实体env_sky。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/HINT) | [HINT](wiki/Tool_Textures/HINT) | – | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 🫥 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 用于强制VIS将地图分割成更小的部分，以帮助引擎遮挡隐藏的区域。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/NOCLIP) | [NOCLIP](https://twhl.info/wiki/page/NOCLIP) | Z | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 移除应用于刷子的碰撞。类似于实体中的`zhlt_noclip`键值。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/NULL) | [NULL](wiki/Tool_Textures/NULL) | – | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 🫥 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 主要用于减少世界多边形(wpoly)数量，应用于玩家在游戏中通常无法看到的表面。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/ORIGIN) | [ORIGIN](https://twhl.info/wiki/page/ORIGIN) | – | ❌ | 🚪 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 定义刷子实体的原点位置。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/SKIP) | [SKIP](wiki/Tool_Textures/SKIP) | – | 🏢 | 🚪 | ⛅ | ❌ | ❌ | ❌ | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 应用于已经有一个面使用了HINT纹理的刷子的其余部分。它是非实体的，没有特殊效果。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/SKY) | [SKY](wiki/Tool_Textures/SKY_texture) | – | 🏢 | ❌ | ⛅ | ❌ | ✂️ | 👀 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 在具有此纹理的面上渲染天空盒，如果刷子的所有面都使用SKY纹理并且你有light_environment或light_spot实体，则会发光。使用VHLT时，剪裁节点生成是可选的，可以使用CSG参数\-noskyclip关闭。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/SOLIDHINT) | [SOLIDHINT](wiki/Tool_Textures/SOLIDHINT) | Z | 🏢 | 🚪 | ⛅ | ❌ | ✂️ | 🫥 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 用于消除不必要的面细分，特别是在复杂形状如三角形地形上。 |
| N/A | [SPLITFACE](https://twhl.info/wiki/page/SPLITFACE) | Z* | 🏢 | 🚪 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 具有此纹理的刷子将细分它们接触的面。可用于消除不透明实体引起的不良光照。 |
| ![用户发布的图像](https://twhl.info/wiki/embed/translucent) | [translucent](https://twhl.info/wiki/page/translucent) | - | 🏢 | ❌ | ⛅ | 🌓 | ✂️ | 👀 | ❌ | ❌ | ❌ | ❌ | 移除剪裁节点并将刷子面内外翻转。所有以@前缀的纹理都表现出这种特性。 |
| N/A | %\-前缀 | S | 🏢 | 🚪 | ⛅ | 🌓 | ✂️ | 👀 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | [SDHLT] 带有此前缀的普通纹理具有相当于\_minlight\=1.0的最小光照级别。可以使用格式%#texname为纹理设置最小光照值，其中#是0-255之间的值。 |
| N/A | \_HIDDEN\-后缀 | 🏢 | 🚪 | ⛅ | 🌓 | ✂️ | 🫥 | 0️⃣ | 1️⃣ | 2️⃣ | 3️⃣ | 带有\_HIDDEN后缀的纹理被隐藏。可用于隐藏其他可见的工具纹理，特别是!CUR\_纹理（例如!CUR\_0\_HIDDEN）。 |

---

## 注释

1. 渲染为水，完全明亮。
2. 可以通过添加`_HIDDEN`后缀来隐藏。

---

> 参考原文与更多内容：[TWHL Tool Textures 页面](https://twhl.info/wiki/page/Tool_Textures)
