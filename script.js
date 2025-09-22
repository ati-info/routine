document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcome-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const mainContainer = document.querySelector('.main-container');
    const semesterList = document.getElementById('semester-list');
    const branchNav = document.getElementById('branch-nav-1');
    const routineDisplay = document.getElementById('routine-display');

    // Hide welcome popup on button click
    closePopupBtn.addEventListener('click', () => {
        welcomePopup.style.display = 'none';
        mainContainer.classList.remove('hidden');
    });

    const routines = {
        '1': {
            'k': `
                <h2>১ম সেমিস্টার - ক শাখা</h2>
                <table>
                    <thead>
                        <tr>
                            <th>দিন</th>
                            <th>সময়</th>
                            <th>বিষয়</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>রবিবার</td>
                            <td>
                                09:30 – 10:15<br>
                                10:20 – 11:05<br>
                                11:10 – 11:55
                            </td>
                            <td>
                                রসায়ন-১<br>
                                পদার্থ-১<br>
                                গণিত-১
                            </td>
                        </tr>
                        <tr>
                            <td>সোমবার</td>
                            <td>
                                09:30 – 10:15<br>
                                10:20 – 11:05<br>
                                11:10 – 11:55
                            </td>
                            <td>
                                ব্যব: রসায়ন-১<br>
                                জীববিজ্ঞান-১<br>
                                ব্যব: পদার্থ-১
                            </td>
                        </tr>
                        <tr>
                            <td>মঙ্গলবার</td>
                            <td>
                                09:30 – 10:15<br>
                                10:20 – 11:05<br>
                                11:10 – 11:55
                            </td>
                            <td>
                                ইংরেজি-১<br>
                                ব্যব: জীববিজ্ঞান-১<br>
                                গণিত-১
                            </td>
                        </tr>
                        <tr>
                            <td>বুধবার</td>
                            <td>
                                11:10 – 11:55<br>
                                12:00 – 12:45
                            </td>
                            <td>
                                ইংরেজি-১<br>
                                রসায়ন-১
                            </td>
                        </tr>
                        <tr>
                            <td>বৃহস্পতিবার</td>
                            <td>
                                12:00 – 12:45<br>
                                12:50 – 01:35
                            </td>
                            <td>
                                ব্যব: গণিত-১<br>
                                পদার্থ-১
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
            'kh': `<div class="message-box">রুটিন আপডেটের কাজ চলছে। শীঘ্রই জানানো হবে।</div>`,
            'g': `<div class="message-box">রুটিন আপডেটের কাজ চলছে। শীঘ্রই জানানো হবে।</div>`
        },
        '2': `<div class="message-box">রুটিন আপডেটের কাজ চলছে। শীঘ্রই জানানো হবে।</div>`,
        '4': `<div class="message-box">রুটিন আপডেটের কাজ চলছে। শীঘ্রই জানানো হবে।</div>`,
        '6': `<div class="message-box">রুটিন আপডেটের কাজ চলছে। শীঘ্রই জানানো হবে।</div>`
    };

    function showRoutine(semester, branch = null) {
        if (branch) {
            routineDisplay.innerHTML = routines[semester][branch];
        } else {
            routineDisplay.innerHTML = routines[semester];
        }
    }

    // Handle semester clicks
    semesterList.addEventListener('click', (e) => {
        const semesterItem = e.target.closest('li');
        if (!semesterItem) return;

        const allSemesterItems = semesterList.querySelectorAll('li');
        allSemesterItems.forEach(item => item.classList.remove('active'));
        semesterItem.classList.add('active');

        const semester = semesterItem.dataset.semester;
        
        if (semester === '1') {
            branchNav.classList.remove('hidden');
            const defaultBranch = branchNav.querySelector('.branch-item[data-branch="k"]');
            defaultBranch.classList.add('active');
            showRoutine('1', 'k');
        } else {
            branchNav.classList.add('hidden');
            const allBranchItems = branchNav.querySelectorAll('.branch-item');
            allBranchItems.forEach(item => item.classList.remove('active'));
            showRoutine(semester);
        }
    });

    // Handle branch clicks
    branchNav.addEventListener('click', (e) => {
        const branchItem = e.target.closest('.branch-item');
        if (!branchItem) return;

        const allBranchItems = branchNav.querySelectorAll('.branch-item');
        allBranchItems.forEach(item => item.classList.remove('active'));
        branchItem.classList.add('active');

        const branch = branchItem.dataset.branch;
        showRoutine('1', branch);
    });

    // Initial load
    showRoutine('1', 'k');
});
          
