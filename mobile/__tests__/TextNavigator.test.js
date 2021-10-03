jest.useFakeTimers();

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import TextNavigator from '../screens/Texts/TextNavigator';
import { Provider } from 'react-redux';

describe('<TextNavigator />', () => {
  const mockStore = configureStore([]);
  it('has 1 child', () => {
    const store = mockStore({ categories: [{ categoryId: 0, name: 'Adab' }] });

    const tree = renderer
      .create(
        <Provider store={store}>
          <TextNavigator />
        </Provider>,
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
