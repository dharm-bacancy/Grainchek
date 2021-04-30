const baseUrl = 'http://18.223.66.20:3000'

const projectEndPoint = baseUrl + '/project'
const userEndPoint = baseUrl + '/user'

//user
export const  loginUrl = userEndPoint + '/login'
export const logoutUrl = userEndPoint + '/logout'

//project
export const createProjectUrl = projectEndPoint + '/create'
export const fetchProjectsUrl = (pageNo,searchTerm = "",perPage=5) => {
    const query1 = `perPage=${perPage}`
    const query2 = `pageNo=${pageNo}`
    const query3 = `title=${searchTerm}`
    const and = '&'
    const queries = query1 + and + query2 + and + query3

    return projectEndPoint + '/list?' + queries
}