const allElements = document.querySelectorAll('.animated-logo');
if(allElements.length > 0){
    allElements.forEach((element) => {
        const txtElement = element,
            wordsList = txtElement.getAttribute('data-word'),
            words = wordsList.split(', ');

            let wordsCount = 0;
            entry();
            
            function entry() {
                if(wordsCount < words.length) {
                    let word = words[wordsCount],
                        txtArr = word.split(''),
                        count = 0;
                
                txtElement.textContent = '';

                txtArr.forEach((letter) => {
                    let _letter = letter === ' ' ? '&nbsp;' : letter;
                
                txtElement.innerHTML += `<span>${_letter}</span>`                    
                });

                let spans = txtElement.childNodes;

                const letterInterval = setInterval(activeLetter, 100);

                function activeLetter() {
                    spans[count].classList.add('active');
                    count++;

                    if(count === spans.length){
                        clearInterval(letterInterval);
                        setTimeout(() => {eraseText()}, 4000);
                    }
                }

                function eraseText() {
                    let removeInterval = setInterval(removeLetter, 40);
                    count--;

                    function removeLetter() {
                        spans[count].classList.remove('active');
                        count--;

                        if(count === -1) {
                            clearInterval(removeInterval);
                            wordsCount++;
                            entry();
                        }
                    }
                }
            } else {
                wordsCount = 0;
                entry();
                }
            }
    });
}