/**
 * Returns the headers for the table.
 *  * @return {array} of objects with header and accessor(key).
 */
export const getHeaders = () => {
    return [
        {
          Header: '#',
          accessor: 'position', // accessor is the "key" in the data
        },
        {
          Header: 'Coin',
          accessor: 'name',
       },
       {
           Header: '24h Volume',
           accessor: '24volume',
       },
   {
     Header: 'Circulating Supply',
     accessor: 'csupply',
},           
       {
           Header: 'Total Supply',
           accessor: 'tsupply',
   },
   {
     Header: 'Market Cap',
     accessor: 'makertcap',
   },
      ]
}


/**
 * Returns the data formated for the table.
 * @param {data}  The data that comes from the CoinGecko Api about 12 most valuable cryptos.
 * @return {array} with th data formated to be displayed in the table.
 */
export const getData = (data) => {
  const formatData = data?.map(({ market_data:
    { market_cap_rank,
        total_volume,
        circulating_supply,
        total_supply,
        market_cap },
    image:{small}, 
    name, id }) => (
    {
        position: market_cap_rank,
        name: name,
          "24volume": formatter().format(total_volume.usd),
        csupply: formatter().format(circulating_supply),
        tsupply: formatter().format(total_supply),
        makertcap: formatter().format(market_cap.usd),
    image: small,
        id: id
      }
  ))
    return formatData
}



/**
 * Returns the number formated in USD currency.
 *
 * @param {options} overrides options for the Inl.NumberFormat
 * @return {number} return the formated number in the USB currency format.
 */
export const  formatter = (options={}) =>new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  ...options
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  