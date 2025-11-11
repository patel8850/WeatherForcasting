import Card from "./Component/Card";
import Input from "./Component/input";

import { useWeather } from "./Context/Weather";
import gif from "./assets/gif2.webp"
function App() {
  const wheather = useWeather();
  return (
    <div  className=" h-screen bg-cover bg-center flex flex-col items-center " style={{ backgroundImage: `url(${gif})` }}>
      <div>
        <Input value="search" />
        <Card />
     
      </div>
    </div>
  );
}
export default App;
