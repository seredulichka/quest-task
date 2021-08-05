import React, {useState, useEffect} from 'react';
import DealsStats from './DealsStats/DealsStats';
import PieCharts from './PieChart/PieChart';
import s from './Stats.module.css';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';


const Stats = (props) => {
  
  const [loading, setLoading] = useState(true);
  const [statsInfo, setStatsInfo] = useState([]);

    useEffect(()=>{
        setLoading(true);

        (async function fetchData() {
            let userName  = props.userLogin;
            let res = await axios.get(`https://salerow.vlazaay.pp.ua/api/user-stats/${userName}`);
            let data = await res;
            setStatsInfo(data);

            setLoading(false);
        })();
    }, [props.userLogin]);


  return(
    <div className={s.gridСontainer}>
      
      <div className={s.post1}>
        Success
        {loading ? <Skeleton variant="rect" width={200} height={200} animation="wave"/> : <PieCharts value={statsInfo.data.success}/> }
      </div>
      <div className={s.post2}>
        Involvement
        {loading ? <Skeleton variant="rect" width={200} height={200} animation="wave"/> : <PieCharts value={statsInfo.data.involvement}/> }
      </div>
      <div className={s.post3}>
        Deals Stats
        {loading ? <Skeleton variant="rect" width={450} height={250} animation="wave"/> : <DealsStats value = {statsInfo.data['deals-stats']}/> }
      </div>
    </div>
  )
}

export default Stats;