import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
} from "recharts";

function Analytics({ expenses }) {
    const totalSpending = expenses.reduce(
        (total, expense) =>
            total + Number(expense.amount),
        0
    );
    const foodTotal = expenses
        .filter(
            (expense) =>
                expense.category === "Food"
        )
        .reduce(
            (total, expense) =>
                total + Number(expense.amount),
            0
        );
    const shoppingTotal = expenses
        .filter(
            (expense) =>
                expense.category === "Shopping"
        )
        .reduce(
            (total, expense) =>
                total + Number(expense.amount),
            0
        );
    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];
    const data = days.map((day, index) => {
        const total = expenses
            .filter((expense) => {
                if (!expense.date) return false;

                const expenseDay =
                    new Date(expense.date).getDay();

                return expenseDay === index;
            })

            .reduce(
                (sum, expense) =>
                    sum + Number(expense.amount),
                0
            );

        return {
            name: day,
            spending: total,
        };
    });
    return (
        <div>
            <div className="top-header">
                <h1 className="page-title">
                    Analytics
                </h1>
                <p className="subtitle">
                    spending insights
                </p>
            </div>
            <div className="analytics-card">
                <p>Total This Month</p>
                <h2>{totalSpending}</h2>
            </div>
            <div className="analytics-grid">
                <div className="small-analytics-card">
                    <p>Food</p>
                    <h3>₹{foodTotal}</h3>
                </div>
                <div className="small-analytics-card">
                    <p>Shopping</p>
                    <h3>₹{shoppingTotal}</h3>
                </div>
            </div>
            <div className="chart-container">
                <p className="chart-title">
                    Weekly Spending
                </p>
                <ResponsiveContainer
                    width="100%"
                    height={220}
                >
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            axisLine={{
                                stroke: "#E8CFCF",
                                strokeWidth: 1.5,
                            }}
                            tick={{
                                fill: "#8B6B61",
                                fontSize: 12,
                            }}
                        />
                        <Bar
                            dataKey="spending"
                            fill="#F8BFCF"
                            radius={[14, 14, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Analytics;