import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';
function loop () {}
describe('input', () => {
  test('value', () => {
    const text = 'text';
    const wrapper = shallow(<Input text={text} onSave={loop} />);
    expect(wrapper.prop('value')).toBe(text);
  });

  test('event', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Input onSave={fn} />);
    wrapper.simulate('keyDown', { target: { value: 'test' }, which: 13 });
    expect(fn).toHaveBeenCalledWith('test');
  });

  test('event1', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Input newTodo onSave={fn} />);
    wrapper.simulate('keyDown', { target: { value: 'test' }, which: 13 });
    expect(wrapper.prop('value')).toBe('');
  });
})