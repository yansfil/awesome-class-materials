(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{489:function(t,a,e){"use strict";e.r(a);var s=e(24),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"revert-이전-커밋의-변경사항을-되돌리고-싶어요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revert-이전-커밋의-변경사항을-되돌리고-싶어요"}},[t._v("#")]),t._v(" [revert] 이전 커밋의 변경사항을 되돌리고 싶어요.")]),t._v(" "),e("p",[t._v("이전 커밋의 변경사항을 되돌려야 하는 상황은 꽤 많이 발생합니다. 에러를 발생시키는 커밋이 있다면, 빠르게 해당 커밋의 변경사항을 되돌려야 합니다.")]),t._v(" "),e("h2",{attrs:{id:"git-revert-커밋-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-커밋-id"}},[t._v("#")]),t._v(" "),e("code",[t._v("git revert {커밋 ID}")])]),t._v(" "),e("p",[t._v("다음과 같은 세 개의 커밋이 있는 상황이라고 합시다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n\n875a6e6 b 파일을 추가한다\n1fc71a0 a 파일을 수정한다\nb014111 a 파일을 추가한다\n")])])]),e("p",[t._v("이때 우리는 "),e("code",[t._v("1fc71a0 (a 파일을 수정한다)")]),t._v(" 커밋이 문제가 있다는 걸 알게 됐습니다. "),e("code",[t._v("1fc71a0")]),t._v(" 커밋 내용은 이미 remote repository 공간에 올라갔습니다.")]),t._v(" "),e("p",[t._v("중간에 있는 커밋의 변경사항만 되돌리기 위해선 "),e("code",[t._v("git reset")]),t._v("은 부족해 보입니다. 이럴 때 사용하는 명령어가 "),e("code",[t._v("git revert")]),t._v(" 입니다. 기존 커밋들을 지우지 않고, 현재 커밋 위로 이전 커밋 내용을 다시 되돌리는 커밋을 만듭니다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert 1fc71a0\n\nRevert "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a 파일을 수정한다"')]),t._v("\nThis reverts commit 1fc71a0e2b3839cdd0ada557df823609f234610a.\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 변경 사항에 대한 커밋 메시지를 입력하십시오. '#' 문자로 시작하는")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 줄은 무시되고, 메시지를 입력하지 않으면 커밋이 중지됩니다.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치 main")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 커밋할 변경 사항:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       수정함:        a")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),e("p",[t._v("이제 로그를 확인하면 다음처럼 "),e("code",[t._v("1fc71a0")]),t._v(" 시점 때의 작업물로 되돌아온 것을 확인할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n\ndea542b This reverts commit 1fc71a0e2b3839cdd0ada557df823609f234610a.\n875a6e6 b 파일을 추가한다\n1fc71a0 a 파일을 수정한다\nb014111 a 파일을 추가한다\n")])])]),e("br"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("이전 커밋을 되돌려야 하는 상황일 때 "),e("code",[t._v("rebase --interactive")]),t._v("를 사용하여 커밋 내역을 조작할 수 있습니다 (다음 장에서 다룹니다)")])])])}),[],!1,null,null,null);a.default=n.exports}}]);