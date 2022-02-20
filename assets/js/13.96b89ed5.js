(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{434:function(t,a,s){t.exports=s.p+"assets/img/session_auth.e0d98b70.png"},435:function(t,a,s){t.exports=s.p+"assets/img/token_auth.fd2d96fd.png"},481:function(t,a,s){"use strict";s.r(a);var _=s(24),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"사용자-인증-authentication"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#사용자-인증-authentication"}},[t._v("#")]),t._v(" 사용자 인증(Authentication)")]),t._v(" "),_("p",[t._v("페이스북을 사용하기 위해선 로그인을 해야 합니다. 로그인한 이후에 내 글을 마음대로 올리고 수정할 수 있지만, 타인이 올린 글은 맘대로 수정할 수 없습니다. 또한 접근이 허용되지 않는 페이지들도 존재하곤 합니다.")]),t._v(" "),_("p",[t._v("이때 서비스를 이용하는 사용자를 식별하는 기술을 "),_("code",[t._v("인증(Authentication)")]),t._v("이라고 합니다."),_("br"),t._v("\n예를 들어, 게시판을 생각해봅시다. 회원가입을 하고 글을 쓴 뒤 서버에 저장 요청을 하려고 합니다. 이때 서버 입장에서는 이 글을 쓴 계정이 누구이며, 등록된 사용자인지 어떻게 알까요? 이를 검증하고 식별하는 일이 바로 인증입니다.")]),t._v(" "),_("h2",{attrs:{id:"인증-방식"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#인증-방식"}},[t._v("#")]),t._v(" 인증 방식")]),t._v(" "),_("p",[t._v("여러 인증을 구현하는 방식을 정리해봤습니다. 참고로 대표적인 인증 방식으로는 세션 방식과 토큰 방식을 많이 활용합니다.")]),t._v(" "),_("p",[t._v("참고: 아래 예시는 웹 브라우저 인증을 예로 들지만 웹 브라우저가 아닌 모바일이나 다른 프로그램에서도 이와 유사하게 구현합니다.")]),t._v(" "),_("h3",{attrs:{id:"계정-정보를-클라이언트에서-저장하기"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#계정-정보를-클라이언트에서-저장하기"}},[t._v("#")]),t._v(" 계정 정보를 클라이언트에서 저장하기")]),t._v(" "),_("p",[t._v("계정 정보를 클라이언트에서 저장한 후 서버에 보내주는 방식이 있습니다. 이는 간단하게 구현할 수 있다는 장점이 있습니다.")]),t._v(" "),_("p",[t._v("웹 브라우저에서는 계정 정보를 쿠키 저장소에 저장하여 인증을 간단하게 구현할 수 있습니다.")]),t._v(" "),_("p",[t._v("쿠키를 사용하는 방법은 다음과 같습니다.")]),t._v(" "),_("ol",[_("li",[t._v("먼저 사용자는 로그인 페이지에서 다음처럼 계정 정보를 요청 메시지에 담아 서버에 요청을 보냅니다")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("user_id: grab\npassword: 1234\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v("그럼 서버는 이 정보를 받아 등록된 사용자임을 확인하고, 응답 메시지에 브라우저 쿠키에 위 정보를 응답 헤더에 인코딩을 하여 인증 정보를 담습니다.")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("# 예시 \nset-cookie: ajdi3jiorfiosdnfn44..\n# 디코딩하게 되면 user_id=12345&password=1234 값을 반환합니다.\n")])])]),_("ol",{attrs:{start:"3"}},[_("li",[t._v("응답을 받은 클라이언트는 이 데이터를 브라우저 쿠키에 저장합니다")]),t._v(" "),_("li",[t._v("클라이언트는 서버로 요청을 보낼 때마다 이 쿠키를 함께 보내면, 서버에서는 해당 쿠키 정보를 디코딩해서 데이터베이스를 통해 인증을 진행합니다.")])]),t._v(" "),_("p",[t._v("이 방법으로, 우리는 매번 요청에 계정 정보를 담지 않아도 됩니다.")]),t._v(" "),_("p",[t._v("그러나, 브라우저의 쿠키에 유저의 인증 정보가 그대로 남아있다는 점은 보안에 취약합니다. 또한 서버에서는 요청에 포함된 쿠키를 계속해서 데이터베이스와 통신해야 하기 때문에 자원 낭비 및 성능 저하로 연결될 수 있습니다.")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("쿠키만으로도 충분한 경우")])]),t._v(" "),_("p",[t._v('위 방법처럼 쿠키를 잘 활용하는 경우도 있습니다. 딱히 계정 정보와, 인증이 필요없는 경우입니다.\n대표적으로 쇼핑몰의 장바구니 기능이 있습니다. 보통 로그인을 하지 않아도(비회원으로) 장바구니에 물건 담기가 가능합니다. 이런 시스템은 별도의 인증을 거치지 않지만, 브라우저에 담긴 쿠키로 개별 회원들을 어느 정도 구분합니다.\n이렇게 쿠키는 꼭 인증을 목적으로 쓰이지 않고, "임시 저장소"로서 폭넓게 사용됩니다.')])]),t._v(" "),_("br"),t._v(" "),_("h3",{attrs:{id:"세션-기반-인증"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#세션-기반-인증"}},[t._v("#")]),t._v(" 세션 기반 인증")]),t._v(" "),_("p",[_("img",{attrs:{src:s(434),alt:"img_1.png"}})]),t._v(" "),_("p",[t._v("세션은 클라이언트와 서버 간의 네트워크 연결에 대한 정보를 담고 있는 객체라고 했습니다. 보통 인증을 구현할 때 인증 정보를 담을 수 있는 세션을 많이 활용합니다.")]),t._v(" "),_("ol",[_("li",[t._v("사용자는 쿠키를 사용하는 때와 똑같이 로그인 페이지에서 계정 정보를 다음처럼 요청 메시지에 담아 서버에 요청을 보냅니다.")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("user_id: grab\npassword: 1234\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v('서버는 이 계정 정보를 받아 유효한 계정인지 확인한 후, "세션"이라고 하는 객체를 만들어 유저 정보와 접속 시간 등 연결에 대한 정보를 이 객체에 담습니다. 그리고 세션을 세션 저장소에 저장합니다.')]),t._v(" "),_("li",[t._v("그리고 응답 헤더에 다음처럼 생성한 세션 ID를 담아 클라이언트에게 응답합니다")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("# 예시 \nset-cookie: sessionid=12345\n")])])]),_("ol",{attrs:{start:"4"}},[_("li",[t._v("응답을 받은 클라이언트는 이 데이터를 마찬가지로 브라우저 쿠키에 저장합니다.")]),t._v(" "),_("li",[t._v("이제 클라이언트와 서버는 그대로 드러나는 세션 ID를 주고받게 되고, 서버는 요청을 받을 때마다 세션 저장소에서 세션 ID를 찾고, 유효한 세션 ID인지 확인합니다. 만약 유효하다면 인증에 성공하는 것이고, 유효하지 않다면 인증에 실패한 것입니다.")])]),t._v(" "),_("p",[t._v("이 방법을 이용했을 때 장점은 아래와 같습니다.")]),t._v(" "),_("ul",[_("li",[t._v("계정 정보를 브라우저의 쿠키에 그대로 노출하지 않습니다.")]),t._v(" "),_("li",[t._v("세션의 유효기간을 설정할 수 있기에 보안과 다양한 기능(동시 접속 차단 등)을 구현할 수 있습니다")]),t._v(" "),_("li",[t._v("데이터베이스의 부하를 줄일 수 있습니다.")])]),t._v(" "),_("p",[t._v("다만 인증에 필요한 데이터들을 서버 혹은 별도의 세션 서버에서 관리하기 때문에 서버에 부하가 생기게 됩니다. 실제로 대규모 서비스를 운영하기 위해선 세션 저장소를 체계적으로 관리하는 일도 중요합니다.")]),t._v(" "),_("br"),t._v(" "),_("h3",{attrs:{id:"토큰-기반-인증"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#토큰-기반-인증"}},[t._v("#")]),t._v(" 토큰 기반 인증")]),t._v(" "),_("p",[_("img",{attrs:{src:s(435),alt:"img.png"}}),t._v("\n세션 방식과 함께 많이 사용되는 인증 방식으로 "),_("code",[t._v("토큰 인증(Token Authentication)")]),t._v("방식이 있습니다.")]),t._v(" "),_("p",[t._v('토큰은 별도의 저장소를 사용하지 않고, "토큰"이라고 하는 하나의 문자열에 인증에 필요한 데이터를 모두 담는 방법입니다. 토큰은 여러 종류가 있으나,  '),_("code",[t._v("JWT(Json Web Token)")]),t._v("이 가장 흔하게 사용됩니다.")]),t._v(" "),_("p",[t._v("토큰을 사용하는 방법은 다음과 같습니다.")]),t._v(" "),_("ol",[_("li",[t._v("사용자는 로그인 페이지에서 계정 정보를 다음처럼 요청 메시지에 담아 서버에 요청을 보냅니다.")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("user_id: grab\npassword: 1234\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v("서버는 이 계정 정보를 받아, 유효한 사용자인지 확인한 후 다음처럼 유저 정보와 인증에 필요한 데이터를 문자열로 인코딩합니다. (이 문자열을 토큰이라 합니다.)")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n")])])]),_("ul",[_("li",[t._v("토큰은 인증에 필요한 정보를 담아 암호화된 문자열인데, 이 문자열을 복호화하면 원본 데이터를 얻을 수 있습니다."),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("user_id: grab\nrole: Admin\ncreated_at: 2021-08-11 18:32:01\n")])])])])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("p",[t._v("서버는 응답 메시지에 위 토큰을 담아 응답하고 클라이언트는 해당 토큰을 특정 저장소에 저장합니다.")])]),t._v(" "),_("li",[_("p",[t._v("클라이언트가 토큰을 포함하여 요청했을 때, 서버에서는 토큰을 복호화하여 사용자를 확인합니다. 만약 올바르지 않은, 위변조된 토큰이라면 복호화되지 않습니다.")])])]),t._v(" "),_("p",[t._v("이 방법은 세션처럼 별도의 세션 저장소가 필요하지 않기에 상대적으로 구현이 간편합니다. 인증 로직(토큰 암호화와 복호화)을 서버에 잘 구현해두면 됩니다.")]),t._v(" "),_("p",[t._v("하지만 토큰에 많은 데이터를 저장할수록 토큰이 커지면서 네트워크 통신 비용이 비싸집니다. 또한 한 번 발급된 토큰에 대해서는 중간에 폐기할 수 없다는 단점도 존재합니다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("결국 세션과 토큰 방식의 차이는, 세션은 별도의 저장소에서 세션들을 관리하고 대조하는 방식이며 토큰은 암호화, 복호화 방식으로 별다른 저장소 없이 인증을 진행하는 방식입니다.")]),t._v(" "),_("p",[t._v("서로 장단점이 있으니 상황에 맞게 사용해주시면 됩니다.")])]),t._v(" "),_("h2",{attrs:{id:"인가"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#인가"}},[t._v("#")]),t._v(" 인가")]),t._v(" "),_("p",[t._v("인가(Authorization)는 인증을 마친 사용자가 요청에 대해 유효한 권한을 가지고 있는지 확인하는 작업입니다.")]),t._v(" "),_("p",[t._v('예를 들어, 게시판에서 일반 계정은 자신의 글만 수정하고 지울 수 있습니다. 남의 글을 수정하거나 지울 수 있는 권한이 없습니다. 하지만 관리자 사용자는 모든 계정의 글을 수정하고 지울 수 있는 권한이 있습니다. 이처럼 인증된 계정 사이에도 "권한"이 다른 경우가 있습니다.')]),t._v(" "),_("p",[t._v("그래서 어떤 자원에 대해 접근을 사용자의 권한(Role)에 따라 다르게 설정해주는 것이 중요합니다.")]),t._v(" "),_("h2",{attrs:{id:"정리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[t._v("#")]),t._v(" 정리")]),t._v(" "),_("ul",[_("li",[t._v("인증은 사용자가 등록된 사용자인지 확인하고 식별하는 작업입니다.")]),t._v(" "),_("li",[t._v("현대에는 인증 방식으로 세션, 토큰 방식을 많이 활용합니다.")]),t._v(" "),_("li",[t._v("세션 인증방식은 세션이라는 객체로 인증하는 방식으로 세션 ID를 헤더에 담아 클라이언트/서버가 주고받습니다. 세션을 직접 관리하기에 다양한 인증 처리(동시 접속 차단, 유저 트래킹 등)를 구현할 수 있습니다.")]),t._v(" "),_("li",[t._v("토큰 인증 방식은 유저 정보를 토큰이라고 하는 암호화된 문자열로 만들어 이를 주고받으며 인증하는 방식입니다. 별다른 저장소가 필요하지 않기에 서버를 스케일 업해도 문제가 되지 않습니다.")]),t._v(" "),_("li",[t._v("인가는 인증이 완료된 사용자가 요청에 대해 유효한 권한을 가지고 있는지 확인하는 작업입니다.")])]),t._v(" "),_("h2",{attrs:{id:"더-공부하면-좋은-내용들"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#더-공부하면-좋은-내용들"}},[t._v("#")]),t._v(" 더 공부하면 좋은 내용들")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("OAuth")]),t._v(" "),_("p",[t._v("SNS 로그인은 서비스를 이용하는 사용자들이 비밀번호 같은 정보를 따로 제공하지 않고 다른 서비스(OAuth를 제공하는 서비스들)의 인증 정보로 로그인을 할 수 있는 방식입니다.\n이때 외부 서비스에서 본 서비스의 계정을 활용할 수 있도록 하는 방식(표준)을 OAuth라고 합니다.")])]),t._v(" "),_("li",[_("p",[t._v("인증 과정")]),t._v(" "),_("p",[t._v("실제로 프론트엔드, 백엔드 개발 모두 인증 프로세스에 대해 이해하고 있으면 좋습니다.")]),t._v(" "),_("ul",[_("li",[t._v("그랩의 블로그 - 쉽게 알아보는 서버인증 시리즈\n"),_("ul",[_("li",[_("a",{attrs:{href:"https://tansfil.tistory.com/58",target:"_blank",rel:"noopener noreferrer"}},[t._v("쉽게 알아보는 서버 인증 1편(세션/쿠키 , JWT)"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://tansfil.tistory.com/59",target:"_blank",rel:"noopener noreferrer"}},[t._v("쉽게 알아보는 서버 인증 2편(Access Token + Refresh Token)"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://tansfil.tistory.com/60#comment6188294",target:"_blank",rel:"noopener noreferrer"}},[t._v("쉽게 알아보는 서버 인증 3편(SNS 로그인, OAuth 2.0)"),_("OutboundLink")],1)])])]),t._v(" "),_("li",[_("a",{attrs:{href:"https://bcho.tistory.com/955",target:"_blank",rel:"noopener noreferrer"}},[t._v("조대협님 블로그 - REST API의 이해와 설계-#3 API 보안"),_("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);