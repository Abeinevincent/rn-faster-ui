import React, { useState } from 'react';
import { CFlatList } from 'react-native-fast-ui';
import { CustomButton } from './reusable/CustomButton';

type ItemData = {
  id: string;
  title: string;
};

const CFlatListUsage = () => {
  const [DATA] = useState<ItemData[]>([
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ]);

  return (
    <CFlatList
      nestedScrollEnabled={true}
      bgc={'teal'}
      h={'100%'}
      p={30}
      br={10}
      data={DATA}
      renderItem={({ item }) => <CustomButton item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CFlatListUsage;
