import { 
     BarChart, Bar,
     Tooltip

} from 'recharts'

export const AppBarChart = () => {

    const data = [
        { sell : 200, month : 1 },
        { sell : 500, month : 2 },
        { sell : 300, month : 3 },
        { sell : 800, month : 4 },
        { sell : 1000, month : 5 }
    ]

    return (
        <BarChart width={500} height={500} data={data}>
            <Bar dataKey="sell" fill="#8884d8" />
            <Tooltip/>
        </BarChart>
    )
}