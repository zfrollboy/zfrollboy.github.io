(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{520:function(a,s,n){"use strict";n.r(s);var e=n(12),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("JDK安装")]),a._v(" "),n("h2",{attrs:{id:"一、下载安装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、下载安装包"}},[a._v("#")]),a._v(" 一、下载安装包")]),a._v(" "),n("p",[a._v("安装包请去官网下载"),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),n("OutboundLink")],1)]),a._v(" "),n("h2",{attrs:{id:"二、解压安装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、解压安装包"}},[a._v("#")]),a._v(" 二、解压安装包")]),a._v(" "),n("div",{staticClass:"language-angular2 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("1、$ cd  /home/cmfchina\n2、$ tar  -zxvf  jdk-8u131-linux-x64.tar.gz  \n3、mkdir /usr/java\n4、mv /home/cmfchina/jdk1.8.0_131 /usr/java\n\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("h2",{attrs:{id:"三、修改环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、修改环境变量"}},[a._v("#")]),a._v(" 三、修改环境变量")]),a._v(" "),n("p",[a._v("vim /etc/profile")]),a._v(" "),n("div",{staticClass:"language-angular2 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\nexport JAVA_HOME=/usr/java/jdk1.8.0_131\nexport JRE_HOME=${JAVA_HOME}/jre\nexport CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH\nexport JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin\nexport PATH=$PATH:${JAVA_PATH}\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("p",[a._v("source /etc/profile让profile")]),a._v(" "),n("h2",{attrs:{id:"四、测试是否安装成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、测试是否安装成功"}},[a._v("#")]),a._v(" 四、测试是否安装成功")]),a._v(" "),n("div",{staticClass:"language-angular2 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("1、使用javac命令。看是否出现command not found\n2、使用java -version 出现java version\n3、echo $PATH   输出环境变量\n\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);