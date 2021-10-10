## Tradir 과제 전형

### 필수 기능

- [x] 유저가 처음 페이지를 열었을 때 /home 에 도착하도록 만들어 주세요
- [x] material table library(https://material-table.com/#/docs/get-started) 를 사용해서 맥주 리스트 페이지(/beerlist)를 만들어 주세요
- [x] 테이블의 column header 는 드래그로 순서 변경이 가능해야 합니다.
- [x] 바뀐 column header 순서는 redux 에 저장되어 /home 와 /beerlist 사이 이동시에 유지되어야 합니다
- [x] 맥주 리스트의 알콜 도수 (abv) 필터 기능을 만들어 주세요
- [x] 필터는 다중 선택이 가능해야 합니다.(material table library 에 포함되어 있는 기능을 사용하지 말고 따로 제작해야 합니다.)

### 선택 기능

- [x] 맥주 이름을 클릭했을 때 해당 맥주의 상세 정보를 볼 수 있는 modal 을 제작해 주세요
  - antd의 Modal을 사용했습니다.
- [x] 장바구니를 만들어 주세요
  - [x] 맥주를 장바구니에 추가하거나 삭제가 가능해야 합니다
    - 중복된 이름 추가 불가하게 설정
    - 장바구니는 Modal을 통해 보여줌. (상세보기와 같은 모달 컴포넌트 사용)
  - [x] 장바구니는 /home 또는 /beerlist 에서 접근 가능해야 합니다

### 추가 기능

- 왼쪽 하단의 floating button을 이용해 `/home` `/beerlist`를 왔다갔다 할 수 있다.

### 이슈

- `material-table`의 데이터 로딩이 저하되는 이슈가 있어서 1.36.1 버전으로 작업했습니다.
