import React from 'react';
import Action from './Action';

/** Typical nullable type container because TS doesn't include one by default. */
export type Nullable<T> = T | null;

export type OnChangeFormField<T> = (newValue: Nullable<T>, oldValue: Nullable<T>, bind: FieldBind<T>) => void;
export type SetFieldBindValue<T> = (newValue: Nullable<T>) => void;

export type IFieldBindFactory<T> = () => IFieldBind<T>;

export interface IFieldBind<T> {
    /** Unique ID of the form field */
    id?: string

    /** Name of the form field, for retrieval through FormData */
    name?: string

    /** Should the field be loaded as read-only */
    readOnly?: boolean

    /** Validation error to display for the field */
    error?: string

    /** Instructional labeling for the field */
    instructions?: string

    /** Additional help text to display alongside the field */
    help?: string

    /** Get/update the field value */
    value: Nullable<T> 

    /** Event delegates for when the field changes */
    onChange: Action<OnChangeFormField<T>>

    // TODO: Maybe a onStateChange action delegate list
    // and wrap all the other properties as getters/setters that 
    // trigger the delegates (e.g. calling onStateChange for bind.readOnly = true)
    // That way React components can also register to state changes
    // and trigger re-renders. 

    // TODO: .hashCode() so we can track an overall picture of changes in an instance.
    // However, if we implement onStateChange action delegates, probably wouldn't
    // need this any longer? 
}

/** Base props for a form field. Handles binds + spreading the bind as props */
export type FormFieldProps<T> = {
    /**
     * Optional bind object instance.
     * 
     * If not provided, the props (id, name, etc) will be used instead.
     */
    bind?: IFieldBind<T>
        
    /** Unique ID of the form field */
    id?: string

    /** Name of the form field, for retrieval through FormData */
    name?: string

    /** Should the field be loaded as read-only */
    readOnly?: boolean

    /** Validation error to display for the field */
    error?: string

    /** Instructional labeling for the field */
    instructions?: string

    /** Additional help text to display alongside the field */
    help?: string

    /** Get/update the field value */
    value: Nullable<T>

    /**
     * Change callback when `bind || value` is updated. 
     */
    onChange?: OnChangeFormField<T>
}

export class FieldBind<T> implements IFieldBind<T> {
    /** Unique ID of the form field */
    public id?: string

    /** Name of the form field, for retrieval through FormData */
    public name?: string

    /** Should the field be loaded as read-only */
    public readOnly?: boolean

    /** Validation error to display for the field */
    public  error?: string

    /** Instructional labeling for the field */
    public instructions?: string

    /** Additional help text to display alongside the field */
    public help?: string

    /** Retrieve the field's value */
    public get value(): Nullable<T> {
        return this._value;
    }

    /** Update the field's value. This will notify all onChange delegates */
    public set value(newValue: Nullable<T>) {
        this._previousValue = this._value;
        this._value = newValue;

        console.debug('set value', this);
        this.onChange.dispatch(newValue, this._previousValue, this);
    }

    protected _value: Nullable<T> = null;
    protected _previousValue: Nullable<T> = null;

    /** Event delegates for when the field changes */
    public readonly onChange: Action<OnChangeFormField<T>> = new Action<OnChangeFormField<T>>();
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
