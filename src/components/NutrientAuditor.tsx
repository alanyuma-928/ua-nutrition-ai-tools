### NUTRIENT_AUDITOR_COMPONENT ###
import React, { useState } from 'react';
import standards from '../data/clinicalStandards.json';

const NutrientAuditor = () => {
    const [kcalIntake, setKcalIntake] = useState(2000);
    const [fiberIntake, setFiberIntake] = useState(15);

    // Apply the 14g/1000kcal Rule from SSoT
    const fiberGoal = (kcalIntake / standards.fiber.kcal_unit) * standards.fiber.grams_per_unit;
    const isGoalMet = fiberIntake >= fiberGoal;

    return (
        <div className="p-6 border-l-4 border-[#0C234B] bg-white shadow-md rounded-r-lg font-sans">
            <h2 className="text-[#0C234B] text-xl font-bold mb-1">Nutrient Auditor</h2>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">
                SSoT: {standards.fiber.source}
            </p>

            <div className="space-y-4">
                {/* Input Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-[#0C234B] mb-1 uppercase">Total Energy (kcal)</label>
                        <input
                            type="number"
                            value={kcalIntake}
                            onChange={(e) => setKcalIntake(Number(e.target.value))}
                            className="w-full border-2 border-gray-100 p-2 rounded focus:border-[#0C234B] outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#0C234B] mb-1 uppercase">Fiber Intake (g)</label>
                        <input
                            type="number"
                            value={fiberIntake}
                            onChange={(e) => setFiberIntake(Number(e.target.value))}
                            className="w-full border-2 border-gray-100 p-2 rounded focus:border-[#0C234B] outline-none"
                        />
                    </div>
                </div>

                {/* Audit Results */}
                <div className={`mt-6 p-4 rounded-lg transition-colors ${isGoalMet ? 'bg-[#0C234B] text-white' : 'bg-[#AB0520] text-white'}`}>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs opacity-80 mb-1 uppercase">Calculated Fiber Goal</p>
                            <p className="text-2xl font-bold">{fiberGoal.toFixed(1)}g</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold">{isGoalMet ? '✓ GOAL MET' : '⚠ BELOW GOAL'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutrientAuditor;