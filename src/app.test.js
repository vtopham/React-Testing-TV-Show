import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import App from './App'

import { fetchShow as mockFetchShow } from './api/fetchShow'
import { apiData } from './testAPIdata'

import { act } from "react-dom/test-utils"

jest.mock("./api/fetchShow")

test ("response from the API", async () => {
    mockFetchShow.mockResolvedValueOnce(apiData)

    const { getByText } = render(<App />)
    
})