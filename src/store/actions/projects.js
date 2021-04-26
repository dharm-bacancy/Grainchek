export const CREATE_PROJECT = 'CREATE_PROJECT';
//export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export const createProject = (pname,description,tag) => {
    return {
        type: CREATE_PROJECT,
        projectData: {
            pname,
            description,
            tag
        }
    }
};

// export const updateProject = (id,pname,description,tag) => {
//     return {
//         type: CREATE_PROJECT,
//         pid: id,
//         productData: {
//             pname,
//             description,
//             tag
//         }
//     }
// };