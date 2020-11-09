function printInfo(dateMatched) {
    if (dateMatched) {
        console.log('Cyberpunk release today!');
    }
}

const plannedReleaseDate = {
    date: new Date('2020-12-10')
};

const today = {
    date: new Date('2020-12-10')
};

// 1
printInfo(plannedReleaseDate == today)

// 2
printInfo(plannedReleaseDate === today);
