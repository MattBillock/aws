/**
 * A Lambda function that divides two operands
 */
exports.serverlessDivideHandler = async (event, context) => {
    // All log statements are written to CloudWatch
    var post_body = JSON.parse(event["body"])
    var lhs = parseInt(post_body["lhs"]);
    var rhs = parseInt(post_body["rhs"]);
    if(rhs == 0) {
        return {
            "body": "Error - divide by 0!",
            "statusCode": 403
        }
    }
    var result = lhs / rhs;
    return {
        "body": result,
        "statusCode": 200
    };
}
