import React from 'react'
import DrumPad from "../DrumPad";

interface PadBank {
    keyCode: number,
    keyTrigger: string,
    id: string,
    url: string
}

interface IPadBankProps {
    power: boolean,
    currentPadBank: Array<PadBank>,
    updateDisplay: (name:string) => void,
}

const PadBank: React.FC<IPadBankProps> = ({power, currentPadBank, updateDisplay}) => {
    const padBank = currentPadBank.map((drumObj, i, padBankArr) => {
        return (
            <DrumPad
                key={padBankArr[i].id}
                clipId={padBankArr[i].id}
                clip={power ? padBankArr[i].url : '#'}
                keyTrigger={padBankArr[i].keyTrigger}
                keyCode={padBankArr[i].keyCode}
                updateDisplay={updateDisplay}
                power={power} />
        )
    });

    return (
        <div className="pad-bank" >
            {padBank}
        </div>
    )
}

export default PadBank
