

                                                //Kilometer to meter conversion//


function kilometerToMeter(num) {
    if (num < 0) {
        return "Please insert postive value.";
    }
    else {
        meter = num * 1000;
        return meter;
    }
}
var km = 159;
var result = kilometerToMeter(km);
console.log(result);



                                                //BUDGET CALCULATOR//


function budgetCalculator(x, y, z)   //taking the parameters//
{
    if (x < 0 || y < 0 || z < 0) {
        return "Your number is not valid."
    }
    else {
        var watch = 50 * x;
        var phone = 100 * y;
        var laptop = 500 * z;
        var total = watch + phone + laptop;
        return total;
    }
}

var a = 2;
var b = 2;
var c = 1;

var result = budgetCalculator(a, b, c);
console.log(result);


                                                //Hotel Management//

function hotelCost(num) {
    if (num < 0) {
        return "You are in  a dream,  nothing is free. :p"
    }
    else {
        if (num <= 10) {
            var cost = num * 100;
            return cost;
        }
        else if (num > 10 && num <= 20) {
            var remain = (num - 10) * 80;  //for more than 10 days
            var x = 10 * 100;            //for 1st 10 days
            var cost = x + remain;
            return cost;
        }
        else {
            var remain = (num - 20) * 50;    //for more than 20 days
            var x = 10 * 80;             //for more than 10 days 
            var y = 10 * 100;             //for 1st 10 days
            var cost = x + y + remain;
            return cost;
        }
    }
}
var days = 24;
var total = hotelCost(days);
console.log(total);





                                                //Largest name of friend//


function megaFriend(name) {              
    var max = name[0];              //Initial value given
    for (i = 0; i < name.length; i++) {
        if (name[i].length > max.length) {
            max = name[i];
        }
    }
    return max;
}
var nam = ['salam', 'kalam', 'julfikaar', 'borkotali', 'jobbar'];
var largest = megaFriend(nam);
console.log(largest);