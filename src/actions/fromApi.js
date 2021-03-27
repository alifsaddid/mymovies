import apiCall from './apiCall';

export const HTTP_METHODS = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
};

class ApiCallActionCreator {

    searchMovie(keyword, page) {
        return new apiCall(
            HTTP_METHODS.GET,
            `http://www.omdbapi.com/?apikey=77abc8e4&s=${keyword}&page=${page}`,
            null
        )
    }
    
    getMovieDetail(imdb) {
        return new apiCall(
            HTTP_METHODS.GET,
            `http://www.omdbapi.com/?apikey=77abc8e4&i=${imdb}`
        )
    }

}

const fromApi = new ApiCallActionCreator();

export default fromApi;