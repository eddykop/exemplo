const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {

    // USER RESOLVERS

     // Retorna a lista de usuários
    users: () => {
      return UserList;
    },

     // Retorna o usuário selecionado
    detailUser: (parent, args) => {
      const id_user = args.id_user;
      const user = _.find(UserList, { id_user: Number(id_user) });
      return user;
    },





    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },

    movie: (parent, args) => {
      const name_movie = args.name_movie;
      const movie = _.find(MovieList, { name_movie });
      return movie;
    },



  },


/*
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

*/


  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id_user;
      user.id_user = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteUser: (parent, args) => {
      const userId = args.id;
      _.remove(UserList, (user) => user.id_user === Number(userId));
      return null;
    },
  },
};

module.exports = { resolvers };