import { useEffect } from "react"






const Chart = props => {

    useEffect(() => {
       res = await  makeAPICall()
        props.action(res)
    })


<Bar  />
}