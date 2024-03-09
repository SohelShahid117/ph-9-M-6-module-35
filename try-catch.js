// 35-8 Error Handling: Try, Catch, Throw And Finally
// 35-9 Module Summary And Interview Questions
// 35-10 Frying The Concept Of JS Event Loop
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

//JS interview question:

//https://www.jsv9000.app/
//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D