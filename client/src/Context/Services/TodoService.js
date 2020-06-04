export default {
    getTodos: () => {
        return fetch('/user/alltodos')
            .then(response => {
                if(response.status !== 401){ //401 is default unauthorized error in passport
                    return response.json().then(data => data);
                }
                else{
                    return {message: {msgBody: "Unauthorized"}, msgError: true};
                }
            });
    },

    postTodo: todo => {
        return fetch('/user/todo', {
            method: "post",
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            if(response.status !== 401){ //401 is default unauthorized error in passport
                return response.json().then(data => data);
            }
            else{
                return {message: {msgBody: "Unauthorized"}, msgError: true};
            }
        });
    }
}