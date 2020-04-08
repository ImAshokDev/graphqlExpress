const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

// dummy data
var books = [
  {name: 'book 1', genre: 'genre 1', id: '1'},
  {name: 'book 2', genre: 'genre 2', id: '2'},
  {name: 'book 3', genre: 'genre 3', id: '3'},
];

var author = [
  {name: 'ashok', age: '21', id: '1'},
  {name: 'khrist', age: '22', id: '2'},
  {name: 'yohan', age: '24', id: '3'},
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // code to get data from db/other source
        console.log(typeof args.id);
        return _.find(books, {id: args.id});
      },
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(author, {id: args.id});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
