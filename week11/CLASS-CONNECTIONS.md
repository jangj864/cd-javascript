# 수업 코드와 프로젝트 연결

이 프로젝트의 흐름은 **도시 선택 → API 요청 → JSON 읽기 → 조건 판단 → 표정 갱신 → 도시 저장**입니다.

## 코드에서 찾아볼 부분

| 배운 개념 | 프로젝트에서 하는 일 | 관련 함수 / 파일 | 수업 예제 |
| --- | --- | --- | --- |
| `async`, `await`, `fetch`, `response.json()` | 검색한 도시와 현재 대기질 받기 | `searchCities()`, `fetchAirQuality()`, `fetchJSON()` — [air-data.js](air-data.js) | [Week 10 ISS](../week10/draft02/script.js) |
| 조건문과 함수의 반환값 | AQI에 맞는 표정과 강도 결정 | `getAirMood()` — [air-data.js](air-data.js) | [Week 3 조건문·함수](../week3/2026-09-10-conditionals-loops-and-functions/script.js) |
| `createElement`, `textContent`, `append` | 검색 결과와 저장한 도시 버튼 만들기 | `submitCitySearch()`, `renderFavoriteCities()` — [air.js](air.js) | [Week 11 단어 목록](draft02/index.html) |
| 배열, `push`, `filter`, `forEach` | 도시 추가·삭제·목록 출력 | `saveFavoriteCity()`, `removeFavoriteCity()`, `renderFavoriteCities()` — [air.js](air.js) | [Week 11 단어 목록](draft02/index.html) |
| `addEventListener()` | 검색 제출, 도시 선택, 저장 버튼 연결 | `createAirPanel()` — [air.js](air.js) | [Week 6 이벤트](../week6/class/event-types-overview/script.js) |
| `localStorage`, `JSON.stringify`, `JSON.parse` | 도시 배열을 저장하고 다음 방문 때 복원 | `persistFavoriteCities()`, 초기 저장값 읽기 — [air.js](air.js) | [Week 11 저장·복원](draft02/index.html) |
| `setInterval()` | 일정 시간마다 현재 데이터 재요청 | `refreshAll()` — [script.js](script.js) | [Week 10 주기적 요청](../week10/draft02/script.js) |

`updateEarthFace()`는 읽은 대기질을 메인 화면에 전달합니다. `getReaction()`과 설명 창이 **같은 `getAirMood()` 함수**를 사용하므로, 화면에 표시되는 강도와 실제 눈의 피로도가 같은 값에서 나옵니다. 3D 렌더링은 [globe.js](globe.js)가 담당합니다.

## 데이터와 감정의 연결

- AQI ≤ 50: 편안함, 추가 피로도 없음.
- 50 < AQI ≤ 100: 조금 피곤함.
- 100 < AQI ≤ 150: 피곤함.
- AQI > 150: 매우 피곤함.
- 피로도는 `(AQI - 50) / 150`을 0~1 범위로 제한한 값이며 AQI 200에서 최대입니다.

이 조건은 대기질 수치를 표정으로 번역하기 위해 정한 디자인 규칙입니다. PM2.5는 함께 보여주는 API 응답값이며, 현재 피로도 계산에는 US AQI를 사용합니다. 다른 기후 신호가 눈물·열기·흔들림을 동시에 더할 수 있습니다.

## Air 창에서 직접 확인하기

1. **Air**를 눌러 검색 창을 열고 도시를 검색해 결과를 선택합니다.
2. **Air quality**에서 AQI, PM2.5, HTTP 상태와 모델 시각을 확인합니다.
3. **API data & expression**에서 적용된 조건과 목표 피로도를 확인합니다.
4. **API data & expression**를 펼쳐 실제 JSON, 요청 주소와 브라우저 수신 시각을 봅니다.
5. **Save +**를 누른 후 페이지를 새로고침합니다. 저장한 도시 목록과 마지막 선택이 복원됩니다.
6. 저장한 도시를 선택하면 해당 위치의 데이터를 다시 요청합니다. 저장된 숫자를 현재값처럼 재사용하지 않습니다.

## 발표할 때 구분할 점

- **Sender:** Open-Meteo가 제공하는 도시 검색·대기질 모델 데이터.
- **Receiver:** 브라우저의 `fetch()`와 이를 바라보는 사용자.
- **디자인 해석:** 숫자를 무거운 눈과 피곤한 표정으로 바꿔, 대기질을 감정적으로 읽게 합니다.
- **사용자 개입:** 도시를 바꾸면 요청 좌표가 바뀌고, 응답이 다르면 표정 강도도 달라집니다. 즐겨찾기는 다음 방문의 선택을 기억합니다.
- 모델 시각과 브라우저 수신 시각은 다릅니다. 다시 요청해도 같은 모델값이 돌아올 수 있습니다.
- 온도·해수면은 갱신 주기가 긴 관측값이며, 접근 실패 때 보존하는 값은 날짜와 `saved` 표시를 유지합니다.
- 요청 실패·오래된 응답은 현재 표정을 만들지 않습니다. 테스트용 응답은 `tests/`에서만 사용합니다.

검사: `node --test week11/tests/*.test.mjs` (저장소 루트에서 실행).


## 지구에서 직접 지점 고르기

- 지구를 돌린 후 원하는 부분을 더블클릭합니다. 터치 화면에서는 더블탭합니다.
- 수업의 `dblclick` 이벤트를 확장한 [globe-input.js](globe-input.js)가 단일 클릭·더블클릭·드래그를 구분합니다. 단일 클릭 목소리는 더블클릭을 기다린 뒤 재생합니다.
- Three.js가 알려주는 교차점의 UV를 `경도 = u × 360 − 180`, `위도 = v × 180 − 90`으로 바꿉니다. 회전한 상태에서도 같은 지리 좌표를 얻습니다. 이 3D 좌표 선택은 라이브러리를 활용한 확장 부분입니다.
- [point-data.js](point-data.js)의 `fetchPointWeather()`가 선택한 좌표의 기온·강수량·바람을 요청합니다. 대기질 요청도 같은 좌표를 사용합니다.
- 정보 창에서 좌표, 응답 JSON, 모델 시각을 확인하고 선택한 지점을 저장할 수 있습니다. 국가·지역 이름은 Photon / OpenStreetMap에서 조회해 좌표 위에 표시하며, 조회 결과가 없어도 좌표와 날씨는 유지합니다.
- 키보드로 지구에 초점을 맞춘 뒤 I를 누르면 화면 중앙의 지점을 조회합니다.

## 바다 선택을 이야기로 바꾸기

- [surface.js](surface.js)의 `classifySurface()`는 반복문과 조건문으로 선택 좌표가 대륙 다각형 안에 있는지 확인합니다. 지구를 그릴 때 쓰는 동일한 지형 데이터를 사용합니다.
- 바다를 선택하면 `getOceanStory()`가 해수면 관측값을 읽고 “That’s the ocean! The water is rising!” 같은 문구와 관측 날짜를 돌려줍니다. `textContent`로 팝업에 넣고, 메인 말풍선에서도 관련 문구를 넘겨 볼 수 있습니다.
- 바다 여부는 지도 데이터로 판단하고, 해수면 수치는 기존 NASA 전 지구 평균 관측값을 사용합니다. 클릭한 장소의 실시간 수위로 해석하지 않습니다. 상승값이 없으면 상승을 단정하는 문구를 쓰지 않습니다.
- 바다·육지 정보도 저장한 지점 객체에 포함해 `JSON.stringify()`와 `JSON.parse()`로 복원합니다. 장소별 날씨와 대기질은 기존처럼 API에서 새로 요청합니다.
- 밝은 카툰 카드로 바꿔도 HTTP 상태, 관측 날짜, 원본 JSON은 유지해 데이터가 표정과 말풍선으로 바뀌는 과정을 확인할 수 있습니다.

정보 창은 넓은 화면에서 날씨와 대기질을 나란히 보여줍니다. 검색·저장 목록과 JSON·표정 규칙은 필요할 때 펼치고, 선택 후에는 접어 수치를 바로 확인합니다. 정상 수신 안내 문구는 생략하고 오류는 계속 표시합니다.

좌표 → 지명: [location-data.js](location-data.js)의 `fetchPointLocation()`이 선택 좌표로 Photon 역지오코딩 API를 요청하고 `parsePointLocation()`이 국가·지역·도시 필드를 읽습니다. `formatPlaceLabel()`은 중복 이름을 줄여 표시합니다. `air.js`는 `textContent`로 이름과 좌표를 각각 갱신하고, 결과를 저장 객체의 `place` 필드에 보관합니다. 지도에서 반환한 가까운 장소의 이름을 사용하며 실제 선택 좌표를 바꾸지 않습니다. 바다는 Ocean으로 표시하고 지명 요청을 생략합니다.
