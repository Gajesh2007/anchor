(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{383:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"associated-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#associated-accounts"}},[t._v("#")]),t._v(" Associated Accounts")]),t._v(" "),s("p",[t._v("No Solana program should be written without understanding associated accounts.\nEvery program using an account in a way that maps to a user, which is almost all\nprograms, should use them.")]),t._v(" "),s("p",[t._v("The TLDR. Associated accounts are accounts whose address are deterministically defined by\na program and some associated data. Usually that data is both a user wallet and some account\ninstance, for example, a token mint.")]),t._v(" "),s("p",[t._v("Why should you care? UX.")]),t._v(" "),s("p",[t._v("Consider a wallet. Would you rather have a wallet with a single SOL address, which you\ncan use to receive "),s("em",[t._v("all")]),t._v(" SPL tokens, or would you rather have a wallet with a different\naddress for every SPL token? Now generalize this. For every program you use, do you\nwant a single account, i.e. your SOL wallet, to define your application state? Or do\nyou want to keep track of all your account addresses, separately, for every program in existance?")]),t._v(" "),s("p",[t._v("Associated accounts allow your users to reason about a single address, their main SOL wallet.  This is\na huge improvement on the account model introduced thus far.")]),t._v(" "),s("p",[t._v("Luckily, Anchor provides the ability to easily create associated program accounts for your program.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("If you've explored Solana, you may have come across the "),s("a",{attrs:{href:"https://spl.solana.com/associated-token-account",target:"_blank",rel:"noopener noreferrer"}},[t._v("Associated Token Account Program"),s("OutboundLink")],1),t._v(' which uniquely and deterministically defines\na token account for a given wallet and a given mint. That is, if you have a SOL address,\nthen you will have, at most, a single "token account" for every SPL mint in existence\nif you only use associated token addresses.')]),t._v(" "),s("p",[t._v("Unfortunately, the SPL token program doesn't do this, strictly. It was built "),s("em",[t._v("before")]),t._v(" the existance\nof associated token accounts (associated token accounts were built as an add-on).\nSo in reality, there are non associated token accounts floating around Solanaland.\nHowever, for new programs, this isn't necessary, and it's recommended to only use associated\naccounts when creating accounts on behalf of users, such as a token account.")])]),t._v(" "),s("h2",{attrs:{id:"clone-the-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repo"}},[t._v("#")]),t._v(" Clone the Repo")]),t._v(" "),s("p",[t._v("To get started, clone the repo.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/project-serum/anchor\n")])])]),s("p",[t._v("And change directories to the "),s("a",{attrs:{href:"https://github.com/project-serum/anchor/tree/master/examples/tutorial/basic-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" anchor/examples/tutorial/basic-5\n")])])]),s("h2",{attrs:{id:"defining-a-program-to-create-associated-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-program-to-create-associated-accounts"}},[t._v("#")]),t._v(" Defining a Program to Create Associated Accounts")]),t._v(" "),s("p",[t._v("The following program is an "),s("em",[t._v("extremely")]),t._v(" simplified version of the SPL token program that\ndoes nothing other than create a mint and "),s("em",[t._v("associated")]),t._v(" token account.")]),t._v(" "),s("div",{staticClass:"language-rs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("anchor_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("prelude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[program]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("basic_5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("create_mint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CreateMint")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supply "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("create_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CreateToken")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_account_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Accounts)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("CreateMint")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(init)]")]),t._v("\n    mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mint")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Accounts)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("CreateToken")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(init, associated = authority, with = mint)]")]),t._v("\n    token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Token")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(mut, signer)]")]),t._v("\n    authority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountInfo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mint")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    system_program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountInfo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Mint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" supply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[associated]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Default)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Token")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" authority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pubkey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pubkey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),s("h3",{attrs:{id:"deriving-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deriving-accounts"}},[t._v("#")]),t._v(" Deriving Accounts")]),t._v(" "),s("p",[t._v("Two new keywords are introduced to the "),s("code",[t._v("CreateToken")]),t._v(" account context:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("associated = <target>")])]),t._v(" "),s("li",[s("code",[t._v("with = <target>")])])]),t._v(" "),s("p",[t._v('Both of these allow you to define input "seeds" that\nuniquely define the associated account. By convention, '),s("code",[t._v("associated")]),t._v(" is used to define\nthe main address to associate, i.e., the wallet, while "),s("code",[t._v("with")]),t._v(" is used to define an\nauxilliary piece of metadata which has the effect of namespacing the associated account.\nThis can be used, for example, to create multiple different associated accounts, each of\nwhich is associated "),s("em",[t._v("with")]),t._v(" a new piece of metadata. In the token program, these pieces\nof metadata are mints, i.e., different token types.")]),t._v(" "),s("p",[t._v("Lastly, notice the "),s("code",[t._v("system_program")]),t._v(" account at the bottom of account context.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("    system_program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountInfo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("system-program")]),t._v(" must be provided when creating an associated\naccount. By convention, the name must be as given here.")]),t._v(" "),s("p",[t._v("For more details on how to use "),s("code",[t._v("#[account(associated)]")]),t._v(", see "),s("a",{attrs:{href:"https://docs.rs/anchor-lang/latest/anchor_lang/derive.Accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs.rs"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"defining-an-associated-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-an-associated-account"}},[t._v("#")]),t._v(" Defining an Associated Account")]),t._v(" "),s("p",[t._v("The new "),s("code",[t._v("#[acount(associated)]")]),t._v(" attribute will allow you to create a new associated account similar to "),s("code",[t._v("#[account(init)]")]),t._v(", but\nto actually define an account as associated, you must use the "),s("code",[t._v("#[associated]")]),t._v(" attribute "),s("em",[t._v("instead")]),t._v(" of the "),s("code",[t._v("#[account]")]),t._v(" attribute.")]),t._v(" "),s("p",[t._v("This new "),s("code",[t._v("#[associated]")]),t._v(" attribute extends "),s("code",[t._v("#[account]")]),t._v(" to include two things")]),t._v(" "),s("ul",[s("li",[t._v("A "),s("code",[t._v("Default")]),t._v(" implementation, which is required for automatic size detection (performed when "),s("code",[t._v('#[account(space = "<size>")]')]),t._v(" is omitted from the accounts context).")]),t._v(" "),s("li",[t._v("The implementation of the "),s("a",{attrs:{href:"https://docs.rs/anchor-lang/latest/anchor_lang/trait.Bump.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bump"),s("OutboundLink")],1),t._v(" trait, which is a bit of an implementation but is required for program derived addresses on Solana.")])]),t._v(" "),s("h2",{attrs:{id:"using-the-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-client"}},[t._v("#")]),t._v(" Using the Client")]),t._v(" "),s("p",[t._v("The client can be used similarly to all other examples. Additionally, we introduce\ntwo new apis.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<program>.account.<account-name>.associatedAddress")]),t._v(" returns an associated token address, given seeds.")]),t._v(" "),s("li",[s("code",[t._v("<program>.account.<account-name>.associated")]),t._v(" returns the deserialized associated account, given seeds.")])]),t._v(" "),s("p",[t._v("We can use them with the example above as follows")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Calculate the associated token address.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" authority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" associatedToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("associatedAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  authority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Execute the transaction to create the associated token account.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  accounts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" associatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    authority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SYSVAR_RENT_PUBKEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    systemProgram"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SystemProgram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("programId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetch the new associated account.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("associated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  authority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v('Notice that, in both apis, the "seeds" given match what is expected by the '),s("code",[t._v("#[account(associated = <target, with = <target>)]")]),t._v(" attribute, where order matters. The "),s("code",[t._v("associated")]),t._v(" target must come before the "),s("code",[t._v("with")]),t._v(" target.")]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("Here, we introduced associated accounts from the perspective of simplifying UX for\na user wallet. However, deterministic addressing can be used beyond this and is a convenient\ntool to have in your Solana toolbox. For more, it's recommended to see the Solana "),s("a",{attrs:{href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);