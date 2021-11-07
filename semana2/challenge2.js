function divisibleByLeft(n) {
    //Implementación
    const arrayString = n.toString().split("");
    const returnArray = [];

    arrayString.forEach((numberString, index, allList) => {
        const number = parseInt(numberString);

        if (index === 0) {
           returnArray.push(false);
        };

        if (index !== 0) {
            const numberLeft = parseInt(allList[index-1]);

            const isDibisible = number % numberLeft;

            if (isDibisible === 0) {

                returnArray.push(true);

            } else {

                returnArray.push(false);
            };
            
        };

        return returnArray

    });

    return returnArray;
}

module.exports = divisibleByLeft;