import React, { useState } from 'react';
import { CSelect, CText, CView } from 'rn-faster-ui';
import { xorBy } from 'lodash';

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Everton FC',
    id: 'EVE',
  },
  {
    item: 'Tottenham Hotspur FC',
    id: 'TOT',
  },
  {
    item: 'Chelsea FC',
    id: 'CHE',
  },
  {
    item: 'Liverpool FC',
    id: 'LIV',
  },
  {
    item: 'Arsenal FC',
    id: 'ARS',
  },

  {
    item: 'Leicester City FC',
    id: 'LEI',
  },
];

export function CSelectUsage() {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState<any>([]);

  function onMultiChange() {
    return (item: any) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

  function onChange() {
    return (val: any) => setSelectedTeam(val);
  }

  return (
    <CView m={30}>
      <CView w={100} ai="center">
        <CText fs={20} pb={20}>
          Demos
        </CText>
      </CView>
      <CText pb={10}>Select Demo</CText>
      <CSelect
        label="Select single"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
        listOptionProps={{ nestedScrollEnabled: true }}
      />
      <CView h={40} />
      <CText>MultiSelect Demo</CText>
      <CSelect
        label="Select multiple"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        listOptionProps={{ nestedScrollEnabled: true }}
      />
    </CView>
  );
}
