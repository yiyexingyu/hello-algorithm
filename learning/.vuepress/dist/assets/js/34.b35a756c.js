(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{465:function(t,s,a){t.exports=a.p+"assets/img/1.c67a662e.png"},466:function(t,s,a){t.exports=a.p+"assets/img/2.cbeec2a0.png"},629:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_01、题目分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目分析"}},[t._v("#")]),t._v(" 01、题目分析")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("题目189: 旋转数组")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。")])])])]),t._v(" "),n("p",[n("strong",[t._v("示例 1:")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [1,2,3,4,5,6,7] 和 k = 3\n输出: [5,6,7,1,2,3,4]\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("解释:")]),t._v(" "),n("ul",[n("li",[t._v("向右旋转 1 步: [7,1,2,3,4,5,6]")]),t._v(" "),n("li",[t._v("向右旋转 2 步: [6,7,1,2,3,4,5]")]),t._v(" "),n("li",[t._v("向右旋转 3 步: [5,6,7,1,2,3,4]")])]),t._v(" "),n("p",[n("strong",[t._v("示例 2:")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [-1,-100,3,99] 和 k = 2\n输出: [3,99,-1,-100]\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("解释:")]),t._v(" "),n("ul",[n("li",[t._v("向右旋转 1 步: [99,-1,-100,3]")]),t._v(" "),n("li",[t._v("向右旋转 2 步: [3,99,-1,-100]")])]),t._v(" "),n("p",[t._v("说明:")]),t._v(" "),n("p",[t._v("尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。")]),t._v(" "),n("p",[n("strong",[t._v("要求使用空间复杂度为 O(1) 的 原地 算法。")])]),t._v(" "),n("br"),t._v(" "),n("blockquote",[n("p",[t._v("这道题如果不要求原地翻转的话，其实相当简单。但是原地翻转的方法却并不容易想到，我们直接看题解。")])]),t._v(" "),n("h2",{attrs:{id:"_02、题目图解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、题目图解"}},[t._v("#")]),t._v(" 02、题目图解")]),t._v(" "),n("blockquote",[n("p",[t._v("这个方法基于这个事实："),n("strong",[t._v("若我们需要将数组中的元素向右移动 k 个位置， 那么 k%l (l为数组长度) 的尾部元素会被移动到头部，剩下的元素会被向后移动。")])])]),t._v(" "),n("p",[t._v("假设 我们现在数组为[1,2,3,4,5,6,7], l=7 且 k=3 。")]),t._v(" "),n("p",[t._v("如下图可以看到5,6,7 被移动到 数组头部。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(465),alt:"PNG"}}),t._v(" "),n("p",[t._v("通过观察我们可以得到，我们要得到最终的结果。"),n("strong",[t._v("我们只需要将所有元素反转，然后反转前 k 个元素，再反转后面l-k个元素，就能得到想要的结果。")])]),t._v(" "),n("p",[t._v("如下图：")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(466),alt:"PNG"}}),t._v(" "),n("h2",{attrs:{id:"_03、题目解答"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、题目解答"}},[t._v("#")]),t._v(" 03、题目解答")]),t._v(" "),n("p",[t._v("根据分析，我们可以得到下面的题解：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//GO")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tarr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);