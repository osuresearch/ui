
// Mock for the expected API resource
const CommentApiMock = () => new Promise((resolve) => {
    const resource = {
        data: [
            {
                type: 'Comment',
                id: 1,
                attributes: {
                    section: 'Section 1',
                    author: 'Chase McManning',
                    date: '2019-11-03T19:28:36+0000',
                    message: 'Comment about section 1'
                }
            },
            {
                type: 'Comment',
                id: 2,
                attributes: {
                    section: 'Section 1',
                    author: 'Chase McManning',
                    date: '2019-11-03T19:30:12+0000',
                    message: 'Another comment about section 1'
                }
            },
            {
                type: 'Comment',
                id: 3,
                attributes: {
                    section: 'Section 3',
                    author: 'Chase McManning',
                    date: '2019-11-03T19:38:00+0000',
                    message: 'Section 3 is pretty garbage, ngl'
                }
            }
        ]
    };

    setTimeout(() => resolve(resource), 100);
});

const AmendmentCommentsMock = () => new Promise((resolve) => {
    const resource = {
        data: [
            {
                type: 'Comment',
                id: 1,
                attributes: {
                    section: 'Section 1',
                    author: 'Chase McManning',
                    date: '2019-11-03T19:28:36+0000',
                    message: 'Comment about section 1'
                }
            },
            {
                type: 'Comment',
                id: 2,
                attributes: {
                    section: 'Section 1',
                    author: 'Chase McManning',
                    date: '2019-11-03T19:30:12+0000',
                    message: 'Another comment about section 1'
                }
            },
            {
                type: 'Comment',
                id: 3,
                attributes: {
                    section: 'Section 3',
                    author: 'Chase McManning',
                    date: '2019-11-03T19:38:00+0000',
                    message: 'Section 3 is pretty garbage, ngl'
                }
            }
        ]
    };

    setTimeout(() => resolve(resource), 100);
});

export {
    CommentApiMock,
    AmendmentCommentsMock
};
