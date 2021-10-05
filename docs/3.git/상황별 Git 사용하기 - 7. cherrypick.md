# [cherry-pick] 다른 브랜치에 있는 커밋을 내 브랜치로 가져오고 싶어요.

## `git cherry-pick {커밋 ID}`

다음과 같이 `master` 브랜치로부터 `my-branch` 브랜치를 만들어 작업하고 있었다고 합시다.

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

이제 `master` 브랜치에 `my-branch`의 `7404163 (c 파일을 추가한다)` 커밋만 가져오고 싶습니다. 이때 사용하는 것이 `git cherry-pick` 명령어입니다. 이 명령어는 다른 브랜치의 일부 커밋을 현재 브랜치로 가져오게 합니다.

```bash
# 7404163 커밋을 현재 브랜치로 가져옵니다.
$ git cherry-pick 7404163

[master 51488a2] c 파일을 추가한다
 Date: Fri Aug 20 23:13:13 2021 +0900
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 c
```

이제 로그를 확인하면 다음처럼 `7404163` 커밋의 작업내역을 가져온 것을 확인할 수 있습니다. 이때 변경 사항을 복사해서 새로운 커밋을 만드는 것이기에 커밋 해시는 변경됩니다. 

```bash
$ git log --oneline

51488a2 (HEAD -> master) c 파일을 추가한다
b014111 a 파일을 추가한다

$ ls

a c
```

<br>
