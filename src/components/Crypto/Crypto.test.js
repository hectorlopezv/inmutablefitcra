import {render, waitFor, screen} from '@testing-library/react'
import React from "react";
import Crypto from "./Crypto"
import {bitcoinPricesMock, bitcoinMaxValueMock} from "../../testingUtils/bitcoinPricesData"
import { getHistorical } from "../../api/api"

jest.mock("react-router-dom",()=> {
    return {
        useParams: () => ({id: "bitcoin"})
    }
})

jest.mock("../../api/api", () => {
    return {
        getHistorical: jest.fn()
    }
})

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






describe("Crypto component test",  () => {
    it("check if Crypto component is working as expected when data is returned from API", async () => {
        getHistorical.mockResolvedValue(({data: bitcoinPricesMock, maxValue: bitcoinMaxValueMock}) )
        const { debug} =render(<Crypto />)  
        await waitFor(() => {
            expect(screen.getByText("02/01/2021")).toBeInTheDocument()
        }, {
            timeout: 4000
        });
        expect(screen.getByText("05/01/2021")).toBeInTheDocument()
        
     
    })

});
