function twoSums(numbs, target) {

    const messageNumbs =  () => console.log(`el primer parametro tiene que se de tipo Array y puso: ${typeof numbs}
    y el segundo parametro tiene que ser un numero y puso ${target}`);

    if (Array.isArray(numbs)  && typeof target === "number") {

        let numberArray;
        //contendra el numero que ira sumando a los demas y cambiara al siguente si no coinside la suma
        let resultSum;
        //contendra la el resultado de la suma 
        let contIndex = 1;
        //le dira cuando tiene que estar cambiando posiciones para las sumas;
        let contenIndexNumber = [];
        //contendra los indices de los valores que al sumarse de el resultado esperado
        let finalBucle = true; 
        //para salir del bucle debe ser false
        let contIteration = 1; 
        //este contador dira las veces en la que este bucle es ejecutado
        let resetCont = 0;

        do {

            if (resetCont === contIndex) {
                resetCont = resetCont + 1
                //console.log('estos valores son iguales y no puede ser asi');
                //finalBucle = false;
            };
           
            numberArray = numbs[resetCont];
            const number = numbs[contIndex];

            //console.log('number -->', number);
            //console.log('numberArray -->', numberArray);
            
            resultSum = numberArray + number

            //console.log('resultSum -->', resultSum)

            if (resultSum === target) {

                if (resetCont < contIndex) {

                    contenIndexNumber.push(resetCont);
                    contenIndexNumber.push(contIndex);

                } else {

                    contenIndexNumber.push(contIndex);
                    contenIndexNumber.push(resetCont);

                };
               
                finalBucle = false;
            };

            contIndex++
            contIteration++

            if (contIteration === numbs.length) {
                //esta solucion esta a pensarce pero no me parece mal
                //console.log('se ha terminado el arreglo');
                resetCont = resetCont + 1
                contIndex = 0;
                //finalBucle = false;
            };
            
        } while (finalBucle);

        //console.log('contenIndexNumber -->', contenIndexNumber);

        return contenIndexNumber;

    } else {

        messageNumbs();

    }
}

module.exports = twoSums;