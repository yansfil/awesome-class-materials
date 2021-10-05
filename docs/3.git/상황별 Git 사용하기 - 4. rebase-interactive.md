# [amend commit & rebase] 이전에 쌓인 커밋들을 변경하고 싶어요. 
Git을 사용하다 보면 이전 커밋을 변경해야 하는 경우들이 종종 있습니다. 커밋 메시지를 수정하고 싶다거나 변경된 파일 일부를 되돌릴 수도 있습니다.

- 현재 작업 중인 커밋(HEAD) 간단하게 수정할 때 `git commit --amend`를 사용합니다.
- 아래에 있는 커밋들 중 일부를 수정하거나 변경할 때 `git rebase --interactive`를 사용합니다.

:::tip
`git revert`의 경우 대상 커밋을 되돌리는 새로운 커밋을 만드는 기능이며, 커밋 자체를 변경하지는 못합니다
:::

## `git commit --amend`
`--amend`는 현재 커밋(HEAD) 위에 변경사항을 덮어씌울 때 사용하는 옵션입니다. 커밋을 한 후 추가적인 변경사항이 생겼거나 커밋 메시지를 변경하고 싶을 때 많이 사용합니다.

만약 변경사항을 추가하고 싶다면 commit을 할 때와 마찬가지로 staging(index)에 올린 후 명령어를 입력하시면 됩니다.
 
```bash
$ git add .

# 만약 커밋 메시지를 변경하고 싶다면 텍스트를 수정한 후 저장을 하면 됩니다.
# 변경이 필요 없다면 바로 :wq로 저장을 하면 됩니다. 
$ git commit --amend

feat: 기존 커밋 메시지...
  
# 변경 사항에 대한 커밋 메시지를 입력하십시오. '#' 문자로 시작하는
# 줄은 무시되고, 메시지를 입력하지 않으면 커밋이 중지됩니다.
#
# 시각:      Sun Sep 26 01:14:25 2021 +0900
#
# 현재 브랜치 main
# 브랜치가 'origin/main'보다 1개 커밋만큼 앞에 있습니다.
#   (로컬에 있는 커밋을 제출하려면 "git push"를 사용하십시오)
...

```

:::tip
만약 커밋 메시지만 수정하고 싶다면 변경사항 없이 바로 git commit --amend를 사용하시면 됩니다.
:::

커밋 메시지의 수정을 필요로 하지 않는 경우 `--no-edit` 옵션을 붙여주시면 됩니다.
```bash
$ git commit --amend --no-edit

[main ed58623] feat: 기존 커밋 메시지...
Date: Sun Sep 26 01:14:25 2021 +0900
8 files changed, 112 insertions(+), 107 deletions(-)
...
```

## `git rebase --interactive {커밋 ID}`
`git rebase` 명령어는 브랜치 병합 과정에서 자주 사용됩니다. 하지만 동시에 과거 커밋 히스토리를 변경할 수 있는 기능도 `--interactive` 옵션을 통해 제공합니다.

:::tip
해당 옵션은 `-i` shortcut으로 많이 사용합니다.
:::

커밋 히스토리의 수정 범위는 현재 최신 커밋부터 {커밋 ID} 바로 위 커밋까지 적용됩니다.

예시와 함께 알아보겠습니다. 총 3개의 커밋이 존재하며 각각 a, b, c 파일을 추가했다고 가정하겠습니다.  

```bash
$ git log --oneline

bec1c83 (HEAD -> main) c를 추가한다
bdc0d87 b를 추가한다
1dee32c a를 추가한다

```

이때 두 번째 커밋에 b2 파일을 추가하고 세 번째(마지막) 커밋에 c파일을 삭제해야 하는 상황이 생겼습니다. 그러면 아래 커밋인 1dee32c을 범위로 적용해줘야 합니다.

```bash
$ git rebase --interactive 1dee32c # 혹은 HEAD^^ , HEAD~2 로도 표현할 수 있습니다.

pick bdc0d87 b를 추가한다
pick bec1c83 c를 추가한다

# Rebase 1dee32c..bec1c83 onto 1dee32c (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message 
```

입력 후, VIM 에디터를 확인할 수 있습니다. 대표적인 Command들을 먼저 소개하면 아래와 같습니다.

- `pick` : 별다른 변경 사항없이 그냥 커밋으로 두겠다
- `edit` : 해당 커밋 내용을 변경할 것이며 커밋 메시지도 변경할 수 있게 하겠다
- `reword` : 해당 커밋의 메시지만 변경하겠다.
- `drop` : 해당 커밋을 제거하겠다

이 외에도 커밋들을 합칠 때 사용하는 `squash`, 브랜치를 머지시키는 `merge` Command 등이 존재합니다.

우선 커밋의 변경사항을 수정하기 위해 해당 커밋 라인의 pick을 edit으로 변경한 후 저장하겠습니다(:wq)

```shell
edit bdc0d87 b를 추가한다 # 약자로 e를 넣어도 무방합니다. 
pick bec1c83 c를 추가한다

#저장 후 
bdc0d87...  b를 추가한다 # 해당 위치에서 멈췄습니다
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue
```

그러면 해당 커밋으로 HEAD가 옮겨지며, 자유롭게 코드를 추가/삭제/변경할 수 있습니다.
```bash
$ touch b2 # b2파일을 추가하는 변경 사항을 줍니다.
$ git add b2
```

모든 코드 변경을 마친 후 `git commit --amend`를 입력하면, 현재 최신 커밋(HEAD)에 덮어씌우는 작업을 하게 됩니다. 
커밋 메시지도 같이 수정을 해보겠습니다.

```bash
$ git commit --amend

b와 b2를 추가한다  

# 변경 사항에 대한 커밋 메시지를 입력하십시오. '#' 문자로 시작하는
# 줄은 무시되고, 메시지를 입력하지 않으면 커밋이 중지됩니다.
#
# 시각:      Sun Sep 26 16:59:27 2021 +0900
#
```

최종적으로 commit을 마친 후 모든 변경 사항을 적용했다면 `git rebase --continue`로 다음 작업 대상으로 넘어가면 됩니다.
그렇게 되면 HEAD는 위에서 edit을 입력한 커밋으로 올라가게 됩니다. 이후 변경 작업은 동일합니다.
```bash
$ git rebase --continue

8f820c0...  c를 추가한다 위치에서 멈췄습니다
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue
```

만약 해당 커밋의 변경 사항을 주지 않고 다음으로 넘어가고 싶다면 `git rebase --skip`을 사용하면 됩니다.
```bash
$ git rebase --skip 

# 다음 변경할 commit으로 HEAD가 옮겨갑니다.
```

만약 rebase 하는 과정에서 전체를 취소하고 싶을 수 있습니다. 이때 `git rebase --abort`를 사용하면 됩니다.

```bash
$ git rebase --abort

# rebase -i를 주기 전 원래 환경으로 돌아옵니다. 
```

:::tip
중간에 있는 커밋을 변경하는 과정에서 상위 커밋과의 변경 사항이 충돌할 수도 있습니다. 

그럴 때는 충돌난 부분을 수정한 후 `git add`로 index에 충돌을 수정한 부분을 올린 후 `git rebase --continue`를 사용하시면 됩니다. 
:::