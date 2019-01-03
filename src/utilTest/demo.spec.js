import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Input from './index.js';

function noop() {};

describe('input', () => {
  test('sets the text prop as value', () => {
    const text = 'test';
    const wrapper = shallow(<Input text={text} onSave={noop} />);
    expect(wrapper.prop('value')).toBe(text);
    // expect(wrapper.prop('value')).toEqual(text);
  });

  test('uses the placeholder prop', () => {
    const placeholder = 'placeholder'
    const wrapper = shallow(<Input placeholder={placeholder} onSave={noop} />)
    expect(wrapper.prop('placeholder')).toBe(placeholder)
  });

  test('applies the right class names', () => {
    const wrapper = shallow(<Input editing newTodo onSave={noop} />)
    expect(wrapper.hasClass('edit new-todo')).toBe(true)
  })

  test('fires onSave on enter', () => {
    const onSave = jest.fn();
    const value = 'value';
    const wrapper = shallow(<Input onSave={onSave} />);
    wrapper.simulate('keydown', { target: { value }, which: 13 });
    expect(onSave).toHaveBeenCalledWith(value);
  })

  test('does not fire onSave on key down', () => {
    const onSave = jest.fn();
    const wrapper = shallow(<Input onSave={onSave} />);
    wrapper.simulate('keydown', { target: { value: '' } });
    expect(onSave).not.toBeCalled();
  })
  test('clears the value after save if new', () => {
    const value = 'value'
    const wrapper = shallow(<Input newTodo onSave={noop} />)
    wrapper.simulate('keydown', { target: { value }, which: 13 })
    expect(wrapper.prop('value')).toBe('')
  })
  test('updates the text on change', () => {
    const value = 'value';
    const wrapper = shallow(<Input onSave={noop} />);
    wrapper.simulate('change', { target: { value } });
    expect(wrapper.prop('value')).toBe(value);
  })
  test('fires onSave on blur if not new', () => {
    const onSave = jest.fn();
    const value = 'value';
    const wrapper = shallow(<Input onSave={onSave} />);
    wrapper.simulate('blur', { target: { value } });
    expect(onSave).toHaveBeenCalledWith(value)
  })
  test('does not fire onSave on blur if new', () => {
    const onSave = jest.fn();
    const wrapper = shallow(<Input newTodo onSave={onSave} />);
    wrapper.simulate('blur');
    expect(onSave).not.toBeCalled();
  })
  test('snapshots are awesome', () => {
    const component = renderer.create(<Input onSave={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
// 审查代码中的改动，或者执行 npm test -- -u 来更新代码