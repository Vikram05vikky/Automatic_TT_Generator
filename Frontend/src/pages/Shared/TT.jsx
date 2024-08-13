import React, { useState, useEffect } from 'react';
import api from '@/service/axiosInstance';

const TimetableGenerator = () => {
    const [subjects, setSubjects] = useState([]);
    const [timetable, setTimetable] = useState([]);

    const handleDownload = () => {
        if (timetable.length === 0) {
            console.log('No timetable data available for download.');
            return;
        }
    
        const timetableText = timetable.map((day, dayIndex) => {
            return `Day ${dayIndex + 1}\n${day.map((period, periodIndex) => `Period ${periodIndex + 1}: ${period}`).join('\n')}`;
        }).join('\n\n');
        
        const blob = new Blob([timetableText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'timetable.txt';
        a.click();
        URL.revokeObjectURL(url);
    };
    
    useEffect(() => {
        // Fetch subjects from the database with authorization
        api.get('/subs/getsubs')  // Replace '/subs' with your actual endpoint if different
            .then(response => {
                console.log("Fetched subjects:", response.data); // Debugging statement
                setSubjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching subjects:', error);
            });
    }, []);

    useEffect(() => {
        if (subjects.length > 0) {
            generateTimetable();
        } else {
            console.log("No subjects found!");  // Debugging statement
        }
    }, [subjects]);

    const generateTimetable = () => {
        console.log("Generating Timetable...");  // Debugging statement
        const days = 5;
        const periodsPerDay = 7;
        const newTimetable = [];

        for (let day = 0; day < days; day++) {
            const dayTimetable = [];

            for (let period = 0; period < periodsPerDay; period++) {
                let subjectOrFreePeriod;

                // Randomly choose between a subject or a Free Period
                if (subjects.length > 0 && Math.random() < 0.7) { // 70% chance to pick a subject if available
                    const randomIndex = Math.floor(Math.random() * subjects.length);
                    subjectOrFreePeriod = subjects[randomIndex].title;
                } else {
                    subjectOrFreePeriod = 'Free Period';
                }

                dayTimetable.push(subjectOrFreePeriod);
            }
            newTimetable.push(dayTimetable);
        }

        console.log("New Timetable:", newTimetable);  // Debugging statement
        setTimetable(newTimetable);
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Generated Timetable</h1>
            <div className="grid grid-cols-8 gap-4">
                <div className="font-bold">Day / Period</div>
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="font-bold">P{index + 1}</div>
                ))}
                {timetable.map((dayTimetable, dayIndex) => (
                    <React.Fragment key={dayIndex}>
                        <div className="font-bold">Day {dayIndex + 1}</div>
                        {dayTimetable.map((subject, periodIndex) => (
                            <div key={periodIndex} className="border p-2">
                                {subject}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div>
            <button onClick={generateTimetable} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Regenerate Timetable
            </button>
            </div>
            <button onClick={handleDownload} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Download
            </button>
        </div>
    );
};

export default TimetableGenerator;