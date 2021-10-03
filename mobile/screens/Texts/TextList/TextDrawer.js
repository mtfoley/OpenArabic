import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TextListScreen } from './TextListScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../services/ApiService';

export function TextDrawer() {
  const Drawer = createDrawerNavigator();

  // @ts-ignore
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const fetchCategories = () => dispatch(getCategories());

  const categoryItems = categories.map((category) => (
    <Drawer.Screen
      name={category.name}
      component={TextListScreen}
      initialParams={{ category: category.name }}
      options={{ title: category.name, headerShown: true }}
      key={category.name}
    />
  ));

  useEffect(() => {
    fetchCategories();
  });

  return (
    <Drawer.Navigator initialRouteName="Texts">
      {categoryItems}
    </Drawer.Navigator>
  );
}
