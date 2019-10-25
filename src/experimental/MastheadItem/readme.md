
```js
import { Masthead } from '@oris/ui';

<Masthead
    theme="protocol"
    title="2020B0123 - A Study on the Benefits of Board Games on Developer Productivity and Cooperation"
    subtitle="Ohio State Behavioral IRB"
>
    <MastheadItem title="Status" content="Open" />
    <MastheadItem title="Expiration" content="10/7/2020" />
    <MastheadItem title="Principal Investigator" content="Chase McManning" />
    <MastheadItem
        title="Co-Investigators"
        fill={true}
        content="Show List"
        extraContent="Neil Coplin, Jen Otterbein, Aniel Santos, Ryan Mayo, Matthew Reynolds"
    />

    <MastheadItem title="Study" content="Buck-IRB" href="https://google.com" />
</Masthead>
```

If you have a large number of items, it would be better to create a sidebar with the content instead.
