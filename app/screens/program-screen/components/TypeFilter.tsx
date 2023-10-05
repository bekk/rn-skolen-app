import {Button} from 'app/components/Button'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const FILTER_LIST = [
  'Alle',
  'Prosess',
  'Tech(lett)',
  'Design',
  'Tech(tungt)',
  'Annet',
  'Forretning',
  'Soft skills',
] as const

export type Filter = (typeof FILTER_LIST)[number]

type TypeFilterProps = {
  onSelect: (_: Filter) => void
  selectedFilter: Filter
}

export function TypeFilter({onSelect, selectedFilter}: TypeFilterProps) {
  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {FILTER_LIST.map((filter, index) => {
        return (
          <FilterButton
            key={index}
            filterName={filter}
            onSelect={onSelect}
            selectedFilter={selectedFilter}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 32,
    marginRight: 10,
  },
})

type FilterButtonProps = {
  filterName: Filter
  onSelect: (_: Filter) => void
  selectedFilter: Filter
}

function FilterButton({
  filterName,
  onSelect,
  selectedFilter,
}: FilterButtonProps) {
  const isSelected = filterName === selectedFilter
  return (
    <Button onPress={() => onSelect(filterName)}>
      <Text
        key={filterName}
        style={[
          styles.text,
          {
            color: isSelected ? 'rgb(221, 255, 87)' : 'white',
            textDecorationLine: isSelected ? 'underline' : 'none',
          },
        ]}>
        {filterName}
      </Text>
    </Button>
  )
}
