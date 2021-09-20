# Git의 4가지 작업 공간
![img](https://grabyroom.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd758f53f-4f55-4b05-91ad-d97d929a9c00%2FUntitled.png?table=block&id=15bf3b93-7af8-4a58-ba26-e993b3098be9&spaceId=c6d14725-dc16-47d9-8702-41888141488c&width=3580&userId=&cache=v2)

Git에는 크게 4가지 작업 공간이 있습니다.

- **workspace**
    - 우리가 작업하는 일반적인 공간입니다. `git` 을 쓰기 이전 맨 처음 상태라고 보시면 됩니다.
    - `git add` 명령어 이전에는 우리의 작업물들은 이 공간으로 보낼 수 있습니다.
    - 이 공간에 있는 파일들은 `git` 에서 관리하지 않습니다.
- **index**
    - 변경되는 모든 파일 및 폴더들을 추적하는 공간입니다.
    - `git add` 명령어로 workspace 공간에 있는 작업물을 이 공간으로 보낼 수 있습니다.
    - 우리가 관심있고, 최종적으로 커밋하고자 하는 작업물들을 이 공간으로 두면 됩니다.
    - 한번 `index` 에 올라갔던 파일들은 git에서 계속해서 추적합니다.
- **local repository**
    - 최종적으로 커밋된 작업물들이 놓이게 되는 공간입니다.
    - `git commit` 명령어로 index 공간에 있는 작업물을 이 공간으로 보낼 수 있습니다.
    - 최종적으로 우리가 작업한 내용들이 이 공간에 기록됩니다.
- **remote repository**
    - 일명 Git 호스팅 공간으로, 인터넷으로 연결된 별도의 공간입니다. 최종 작업물들을 여기에 저장하고 다른 사람들과 공유합니다.
    - 여러 사람이 같이 협업할 때 이 공간을 사용합니다.
    - `git push` 명령어로 local repository 공간에 있는 작업물을 이 공간으로 보낼 수 있습니다.
    - `git fetch` 나 `git pull` 명령어로 이 공간에 있는 작업물을 local repository로 가져올 수 있습니다.
    - 이 공간에 있는 작업물들을 보통 협업에 있어 가장 최신 버전의 작업물이라고 간주하곤 합니다.
    - GitHub, BitBucket, GitLab 등이 이 공간을 구현한 Git 호스팅 서비스 입니다.

<br>

## 기본 동작 흐름

### 일반적인 작업 흐름

일반적으로 작업 흐름에서 공간은 workspace -> index -> local repository -> remote repository 을 거치게 됩니다.
좀 더 구체적인 예시를 살펴봅시다.

먼저 터미널에서 예시에 사용할 작업을 담을 디렉토리를 하나 만들고 진입한 뒤, Git 사용을 위해 초기화 합니다.

```bash
# 예시를 위한 간단한 git 작업 공간을 만듭니다.
$ mkdir git_example
$ cd git_example
$ git init
```

간단한 파일을 두 개 만들어봅시다. 이게 우리의 작업물이라고 해보죠.

```bash
# 새로 생긴 파일은 workspace 공간에 놓입니다.
$ touch a
$ touch b
```

위 파일들은 아직 `git add` 하지 않았으므로 workspace 공간에 놓이게 됩니다. workspace 공간에 있는 작업물은 `git status` 에서 확인할 수 있습니다.

```bash
# workspace 공간에 놓인 파일들은 `추적하지 않는 파일` 목록에 들어갑니다.
$ git status

현재 브랜치 master

아직 커밋이 없습니다

추적하지 않는 파일:
  (커밋할 사항에 포함하려면 "git add <파일>..."을 사용하십시오)
	a
	b

커밋할 사항을 추가하지 않았지만 추적하지 않는 파일이 있습니다 (추적하려면 "git add"를 사용하십시오)
```

우리는 위에서 만든 작업물 `a`, `b` 중 `a` 에만 관심이 있다고 합시다. 즉 `a` 파일의 내용과 변경 히스토리 등을 추적하고 싶습니다. 이제 `git add` 명령어로 이 파일을 index 공간에 둡니다.

```bash
# git add 명령어로 workspace 공간에 있는 작업물을 index 공간으로 옮깁니다.
$ git add a
```

마찬가지로 `git status` 명령어로 확인할 수 있습니다.

```bash
# index 공간에 놓인 파일들은 `커밋할 변경 사항` 목록에 들어갑니다.
$ git status

현재 브랜치 master

아직 커밋이 없습니다

커밋할 변경 사항:
  (스테이지 해제하려면 "git rm --cached <파일>..."을 사용하십시오)
	새 파일:       a

추적하지 않는 파일:
  (커밋할 사항에 포함하려면 "git add <파일>..."을 사용하십시오)
	b
```

이제 `a` 를 최종적으로 커밋하여 작업 내역을 저장해봅시다. `git commit -m` 명령어로 index 공간에 있는 작업물을 local repository 공간으로 보낼 수 있습니다.

```bash
# git commit 명령어로 index 공간에 있는 작업물을 local repository 공간으로 보냅니다.
$ git commit -m "a 파일을 추가한다"

[master (최상위-커밋) b014111] a 파일을 추가한다
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a
```

`git add` 와 `git commit` 을 한번만 더 해봅시다.
이번에는 `a` 에 있는 내용을 다음처럼 수정합니다.

```bash
# 아무 내용이 없는 a 파일에 내용을 추가해줍니다.
$ echo "this is a" > a
$ cat a

this is a
```

`a` 파일은 이전에 `git add` 로 git이 추적 중인 파일입니다. 따라서 이런 `a` 파일의 변경 사항을 `git status` 에서 확인할 수 있습니다.

```bash
# "커밋하도록 정하지 않은 변경 사항"를 통해 a파일이 수정되었음을 알 수 있습니다.
$ git status

현재 브랜치 master
커밋하도록 정하지 않은 변경 사항:
  (무엇을 커밋할지 바꾸려면 "git add <파일>..."을 사용하십시오)
  (use "git restore <file>..." to discard changes in working directory)
	수정함:        a

추적하지 않는 파일:
  (커밋할 사항에 포함하려면 "git add <파일>..."을 사용하십시오)
	b

커밋할 변경 사항을 추가하지 않았습니다 ("git add" 및/또는 "git commit -a"를
사용하십시오)
```

이제 다시 `git add` 하여 index 공간으로 올리고 `git commit` 으로 커밋합니다.

```bash
$ git add a
$ git commit -m "a 파일을 업데이트 한다"
```

local repository에 기록된 커밋 로그들은 다음처럼 `git log` 로 확인할 수 있습니다.

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

이제 local repository에 있는 이 작업 내역들을 remote repository에 올려봅시다.
이 예제에서는 다음처럼 github를 remote repository로 사용합니다. (github repository 생성 방법은 [이 블로그 글](https://www.lainyzine.com/ko/article/how-to-create-a-new-remote-git-repository-on-github/)을 참고하세요.)

먼저 다음처럼 git에 remote repository를 등록합니다.

```bash
$ git remote add origin git@github.com:grab/git-example.git
```

한번 등록해두면 다음처럼 `git push origin master` 로 올릴 수 있습니다.

```bash
$ git push origin master
```



### 작업 내역 받아오기

위 과정을 개발자 A가 진행했다고 합시다. 개발자 B는 개발자 A가 작업한 내용에 이어서 작업하려고 합니다.
만약 개발자 B가 개발자 A가 프로젝트를 처음 다운로드하는 상황이라면 다음처럼 `git clone` 명령어로 자신의 컴퓨터에 가져올 수 있습니다.

```bash
$ git clone git@github.com:grab/git-example.git
```

만약 처음 다운로드하는 상황이 아니고, 이미 자신의 컴퓨터에 있고 개발자 A가 remote repository에 업데이트한 작업 내역을 받아오고 싶다면 다음처럼 `git pull` 명령어를 사용하면 됩니다.

```bash
$ git pull origin master
```

개발자가 B가 자신의 컴퓨터에 작업 내용을 모두 다운로드 혹은 업데이트한 이후 계속해서 자신의 작업을 해나가면 됩니다. 이 때부터 개발자 B역시 위에서 설명한 일반적인 작업 흐름의 과정을 거쳐서 최종적으로 remote repository에 작업 내역을 업데이트하게 됩니다.



### 주요 명렁어 및 작업 공간 정리

- 위에서 실습해본 Git 명령어와 작업 공간의 흐름을 정리하면 다음과 같습니다.
  ```
  git add : workspace -> index
  git commit : index -> local repository
  git push : local repository -> origin repository
  git pull, fetch : origin repoistory -> local repository
  ```

- Git은 분산 버전 관리 도구로, 작업 내역을 저장할 수 있고 여러 사람과 협업하는데 필수적으로 쓰입니다.
- Git에는 workspace, index, local repository, remote repository의 4가지 공간이 있습니다.
    - 보통 왼쪽에서 오른쪽 순으로 작업흐름이 진행됩니다.
    - 보통 remote repository에서 최신 업데이트된 작업 내역을 받아옵니다.
    - remote repository로는 GitHub, BitBucket, Gitlabs 와 같은 깃 호스팅 서비스를 사용합니다.