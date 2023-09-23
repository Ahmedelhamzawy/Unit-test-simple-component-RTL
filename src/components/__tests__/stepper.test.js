import {render,screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Stepper from '../Stepper';
describe("<Stepper>", () => {
it('should render todo component',()=>{
    render(<Stepper/>);
})

it("stepper should default to 0", () => {
    render(<Stepper />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('0');
})

it('supports a "count" prop to set the value', () => {
    render(<Stepper count={100}/>);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('100');  
})

it("when the increment button is pressed, the counter is incremented", () => {
    render(<Stepper />);
    const increment = screen.getByTestId("increment");
    userEvent.click(increment);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("1");
});
it("when the decrement button is pressed, the counter is decremented", () => {
    render(<Stepper />);
    const decrement = screen.getByTestId("decrement");
    userEvent.click(decrement);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("-1");
});

it("clicking + fires a change event with the incremented value", () => {
    const onChangeSpy = jest.fn();
    render(<Stepper onChange={onChangeSpy} />);
    const increment = screen.getByTestId("increment");
    userEvent.click(increment);    
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
});
});