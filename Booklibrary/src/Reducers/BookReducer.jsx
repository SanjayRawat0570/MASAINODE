const initialState ={
    books:[
        book1={
            title : "",
            author : "",
            isRead : false,
            id : math.random()
        },

    ]
    
}
const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, action.payload]
        case 'MARK_AS_READ':
            return 
            state.map(book => book.id === action.payload.id ? {...book, isRead: true} : book)

        case 'FILTER_BOOK':
            return state.filter(book => book.isRead === true) 
        default:
            return state
    }
}