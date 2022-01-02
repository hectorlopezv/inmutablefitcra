import { preFormat } from "../../testingUtils/mockData";
import {getData, formatter} from "./tableUtils"
describe("testing Table utils", () => {

    it("testing getData correct ETL", () => {
        const formatedData = getData(preFormat);
        expect(formatedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    position: 1,
                    name: 'Bitcoin',
                    '24volume': '$26,065,961,648.00',
                    csupply: '$18,916,318.00',
                    tsupply: '$21,000,000.00',
                    makertcap: '$883,907,767,232.00',
                    image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
                    id: 'bitcoin'}),
            ])
          );
    })

    it("testing formater function", () => {
        const formatValue = formatter().format(20000);
        expect(formatValue).toEqual("$20,000.00")
    })

});
