//라우터 사용하기
import{
  BrowserRouter as Router, //라우터 이동하기
  Switch, //스위치는 주소 찾기 (어디로 이동할지)
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
  <Router>
    <Switch>
    {/*디테일(상세페이지)으로 간다는 뜻 */}
    <Route path="/movie">
        <Detail></Detail></Route>

{/*홈으로 간다는 뜻 */}
<Route path="/"> <Home />
</Route>
    </Switch>
  </Router>
  );
}


              
export default App;


/* 투두리스트 만들기 useState 연습

function App() {
  // 사용할 기능 설정 -> 입력받기
  const [todo, setTodo] = useState("");

  // 입력한 투두 아이템이 남아있도록 배열 사용
  const [toDos, setToDos] = useState([]);

  // 인풋에 입력 시 입력되도록
  const onChange = (event) => setTodo(event.target.value);

  // 폼 제출 시
  const onSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    // 입력값이 비어 있으면 아무 동작도 하지 않음
    if (todo === '') {
      return;
    }

    // 현재의 투두 리스트에 새로운 투두 아이템 추가
    setToDos((currentArray) => [todo, ...currentArray]);

    // 입력값 초기화
    setTodo('');
  };

  // 보여지는 화면 부분
  return (
    <div>
      <h1>My To Do list ({toDos.length})</h1>

      {/* 투두 아이템 입력 폼 
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="입력해주세요...."
        />
        <button>ADD</button>
      </form>
      <hr />

      {* 입력하면 아래 리스트로 업로드 + key를 넣어서 오류 해결 
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {*맵은 배열에 있는 아이템을 원하는 것으로 바꿔주는 역할 
    </div>
  );
} */




/*//코인 리스트 useEffeact 연습

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    //주소응답을 제이슨 응답으로
fetch('https://api.coinpaprika.com/v1/tickers').then((response) => response.json())
//받아온 api를 보여주기 위함 / 데이터 이름: json
.then((json) =>{
setCoins(json);
setLoading(false);
});
  }, []);


  //여기가 보여지는 화면부분
  return <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}     

      
    
  </div>

}
*/