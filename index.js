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
'Caps Lock','A','S','D','F','G','H','J','K','L',';',"'",'ENTER',
'Shift','\\','Z','X','C','V','B','N','M','.',',','/','▲','Shift','Ctrl',
'Win','Alt',' ','Alt','Ctrl','◄', '▼', '►'];
let arr2=['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
'Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','DEL',
'Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж',"Э",'ENTER',
'Shift','\\','Я','Ч','С','М','И','Т','Ь','Б','Ю','/','▲','Shift','Ctrl',
'Win','Alt',' ','Alt','Ctrl','◄', '▼', '►'];
let activearr=[0,13,14,28,29,41,42,54,55,56,57,58,60,61,62,63,64];

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

let firstLett=document.querySelector('.btn15');
document.addEventListener('keydown', function(event) {

if (event.key=='Alt' && event.shiftKey== true) {
    if (firstLett.innerHTML=='Й'){
    let elems=document.querySelectorAll('.key');
    
    for (let i=0;i<=arr1.length-1;i++) {
        elems[i].innerHTML=arr1[i]
    }
} else {
    let elems=document.querySelectorAll('.key');
    
    for (let i=0;i<=arr2.length-1;i++) {
        elems[i].innerHTML=arr2[i]
    }
}
} else if (event.key=='Tab'){
        let elem=document.querySelector('.btn14');
        elem.classList.add('activeBtnAll')
    } else if (event.key=='Backspace') {
        let elem=document.querySelector('.btn13');
        elem.classList.add('activeBtnAll')
    } else if (event.key=='Delete') {
        let elem=document.querySelector('.btn28');
        elem.classList.add('activeBtnAll') 
    } else if (event.key=='CapsLock') {
        let elem=document.querySelector('.btn29');
        if(elem.classList.contains('activeBtnAll')){
            elem.classList.remove('activeBtnAll') 
        }else{
        elem.classList.add('activeBtnAll') 
        }
    } else if (event.code=='ShiftLeft') {
        let elem=document.querySelector('.btn42');
        elem.classList.add('activeBtnAll') 
    } else if (event.code=='ShiftRight') {
        let elem=document.querySelector('.btn55');
        elem.classList.add('activeBtnAll') 
    } else if (event.key=='ArrowUp') {
        let elem=document.querySelector('.btn54');
        elem.classList.add('activeBtnAll') 
    } else if (event.code=='ControlLeft') {
        let elem=document.querySelector('.btn56');
        elem.classList.add('activeBtnAll') 
    } else if (event.code=='MetaLeft') {
        let elem=document.querySelector('.btn57');
        elem.classList.add('activeBtnAll') 
    } else if (event.code=='AltLeft') {
        let elem=document.querySelector('.btn58');
        elem.classList.add('activeBtnAll') 
    }else if (event.code=='AltRight') {
        let elem=document.querySelector('.btn60');
        elem.classList.add('activeBtnAll') 
    }else if (event.code=='ControlRight') {
        let elem=document.querySelector('.btn61');
        elem.classList.add('activeBtnAll') 
    } else if (event.code=='ArrowLeft') {
        let elem=document.querySelector('.btn62');
        elem.classList.add('activeBtnAll') 
    } else if (event.code=='ArrowDown') {
        let elem=document.querySelector('.btn63');
        elem.classList.add('activeBtnAll') 
    }
    else if (event.code=='ArrowRight') {
        let elem=document.querySelector('.btn64');
        elem.classList.add('activeBtnAll') 
    }
    let target=event.key.toUpperCase();
    console.log(target);
    let num=arr1.indexOf(target);
    console.log(num)
    let elem=document.querySelector(`.btn${num}`);
    elem.classList.add('activeBtnAll')
        }
      );

      document.addEventListener('keyup', function(event) {
        console.log(event);

        if (event.key=='Tab'){
            let elem=document.querySelector('.btn14');
            elem.classList.remove('activeBtnAll')
        } else if (event.key=='Backspace') {
            let elem=document.querySelector('.btn13');
            elem.classList.remove('activeBtnAll')
        } else if (event.key=='Delete') {
            let elem=document.querySelector('.btn28');
            elem.classList.remove('activeBtnAll')
        } else if (event.key=='CapsLock') {
            return 0
        } else if (event.code=='ShiftLeft') {
            let elem=document.querySelector('.btn42');
            elem.classList.remove('activeBtnAll')
        } else if (event.code=='ShiftRight') {
            let elem=document.querySelector('.btn55');
            elem.classList.remove('activeBtnAll')
        } else if (event.key=='ArrowUp') {
            let elem=document.querySelector('.btn54');
            elem.classList.remove('activeBtnAll') 
        } else if (event.code=='ControlLeft') {
            let elem=document.querySelector('.btn56');
            elem.classList.remove('activeBtnAll') 
        } else if (event.code=='MetaLeft') {
            let elem=document.querySelector('.btn57');
            elem.classList.remove('activeBtnAll')
        } else if (event.code=='AltLeft') {
            let elem=document.querySelector('.btn58');
            elem.classList.remove('activeBtnAll')
        }else if (event.code=='AltRight') {
            let elem=document.querySelector('.btn60');
            elem.classList.remove('activeBtnAll')
        }else if (event.code=='ControlRight') {
            let elem=document.querySelector('.btn61');
            elem.classList.remove('activeBtnAll') 
        } else if (event.code=='ArrowLeft') {
            let elem=document.querySelector('.btn62');
            elem.classList.remove('activeBtnAll') 
        } else if (event.code=='ArrowDown') {
            let elem=document.querySelector('.btn63');
            elem.classList.remove('activeBtnAll')
        }
        else if (event.code=='ArrowRight') {
            let elem=document.querySelector('.btn64');
            elem.classList.remove('activeBtnAll') 
        }
        let target=event.key.toUpperCase();
        console.log(target);
        let num=arr1.indexOf(target);
        console.log(num)
        let elem=document.querySelector(`.btn${num}`);
        elem.classList.remove('activeBtnAll')
            }
          );

           let capsLock=document.querySelector('.btn29');
          let keys=document.querySelectorAll('.key');
          for (let i=0;i<=keys.length-1;i++) {
            keys[i].onclick=function () {
                if (i==13){
                   let value=textarea.value;
                  value=value.slice(0,value.length-1)
                  textarea.value=value;
                  textarea.focus()
                } else {
                    if(capsLock.classList.contains('activeBtnAll')){
                textarea.value+=keys[i].innerHTML;
                textarea.focus()
                    } else {
                        textarea.value+=(keys[i].innerHTML).toLowerCase();
                textarea.focus() 
                    }
                }
            }
          }