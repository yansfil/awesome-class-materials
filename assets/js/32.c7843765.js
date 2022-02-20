(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{486:function(t,a,s){"use strict";s.r(a);var e=s(24),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"작업-공간"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#작업-공간"}},[t._v("#")]),t._v(" 작업 공간")]),t._v(" "),s("h2",{attrs:{id:"git의-4가지-작업공간"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git의-4가지-작업공간"}},[t._v("#")]),t._v(" Git의 4가지 작업공간")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://grabyroom.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd758f53f-4f55-4b05-91ad-d97d929a9c00%2FUntitled.png?table=block&id=15bf3b93-7af8-4a58-ba26-e993b3098be9&spaceId=c6d14725-dc16-47d9-8702-41888141488c&width=3580&userId=&cache=v2",alt:"img"}})]),t._v(" "),s("p",[t._v("Git에는 크게 4가지 작업 공간이 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"workspace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[t._v("#")]),t._v(" workspace")]),t._v(" "),s("ul",[s("li",[t._v("우리가 작업하는 일반적인 공간입니다. "),s("code",[t._v("git")]),t._v(" 을 쓰기 이전 처음 상태입니다.")]),t._v(" "),s("li",[s("code",[t._v("git add")]),t._v(" 명령어 이전에는 변경 사항들은 workspace에 기록됩니다.")])]),t._v(" "),s("h3",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" index")]),t._v(" "),s("ul",[s("li",[t._v("변경되는 모든 파일 및 폴더들을 추적하는 공간입니다. staging Area 라고도 이야기합니다.")]),t._v(" "),s("li",[s("code",[t._v("git add")]),t._v(" 명령어로 workspace 공간에 있는 작업물을 이 공간으로 보낼 수 있습니다.")]),t._v(" "),s("li",[t._v("우리가 관심 있고, 최종적으로 커밋하고자 하는 작업물들을 이 공간으로 두면 됩니다.")]),t._v(" "),s("li",[t._v("한 번 "),s("code",[t._v("index")]),t._v(" 에 올라갔던 파일들은 git에서 계속해서 추적합니다.")])]),t._v(" "),s("h3",{attrs:{id:"local-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-repository"}},[t._v("#")]),t._v(" local repository")]),t._v(" "),s("ul",[s("li",[t._v("최종적으로 커밋된 작업물들이 놓이게 되는 공간입니다.")]),t._v(" "),s("li",[s("code",[t._v("git commit")]),t._v(" 명령어로 index에 있는 파일들을 이 공간으로 보낼 수 있습니다.")]),t._v(" "),s("li",[t._v("최종적으로 우리가 작업한 내용이 이 공간에 기록됩니다.")])]),t._v(" "),s("h3",{attrs:{id:"remote-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-repository"}},[t._v("#")]),t._v(" remote repository")]),t._v(" "),s("ul",[s("li",[t._v("일명 Git 호스팅 공간으로, 인터넷으로 연결된 별도의 공간입니다. 최종 작업물들을 여기에 저장하고 다른 사람들과 공유합니다.")]),t._v(" "),s("li",[t._v("여러 사람이 같이 협업할 때 이 공간을 사용합니다.")]),t._v(" "),s("li",[s("code",[t._v("git push")]),t._v(" 명령어로 local repository 공간에 있는 작업물을 이 공간으로 보낼 수 있습니다.")]),t._v(" "),s("li",[s("code",[t._v("git fetch")]),t._v(" 나 "),s("code",[t._v("git pull")]),t._v(" 명령어로 이 공간에 있는 작업물을 local repository로 가져올 수 있습니다.")]),t._v(" "),s("li",[t._v("이 공간에 있는 작업물들을 보통 협업에서 가장 최신 버전의 작업물이라고 간주합니다.")]),t._v(" "),s("li",[t._v("GitHub, BitBucket, GitLab 등이 이 공간을 구현한 Git 호스팅 서비스입니다.")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"기본-동작-흐름"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-동작-흐름"}},[t._v("#")]),t._v(" 기본 동작 흐름")]),t._v(" "),s("h3",{attrs:{id:"일반적인-작업-흐름"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-작업-흐름"}},[t._v("#")]),t._v(" 일반적인 작업 흐름")]),t._v(" "),s("p",[t._v("일반적으로 작업 흐름에서 공간은 workspace -> index -> local repository -> remote repository 을 거치게 됩니다.")]),t._v(" "),s("p",[t._v("먼저 터미널에서 예시에 사용할 작업을 담을 디렉토리를 하나 만들고 진입한 뒤, Git 사용을 위해 초기화합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 예시를 위한 간단한 git 작업 공간을 만듭니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" git_example\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" git_example\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),s("p",[t._v("간단한 파일을 두 개 만들어봅시다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로 생긴 파일은 workspace 공간에 놓입니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" a\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" b\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("touch")]),t._v("는 linux, mac에서 사용가능한 명령어입니다."),s("br"),t._v("\nwindows에서 리눅스 명령어를 사용하도록 돕는 wsl을 설치하거나 "),s("code",[t._v("type nul > your_file.txt")]),t._v("을 사용하시면 됩니다.")])]),t._v(" "),s("p",[t._v("위 파일들은 아직 "),s("code",[t._v("git add")]),t._v(" 하지 않았으므로 workspace 공간에 놓이게 됩니다. workspace 공간에 있는 작업물은 "),s("code",[t._v("git status")]),t._v(" 에서 확인할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# workspace 공간에 놓인 파일들은 `추적하지 않는 파일` 목록에 들어갑니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n현재 브랜치 main\n\n아직 커밋이 없습니다\n\n추적하지 않는 파일:\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("커밋할 사항에 포함하려면 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <파일>..."')]),t._v("을 사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ta\n\tb\n\n커밋할 사항을 추가하지 않았지만 추적하지 않는 파일이 있습니다 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("추적하려면 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v("를 사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("우리는 위에서 만든 작업물 "),s("code",[t._v("a")]),t._v(", "),s("code",[t._v("b")]),t._v(" 중 "),s("code",[t._v("a")]),t._v(" 에만 관심이 있다고 합시다. 즉 "),s("code",[t._v("a")]),t._v(" 파일의 내용과 변경 히스토리 등을 추적하고 싶습니다. 이제 "),s("code",[t._v("git add")]),t._v(" 명령어로 이 파일을 index 공간에 둡니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git add 명령어로 workspace 공간에 있는 작업물을 index 공간으로 옮깁니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a\n")])])]),s("p",[t._v("마찬가지로 "),s("code",[t._v("git status")]),t._v(" 명령어로 확인할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# index 공간에 놓인 파일들은 `커밋할 변경 사항` 목록에 들어갑니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n현재 브랜치 main\n\n아직 커밋이 없습니다\n\n커밋할 변경 사항:\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("스테이지 해제하려면 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git rm --cached <파일>..."')]),t._v("을 사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t새 파일:       a\n\n추적하지 않는 파일:\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("커밋할 사항에 포함하려면 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <파일>..."')]),t._v("을 사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tb\n")])])]),s("p",[t._v("이제 "),s("code",[t._v("a")]),t._v(" 를 최종적으로 커밋하여 작업 내역을 저장해봅시다. "),s("code",[t._v("git commit -m")]),t._v(" 명령어로 index 공간에 있는 작업물을 local repository 공간으로 보낼 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git commit 명령어로 index 공간에 있는 작업물을 local repository 공간으로 보냅니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a 파일을 추가한다"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("최상위-커밋"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" b014111"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a 파일을 추가한다\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" insertions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" deletions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n create mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" a\n")])])]),s("p",[s("code",[t._v("git add")]),t._v(" 와 "),s("code",[t._v("git commit")]),t._v(" 을 한 번만 더 해봅시다.\n이번에는 "),s("code",[t._v("a")]),t._v(" 에 있는 내용을 다음처럼 수정합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 아무 내용이 없는 a 파일에 내용을 추가해줍니다.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" a\n\nthis is a\n")])])]),s("p",[s("code",[t._v("a")]),t._v(" 파일은 이전에 "),s("code",[t._v("git add")]),t._v(" 로 git이 추적 중인 파일입니다. 따라서 이런 "),s("code",[t._v("a")]),t._v(" 파일의 변경 사항을 "),s("code",[t._v("git status")]),t._v(" 에서 확인할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "커밋하도록 정하지 않은 변경 사항"를 통해 a파일이 수정되었음을 알 수 있습니다.')]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n현재 브랜치 main\n커밋하도록 정하지 않은 변경 사항:\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("무엇을 커밋할지 바꾸려면 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <파일>..."')]),t._v("을 사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git restore <file>..."')]),t._v(" to discard changes "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" working directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t수정함:        a\n\n추적하지 않는 파일:\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("커밋할 사항에 포함하려면 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <파일>..."')]),t._v("을 사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tb\n\n커밋할 변경 사항을 추가하지 않았습니다 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" 및/또는 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),t._v("를\n사용하십시오"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("이제 다시 "),s("code",[t._v("git add")]),t._v(" 하여 index 공간으로 올리고 "),s("code",[t._v("git commit")]),t._v(" 으로 커밋합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a 파일을 수정한다"')]),t._v("\n")])])]),s("p",[t._v("local repository에 기록된 커밋 로그들은 다음처럼 "),s("code",[t._v("git log")]),t._v(" 로 확인할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\ncommit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: grab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grab@gmail.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":21:45 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" +0900\n\n    a 파일을 수정한다\n\ncommit b014111c82fa239b771b2b6d6bdc567282e7b325\nAuthor: grab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grab@gmail.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":34:32 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" +0900\n\n    a 파일을 추가한다\n")])])]),s("p",[t._v("이제 local repository에 있는 이 작업 내역들을 remote repository에 올려봅시다.\n이 예제에서는 다음처럼 github를 remote repository로 사용합니다.")]),t._v(" "),s("p",[t._v("먼저 다음처럼 git에 remote repository를 등록합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:grab/git-example.git\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -M main\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n")])])]),s("p",[t._v("한 번 등록해두면 다음에는 "),s("code",[t._v("git push origin main")]),t._v(" 로 올릴 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin main\n")])])]),s("h3",{attrs:{id:"작업-내역-받아오기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#작업-내역-받아오기"}},[t._v("#")]),t._v(" 작업 내역 받아오기")]),t._v(" "),s("p",[t._v("위 과정을 개발자 A가 진행했다고 합시다. 개발자 B는 개발자 A가 작업한 내용에 이어서 작업하려고 합니다.\n만약 개발자 B가 개발자 A가 프로젝트를 처음 다운로드하는 상황이라면 다음처럼 "),s("code",[t._v("git clone")]),t._v(" 명령어로 자신의 컴퓨터에 가져올 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:grab/git-example.git\n")])])]),s("p",[t._v("만약 처음 다운로드하는 상황이 아니고, 이미 자신의 컴퓨터에 있고 개발자 A가 remote repository에 업데이트한 작업 내역을 받아오고 싶다면 다음처럼 "),s("code",[t._v("git pull")]),t._v(" 명령어를 사용하면 됩니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin main\n")])])]),s("p",[t._v("개발자가 B가 자신의 컴퓨터에 작업 내용을 모두 다운로드 혹은 업데이트한 이후 계속해서 자신의 작업을 해나가면 됩니다. 이때부터 개발자 B역시 위에서 설명한 일반적인 작업 흐름의 과정을 거쳐서 최종적으로 remote repository에 작업 내역을 업데이트하게 됩니다.")]),t._v(" "),s("h3",{attrs:{id:"작업-공간-정리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#작업-공간-정리"}},[t._v("#")]),t._v(" 작업 공간 정리")]),t._v(" "),s("p",[t._v("위에서 실습해본 Git 명령어와 작업 공간의 흐름을 정리하면 다음과 같습니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git add : workspace -> index\ngit commit : index -> local repository\ngit push : local repository -> remote repository\ngit pull, fetch : origin repoistory -> remote repository\n")])])]),s("h2",{attrs:{id:"정리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[t._v("#")]),t._v(" 정리")]),t._v(" "),s("ul",[s("li",[t._v("Git은 분산 버전 관리 도구로, 작업 내역을 저장할 수 있고 여러 사람과 협업할 때 필수적으로 쓰입니다.")]),t._v(" "),s("li",[t._v("Git에는 workspace, index, local repository, remote repository의 4가지 공간이 있습니다.\n"),s("ul",[s("li",[t._v("보통 왼쪽에서 오른쪽 순으로 작업 흐름을 가져갑니다.")]),t._v(" "),s("li",[t._v("보통 remote repository에서 최신 업데이트된 작업 내역을 받아옵니다.")]),t._v(" "),s("li",[t._v("remote repository로는 GitHub, BitBucket, Gitlabs 와 같은 깃 호스팅 서비스를 사용합니다.")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);