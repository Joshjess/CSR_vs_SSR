import { findByTestId, render, screen } from '@testing-library/react';
import Content from './Content';

describe('App', () => {
  it('renders without crashing', async () => {
    render(<Content environment="client" />);
    const fetchedText = await findByTestId('fetched-text');
  });
});
