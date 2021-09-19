# 상황별 Git 사용하기

이번 글에서는 구체적인 상황에 따른 Git 사용법을 배워봅시다.

<br>

## 1. commit이 잘 들어갔는지, 어떤 변경사항이 있는지 확인하고 싶어요.

### `git log`

커밋 내역을 확인하는 가장 일반적인 방법은 `git log` 명령어를 입력하는 것입니다.

```bash
$ git log

commit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 (HEAD -> master)
Author: grab <grab@gmail.com>
Date:   Tue Aug 17 21:21:45 2021 +0900

    a 파일을 업데이트 한다

commit b014111c82fa239b771b2b6d6bdc567282e7b325
Author: grab <grab@gmail.com>
Date:   Tue Aug 17 20:34:32 2021 +0900

    a 파일을 추가한다
```

 다음처럼 `--oneline` 으로 간략하게 볼 수도 있습니다.

```bash
$ git log --one-line

c008c47 (HEAD -> master) a 파일을 업데이트 한다
b014111 a 파일을 추가한다
```



### `git show`

`git show` 명령어로 가장 최근 커밋의 정보를 확인할 수도 있습니다.

```bash
$ git show

commit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 (HEAD -> master)
Author: grab <grab@gmail.com>
Date:   Tue Aug 17 21:21:45 2021 +0900

    a 파일을 업데이트 한다

diff --git a/a b/a
index e69de29..9e365c8 100644
--- a/a
+++ b/a
@@ -0,0 +1 @@
+this is a
```



### `git reflog`

`git reflog` 명령어로 `git reset`, `git rebase` 명령어로 삭제된 커밋을 포함한 모든 커밋 이력을 볼 수 있습니다.

```bash
$ git reflog

c008c47 (HEAD -> master) HEAD@{0}: commit: a 파일을 업데이트 한다
b014111 HEAD@{1}: commit (initial): a 파일을 추가한다
```

> `git reflog` 는 `git reset --hard` 와 같은 명령어를 취소하고 싶을 때 아주 유용합니다. `git reset` 명령어에 대한 설명은 아래에서 나오지만, 여기서 간략하게 `git reflog` 를 사용하는 상황을 살펴봅시다. (아래 `git reset` 명령어를 보고 나서 이 부분을 다시보셔도 좋습니다.)
>
> 작업 중에 다음처럼 `git reset --hard` 로 이전 커밋으로 돌아갔다고 합시다.
>
> ```bash
> $ git reset 0379a06 --hard
>
> HEAD의 현재 위치는 0379a06입니다 b 파일을 추가한다
> ```
>
> 이 때 일반적이라면 `git reset` 하기 전의 작업 내역으로 돌아갈 수 없지만, `git reflog` 에는 이렇게 `git reset` 한 명령 내역까지 모두 남아있습니다.
>
> ```bash
> $ git reflog
>
> 0379a06 (HEAD -> my-branch) HEAD@{0}: reset: moving to 0379a069b014afc2c256f3d94c4fb93fd833003e
> c7591af HEAD@{1}: checkout: moving from master to my-branch
> 9cb8a3b (master) HEAD@{2}: rebase (finish): returning to refs/heads/master
> 9cb8a3b (master) HEAD@{3}: rebase (pick): d 파일을 추가한다
> c7591af HEAD@{4}: rebase (start): checkout my-branch
> 31b3b73 HEAD@{5}: reset: moving to 31b3b73dc282d37a30b9d0242f18dfaf69878c0b
> ```
>
> 따라서 `git reset --hard` 한 명령을 취소하고 싶으면 (명령 이전으로 돌아가고 싶으면) `git reflog` 에서 해당 명령 직전의 해시 값을 참조하여 `git reset --hard` 하면 됩니다.
>
> ```bash
> $ git reset c7591af
> ```

<br>

## 2. 커밋, 변경사항을 초기화하고 싶어요.

다음과 같이 두 개의 커밋이 있는 상황에서, 우리는 `a 파일을 추가한다` 커밋 시점으로 초기화하고 싶다고 합시다. (초기화를 하면 해당 커밋 시점 이후 모든 커밋이 사라집니다.)

```bash
$ git log --oneline

c008c47 a 파일을 업데이트 한다
b014111 a 파일을 추가한다
```

이 때 `git reset` 명령어를 사용하면 됩니다. `git reset` 명령어는 아래와 같은 옵션을 가지고 있습니다.



### `git reset {커밋 ID} --hard`

특정 커밋 시점으로 돌아갈 때, 해당 커밋 이후 만들어진 모든 작업물을 삭제합니다.

```bash
$ git reset b014111 --hard

HEAD의 현재 위치는 b014111입니다 a 파일을 추가한다

$ git log --one-line

b014111 a 파일을 추가한다

$ git status

현재 브랜치 master
커밋할 사항 없음, 작업 폴더 깨끗함
```

현재 작업한 파일들을 모두 날리고 이전 커밋 상태로 완전히 돌아가고싶을 때 사용하지만, 작업 내용을 의도적으로 모두 날리는 것이므로 주의해서 사용해야 합니다.



### `git reset {커밋 ID} --mixed`

특정 커밋 시점으로 돌아갈 때, 해당 커밋 이후 모든 작업물은 workspace 공간에 unstaged 상태로 남게 됩니다.

```bash
$ git reset b014111 --mixed

리셋 뒤에 스테이징하지 않은 변경 사항:
M	a

$ git log --one-line

b014111 a 파일을 추가한다

$ git status

현재 브랜치 master
커밋하도록 정하지 않은 변경 사항:
  (무엇을 커밋할지 바꾸려면 "git add <파일>..."을 사용하십시오)
  (use "git restore <file>..." to discard changes in working directory)
	수정함:        a

커밋할 변경 사항을 추가하지 않았습니다 ("git add" 및/또는 "git commit -a"를 사용하십시오)
```

`--mixed` 옵션은 기본 `git reset` 의 기본 옵션으로 `git reset` 만 실행해도 똑같습니다.



### `git reset {커밋 ID} --soft`

특정 커밋 시점으로 돌아갈 때, 해당 커밋 이후 모든 작업물은 index 공간에 staged 상태로 남게 됩니다.

```bash
$ git reset b014111 --soft

$ git log --one-line

b014111 a 파일을 추가한다

$ git status

현재 브랜치  master
커밋할 변경 사항:
  (use "git restore --staged <file>..." to unstage)
	수정함:        a
```

> `git reset` 명령어에 `{커밋 ID}` 가 아닌 `HEAD` 를 대신 넣을수도 있어요!
>
> `HEAD` 는 커밋 내역에서 현재 커밋(보통 가장 최신 커밋)을 가리키는 포인터입니다. 다음처럼 `git log` 명령어로 `HEAD` 포인터가 현재 어느 커밋을 가리키고 있는지 확인할 수 있습니다.
>
> ```bash
> $ git log --oneline
> c7591af (HEAD -> my-branch) a 파일을 수정한다
> fc25d18 c 파일을 추가한다
> 0379a06 b 파일을 추가한다
> b014111 a 파일을 추가한다
> ```
>
> 만약 `fc25d18` 커밋 내역으로 `reset` 하고 싶으면 `git log fc25d18` 대신 `git reset HEAD~1` 를 사용하면 됩니다. `0379a06` 커밋 내역으로 돌아가고 싶다면 `git reset HEAD~2` 로 하면 되구요!

<br>

## 3. 커밋은 좀 귀찮고.. 임시 저장하고 싶어요.

### `git stash`

`master` 브랜치로부터 `my-branch` 를 만들어 이 브랜치로 전환해서 작업하고 있었다고 합시다. 작업 도중 잠깐 다시 `master`  브랜치로 전환해야할 일이 생겼습니다. 그래서 다음처럼 이동하려고 했는데, 전환할 수 없다고 나옵니다.

```bash
# my-branch 생성
$ git switch -c my-branch

새로 만든 'my-branch' 브랜치로 전환합니다

# 이 브랜치 위에서 작업합니다.
$ echo "edit file a" > a

# 작업한 내역은 이렇습니다.
$ git status

현재 브랜치 my-branch
커밋하도록 정하지 않은 변경 사항:
  (무엇을 커밋할지 바꾸려면 "git add <파일>..."을 사용하십시오)
  (use "git restore <file>..." to discard changes in working directory)
	수정함:        a

커밋할 변경 사항을 추가하지 않았습니다 ("git add" 및/또는 "git commit -a"를
사용하십시오)

# 작업 도중 잠깐 master 브랜치로 이동하려고 합니다.
$ git switch master

error: 다음 파일의 로컬 변경 사항을 체크아웃 때문에 덮어 쓰게 됩니다:
	a
브랜치를 전환하기 전에 변경 사항을 커밋하거나 스태시하십시오.
중지함
```

이렇게 새로운 브랜치에서 기존에 tracking 되고 있는 파일을 수정하게 되면 브랜치 전환을 바로할 수가 없습니다. 위의 경우 `master` 브랜치에도 `a` 라는 파일의 내용이 있는데, `my-branch` 브랜치에서 수정한 `a` 파일을 그대로 가져가면 당연히 충돌이 날 수 밖에 없습니다.

그렇다면 `my-branch` 에서 먼저 커밋을 하고 브랜치를 전환해야할까요? 이렇게하면 브랜치 전환이 가능하긴 하지만, 아직 작업이 완료된 상태가 아닌데 커밋을 찍는건 조금 찝찝합니다. 이럴 때 현재 수정 내용을 임시 저장하는 기능이 있는데 바로 `git stash` 명령어 입니다.

`git stash` 명령을 쓰면 현재 변경사항을 별도의 스택 공간에 빼두게 됩니다.

```bash
$ git stash

Saved working directory and index state WIP on my-branch: b014111 a 파일을 추가한다
```



### `git stash list`

이렇게 `stash` 한 내역은 다음처럼 `git stash list` 로 확인할 수 있습니다.

```bash
$ git stash list

stash@{0}: WIP on tests-2: b014111 a 파일을 추가한다
```

이제 `master` 브랜치로 전환할 수 있습니다.

```bash
$ git switch master

'master' 브랜치로 전환합니다
```



### `git stash pop`

`master` 브랜치에서 해야할 일을 다 마치고 이제 다시 `my-branch` 로 돌아가 아까 하던 작업을 마저하고 싶습니다. 이 떄는 브랜치 이동 후 `git stash pop` 명령어로 아까 스택에 넣어두었던 작업 내역을 다시 불러오면 됩니다.

```bash
$ git switch my-branch

'my-branch' 브랜치로 전환합니다

$ git stash pop

현재 브랜치 my-branch
커밋하도록 정하지 않은 변경 사항:
  (무엇을 커밋할지 바꾸려면 "git add <파일>..."을 사용하십시오)
  (use "git restore <file>..." to discard changes in working directory)
	수정함:        a

커밋할 변경 사항을 추가하지 않았습니다 ("git add" 및/또는 "git commit -a"를
사용하십시오)
Dropped refs/stash@{0} (762134d031bbb57b72183e4001ac283b266d3953)
```

> `git stash pop`과 비슷한 명령어로 `git stash apply` 가 있습니다. 이 둘의 차이점은 스태시한 내역을 저장하는 스택 공간에서 내역을 빼느냐 빼지 않느냐 입니다.
>
> `git stash pop`의 경우 스택에서 작업 내역을 뺍니다. 따라서 `git stash list` 로 해당 작업이 빠져있는 것을 확인할 수 있습니다. 반며
>
> `git stash apply` 의 경우 스택에서 작업 내역을 빼지 않습니다. 따라서 `git stash list` 로 봐도 작업 내역이 그대로 남아있는 것을 볼 수 있죠. 여전히 스택에 남아있기 때문에 다른 곳에서 넣어둔 작업내역을 재사용 가능합니다. (여러 곳에서 `apply` 가능하다는 의미입니다.)



<br>

## 4. 이전 커밋한 내용을 되돌리고 싶어요.

### `git revert {커밋 ID}`

다음과 같은 세 개의 커밋이 있는 상황이라고 합시다.

```bash
$ git log --one-line

875a6e6 b 파일을 추가한다
1fc71a0 a 파일을 업데이트한다
b014111 a 파일을 추가한다
```

이 때 우리는 `1fc71a0 (a 파일을 업데이트 한다)` 커밋 내용을 다시 되돌리고 싶습니다. 그리고 `1fc71a0` 커밋 내용은 이미 remote repostiory 공간에 올라간 상황이라고 해보죠.

앞에서 배운 `git reset 1fc71a0 --hard` 명령어를 입력하면 될거 같습니다만, 이러면 remote repository로 올릴 때 (`git push`) `--force` 명령어를 주어야 합니다. 그러나 대게 최신 작업물이 있는 remote repository에 `git push --force` 명령어를 사용하지 않는게 일반적입니다. 잘못했다가 다른 팀원이 올린 작업물을 지워버릴 수 있기 때문이죠. 그래서 보통 remote repsotiory 단에서 `git push --force` 요청은 받아들일 수 없게 막곤 합니다.

그렇다면 어떻게 해야할까요? 이럴 때 사용하는 명령어가 `git revert` 입니다. 기존 커밋들을 지우지 않고, 현재 커밋 위로 이전 커밋 내용을 다시 되돌리는 커밋을 만듭니다.

```bash
$ git revert 1fc71a0

Revert "a 파일을 수정한다"
This reverts commit 1fc71a0e2b3839cdd0ada557df823609f234610a.

# 변경 사항에 대한 커밋 메시지를 입력하십시오. '#' 문자로 시작하는
# 줄은 무시되고, 메시지를 입력하지 않으면 커밋이 중지됩니다.
#
# 현재 브랜치 master
# 커밋할 변경 사항:
#       수정함:        a
#
```

이제 로그를 확인하면 다음처럼 `1fc71a0` 시점 때의 작업물로 되돌아 온것을 확인할 수 있습니다.

```bash
$ git log --one-line

dea542b This reverts commit 1fc71a0e2b3839cdd0ada557df823609f234610a.
875a6e6 b 파일을 추가한다
1fc71a0 a 파일을 수정한다
b014111 a 파일을 추가한다
```

<br>

## 5. 다른 브랜치에 있는 커밋을 내 브랜치로 가져오고 싶어요.

### `git cherry-pick {커밋 ID}`

다음과 같이 `master` 브랜치로부터 `my-branch` 브랜치를 만들어 작업을 하고 있었다고 합시다.

```bash
$ git switch -c my-branch

새로 만든 'my-branch' 브랜치로 전환합니다

$ touch b
$ git add b
$ git commit -m "b 파일을 추가한다"

$ touch c
$ git add c
$ git commit -m "c 파일을 추가한다"
```

현재까지 작업 내역은 다음과 같습니다.

```bash
$ git log --oneline

7404163 (HEAD -> my-branch) c 파일을 추가한다
c315709 b 파일을 추가한다
b014111 (master) a 파일을 추가한다
```

이제 다시 `master` 브랜치로 가봅시다.

```bash
$ git switch master

'master' 브랜치로 전환합니다

# master 브랜치의 현재 작업 내역은 다음과 같습니다.
$ git log --oneline

b014111 (HEAD -> master) a 파일을 추가한다
```

이제 `master` 브랜치에 `my-branch`의 `7404163 (c 파일을 추가한다)` 커밋만 가져오고 싶습니다. 이 때 사용하는 것이 `git cherry-pick` 명령어 입니다. 이 명령어는 다른 브랜치의 일부 커밋을 현재 브랜치로 가져오게 합니다.

```bash
# 7404163 커밋을 현재 브랜치로 가져옵니다.
$ git cherry-pick 7404163

[master 51488a2] c 파일을 추가한다
 Date: Fri Aug 20 23:13:13 2021 +0900
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 c
```

이제 로그를 확인하면 다음처럼 `7404163` 커밋의 작업내역을 가져온 것을 확인할 수 있습니다.

```bash
$ git log --oneline

51488a2 (HEAD -> master) c 파일을 추가한다
b014111 a 파일을 추가한다

$ ls

a c
```

<br>

## 6. 머지의 종류를 이해하고 활용해보기

두 브랜치를 머지하는 방법에는 크게 3가지가 있습니다.

- 기본 Merge
- Squash & Merge
- Rebase & Merge

이에 대해 알아봅시다.

![enter image description here](images/hUtiB.png)

(출처: https://i.stack.imgur.com/hUtiB.png)



### 기본 Merge - `git merge {브랜치 이름}`

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



### Squash & Merge - `git merge {브랜치 이름} --squash`

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

### Rebase & Merge `git rebase {브랜치 이름}`

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
