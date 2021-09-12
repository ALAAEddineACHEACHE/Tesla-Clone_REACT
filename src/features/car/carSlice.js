import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cars:["Model S" , "Model 3", "Model X" , "Model Y"]
}
const carslice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})
export const selectCars = state => state.car.cars
export default carslice.reducer