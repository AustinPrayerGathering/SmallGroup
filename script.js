// Small Group Prayer Gathering Website JavaScript

// Sample agenda data
const agendaData = {
    "2025-09": {
        title: "Small Group Prayer Gathering",
        date: "Friday, September 27, 2025",
        time: "4:00 PM",
        location: "Pearl & Basil's House, 1603 Blackjack Dr, Round Rock, TX",
        items: [
            {
                time: "4:00 - 4:20 PM",
                title: "Opening Rosary",
                description: "Begin with the Rosary. Reflections for each decade will be short. After the fifth decade, conclude with the Memorare prayer.\n\nNote: Due to our comprehensive agenda today, we will keep the reflections brief for each decade to ensure we honor our time together while maintaining our devotional focus."
            },
            {
                time: "4:20 - 4:25 PM",
                title: "Transition to Kids Ministry",
                description: "Children will leave for their Kids Ministry session. Quick pause to help parents guide kids."
            },
            {
                time: "4:25 - 4:40 PM",
                title: "Praise & Worship",
                description: "Start with soft background music to help everyone quiet down and focus on God. This portion is for pure worship and connection with the Lord."
            },
            {
                time: "4:40 - 4:55 PM",
                title: "Sharing Session",
                description: "Introduction to the JY Philips Course: brief background on what it is. Testimony: one person shares a personal experience from the course."
            },
            {
                time: "4:55 - 5:10 PM",
                title: "Sunday Readings & Reflections",
                description: "Read the Sunday Mass readings aloud. Offer short reflections on how these apply to our lives. Encourage brief sharing if time allows.",
                subCard: {
                    title: "Gospel Reading - Luke 16:19-31",
                    content: "Jesus said to the Pharisees:\n\"There was a rich man who dressed in purple garments and fine linen\n   and dined sumptuously each day.\nAnd lying at his door was a poor man named Lazarus, covered with sores,\n   who would gladly have eaten his fill of the scraps\n   that fell from the rich man's table.\nDogs even used to come and lick his sores.\nWhen the poor man died,\n   he was carried away by angels to the bosom of Abraham.\nThe rich man also died and was buried,\n   and from the netherworld, where he was in torment,\n   he raised his eyes and saw Abraham far off\n   and Lazarus at his side.\nAnd he cried out, 'Father Abraham, have pity on me.\nSend Lazarus to dip the tip of his finger in water and cool my tongue,\n   for I am suffering torment in these flames.'\nAbraham replied,\n   'My child, remember that you received\n   what was good during your lifetime\n   while Lazarus likewise received what was bad;\n   but now he is comforted here, whereas you are tormented.\nMoreover, between us and you a great chasm is established\n   to prevent anyone from crossing who might wish to go\n   from our side to yours or from your side to ours.'\nHe said, 'Then I beg you, father,\n   send him to my father's house, for I have five brothers,\n   so that he may warn them,\n   lest they too come to this place of torment.'\nBut Abraham replied, 'They have Moses and the prophets.\nLet them listen to them.'\nHe said, 'Oh no, father Abraham,\n   but if someone from the dead goes to them, they will repent.'\nThen Abraham said, 'If they will not listen to Moses and the prophets,\n   neither will they be persuaded if someone should rise from the dead.'\""
                }
            },
            {
                time: "5:10 - 5:25 PM",
                title: "Intercession Prayer",
                description: "Intercession prayer is when we pray for others' needs—our Church, the world, our families, and one another. Lead prayers for: The Catholic Church and the Pope, Peace in the world, Our families and community, Personal intentions offered silently or aloud."
            },
            {
                time: "5:25 - 5:30 PM",
                title: "Closing Song",
                description: "Conclude with a joyful, faith-filled song. Encourage everyone to lift their voices together as a final offering of praise."
            },
            {
                time: "5:30 - 5:35 PM",
                title: "Announcements",
                description: "Share general updates with the group. Highlight key details about the upcoming Couples Retreat (dates, registration info, what to expect)."
            }
        ]
    }
};

// Current date and navigation
let currentDate = new Date();
let currentMonth = 8; // September (0-based index)
let currentYear = 2025;

// DOM elements
const monthYearDisplay = document.getElementById('current-month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const agendaContent = document.getElementById('agenda-content');
const agendaTitle = document.getElementById('agenda-title');
const agendaDate = document.getElementById('agenda-date');
const agendaTime = document.getElementById('agenda-time');
const agendaLocation = document.getElementById('agenda-location');

// Month names
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    updateCurrentAgenda();
    loadPastAgendas();
    initializeCalendarButtons();
    
    // Event listeners
    prevMonthBtn.addEventListener('click', () => navigateMonth(-1));
    nextMonthBtn.addEventListener('click', () => navigateMonth(1));
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.agenda-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// Month navigation
function navigateMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    updateCurrentAgenda();
}

// Update current agenda display
function updateCurrentAgenda() {
    const monthKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
    const agenda = agendaData[monthKey];
    
    // Update month/year display
    monthYearDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    if (agenda) {
        // Update agenda header
        agendaTitle.textContent = agenda.title;
        agendaDate.textContent = agenda.date;
        agendaTime.textContent = agenda.time;
        agendaLocation.innerHTML = `<a href="https://maps.google.com/?q=1603+Blackjack+Dr,+Round+Rock,+TX" target="_blank" rel="noopener noreferrer">${agenda.location}</a>`;
        
        // Update agenda content
        agendaContent.innerHTML = agenda.items.map(item => `
            <div class="agenda-item">
                <div class="time-slot">${item.time}</div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                ${item.subCard ? `
                    <div class="sub-card">
                        <h5 class="sub-card-title">${item.subCard.title}</h5>
                        <div class="sub-card-content">${item.subCard.content.replace(/\n/g, '<br>')}</div>
                    </div>
                ` : ''}
            </div>
        `).join('');
    } else {
        // No agenda for this month
        agendaTitle.textContent = 'Small Group Prayer Gathering';
        agendaDate.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        agendaTime.textContent = '4:00 PM';
        agendaLocation.innerHTML = '<a href="https://maps.google.com/?q=1603+Blackjack+Dr,+Round+Rock,+TX" target="_blank" rel="noopener noreferrer">Pearl & Basil\'s House, 1603 Blackjack Dr, Round Rock, TX</a>';
        
        agendaContent.innerHTML = `
            <div class="agenda-item">
                <h4>Agenda Coming Soon</h4>
                <p>The agenda for this month's prayer gathering will be posted soon. Please check back later or contact the parish office for more information.</p>
            </div>
            <div class="agenda-item">
                <h4>Standard Format</h4>
                <p>Our monthly gatherings typically include:</p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    <li>Opening prayer and welcome</li>
                    <li>Scripture reading and reflection</li>
                    <li>Rosary or other devotional prayers</li>
                    <li>Community prayer intentions</li>
                    <li>Closing prayer and fellowship</li>
                </ul>
            </div>
        `;
    }
}

// Load past agendas
function loadPastAgendas() {
    const archiveContainer = document.getElementById('agenda-archive');
    
    archiveContainer.innerHTML = `
        <div class="agenda-item">
            <h4>No Past Agendas</h4>
            <p>Past meeting agendas will appear here as they become available.</p>
        </div>
    `;
}

// View past agenda
function viewPastAgenda(monthKey) {
    const agenda = agendaData[monthKey];
    if (agenda) {
        // Switch to current agenda tab and load the selected agenda
        document.querySelector('.nav-link[href="#current-agenda"]').click();
        
        // Parse the month key to set the current view
        const [year, month] = monthKey.split('-');
        currentYear = parseInt(year);
        currentMonth = parseInt(month) - 1;
        
        updateCurrentAgenda();
    }
}


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive features
function addInteractiveFeatures() {
    // Add click-to-copy functionality for prayers
    const prayerItems = document.querySelectorAll('.resource-card li');
    prayerItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.title = 'Click to copy prayer name';
        item.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(() => {
                // Visual feedback
                const originalText = this.textContent;
                this.textContent = '✓ Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1000);
            });
        });
    });
}

// Initialize interactive features when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveFeatures);

// Calendar Integration Functions
function initializeCalendarButtons() {
    const googleCalBtn = document.getElementById('add-to-google-calendar');
    const iCalBtn = document.getElementById('download-ical');
    
    if (googleCalBtn) {
        googleCalBtn.addEventListener('click', addToGoogleCalendar);
    }
    
    if (iCalBtn) {
        iCalBtn.addEventListener('click', downloadICalFile);
    }
}

function getCurrentEventData() {
    const monthKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
    const agenda = agendaData[monthKey];
    
    if (agenda) {
        return {
            title: agenda.title,
            date: agenda.date,
            time: agenda.time,
            location: agenda.location,
            description: generateEventDescription(agenda)
        };
    }
    
    return {
        title: 'Monthly Prayer Gathering',
        date: `${monthNames[currentMonth]} ${currentYear}`,
        time: '4:00 PM',
        location: 'Pearl & Basil\'s House, 1603 Blackjack Dr, Round Rock, TX',
        description: 'Join us for our monthly small group prayer gathering with community prayer, scripture reading, and fellowship.'
    };
}

function generateEventDescription(agenda) {
    let description = `Join us for our monthly small group prayer gathering.\n\nAgenda:\n`;
    
    agenda.items.forEach(item => {
        description += `${item.time} - ${item.title}\n`;
    });
    
    description += `\nLocation: ${agenda.location}\n\nAll are welcome to join us in prayer and fellowship.`;
    
    return description;
}

function parseEventDate(dateString, timeString) {
    // Parse the date string (e.g., "Sunday, October 27, 2025")
    const dateParts = dateString.match(/(\w+),\s+(\w+)\s+(\d+),\s+(\d+)/);
    if (!dateParts) return new Date();
    
    const [, , monthName, day, year] = dateParts;
    const monthIndex = monthNames.indexOf(monthName);
    
    // Parse time (e.g., "4:00 PM")
    const timeParts = timeString.match(/(\d+):(\d+)\s*(AM|PM)?/);
    let hours = 16; // Default to 4 PM
    let minutes = 0;
    
    if (timeParts) {
        hours = parseInt(timeParts[1]);
        minutes = parseInt(timeParts[2]) || 0;
        
        if (timeParts[3] === 'PM' && hours !== 12) {
            hours += 12;
        } else if (timeParts[3] === 'AM' && hours === 12) {
            hours = 0;
        }
    }
    
    return new Date(parseInt(year), monthIndex, parseInt(day), hours, minutes);
}

function formatDateForCalendar(date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function addToGoogleCalendar() {
    const eventData = getCurrentEventData();
    const startDate = parseEventDate(eventData.date, eventData.time);
    const endDate = new Date(startDate.getTime() + (90 * 60 * 1000)); // 1.5 hours duration
    
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.set('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.set('text', eventData.title);
    googleCalendarUrl.searchParams.set('dates', `${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}`);
    googleCalendarUrl.searchParams.set('details', eventData.description);
    googleCalendarUrl.searchParams.set('location', '1603 Blackjack Dr, Round Rock, TX 78664');
    googleCalendarUrl.searchParams.set('sf', 'true');
    googleCalendarUrl.searchParams.set('output', 'xml');
    
    window.open(googleCalendarUrl.toString(), '_blank');
}

function downloadICalFile() {
    const eventData = getCurrentEventData();
    const startDate = parseEventDate(eventData.date, eventData.time);
    const endDate = new Date(startDate.getTime() + (90 * 60 * 1000)); // 1.5 hours duration
    
    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Small Group Prayer Gathering//EN
BEGIN:VEVENT
UID:${Date.now()}@smallgroupprayergathering.com
DTSTAMP:${formatDateForCalendar(new Date())}
DTSTART:${formatDateForCalendar(startDate)}
DTEND:${formatDateForCalendar(endDate)}
SUMMARY:${eventData.title}
DESCRIPTION:${eventData.description.replace(/\n/g, '\\n')}
LOCATION:1603 Blackjack Dr\\, Round Rock\\, TX 78664
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
DESCRIPTION:Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `small-group-prayer-gathering-${currentYear}-${String(currentMonth + 1).padStart(2, '0')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// Export functions for potential future use
window.SmallGroupPrayerGathering = {
    navigateMonth,
    updateCurrentAgenda,
    viewPastAgenda,
    addToGoogleCalendar,
    downloadICalFile
};