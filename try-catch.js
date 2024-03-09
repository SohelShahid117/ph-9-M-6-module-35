// 35-8 Error Handling: Try, Catch, Throw And Finally
function checkAge() {
    const chkAge = document.getElementById('age');
    // console.log(chkAge);
    const ageValue = chkAge.value;
    console.log(ageValue);
    // console.log(bBaria)

    const errTag = document.getElementById('err')

    try {
        // console.log(bBaria);
        const ageNmbr = parseFloat(ageValue);
        console.log(typeof ageNmbr, ageNmbr);
        if (isNaN(ageNmbr)) {
            // console.log('you eneter', ageNmbr, ageValue);
            throw 'pls enter a number'
        }
        else if (ageNmbr < 18 || ageNmbr > 30) {
            // console.log('baccha - bora not allowd')
            throw 'baccha - bora not allowd';
        }
        else {
            console.log('from else-you eneter', ageNmbr, ageValue)
        }
        errTag.innerHTML = ' ';
    }
    catch (err) {
        console.log(`error is : ${err}`);
        // errTag.innerHTML = 'something wrong'
        errTag.innerHTML = 'error issss ----' + err;
    }
    finally {
        console.log('all done from finally')
    }
    console.log(11111);
}