# YJW Company 웹사이트

HTML / CSS / JS로만 만든 정적 웹사이트입니다. GitHub Pages로 바로 호스팅할 수 있습니다.

## 파일 구성
```
├── index.html      # 첫화면
├── about.html      # 회사소개
├── business.html   # 사업 분야
├── apps.html       # 출시 예정 앱
├── contact.html    # Contact Us
├── css/style.css   # 공통 스타일
└── js/main.js      # 모바일 메뉴, 현재 페이지 표시
```

## GitHub Pages로 배포하는 방법
1. GitHub에 새 저장소를 만듭니다 (예: `yjw-company-site`).
2. 이 폴더 안의 파일 전체(폴더 구조 그대로)를 저장소에 업로드/커밋합니다.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Source**를 `Deploy from a branch`로 설정하고, 브랜치는 `main`(또는 `master`), 폴더는 `/ (root)`를 선택한 뒤 저장합니다.
5. 잠시 후 `https://[GitHub아이디].github.io/[저장소이름]/` 주소로 사이트가 열립니다.

## 커스텀 도메인을 쓰고 싶다면
저장소 루트에 `CNAME` 파일을 만들어 원하는 도메인(`www.yjwco.kr` 등)을 한 줄 적고, 도메인 등록업체(가비아 등)의 DNS 설정에서 GitHub Pages 안내에 따라 A 레코드/CNAME 레코드를 추가하면 됩니다.

## 수정 팁
- 메뉴, 회사 정보, 연락처는 각 `.html` 파일 안의 텍스트만 수정하면 됩니다.
- 색상·폰트·간격 등 디자인은 `css/style.css` 상단의 `:root` 변수 값만 바꿔도 전체 톤을 조절할 수 있습니다.
- 새 페이지를 추가할 때는 기존 페이지의 `<header>`와 `<footer>` 블록을 그대로 복사해 넣으면 통일된 디자인을 유지할 수 있습니다.
