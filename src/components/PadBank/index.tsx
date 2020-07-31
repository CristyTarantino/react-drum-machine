import React from 'react'
import DrumPad from "../DrumPad";

const PadBank = ({power, currentPadBank, updateDisplay}) => {
    const padBank = currentPadBank.map((drumObj, i, padBankArr) => {
        return (
            <DrumPad
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
