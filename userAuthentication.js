const fs = require('fs');
const bcrypt = require('bcrypt');
const readline = require('readline');
const usersFilePath = 'users_file.json';

// Load users from the json file
const loadUsers = () => {
    if (!fs.existsSync(usersFilePath)) {
        return { users: [] };
    }
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
};

// Save user in json
const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// new user
const registerUser  = async (email, username, password) => {
    const usersData = loadUsers();
    const existingUser  = usersData.users.find(user => user.username === username);

    if (existingUser ) {
        console.log('User  already exists. Please choose a different username.');
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    usersData.users.push({email, username, password: hashedPassword });
    saveUsers(usersData);
    console.log('User  registered successfully!');
};

// Validate login credentials
const validateLogin = async (username, password) => {
    const usersData = loadUsers();
    const user = usersData.users.find(user => user.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        return true;
    }
    return false;
};

// Display the menu after login
const displayMenu = () => {
    console.log('Menu:');
    console.log('1. View Profile');
    console.log('2. Logout');
    console.log('3. Exit');
};

// Handle user input
const Input = (rl) => {
    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                console.log('This is your profile');
                console.log(`Name: `);
                console.log(`E-mail: `)
                Input(rl);
                break;
            case '2':
                console.log('You are logged out');
                rl.close();
                break;
            case '3':
                console.log('You are exiting');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
                Input(rl);
                break;
        }
    });
};


const main = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Select (1) to Register or (2) to Login', async (choice) => {
        if (choice === '1') {
        rl.question('Enter your e-mail:', (email) => { 
                rl.question('Enter your preferred username: ', (username) => {
                    rl.question('Enter your password: ', async (password) => {
                        await registerUser (email, username, password);
                        rl.close();
                    });
                });
        });
        } else if (choice === '2') {
            rl.question('Enter your username: ', (username) => {
                rl.question('Enter your password: ', async (password) => {
                    const isValid = await validateLogin(username, password);
                    if (isValid) {
                        console.log('Login is successful!');
                        displayMenu();
                        Input(rl);
                    } else {
                        console.log('Invalid username or password.');
                        rl.close();
                    }
                });
            });
        } else {
            console.log('Invalid choice. Please try again.');
            rl.close();
        }
    });
};


main();