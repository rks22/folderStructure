






import { useState } from "react"

const [chartState,setChartState] = useState()

const [filterState,setFilterState] = useState()



return  {
    <ChartContainer state = {chartState} action = {setChartState}/>
    <FilterContainer/>
}