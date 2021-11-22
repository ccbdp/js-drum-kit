//Sound from soundcamp.org and freesound.org


function playCrashCymbal(){
    const a = document.getElementById('a');
    const crashCymbal = new Audio('music/crash-cymbal-sound.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 'a'){
            crashCymbal.play();
            a.style.background = 'rgb(248, 195, 125)'
            a.style.transform = 'translate(-400%, -320%)';
            a.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 'a'){
            console.log('a');
            a.style.background = ''
            a.style.transform = 'translate(-400%, -330%)';
            a.style.boxShadow = '';

        }
    })
}
playCrashCymbal();



function playHighTom(){
    const s = document.getElementById('s');
    const highTom = new Audio('music/high-tom.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 's'){
            highTom.play();
            s.style.background = 'rgb(248, 195, 125)'
            s.style.transform = 'translate(-80%, -180%)';
            s.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 's'){
            console.log('s');
            s.style.background = ''
            s.style.transform = 'translate(-80%, -200%)';
            s.style.boxShadow = '';

        }
    })
}
playHighTom();



function playLowMidTom(){
    const d = document.getElementById('d');
    const lowMidTom = new Audio('music/low-mid-tom.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 'd'){
            lowMidTom.play();
            d.style.background = 'rgb(248, 195, 125)'
            d.style.transform = 'translate(180%, -180%)';
            d.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 'd'){
            console.log('d');
            d.style.background = ''
            d.style.transform = 'translate(180%, -200%)';
            d.style.boxShadow = '';

        }
    })
}
playLowMidTom();


function playSnareDrum(){
    const h = document.getElementById('h');
    const snareDrum = new Audio('music/snare-drum.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 'h'){
            snareDrum.play();
            h.style.background = 'rgb(248, 195, 125)'
            h.style.transform = 'translate(300%, -60%)';
            h.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 'h'){
            console.log('h');
            h.style.background = ''
            h.style.transform = 'translate(300%, -80%)';
            h.style.boxShadow = '';

        }
    })
}
playSnareDrum();



function playHighHat(){
    const f = document.getElementById('f');
    const highHat = new Audio('music/high-hat.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 'f'){
            highHat.play();
            f.style.background = 'rgb(248, 195, 125)'
            f.style.transform = 'translate(550%, -180%)';
            f.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 'f'){
            console.log('f');
            f.style.background = ''
            f.style.transform = 'translate(550%, -200%)';
            f.style.boxShadow = '';

        }
    })
}
playHighHat();



function playFloorTom(){
    const g = document.getElementById('g');
    const floorTom = new Audio('music/floor-tom.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 'g'){
            floorTom.play();
            g.style.background = 'rgb(248, 195, 125)'
            g.style.transform = 'translate(-250%, 20%)';
            g.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 'g'){
            console.log('g');
            g.style.background = ''
            g.style.transform = 'translate(-250%, 0%)';
            g.style.boxShadow = '';

        }
    })
}
playFloorTom();



function playBassDrum(){
    const j = document.getElementById('j');
    const bassDrum = new Audio('music/bass-drum.wav');

    window.addEventListener('keydown', (event)=> {
        if (event.key === 'j'){
            bassDrum.play();
            j.style.background = 'rgb(248, 195, 125)'
            j.style.transform = 'translate(50%, 220%)';
            j.style.boxShadow = '0px 2px #666'
            
        }
    });
    window.addEventListener('keyup', (event)=>{
        if (event.key === 'j'){
            console.log('j');
            j.style.background = ''
            j.style.transform = 'translate(50%, 200%)';
            j.style.boxShadow = '';

        }
    })
}
playBassDrum();



