exports.handler = async (event) => {
    
    //Here is where we'll check our event
    console.log(JSON.stringify(event));
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Im running lambda locally'),
    };
    return response;
};
