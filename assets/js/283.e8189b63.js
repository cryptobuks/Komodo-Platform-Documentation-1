(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{665:function(a,t,s){"use strict";s.r(t);var n=s(29),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"compile-marketmaker-binary-with-static-nanomsg-in-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-marketmaker-binary-with-static-nanomsg-in-macos"}},[a._v("#")]),a._v(" Compile marketmaker Binary with Static nanomsg in MacOS")]),a._v(" "),s("p",[a._v("This guide will help you to compile your own marketmaker binary in MacOS (OSX) with static nanomsg. Follow this\n"),s("RouterLink",{attrs:{to:"/mmV1/guides/compile-marketmaker-binary-with-static-nanomsg-in-Linux.html"}},[a._v("guide")]),a._v(" for Linux.")],1),a._v(" "),s("h2",{attrs:{id:"install-dependency-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-dependency-packages"}},[a._v("#")]),a._v(" Install Dependency packages:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" cmake "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" libcurl4-openssl-dev build-essential\n")])])]),s("h2",{attrs:{id:"install-nanomsg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-nanomsg"}},[a._v("#")]),a._v(" Install "),s("code",[a._v("nanomsg")])]),a._v(" "),s("p",[a._v("You'll need to install "),s("code",[a._v("homebrew")]),a._v(" (Google how to do it)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nanomsg\n")])])]),s("h2",{attrs:{id:"clone-supernet-repo-and-compile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-supernet-repo-and-compile"}},[a._v("#")]),a._v(" Clone SuperNET repo and compile")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/jl777/SuperNET\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/SuperNET/iguana\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n./m_mm\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n./osx_deploy.sh\n")])])]),s("p",[a._v("Once all done, you should be able to find both "),s("code",[a._v("iguana")]),a._v(" and "),s("code",[a._v("marketmaker")]),a._v(" static binaries in user's home directory, under "),s("code",[a._v("~/tmp/iguana/")]),a._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);