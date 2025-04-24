import React from 'react';

function MonthlyCalendar({ format }) {
    return (
        <div>
            {format === "F" ? (
                <div>
                    <p>Monthly Calendar - Full</p>
                </div>
            ) : (
                <div>
                    <p>Monthly Calendar - Work</p>
                </div>
            )}
        </div>
    );
}

export default MonthlyCalendar;
