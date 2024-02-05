import bcrypt from 'bcrypt';


const password = 'password';

// this creates the password
// bcrypt.hash(password, 11).then((result) => {
//     console.log('done!');
//     console.log({ result });
// });


bcrypt.compare(password, '$2b$11$E0I0wzY6D.BFKl5XQAKWlO5fy8CchLWgFFu7/5wwgljMQ0VpUoGu.')
.then((result) => {
    console.log({result: result});
})
;