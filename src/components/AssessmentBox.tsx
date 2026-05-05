### ASSESSMENT_BOX_COMPONENT ###
import React, { useState } from 'react';

const AssessmentBox = () => {
    const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
    const [gender, setGender] = useState<'M' | 'F'>('M');
    const [height, setHeight] = useState(60); // inches or cm

    const calculateIBW = () => {
        const inches = unit === 'imperial' ? height : height / 2.54;
        const base = gender === 'M' ? 106 : 100;
        const multi = gender === 'M' ? 6 : 5;
        const inchesOver5ft = Math.max(0, inches - 60);
        return base + (multi * inchesOver5ft);
    };

    return (
        <div className="p-6 border-l-4 border-[#AB0520] bg-white shadow-md rounded-r-lg font-sans">
            <h2 className="text-[#0C234B] text-xl font-bold mb-1">Assessment Box</h2>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">UA Foods Lab • Clinical Support</p>

            <div className="space-y-4">
                {/* Toggle & Inputs */}
                <button
                    onClick={() => setUnit(unit === 'imperial' ? 'metric' : 'imperial')}
                    className="bg-[#0C234B] text-white px-4 py-2 rounded text-xs font-bold transition-opacity hover:opacity-90"
                >
                    Units: {unit.toUpperCase()}
                </button>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0C234B]">Height ({unit === 'imperial' ? 'in' : 'cm'})</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full border-2 border-gray-100 p-2 rounded focus:border-[#AB0520] outline-none"
                    />
                </div>

                {/* Results Area */}
                <div className="mt-6 p-4 bg-[#0C234B] text-white rounded-lg">
                    <p className="text-xs opacity-80 mb-1">Ideal Body Weight (Hamwi)</p>
                    <p className="text-2xl font-bold">{calculateIBW().toFixed(1)} lbs</p>
                </div>
            </div>
        </div>
    );
};

export default AssessmentBox;