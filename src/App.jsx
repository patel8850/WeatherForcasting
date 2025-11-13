import Card from "./Component/Card";
import Input from "./Component/input";

import { useWeather } from "./Context/Weather";
import gif from "./assets/gif2.webp";
function App() {
  const wheather = useWeather();
  return (
    <div
      className=" min-h-screen bg-center bg-fixed bg-cover flex flex-col items-center "
      style={{ backgroundImage: `url(${gif})` }}
    >
      <Input value="search" />
      <Card />
    </div>
  );
}
export default App;
