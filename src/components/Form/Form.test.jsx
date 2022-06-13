import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { waitFor } from '@storybook/testing-library';
import {Form} from "components/Form/Form";


describe('Form', () => {
    it('Render submit button', () => {
        render(<Form sendMessage={() => {}} />);
        expect(screen.getByText(/Отправить/)).toBeInTheDocument();
    });
    it('Render textarea', () => {
        render(<Form sendMessage={() => {}} />);
        expect(screen.getByTestId('form-textarea')).toBeInTheDocument();
    });

    // todo: как протестировать то, что state меняется?

    it('Check sendMessage', async () => {
        const mockHandler = jest.fn();
        render(<Form sendMessage={() => {}} />);

        userEvent.keyboard('test');

        await userEvent.click(screen.getByText('Отправить'));
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
});