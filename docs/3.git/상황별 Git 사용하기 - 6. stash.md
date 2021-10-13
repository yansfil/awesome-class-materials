# [stash] 변경 사항을 커밋하기 보단 임시저장하고 싶어요 

## `git stash`

`git stash`는 수정 내용을 임시 저장하는 명령어입니다.

`main` 브랜치로부터 `my-branch` 를 만들어 이 브랜치로 전환해서 작업하고 있었다고 합시다. 작업 도중 잠깐 다시 `main`  브랜치로 전환해야 할 할 일이 생겼습니다.  
이때 변경사항을 커밋으로 남기기에는 아직 진행중이라 애매한 상황이라면 임시 저장을 하는 `git stash`를 활용하면 됩니다.


`git stash` 명령을 쓰면 현재 변경사항을 별도의 스택 공간에 빼두게 됩니다.

```bash
$ git stash

Saved working directory and index state WIP on my-branch: b014111 a 파일을 추가한다
```

만약 메시지를 남기고 싶다면 `-m` 을 활용하면 됩니다.

```bash
$ git stash -m "OOO 변경 사항..."
```

이제 `main` 브랜치로 전환할 수 있습니다.

```bash
$ git switch main

'main' 브랜치로 전환합니다
```





## `git stash list`

이렇게 `stash` 한 내역은 다음처럼 `git stash list` 로 확인할 수 있습니다.

```bash
$ git stash list

stash@{0}: WIP on tests-2: b014111 a 파일을 추가한다
```


## `git stash pop`

`main` 브랜치에서 해야 할 일을 다 마치고 이제 다시 `my-branch` 로 돌아가 작업을 진행하고 싶습니다. 이때는 브랜치 이동 후 `git stash pop` 명령어로 아까 스택에 넣었던 작업 내역을 다시 불러오면 됩니다.

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
`git stash pop`과 비슷한 명령어로 `git stash apply` 가 있습니다. 이 둘의 차이점은 스태시한 내역을 저장하는 스택 공간에서 내역을 제거하는지 여부입니다.

`git stash pop`의 경우 스택에서 작업 내역을 제거합니다. 따라서 `git stash list` 로 해당 작업이 빠져있는 것을 확인할 수 있습니다. 

**반면 `git stash apply` 의 경우 스택에서 작업 내역을 빼지 않습니다.** 따라서 `git stash list` 로 봐도 작업 내역이 그대로 남아있는 것을 볼 수 있죠. 여전히 스택에 남아있기 때문에 다른 곳에서 넣어둔 작업내역을 재사용 가능합니다. (여러 곳에서 `apply` 가능하다는 의미입니다.)