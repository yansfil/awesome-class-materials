# 5. [revert] 이전 변경사항(커밋)을 되돌리고 싶어요.  
이전 커밋의 변경사항을 되돌려야 하는 상황은 꽤 많이 발생합니다. 에러를 발생시키는 커밋이 있다면, 빠르게 해당 커밋의 변경사항을 되돌려야 합니다.   

## `git revert {커밋 ID}`

다음과 같은 세 개의 커밋이 있는 상황이라고 합시다.

```bash
$ git log --oneline

875a6e6 b 파일을 추가한다
1fc71a0 a 파일을 업데이트한다
b014111 a 파일을 추가한다
```

이때 우리는 `1fc71a0 (a 파일을 업데이트 한다)` 커밋 내용을 다시 되돌리고 싶습니다. 그리고 `1fc71a0` 커밋 내용은 이미 remote repository 공간에 올라간 상황이라고 해보죠.

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
$ git log --oneline

dea542b This reverts commit 1fc71a0e2b3839cdd0ada557df823609f234610a.
875a6e6 b 파일을 추가한다
1fc71a0 a 파일을 수정한다
b014111 a 파일을 추가한다
```

<br>
