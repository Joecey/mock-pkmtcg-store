// I'm lazy to setup a database for now, so I'll just use an array
const usersList = []

const addUser = ({ user, password }) => {
    const userExists = usersList.find((u) => u.user === user)
    if (userExists) {
        console.log('User already exists')
    }
    usersList.push({ user, password })
}

const isAuthenticated = ({ user, password }) => {
    const foundUser = usersList.find((u) => u.user === user && u.password === password)
    if (foundUser) {
        return true
    }
    return false
}

module.exports = { addUser, isAuthenticated }
