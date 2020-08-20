import React from 'react';
import Action from './Action';

/** Typical nullable type container because TS doesn't include one by default. */
export type Nullable<T> = T | null;

export type OnValueChangeDelegate<T> = (newValue: Nullable<T>, oldValue: Nullable<T>, bind: IFieldBind<T>) => void;
export type OnStateChangeDelegate<T> = (bind: IFieldBind<T>) => void;
export type SetFieldBindValue<T> = (newValue: Nullable<T>) => void;

export type IFieldBindFactory<T> = () => IFieldBind<T>;

export interface IFieldBind<T> {
    /** Unique ID of the form field */
    id?: string

    /** Name of the form field, for retrieval through FormData */
    name?: string

    /** Instructional labeling for the field */
    instructions?: string

    /** Additional help text to display alongside the field */
    help?: string

    /** Validation error to display for the field */
    error?: string

    /** Validation success message to display for the field */
    success?: string

    /** Should the field be loaded as read-only */
    readOnly?: boolean

    /** Should the field be indicated as (soft) required */
    required?: boolean

    /** Get/update the field value */
    value: Nullable<T>

    /** Initial value for isDiff */
    initialValue?: Nullable<T>

    /** Delegates to notify when the value changes */
    onValueChange: Action<OnValueChangeDelegate<T>>

    /** Delegates to notify when the state changes */
    onStateChange: Action<OnStateChangeDelegate<T>>
}

export type FormFieldBindProp<T> = {
    bind: IFieldBind<T>;
    onChange?: OnValueChangeDelegate<T>
}

export type FormFieldSpreadProps<T> = {
    /** Unique ID of the form field */
    id: string

    /** Validation error to display for the field */
    error?: string

    /** Validation success message to display for the field */
    success?: string

    /** Should the field be loaded as read-only */
    readOnly?: boolean

    /** Should the field be indicated as (soft) required */
    required?: boolean

    onChange?: OnValueChangeDelegate<T>
}

/** Base props for a form field. Handles binds + spreading the bind as props */
export type FormFieldProps<T> = FormFieldBindProp<T> | FormFieldSpreadProps<T>;

export class FieldBind<T> implements IFieldBind<T> {
    /** Unique ID of the form field */
    public id?: string

    /** Name of the form field, for retrieval through FormData */
    public name?: string

    /** Instructional labeling for the field */
    public instructions?: string

    /** Additional help text to display alongside the field */
    public help?: string

    /** Validation error. */
    public get error(): string {
        return this._error;
    }

    /** On update, notify all onStateChange delegates */
    public set error(value: string) {
        this._error = value;
        this.onStateChange.dispatch(this);
    }

    /** Validation success */
    public get success(): string {
        return this._success;
    }

    /** On update, notify all onStateChange delegates */
    public set success(value: string) {
        this._success = value;
        this.onStateChange.dispatch(this);
    }


    /** Should the field be loaded as read-only. */
    public get readOnly(): boolean {
        return this._readOnly;
    }

    /** On update, notify all onStateChange delegates */
    public set readOnly(value: boolean) {
        this._readOnly = value;
        this.onStateChange.dispatch(this);
    }

    /** The backing value for the field. */
    public get value(): Nullable<T> {
        return this._value;
    }

    /**On update, track previous value and notify all onChange delegates */
    public set value(value: Nullable<T>) {
        this._previousValue = this._value;
        this._value = value;

        console.debug('set value', this);
        this.onValueChange.dispatch(value, this._previousValue, this);
    }

    protected _error: string = '';
    protected _success: string = '';
    protected _readOnly: boolean = false;
    protected _value: Nullable<T> = null;
    protected _previousValue: Nullable<T> = null;

    public readonly onValueChange: Action<OnValueChangeDelegate<T>> = new Action<OnValueChangeDelegate<T>>();
    public readonly onStateChange: Action<OnStateChangeDelegate<T>> = new Action<OnStateChangeDelegate<T>>();
}

/**
 * Null object pattern for field binds
 */
export class NullFieldBind<T> extends FieldBind<T> {
    public get value(): Nullable<T> {
        throw new Error('Cannot get value of NullFieldBind. This indicates improper usage of this placeholder class instance.');
    }
    public set value(newValue: Nullable<T>) {
        throw new Error('Cannot set value of NullFieldBind. This indicates improper usage of this placeholder class instance.');
    }
}

export interface IFormFieldContext<T> {
    bind: IFieldBind<T>
}

/**
 * Mock implementation of a stricter bind (e.g. data that comes from a backend API). 
 * Used for the readme.md examples since we can't write Typescript in examples
 */
export class MyMockStringBind extends FieldBind<string> {
    public readonly id: string;
    public readonly name: string;
    public readonly instructions: string;
    public readonly help: string;

    constructor(name: string, value: string) {
        super();

        this.id = name;
        this.name = name;
        this.instructions = 'Mock instructions constant';
        this.help = 'Mock help constant';

        this._value = value;
    }
}
