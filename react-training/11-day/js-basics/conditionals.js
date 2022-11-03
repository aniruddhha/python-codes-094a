const day = 2

function checkUsingIfElse() {
    if (day == 1) {
        console.log('mon')
    }
    else if (day == 2) {
        console.log('tue')
    }
    else if (day == 3) {
        console.log('wed')
    }
    else console.log('sun')

}

function checkUsingSwitchCase() {
    switch (day) {

        case 1: {
            console.log('mon')
            break
        }
        case 2: {
            console.log('tue')
            break
        }
        case 3: {
            console.log('wed')
            break
        }
        default: {
            console.log('sun')
        }

    }
}

checkUsingIfElse()
checkUsingSwitchCase()


