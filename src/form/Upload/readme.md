
### Examples

#### Existing Files
```jsx
import React, { useState } from 'react';
import { useMockFileUploader, useRESTFileUploader } from '@osuresearch/ui';

//const { register } = useMockFileUploader();
const { register } = useRESTFileUploader('http://localhost:8000/upload-rest-mock.php');

const [files, setFiles] = useState([
    {
        id: '12345',
        name: 'Foo bar.txt',
        size: 1024*1024*5,
        download: 'https://example.com/download',
        canDelete: false,
        summary: 'Summary for foo bar',
    },
    {
        id: '456789',
        name: 'Video.mp4',
        size: 1024*1024*1024*8,
        canDelete: false,
    },
    {
        id: 'foobar',
        name: 'eagle-i Training Handbook (v.3.0.2)-5.pdf',
        size: 1024*1024*1024*2,
        canDelete: true,
    },
    {
        id: 'report-2222',
        name: 'On_demand_report_2022-05-03T21 32 00.978Z_77bf0320-cb28-11ec-8069-eb63a947fb43.png',
        size: 1024*1024*25,
        canDelete: true,
        summary: 'Uploaded by mcmanning.1 on 1/1/2023',
    }
]);

const allowedTypes = ["application/pdf", "text/plain", "image/png"];

const maxFileSize = 10 * 1024 * 1024;

<Upload id="uploader-with-existing">
    <Upload.Label>Upload</Upload.Label>

    <Upload.Input
        multiple
        value={files}
        onChange={setFiles}
        allowedTypes={allowedTypes}
        maxFileSize={maxFileSize}
        {...register()}
    />

    <Upload.Help>
        These files have already been provided by a backend API.
        This uploader only supports PDFs, text files, and PNGs.
    </Upload.Help>
</Upload>
```

#### Integration with React Hook Form (v7)

```jsx
import { useForm, Controller } from 'react-hook-form';
import { useMockFileUploader } from '@osuresearch/ui';

const { register } = useMockFileUploader();
const { control, watch, formState: { errors } } = useForm({
    mode: 'onBlur'
});

<>
<Upload
    id="rhf-upload"
    error={errors["rhf-upload"] && "Please upload a file"}
    required
>
    <Upload.Label>
        Search for a file to upload
    </Upload.Label>

    <Controller
        name="rhf-upload"
        control={control}
        rules={{ required: true }}
        render={({
            field: { onChange, onBlur, value, name }
        }) => (
                <Upload.Input
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    {...register()}
                />
            )
        }
    />

    <Upload.Help>
        Help content here.
    </Upload.Help>

    <Upload.Error />
</Upload>

<hr/>
Value: {JSON.stringify(watch('rhf-upload'))}
</>
```

### Subcomponents
