module.exports =[
    {
        name: "Valuation fee Paid",
        key: "isValuationFeePaid",
        condition: (data) => data.isValuationFeePaid === true,
    },
    {
        name: "UK Rsident",
        key: "isUkresident",
        condition: (data) => data.isUkResident === true,
    },
    {
        name: "Risk Rating Medium",
        key: "riskRating",
        condition: (data) => data.isUkResident ==="Medium",
    },
    {
        name: "LTV Below 60%",
        key: "ltv",
        condition: (data) => (data.loanrequired / data.purchasePrice) *100 < 60,
    },
];