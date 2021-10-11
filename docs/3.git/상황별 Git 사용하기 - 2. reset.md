# [reset] 커밋, 변경사항을 초기화하고 싶어요

다음과 같이 두 개의 커밋이 있는 상황에서, 우리는 `a 파일을 추가한다` 커밋 시점으로 초기화하고 싶습니다.

```bash
$ git log --oneline

c008c47 a 파일을 업데이트한다
b014111 a 파일을 추가한다
```

이때 `git reset` 명령어를 사용하면 됩니다. `git reset` 명령어는 아래와 같은 옵션을 가지고 있습니다.

## `git reset --hard {커밋 ID}`

특정 커밋 시점으로 돌아갈 때, 해당 커밋 이후 만들어진 모든 작업물을 삭제합니다.

```bash
$ git reset --hard b014111 

HEAD의 현재 위치는 b014111입니다 a 파일을 추가한다

$ git log --oneline

b014111 a 파일을 추가한다

$ git status

현재 브랜치 master
커밋할 사항 없음, 작업 폴더 깨끗함
```

현재 작업한 파일들을 모두 날리고 이전 커밋 상태로 완전히 돌아가고 싶을 때 사용하지만, 기존에 작성하던 변경사항들도 전부 날아가기 때문에 주의해야 합니다. 



## `git reset --mixed {커밋 ID}`

특정 커밋 시점으로 돌아갈 때, 해당 커밋 이후 모든 작업물은 workspace 공간에 unstaged 상태로 남게 됩니다.

```bash
$ git reset b014111 --mixed

리셋 뒤에 스테이징하지 않은 변경 사항:
M	a

$ git log --oneline

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



## `git reset --soft {커밋 ID}`

특정 커밋 시점으로 돌아갈 때, 해당 커밋 이후 모든 작업물은 index 공간에 staged 상태로 남게 됩니다.

```bash
$ git reset b014111 --soft

$ git log --oneline

b014111 a 파일을 추가한다

$ git status

현재 브랜치  master
커밋할 변경 사항:
  (use "git restore --staged <file>..." to unstage)
	수정함:        a
```

## `git restore {파일 경로}`
특정 파일의 변경사항을 제거하고 HEAD 기준으로 되돌리고 싶을 때, restore를 사용할 수 있습니다

workspace에 있는 변경 사항을 되돌릴 때 : `git restore {파일경로}`  
stage(index)에 있는 변경 사항을 되돌릴 때 : `git restore --staged {파일 경로}`

```bash
# 아직 stage(index)에 올라가지 않은 README.md 파일을 되돌릴 때  
$ git restore README.md
# stage(index)에 올라간 README.md 파일을 되돌릴 때 (workspace로 돌아갑니다) 
$ git restore --staged README.md
```
