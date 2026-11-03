const form = document.getElementById("expenseForm");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");

const data = {
    Food: 0,
    Transport: 0,
    Bills: 0,
    Shopping: 0,
    Other: 0
};
const ctx = document.getElementById("expenseChart").getContext("2d");
const expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: Object.keys(data),
        datasets: [{
            data: Object.values(data),
        }]
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    data[category] += amount;

    expenseChart.data.datasets[0].data = Object.values(data);
    expenseChart.update();

    form.reset();
});
