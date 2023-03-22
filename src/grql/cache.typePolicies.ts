
const typePolicies = {
    Query: {
        fields: {
            users: {
                merge(existing = [], incoming: any[]) {
                    return [...incoming];
                },
            },
        },
    },
};


export default typePolicies