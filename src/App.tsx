import React, {useState, CSSProperties} from 'react';
import './App.scss';
import PadBank from "./components/PadBank";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

function App() {

    const [power, setPower] = useState(true);
    const [display, setDisplay] = useState(String.fromCharCode(160));
    const [currentPadBank, setCurrentPadBank] = useState(bankOne);
    const [currentPadBankId, setCurrentPadBankId] = useState('Heater Kit');
    const [sliderVal, setSliderVal] = useState(0.3);

    const powerControl = () => {
        setPower((prevState => !prevState))
        setDisplay(String.fromCharCode(160))
    };

    const selectBank = () => {
        if (power) {
            if (currentPadBankId === 'Heater Kit') {
                setCurrentPadBank(bankTwo);
                setDisplay('Smooth Piano Kit');
                setCurrentPadBankId('Smooth Piano Kit');
            } else {
                setCurrentPadBank(bankOne);
                setDisplay('Heater Kit');
                setCurrentPadBankId('Heater Kit');
            }
        }
    };

    const displayClipName = (name: string) => {
        power && setDisplay(name)
    };

    const adjustVolume = (e: any) => {
        if (power) {
            setSliderVal(e.target.value);
            setDisplay("Volume: " + Math.round(e.target.value * 100))
            setTimeout(() => clearDisplay(), 1000);
        }
    };

    const clearDisplay = () => {
        setDisplay(String.fromCharCode(160))
    };

    const powerSlider: CSSProperties = power ? {
        float: 'right'
    } : {
        float: 'left'
    };

    const bankSlider: CSSProperties = currentPadBank === bankOne ? {
        float: 'left'
    } : {
        float: 'right'
    };

    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach(sound => {
        // @ts-ignore
        sound.volume = sliderVal
    });

    return (
        <div id="drum-machine" className="inner-container">
            <PadBank
                power={power}
                updateDisplay={displayClipName}
                currentPadBank={currentPadBank}/>
            <div className="logo">
                <div className="inner-logo ">{'FCC' + String.fromCharCode(160)}</div>
                <FontAwesomeIcon icon={faFreeCodeCamp} size="lg"  />
            </div>

            <div className="controls-container">

                <div className="control">
                    <p>Power</p>
                    <div onClick={powerControl} className="select">
                        <div style={powerSlider} className="inner"/>
                    </div>
                </div>
                <p id="display">
                    {display}
                </p>
                <div className="volume-slider">
                    <input type="range" min="0" max="1" step="0.01" value={sliderVal} onChange={adjustVolume}/>
                </div>
                <div className="control">
                    <p>Bank</p>
                    <div onClick={selectBank} className="select">
                        <div style={bankSlider} className="inner"/>
                    </div>
                </div>
            </div>

        </div>);
}

export default App;
