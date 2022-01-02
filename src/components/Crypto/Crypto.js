import { useParams } from "react-router-dom";
import { getHistorical } from "../../api/api"
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner"
import Chart from "../Chart/Chart";
/**
 * Custom Component for dynamic CoinInfo.
 * @return {component} custom component for dynamic.
 */
const Crypto = () => {
    const {id} = useParams();
    const [maxValue, setmaxValue] = useState(0);
    const [coinInfo, setcoinInfo] = useState(null);
    useEffect(() => {
        const getHistoric = async () => {
            const { data, maxValue } = await getHistorical(id, 12, 1);
            setcoinInfo(data)
            setmaxValue(maxValue)
        }
        getHistoric()
    }, [id])
    if (coinInfo === null) return <Spinner />
  
    return (
        <div
            className="flex 
            items-center
            p-8
            justify-center"
        >
            {maxValue > 0 && coinInfo!== null && (
                
<Chart coinInfo={coinInfo} maxValue={maxValue}/>
            )}
            
        </div>
    )
}

export default Crypto;