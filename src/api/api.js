import CoinGecko from 'coingecko-api';
import * as dayjs from 'dayjs'
export const CoinGeckoClient = new CoinGecko();


/**
 * Returns information of the 12 most valuable cryptos.
 * @return {array} return the information that comes from the api from the 12 most valuable cryptos
 */
export const getCoinsInfo = async (numberOfCoins = 12) => {
    const coinsInfo = await CoinGeckoClient.coins.all({
        per_page: numberOfCoins
    })
    return coinsInfo.data;
};


/**
 * Returns the data formated for the table and maxValue.
 * @param {coin}  The name of the crypto to be query
 * @param {from}  epoch unix timestamp of beggining date
 * @param {frequency}  number of days to display on the table
 * @return {object} with the formated data, and the maxValue
 */
export const getHistorical = async (coin, from, frequency) => {
   const historicData = await CoinGeckoClient.coins.fetchMarketChartRange(coin, {
        from: dayjs().subtract(from, 'months').unix(),
        to: dayjs().unix(),
   });
    
    console.log("historicData", historicData)

    const numOfDays = historicData.data.prices.length;
    const freqInDays = frequency;
    let dataArr = [];
    let maxValue = 0;
    for (let i = 0; i < numOfDays; i += freqInDays) {
        const [dateUnix, coinPrice] = historicData.data.prices[i];

        const formatDate = dayjs(dateUnix).format("DD/MM/YYYY");
        dataArr.push({
            Total: coinPrice,
            date: formatDate
        })
        if (coinPrice > maxValue) maxValue = coinPrice;
      }
    return { data: dataArr, maxValue: maxValue};
}

export default CoinGeckoClient;