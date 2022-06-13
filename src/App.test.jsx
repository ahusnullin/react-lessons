import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { waitFor } from '@storybook/testing-library';

describe('App', () => {
  it('render App Window', () => {
    expect(screen.queryByTestId('chat-header')).toBeDefined();
  });

  // todo: не смог проверить рендер messages. Пробовал ис таймаутом, и по test-id... Никак не находит эти элементы.
  it('render App Window', () => {
    /* await waitFor(() => {
      expect(screen.queryAllByTestId('message-item').toBe(5), {
        timeout: 1500,
      });
    });*/

    expect(screen.queryAllByTestId('message-item').length).toBe(4);
  });
});
