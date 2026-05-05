### ADIME_AGGREGATOR_COMPONENT ###
import React from 'react';
import standards from '../data/clinicalStandards.json';

interface ADIMEProps {
    clientData: {
        gender: string;
        height: number;
        weight: number;
        kcalIntake: number;
        fiberIntake: number;
        ibw: number;
        fiberGoal: number;
    };
}

const ADIMEBox = ({ clientData }: ADIMEProps) => {
    const { gender, ibw, fiberGoal, fiberIntake } = clientData;
    const isFiberDeficit = fiberIntake < fiberGoal;

    // Formatted PES Statement Logic
    const pesStatement = isFiberDeficit
        ? `Inadequate fiber intake related to dietary choices as evidenced by fiber audit of ${fiberIntake}g/day vs. DGA goal of ${fiberGoal}g/day.`
        : "Fiber intake currently meets DGA standards.";

    const copyToClipboard = () => {
        const note = `
A: IBW ${ibw} lbs (Method: ${standards.ibw.method}). Height: ${clientData.height} in.
D: ${pesStatement}
I: Recommended fiber density of ${standards.fiber.grams_per_unit}g/1000kcal per ${standards.fiber.source}.
M: Monitor daily fiber intake and bowel frequency.
    `;
        navigator.clipboard.writeText(note.trim());
        alert("Clinical Note Copied to Clipboard");
    };

    return (
        <div className="p-6 border-l-4 border-[#AB0520] bg-gray-50 shadow-inner rounded-r-lg font-sans">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-[#0C234B] text-xl font-bold uppercase">ADIME Box</h2>
                    <p className="text-xs text-gray-500 italic">Clinical Documentation Engine</p>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="bg-[#AB0520] text-white px-4 py-2 rounded-md text-xs font-bold hover:bg-[#8e041a] transition-all"
                >
                    COPY NOTE
                </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
                <div className="bg-white p-3 rounded border border-gray-200">
                    <p><strong>Assessment:</strong> Client IBW is {ibw} lbs based on Hamwi standards.</p>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                    <p><strong>Diagnosis (PES):</strong> {pesStatement}</p>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                    <p><strong>Intervention:</strong> Apply {standards.fiber.source} fiber density of {standards.fiber.grams_per_unit}g per {standards.fiber.kcal_unit} kcal.</p>
                </div>
            </div>
        </div>
    );
};

export default ADIMEBox;