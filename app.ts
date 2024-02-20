import { count } from "console";

// ********************************************  Answer to Question-2
console.log('*************** Answer to Question-2')
let myMessage = 'Hello Rehan Shams, would you like to learn some TypeScript today?';
console.log(myMessage)
console.log()






// ********************************************  Answer to Question-3
console.log('*************** Answer to Question-3')
let personName = 'Rehan Shams';
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
let personNameWord = personName.toLowerCase().split(' ');
for (let i = 0; i < personNameWord.length; i++) {
    personNameWord[i] = personNameWord[i].charAt(0).toUpperCase() + personNameWord[i].slice(1);
}
console.log(personNameWord.join(' '));
console.log()






// ********************************************  Answer to Question-4
console.log('*************** Answer to Question-4')
let favirotQuote = 'Albert Einstein once said, \"If you can\'t explain it simply, you don\'t understand it well enough.\"'
console.log(favirotQuote);
console.log()






// ********************************************  Answer to Question-5
console.log('*************** Answer to Question-5')
let famous_person = 'Albert Einstein';
let message = 'If you can\'t explain it simply, you don\'t understand it well enough.';
favirotQuote = famous_person + ' once said, \"' + message + '\"';
console.log(favirotQuote);
console.log()






// ********************************************  Answer to Question-6
console.log('*************** Answer to Question-6')
let spaceCharacterName = '  \tRehan\nShams  \n  ';
console.log(spaceCharacterName);
console.log(spaceCharacterName.trim().replace(/[\n\t]/g, ''));
console.log()






// ********************************************  Answer to Question-7
console.log('*************** Answer to Question-7')
console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
console.log()






// ********************************************  Answer to Question-8
console.log('*************** Answer to Question-8')
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log()






// ********************************************  Answer to Question-9
console.log('*************** Answer to Question-9')
let favirotNumber = 997
console.log('My favirot number is ' + favirotNumber);
console.log()






// ********************************************  Answer to Question-10
console.log('*************** Answer to Question-10')
/*
 These are my TypeScript Assignment Programs, today is 18th Feb 2024, 6:10pm.
 */
console.log()






// ********************************************  Answer to Question-11
console.log('*************** Answer to Question-11')
let nameArray = ['Rehan', 'Ayan', 'Aleena', 'Sumera'];
for (let namePosition = 0; namePosition < nameArray.length; namePosition++)
    console.log(nameArray[namePosition]);
console.log()






// ********************************************  Answer to Question-12
console.log('*************** Answer to Question-12')
console.log('Hi ' + nameArray[0] + ', Nice to see you.')
console.log('Hi ' + nameArray[1] + ', good to see  you.')
console.log('Hello ' + nameArray[2] + ', Sending you good vibes.')
console.log('Hi ' + nameArray[3] + ', Pleased to meet you.')
console.log()






// ********************************************  Answer to Question-13
console.log('*************** Answer to Question-13')
let myVehicleStatments = [
    'I would like to own a Sportage.',
    'Sportage has a 1999 cc Enginer.',
    'It has Automatic Transmission.'
]
for (let statmentCounter = 0; statmentCounter < myVehicleStatments.length; statmentCounter++)
    console.log(myVehicleStatments[statmentCounter]);
console.log()






// ********************************************  Answer to Question-14
console.log('*************** Answer to Question-14')

// adding list of living and deceased guests
let myGuests = [
    ['Shamsuddin', 'deceased'],
    ['Aleena', 'living'],
    ['Ayan', 'living'],
    ['Sumera', 'living']
]

// inviting only living guests
for (let guestCounter = 0; guestCounter < myGuests.length; guestCounter++) {
    if (myGuests[guestCounter][1] == 'living')
        console.log(myGuests[guestCounter][0] + " You are invited for dinner at our home tonight.");
}
console.log()






// ********************************************  Answer to Question-15
console.log('*************** Answer to Question-15')
console.log("Sumera can not reach for dinner tonight.")

// changing the name of last guest
myGuests[3][0] = "Yusra"
myGuests[3][1] = "living"

// inviting all living guests for dinner
for (let guestCounter = 0; guestCounter < myGuests.length; guestCounter++) {
    if (myGuests[guestCounter][1] == 'living')
        console.log(myGuests[guestCounter][0] + " You are invited for dinner at our home tonight.");
}
console.log()






// ********************************************  Answer to Question-16
console.log('*************** Answer to Question-16')
console.log("We have got a bigger dinner table now.")

// adding one guest at top of array
myGuests.unshift(['Faryal', 'living'])

// adding one guest at end of array
myGuests.push(['Sania', 'living'])

// adding one guest at middel i.e. index=3
let newGuests=[];
let insertIndex = 3;
for (let guestCounter = 0; guestCounter < myGuests.length; guestCounter++) {
    if (guestCounter == insertIndex)
        newGuests.push(['Faiza', 'living'])
    newGuests.push([myGuests[guestCounter][0], myGuests[guestCounter][1]]);
}

// printing invition messages to all living guests
for (let guestCounter = 0; guestCounter < newGuests.length; guestCounter++) {
    if (newGuests[guestCounter][1] == 'living')
        console.log(newGuests[guestCounter][0] + " You are invited for dinner at our home tonight.");
}
console.log()






// ********************************************  Answer to Question-17
console.log('*************** Answer to Question-17')
console.log("Sorry our dinner table wont arrive in time, therefore we will just invite 2 guests.")

// removing guests from list until only 2 guests are remaining in the lsit
do {
    console.log(newGuests[0][0] + " sorry you are not invited for dinner at our home tonight.");
    newGuests.splice(0, 1)
} while (newGuests.length > 2);


// inviting the remaining 2 guests for the dinner
for (let guestCounter = 0; guestCounter < newGuests.length; guestCounter++) {
    if (newGuests[guestCounter][1] == 'living')
        console.log(newGuests[guestCounter][0] + " You are still invited for dinner at our home tonight.");
}

// removing all guests from array
newGuests.splice(0, newGuests.length);
console.log(newGuests);

console.log()







// ********************************************  Answer to Question-18
console.log('*************** Answer to Question-18')
let myPlaces = ['Dubai', 'America', 'Canada', 'United Kingdom', 'Turkey'];
console.log(myPlaces);

// sorting without changing the original array
let mySortedPlaces;
mySortedPlaces = myPlaces.slice(0, myPlaces.length); // create clone of array
mySortedPlaces.sort()
console.log(mySortedPlaces);

// printing original array
console.log(myPlaces);

// reverse sorting without changing the original array
let myReverseSortedPlaces;
myReverseSortedPlaces = myPlaces.slice(0, myPlaces.length); // create clone of array
myReverseSortedPlaces.sort()
myReverseSortedPlaces.reverse();
console.log(myReverseSortedPlaces);

// printing original array
console.log(myPlaces);

// reversing the original array
myPlaces.reverse();
console.log(myPlaces);

// reversing the original array back to original order
myPlaces.reverse();
console.log(myPlaces);

// sorting the origianl array
myPlaces.sort();
console.log(myPlaces);

// reverse soritng the origianl array
myPlaces.reverse();
console.log(myPlaces);

console.log()






// ********************************************  Answer to Question-19
console.log('*************** Answer to Question-19')
let guestsCounter = 0;
for (let guestCounter = 0; guestCounter < newGuests.length; guestCounter++) {
    if (newGuests[guestCounter][1] == 'living')
        guestsCounter++;
}
console.log('We are inviting ' + guestsCounter + " guests for dinner tonight.")
console.log()






// ********************************************  Answer to Question-20
console.log('*************** Answer to Question-20')
let myFavPlaces = ['Dubai', 'America', 'Canada', 'United Kingdom', 'Turkey'];
console.log(myFavPlaces);
console.log()



// ********************************************  Answer to Question-21
console.log('*************** Answer to Question-21')
let car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
console.log()






// ********************************************  Answer to Question-22
console.log('*************** Answer to Question-22')
let errorIndex = 10;
console.log(myFavPlaces[errorIndex])

let correctIndex = 4;
console.log(myFavPlaces[correctIndex])

console.log()






// ********************************************  Answer to Question-23
console.log('*************** Answer to Question-23')

// first 5 conditional tests that are true
let myCar = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(myCar == 'subaru')

let myNum = 5;
console.log("Is myNum == 5? I predict True.")
console.log(myNum == 5);

console.log("Is myNum < 8? I predict True.")
console.log(myNum < 8);

console.log("Is myNum > 4? I predict True.")
console.log(myNum > 4);

console.log("Is myNum > 3 AND myNum <10 ? I predict True.")
console.log(myNum > 3 && myNum < 10);

// next 5 conditional tests that are false
console.log("Is car == 'toyota'? I predict False.")
console.log(myCar == 'toyota')

console.log("Is myNum == 7? I predict False.")
console.log(myNum == 7);

console.log("Is myNum > 8? I predict False.")
console.log(myNum > 8);

console.log("Is myNum < 1? I predict False.")
console.log(myNum < 1);

console.log("Is myNum > 19 OR myNum < 2 ? I predict False.")
console.log(myNum > 19 || myNum < 2);

console.log()






// ********************************************  Answer to Question-24
console.log('*************** Answer to Question-24')

//  Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.")
console.log(myCar == 'subaru')
console.log("Is car == 'toyota'? I predict False.")
console.log(myCar == 'toyota')

// Tests using the lower case function
console.log("Is car == 'subaru'? I predict True.")
console.log(myCar.toLowerCase() == 'subaru')
console.log("Is car == 'toyota'? I predict False.")
console.log(myCar.toLowerCase() == 'toyota')

//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is myNum == 5? I predict True.")
console.log(myNum == 5);
console.log("Is myNum == 7? I predict False.")
console.log(myNum == 7);
console.log("Is myNum > 4? I predict True.")
console.log(myNum > 4);
console.log("Is myNum > 8? I predict False.")
console.log(myNum > 8);
console.log("Is myNum < 8? I predict True.")
console.log(myNum < 8);
console.log("Is myNum < 1? I predict False.")
console.log(myNum < 1);
console.log("Is myNum <= 5? I predict True.")
console.log(myNum <= 5);
console.log("Is myNum >=8 1? I predict False.")
console.log(myNum >= 8);

// Tests using "and" and "or" operators
console.log("Is myNum > 3 AND myNum <10 ? I predict True.")
console.log(myNum > 3 && myNum < 10);
console.log("Is myNum > 19 OR myNum < 2 ? I predict False.")
console.log(myNum > 19 || myNum < 2);

// Test whether an item is in a array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
console.log('does fruits list contain Mango')
console.log(fruits.includes('Mango'))

// Test whether an item is not in a array
console.log('does fruits list contain Cherry')
console.log(fruits.includes('Cherry'))

console.log()






// ********************************************  Answer to Question-25
console.log('*************** Answer to Question-25')

//  Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let playerPoints = 0;
let alienColor = 'green';
if (alienColor == 'green') {
    playerPoints += 5;
    console.log("player just earned 5 points.")
}

// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alienColor == 'green') {
    playerPoints = 5;
    console.log("player just earned 5 points.")
}
else {

}
console.log()






// ********************************************  Answer to Question-26
console.log('*************** Answer to Question-26')

// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alienColor == 'green') {
    playerPoints += 5;
    console.log("player just earned 5 points for shooting the alien")
}
else {
    console.log("the player just earned 10 points.")
}

// Write one version of this program that runs the if block and another that runs the else block.
alienColor = 'red'
if (alienColor == 'green') {
    playerPoints += 5;
    console.log("player just earned 5 points for shooting the alien")
}
else {
    console.log("the player just earned 10 points.")
}

console.log()






// ********************************************  Answer to Question-27
console.log('*************** Answer to Question-27')

// for green color
alienColor = 'green'
if (alienColor == 'green') {
    playerPoints += 5;
    console.log("player earned 5 points.")
}
else {
    if (alienColor == 'yellow') {
        playerPoints += 10;
        console.log("player earned 10 points.")
    }
    else {
        if (alienColor == 'red') {
            playerPoints += 15;
            console.log("player earned 15 points.")
        }

    }
}


// for yellow color
alienColor = 'yellow'
if (alienColor == 'green') {
    playerPoints += 5;
    console.log("player earned 5 points.")
}
else {
    if (alienColor == 'yellow') {
        playerPoints += 10;
        console.log("player earned 10 points.")
    }
    else {
        if (alienColor == 'red') {
            playerPoints += 15;
            console.log("player earned 15 points.")
        }

    }
}


// for yellow red
alienColor = 'red'
if (alienColor == 'green') {
    playerPoints += 5;
    console.log("player earned 5 points.")
}
else {
    if (alienColor == 'yellow') {
        playerPoints += 10;
        console.log("player earned 10 points.")
    }
    else {
        if (alienColor == 'red') {
            playerPoints += 15;
            console.log("player earned 15 points.")
        }

    }
}
console.log()






// ********************************************  Answer to Question-28
console.log('*************** Answer to Question-28')
let age = 12;
if (age < 2) {
    console.log('person is baby');
}
else {
    if (age >= 2 && age < 4) {
        console.log('person is toddler');
    }
    else {
        if (age >= 4 && age < 13) {
            console.log('person is kid');
        }
        else {
            if (age >= 13 && age < 20) {
                console.log('person is teenager');
            }
            else {
                if (age >= 20 && age < 65) {
                    console.log('person is adult');
                }
                else {
                    if (age >= 65) {
                        console.log('person is elder');
                    }
                }
            }            
        }
    }
}
console.log()


// ********************************************  Answer to Question-29
console.log('*************** Answer to Question-29')
let favorite_fruits = ['Mango', 'Apple', 'Banana']

if (favorite_fruits.includes('Banana')) {
    console.log('You really like bananas!')
}

if (favorite_fruits.includes('Apple')) {
    console.log('You really like Apples!')
}

if (favorite_fruits.includes('Banana')) {
    console.log('You really like Bananas!')
}

if (favorite_fruits.includes('Cherry')) {
    console.log('You really like Cherries!')
}

if (favorite_fruits.includes('Grap')) {
    console.log('You really like Graps!')
}
console.log()





// ********************************************  Answer to Question-30
console.log('*************** Answer to Question-30')
let usernamesList = ['admin', 'rehan', 'shams', 'aleena', 'ayan']
let username = 'admin'

for (let usernamesCounter = 0; usernamesCounter < usernamesList.length; usernamesCounter++) {
    if (usernamesList[usernamesCounter] == username) {
        if (usernamesList[usernamesCounter] == 'admin') {
            console.log('Hello admin, would you like to see a status report?')
        }
        else {
            console.log('Hello ' + usernamesList[usernamesCounter] + ', thank you for logging in again.')
        }
    }
}
console.log()





// ********************************************  Answer to Question-31
console.log('*************** Answer to Question-31')

//Remove all of the usernames from your array, and make sure the correct message is printed.
usernamesList.splice(0,usernamesList.length)

// If the list is empty, print the message We need to find some users!
if (usernamesList.length > 0) {
    for (let usernamesCounter = 0; usernamesCounter < usernamesList.length; usernamesCounter++) {
        if (usernamesList[usernamesCounter] == username) {
            if (usernamesList[usernamesCounter] == 'admin') {
                console.log('Hello admin, would you like to see a status report?')
            }
            else {
                console.log('Hello ' + usernamesList[usernamesCounter] + ', thank you for logging in again.')
            }
        }
    }
}
else {
    console.log('We need to find some users!')
}
console.log()






// ********************************************  Answer to Question-32
console.log('*************** Answer to Question-32')
let current_users = ['rehan', 'shams', 'ayan', 'aleena', 'sumera'];
let new_users = ['bot', 'wave', 'rehan', 'plus', 'sumera'];
let existingUserFoundFlag;
for (let newUsersCounter = 0; newUsersCounter < new_users.length; newUsersCounter++) {
    existingUserFoundFlag = false;
    for (let currentUsersCounter = 0; currentUsersCounter < current_users.length; currentUsersCounter++) {
        if (new_users[newUsersCounter].toLowerCase() == current_users[currentUsersCounter].toLowerCase()) {
            existingUserFoundFlag = true;
            break;
        }
    }

    if (existingUserFoundFlag == true) {
        console.log(new_users[newUsersCounter] + " --> username need to be changed.");
    }
    else {
        console.log(new_users[newUsersCounter] + " --> username is available");
    }

}
console.log()






// ********************************************  Answer to Question-33
console.log('*************** Answer to Question-33')
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ordinalNumbersCounter = 0; ordinalNumbersCounter < ordinalNumbers.length; ordinalNumbersCounter++) {
    if (ordinalNumbers[ordinalNumbersCounter] == 1) {
        console.log(ordinalNumbers[ordinalNumbersCounter] + 'st');
    }
    else {
        if (ordinalNumbers[ordinalNumbersCounter] == 2) {
            console.log(ordinalNumbers[ordinalNumbersCounter] + 'nd');
        }
        else {
            if (ordinalNumbers[ordinalNumbersCounter] == 3) {
                console.log(ordinalNumbers[ordinalNumbersCounter] + 'rd');
            }
            else {
                console.log(ordinalNumbers[ordinalNumbersCounter] + 'th');
            }
        }
    }
}
console.log()






// ********************************************  Answer to Question-34
console.log('*************** Answer to Question-34')
let pizza = ['Fajita', 'Italiano', 'Chiken Tikka']
for (let pizzaCounter = 0; pizzaCounter < pizza.length; pizzaCounter++) {
    console.log('I like ' + pizza[pizzaCounter] + " pizza.")
}
console.log('Indulging in the tantalizing flavors of Italiano pizza is a culinary journey that awakens my taste buds with each savory bite. The perfect harmony of a thin, crispy crust adorned with rich tomato sauce, melted mozzarella, and a medley of authentic toppings creates a symphony of taste that captivates my senses. With every slice, I savor the essence of Italy, celebrating the artistry and passion that transforms a simple dish into a gastronomic masterpiece.');
console.log('I really love pizza!')
console.log()






// ********************************************  Answer to Question-35
console.log('*************** Answer to Question-35')
let animals = ['Cat', 'Dog', 'Pigeon']
for (let animalCounter = 0; animalCounter < animals.length; animalCounter++) {
    console.log('A ' + animals[animalCounter] + " would make a great pet.")
}
console.log('Cats, with their independent charm, dogs, with their loyal companionship, and pigeons, with their gentle cooing presence, each bring a unique and delightful dimension to the realm of great pets. Any of these animals would make a great pet!');
console.log('I really love pizza!')
console.log()
console.log()






// ********************************************  Answer to Question-36
console.log('*************** Answer to Question-36')
function make_shirt(message, size) {
    console.log('The size of shirt is ' + size + ', with a message printed on it as \"' + message + '\"');
}
make_shirt('If you loyok up in sk, you are looking in past.', 'Large')
console.log()






// ********************************************  Answer to Question-37
console.log('*************** Answer to Question-37')
function make_shirt2(message, size = 'Large') {
    switch (size) {
        case 'Large':
        case 'Medium':
            console.log('The size of shirt is ' + size + ', with a message printed on it as \"I love TypeScript.\"');
            break;
        case "Small":
            console.log('The size of shirt is ' + size + ', with a message printed on it as \"' + message + '\"');
            break;
    }
}
make_shirt2('');
make_shirt2('', 'Medium');
make_shirt2('If you loyok up in sk, you are looking in past.', 'Small');
console.log()






// ********************************************  Answer to Question-38
console.log('*************** Answer to Question-38')
function describe_city(city, country = 'Pakistan') {
    console.log(city + " is in " + country);
}
describe_city('Karachi')
describe_city('Islamabad', 'Pakistan')
describe_city('Dehli', 'India')
console.log()






// ********************************************  Answer to Question-39
console.log('*************** Answer to Question-39')
function city_country(city, country) {
    console.log(city + ", " + country);
}
city_country('Karachi', 'Pakistan')
city_country('Islamabad', 'Pakistan')
city_country('Dehli', 'India')
console.log()






// ********************************************  Answer to Question-40
console.log('*************** Answer to Question-40')
function make_album(artist_name, album_title, number_of_tracks = 1) {
    return { artistName: artist_name, albumTitle: album_title, numberOfTraks: number_of_tracks };
}
console.log(make_album('Ali Haider', 'Dastaan'))
console.log(make_album('Atif Aslam', 'Jal Pari'))
console.log(make_album('Abrar-ul-Haq', 'Billo De Ghar', 10))
console.log()






// ********************************************  Answer to Question-41
console.log('*************** Answer to Question-41')
let magicians = ['Shin Lim', 'Chris Angel', 'David Blaine']
function show_magicians(magicians) {
    for (let magiciansCounter = 0; magiciansCounter < magicians.length; magiciansCounter++)
        console.log(magicians[magiciansCounter]);
}
show_magicians(magicians);
console.log()






// ********************************************  Answer to Question-42
console.log('*************** Answer to Question-42')
function make_great(magicians) {
    for (let magiciansCounter = 0; magiciansCounter < magicians.length; magiciansCounter++)
        magicians[magiciansCounter] = 'Great ' + magicians[magiciansCounter];
}
make_great(magicians)
show_magicians(magicians);
console.log()






// ********************************************  Answer to Question-43
console.log('*************** Answer to Question-43')
magicians = ['Shin Lim', 'Chris Angel', 'David Blaine']
function make_great2(magicians) {
    let newArray = [];
    for (let magiciansCounter = 0; magiciansCounter < magicians.length; magiciansCounter++) {
        newArray.push('Great ' + magicians[magiciansCounter]);
    }
    return newArray;
}
let newMagicians = make_great2(magicians);
show_magicians(magicians);
show_magicians(newMagicians);
console.log()






// ********************************************  Answer to Question-44
console.log('*************** Answer to Question-44')
let sandwichItems = ['Tomatoes', 'Lettuce', 'Onions', 'Cheez']
function show_sandwich(sandwichItems, ...sauce) {
    console.log('Sandwich includes:')
    for (let sandwitchItmesCounter = 0; sandwitchItmesCounter < sandwichItems.length; sandwitchItmesCounter++) {
        console.log(sandwichItems[sandwitchItmesCounter])
    }

    console.log('Sandwich Sauce:')
    for (let argumentCounter = 1; argumentCounter < arguments.length; argumentCounter++) {
        console.log(arguments[argumentCounter]);
    }
}
show_sandwich(sandwichItems, 'Mayonnaise')
show_sandwich(sandwichItems, 'Mayonnaise', 'Mustard')
show_sandwich(sandwichItems, 'Mayonnaise', 'Mustard', 'Ketchup')
console.log()






// ********************************************  Answer to Question-45
console.log('*************** Answer to Question-45')
function make_car(manufacturer, model, color='white', features='', ...keywords) {
    var keywordsString = '';
    for (let argumentCounter = 4; argumentCounter < arguments.length; argumentCounter++) {
        keywordsString += arguments[argumentCounter] + ', ';
    }

    var carObject = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        features:features,
        keywords:keywordsString
    }

    return carObject;
}
console.log(make_car('Toyota', '2024'));
console.log(make_car('Toyota', '2024', 'black'));
console.log(make_car('Toyota', '2024', 'black', 'Automatic'));
console.log(make_car('Toyota', '2024', 'Gray', 'Manuel', 'TOYOTA', 'COROLLA'));

console.log()
