import { GraphQLList, GraphQLString, GraphQLID, GraphQLBoolean } from "graphql";
import { Users } from "../../Entities/User";
import { userType } from "../typeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(userType),
  async resolve() {
    return await Users.find();
  },
};

export const GET_USER = {
  type: userType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, { id }: any) {
    return await Users.findOne({ where: { "id": id } });
  },
};