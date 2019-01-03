import React from 'react'
import { shallow } from 'enzyme';
import XInput from '../xcomponents/input/src/index.js';

describe('x-input',() => {
  test('className', () => {
    const wrapper = shallow(<XInput></XInput>);
    expect(wrapper.hasClass('x-input x-input-md')).toBe(true);
  })
  test('className', () => {
    const size = 'lg';
    const wrapper = shallow(<XInput size={size}></XInput>);
    expect(wrapper.hasClass(`x-input x-input-${size}`)).toBe(true);
  })
  test('placeholder', () => {
    const placeholder = 'placeholder';
    const wrapper = shallow(<XInput placeholder={placeholder}></XInput>);
    expect(wrapper.prop('placeholder')).toBe(placeholder);
  })
  test('onChange', () => {
    const onChangeFn = jest.fn();
    const value = 'value';
    const wrapper = shallow(<XInput onChange={onChangeFn}></XInput>);
    wrapper.simulate('change', { target: { value } });
    expect(onChangeFn).toBeCalled();
    expect(onChangeFn).toHaveBeenCalledWith(value);
    // expect(wrapper.prop('value')).toBe(undefined);
  })
})