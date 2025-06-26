export default {
  Query: {
    characters: (filters: Record<string, any>) => {
      console.log(JSON.stringify(filters));
      return {
        info: {
          count: 0,
          pages: 0,
          next: '',
          prev: '',
        },
        results: [],
      }
    },
    character: () => { },
  },
  Mutation: {
    clearCache: () => { },
  },
};
