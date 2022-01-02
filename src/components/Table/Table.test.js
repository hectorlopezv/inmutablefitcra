import { screen } from '@testing-library/react'
import {render} from "../../testingUtils/wrapper"
import React from "react";
import Table from "./Table"
import {completePreFormat} from "../../testingUtils/completeMockData"
describe("Table component test", () => {
    it("check if the Table is rendered", () => {
        const { rerender, debug } = render(<Table tableData={completePreFormat} />, {
            path:"/"
        })
        expect(screen.getByRole('table')).toBeInTheDocument()
    })

});
