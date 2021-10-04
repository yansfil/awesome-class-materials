# 3. [stash] 변경 사항을 커밋 전에 잠시 임시저장하고 싶어요 

## `git stash`

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



## `git stash list`

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



## `git stash pop`

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

## `git stash apply`
`git stash pop`과 비슷한 명령어로 `git stash apply` 가 있습니다. 이 둘의 차이점은 스태시한 내역을 저장하는 스택 공간에서 내역을 빼느냐 빼지 않느냐 입니다.

`git stash pop`의 경우 스택에서 작업 내역을 뺍니다. 따라서 `git stash list` 로 해당 작업이 빠져있는 것을 확인할 수 있습니다. 

**반면 `git stash apply` 의 경우 스택에서 작업 내역을 빼지 않습니다.** 따라서 `git stash list` 로 봐도 작업 내역이 그대로 남아있는 것을 볼 수 있죠. 여전히 스택에 남아있기 때문에 다른 곳에서 넣어둔 작업내역을 재사용 가능합니다. (여러 곳에서 `apply` 가능하다는 의미입니다.)