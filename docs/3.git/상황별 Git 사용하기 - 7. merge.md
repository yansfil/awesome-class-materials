# 7. 다양한 방법으로 머지해보기

두 브랜치를 머지하는 방법에는 크게 3가지가 있습니다.

- 기본 Merge
- Squash & Merge
- Rebase & Merge

이에 대해 알아봅시다.

![enter image description here](images/hUtiB.png)

(출처: https://i.stack.imgur.com/hUtiB.png)



## 기본 Merge - `git merge {브랜치 이름}`

기본 Merge는 가장 기본적인 머지 방식입니다.

위와 마찬가지로 `master` 브랜치로부터 `my-branch` 브랜치를 만들어 작업을 하고 있었다고 합시다.
`my-branch` 브랜치에는 현재 다음과 같은 커밋 기록이 있습니다.

```bash
$ git switch my-branch

'my-branch' 브랜치로 전환합니다

$ git log --oneline

7404163 (HEAD -> my-branch) c 파일을 추가한다
c315709 b 파일을 추가한다
b014111 (master) a 파일을 추가한다
```

이제 `my-branch` 브랜치에서 작업한 내용을 하나의 커밋으로 만들어 `master` 브랜치에 합치고 싶습니다. 이 때 사용하는 명령어가 `git merge` 입니다. 합치기 위해 먼저 `master` 브랜치로 이동합니다.

```bash
$ git switch master

'master' 브랜치로 전환합니다
```

만약 `master` 브랜치로부터  `my-branch` 브랜치를 만든 이후, `master` 브랜치에 추가 커밋이 없는 상태라면 다음처럼 `git merge` 시 `my-branch` 의 모든 커밋이 그대로 `master` 브랜치로 들어가게 됩니다. 이를  `fast-foward` 방식이라고 합니다.

```bash
$ git merge my-branch

업데이트 중 b014111..c7591af
Fast-forward
 a | 1 +
 b | 0
 c | 0
 3 files changed, 1 insertion(+)
 create mode 100644 b
 create mode 100644 c
```

그러나 다음처럼  `master` 브랜치로부터  `my-branch` 브랜치를 만든 이후, `master` 브랜치에 새로운 커밋이 생겼다고 합시다.

```bash
$ touch d
$ git add d
$ git commit -m "d 파일을 추가한다"

[master 31b3b73] d 파일을 추가한다
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 d
```

이제 이전처럼 `git merge` 명령어를 입력하면 다음처럼 `merge` 를 위한 새로운 커밋이 생기게 됩니다.

```bash
$ git merge my-branch

Merge branch 'my-branch'
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
Merge made by the 'recursive' strategy.
 a | 1 +
 b | 0
 c | 0
 3 files changed, 1 insertion(+)
 create mode 100644 b
 create mode 100644 c

# git log로 확인하면 Merge 내용을 나타내는 커밋이 생성되게 됩니다.
$ git log --oneline

85c04dc (HEAD -> master) Merge branch 'my-branch'
31b3b73 d 파일을 추가한다
c7591af (my-branch) a 파일을 수정한다
fc25d18 c 파일을 추가한다
0379a06 b 파일을 추가한다
b014111 a 파일을 추가한다
```

> ***Merge Conflict**
>
> 머지할 때 두 브랜치가  다음과 같은 상황일 때 깃은 충돌 에러를 내는데 이를 Merge Conflict라고 합니다. (줄여 말해 Conflict이 났다고 표현합니다.)
> - 한 파일의 같은 라인을 고쳤을 때
> - 한 브랜치에서는 파일을 삭제하고 한 브랜치에서는 파일을 변경할 때
> 두 작업 내역을 합치는 Git의 입장에서는 같은 파일의 두 작업내역 중 어떤 것이 최종적으로 저장해야할 내용인지 모르는 것이죠. Conflict가 나면 Conflict가 난 파일을 작업한 개발자간 소통하여 어떻게 처리할지 논의 후 처리해야 합니다.
>
> 보통은 Base 브랜치 (기준이 되는 브랜치)로 부터 작업 브랜치를 만든 이후 Base 브랜치가 업데이트 되어 (다른 개발자가 작업하여) 이 업데이트된 사항을 작업 브랜치에 반영이 안되어서 Conflict가 나곤 합니다. 이럴 때는 작업 브랜치에서 `git rebase {BASE 브랜치}` 로 BASE 브랜치의 최신 사항을 받아오는 방식으로 Conflict를 해결하곤 합니다.



## Squash & Merge - `git merge {브랜치 이름} --squash`

위의 `merge 커밋` 이 없으면 더 깔끔할거 같기도 합니다. `merge 커밋` 도 커밋 내역에 안남고, 해당 브랜치에서 작업한 모든 내용을 하나의 커밋으로 묶어버릴 수는 없을까요?

이 때 사용하는 머지 방식이 Squash & Merge 방식입니다. 명령어는 `git merge --sqaush` 입니다. `squash` 는 여러 커밋을 하나의 커밋으로 만들 때 주는 옵션인데, 브랜치 간 합칠 때 이 옵션을 주겠다는 의미입니다.

```bash
$ git merge my-branch --squash

커밋 합치기 -- HEAD를 업데이트하지 않습니다
자동 병합이 잘 진행되었습니다. 요청한대로 커밋 전에 중지합니다

$ git commit

# Squashed commit of the following:
my-branch 브랜치에서 작업한 내용을 합친다  # 커밋 메시지를 직접 입력해줍니다.

commit c7591af8272a8db86463f9342ebf3fbb8b3ecd1d
Author: socar-hardy <hardy@socar.kr>
Date:   Fri Aug 20 23:35:56 2021 +0900

    a 파일을 수정한다

 commit fc25d18a075e93d867a1e74abcb3b82a1e9a9f17
 Author: socar-hardy <hardy@socar.kr>
 Date:   Fri Aug 20 23:29:35 2021 +0900

     c 파일을 추가한다

 commit 0379a069b014afc2c256f3d94c4fb93fd833003e
 Author: socar-hardy <hardy@socar.kr>
 Date:   Fri Aug 20 23:29:24 2021 +0900

     b 파일을 추가한다

 # 변경 사항에 대한 커밋 메시지를 입력하십시오. '#' 문자로 시작하는
 # 줄은 무시되고, 메시지를 입력하지 않으면 커밋이 중지됩니다.
 #
 # 현재 브랜치 master
 # 커밋할 변경 사항:
 #       수정함:        a
 #       새 파일:       b
 #       새 파일:       c

[master 1b8874f] my-branch 브랜치에서 작업한 내용을 합친다
 3 files changed, 1 insertion(+)
 create mode 100644 b
 create mode 100644 c
```

이제 다음처럼 `git log` 로 커밋 내역을 확인해보면 `my-branch` 에서 작업한 커밋들이 위에서 작성한 하나의 커밋으로 만들어져서  `master` 브랜치에 합쳐진 것을 확인할 수 있습니다.

```bash
$ git log --oneline

1b8874f (HEAD -> master) my-branch 브랜치에서 작업한 내용을 합친다
31b3b73 d 파일을 추가한다
b014111 a 파일을 추가한다
```

<br>

## Rebase & Merge `git rebase {브랜치 이름}`

Rebase & Merge 방식은 `merge` 할 때 `merge 커밋` 을 남기지 않으면서도, `merge` 되는 브랜치의 모든 커밋 내역을 그대로 가져오는 머지입니다. 명령어는 `git rebase` 입니다.

위의 예시와 마찬가지로 `master` 브랜치로부터 생성된 `my-branch` 브랜치에는 다음과 같은 작업내역이 있다고 합시다.

```bash
$ git switch my-branch

'my-branch' 브랜치로 전환합니다

$ git log --oneline

7404163 (HEAD -> my-branch) c 파일을 추가한다
c315709 b 파일을 추가한다
b014111 (master) a 파일을 추가한다
```

위의 예시와 마찬가지로`my-branch` 브랜치를 만든 이후, `master` 브랜치에 새로운 커밋이 생겼다고 합시다.

```bash
$ git switch master

'master' 브랜치로 전환합니다

$ touch d
$ git add d
$ git commit -m "d 파일을 추가한다"

[master 31b3b73] d 파일을 추가한다
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 d
```

이제 `git rebase` 를 사용하면 다음처럼 두 브랜치가 커밋 내역을 그대로 가지고 합쳐지게 됩니다.

```bash
$ git rebase my-branch

Successfully rebased and updated refs/heads/master.

$ git log --one-line

9cb8a3b (HEAD -> master) d 파일을 추가한다
c7591af (my-branch) a 파일을 수정한다
fc25d18 c 파일을 추가한다
0379a06 b 파일을 추가한다
b014111 a 파일을 추가한다
```
