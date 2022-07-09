(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{659:function(t,e,a){"use strict";a.r(e);var r=a(29),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-your-coin-token-asset-listed-on-mmv1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-your-coin-token-asset-listed-on-mmv1"}},[t._v("#")]),t._v(" Get your Coin/Token/Asset listed on mmV1")]),t._v(" "),a("h2",{attrs:{id:"barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[t._v("#")]),t._v(" BarterDEX is officially deprecated as of this writing and mm2 is under testing before public release.")]),t._v(" "),a("ul",[a("li",[t._v("Adding a coin to the BarterDEX is as simple as writing one line of code if your coin is a Bitcoin compatible. Below is a breakdown of the information needed from the source code and coin parameters. The first step is to gather all the information below and contact (Username: "),a("code",[t._v("@cipi#4502")]),t._v(" in "),a("a",{attrs:{href:"https://komodoplatform.com/discord/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),a("OutboundLink")],1),t._v(") our specialists for review.")]),t._v(" "),a("li",[t._v("For ETH compatibles go to: "),a("RouterLink",{attrs:{to:"/mmV1/coin-integration/coin-integration.html#how-to-add-new-erc20-tokens-in-barterdex"}},[t._v("How to Add new ERC20 Tokens to MarketmakerV1")])],1),t._v(" "),a("li",[t._v("The exact steps to be followed for submitting a Pull Request on Github are described "),a("RouterLink",{attrs:{to:"/mmV1/coin-integration/info-add-coin.html"}},[t._v("here.")])],1)]),t._v(" "),a("h2",{attrs:{id:"coin-spec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coin-spec"}},[t._v("#")]),t._v(" Coin Spec")]),t._v(" "),a("p",[t._v("The Proposed coin must have support for the following API calls and must have BIP65 implemented.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("estimatefee\ngetblock\ngetblockhash\ngetinfo\ngetrawmempool\ngetrawtransaction\ngettxout\nimportaddress\nimportprivkey\nlistunspent\nlistreceivedbyaddress\nlisttransactions\nsendrawtransaction\nsignrawtransaction\nvalidateaddress\n")])])]),a("h2",{attrs:{id:"information-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#information-required"}},[t._v("#")]),t._v(" Information Required")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Coin Ticker")]),t._v(" : LTC")]),t._v(" "),a("li",[a("strong",[t._v("Coin Name")]),t._v(": litecoin")]),t._v(" "),a("li",[a("strong",[t._v("rpcport")]),t._v(" : 9332")]),t._v(" "),a("li",[a("strong",[t._v("pubtype")]),t._v(" : 48")]),t._v(" "),a("li",[a("strong",[t._v("taddr")]),t._v(" : 0")]),t._v(" "),a("li",[a("strong",[t._v("p2shtype")]),t._v(" : 50")]),t._v(" "),a("li",[a("strong",[t._v("wiftype")]),t._v(" : 176")]),t._v(" "),a("li",[a("strong",[t._v("txfee")]),t._v(" : 1000000")]),t._v(" "),a("li",[a("strong",[t._v("active")]),t._v(" : 1")])]),t._v(" "),a("h3",{attrs:{id:"details-to-take-note-of"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#details-to-take-note-of"}},[t._v("#")]),t._v(" Details to take note of")]),t._v(" "),a("ol",[a("li",[t._v("After getting confirmation from our specialists, submit an icon to the "),a("code",[t._v("icons")]),t._v(" directory of the repository: "),a("a",{attrs:{href:"https://github.com/jl777/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jl777/coins"),a("OutboundLink")],1),t._v(" through a Pull Request.")]),t._v(" "),a("li",[t._v("BarterDEX uses the info of a coin in the file: "),a("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jl777/coins/blob/master/coins"),a("OutboundLink")],1),t._v(" to perform atomic-swaps.")]),t._v(" "),a("li",[t._v("The explorer repository of the proposed coin contains some of the info required to connect BarterDEX to the coin's own explorer infrastructure.")]),t._v(" "),a("li",[t._v("The coin devs will have to send us a small amount of the proposed coin to test the swaps with.")]),t._v(" "),a("li",[t._v("Electrum servers are in the electrums-directory. Every coin has its own file there: "),a("a",{attrs:{href:"https://github.com/jl777/coins/tree/master/electrums",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jl777/coins/tree/master/electrums"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"json-output-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-output-example"}},[t._v("#")]),t._v(" Json Output Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"litecoin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9332")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2shtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wiftype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("176")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txfee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("The key "),a("strong",[t._v("taddr")]),t._v(" , is for zcash forks. It refers to the coin having transparent and zaddresses. The value that has to be passed is the value taken from the file "),a("code",[t._v("src/chainparams.cpp")]),t._v(" from the wallets source code and it is the first value present in both "),a("code",[t._v("base58Prefixes[PUBKEY_ADDRESS]")]),t._v(" and "),a("code",[t._v("base58Prefixes[SCRIPT_ADDRESS]")]),t._v(", but converted to decimal, not the HEX. So if "),a("code",[t._v("base58Prefixes[PUBKEY_ADDRESS]")]),t._v(" = "),a("strong",[t._v("{0x1C,0xB8}")]),t._v(" , the "),a("code",[t._v("taddr")]),t._v(" is 0x1C coverted to decimal: 0x1C in HEX = 28 in decimal. the "),a("strong",[t._v('"taddr"')]),t._v(" : "),a("strong",[t._v("28")])]),t._v(" "),a("h2",{attrs:{id:"search-for-the-information-on-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-for-the-information-on-github"}},[t._v("#")]),t._v(" Search for the information on Github")]),t._v(" "),a("p",[t._v("All of the information and parameters required are normally contained within but not limited to these files (depends on your coin):")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("init.cpp")]),t._v(": "),a("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("base58.h")]),t._v(": "),a("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/base58.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/litecoin-project/litecoin/blob/master/src/base58.h"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("chainparamsbase.h")]),t._v(": "),a("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),a("ul",[a("li",[t._v("Lead developer's Github account")]),t._v(" "),a("li",[t._v("Bitcointalk Account")]),t._v(" "),a("li",[t._v("Information about the team and purpose of the coin")]),t._v(" "),a("li",[t._v("Social Media Accounts")])]),t._v(" "),a("h2",{attrs:{id:"contact-us"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contact-us"}},[t._v("#")]),t._v(" Contact Us")]),t._v(" "),a("p",[t._v("Once the information is collected, please contact us via email: "),a("a",{attrs:{href:"mailto:coinintegration@komodoplatform.com"}},[t._v("coinintegration@komodoplatform.com")]),t._v(" or in the "),a("code",[t._v("#dev-tradebots")]),t._v(" channel in our "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),a("OutboundLink")],1),t._v(" and request a coin addition. Provide us with all the relevant information and our specialists will get in touch.")]),t._v(" "),a("h2",{attrs:{id:"how-to-add-new-erc20-tokens-in-barterdex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-new-erc20-tokens-in-barterdex"}},[t._v("#")]),t._v(" How to Add new ERC20 Tokens in BarterDEX")]),t._v(" "),a("p",[t._v("Adding ERC20 tokens in BarterDEX is very easy. We just need some information about the token.")]),t._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("approve")]),t._v(" and "),a("code",[t._v("transferFrom")]),t._v(" methods are a must for the swaps to work")]),t._v(" "),a("li",[t._v("Contract address")]),t._v(" "),a("li",[t._v("Ticker Symbol")]),t._v(" "),a("li",[t._v("Name of the token")]),t._v(" "),a("li",[t._v("CoinMarketCap name (for the autoprice with CMC to work)")]),t._v(" "),a("li",[t._v("Token Logo")]),t._v(" "),a("li",[t._v("Some tokens for testing")]),t._v(" "),a("li",[t._v("rpcport is same for all tokens in BarterDEX")])]),t._v(" "),a("p",[t._v("The following is an example using OmiseGo (OMG)")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OMG"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"omisego"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OmiseGo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"etomic"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"contact-us-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contact-us-2"}},[t._v("#")]),t._v(" Contact Us")]),t._v(" "),a("p",[t._v("Once the information is collected, please contact us via email: "),a("a",{attrs:{href:"mailto:coinintegration@komodoplatform.com"}},[t._v("coinintegration@komodoplatform.com")]),t._v(" or in the "),a("code",[t._v("#dev-tradebots")]),t._v(" channel in our "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),a("OutboundLink")],1),t._v(" and request a coin addition. Provide us with all the relevant information and our specialists will get in touch.")]),t._v(" "),a("p",[t._v("You can send some tokens to test to the following BarterDEX test engineers.")]),t._v(" "),a("p",[t._v("Cipi: "),a("code",[t._v("0xdf38dd108bab50da564092ad0cd739c4634d963c")])])])}),[],!1,null,null,null);e.default=s.exports}}]);