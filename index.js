let main=document.createElement('main');
main.classList.add('main');
document.body.append(main);

let keywrapper=document.createElement('div');
keywrapper.classList.add('keywrapper');
main.append(keywrapper)

let textarea=document.createElement('textarea');
textarea.classList.add('textarea');
keywrapper.append(textarea);

let keyboard=document.createElement('div');
keyboard.classList.add('keyboard');
keywrapper.append(keyboard);



let arr1=['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
'Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','DEL',
'Caps Lock','A','S','D','D','F','G','H','J','K','L',';',"'",'ENTER',
'Shift','\\','Z','X','C','V','B','N','M','.',',','/','▲','Shift','Ctrl',
'Win','Alt',' ','Alt','Ctrl','◄', '▼', '►'];
let activearr=[0,13,14,28,29,42,43,55,56,57,58,59,61,62,63,64,65];

function addButton(arr) {
    for (let i=0;i<=arr.length-1;i++){
       
    let letter=document.createElement('button');
    letter.classList.add('key');
    letter.classList.add(`btn${i}`);
    if (activearr.includes(i)){
        letter.classList.add('activeBtn');
    }
    letter.innerHTML=[arr[i]]
    keyboard.append(letter);

    }
}

addButton(arr1)

