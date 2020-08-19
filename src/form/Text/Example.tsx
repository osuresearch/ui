import React, { useState } from 'react';
import { MyMockStringBind } from '../../internal/FormCommon/types';

import Text from './';

function Example() {
    const bind = new MyMockStringBind('foo4', 'foo bar');

    const [value, setValue] = useState('');

    return (
        <div>
            {/* With `bind` prop */}
            <Text bind={bind}>
                <Text.Label />
                <Text.Input />
                <Text.Help />
            </Text>

            {/* More native implementation (still uses bind context for id, error, readOnly) */}
            <Text id="my-text-instance">
                <Text.Label>
                    I'm my own control!
                </Text.Label>

                <Text.Input
                    value={value}
                    name="name-on-the-input"
                    id="this-will-be-ignored"
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
            </Text>
        </div>
    )
}