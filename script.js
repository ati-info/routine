const routines = {
  "1": {
    "ক": [
      ["সোমবার", "গণিত", "বিজ্ঞান", "ইংরেজি"],
      ["মঙ্গলবার", "বিজ্ঞান", "গণিত", "ইংরেজি"],
      ["বুধবার", "গণিত", "বিজ্ঞান", "ইংরেজি"],
      ["বৃহস্পতিবার", "গণিত", "বিজ্ঞান", "ইংরেজি"]
    ],
    "খ": [...], // খ শাখার রুটিন
    "গ": [...]  // গ শাখার রুটিন
  },
  "2": {
    "ক": [...],
    "খ": [...],
    "গ": [...]
  },
  "4": {
    "ক": [...],
    "খ": [...],
    "গ": [...]
  },
  "6": {
    "ক": [...],
    "খ": [...],
    "গ": [...]
  }
};

function showRoutine(semester) {
  const container = document.getElementById("routine-area");
  container.innerHTML = `<h2>${semester} পর্বের রুটিন</h2>`;

  for (const section in routines[semester]) {
    const routine = routines[semester][section];
    let tableHTML = `<h3>শাখা: ${section}</h3><table><tr><th>দিন</th><th>১ম</th><th>২য়</th><th>৩য়</th></tr>`;

    routine.forEach(row => {
      tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`;
    });

    tableHTML += `<tr><td>শুক্রবার</td><td colspan="3">🔒 বন্ধ</td></tr>`;
    tableHTML += `<tr><td>শনিবার</td><td colspan="3">🔒 বন্ধ</td></tr>`;
    tableHTML += `</table><br>`;
    container.innerHTML += tableHTML;
  }
}
