import {render, waitFor, screen} from '@testing-library/react'
import React from "react";
import Chart from "./Chart"
import {bitcoinPricesMock, bitcoinMaxValueMock} from "../testingUtils/bitcoinPricesData"


jest.mock('recharts', () => {
    const OriginalModule = jest.requireActual('recharts');

    return {
        ...OriginalModule,
        ResponsiveContainer: ({ height, children }) => (
            <OriginalModule.ResponsiveContainer width={800} height={800}>
                {children}
            </OriginalModule.ResponsiveContainer>
        ),
    };
});


afterEach(() => {
    jest.clearAllMocks();
});






describe("Chart component test",  () => {
    it("check if Chart component is working as expected", async () => {
        const { debug } = render(<Chart coinInfo={bitcoinPricesMock} maxValue={bitcoinMaxValueMock} />)  
        await waitFor(() => {
            expect(screen.getByText("02/01/2021")).toBeInTheDocument()
        }, {
            timeout: 4000
        });
        expect(screen.getByText("05/01/2021")).toBeInTheDocument()
        
     
    })

});
