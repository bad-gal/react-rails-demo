import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from '../app/javascript/components/HelloWorld';

describe('HelloWorld Component', () => {
  test('renders the greeting prop', () => {
    const greeting = 'Hello, World!';
    const { getByText } = render(<HelloWorld greeting={greeting} />);

    expect(getByText(`Greeting: ${greeting}`)).toBeInTheDocument();
  });
});
