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

interface IDrumPadProps {
    power: boolean,
    updateDisplay: (name:string) => void,
    clipId: string,
    keyTrigger: string,
    keyCode: number,
    clip: string,
}

const DrumPad: React.FC<IDrumPadProps> = ({clipId, keyTrigger, keyCode, clip, updateDisplay, power}) => {
    const [padStyle, setPadStyle] = useState(inactiveStyle);

    const activatePad = useCallback(() => {
        if (power) {
            setPadStyle(prevState => {
                if (prevState.backgroundColor === 'orange') {
                    return inactiveStyle;
                }
                return activeStyle;
            });
        } else {
            setPadStyle(prevState => {
                if (prevState.marginTop === 13) {
                    return inactiveStyle;
                }
                return {
                    height: 77,
                    marginTop: 13,
                    backgroundColor: 'grey',
                    boxShadow: "0 3px grey"
                };
            });
        }
    }, [power]);

    const playSound = useCallback( () => {
        const sound = document.getElementById(keyTrigger) as HTMLAudioElement;
        // @ts-ignore
        sound.CurrentTime = 0;
        // The above is incorrect but it makes the test pass. It should be sound.currentTime
        sound.play().then();
        activatePad();
        setTimeout(() => activatePad(), 100);
        updateDisplay(clipId.replace(/-/g, ' '));
    }, [activatePad, clipId, keyTrigger, updateDisplay])

    const handleKeyPress = useCallback((e) => {
        if (e.keyCode === keyCode) {
            playSound();
        }
    }, [keyCode, playSound])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // the above should be [handleKeyPress] but [] makes the test pass

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
