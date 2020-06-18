
import { Comment } from './types';
import ReviewManager from '../ReviewManager';

const SourceMock = `
<html>
    <head>
        <title>Test Document</title>
    </head>
    <body>
        <div id="section-1" data-comment-section="Section 1">
            <h1>Section 1</h1>

            <p id="block-1" data-comment-block>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta vulputate auctor. Vestibulum id commodo ipsum, ut posuere lorem. 
            </p>

            <p>
                Something that you cannot comment on
            </p>

            <p id="block-2" data-comment-block>
                Mauris a libero vestibulum, maximus tellus et, luctus orci. Etiam quis dolor at odio lobortis vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
            </p>
        </div>

        <div id="section-2" data-comment-section="Section 2">
            <h1>Section 2</h1>

            <p id="inline-1" data-comment-inline>
                Curabitur at nulla in massa viverra lacinia dignissim vel dui. Donec convallis magna ut efficitur porta. Ut fringilla leo dui, quis dictum nibh cursus a. Praesent eget sagittis quam. Maecenas auctor iaculis elit, vitae auctor mauris tincidunt a. Praesent id justo mi. Quisque nunc sapien, commodo sed scelerisque at, scelerisque ut nibh.
            </p>
            
            <p>
                Something that you cannot comment on
            </p>
            
            <p id="inline-2" data-comment-inline>
                Mauris quis tempus arcu. Curabitur facilisis quis neque at maximus. Aenean quis aliquam orci. Pellentesque pellentesque nulla aliquam magna accumsan accumsan. Phasellus ut velit fringilla, vestibulum urna et, interdum magna. Curabitur sit amet eleifend erat. Morbi vel tortor vel dolor viverra viverra ut ut magna. Nunc mollis nunc eu finibus interdum. Proin tristique quam orci. Nullam ante tellus, ullamcorper porttitor posuere ut, porttitor sed elit. Integer at lobortis ex, non posuere ex.
            </p>
        </div>
        
        <div id="section-3" data-comment-section="Section 3">
            <h1>Section 3</h1>

            <p id="inline-3" data-comment-inline>
                Nullam sodales, nisi id ultrices vulputate, urna lacus pellentesque felis, in finibus felis turpis et nunc. In hac habitasse platea dictumst. Nullam lobortis vulputate neque eget tincidunt. Integer elementum, odio at tincidunt consectetur, felis nulla dictum nibh, et gravida massa nisl id nibh. Sed quis sapien blandit, feugiat ex sit amet, ultricies ante. Vivamus semper metus quis rhoncus blandit. Donec molestie felis pellentesque leo viverra hendrerit. Suspendisse dictum eros non neque eleifend, at condimentum dolor dictum. Nam luctus nisl tristique vestibulum mollis. Phasellus eu massa metus.
            </p>
        </div>
    </body>
</html>
`;

// return number in [min, max)
function rnd(min: number, max: number): number {  
    return Math.floor(Math.random() * (max - min) + min); 
}

// Pick a random date [1, hours) before now 
function rndBackwardDate(hours: number): Date {
    const rndHours = -1 * rnd(1, hours);
    
    const ret = new Date();
    ret.setTime(ret.getTime() + rndHours * 3600000);
    return ret;
}

// Randomly forward the date by [1, 30) minutes
function rndForwardDate(date: Date) {
    const rndMinutes = rnd(1, 30);
    
    const ret = new Date(date);
    ret.setTime(ret.getTime() + rndMinutes * 60000);

    return ret;
}

/**
 * Generates mock comments and injects them into the manager.
 * 
 * @param manager Target to feed comments into
 * @param density   Arbitrary value to indicate how many comments to generate.
 *                  This is not an exact value but bigger density = more comments.
 */
function generateMockComments(manager: ReviewManager, density: number) {
    const potentialOwners = ['mcmanning.1', 'coplin.7', 'ray.30', 'buckeye.1', 'siperstein.1'];

    const chanceToBeABlockComment = 70; // % chance to generate a block comment instead of an inline
    const chanceToHaveReplies = 30; // % chance a comment will have replies added
    const chanceToHaveRepliesDegradation = 10; // subtraction to the chance by each reply added

    const owners = [manager.defaultAuthor];
    owners.push('mcmanning.1 (Secondary Reviewer)');
    owners.push('coplin.7 (IRB Analyst)');
    owners.push('buckeye.1 (IRB Analyst)');

    const comments: Comment[] = [];

    const sections = manager.getSections();

    while (comments.length < density) {
        // Generate a random context for the comment
        let el: HTMLElement | undefined = undefined;
        let rangeStart = -1;
        let rangeEnd = -1;

        const section = sections[rnd(0, sections.length)];
        if (rnd(0, 101) < chanceToBeABlockComment) {
            const blocks = section.el.querySelectorAll('[data-comment-block]');
            const block = blocks[rnd(0, blocks.length)] as HTMLElement;
            if (!block) continue;

            el = block;
        } else {
            const inlines = section.el.querySelectorAll('[data-comment-inline]');
            const inline = inlines[rnd(0, inlines.length)] as HTMLElement;
            if (!inline) continue;

            // innerText can add a LOT of whitespace noise that's ultimately ignored
            // by the selection range algorithms. To play it safe, we keep it under
            // half the actual length. This won't really match up with the expected
            // ranges that we'd use in comments - but it doesn't matter since this
            // is just for mocking. 
            const estimatedTextLength = inline.innerText.length / 2; 

            el = inline;
            rangeStart = rnd(0, estimatedTextLength);
            rangeEnd = rnd(rangeStart, Math.min(rangeStart + 200, estimatedTextLength));
        }

        // Add comment
        const id = 'mock-comment-' + comments.length;
        comments.push({

        });

        // Add replies

    }
}

// function generateMockComments(
//     sections: string[], 
//     count: number, 
//     includeOtherPeople: boolean, 
//     includeReplies: boolean
// ) {
//     const RANGE = 3;
//     const MAX_BACKWARD_HOURS = 24 * 2; // up to 2 days in the past

//     const owners = ['(me)']
//     if (includeOtherPeople) {
//         owners.push('mcmanning.1');
//         owners.push('coplin.7');
//         owners.push('buckeye.1');
//     }

//     const comments: Comment[] = [];

//     sections.forEach((section) => {
//         const total = rnd(count - RANGE, count + RANGE);

//         // Random owner 
//         const owner = owners[rnd(0, owners.length)];

//         // Created at some point in the past
//         const created = rndBackwardDate(MAX_BACKWARD_HOURS);

//         // 1:9 chance of being edited by the user
//         const updated = rnd(0, 10) === 0 ? rndForwardDate(created) : 0;

//         for (let i = 0; i < total; i++) {
//             const id = comments.length;
//             comments.push({
//                 id,
//                 owner,
//                 created, 
//                 updated,

//             });
//         }
//     });

//     // for each section
//     // generate count +- some value comments

// }

export {
    SourceMock,
    generateMockComments
}
