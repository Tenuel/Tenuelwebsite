// ------------------ Loader ------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        initNameAnimation();
        initCharts();
    }, 2000); // 2 seconds loader
});

// ------------------ Name Animation: White letters slowly scale ------------------
const nameText = "T E N U E L";

async function initNameAnimation() {
    const el = document.getElementById("animatedName");
    el.innerHTML = "";

    for (let i = 0; i < nameText.length; i++) {
        const span = document.createElement("span");
        span.textContent = nameText[i];
        span.style.display = "inline-block";
        span.style.transform = "scale(1)";  // start at normal size
        span.style.color = "#ffffff";       // start white
        span.style.transition = "transform 1s ease, color 1s ease, text-shadow 1s ease";
        el.appendChild(span);

        // Delay for letter-by-letter reveal
        await new Promise(r => setTimeout(r, 200));

        // Slowly scale to 1.5
        span.style.transform = "scale(1.5)";

        // Optional: subtle neon glow after scaling
        span.style.textShadow = `
            0 0 10px #ffffff,
            0 0 20px #ffffff
        `;
    }
}

// ------------------ Activity Logic ------------------
let currentActivity = null;
let activityStartTime = null;
let wakeUpDone = false;

const timeSpent = { study:0, free:0, sleep:0, pe:0 };

// Enable/disable buttons depending on activity
function setActivityButtonsEnabled(enabled) {
    document.querySelectorAll("button").forEach(btn => {
        const action = btn.getAttribute("onclick");
        if (!action) return;
        if (action.includes("toggleActivity('wake')")) {
            // Wake button only enabled if sleeping and not yet woken
            btn.disabled = currentActivity !== "sleep" && wakeUpDone;
        } else btn.disabled = !enabled;
    });
}

// Toggle activity on button click
function toggleActivity(activity) {
    const now = new Date();
    const wakeBtn = document.querySelector("button[onclick=\"toggleActivity('wake')\"]");

    if (activity === "wake") {
        if (!wakeUpDone || currentActivity === "sleep") {
            wakeUpDone = true;
            if (currentActivity === "sleep") endCurrentActivity(now);
            currentActivity = null;
            document.getElementById("result").textContent = "Current Activity: Woken Up";
            setActivityButtonsEnabled(true);
            if (wakeBtn) wakeBtn.disabled = true;
        }
        return;
    }

    if (!wakeUpDone) { alert("You must wake up first!"); return; }

    if (activity === "sleep") {
        if (currentActivity !== "sleep") {
            endCurrentActivity(now);
            startActivity("sleep", now);
            setActivityButtonsEnabled(false);
        } else alert("Already sleeping!");
        return;
    }

    if (currentActivity === "sleep") { alert("You are sleeping! Wake up first."); return; }

    // Start other activities
    endCurrentActivity(now);
    startActivity(activity, now);
    updateCharts();

    if (timeSpent.study > 60) alert("Warning: You have studied for more than 1 hour!");
}

// Start activity
function startActivity(activity, time) {
    currentActivity = activity;
    activityStartTime = time;
    document.getElementById("result").textContent = `Current Activity: ${activity}`;
}

// End current activity and record time
function endCurrentActivity(now) {
    if (currentActivity && activityStartTime) {
        const diffMinutes = (now - activityStartTime)/1000/60;
        if (currentActivity !== "wake") timeSpent[currentActivity] += diffMinutes;
    }
}

// ------------------ Charts ------------------
let barChart, pieChart;
const activityColors = ['#ff0000','#0000ff','#00ff00','#00ffff']; // study:red, free:blue, pe:green, sleep:cyan

function initCharts() {
    const timeCtx = document.getElementById("timeGraph").getContext("2d");
    const pieCtx = document.getElementById("pieChart").getContext("2d");

    barChart = new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(timeSpent),
            datasets: [{ label: 'Minutes Spent', data: Object.values(timeSpent), backgroundColor: activityColors }]
        },
        options: { responsive:true, animation:false, scales:{ y:{ beginAtZero:true } } }
    });

    pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(timeSpent),
            datasets: [{ data: Object.values(timeSpent), backgroundColor: activityColors }]
        },
        options: { responsive:true, animation:false }
    });
}

// Update chart data
function updateCharts() {
    barChart.data.datasets[0].data = Object.values(timeSpent);
    barChart.update();
    pieChart.data.datasets[0].data = Object.values(timeSpent);
    pieChart.update();
}
