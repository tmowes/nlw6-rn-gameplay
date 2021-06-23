import React from 'react'
import { ScrollView } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { categories } from '../../utils/categories'
import { CategoryItem } from '../CategoryItem'
import { styles } from './styles'
import { CategoryListProps } from './types'

export const CategoryList = (props: CategoryListProps) => {
  const {
    selectedId,
    categorySelection,
    addStyle = {},
    hasCheckBox = false,
    ...attrs
  } = props

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: RFValue(40) }}
    >
      {categories.map(({ id, label, icon }) => (
        <CategoryItem
          key={id}
          label={label}
          icon={icon}
          isSelected={selectedId === id}
          onPress={() => categorySelection(id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  )
}
