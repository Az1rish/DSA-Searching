1.  a. 12, 6, 8
    b. 12, 17, 14, 15

3.  I would go to the aisle that had the range of the dewey decimal number I'm looking for and then go down the aisle until I'm in the area that is close in number to my number and then search for the title.
    function findBook(array, number, title) {
        for (let i = 0; i < array.length; i++) {
            if (number[0] === array[i][0]) {
                if (number[1] === array[i][1]) {
                    if (title === array[i].title) {
                        return array[i].title;
                    }
                }
            }
        } 
    }

4.  