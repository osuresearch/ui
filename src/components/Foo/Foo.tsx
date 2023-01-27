import React from 'react';

type FooProps = {
  bar: string;
};

export function Foo({ bar }: FooProps) {
  return <div>Foo {bar}</div>;
}
