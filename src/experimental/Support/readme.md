```js
import { Support } from "@oris/ui/experimental";

<Support
    app="My App" /* Required */
    kbUrl="https://orhelp.osu.edu/support/..." /* Required */
    title="Help / Feedback" /* Optional */
    meta={{my: "obj"}} /* Optional metadata */
    endpoint="" /* Optional, only include if not using default endpoint */
    isFixed={false} /* Do not use - for demo purposes only */
/>;
```

React implementation of the Support button/form originally from [PI Portal](https://orapps.osu.edu/piportal/).

Users click on button fixed on bottom right of page, which shows a form within a modal. The user selects a feedback type (help or suggestion) and is provided instructions for providing such feedback. Instructions for users seeking help include a link to the knowledgebase (kb) for the application and the phone number to the helpdesk.
