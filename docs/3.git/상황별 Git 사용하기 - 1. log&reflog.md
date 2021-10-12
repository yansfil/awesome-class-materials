# [log & reflog] 이전 commit 내역들과 변경사항을 확인하고 싶어요

## `git log`

커밋 내역을 확인하는 가장 일반적인 방법은 `git log` 명령어를 입력하는 것입니다.

```bash
$ git log

commit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 (HEAD -> main)
Author: grab <grab@gmail.com>
Date:   Tue Aug 17 21:21:45 2021 +0900

    a 파일을 수정한다

commit b014111c82fa239b771b2b6d6bdc567282e7b325
Author: grab <grab@gmail.com>
Date:   Tue Aug 17 20:34:32 2021 +0900

    a 파일을 추가한다
```

 다음처럼 `--oneline` 으로 간략하게 볼 수도 있습니다.

```bash
$ git log --oneline

c008c47 (HEAD -> main) a 파일을 수정한다
b014111 a 파일을 추가한다
```

특정 개수를 보고 싶다면 `-n` 플래그를 활용합니다.

```bash
$ git log -n 10

# 최근 10개의 커밋들만 보여줍니다. 
```

저 같은 경우 git을 그래프 형태로 깔끔하게 보고 싶을 때 아래와 같이 사용합니다.  
커밋의 전체적인 방향과 머지된 흐름도 파악할 수 있습니다.

```bash
git log --oneline --decorate --graph
```

:::tip
커밋과 브랜치의 히스토리를 다양하고 쉽게 보여주는 `Sourcetree`나 `GitHub Desktop` 같은 GUI 툴을 사용해보시는 걸 추천드립니다.
:::

## `git show`

`git show` 명령어로 가장 최근 커밋의 정보를 확인할 수도 있습니다.

```bash
$ git show

commit c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4 (HEAD -> main)
Author: grab <grab@gmail.com>
Date:   Tue Aug 17 21:21:45 2021 +0900

    a 파일을 수정한다

diff --git a/a b/a
index e69de29..9e365c8 100644
--- a/a
+++ b/a
@@ -0,0 +1 @@
+this is a
```

특정 커밋 정보를 확인하려면 `git show 커밋 해시`를 붙여주면 됩니다.

```bash
$ git show c008c4785eeb14a395b4aa6cf9fa3b9e5896f5a4
$ git show HEAD^ #HEAD 포인터를 활용할 수도 있습니다
```

<br>

:::tip
`HEAD` 는 커밋 내역에서 현재 커밋(보통 가장 최신 커밋)을 가리키는 심볼릭 링크(포인터)입니다.
보통 명령어에 커밋 ID 대신 HEAD 포인터를 많이 활용하곤 합니다.

HEAD의 이전 커밋들을 확인하고 싶을 땐 HEAD`^` 혹은 HEAD`~`으로 포인팅이 가능합니다. <br>
만약 HEAD로부터 3개 전의 Commit에 접근하고 싶다면 HEAD^^^ 혹은 HEAD~3으로 표현할 수 있습니다
:::

## `git reflog`

`git reflog` 명령어로 `git reset`, `git rebase` 명령어로 삭제된 커밋을 포함한 모든 커밋 히스토리를 볼 수 있습니다.

```bash
$ git reflog


c008c47 (HEAD -> main) HEAD@{0}: commit: a 파일을 수정한다
b014111 HEAD@{1}: commit (initial): a 파일을 추가한다
```

<br>

`git reflog` 는 이전 명령어(ex. git reset --hard)를 취소하고 싶을 때 아주 유용합니다. `git reset` 명령어에 대한 설명은 아래에서 나오지만, 여기서 간략하게 `git reflog` 를 사용하는 상황을 살펴봅시다. 

작업 중에 다음처럼 `git reset --hard` 로 이전 커밋으로 돌아갔다고 합시다.

```bash
$ git reset 0379a06 --hard

HEAD의 현재 위치는 0379a06입니다 b 파일을 추가한다
```

이때 일반적이라면 `git reset` 하기 전의 작업 내역으로 돌아갈 수 없지만, `git reflog` 에는 이렇게 `git reset` 한 명령 내역까지 모두 남아있습니다.

```bash
$ git reflog


0379a06 (HEAD - my-branch) HEAD@{0}: reset: moving to 0379a069b014afc2c256f3d94c4fb93fd833003e
c7591af HEAD@{1}: checkout: moving from main to my-branch
9cb8a3b (main) HEAD@{2}: rebase (finish): returning to refs/heads/main
9cb8a3b (main) HEAD@{3}: rebase (pick): d 파일을 추가한다
c7591af HEAD@{4}: rebase (start): checkout my-branch
31b3b73 HEAD@{5}: reset: moving to 31b3b73dc282d37a30b9d0242f18dfaf69878c0b
```

따라서 `git reset --hard` 한 명령을 취소하고 싶으면 (명령 이전으로 돌아가고 싶으면) `git reflog` 에서 해당 명령 직전의 커밋 해시 값을 참조하여 `git reset --hard` 하면 됩니다.

```bash
$ git reset c7591af --hard
```