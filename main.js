var fullName = 'tai'
console.log(fullName)

var a = 1;
var b = ++a * a--;

console.log(b); // Output: ?

var lastName = 'Bui';
var firstName = 'Long';
var fullName = firstName + lastName;

console.log(fullName) // Output: ?

var a = 1;
var b = -1;
var c = 0;
var d = 0;

var e = a <= b;
var f = c === d;
var g = a >= c;

console.log(e, f, g) // Output: ?

// Số chẵn là số khi chia cho 2 sẽ có phần dư là 0
// Số lẻ là số khi chia cho 2 sẽ có phần dư là 1

// Khai báo biến number, và gán trá trị cho biến number
var number = 13;

// Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
var remain = number % 2

// Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// Khai báo biến isOdd, và gán kết quả so sánh cho biến isOdd
var isOdd = remain === 1;

// In giá trị của biến isOdd ra cửa sổ console của trình duyệt
console.log(isOdd) // Output: ?

var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d); // Output: ?

var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e) // Output: ?

function showMessage(message) {
    console.log(message);
}

showMessage("Hi anh em F8!");

var emailKey = 'email';
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'sondn@fulltack.edu.vn',
    getName: function () {
        return this.name;
    }
};
// Function --> Phương thức / method
// Others --> Thuộc tính / property
console.log(myInfo.getName());

// Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}

var user = new User('Son', 'Đặng', 'Avatar 1');
var user2 = new User('Tân', 'Đặng', 'Avatar 2');
console.log(user.className);
console.log(user2.getClassName());

// Đối tượng Date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);

var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);

var date = 3;
switch (date) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
    // break;
    case 4:
        console.log('Hôm nay là thứ 4');
    // break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
}

// Toán tử 3 ngôi - Ternary operator
var course = {
    name: 'Javascript',
    coin: 250
}
// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     F
//     console.log('Miễn phí');
// }

var result = course.coin > 0 ? `${course.coin} coin` : "free"
console.log(result);

// For loop
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];
var arrayLength = myArray.length;
for
    (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    var total = 0;
    var arrTotal = orders.length;
    for (var i = 0; i < arrTotal; i++) {
        if (typeof orders[i].price === 'number') {
            total += orders[i].price;
        }
    }
    return total;
}

// Expected results:
console.log(getTotal(orders)) // Output: 8700000

function run(object) {
    const result = [];
    for (const key in object) {
        result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return result;
}
// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//Vòng lặp lồng nhau (Nested loop)
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}

//đệ quy
// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng
// 3 * 2 * 1 = 6
// 6 * 5 *4*3*2*1 = 720
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}
console.log(giaiThua(3));

let courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 250
    },
    {
        id: 2,
        name: "HTML & CSS",
        coin: 0
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0
    },
    {
        id: 4,
        name: "PHP",
        coin: 400
    },
    {
        id: 5,
        name: "ReactJs",
        coin: 500
    }
];

courses.forEach(function (value) {
    console.log(value);
});

let allIsFree = courses.every(function (value) {
    return value.coin === 0;
});

console.log(allIsFree);

let haveACourseFree = courses.some(function (value) {
    return value.coin === 0;
});

console.log(haveACourseFree);

let findFirstCourseFree = courses.find(function (value) {
    return value.coin === 0;
});

console.log(findFirstCourseFree);

let findAllFreeCourse = courses.filter(function (value) {
    return value.coin === 0;
})

console.log(findAllFreeCourse);

//mảng reduce
//Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
//Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports) {
    return sports.reduce((total, sport) => total + sport.gold, 0)
}



// Expected results:
console.log(getTotalGold(sports)) // Output: 23

// Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.

// Gợi ý
// Dùng phương thức filter để lấy ra những bộ phim do Christopher Nolan làm đạo diễn
// Dùng phương thức reduce để tính tổng điểm IMDB
// Tính điểm IMDB trung bình
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];
function calculateRating(arr) { let actor = arr.filter((item) => item.Director == "Christopher Nolan"); let count = actor.length; return actor.reduce((acc, curr) => { return parseFloat(acc + curr.imdbRating / count); }, 0) }


// Expected results
console.log(calculateRating(watchList)); // Output: 8.675


//reduce #3
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr) {
    return arr.reduce((init, [key, value]) => { init[key] = value; return init }, {})
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
    return cars.includes('Mercedes', 2);
}

console.log(checkCar(cars)); // Output: ?

//call back
function sumCb(a, b) { return a + b; }
function subCb(a, b) { return a - b; }
function divCb(a, b) { return a / b; }
function multiCb(a, b) { return a * b; }
function caculate(a, b, cb) { return cb(a, b); }

//Expected results
console.log(caculate(1, 2, sumCb));  // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

// Ở bài trước chúng ta đã được học cách tạo phương thức map2 
// hoạt động giống với phương thức map của Array.
// Bây giờ, các bạn hãy tạo ra phương thức myMap hoạt động tương tự phương thức map2 và map nhé.
Array.prototype.myMap = function (cb) {
    let result = [], arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        result.push(cb(this[i], i))
    }
    return result;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// Bây giờ, các bạn hãy tạo ra phương thức myFilter hoạt động tương tự phương thức filter2 và filter nhé.
Array.prototype.myFilter = function (callback, thisArgument) {
    let output = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback.call(thisArgument, this[index], index, this);
            if (result)
                output.push(this[index]);
        }
    }
    return output;
};

//Expected results:

//const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); //Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); //Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: [1, 2, 3, 4]

//Bây giờ, các bạn hãy tạo ra phương thức mySome hoạt động tương tự phương thức some2 và some nhé.
Array.prototype.mySome = function (cb) {
    var out = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                out = true;
            }
        }
    }
    return out;
}
//Expected results:

//const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); //Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); //Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: true

//Bây giờ, các bạn hãy tạo ra phương thức myEvery hoạt động tương tự phương thức every2 và every nhé.
Array.prototype.myEvery = function (cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (!result) {
                return false;
            }
        }
    }
    return true;
}
// Expected results

// const numbers = [1, 3, 3, 5];

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true

//DOM
var productsListElement = document.querySelector('div.products-list');
var firstProductElement = document.querySelector('div.product:first-child');
var buttonElements = document.getElementsByTagName('button');

// Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
// Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
// Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
// Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
document.querySelector('h1').setAttribute('title', 'F8 - Học lập trình để đi làm');

document.querySelector('h1').setAttribute('data-title', 'F8 - Học lập trình để đi làm');

document.querySelector('p a').setAttribute('href', 'https://fullstack.edu.vn/');

document.querySelector('p a').setAttribute('target', '_blank');


document.querySelector('.heading').innerText = ('F8 - Học lập trình để đi làm')

//InnerHTML
function render(html) {
    var ul = document.querySelector("ul");
    ul.innerHTML = html;
}

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)

// Các bạn hãy viết hàm render có 1 tham số courses, 
// hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var tul = document.querySelector('ul');
    var coursesList = courses.map(function (course) {
        return `<li>${course}</li>`
    })
    ul.innerHTML = coursesList.join('')
}

// render(courses)

//DOM CSS
document.querySelector('.red').style.backgroundColor = '#f00';
document.querySelector('p').style.color = '#f05123';

// Thực hành sử dụng ClassList #1

// Các bạn hãy thực hiện các yêu cầu dưới đây:

// Thêm class title vào thẻ h1
// Thay thế class sub-title ở thẻ p bằng class content
document.querySelector('h1').classList.add('title')
document.querySelector('p').classList.replace('sub-title', 'content')

// Thực hành sử dụng ClassList #2
// Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.
document.querySelectorAll('div').forEach((box) =>
    box.classList.add('box'))


//Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
var buttonElement = document.querySelector('button');

buttonElement.onclick = function () {
    buttonElement.style.color = '#fff'
}

// Ví dụ về callback hell và cách giải quyết bằng Promise
// Đây là ví dụ về callback hell trong truyền thuyết, và cách sử dụng Promise để giải quyết nó.

// Các bạn có thể thấy khi tạo ra 1 đoạn code callback hell sẽ dẫn đến khó đọc code, thay vì viết như thế, 
// chúng ta có thể áp dụng tính chất chuỗi (chain) của Promise để tạo ra 1 đoạn code dễ nhìn hơn mà vẫn đảm bảo đúng logic.
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });



















/*
Giới thiệu một số hàm built-in
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval
*/

/**
Giới thiệu về toán tử trong Javascript
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử logic - Logical I
*/

/** Toán tử số học
+   --> Cộng
-   --> Trừ
*   --> Nhân
**  --> Lũy thừa
/   --> Chia
%   --> Chia lấy số dư
++  --> Tăng 1 giá trị sô
--  --> Giảm 1 giá trị số
*/

/**
* Toán tử logic
* 1. && - And
* 2. || - Oг
* 3. ! - Not
*/

/*
Kiểu dữ liệu trong Javascript
1. Dữ liệu nguyên thủy Primitive Data
-Number
-String
-Boolean
-Undefined
-Null
-Symbol
2. Dữ liệu phức tạp Complex Data
-Function
- Object
*/

/*
1. Hàm?
-Một khối mã
-Làm 1 việc cụ thể
2. Loại hàm
-Built-in
-Tự định nghĩa
3. Tính chất
-Không thực thi khi định nghĩa
-Sẽ thực thi khi được gọi
-Có thể nhận tham số
-Có thể trả về 1 giá trị
4. Tạo hàm đầu tiên
*/

// Tham số hàm - Javascript cơ bản
/*
1. Tham số?
- Định nghĩa?
- Kiểu dữ liệu?
- Tính private?
- 1 tham số
- Nhiều tham số
2. Truyền tham số
-1 tham số
-Nhiều tham số
3. Arguments?
- Đối tượng arguments
- Giới thiệu vòng for
*/

/*
Các loại function
1. Declaration function
2. Expression function
3. Arrow function
*/

/*
CHUỖI TRONG JAVASCRIPT
1. Tạo chuỗi
Các cách tạo chuỗi
- Nên dùng cách nào? Lý do?
-Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
*/

/* Kiểu số (Number) trong Javascript
1. Tạo giá trị Number
- Các cách tạo
- Dùng cách nào? Tại sao?
Kiểm tra data type
2. Làm việc với Number
-To string
-To Fixed
*/

/* Mảng trong Javascript Array -
1. Tạo mảng
- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type?
2. Truy xuất mảng
- Độ dài mảng
- Lấy phần tử theo index
*/

/*
Làm việc với Array
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

/*
Vòng lặp - Loop
1. for Lặp với điều kiện đúng
2. for/in – Lập qua key của đối tượng
3. for/of Lặp qua value của đối tượng -
4. while Lặp khi điều kiện đúng
5. do/while Lập ít nhất 1 lần, sau đó - lặp khi điều kiện đúng
*/

/*
Array methods:
forEach()
every()
some()
find()
filter()
map()
reduce()
*/

// Callback?
// Là hàm (function) được truyền qua đối số
// khi gọi hàm khác
// 1. Là hàm
// 2. Được truyền qua đối số