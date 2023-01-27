import { ComponentMeta } from '@storybook/react';
import React, { FormEventHandler, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import {
  Button,
  CheckboxField,
  CheckboxSetField,
  Code,
  ComboBoxField,
  DateField,
  Divider,
  FormErrors,
  FormFieldBase,
  Group,
  Heading,
  Item,
  LookupField,
  NumberField,
  Paper,
  RadioSetField,
  SelectField,
  Stack,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  YesNoField
} from '../../src/components';
import { useRUIForm } from '../../src/hooks/useRUIForm';

export default {
  title: 'Examples / Forms'
} as ComponentMeta<any>;

export const Uncontrolled = (args: any) => {
  const [formData, setFormData] = useState<FormData>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    setFormData(new FormData(e.currentTarget));
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Heading level={1}>Kitchen Sink Form</Heading>
        <Paper p="md" withBorder>
          This is an example of an uncontrolled form. Use the browser&apos;s <Code>FormData</Code>{' '}
          class to transform form submission into something useful. Use the Storybook controls to
          set common state props across all form elements.
        </Paper>

        <FormErrors />

        <Group py="md" align="stretch" grow>
          <Stack align="stretch" gap="lg">
            <TextField name="textField" label="Text field" {...args} />
            <TextAreaField name="textAreaField" label="TextArea field" {...args} />
            <DateField name="dateField" label="Date field" {...args} />
            <NumberField locale="en-US" name="numberField" label="Number field" {...args} />
            <NumberField
              locale="en-US"
              name="currencyField"
              label="Number field - currency formatting"
              formatOptions={{
                style: 'currency',
                currency: 'USD',
                currencySign: 'accounting'
              }}
              step={1000}
              {...args}
            />

            <CheckboxField name="checkboxField" label="Checkbox field" {...args} />
            <YesNoField name="yesNoField" label="YesNo field" {...args} />
            <SwitchField name="switchField" label="Switch field" {...args} />
          </Stack>
          <Divider orientation="vertical" />
          <Stack align="stretch" gap="lg">
            <SelectField name="selectField" label="Select field" disabledKeys={['dx12']} {...args}>
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </SelectField>

            <ComboBoxField
              name="comboBoxField"
              label="ComboBox field"
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </ComboBoxField>

            <LookupField name="lookupField" label="Lookup field" disabledKeys={['dx12']} {...args}>
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </LookupField>

            <CheckboxSetField
              name="checkboxSetField"
              label="Checkbox set"
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </CheckboxSetField>

            <RadioSetField name="radioSetField" label="Radio set" disabledKeys={['dx12']} {...args}>
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </RadioSetField>
          </Stack>
        </Group>

        <Group w="100%" justify="end">
          <Button type="reset" variant="subtle">
            Reset
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Group>
      </form>

      <Text fw="bold">FormData</Text>
      <Code block>
        {formData
          ? JSON.stringify(Object.fromEntries(formData), undefined, 2)
          : 'Submit the form to view FormData'}
      </Code>
    </>
  );
};
Uncontrolled.argTypes = {
  description: 'string',
  errorMessage: 'string',
  isRequired: 'boolean',
  necessityIndicator: 'boolean',
  isReadOnly: 'boolean',
  isDisabled: 'boolean'
};

Uncontrolled.args = {
  description: '',
  isRequired: false,
  necessityIndicator: false,
  isReadOnly: false,
  isDisabled: false,
  errorMessage: ''
};

export const ReactHookForm7 = (args: any) => {
  const [formData, setFormData] = useState<FieldValues>();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, dirtyFields, touchedFields, defaultValues }
  } = useRUIForm({
    defaultValues: {
      textField: 'text value',
      textAreaField: 'text area value',
      dateField: '1989-08-14',
      numberField: 12345,
      currencyField: 1234567.89,
      checkboxField: true,
      yesNoField: '1',
      switchField: true,
      selectField: 'vulkan',
      comboBoxField: 'dx11',
      lookupField: 'vulkan',
      checkboxSetField: ['vulkan', 'metal'],
      radioSetField: 'metal'
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData(data);
  };

  const applyMockErrors = () => {
    setError('textField', { message: 'Text field requires additional thought' });
    setError('textAreaField', { message: 'Text area is not interesting enough' });
    setError('yesNoField', {
      message: 'Yes no should not be so decisive. Take a moment to ponder "maybe"'
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading level={1}>Kitchen Sink Form</Heading>
        <Paper p="md" withBorder>
          This is an example of a form integrated with React Hook Form 7. Use the Storybook controls
          to set common state props across all form elements.
        </Paper>

        <FormErrors errorMessages={errors} />

        <Group py="md" align="stretch" grow>
          <Stack align="stretch" gap="lg">
            <TextField label="Text field" {...register('textField')} {...args} />
            <TextAreaField label="TextArea field" {...register('textAreaField')} {...args} />
            <DateField
              label="Date field"
              {...register('dateField', { valueAsDate: true })}
              {...args}
            />
            <NumberField
              locale="en-US"
              {...register('numberField')}
              label="Number field"
              {...args}
            />
            <NumberField
              locale="en-US"
              {...register('currencyField')}
              label="Number field - currency formatting"
              formatOptions={{
                style: 'currency',
                currency: 'USD',
                currencySign: 'accounting'
              }}
              step={1000}
              {...args}
            />

            <CheckboxField label="Checkbox field" {...register('checkboxField')} {...args} />
            <YesNoField label="YesNo field" {...register('yesNoField')} {...args} />
            <SwitchField label="Switch field" {...register('switchField')} {...args} />
          </Stack>
          <Divider orientation="vertical" />
          <Stack align="stretch" gap="lg">
            <SelectField
              label="Select field"
              {...register('selectField')}
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </SelectField>

            <ComboBoxField
              {...register('comboBoxField')}
              label="ComboBox field"
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </ComboBoxField>

            <LookupField
              {...register('lookupField')}
              label="Lookup field"
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </LookupField>

            <CheckboxSetField
              {...register('checkboxSetField')}
              label="Checkbox set"
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </CheckboxSetField>

            <RadioSetField
              {...register('radioSetField')}
              label="Radio set"
              disabledKeys={['dx12']}
              {...args}
            >
              <Item key="ogl">OpenGL</Item>
              <Item key="dx11">DirectX 11</Item>
              <Item
                key="dx12"
                description="Not supported due to nobody understanding how the API works"
              >
                DirectX 12
              </Item>
              <Item key="metal">Metal</Item>
              <Item key="vulkan">Vulkan</Item>
            </RadioSetField>
          </Stack>
        </Group>

        <Group w="100%" justify="end">
          <Button type="reset" variant="subtle">
            Native reset
          </Button>
          {/* TODO: Reset probably doesn't work because we're setting defaultValue on everything
            to make elements uncontrolled. Maybe it makes more sense to force control over
            the entire form?
           */}
          <Button variant="subtle" onPress={() => reset()}>
            RHF7 reset()
          </Button>

          <Button variant="subtle" onPress={applyMockErrors}>
            Mock errors
          </Button>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Group>
      </form>

      <Text fw="bold">FieldValues</Text>
      <Code block>
        {formData ? JSON.stringify(formData, undefined, 2) : 'Submit the form to view FieldValues'}
      </Code>

      <Text fw="bold">formState.errors</Text>
      <Code block>{JSON.stringify(errors, undefined, 2)}</Code>

      <Text fw="bold">formState.touchedFields</Text>
      <Code block>{JSON.stringify(touchedFields, undefined, 2)}</Code>

      <Text fw="bold">formState.dirtyFields</Text>
      <Code block>{JSON.stringify(dirtyFields, undefined, 2)}</Code>

      <Text fw="bold">formState.defaultValues</Text>
      <Code block>{JSON.stringify(defaultValues, undefined, 2)}</Code>
    </>
  );
};

ReactHookForm7.argTypes = {
  description: 'string',
  // isRequired: 'boolean',
  // necessityIndicator: 'boolean',
  // isReadOnly: 'boolean',
  // isDisabled: 'boolean',
  layout: {
    control: 'select',
    options: ['default', 'horizontal']
  }
};

ReactHookForm7.args = {
  description: '',
  // isRequired: false,
  // necessityIndicator: false,
  // isReadOnly: false,
  // isDisabled: false,
  layout: 'default'
} as Partial<FormFieldBase<any>>;
