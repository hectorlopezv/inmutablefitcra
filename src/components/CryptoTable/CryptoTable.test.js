import {render, waitFor, screen} from '@testing-library/react'
import React from "react";
import CryptoTable from "./CryptoTable"
import { getCoinsInfo } from "../../api/api"

jest.mock("react-router-dom",()=> {
    return {
        useParams: () => ({id: "bitcoin"})
    }
})

jest.mock("../../api/api", () => {
    return {
        getCoinsInfo: jest.fn()
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


describe("CryptoTable component test",  () => {
    it("check if CryptoTable component is working as expected when data  returned from API is null", async () => {
        getCoinsInfo.mockResolvedValue(null)
        const { debug} =render(<CryptoTable />)  
        await waitFor(() => {
            expect(screen.getByRole("status")).toBeInTheDocument()
        }, {
            timeout: 1000
        });     
    })
});
