(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{492:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"stash-변경-사항을-커밋하기-보단-임시저장하고-싶어요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stash-변경-사항을-커밋하기-보단-임시저장하고-싶어요"}},[s._v("#")]),s._v(" [stash] 변경 사항을 커밋하기 보단 임시저장하고 싶어요")]),s._v(" "),a("h2",{attrs:{id:"git-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[s._v("#")]),s._v(" "),a("code",[s._v("git stash")])]),s._v(" "),a("p",[a("code",[s._v("git stash")]),s._v("는 수정 내용을 임시 저장하는 명령어입니다.")]),s._v(" "),a("p",[a("code",[s._v("main")]),s._v(" 브랜치로부터 "),a("code",[s._v("my-branch")]),s._v(" 를 만들어 이 브랜치로 전환해서 작업하고 있었다고 합시다. 작업 도중 잠깐 다시 "),a("code",[s._v("main")]),s._v("  브랜치로 전환해야 할 할 일이 생겼습니다."),a("br"),s._v("\n이때 변경사항을 커밋으로 남기기에는 아직 진행중이라 애매한 상황이라면 임시 저장을 하는 "),a("code",[s._v("git stash")]),s._v("를 활용하면 됩니다.")]),s._v(" "),a("p",[a("code",[s._v("git stash")]),s._v(" 명령을 쓰면 현재 변경사항을 별도의 스택 공간에 빼두게 됩니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n\nSaved working directory and index state WIP on my-branch: b014111 a 파일을 추가한다\n")])])]),a("p",[s._v("만약 메시지를 남기고 싶다면 "),a("code",[s._v("-m")]),s._v(" 을 활용하면 됩니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OOO 변경 사항..."')]),s._v("\n")])])]),a("p",[s._v("이제 "),a("code",[s._v("main")]),s._v(" 브랜치로 전환할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch main\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main'")]),s._v(" 브랜치로 전환합니다\n")])])]),a("h2",{attrs:{id:"git-stash-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-list"}},[s._v("#")]),s._v(" "),a("code",[s._v("git stash list")])]),s._v(" "),a("p",[s._v("이렇게 "),a("code",[s._v("stash")]),s._v(" 한 내역은 다음처럼 "),a("code",[s._v("git stash list")]),s._v(" 로 확인할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n\nstash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": WIP on tests-2: b014111 a 파일을 추가한다\n")])])]),a("h2",{attrs:{id:"git-stash-pop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-pop"}},[s._v("#")]),s._v(" "),a("code",[s._v("git stash pop")])]),s._v(" "),a("p",[a("code",[s._v("main")]),s._v(" 브랜치에서 해야 할 일을 다 마치고 이제 다시 "),a("code",[s._v("my-branch")]),s._v(" 로 돌아가 작업을 진행하고 싶습니다. 이때는 브랜치 이동 후 "),a("code",[s._v("git stash pop")]),s._v(" 명령어로 아까 스택에 넣었던 작업 내역을 다시 불러오면 됩니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch my-branch\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my-branch'")]),s._v(" 브랜치로 전환합니다\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n\n현재 브랜치 my-branch\n커밋하도록 정하지 않은 변경 사항:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("무엇을 커밋할지 바꾸려면 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <파일>..."')]),s._v("을 사용하십시오"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore <file>..."')]),s._v(" to discard changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t수정함:        a\n\n커밋할 변경 사항을 추가하지 않았습니다 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" 및/또는 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),s._v("를\n사용하십시오"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nDropped refs/stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("762134d031bbb57b72183e4001ac283b266d3953"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"git-stash-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-apply"}},[s._v("#")]),s._v(" "),a("code",[s._v("git stash apply")])]),s._v(" "),a("p",[a("code",[s._v("git stash pop")]),s._v("과 비슷한 명령어로 "),a("code",[s._v("git stash apply")]),s._v(" 가 있습니다. 이 둘의 차이점은 스태시한 내역을 저장하는 스택 공간에서 내역을 제거하는지 여부입니다.")]),s._v(" "),a("p",[a("code",[s._v("git stash pop")]),s._v("의 경우 스택에서 작업 내역을 제거합니다. 따라서 "),a("code",[s._v("git stash list")]),s._v(" 로 해당 작업이 빠져있는 것을 확인할 수 있습니다.")]),s._v(" "),a("p",[a("strong",[s._v("반면 "),a("code",[s._v("git stash apply")]),s._v(" 의 경우 스택에서 작업 내역을 빼지 않습니다.")]),s._v(" 따라서 "),a("code",[s._v("git stash list")]),s._v(" 로 봐도 작업 내역이 그대로 남아있는 것을 볼 수 있죠. 여전히 스택에 남아있기 때문에 다른 곳에서 넣어둔 작업내역을 재사용 가능합니다. (여러 곳에서 "),a("code",[s._v("apply")]),s._v(" 가능하다는 의미입니다.)")])])}),[],!1,null,null,null);t.default=e.exports}}]);