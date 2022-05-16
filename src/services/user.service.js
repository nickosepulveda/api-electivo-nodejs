const UserService = () => {
    const findAllUsers = () => {
        return [];
    }

    // create new user on database
    const createUser = (data) => {
        return data;
    }
    // find user on database
    const findUser = (id) => {
        let user = {
            id
        };
        return user;
    }
    // update user on database
    const updateUser = (id) => {
        let user = {};
        return user;
    }
    // delete user on database
    const deleteUser = (id) => {
        let user = {};
        return user;
    }

    return {
        findAll: findAllUsers,
        create: createUser,
        find: findUser,
        update: updateUser,
        delete: deleteUser
    }
}

module.exports = UserService();