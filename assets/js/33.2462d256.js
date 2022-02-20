(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{487:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"log-reflog-이전-commit-내역들과-변경사항을-확인하고-싶어요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-reflog-이전-commit-내역들과-변경사항을-확인하고-싶어요"}},[t._v("#")]),t._v(" [log & reflog] 이전 commit 내역들과 변경사항을 확인하고 싶어요")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("HEAD")]),t._v(" 는 커밋 내역에서 현재 커밋(보통 가장 최신 커밋)을 가리키는 심볼릭 링크(포인터)입니다.\n보통 명령어에 커밋 ID 대신 HEAD 포인터를 많이 활용하곤 합니다.")]),t._v(" "),s("p",[t._v("HEAD의 이전 커밋들을 확인하고 싶을 땐 HEAD"),s("code",[t._v("^")]),t._v(" 혹은 HEAD"),s("code",[t._v("~")]),t._v("으로 포인팅이 가능합니다. "),s("br"),t._v("\n만약 HEAD로부터 3개 전의 Commit에 접근하고 싶다면 HEAD^^^ 혹은 HEAD~3으로 표현할 수 있습니다")])]),t._v(" "),s("h2",{attrs:{id:"git-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[t._v("#")]),t._v(" "),s("code",[t._v("git log")])]),t._v(" "),s("p",[t._v("커밋 내역을 확인하는 가장 일반적인 방법은 "),s("code",[t._v("git log")]),t._v(" 명령어를 입력하는 것입니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\ncommit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: grab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grab@gmail.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":21:45 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" +0900\n\n    a 파일을 수정한다\n\ncommit b014111c82fa239b771b2b6d6bdc567282e7b325\nAuthor: grab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grab@gmail.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":34:32 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" +0900\n\n    a 파일을 추가한다\n")])])]),s("p",[t._v("다음처럼 "),s("code",[t._v("--oneline")]),t._v(" 으로 간략하게 볼 수도 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n\nc008c47 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a 파일을 수정한다\nb014111 a 파일을 추가한다\n")])])]),s("p",[t._v("특정 개수를 보고 싶다면 "),s("code",[t._v("-n")]),t._v(" 플래그를 활용합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 최근 10개의 커밋들만 보여줍니다. ")]),t._v("\n")])])]),s("p",[t._v("저 같은 경우 git을 그래프 형태로 깔끔하게 보고 싶을 때 아래와 같이 사용합니다."),s("br"),t._v("\n커밋의 전체적인 방향과 머지된 흐름도 파악할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --decorate --graph\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("커밋과 브랜치의 히스토리를 다양하고 쉽게 보여주는 "),s("code",[t._v("Sourcetree")]),t._v("나 "),s("code",[t._v("GitHub Desktop")]),t._v(" 같은 GUI 툴을 사용해보시는 걸 추천드립니다.")])]),t._v(" "),s("h2",{attrs:{id:"git-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-show"}},[t._v("#")]),t._v(" "),s("code",[t._v("git show")])]),t._v(" "),s("p",[s("code",[t._v("git show")]),t._v(" 명령어로 가장 최근 커밋의 정보를 확인할 수도 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show\n\ncommit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: grab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grab@gmail.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":21:45 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" +0900\n\n    a 파일을 수정한다\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/a b/a\nindex e69de29"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("9e365c8 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/a\n+++ b/a\n@@ -0,0 +1 @@\n+this is a\n")])])]),s("p",[t._v("특정 커밋 정보를 확인하려면 "),s("code",[t._v("git show 커밋 해시")]),t._v("를 붙여주면 됩니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show HEAD^ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#HEAD 포인터를 활용할 수도 있습니다")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"git-reflog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-reflog"}},[t._v("#")]),t._v(" "),s("code",[t._v("git reflog")])]),t._v(" "),s("p",[s("code",[t._v("git reflog")]),t._v(" 명령어로 "),s("code",[t._v("git reset")]),t._v(", "),s("code",[t._v("git rebase")]),t._v(" 명령어로 삭제된 커밋을 포함한 모든 커밋 히스토리를 볼 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n\nc008c47 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: a 파일을 수정한다\nb014111 HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": a 파일을 추가한다\n")])])]),s("br"),t._v(" "),s("p",[s("code",[t._v("git reflog")]),t._v(" 는 이전 명령어(ex. git reset --hard)를 취소하고 싶을 때 아주 유용합니다. "),s("code",[t._v("git reset")]),t._v(" 명령어에 대한 설명은 아래에서 나오지만, 여기서 간략하게 "),s("code",[t._v("git reflog")]),t._v(" 를 사용하는 상황을 살펴봅시다.")]),t._v(" "),s("p",[t._v("작업 중에 다음처럼 "),s("code",[t._v("git reset --hard")]),t._v(" 로 이전 커밋으로 돌아갔다고 합시다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset 0379a06 --hard\n\nHEAD의 현재 위치는 0379a06입니다 b 파일을 추가한다\n")])])]),s("p",[t._v("이때 일반적이라면 "),s("code",[t._v("git reset")]),t._v(" 하기 전의 작업 내역으로 돌아갈 수 없지만, "),s("code",[t._v("git reflog")]),t._v(" 에는 이렇게 "),s("code",[t._v("git reset")]),t._v(" 한 명령 내역까지 모두 남아있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n\n0379a06 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD - my-branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": reset: moving to 0379a069b014afc2c256f3d94c4fb93fd833003e\nc7591af HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": checkout: moving from main to my-branch\n9cb8a3b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": returning to refs/heads/main\n9cb8a3b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": d 파일을 추가한다\nc7591af HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": checkout my-branch\n31b3b73 HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": reset: moving to 31b3b73dc282d37a30b9d0242f18dfaf69878c0b\n")])])]),s("p",[t._v("따라서 "),s("code",[t._v("git reset --hard")]),t._v(" 한 명령을 취소하고 싶으면 (명령 이전으로 돌아가고 싶으면) "),s("code",[t._v("git reflog")]),t._v(" 에서 해당 명령 직전의 커밋 해시 값을 참조하여 "),s("code",[t._v("git reset --hard")]),t._v(" 하면 됩니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset c7591af --hard\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);