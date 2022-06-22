import axios from 'axios';

// file môi trường .env.development sẽ được webpack tai khi chạy ứng dụng và  nó được lưu trong process.env
// là một Obj ta có thể console.log(process.env) để xem ở bất cứ đâu
// và .env.developmen là chạy trên môi trường develoment khi chạy trên môi trường này thì nó sẽ ưu tiên file
// môi trường  này và tương tự nó có .env.production ... và trong các môi trường đó nó cũng sẽ ưu tiên file có
// tên theo môi trường đó ❤️❤️❤️❤️

axios
    .get('/users/search?q=hoaa&type=less', {
        params: {
            ID: 12345,
        },
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
