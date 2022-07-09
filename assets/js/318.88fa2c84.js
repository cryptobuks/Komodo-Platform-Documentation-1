(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{703:function(s,a,t){"use strict";t.r(a);var e=t(29),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"test-komodo-source-from-jl777-branch-to-make-sure-all-the-assetchains-sync-from-scratch-properly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-komodo-source-from-jl777-branch-to-make-sure-all-the-assetchains-sync-from-scratch-properly"}},[s._v("#")]),s._v(" Test komodo source from jl777 branch to make sure all the assetchains sync from scratch properly")]),s._v(" "),t("h2",{attrs:{id:"purpose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[s._v("#")]),s._v(" Purpose")]),s._v(" "),t("p",[s._v("The purpose of this test is to check if the komodo source from jl777 branch has no issues compiling, all assetchains starts and syncs fully from scratch, no stuck chains. You can use this guide for any branch you want to test, just change the branch name in clone and compile section.")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("This doc is similar to compiling komodo with an additional "),t("code",[s._v("verify")]),s._v(" script. Please make sure you are not testing this in a node with funds. This doc is intended for test nodes/computer. If you have funds in your assetchains please backup your wallet and private key. The information in this doc may change in the future to update.")])]),s._v(" "),t("h2",{attrs:{id:"steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[s._v("#")]),s._v(" Steps")]),s._v(" "),t("ol",[t("li",[s._v("Install Dependencies (most needed for the first time)")]),s._v(" "),t("li",[s._v("Clone komodo repo and compile")]),s._v(" "),t("li",[s._v("Create komodo.conf file and clear all assetchaiins dir from .komodo data dir")]),s._v(" "),t("li",[s._v("Start AC using ./assetchains.old and let them sync (it may take a while)")]),s._v(" "),t("li",[s._v("Verify the assetchains")])]),s._v(" "),t("h2",{attrs:{id:"details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[s._v("#")]),s._v(" Details")]),s._v(" "),t("h3",{attrs:{id:"_1-install-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-dependencies"}},[s._v("#")]),s._v(" 1. Install dependencies")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade -y\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool ncurses-dev "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" python zlib1g-dev "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" bsdmainutils automake libboost-all-dev libssl-dev libprotobuf-dev protobuf-compiler libgtest-dev libqt4-dev libqrencode-dev libdb++-dev ntp ntpdate software-properties-common "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" libcurl4-gnutls-dev cmake clang libsodium-dev -y\n")])])]),t("h3",{attrs:{id:"_2-clone-compile-symlink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-clone-compile-symlink"}},[s._v("#")]),s._v(" 2. Clone, Compile & Symlink")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/jl777/komodo\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" komodo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout jl777\n./zcutil/fetch-params.sh\n./zcutil/build.sh -j"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nproc"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf /home/"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("/komodo/src/komodo-cli /usr/local/bin/komodo-cli\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf /home/"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("/komodo/src/komodod /usr/local/bin/komodod\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/komodo-cli\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/komodod\n")])])]),t("h3",{attrs:{id:"_3-create-komodo-conf-clear-existing-assetchains-database-and-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-komodo-conf-clear-existing-assetchains-database-and-files"}},[s._v("#")]),s._v(" 3. Create "),t("code",[s._v("komodo.conf")]),s._v(" & clear existing assetchains database and files")]),s._v(" "),t("p",[s._v("Create "),t("code",[s._v("komodo.conf")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.komodo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" komodo.conf\n")])])]),t("p",[s._v("Paste the following content inside the file and save it. Don't forget to change values for "),t("code",[s._v("rpcuser")]),s._v(" & "),t("code",[s._v("rpcpassword")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcuser")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcpassword")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txindex")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bind")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcbind")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])])]),t("p",[s._v("Remove existing assetchain block database and files")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.komodo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf AXO  BEER  BET  BNTN  BOTS  BTCH  CEAL  CHAIN  COQUI  CRYPTO  DEX  DSEC  ETOMIC  HODL  JUMBLR  KV  MESH  MGW  MNZ  MSHARK  NINJA  OOT  PANGEA  PIZZA  PRLPAY  REVS  SUPERNET  WLC\n")])])]),t("h3",{attrs:{id:"_4-start-all-assetchains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-start-all-assetchains"}},[s._v("#")]),s._v(" 4. Start all assetchains")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/komodo/src\n./assetchains.old\n")])])]),t("p",[s._v("Wait for all sync to finish before proceeding to next step. This may take a while depending your hardware and internet connection")]),s._v(" "),t("h3",{attrs:{id:"_5a-create-verify-script-and-get-coinlist-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5a-create-verify-script-and-get-coinlist-file"}},[s._v("#")]),s._v(" 5a. Create verify script and get coinlist file")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO coinlist https://raw.githubusercontent.com/KomodoPlatform/komodotools/master/webworker01/coinlist\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" verify\n")])])]),t("p",[s._v("Paste the following content into it and save the file")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" coinlist\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("forked")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("coins")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${coinlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("coin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$coins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("coin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" getinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq .blocks"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("longest")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("coin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" getinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq .longestchain"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("blocks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" longest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("forked")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[0;31m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${coin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v(" - Possible fork!"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[0m Blocks "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$blocks")]),s._v(" < LongestChain "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$longest")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${coin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v(" - Blocks "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$blocks")]),s._v(" = LongestChain "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$longest")]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$forked")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[0;32mAll coins are fine"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[0m"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("change permission of "),t("code",[s._v("verify")]),s._v(" script")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x verify\n")])])]),t("h3",{attrs:{id:"_5b-verify-the-block-height"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5b-verify-the-block-height"}},[s._v("#")]),s._v(" 5b. Verify the block height")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./verify\n")])])]),t("p",[s._v("Result: The result will be similar to below. At the end of the output you will see All coins are fine.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("KMD - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("842790")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("842790")]),s._v("\nCHIPS - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1987211")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Headers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1987211")]),s._v("\nREVS - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("162517")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("162517")]),s._v("\nSUPERNET - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("221024")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("221024")]),s._v("\nDEX - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("179547")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("179547")]),s._v("\nPANGEA - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18770")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18770")]),s._v("\nJUMBLR - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("153932")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("153932")]),s._v("\nBET - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47470")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47470")]),s._v("\nCRYPTO - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31645")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31645")]),s._v("\nHODL - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65524")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65524")]),s._v("\nMSHARK - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("152851")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("152851")]),s._v("\nBOTS - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("141093")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("141093")]),s._v("\nMGW - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21237")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21237")]),s._v("\nCOQUI - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86948")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86948")]),s._v("\nWLC - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224671")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224671")]),s._v("\nKV - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59329")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59329")]),s._v("\nCEAL - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31095")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31095")]),s._v("\nMESH - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20467")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20467")]),s._v("\nMNZ - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87188")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87188")]),s._v("\nAXO - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8731")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8731")]),s._v("\nETOMIC - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17931")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17931")]),s._v("\nBTCH - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49431")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49431")]),s._v("\nPIZZA - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31850")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31850")]),s._v("\nBEER - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37853")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37853")]),s._v("\nNINJA - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8102")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8102")]),s._v("\nOOT - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41106")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41106")]),s._v("\nBNTN - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39911")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39911")]),s._v("\nCHAIN - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2722")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2722")]),s._v("\nPRLPAY - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1335")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1335")]),s._v("\nDSEC - Blocks "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("230")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LongestChain "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("230")]),s._v("\nAll coins are fine\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);