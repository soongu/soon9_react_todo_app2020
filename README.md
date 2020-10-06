# 일정관리 앱 

### 초기 세팅
- `$ yarn create react-app .`
- `$ yarn add node-sass classnames react-icons`

### 컴포넌트 설명
1. TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀을 보여줍니다.  
children으로 내부 JSX를 props로 받아 와서 렌더링합니다.

1. TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다.  
state를 통해 인풋의 상태를 관리합니다.

1. TodoListItem: 각 할 일 항목에 대한 정보를 보여주는 컴포넌트입니다.  
todo객체를 props로 받아 와서 상태에 따른 다른 스타일의  UI를 보여줍니다.

1. TodoList: todos배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서  
여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.