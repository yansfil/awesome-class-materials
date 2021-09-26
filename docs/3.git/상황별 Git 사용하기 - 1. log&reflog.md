# 1. commit이 잘 들어갔는지, 어떤 변경사항이 있는지 확인하고 싶어요.

## `git log`

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
$ git log --oneline

c008c47 (HEAD -> master) a 파일을 업데이트 한다
b014111 a 파일을 추가한다
```

특정 개수를 보고 싶다면 `-n` 플래그를 활용합니다.

```bash
$ git log -n 10

# 최근 10개의 커밋들만 보여줍니다. 
```


## `git show`

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
만약 HEAD로 부터 3개 전의 Commit에 접근하고 싶다면 HEAD^^^ 혹은 HEAD~3으로 표현할 수 있습니다
:::

## `git reflog`

`git reflog` 명령어로 `git reset`, `git rebase` 명령어로 삭제된 커밋을 포함한 모든 커밋 히스토리를 볼 수 있습니다.

```bash
$ git reflog

c008c47 (HEAD -> master) HEAD@{0}: commit: a 파일을 업데이트 한다
b014111 HEAD@{1}: commit (initial): a 파일을 추가한다
```

<br>

`git reflog` 는 `git reset --hard` 와 같은 명령어를 취소하고 싶을 때 아주 유용합니다. `git reset` 명령어에 대한 설명은 아래에서 나오지만, 여기서 간략하게 `git reflog` 를 사용하는 상황을 살펴봅시다. (아래 `git reset` 명령어를 보고 나서 이 부분을 다시보셔도 좋습니다.)

작업 중에 다음처럼 `git reset --hard` 로 이전 커밋으로 돌아갔다고 합시다.

```bash
$ git reset 0379a06 --hard

HEAD의 현재 위치는 0379a06입니다 b 파일을 추가한다
```

이 때 일반적이라면 `git reset` 하기 전의 작업 내역으로 돌아갈 수 없지만, `git reflog` 에는 이렇게 `git reset` 한 명령 내역까지 모두 남아있습니다.

```bash
$ git reflog

0379a06 (HEAD - my-branch) HEAD@{0}: reset: moving to 0379a069b014afc2c256f3d94c4fb93fd833003e
c7591af HEAD@{1}: checkout: moving from master to my-branch
9cb8a3b (master) HEAD@{2}: rebase (finish): returning to refs/heads/master
9cb8a3b (master) HEAD@{3}: rebase (pick): d 파일을 추가한다
c7591af HEAD@{4}: rebase (start): checkout my-branch
31b3b73 HEAD@{5}: reset: moving to 31b3b73dc282d37a30b9d0242f18dfaf69878c0b
```

따라서 `git reset --hard` 한 명령을 취소하고 싶으면 (명령 이전으로 돌아가고 싶으면) `git reflog` 에서 해당 명령 직전의 해시 값을 참조하여 `git reset --hard` 하면 됩니다.

```bash
$ git reset c7591af
```