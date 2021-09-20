# 2. 커밋, 변경사항을 초기화하고 싶어요.

다음과 같이 두 개의 커밋이 있는 상황에서, 우리는 `a 파일을 추가한다` 커밋 시점으로 초기화하고 싶다고 합시다. (초기화를 하면 해당 커밋 시점 이후 모든 커밋이 사라집니다.)

```bash
$ git log --oneline

c008c47 a 파일을 업데이트 한다
b014111 a 파일을 추가한다
```

이 때 `git reset` 명령어를 사용하면 됩니다. `git reset` 명령어는 아래와 같은 옵션을 가지고 있습니다.



## `git reset {커밋 ID} --hard`

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



## `git reset {커밋 ID} --mixed`

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



## `git reset {커밋 ID} --soft`

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
