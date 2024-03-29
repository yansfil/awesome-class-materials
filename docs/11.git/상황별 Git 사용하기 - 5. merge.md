# [squash & rebase merge] 브랜치를 머지할 때 머지 커밋을 남기기 싫어요 

두 브랜치를 합치는 방법에는 크게 3가지가 있습니다.

- 기본 Merge
- Squash & Merge
- Rebase & Merge

이에 대해 알아봅시다.

![enter image description here](./images/hUtiB.png)

## `git merge {브랜치 이름}`

`git merge`는 가장 기본적인 머지 방식입니다.

기존 `main` 브랜치로 부터 `feature-branch` 브랜치를 만들어 둡니다. 
현재 main 브랜치는 다음과 같은 커밋 기록이 있습니다. 

```bash
$ git switch -c feature-branch

새로 만든 'feature-branch' 브랜치로 전환합니다

$ git log --oneline

7404163 (HEAD -> main, feature-branch) c 파일을 추가한다
c315709 b 파일을 추가한다
b014111 a 파일을 추가한다
```

이때 feature-branch에 a 파일을 수정하는 새로운 커밋을 만들어 둡니다.
```bash
# ... 파일 수정 작업
$ git commit -m "a 파일을 수정합니다"
```

이제 `feature-branch` 브랜치에서 작업한 내용을 하나의 커밋으로 만들어 `main` 브랜치에 합치고 싶습니다. 
이때 사용하는 명령어가 `git merge` 입니다. 합치기 위해 먼저 `main` 브랜치로 이동합니다.

```bash
 
$ git switch main

'main' 브랜치로 전환합니다
```

만약 `main` 브랜치로부터  `feature-branch` 브랜치를 만든 이후, `main` 브랜치에 추가 커밋이 없는 상태라면 다음처럼 `git merge` 시 `feature-branch` 의 모든 커밋이 그대로 `main` 브랜치로 들어가게 됩니다. 이를  `fast-foward` 방식이라고 합니다.

```bash
$ git merge feature-branch

업데이트 중 b014111..c7591af
Fast-forward
 a | 1 +
 b | 0
 c | 0
 3 files changed, 1 insertion(+)
 create mode 100644 b
 create mode 100644 c
```

그러나 다음처럼 병합이 이뤄지기 전 `main` 브랜치에 새로운 커밋이 생겼다고 합시다.

```bash
$ touch d
$ git add d
$ git commit -m "d 파일을 추가한다"

[main 31b3b73] d 파일을 추가한다
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 d
```

이제 이전처럼 `git merge` 명령어를 입력하면 다음처럼 `merge` 를 위한 머지 커밋이 생기게 됩니다.

```bash
$ git merge feature-branch

Merge branch 'feature-branch'
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

85c04dc (HEAD -> main) Merge branch 'feature-branch'
31b3b73 d 파일을 추가한다
c7591af (feature-branch) a 파일을 수정한다
fc25d18 c 파일을 추가한다
0379a06 b 파일을 추가한다
b014111 a 파일을 추가한다
```

머지 커밋을 통해 명시적으로 브랜치의 병합이 있었다는 걸 표시해주고 싶을 때 `git merge` 방식을 많이 활용합니다.

:::tip
**merge conflict**

머지할 때 두 브랜치가 다음과 같은 상황일 때 Git은 충돌이 발생하는데 이를 Merge Conflict라고 합니다.
- 한 파일의 같은 라인을 고쳤을 때
- 한 브랜치에서는 파일을 삭제하고 한 브랜치에서는 파일을 변경할 때

두 작업 내역을 합치는 Git의 입장에서는 같은 파일의 두 작업내역 중 어떤 사항으로 적용해야 할지 모릅니다. 따라서 Conflict가 난 파일을 해결(Resolve)해준 후 merge를 진행해야 합니다. 
:::

## `git merge {브랜치 이름} --squash` 

별다른 머지 커밋을 만들지 않고 변경 사항만 병합하고 싶은 경우가 있습니다. 이때 머지 커밋을 남기지 않으면서, 해당 브랜치에서 작업한 모든 내용을 하나의 커밋으로 묶어버릴 수는 없을까요?

이때 사용하는 머지 방식이 Squash & Merge 방식입니다. 명령어는 `git merge --sqaush` 입니다. `squash` 는 여러 커밋을 하나의 커밋으로 만들 때 주는 옵션인데, 브랜치 간 합칠 때 이 옵션을 주겠다는 의미입니다.

```bash
$ git merge feature-branch --squash

커밋 합치기 -- HEAD를 업데이트하지 않습니다
자동 병합이 잘 진행되었습니다. 요청한대로 커밋 전에 중지합니다

$ git commit -m "feature-branch 브랜치에서 작업한 내용을 합친다" 

...
[main 1b8874f] feature-branch 브랜치에서 작업한 내용을 합친다
 3 files changed, 1 insertion(+)
 create mode 100644 b
 create mode 100644 c
```

이제 다음처럼 `git log` 로 커밋 내역을 확인해보면 `feature-branch` 에서 작업한 커밋들을 위에서 작성한 하나의 커밋으로 만들어져서  `main` 브랜치에 합쳐진 것을 확인할 수 있습니다.

```bash
$ git log --oneline

1b8874f (HEAD -> main) feature-branch 브랜치에서 작업한 내용을 합친다
31b3b73 d 파일을 추가한다
b014111 c 파일을 추가한다
b014111 b 파일을 추가한다
b014111 a 파일을 추가한다
```

`git merge --squash`로 하나의 커밋으로 묶어서 병합을 하게되면 브랜치의 커밋 구조를 깔끔하게 유지할 수 있습니다. 
다만 나중에 롤백 처리를 할 때 커밋을 한 번에 처리하는 게 불가능해지는 문제가 있습니다. 

<br>

## `git rebase {브랜치 이름}`

Rebase & Merge 방식은 `merge` 할 때 `merge 커밋` 을 남기지 않으면서도, `merge` 되는 브랜치의 모든 커밋 내역을 그대로 가져오는 머지입니다. 명령어는 `git rebase` 입니다.

위의 예시와 마찬가지로 `main` 브랜치로부터 생성된 `feature-branch` 브랜치에는 다음과 같은 작업내역이 있다고 합시다.

```bash
$ git log --oneline

c7591af (feature-branch) a 파일을 수정한다
fc25d18 c 파일을 추가한다
0379a06 b 파일을 추가한다
b014111 a 파일을 추가한다
```

위 두 머지 방식과 다르게 rebase의 경우 병합이 될 브랜치에서 `git rebase {대상 브랜치}`를 사용해주시면 됩니다

```bash
$ git switch feature-branch
$ git rebase main

Successfully rebased and updated refs/heads/feature-branch.

$ git log --oneline

9cb8a3b (HEAD -> main, feature-branch) a 파일을 추가한다
c7591af d 파일을 추가한다
fc25d18 c 파일을 추가한다
0379a06 b 파일을 추가한다
b014111 a 파일을 추가한다
```

`git rebase`는 별다른 커밋을 생성하지 않고 브랜치의 커밋 구조를 변경한다고 보시면 됩니다.
코드를 보는 입장에서는 깔끔할 수 있지만, 브랜치의 병합 히스토리가 명시적으로 잘 남지 않아 히스토리를 추적할 때 불편할 수 있습니다.   

:::tip
개발 팀에서 브랜치 관리 전략에 따라 각기 다른 머지를 사용합니다. 따라서 상황에 맞는 최적의 머지 방식을 사용하시면 됩니다. 
:::

:::tip
대표적인 원격 저장소(GitHub, Bitbucket)들은 브랜치 간 병합을 하기 전 코드를 리뷰할 수 있는 PR(Pull Request) 환경을 제공합니다.
이때 squash, rebase merge 방식을 모두 지원합니다. 
:::