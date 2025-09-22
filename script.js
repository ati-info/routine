document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcome-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const mainContainer = document.querySelector('.main-container');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const semesterList = document.getElementById('semester-list');
    const branchNav = document.getElementById('branch-nav-1');
    const routineDisplay = document.getElementById('routine-display');
    const initialMessage = document.querySelector('.initial-message');

    // Hide welcome popup on button click
    closePopupBtn.addEventListener('click', () => {
        welcomePopup.style.display = 'none';
        mainContainer.classList.remove('hidden');
    });

    // Helper function to create routine HTML
    function createRoutineHTML(title, routineData) {
        if (!routineData) {
            return `<div class="message-box">রুটিন আপডেটের কাজ চলছে। শীঘ্রই জানানো হবে।</div>`;
        }
        let dailyRoutineHTML = '';
        for (const day in routineData) {
            let subjectsHTML = '';
            for (const time in routineData[day]) {
                subjectsHTML += `<div class="time-and-subject"><strong>(${time})</strong> ${routineData[day][time]}</div>`;
            }
            dailyRoutineHTML += `
                <tr>
                    <td>${day}</td>
                    <td>${subjectsHTML}</td>
                </tr>
            `;
        }

        return `
            <h2>${title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>দিন</th>
                        <th>বিষয়</th>
                    </tr>
                </thead>
                <tbody>
                    ${dailyRoutineHTML}
                </tbody>
            </table>
        `;
    }

    // Data for the routines
    const routines = {
        '1': {
            'k': {
                'রবিবার': {
                    '09:30 –--> 10:15': 'রসায়ন-১',
                    '10:20 –--> 11:05': 'পদার্থ-১',
                    '11:10 --–> 11:55': 'গণিত-১'
                },
                'সোমবার': {
                    '09:30 –--> 10:15': 'ব্যব : রসায়ন-১',
                    '10:20 –--> 11:05': 'জীববিজ্ঞান-১',
                    '11:10 –--> 11:55': 'ব্যব : পদার্থ-১'
                },
                'মঙ্গলবার': {
                    '09:30 –--> 10:15': 'ইংরেজি-১',
                    '10:20 –--> 11:05': 'ব্যব: জীববিজ্ঞান-১',
                    '11:10 –--> 11:55': 'গণিত -১'
                },
                'বুধবার': {
                    '11:10 –--> 11:55': 'ইংরেজি-১',
                    '12:00 –--> 12:45': 'রসায়ন -১'
                },
                'বৃহস্পতিবার': {
                    '12:00 –--> 12:45': 'ব্যব: গণিত-১',
                    '12:50 –--> 01:35': 'পদার্থ-১'
                }
            },
            'kh': null,
            'g': null
        },
        '2': null,
        '4': null,
        '6': null
    };

    function showRoutine(semester, branch = null) {
        if (initialMessage) {
            initialMessage.classList.add('hidden');
        }
        
        routineDisplay.innerHTML = ''; // Clear previous content
        
        let routineHTML = '';
        if (branch) {
            routineHTML = createRoutineHTML(`১ম সেমিস্টার - ${branch} শাখা`, routines[semester][branch]);
            // show routine in full screen only if a branch is selected
            sidebar.classList.add('sidebar-hidden');
            content.classList.add('content-full');

        } else {
            routineHTML = createRoutineHTML(`সেমিস্টার ${semester}`, routines[semester]);
            // for other semesters, show the routine in the main content area
            sidebar.classList.remove('sidebar-hidden');
            content.classList.remove('content-full');
        }
        
        routineDisplay.innerHTML = routineHTML;
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
            // When 1st semester is clicked, hide the main content and wait for branch selection
            routineDisplay.innerHTML = `<div class="initial-message">শাখা নির্বাচন করুন</div>`;
            sidebar.classList.remove('sidebar-hidden');
            content.classList.remove('content-full');

        } else {
            branchNav.classList.add('hidden');
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
});
                
