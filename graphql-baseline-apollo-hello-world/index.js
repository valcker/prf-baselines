"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    name: String!\n    surname: String!\n    age: Int!\n  }\n\n  type Query {\n    hello: String\n    getAllUsers: [User]\n  }\n"], ["\n  type User {\n    name: String!\n    surname: String!\n    age: Int!\n  }\n\n  type Query {\n    hello: String\n    getAllUsers: [User]\n  }\n"])));
var myPlugin = {
    // Fires whenever a GraphQL request is received from a client.
    requestDidStart: function (requestContext) {
        console.log("Request started! Query:\n" + requestContext.request.query);
        return {
            // Fires whenever Apollo Server will parse a GraphQL
            // request to create its associated document AST.
            parsingDidStart: function (requestContext) {
                console.log("Parsing started!");
            },
            // Fires whenever Apollo Server will validate a
            // request's document AST against your GraphQL schema.
            validationDidStart: function (requestContext) {
                console.log("Validation started!");
            }
        };
    }
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs,
    mocks: true
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
var templateObject_1;
