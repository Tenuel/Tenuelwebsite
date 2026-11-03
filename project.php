<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Expense Tracker with Graph</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Expense Tracker</h1>
</header>

<main>
    <div class="container">
        <!-- Form -->
        <form id="expenseForm">
            <h2>Add Expense</h2>

            <label>Amount</label>
            <input type="number" id="amount" required>

            <label>Category</label>
            <select id="category" required>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Bills">Bills</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
            </select>

            <button type="submit">Add Expense</button>
        </form>

        <!-- Chart -->
        <div class="chart-box">
            <h2>Expense Summary</h2>
            <canvas id="expenseChart"></canvas>
        </div>
    </div>
</main>

<script src="script.js"></script>
</body>
</html>
