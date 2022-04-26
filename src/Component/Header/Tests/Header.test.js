import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from '../Header';

describe('Header', () => {
  it('should render the h1 with the text "Tesla or tesla"', () => {
    render(<Header/>);

    const h1 = screen.getByRole('heading', {name: /Tesla/i});
    const h1lower = screen.getByRole('heading', {name: /tesla/i});
    expect(h1).toBeInTheDocument()
    expect(h1lower).toBeInTheDocument()
  })

  it('should render the text of button', () => {
    render(<Header />);

    expect(screen.getByRole('button', {
      name: /Menu/i,
    })).toBeInTheDocument()
  })

  it('should call function on click', () => {
    const fn = jest.fn();
    render(<Header onClick={fn}/>);

    userEvent.click(screen.getByRole('button', {
      name: /Menu/i,
    }));

    userEvent.click(screen.getByRole('button', {
      name: /Menu/i,
    }));

    expect(fn).toBeCalledTimes(1);
  })
})