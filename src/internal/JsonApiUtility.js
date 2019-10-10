
/**
 * @param {Response} res
 * @param {boolean} expectJsonBody
 *
 * @return {object} JSON payload
 */
function validateAndTransformJsonApiResponse(res) {
    if (!res.ok) {
        let message = 'Malformed API Response';

        try {
            // Try to parse out an error message from a
            // JSON:API error payload
            const err = res.json();
            message = err.errors[0].title;
        } catch (e) {
            // Malformed response from the endpoint, a developer
            // will need to debug this on their own.
            // The final error thrown will just be a generic message.
        }

        throw new Error(message);
    }

    // If a No Content response, just return an empty payload.
    if (res.status === 204) {
        return {};
    }

    // TODO: More payload validation stuff (is json, has appropriate fields, etc)
    return res.json();
}

export {
    validateAndTransformJsonApiResponse,
};
