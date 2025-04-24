import React from 'react';

function WeeklyCalendar({ format }) {
    return (
        <div>
            {format === "F" ? (
                <div>
                    <p>Weekly Calendar - Full</p>
                </div>
            ) : (
                <div>
                    <p>Weekly Calendar - Work</p>
                </div>
            )}
        </div>
    );
}

export default WeeklyCalendar;
