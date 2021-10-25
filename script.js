Data = {
    days: 10,
    hours: 23,
    minutes: 59,
    seconds: 59,
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const countDown = async () => {

    firstShow()

    let seconds = document.querySelector('.seconds')
    let minutes = document.querySelector('.minutes')
    let hours = document.querySelector('.hours')
    let days = document.querySelector('.days')

    while (!(Data.days == 0 && Data.hours == 0 && Data.minutes == 0 && Data.seconds == 0)) {

        if (Data.seconds < 10) {
            seconds.innerHTML = `<p>0${Data.seconds}</p>`
        } else {
            seconds.innerHTML = `<p>${Data.seconds}</p>`
        }

        Data.seconds--
        await sleep(1000);

        if (Data.seconds == 0) {

            if (Data.minutes != 0) {
                Data.minutes--
                if (Data.minutes < 10) {
                    minutes.innerHTML = `<p>0${Data.minutes}</p>`
                } else {
                    minutes.innerHTML = `<p>${Data.minutes}</p>`
                }
                Data.seconds = 60
            }

            if (Data.minutes == 0) {
                if (Data.hours != 0) {
                    Data.hours--
                    if (Data.hours < 10) {
                        hours.innerHTML = `<p>0${Data.hours}</p>`

                    } else {
                        hours.innerHTML = `<p>${Data.hours}</p>`
                    }
                    Data.minutes = 60
                    minutes.innerHTML = `<p>${Data.minutes}</p>`
                }

                if (Data.hours == 0) {
                    if (Data.days == 0) {
                        days.innerHTML = `<p>${Data.days}</p>`
                    } else {
                        Data.hours = 24
                        hours.innerHTML = `<p>${Data.hours}</p>`
                        Data.days--
                        if (Data.days < 10) {
                            days.innerHTML = `<p>0${Data.days}</p>`

                        } else {
                            days.innerHTML = `<p>${Data.days}</p>`
                        }
                    }
                }
            }
        }

    }

    alert('acabou!!')
}

const firstShow = () => {
    document.querySelector('.seconds').innerHTML = `<p>${Data.seconds}</p>`
    document.querySelector('.minutes').innerHTML = `<p>${Data.minutes}</p>`
    document.querySelector('.hours').innerHTML = `<p>${Data.hours}</p>`
    document.querySelector('.days').innerHTML = `<p>${Data.days}</p>`
}

countDown()
