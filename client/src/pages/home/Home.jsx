import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import { useEffect, useState } from "react";
import List from "../../components/list/List";
import axios from "axios"

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWQ3NWU5MjU4OTdlNTU5Y2JjYjVkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTQ0MDk2MywiZXhwIjoxNjY5ODcyOTYzfQ.8oZSTjCygGxgjT98VAIrwjCg7p_fjpALptXUpOd9pb0"
            }
          }
        );
        console.log(res.data);
         setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list)=>(
        <List list={list}/>
      ))}
 
    </div>
  );
};

export default Home;