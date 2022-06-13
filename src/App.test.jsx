import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Form } from 'components/Form/Form';

describe('App', () => {
  it('render component', () => {
    render(<Form sendMessage={() => {}} />);
  });
});
