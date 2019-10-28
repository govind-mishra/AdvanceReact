import React,{useContext} from "react";
import Context from '../Store/Context';

function Deal({ id, deal }) {
  //const [Display, setDisplay] = useState(false);
  //if you want to use context do below by using destructuring the context
  const {activeDealId, fnHandleActiveDealURL} = useContext(Context);
  const fnHanldeClick = () => {
   // setDisplay(!Display);
   fnHandleActiveDealURL(id);
  };
  return (
    <div key={id} onClick={fnHanldeClick} style={{cursor:"pointer"}}>
      {deal.title}
      <div style={{ display: activeDealId==id ? "block" : "none" }}>{deal.key}</div>
    </div>
  );
}

export default Deal;
