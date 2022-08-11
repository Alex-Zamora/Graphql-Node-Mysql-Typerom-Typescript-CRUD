import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./queries/greeting";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./mutations/user";
import { GET_ALL_USERS, GET_USER } from './queries/user';

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutations",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
