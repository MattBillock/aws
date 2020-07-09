/**
 * A Lambda function that multiplies two operands
 */
exports.serverlessMultiplyHandler = async (event, context) => {
    // All log statements are written to CloudWatch
    var post_body = JSON.parse(event["body"])
    var lhs = parseInt(post_body["lhs"]);
    var rhs = parseInt(post_body["rhs"]);
    var result = lhs * rhs;
    return {
        "body": result,
        "statusCode": 200
    };
}
