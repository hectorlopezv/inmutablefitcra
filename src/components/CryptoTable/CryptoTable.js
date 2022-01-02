import { useEffect, useState } from "react"
import { getCoinsInfo } from "../../api/api"
import Spinner from "../Spinner/Spinner";
import Table from "../Table/Table";

/**
 * Table Component for the 12 most valuable cryptos.
 * @return {Component} table with the cryptos, and a click option for more information about a certain crypto
 */
const CryptoTable = () => {
  const [tableData, settableData] = useState(null);

  useEffect(() => {

    const getCoins = async () => {
      try {
        const data = await getCoinsInfo()
        
        settableData(data)

      } catch (error) {
        console.log("error", error)

      }
    }
    getCoins()
  }, [])

  if (tableData === null) return <Spinner />

  return (
    <Table tableData={tableData} /> 
  )
}
export default CryptoTable;