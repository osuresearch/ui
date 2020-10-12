import Action from './Action';
/** Typical nullable type container because TS doesn't include one by default. */
export declare type Nullable<T> = T | null;
export declare type OnValueChangeDelegate<T> = (newValue: Nullable<T>, oldValue: Nullable<T>, bind: IFieldBind<T>) => void;
export declare type OnStateChangeDelegate<T> = (bind: IFieldBind<T>) => void;
export declare type SetFieldBindValue<T> = (newValue: Nullable<T>) => void;
export declare type IFieldBindFactory<T> = () => IFieldBind<T>;
export interface IFieldBind<T> {
    /** Unique ID of the form field */
    id?: string;
    /** Name of the form field, for retrieval through FormData */
    name?: string;
    /** Instructional labeling for the field */
    instructions?: string;
    /** Additional help text to display alongside the field */
    help?: string;
    /** Validation error to display for the field */
    error?: string;
    /** Validation success message to display for the field */
    success?: string;
    /** Should the field be loaded as read-only */
    readOnly?: boolean;
    /** Should the field be indicated as (soft) required */
    required?: boolean;
    /** Get/update the field value */
    value: Nullable<T>;
    /** Initial value for isDiff */
    initialValue?: Nullable<T>;
    /** Delegates to notify when the value changes */
    onValueChange: Action<OnValueChangeDelegate<T>>;
    /** Delegates to notify when the state changes */
    onStateChange: Action<OnStateChangeDelegate<T>>;
}
export declare type FormFieldBindProp<T> = {
    /**
     * Data binding strictly typed to `<T>`
     */
    bind: IFieldBind<T>;
    /**
     * Callback with the signature `(newValue: T, oldValue: T) => void`
     */
    onChange?: OnValueChangeDelegate<T>;
};
export declare type FormFieldSpreadProps<T> = {
    /** Unique ID of the form field */
    id: string;
    /** Name of the form control. Submitted with the form as part of a name/value pair. */
    name?: string;
    /** Validation error to display for the field */
    error?: string;
    /** Validation success message to display for the field */
    success?: string;
    /** Should the field be loaded as read-only */
    readOnly?: boolean;
    /** Should the field be indicated as (soft) required */
    required?: boolean;
    /**
     * Callback with the signature `(newValue: T, oldValue: T) => void`
     */
    onChange?: OnValueChangeDelegate<T>;
};
/** Base props for a form field. Handles binds + spreading the bind as props */
export declare type FormFieldProps<T> = FormFieldBindProp<T> | FormFieldSpreadProps<T>;
/** Base props for a FieldSet */
export declare type FormFieldSetProps = {
    /**
     * Name of the FieldSet. Submitted with the form as part of a name/value pair. The value of the `name` prop will cascade down to be the `name` in each child component in the `<FieldSet>`.
     */
    name: string;
    /** Validation error to display for the FieldSet */
    error?: string;
    /** Validation success message to display for the FieldSet */
    success?: string;
    /** Should the fields in the FieldSet be loaded as read-only */
    readOnly?: boolean;
    /** Should the fields in the FieldSet be indicated as (soft) required */
    required?: boolean;
};
/**
 * Generic concrete implementation of IFieldBind.
 *
 * Manages delegates for state and value change events and safely
 * fields with appropriate read/write accessors.
 */
export declare class FieldBind<T> implements IFieldBind<T> {
    /** Unique ID of the form field */
    id?: string;
    /** Name of the form field, for retrieval through FormData */
    name?: string;
    /** Instructional labeling for the field */
    instructions?: string;
    /** Additional help text to display alongside the field */
    help?: string;
    /** Validation error. */
    get error(): string;
    /** On update, notify all onStateChange delegates */
    set error(value: string);
    /** Validation success */
    get success(): string;
    /** On update, notify all onStateChange delegates */
    set success(value: string);
    /** Should the field be loaded as read-only. */
    get readOnly(): boolean;
    /** On update, notify all onStateChange delegates */
    set readOnly(value: boolean);
    /** Should the field be required */
    get required(): boolean;
    /** On update, notify all onStateChange delegates */
    set required(value: boolean);
    /** The backing value for the field. */
    get value(): Nullable<T>;
    /**On update, track previous value and notify all onChange delegates */
    set value(value: Nullable<T>);
    protected _error: string;
    protected _success: string;
    protected _readOnly: boolean;
    protected _required: boolean;
    protected _value: Nullable<T>;
    protected _previousValue: Nullable<T>;
    readonly onValueChange: Action<OnValueChangeDelegate<T>>;
    readonly onStateChange: Action<OnStateChangeDelegate<T>>;
}
/**
 * Null object pattern for field binds
 */
export declare class NullFieldBind<T> extends FieldBind<T> {
    get value(): Nullable<T>;
    set value(newValue: Nullable<T>);
}
export interface IFormFieldContext<T> {
    bind: IFieldBind<T>;
}
/**
 * Mock implementation of a stricter bind (e.g. data that comes from a backend API).
 * Used for the readme.md examples since we can't write Typescript in examples
 */
export declare class MyMockStringBind extends FieldBind<string> {
    readonly id: string;
    readonly name: string;
    readonly instructions: string;
    readonly help: string;
    constructor(name: string, value: string);
}
//# sourceMappingURL=types.d.ts.map