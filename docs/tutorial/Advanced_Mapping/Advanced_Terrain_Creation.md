# 教程：高级地形创建

> **源地址 [TWHL:Tutorial: Advanced Terrain Creation](https://twhl.info/wiki/page/Tutorial%3A_Advanced_Terrain_Creation)**

地形是 GoldSrc 引擎地图制作中较具挑战性的部分之一。创建地形的方法有很多，不仅可以使用地形生成器，还可以纯手工制作。这听起来很复杂，但如果你知道方法，手工制作地形实际上相当简单。本教程不会介绍如何使用地形生成器，因为它们通常很简单，不需要指南。

通过结合某些方法，你可以创造出如下所示的景观：

![地图编辑器中的 ts_untergrund 地图](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Rjwoq2s.png)

在本教程中，我将展示一些具体的方法以及如何将它们组合起来。

## 三角棱柱 (Triangular Prisms)

![三角棱柱地形示例](../../images/Advanced_Mapping/Advanced_Terrain_Creation/yj2q76C.png)
![三角棱柱地形示例2](../../images/Advanced_Mapping/Advanced_Terrain_Creation/XOETH7Y.png)

让我们从一个相当容易理解的方法开始。它类似于 Source 引擎中的位移（displacements）。

三角棱柱（也称为楔形体）是一种向地图中添加地形的流行方式。三角棱柱基本上是一个三维形状，从上方看像一个三角形。
让我们看看如何用三角棱柱创建地形：

1.  创建一个像这样的笔刷：
    ![基础方块](../../images/Advanced_Mapping/Advanced_Terrain_Creation/4H6LYSl.png)

2.  沿对角线切割它：
    ![对角线切割](../../images/Advanced_Mapping/Advanced_Terrain_Creation/yPwsgXc.png)

3.  **禁用纹理锁定 (Texture Lock)** ：
    ![禁用纹理锁定](../../images/Advanced_Mapping/Advanced_Terrain_Creation/VXGLbDW.png)
    这对贴图至关重要。如果你不关闭它，纹理会“粘”在笔刷上，地形上会到处都是接缝。

4.  为顶面贴图：
    ![为顶面贴图](../../images/Advanced_Mapping/Advanced_Terrain_Creation/oU9metj.png)

5.  复制这两个笔刷，形成一个网格：
    ![复制成网格](../../images/Advanced_Mapping/Advanced_Terrain_Creation/vOyIAfM.png)

    这就是我让你禁用纹理锁定的原因，否则它会看起来像这样：
    ![纹理锁定开启时的错误效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/5OmS9x7.png)

6.  在顶视图中操纵顶点（当然是使用顶点操纵工具）：

    ![在顶视图中操纵顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/zlnIAoo.png)

    现在你可以选择中间的顶点，在正视图或侧视图中向下拉动它们。你可以用箭头键微调，也可以点击并拖动。
    ![向下拉动顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/XkDG7G6.png)

> **提示**
> 有时，你会得到这样的结果：
> ![过薄的三角形](../../images/Advanced_Mapping/Advanced_Terrain_Creation/1JM1dXn.png)
> 这个三角形看起来太“薄”了。通常，你可以通过删除几个笔刷并重新对齐来重新三角化这部分，或者你可以将它们旋转90°并对齐顶点：
> ![修正后的顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ADk2JWr.png)

第6步之后有两种变体：

### 变体 1

7.  现在我们来做墙壁。重复同样的过程，做成这样：
    ![创建墙壁的棱柱](../../images/Advanced_Mapping/Advanced_Terrain_Creation/MMWRVoD.png)

8.  向上提升顶点：
    ![提升墙壁顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/VWjkjDb.png)

### 变体 2

7.  创建一堵墙并像这样切割它：
    ![创建并切割墙壁](../../images/Advanced_Mapping/Advanced_Terrain_Creation/AxZIVin.png)

8.  复制并将其与地面部分对齐：
    ![复制并对齐](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ObHXQ1v.png)

9.  垂直复制它：
    ![垂直复制](../../images/Advanced_Mapping/Advanced_Terrain_Creation/zaWiUAt.png)

10. 对另一侧做同样的操作：
    ![处理另一侧](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Asbwge3.png)

11. 赋予它形状：
    ![赋予墙壁形状](../../images/Advanced_Mapping/Advanced_Terrain_Creation/vnExcEk.png)
    这是通过在正视图中选择一条顶点线，然后将它们推离中心来完成的。

12. 简单地应用纹理，并为形状增加一些变化：
    ![最终的墙壁效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/TuXkBAZ.png)

> **技巧：修复纹理**
>
> 当某些面被拉伸成这样时：
> ![拉伸的纹理](../../images/Advanced_Mapping/Advanced_Terrain_Creation/xNorKOX.png)
> 打开纹理应用工具，选择这些面，并勾选 `World` 对齐：
> ![使用World对齐](../../images/Advanced_Mapping/Advanced_Terrain_Creation/SRbhdlI.png)
>
> 如果某些面没有正确对齐，如此处所示：
> ![未对齐的纹理](../../images/Advanced_Mapping/Advanced_Terrain_Creation/D6B0xNT.png)
> 那么选择一个对齐正确的面：
> ![选择对齐正确的面](../../images/Advanced_Mapping/Advanced_Terrain_Creation/CS8C5ZL.png)
> 按 `Shift + 鼠标右键` 复制纹理属性：
> ![复制纹理属性](../../images/Advanced_Mapping/Advanced_Terrain_Creation/vCYpcsG.png)
> 然后按 `Shift + 鼠标左键` 将其应用到其他需要对齐的面：
> ![应用纹理属性](../../images/Advanced_Mapping/Advanced_Terrain_Creation/9ToqR1D.png)
> 有时，设置为 `World` 对齐不起作用，所以你可能需要将“父”面设置为 `Face` 对齐。

**最后一步：**
按 `Alt + P` 检查地图问题。
![Alt+P 检查问题](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ejj9sjr.png)
你可能会遇到 "Texture axis perpendicular to face"（纹理轴垂直于面）的错误。这通常发生在游戏中看不见的面。它通常由顶点操纵引起，有时也因为不当使用贴图工具。

**关于“纹理轴垂直于面”的快速解释**
![正常的纹理投影](../../images/Advanced_Mapping/Advanced_Terrain_Creation/WDDZTE3.png)
白色框架代表投影平面，箭头代表法线。这是完全正常的。如果面平行于投影平面，它就不会被拉伸。
![错误的纹理投影](../../images/Advanced_Mapping/Advanced_Terrain_Creation/41MUDNg.png)
在这种情况下，我们将投影平面旋转了90°，因此它变得垂直于面。实际上，投影是从顶面复制过来的。这会导致无限拉伸，并在编译时产生 "Bad surface extents" 错误，以及在地图编辑器中出现 "Texture axis perpendicular to face" 错误。

你不应该把悬崖做得太细致，否则你很快就会达到 clipnode 的上限（32,767）。每个面会生成3个clipnode，所以要小心。或者，你可以在CSG编译参数中使用 `-nohull2`，这样可以节省三分之一的clipnode。

这个方法还有一些技巧。如果你遵循了此方法的变体2，那么你可以这样做：
![组合地面与墙壁](../../images/Advanced_Mapping/Advanced_Terrain_Creation/6VcmCNr.png)
你基本上可以将你的三角棱柱不仅用于墙壁，还用于墙壁上的地面。
![平滑的三角棱柱地形](../../images/Advanced_Mapping/Advanced_Terrain_Creation/CVftqws.png)
经过一些平滑处理，像这样的三角棱柱地形无疑是一种享受。

## 四面体 (Tetrahedra)

虽然这种方法在2D视图中非常混乱，但它在很多情况下都非常有用。让我们看看如何创建四面体并用它们来做些东西。

1.  创建一个立方体并沿对角线切割：
    ![创建并切割立方体](../../images/Advanced_Mapping/Advanced_Terrain_Creation/DjZliFT.png)

2.  将这3个顶点向上拉：
    ![拉起三个顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/7CPLkhZ.png)
    ![形成四面体](../../images/Advanced_Mapping/Advanced_Terrain_Creation/H9y32OX.png)

3.  应用纹理，禁用纹理锁定，并克隆四面体对：
    ![克隆四面体](../../images/Advanced_Mapping/Advanced_Terrain_Creation/sprWoyS.png)
    你将主要使用顶部的3个顶点。这些顶点将定义你在游戏中看到的那个可见的、有纹理的面。但还有第4个顶点（用红色高亮显示）：
    ![第四个顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/HlhE5Cx.png)
    可以把它看作一个“根”顶点。如果根顶点像这样伸出来：
    ![错误的根顶点位置](../../images/Advanced_Mapping/Advanced_Terrain_Creation/5s7vta7.png)
    ...那么它就是凹形的。它就是内外翻转了。所以你应该时刻注意这一点。

> **何时使用四面体而不是棱柱？**
> 使用四面体，你不可能得到 "face not planar"（面不平整）的错误。一个四面体是由三角形组成的，而一个三角棱柱是由两个三角形和三个四边形组成的。如果你不小心，那些四边形的面就会被弯曲：
> ![弯曲的面](../../images/Advanced_Mapping/Advanced_Terrain_Creation/yuJ6VrB.png)
> 你可以通过 `Ctrl+F` 将其三角化，但这可能会在以后导致问题，因为它不容易逆转。

4.  将其克隆成墙壁和天花板：
    ![克隆成墙壁和天花板](../../images/Advanced_Mapping/Advanced_Terrain_Creation/prWlKC9.png)

5.  用顶点操纵工具将其塑造成一个洞穴的形状：
    ![塑造成洞穴](../../images/Advanced_Mapping/Advanced_Terrain_Creation/nbMEDbe.png)
    ![洞穴形状](../../images/Advanced_Mapping/Advanced_Terrain_Creation/3E2683h.png)

6.  复制这些片段并再扭曲一下：
    ![复制并扭曲](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ZmP58b4.png)
    ![扭曲后的洞穴](../../images/Advanced_Mapping/Advanced_Terrain_Creation/hzZYVjy.png)
    如你所见，这里有512个笔刷。理论上，这应该是1536个clipnode（如果使用 `-nohull2` 则是1024个）。这就是为什么你必须小心处理这类地形。另一个原因是VIS。处理这样复杂的地图可能会花费VIS很长时间。

7.  复制整个部分并旋转90°：
    ![复制并旋转](../../images/Advanced_Mapping/Advanced_Terrain_Creation/0zusJPF.png)

8.  复制几个片段并在顶视图中对齐顶点：
    ![对齐顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/CxPVmB5.png)
    这些顶点现在在XY平面上对齐了，但我们还需要在垂直方向上对齐它们。
    ![垂直对齐](../../images/Advanced_Mapping/Advanced_Terrain_Creation/PwuiW10.png)
    现在你可以稍微修饰一下笔刷，然后给它贴图。
    ![最终效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/F2Xa6B3.png)

## 洞穴出入口（结合四面体和三角棱柱）

在这个例子中，我们将使用由三角棱柱制成的悬崖和由四面体制成的洞穴。

1.  首先准备好悬崖和洞穴的网格。
    ![悬崖网格](../../images/Advanced_Mapping/Advanced_Terrain_Creation/dXaTHbU.png)
    ![洞穴网格](../../images/Advanced_Mapping/Advanced_Terrain_Creation/YWltisB.png)
    *（注意：永远不要做得这么细致，这只是为了本例的演示）*

2.  转到其中一端，隐藏除了这部分之外的所有东西：
    ![孤立一端](../../images/Advanced_Mapping/Advanced_Terrain_Creation/8DeFmZj.png)

3.  用顶点操纵工具“打开”墙壁（不删除任何笔刷）：
    ![打开墙壁](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ZT2nuaf.png)
    这一步通常是通过选择一半的笔刷（例如左半部分）并拖动顶点来完成的，从而有效地“解焊”它们。

4.  将洞穴片段复制到墙壁附近：
    ![复制洞穴片段](../../images/Advanced_Mapping/Advanced_Terrain_Creation/mU6oPAu.png)

5.  在顶点操纵工具中，将洞穴的顶点连接到墙壁上。
    ![连接顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ovjLbve.png)

6.  对另一端重复同样的操作。
    ![另一端的效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ygMe9w7.png)

### 可能遇到的问题

然而，它看起来不太好：
![连接处问题](../../images/Advanced_Mapping/Advanced_Terrain_Creation/eIoxg31.png)
在这种情况下，删除这些笔刷：
![删除有问题的笔刷](../../images/Advanced_Mapping/Advanced_Terrain_Creation/b2No8aC.png)
连接这些：
![重新连接](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Kk6wGKf.png)
![重新连接后](../../images/Advanced_Mapping/Advanced_Terrain_Creation/74yI08s.png)
添加一些笔刷来覆盖它（并贴图）：
![覆盖后的效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/GUjcphZ.png)

> **警告**
> 我告诉过你不要做得这么细致是有充分理由的：
> ![过多的wpolys](../../images/Advanced_Mapping/Advanced_Terrain_Creation/osvweo6.png)
> (0fps 的胜利)
> 这是 `wpoly` 的一场灾难。如果它们都是世界笔刷，VIS会花费很长时间来处理。

## Gearbox 风格的地形

### 四边形大法好！

用相对较少的笔刷创建悬崖。
![最终效果预览](../../images/Advanced_Mapping/Advanced_Terrain_Creation/HMEPlOk.png)

1.  从一个“基座”开始。
    ![基座](../../images/Advanced_Mapping/Advanced_Terrain_Creation/JqSR8va.png)

2.  之后，添加一些大立方体并开始切割它们：
    ![添加并切割立方体](../../images/Advanced_Mapping/Advanced_Terrain_Creation/W3NMPjM.png)
    ![切割后](../../images/Advanced_Mapping/Advanced_Terrain_Creation/GOPLx8H.png)

3.  在顶点模式下，选择两个边上的顶点，然后按 `Ctrl+F` 来分割面。
    ![分割面](../../images/Advanced_Mapping/Advanced_Terrain_Creation/r2Ani3R.png)
    ![分割后](../../images/Advanced_Mapping/Advanced_Terrain_Creation/kTBVKSJ.png)

4.  对所有的笔刷重复此操作（除了最左边和最右边的）。
    ![重复操作](../../images/Advanced_Mapping/Advanced_Terrain_Creation/uVJVK5K.png)

5.  这是一个更复杂的部分：连接边，然后合并顶点来塑造笔刷。
    ![连接边](../../images/Advanced_Mapping/Advanced_Terrain_Creation/YlxiCad.png)
    ![合并顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Wqdzk0a.png)
    ![继续合并](../../images/Advanced_Mapping/Advanced_Terrain_Creation/R7MPXKt.png)

6.  选择边缘的顶点并移动它们来创造起伏。
    ![选择边缘顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/1fUI4sH.png)
    ![移动后](../../images/Advanced_Mapping/Advanced_Terrain_Creation/0uQsdb3.png)

7.  最后，进行一些微调，如果出现 "face not planar" 错误，则进行三角化。然后应用纹理，确保所有面使用 `World` 对齐或复制纹理轴。
    ![应用纹理](../../images/Advanced_Mapping/Advanced_Terrain_Creation/fJpFvko.png)
    ![纹理效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Ax98YuC.png)
    最终结果会是这样：
    ![最终结果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/AImZd3p.png)

> **注意：**
> 这种方法创建的几何体如果作为世界笔刷 (`world brushes`)，编译后的地图会很混乱。这就是为什么你应该将这些笔刷转换为 `func_detail`。
> ![转换为func_detail](../../images/Advanced_Mapping/Advanced_Terrain_Creation/4n7q4n9.png)
> 当然，别忘了用 `CLIP` 笔刷覆盖它们。

## 不使用顶点操纵工具的地形

这可能是对2D视图最不混乱的方法。

1.  首先，禁用纹理锁定。
2.  创建一个长方体。
    ![创建长方体](../../images/Advanced_Mapping/Advanced_Terrain_Creation/599DlC0.png)
3.  在它上方克隆一个。
    ![克隆](../../images/Advanced_Mapping/Advanced_Terrain_Creation/gciTMDG.png)
4.  在2D视图中多次点击长方体，直到出现**倾斜模式 (skewing mode)**。
    ![倾斜模式](../../images/Advanced_Mapping/Advanced_Terrain_Creation/4fhlZef.png)
5.  稍微倾斜它。重复这两个步骤，直到达到某个高度或形状。
    ![重复倾斜](../../images/Advanced_Mapping/Advanced_Terrain_Creation/UciG5Fm.png)
6.  将整个片段分组，并横向克隆。
    ![横向克隆](../../images/Advanced_Mapping/Advanced_Terrain_Creation/cYiz0ss.png)
7.  选择一个片段并在不同的2D视图中倾斜它。
    ![在不同视图中倾斜](../../images/Advanced_Mapping/Advanced_Terrain_Creation/UqXPeiQ.png)
    ![效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/ypZZwMa.png)

你也可以用这种方法轻松地制作地面。只是不要过度细化。
![过度细化的例子](../../images/Advanced_Mapping/Advanced_Terrain_Creation/4jyMICm.png)

## 技巧与窍门

### 流动性 (Flow)

看看标记的笔刷。有些地方不太对劲。
![不流畅的笔刷](../../images/Advanced_Mapping/Advanced_Terrain_Creation/SRx9PJ9.png)
这个笔刷破坏了地形，因为它上面有一条明显的线。
![明显的线条](../../images/Advanced_Mapping/Advanced_Terrain_Creation/zjGbg54.png)

要修复这个问题，在顶视图中水平镜像它：
![水平镜像](../../images/Advanced_Mapping/Advanced_Terrain_Creation/XuWYqz9.png)
并对齐顶点：
![对齐顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/qGVVyRy.png)
这样稍微改善了地形的流动性。它看起来更平滑、更自然。

### 分组 (Grouping)

![分组的笔刷](../../images/Advanced_Mapping/Advanced_Terrain_Creation/cRaXA1m.png)
将片段分组是个好主意，因为这样更容易操作。当你想选择更具体的部分时，只需打开“忽略分组”，完成后再关闭它。

### 平滑 (Smoothing)

这是一个块状的角落。我们需要平滑的角落。
![块状角落](../../images/Advanced_Mapping/Advanced_Terrain_Creation/MeskBCd.png)
选择这些顶点：
![选择顶点](../../images/Advanced_Mapping/Advanced_Terrain_Creation/J17L9Pq.png)
将它们塑造成这样：
![塑形后](../../images/Advanced_Mapping/Advanced_Terrain_Creation/dczC2MD.png)
如果你平滑每个角落，你可以得到非常好的结果。
![平滑后的效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/iPoSyPy.png)

### 混合纹理和大纹理

![混合纹理示例](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Z4Yvo3p.png)
这看起来更像Source引擎了。但是，要小心512x512的混合纹理，因为你很容易做出一个巨大的WAD文件，并产生更多的wpoly。

另一种方法是制作4个512x512的纹理。然而，这需要一个严格的三角棱柱网格，你只能上下移动它们。
![大型纹理组合](../../images/Advanced_Mapping/Advanced_Terrain_Creation/v05vgtK.png)
在地图中，它会看起来像这样：
![大型纹理在地图中的效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/BuEfQYm.png)

### 地形密度

在大多数情况下，你希望地图中的地形密度保持一致。这意味着当你创建第一个笔刷时，你需要定义你想要使用的尺寸。例如，一个64x64的块意味着相对较高的地形密度。如果你想做一个非常开阔的区域，你可能需要更大（密度更低）的尺寸，如128x128、256x256，如果它在远处，甚至可以是512x512。

### SOLIDHINT

我们这里有一个不错的小悬崖：

![悬崖示例](../../images/Advanced_Mapping/Advanced_Terrain_Creation/6WhSW2W.jpg)

根据经验，我们知道这样的地形会产生混乱的切割。

![混乱的切割](../../images/Advanced_Mapping/Advanced_Terrain_Creation/WlenfiV.jpg)

我们实际上可以“告诉”编译器应该如何切割几何体。我们通过使用 `SOLIDHINT` 工具纹理来做到这一点。因此，在我们用 `SOLIDHINT` 替换背面（通常贴有 `NULL` 或 `BEVEL`）后，我们会得到这个：

![使用SOLIDHINT后的效果](../../images/Advanced_Mapping/Advanced_Terrain_Creation/Ju2mh4E.jpg)

在这种情况下，它将wpoly减少了大约40%。你的效果可能会有所不同，但肯定会很显著。

## 结语

我希望这篇教程至少在GoldSrc地形方面对你有所帮助。记住，注意你的 `r_speeds` 并保持合理的编译时间。你总能用更少的资源做出更好的效果。

你可以在[这里](https://twhl.info/vault/view/6398)找到源文件 (JMF & WAD)。

祝你制图愉快！