# 일정관리 앱 

## v.1.0.0
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

## v.1.1.0
### 변경사항

1. React.memo와 함수형 업데이트를 통해 리렌더링시 발생하는 성능저하를 해결했습니다.
2. react-virtualized를 사용하여 스크롤되기 전에 숨겨진 데이터 렌더링을 하지 않도록 처리했습니다.
`$ yarn add react-virtualized`