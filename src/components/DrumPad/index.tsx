import React, {useCallback, useEffect, useState} from 'react'

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
}

const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: "3px 3px 5px black"
}

const DrumPad = ({clipId, keyTrigger, keyCode, clip, updateDisplay, power}) => {
    const [padStyle, setPadStyle] = useState(inactiveStyle);

    const playSound = (e) => {
        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();
        activatePad();
        setTimeout(() => activatePad(), 100);
        updateDisplay(clipId.replace(/-/g, ' '));
    }

    const handleKeyPress = useCallback((e) => {
        if (e.keyCode === keyCode) {
            playSound(e);
        }
    }, [keyCode, playSound])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress])

    const activatePad = () => {
        if (power) {
            padStyle.backgroundColor === 'orange' ?
                setPadStyle(inactiveStyle) :
                setPadStyle(activeStyle)
        } else {
            padStyle.marginTop === 13 ?
                setPadStyle(inactiveStyle) :
                setPadStyle({
                    height: 77,
                    marginTop: 13,
                    backgroundColor: 'grey',
                    boxShadow: "0 3px grey"
                })
        }
    }


    return (
        <div id={clipId}
             onClick={playSound}
             className="drum-pad"
             style={padStyle}>
            <audio className='clip' id={keyTrigger} src={clip}/>
            {keyTrigger}
        </div>
    )
}

export default DrumPad
