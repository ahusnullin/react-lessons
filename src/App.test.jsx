import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { waitFor } from '@storybook/testing-library';
import {Form} from "components/Form/Form";


describe('App', () => {
    it('render component', () => {
        render(<Form sendMessage={() => {}} />);
    });
});