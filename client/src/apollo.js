import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";




const httpLink = new HttpLink({

  uri: "https://cors.io/?https://leetcode.com/graphql",

});


export const client = new ApolloClient({

  cache: new InMemoryCache(),

  link: ApolloLink.from([httpLink]),

});